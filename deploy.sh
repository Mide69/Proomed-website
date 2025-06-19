#!/bin/bash

# Deployment script for Proomed Website
# This script should be run on the EC2 instance

CONTAINER_NAME="proomed-website"
IMAGE_NAME="$1/proomed-website:latest"

echo "Starting deployment..."

# Pull latest image
echo "Pulling latest Docker image..."
docker pull $IMAGE_NAME

# Stop and remove existing container
echo "Stopping existing container..."
docker stop $CONTAINER_NAME 2>/dev/null || true
docker rm $CONTAINER_NAME 2>/dev/null || true

# Run new container
echo "Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 80:3000 \
  --restart unless-stopped \
  $IMAGE_NAME

echo "Deployment completed successfully!"
echo "Application is running on port 80"

# Show container status
docker ps | grep $CONTAINER_NAME