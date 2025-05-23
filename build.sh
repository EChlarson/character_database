services:
  - type: web
    name: backend-service
    env: node
    plan: free
    rootDir: backend
    buildCommand: npm install
    startCommand: npm start