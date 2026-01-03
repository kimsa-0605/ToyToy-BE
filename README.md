## User Service Backend – NestJS Clean Architecture

A scalable backend API built with **NestJS** and **TypeScript**, designed using **Clean Architecture**
to ensure separation of concerns, maintainability, and testability.

This project demonstrates how to design a real-world backend system with clear domain boundaries,
dependency inversion, and a modular architecture suitable for long-term development.

---

## ⚙️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **NestJS** | Latest | Progressive Node.js framework for building scalable server-side applications |
| **TypeScript** | Latest | Static typing for better maintainability and developer experience |
| **MySQL** | Latest | Relational database for persistent data storage |
| **Prisma / TypeORM** | Latest | ORM for database access and schema management |
| **Node.js** | >= 18 | JavaScript runtime environment |
| **class-validator** | Latest | Request data validation |
| **REST API** | — | Standardized API communication |

---

## 🔑 Key Highlights

✅ Clean Architecture & domain-centric design  
✅ Framework-independent business logic  
✅ Repository pattern with interface abstraction  
✅ Modular NestJS structure  
✅ Database seeding for development & testing  
✅ Ready for scaling and future extension  

---

## 🧱 Architecture Overview

The project follows **Clean Architecture**, where business rules are isolated from
frameworks and infrastructure concerns.

**Dependency Rule**  

- Inner layers never depend on outer layers
- Infrastructure can be replaced without affecting business logic
- Improves testability and long-term maintainability
  
---

## 📂 Project Structure

```
src/
├── common/                  # Shared utilities and validators
│   └── validators/
├── config/                  # Application & environment configuration
├── core/                    # Domain layer (framework-independent)
│   ├── entities/            # Domain entities
│   └── interfaceRepositories/ # Repository interfaces
├── infrastructure/          # External implementations
│   ├── externalService/     # Third-party service integrations
│   └── repositories/
│       └── mySQL/           # MySQL repository implementations
├── module/                  # NestJS modules
├── presentation/            # API delivery layer
│   └── restful/
│       ├── controller/      # REST controllers
│       ├── dto/             # Request & response DTOs
│       └── filters/         # Exception filters
├── seeder/                  # Database seeding logic
└── usecases/                # Application business logic
```
---

## 🧠 Layer Responsibilities
#### Core (Domain Layer)
- Contains domain entities and repository interfaces.
- Independent of NestJS, databases, and external services.

#### Usecases (Application Layer)
- Encapsulates business logic.
- Each use case represents a single application action  
  (e.g. `CreateUser`, `GetUser`).

#### Infrastructure (Implementation Layer)
- Implements repository interfaces.
- Integrates with external systems such as MySQL and third-party services.

#### Presentation (Delivery Layer)
- Handles HTTP requests and responses.
- Uses REST controllers, DTOs, and exception filters.


---

## 🚀 Getting Started
Installation
```bash
git clone https://github.com/your-username/user-service-backend.git
npm install
cp .env.example .env
```
---

### 1️⃣Database Migration
```bash
npx prisma migrate dev
```
---

## 2️⃣Seed Database
```bash
npx ts-node src/seeder/main.seed.ts
```
---

## 3️⃣Run Application
```bash
npm run start:dev
```
Server will be available at:
```bash
http://localhost:8000
```


