<div align="center">

# 👜 Leather Skin — Backend API

<p>
A powerful and secure RESTful backend API for the
<strong>Leather Skin E-Commerce Platform</strong>, built with
<strong>Node.js, Express.js & MySQL</strong>.
</p>

<br>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/REST_API-02569B?style=for-the-badge&logo=fastapi&logoColor=white"/>

</div>

---

## 👜 About

This repository contains the **backend and REST API** for the Leather Skin full-stack e-commerce application.

The backend handles users, authentication, authorization, products, categories, orders, and database operations using **Node.js, Express.js, and MySQL**.

It provides a secure and organized API that connects with the React frontend.

---

## ✨ Features

* 🔌 RESTful API
* 👤 User registration & login
* 🔐 Authentication
* 🛡️ Authorization
* 👨‍💼 Role-based access control
* 🔒 Protected API routes
* 👜 Product management
* 🏷️ Category management
* 🛒 Cart & order functionality
* 📦 Order management
* 🗄️ MySQL database integration
* ⚙️ Express.js middleware
* 🔑 Environment variable configuration
* 🚫 Unauthorized access protection
* 🌐 CORS support

---

## 🔐 Authentication & Authorization

The backend includes a complete authentication and authorization system.

### Authentication

* User registration
* User login
* Secure password handling
* Token-based authentication
* Protected routes

### Authorization

Different users can access different resources based on their role.

```text
User
 ↓
Authentication
 ↓
Authorization
 ↓
Protected API Resources
```

---

## 🗄️ Database

The application uses **MySQL** as its relational database.

The backend manages data related to:

* 👤 Users
* 👜 Products
* 🏷️ Categories
* 🛒 Cart
* 📦 Orders
* 👨‍💼 User Roles

---

## 🔌 API

The Express.js server provides RESTful endpoints for the frontend application.

Main API functionality includes:

```text
Authentication
├── Register
├── Login
└── User Authentication

Products
├── Create
├── Read
├── Update
└── Delete

Categories
├── Create
├── Read
├── Update
└── Delete

Orders
├── Create
├── Read
├── Update
└── Manage
```

> API routes may vary depending on the current implementation of the project.

---

## 🛠️ Tech Stack

| Technology        | Purpose                |
| ----------------- | ---------------------- |
| 🟢 Node.js        | Backend Runtime        |
| 🚀 Express.js     | Server & REST API      |
| 🐬 MySQL          | Database               |
| 🟨 JavaScript     | Backend Language       |
| 🔐 Authentication | User Security          |
| 🛡️ Authorization | Access Control         |
| 🌐 REST API       | Frontend Communication |

---

## 🏗️ Backend Architecture

```text
        Express.js Server
                ↓
          Routes / APIs
                ↓
           Middleware
                ↓
           Controllers
                ↓
        Database Queries
                ↓
              MySQL
```

The backend follows a **modular and organized structure**, with different responsibilities separated into dedicated files and folders such as:

* 📌 **Routes** — API endpoint definitions
* 🎯 **Controllers** — Application/business logic
* 🛡️ **Middleware** — Authentication, authorization & request handling
* 🗄️ **Database** — MySQL configuration & queries
* ⚙️ **Configuration** — Environment & application settings

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## ⚠️ Backend Availability

> **Note:** The live backend may currently be unavailable due to **free-tier hosting limitations**. However, the complete backend source code is available in this repository and can be reviewed and run locally.

---

## 🔗 Frontend

This backend powers the **Leather Skin React frontend**, which is maintained in a separate repository.

**Frontend Repository:**
`YOUR_FRONTEND_REPOSITORY_URL`

---

## 🔮 Future Improvements

* 💳 Payment Gateway Integration
* 📧 Email Notifications
* ⭐ Product Reviews & Ratings
* 📊 Advanced Admin APIs
* 📈 Analytics & Reporting
* 📦 Advanced Order Tracking
* 🔄 Refresh Token System

---

## ⭐ Support

If you find this backend project useful, consider giving the repository a **Star ⭐** on GitHub.

<div align="center">

### Built with ❤️ using Node.js, Express.js & MySQL

</div>
