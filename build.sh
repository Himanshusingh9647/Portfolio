#!/bin/bash
echo "Starting custom build process..."
npm ci
echo "Dependencies installed"
npm run build
echo "Build completed"
ls -la dist/
echo "Dist directory contents:"
ls -la dist/assets/
echo "Assets directory contents:"
