#!/bin/bash

# Docker Helper Script for Portfolio

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Help function
show_help() {
    cat << EOF
🐳 Portfolio Docker Helper Script

Usage: $0 [COMMAND]

Commands:
  dev           Start development environment with hot reloading
  prod          Start production environment
  build         Build production Docker image
  build-dev     Build development Docker image
  stop          Stop all running containers
  clean         Remove all containers and images
  logs          Show container logs
  health        Check application health
  help          Show this help message

Examples:
  $0 dev        # Start development server on port 3000
  $0 prod       # Start production server on port 8080
  $0 build      # Build production image
  $0 stop       # Stop all containers
  $0 clean      # Clean up Docker resources

EOF
}

# Check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker first."
        exit 1
    fi
}

# Development environment
start_dev() {
    print_info "Starting development environment..."
    check_docker
    docker-compose --profile dev up --build
    print_success "Development environment started at http://localhost:3000"
}

# Production environment
start_prod() {
    print_info "Starting production environment..."
    check_docker
    docker-compose --profile prod up --build -d
    print_success "Production environment started at http://localhost:8080"
}

# Build production image
build_prod() {
    print_info "Building production Docker image..."
    check_docker
    docker build -t portfolio-prod .
    print_success "Production image built successfully"
}

# Build development image
build_dev() {
    print_info "Building development Docker image..."
    check_docker
    docker build -f Dockerfile.dev -t portfolio-dev .
    print_success "Development image built successfully"
}

# Stop containers
stop_containers() {
    print_info "Stopping all containers..."
    docker-compose down
    print_success "All containers stopped"
}

# Clean up Docker resources
clean_up() {
    print_warning "This will remove all portfolio containers and images"
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_info "Cleaning up Docker resources..."
        docker-compose down --rmi all --volumes --remove-orphans
        docker rmi portfolio-prod portfolio-dev 2>/dev/null || true
        print_success "Docker resources cleaned up"
    else
        print_info "Cleanup cancelled"
    fi
}

# Show logs
show_logs() {
    print_info "Showing container logs..."
    docker-compose logs -f
}

# Health check
health_check() {
    print_info "Checking application health..."
    if curl -f http://localhost:8080/health > /dev/null 2>&1; then
        print_success "Application is healthy"
    else
        print_error "Application is not responding"
        exit 1
    fi
}

# Main script logic
case "${1:-}" in
    dev)
        start_dev
        ;;
    prod)
        start_prod
        ;;
    build)
        build_prod
        ;;
    build-dev)
        build_dev
        ;;
    stop)
        stop_containers
        ;;
    clean)
        clean_up
        ;;
    logs)
        show_logs
        ;;
    health)
        health_check
        ;;
    help|--help|-h)
        show_help
        ;;
    "")
        print_error "No command specified"
        show_help
        exit 1
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac
