# 🛍️ trendNEST

**trendNEST** is a modern e-commerce application built with the MERN Stack (MongoDB, Express, React, Node.js) and TypeScript. It delivers a complete shopping experience with user-friendly interfaces, product management, secure authentication, Stripe integration, and a powerful admin dashboard.

## 📁 Project Structure

trendNEST/ 
├── frontend/ → Customer-facing web application (React + TypeScript) 
├── backend/ → REST API and server logic (Node.js + Express + TypeScript + MongoDB) 
├── admin/ → Admin dashboard (React + Redux Toolkit + MUI + TypeScript)

## ✨ Features

### 👨‍💻 Frontend
- Fully responsive and modern UI
- Product listings with filtering and detail pages
- Stripe payment integration
- User authentication and profile management
- Shopping cart and order history

### 🛠️ Backend
- RESTful API architecture
- JWT-based authentication
- MongoDB integration with Mongoose
- Secure environment variable validation with `envalid`
- Stripe API for payments
- Custom error handling

### 🧑‍💼 Admin Panel
- Product and user management
- Order tracking and control
- Data visualizations (Recharts & MUI DataGrid)
- Form validation with React Hook Form
- State management with Redux Toolkit & Persist
- Responsive layout with MUI components

---

## 🧰 Tech Stack

- **Frontend:**
  - React 19 + TypeScript
  - MUI, Bootstrap, Styled-components
  - React Router, Redux Toolkit, Redux Persist
  - Stripe.js, Swiper.js, React Hook Form

- **Backend:**
  - Node.js + Express + TypeScript
  - MongoDB + Mongoose
  - JWT, Bcrypt, Stripe
  - Envalid, Dotenv, Morgan

- **Admin Panel:**
  - React 19 + TypeScript
  - Redux Toolkit & Persist
  - MUI, DataGrid, Recharts
  - React Hook Form

---

## 🚀 Getting Started

### Environment Variables

Each section requires its own `.env` file. Example for `backend`:

MONGO_CONNECTION_STRING=your_mongo_uri
PORT=5000
SESSION_SECRET=your_session_secret
FRONTEND_URL=http://localhost:3000

## Installation & Running
Run the following commands in each directory:

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm start

### Admin Panel
cd admin
npm install
npm start


📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Onur Kiris

Feel free to reach out or contribute – feedback and collaboration are always welcome!
