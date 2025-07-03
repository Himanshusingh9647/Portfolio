@echo off
setlocal enabledelayedexpansion

:: Docker Helper Script for Portfolio (Windows)

set "RED=[91m"
set "GREEN=[92m"
set "YELLOW=[93m"
set "BLUE=[94m"
set "NC=[0m"

:: Function to print colored output
:print_info
echo %BLUE%[INFO]%NC% %~1
goto :eof

:print_success
echo %GREEN%[SUCCESS]%NC% %~1
goto :eof

:print_warning
echo %YELLOW%[WARNING]%NC% %~1
goto :eof

:print_error
echo %RED%[ERROR]%NC% %~1
goto :eof

:: Help function
:show_help
echo.
echo 🐳 Portfolio Docker Helper Script
echo.
echo Usage: %~nx0 [COMMAND]
echo.
echo Commands:
echo   dev           Start development environment with hot reloading
echo   prod          Start production environment
echo   build         Build production Docker image
echo   build-dev     Build development Docker image
echo   stop          Stop all running containers
echo   clean         Remove all containers and images
echo   logs          Show container logs
echo   health        Check application health
echo   help          Show this help message
echo.
echo Examples:
echo   %~nx0 dev        # Start development server on port 3000
echo   %~nx0 prod       # Start production server on port 8080
echo   %~nx0 build      # Build production image
echo   %~nx0 stop       # Stop all containers
echo   %~nx0 clean      # Clean up Docker resources
echo.
goto :eof

:: Check if Docker is running
:check_docker
docker info >nul 2>&1
if errorlevel 1 (
    call :print_error "Docker is not running. Please start Docker first."
    exit /b 1
)
goto :eof

:: Development environment
:start_dev
call :print_info "Starting development environment..."
call :check_docker
docker-compose --profile dev up --build
call :print_success "Development environment started at http://localhost:3000"
goto :eof

:: Production environment
:start_prod
call :print_info "Starting production environment..."
call :check_docker
docker-compose --profile prod up --build -d
call :print_success "Production environment started at http://localhost:8080"
goto :eof

:: Build production image
:build_prod
call :print_info "Building production Docker image..."
call :check_docker
docker build -t portfolio-prod .
call :print_success "Production image built successfully"
goto :eof

:: Build development image
:build_dev
call :print_info "Building development Docker image..."
call :check_docker
docker build -f Dockerfile.dev -t portfolio-dev .
call :print_success "Development image built successfully"
goto :eof

:: Stop containers
:stop_containers
call :print_info "Stopping all containers..."
docker-compose down
call :print_success "All containers stopped"
goto :eof

:: Clean up Docker resources
:clean_up
call :print_warning "This will remove all portfolio containers and images"
set /p "confirm=Are you sure? (y/N): "
if /i "!confirm!"=="y" (
    call :print_info "Cleaning up Docker resources..."
    docker-compose down --rmi all --volumes --remove-orphans
    docker rmi portfolio-prod portfolio-dev 2>nul
    call :print_success "Docker resources cleaned up"
) else (
    call :print_info "Cleanup cancelled"
)
goto :eof

:: Show logs
:show_logs
call :print_info "Showing container logs..."
docker-compose logs -f
goto :eof

:: Health check
:health_check
call :print_info "Checking application health..."
curl -f http://localhost:8080/health >nul 2>&1
if errorlevel 1 (
    call :print_error "Application is not responding"
    exit /b 1
) else (
    call :print_success "Application is healthy"
)
goto :eof

:: Main script logic
if "%~1"=="" (
    call :print_error "No command specified"
    call :show_help
    exit /b 1
)

if "%~1"=="dev" (
    call :start_dev
) else if "%~1"=="prod" (
    call :start_prod
) else if "%~1"=="build" (
    call :build_prod
) else if "%~1"=="build-dev" (
    call :build_dev
) else if "%~1"=="stop" (
    call :stop_containers
) else if "%~1"=="clean" (
    call :clean_up
) else if "%~1"=="logs" (
    call :show_logs
) else if "%~1"=="health" (
    call :health_check
) else if "%~1"=="help" (
    call :show_help
) else if "%~1"=="--help" (
    call :show_help
) else if "%~1"=="-h" (
    call :show_help
) else (
    call :print_error "Unknown command: %~1"
    call :show_help
    exit /b 1
)
