# 🚀 NestJS Project 

A backend service built with [NestJS](https://nestjs.com/), using TypeORM, Swagger, and  testing setup (E2E).

---

## 📦 Tech Stack

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLServer](https://www.microsoft.com/es-mx/sql-server)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/) (for e2e tests)

---

## 🛠️ Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/EduardoVivarL/Taxi24.git
cd your-nest-project
npm install
```
### 2. Restore the database

Restore the database with the backup in the project files
```
/db/Taxi24.bak
```
### 3. Configure Environment

Create a .env file:
```
DB_HOST=your_host
DB_PORT=1433
DB_USERNAME=your_user
DB_PASSWORD=your_pass
DB_NAME=your_database
DB_INSTANCE_NAME=your_instance_name
DB_SYNCHRONIZE=false
DB_LOGGING=true
DB_TRUST_CERTIFICATE=true
```
### 4. 🚀 Run the App
npm run start

### 5. 🧪 Running Tests
End-to-End (E2E) tests
```
npm run test:e2e
```
### 6. 📘 API Docs (Swagger)

Once the app is running, open:
```
http://localhost:3000/api
```
You’ll see auto-generated Swagger docs based on your controllers and DTOs.

### 7. 📁 Project Structure
```
src/
├── app.module.ts
├── travel/
│   ├── travel.controller.ts
│   ├── travel.service.ts
│   ├── entities/
│   └── dto/
└── ...
test/
├── app.e2e-spec.ts
└── ...
```
