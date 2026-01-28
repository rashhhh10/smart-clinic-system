-- RK MART Database Schema Script
-- Run this in MySQL Workbench if you prefer manual setup over JPA auto-generation.

CREATE DATABASE IF NOT EXISTS rkmart_db;
USE rkmart_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50), -- ADMIN, VENDOR, CUSTOMER
    phone VARCHAR(20),
    address TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    shop_name VARCHAR(255)
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price DOUBLE,
    stock INT,
    category VARCHAR(255),
    video_url VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    vendor_id BIGINT,
    FOREIGN KEY (vendor_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Product Images (ElementCollection)
CREATE TABLE IF NOT EXISTS product_image_urls (
    product_id BIGINT,
    image_display_url VARCHAR(555),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    customer_id BIGINT,
    total_amount DOUBLE,
    status VARCHAR(50), -- PLACED, SHIPPED, DELIVERED
    order_date DATETIME,
    FOREIGN KEY (customer_id) REFERENCES users(id)
);

-- Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT,
    product_id BIGINT,
    quantity INT,
    price DOUBLE,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Sample Data (Optional)
INSERT INTO users (email, password, role, name) VALUES 
('admin@rkmart.com', 'admin123', 'ADMIN', 'Super Admin'),
('vendor@rkmart.com', 'vendor123', 'VENDOR', 'RK Electronics'),
('user@gmail.com', 'user123', 'CUSTOMER', 'John Doe');
