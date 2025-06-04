# GitHub Actions CI/CD Setup

This project implements a Continuous Integration (CI) and Continuous Deployment (CD) pipeline for a full-stack application using **GitHub Actions**. It is designed to automatically run **Cypress** component tests when a Pull Request is created to the `develop` branch and automatically deploy the application to **Render** when code is merged into the `main` branch.

## 🚀 Description

As a software engineer, this workflow ensures that:
- All code integrations are tested before reaching production.
- The live application is always up-to-date after merging to `main`.

## 📦 Project Structure
📦 GitHub-Actions-CI-CD-Setup
├── .github/workflows/
│ ├── cypress-tests.yml # Executes Cypress component tests on PR to develop
│ └── deploy.yml # Deploys to Render when merging develop into main
├── client/
│ ├── src/ # Frontend code
│ ├── cypress.config.ts # Cypress component testing configuration
│ ├── vite.config.ts # Vite configuration
│ └── ...
├── server/
│ ├── src/ # Backend code
│ └── ...


## ✅ Acceptance Criteria Met

- [x] `main` and `develop` branches are configured.
- [x] GitHub Actions run Cypress component tests on PRs to `develop`.
- [x] All component tests pass in the GitHub Actions workflow.
- [x] GitHub Actions trigger deployment to Render when merging into `main`.
- [x] Deploy hook is securely stored in repository secrets (`RENDER_DEPLOY_HOOK`).
- [x] Application is deployed and running on Render.

## 🧪 Cypress Testing

Cypress tests are located at `client/cypress/component/Quiz.cy.jsx`. These tests validate:

- The Quiz component renders correctly.
- The quiz flow works as expected.
- The quiz can be restarted after completion.

## 🌐 Deployment

- **Live URL on Render**: [https://your-app-name.onrender.com](https://your-app-name.onrender.com)  
*(Replace with your actual Render app URL)*

## 🔐 GitHub Repository Secrets

- `RENDER_DEPLOY_HOOK`: Deploy hook URL generated from Render, used for CI deployment.

## 📸 Screenshots

### GitHub Action - Test Execution
![Cypress Test Run](./screenshots/tests-pass.png)

### GitHub Action - Deploy to Render
![Render Deployment](./screenshots/render-deploy.png)

## 📄 License

MIT License

---

> Project created as part of the CI/CD GitHub Actions Challenge  
> Date: June 4, 2025

