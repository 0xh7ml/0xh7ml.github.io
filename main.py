from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "message": "FastAPI microservice is running"}


@app.get("/hello/{name}")
async def greet(name: str):
    """Personalized greeting endpoint"""
    return {"message": f"Hello, {name}! Welcome to our Kubernetes microservice."}
