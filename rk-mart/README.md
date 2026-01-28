# RK MART - E-Commerce System

This project is a complete Multi-Vendor E-Commerce platform built with **Spring Boot** (Backend) and **React.js** (Frontend).

## tech Stack
- **Backend:** Java, Spring Boot, Spring Data JPA, MySQL Driver.
- **Frontend:** React.js, Vite, Axios.
- **Database:** MySQL.
- **Tools:** Eclipse (Backend), VS Code (Frontend), MySQL Workbench.

## Project Structure
- `rk-mart-backend/`: The Spring Boot Server Application (Import this folder into Eclipse).
- `rk-mart-frontend/`: The React Web Application.
- `schema.sql`: Database initialization script.

## Setup Instructions

### 1. Database (MySQL Workbench)
1. Open MySQL Workbench.
2. Create a database named `rkmart_db`.
   ```sql
   CREATE DATABASE rkmart_db;
   ```
3. Update `rk-mart-backend/src/main/resources/application.properties` if your password is not `root`.

### 2. Backend (Eclipse)
1. Open Eclipse -> "File" -> "Import" -> "Maven" -> "Existing Maven Projects".
2. Select the `rk-mart-backend` folder.
3. Right-click the project -> "Run As" -> "Spring Boot App" (or "Java Application" -> `RkMartApplication.java`).

### 3. Frontend (Command Line)
1. Open a terminal in `rk-mart-frontend`.
2. Run `npm install` (if not done).
3. Run `npm run dev`.
4. Open the link provided (usually http://localhost:5173).

## Features
- **Admin Panel:** Manage Vendors, view Platform Reports.
- **Vendor Dashboard:** Add Products, Manage Orders, View Revenue.
- **Customer Store:** Browse, Search, Cart, Checkout, Order History.
