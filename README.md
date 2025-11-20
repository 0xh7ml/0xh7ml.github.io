# FastAPI Kubernetes Microservice

A simple FastAPI microservice deployed on Kubernetes with multiple replicas, health checks, and load balancing.

## Project Structure

```
.
├── main.py                  # FastAPI application
├── requirements.txt         # Python dependencies
├── Dockerfile              # Multi-stage Docker build
├── .dockerignore           # Docker ignore patterns
├── .gitignore              # Git ignore patterns
└── k8s/
    ├── deployment.yaml     # Kubernetes Deployment (3 replicas)
    └── service.yaml        # Kubernetes LoadBalancer Service
```

## Features

- FastAPI web framework with async support
- Health check endpoint at `/`
- Personalized greeting endpoint at `/hello/{name}`
- Multi-stage Docker build for optimized image size
- Kubernetes deployment with 3 replicas for high availability
- Resource limits and requests defined
- Liveness and readiness probes
- LoadBalancer service exposing port 80

## Prerequisites

- Docker installed
- Kubernetes cluster (minikube, kind, or cloud provider)
- kubectl configured to access your cluster

## Local Development

### Run with Python directly

```bash
# Install dependencies
pip install -r requirements.txt

# Run the application
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# Test endpoints
curl http://localhost:8000/
curl http://localhost:8000/hello/World
```

## Docker Build and Run

### Build Docker image

```bash
docker build -t fastapi-microservice:latest .
```

### Run Docker container locally

```bash
docker run -d -p 8000:8000 --name fastapi-app fastapi-microservice:latest

# Test endpoints
curl http://localhost:8000/
curl http://localhost:8000/hello/Docker
```

### Stop and remove container

```bash
docker stop fastapi-app
docker rm fastapi-app
```

## Kubernetes Deployment

### Deploy to Kubernetes

```bash
# Apply deployment
kubectl apply -f k8s/deployment.yaml

# Apply service
kubectl apply -f k8s/service.yaml

# Or apply both at once
kubectl apply -f k8s/
```

### Verify deployment

```bash
# Check pods
kubectl get pods

# Check deployment
kubectl get deployment fastapi-microservice

# Check service
kubectl get service fastapi-service

# Get detailed pod information
kubectl describe pods
```

### Access the service

For Minikube:
```bash
# Get the service URL
minikube service fastapi-service --url

# Or use port forwarding
kubectl port-forward service/fastapi-service 8080:80
```

For cloud providers (AWS, GCP, Azure):
```bash
# Get the external IP (may take a few minutes)
kubectl get service fastapi-service

# Once EXTERNAL-IP is assigned, test with:
curl http://<EXTERNAL-IP>/
curl http://<EXTERNAL-IP>/hello/Kubernetes
```

### Scale deployment

```bash
# Scale to 5 replicas
kubectl scale deployment fastapi-microservice --replicas=5

# Scale back to 3
kubectl scale deployment fastapi-microservice --replicas=3
```

### View logs

```bash
# Get logs from all pods
kubectl logs -l app=fastapi-microservice

# Follow logs
kubectl logs -f -l app=fastapi-microservice

# Get logs from specific pod
kubectl logs <pod-name>
```

### Update deployment

```bash
# Update image
kubectl set image deployment/fastapi-microservice fastapi-app=fastapi-microservice:v2

# Check rollout status
kubectl rollout status deployment/fastapi-microservice

# Rollback if needed
kubectl rollout undo deployment/fastapi-microservice
```

### Clean up

```bash
# Delete service
kubectl delete service fastapi-service

# Delete deployment
kubectl delete deployment fastapi-microservice

# Or delete everything at once
kubectl delete -f k8s/
```

## API Endpoints

### Health Check
```bash
GET /
Response: {"status": "healthy", "message": "FastAPI microservice is running"}
```

### Personalized Greeting
```bash
GET /hello/{name}
Response: {"message": "Hello, {name}! Welcome to our Kubernetes microservice."}
```

## Resource Configuration

The deployment includes:
- **Replicas**: 3 pods for high availability
- **CPU Request**: 100m (0.1 CPU core)
- **CPU Limit**: 500m (0.5 CPU core)
- **Memory Request**: 128Mi
- **Memory Limit**: 256Mi

## Health Checks

- **Liveness Probe**: Checks if the application is running (HTTP GET on `/`)
- **Readiness Probe**: Checks if the application is ready to serve traffic (HTTP GET on `/`)

## Troubleshooting

### Pods not starting

```bash
# Check pod status
kubectl get pods

# Describe pod for events
kubectl describe pod <pod-name>

# Check logs
kubectl logs <pod-name>
```

### Service not accessible

```bash
# Check service endpoints
kubectl get endpoints fastapi-service

# Verify service selector matches pod labels
kubectl get pods --show-labels
```

### Image pull errors

```bash
# For local images with Minikube
eval $(minikube docker-env)
docker build -t fastapi-microservice:latest .

# For local images with Kind
kind load docker-image fastapi-microservice:latest
```

## Production Considerations

1. **Image Registry**: Push images to a container registry (Docker Hub, ECR, GCR, ACR)
2. **Image Pull Policy**: Update deployment to pull from registry
3. **Secrets Management**: Use Kubernetes secrets for sensitive data
4. **Ingress**: Use Ingress controller instead of LoadBalancer for better routing
5. **Monitoring**: Add Prometheus metrics and Grafana dashboards
6. **Logging**: Centralize logs with ELK stack or similar
7. **CI/CD**: Automate builds and deployments with GitHub Actions, GitLab CI, etc.

## License

MIT
