# Docker Setup Guide for Portfolio

## 🐳 Docker Configuration Overview

Your portfolio now includes complete Docker containerization with both development and production environments.

## 📁 Docker Files Created

1. **Dockerfile** - Production build with Nginx
2. **Dockerfile.dev** - Development build with hot reloading
3. **docker-compose.yml** - Multi-environment orchestration
4. **nginx.conf** - Custom Nginx configuration
5. **.dockerignore** - Excludes unnecessary files

## 🚀 Quick Start

### Production Build
```bash
# Build the Docker image
docker build -t portfolio-prod .

# Run the container
docker run -p 8080:80 portfolio-prod
```

### Development Build
```bash
# Build and run with Docker Compose
docker-compose --profile dev up --build

# Or build manually
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 3000:5173 -v $(pwd):/app portfolio-dev
```

## 🔧 Available Commands

### Using Docker Compose (Recommended)

```bash
# Development environment with hot reloading
docker-compose --profile dev up

# Production environment
docker-compose --profile prod up

# Default production (port 80)
docker-compose up

# Build and run
docker-compose up --build

# Run in background
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs -f
```

### Using Docker Commands

```bash
# Production
docker build -t portfolio .
docker run -p 8080:80 portfolio

# Development
docker build -f Dockerfile.dev -t portfolio-dev .
docker run -p 3000:5173 -v $(pwd):/app portfolio-dev

# List running containers
docker ps

# Stop container
docker stop <container_id>

# Remove container
docker rm <container_id>

# Remove image
docker rmi portfolio
```

## 🌐 Access URLs

- **Development**: http://localhost:3000
- **Production**: http://localhost:8080 (or http://localhost:80)

## 🏗️ Architecture

### Production Build (Multi-stage)
1. **Stage 1**: Node.js Alpine for building
   - Install dependencies
   - Build React app with Vite
   - Generate optimized static files

2. **Stage 2**: Nginx Alpine for serving
   - Copy built files to Nginx
   - Serve static files with optimized configuration
   - Handle client-side routing

### Development Build
- Node.js Alpine with hot reloading
- Volume mounting for live code changes
- Vite development server

## ⚙️ Configuration Features

### Nginx Configuration
- **Gzip compression** for better performance
- **Security headers** (XSS protection, CSRF protection)
- **Static asset caching** (1 year for immutable assets)
- **Client-side routing** support (React Router)
- **Health check endpoint** at `/health`

### Docker Optimization
- **Multi-stage builds** for smaller production images
- **Alpine Linux** for minimal image size
- **Layer caching** for faster rebuilds
- **Proper .dockerignore** to exclude unnecessary files

## 🔒 Security

- Non-root user in containers
- Security headers configured
- No sensitive data in images
- Minimal attack surface with Alpine

## 📊 Performance

- **Gzip compression** reduces file sizes
- **Static asset caching** improves load times
- **Optimized Nginx** configuration
- **Small image size** (~15MB production)

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**
   ```bash
   # Check if port is in use
   lsof -i :8080
   
   # Use different port
   docker run -p 3001:80 portfolio
   ```

2. **Permission issues**
   ```bash
   # On Linux/Mac, fix permissions
   sudo chown -R $USER:$USER .
   ```

3. **Build failures**
   ```bash
   # Clear Docker cache
   docker builder prune
   
   # Rebuild without cache
   docker build --no-cache -t portfolio .
   ```

4. **Hot reloading not working**
   ```bash
   # Ensure volume mounting is correct
   docker run -p 3000:5173 -v "$(pwd):/app" -v /app/node_modules portfolio-dev
   ```

## 🚢 Deployment Options

### 1. Local Development
```bash
docker-compose --profile dev up
```

### 2. Production Server
```bash
docker-compose up -d
```

### 3. Cloud Deployment
- Push to Docker Hub
- Deploy to AWS ECS, Google Cloud Run, Azure Container Instances
- Use with Kubernetes

### 4. CI/CD Integration
```yaml
# Example GitHub Actions
- name: Build Docker image
  run: docker build -t portfolio .

- name: Push to registry
  run: docker push portfolio
```

## 📈 Monitoring

### Health Check
```bash
curl http://localhost:8080/health
```

### Container Stats
```bash
docker stats
```

### Logs
```bash
docker logs <container_id>
```

## 🎯 Benefits

✅ **Consistent Environment** - Same setup across development and production  
✅ **Easy Deployment** - Single command deployment  
✅ **Scalability** - Easy to scale with orchestration tools  
✅ **Isolation** - No conflicts with host system  
✅ **Performance** - Optimized Nginx configuration  
✅ **Security** - Containerized with security headers  

Your portfolio is now fully containerized and ready for deployment anywhere Docker is supported! 🚀
