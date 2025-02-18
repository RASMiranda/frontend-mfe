# Frontend Micro Frontend (MFE) Case Study

This repository demonstrates a **micro frontend architecture** using **Next.js**, **React**, **Module Federation**, **RTK Query**, **Ant Design**, and **TypeScript**. The system adheres to the **12-Factor** methodology and the **SOLID** principles.

## Table of Contents
1. [Overview](#overview)  
2. [Project Structure](#project-structure)  
3. [Installation](#installation)  
4. [Running the Applications](#running-the-applications)  
5. [Deployment](#deployment)  
6. [Environment Variables](#environment-variables)  
7. [Branching & Deployment Strategy](#branching--deployment-strategy)  
8. [SOLID & 12-Factor Compliance](#solid--12-factor-compliance)  
9. [HOCs (Higher-Order Components)](#hocs-higher-order-components)  
10. [GitHub Repository](#github-repository)  
11. [License](#license)

---

## Overview

- **Host App (Next.js)**  
  The main Next.js application that consumes remote micro frontends.

- **Products Remote (Next.js)**  
  A Next.js-based micro frontend exposing a product listing module (`ProductsList`).

- **Basket Remote (React)**  
  A React-based micro frontend exposing a shopping basket module (`Basket`).

**Key Technologies:**  
- [Next.js](https://nextjs.org/)  
- [React](https://reactjs.org/)  
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)  
- [Redux Toolkit Query (RTK Query)](https://redux-toolkit.js.org/rtk-query/overview)  
- [Ant Design](https://ant.design/)  
- [TypeScript](https://www.typescriptlang.org/)

---

## Project Structure

```bash
frontend-mfe/
├── .gitignore
├── README.md
├── host-app
│   ├── next.config.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── basket.tsx
│   ├── store
│   │   └── apiSlice.ts
│   └── components
│       └── withLogger.tsx
├── products-remote
│   ├── next.config.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── pages
│   │   └── index.tsx
│   ├── store
│   │   └── apiSlice.ts
│   └── components
│       └── ProductsList.tsx
├── basket-remote
│   ├── webpack.config.js
│   ├── package.json
│   ├── tsconfig.json
│   ├── public
│   │   └── index.html
│   └── src
│       ├── index.tsx
│       ├── App.tsx
│       └── components
│           └── Basket.tsx
└── ...
```

---

## Installation

   ```bash
   # Clone the Repository
   git clone https://github.com/your-org/frontend-mfe.git
   
   # Install Dependencies
   # From the root folder, install each sub-application’s dependencies:
   cd frontend-mfe
   
   # Host App
   cd host-app
   npm install
   
   # Products Remote
   cd ../products-remote
   npm install
   
   # Basket Remote
   cd ../basket-remote
   npm install
   ```

---

## Running the Applications

   ### Each application runs on its own port (following the 12-Factor principle of port binding).

   ```bash

   # Host App (Next.js)
   cd host-app
   npm run dev
   # Default: http://localhost:3000

   # Products Remote (Next.js)
   cd products-remote
   npm run dev
   # Default: http://localhost:3001

   # Basket Remote (React)
   cd basket-remote
   npm run start
   # Default: http://localhost:3002
   ```
   ### Visit http://localhost:3000 in your browser:
   #### The home page displays products from products-remote.
   #### Clicking Go to Basket navigates to the basket page, which loads from basket-remote.

---

## Deployment

   ### Next.js Apps (Host & Products)
   #### Production Build
   
   ##### In each Next.js app (host-app, products-remote):
   
   ```bash
   npm run build
   npm run start
   ```
   
   ###### This will create an optimized production build and then launch the app on its configured port.
   
   ### Hosting
   #### Deploy to Vercel, Netlify, or a custom server.
   #### Make sure each app has the correct environment variables set in the hosting environment.

   ### React App (Basket)
   #### Production Build

   ```bash
   # In basket-remote/
   npm run build
   ```

   ##### Creates a production-ready bundle in dist.
   
   #### Serving
   ##### Serve the dist folder on a static hosting platform (e.g., AWS S3) or custom server.
   ##### Or run npm run start if using a local/server environment with Webpack Dev Server.
   
   ### Docker (Optional)
   #### Containerize each app with a Dockerfile.
   #### Use multi-stage builds for optimized production images.
   #### Orchestrate via Docker Compose / Kubernetes.

---

## Environment Variables

### By default, each application may rely on the Fake Store API:
   ```bash
   API_BASE_URL=https://fakestoreapi.com
   ```

### Create a .env or .env.local file in each sub-app (e.g., host-app/.env.local) for real environment values:
   ```bash
   API_BASE_URL=https://fakestoreapi.com
   ```

### Do not commit actual secrets (API keys, tokens, etc.) to version control.

---

## Branching & Deployment Strategy

### Develop on test/v1.0.0.
### After testing, merge into prod/v1.0.0 for production.
### Daily commits are required, with progress updates via email or your organization’s communication channel.

---

## SOLID & 12-Factor Compliance
### SOLID Principles
#### Single Responsibility Principle
##### Keep each component focused on a single concern.
#### Open/Closed Principle
##### Components should be extensible (via props/composition) but closed to direct modification.
#### Liskov Substitution Principle
##### Components of the same type can be interchanged without side effects.
#### Interface Segregation Principle
##### Keep props/interfaces minimal; no component depends on irrelevant properties.
#### Dependency Inversion Principle
##### High-level modules depend on abstracted services (e.g., RTK Query) rather than direct implementations.
### 12-Factor Overview
##### Codebase: Single repo, multiple sub-projects.
##### Dependencies: Listed in package.json.
##### Config: Environment variables (no hardcoded creds).
##### Backing Services: External APIs.
##### Build, Release, Run: Separate steps (npm run build, npm run start).
##### Stateless Processes: No in-process session.
##### Port Binding: Each app on unique port (3000, 3001, 3002).
##### Concurrency: Scale horizontally.
##### Disposability: Fast startup/shutdown.
##### Dev/Prod Parity: Similar environments.
##### Logs: Standard out.
##### Admin Processes: Separate scripts (migrations, debugging).

---

## HOCs (Higher-Order Components)
### An example HOC (withLogger.tsx) in host-app/components logs props

---

## GitHub Repository
### Repository Link: https://github.com/RASMiranda/frontend-mfe

---

## License
### MIT License

---

## Questions or Feedback?
### Create a GitHub issue or reach out to the maintainers.
