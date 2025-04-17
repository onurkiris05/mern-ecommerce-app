# 🛒 E-Commerce Platform with Admin Dashboard

A modern, full-stack **MERN** (MongoDB, Express.js, React, Node.js) e-commerce platform with a feature-rich storefront and a powerful admin dashboard. Built as a monorepo, this app offers a seamless shopping experience with **Stripe** integration for payments, a responsive design styled with **Bootstrap** and **MUI**, and dynamic visualizations using **Recharts** and **Swiper**. The admin dashboard empowers administrators to manage products, orders, and users efficiently. 🚀

---

## 📑 Table of Contents

- ✨ Features
- 🛠️ Tech Stack
- ⚙️ Installation
- 📚 Usage
- 🗂️ Project Structure
- 📜 Scripts
- 🤝 Contributing
- 📄 License

---

## ✨ Features

- **Storefront** 🏬:
  - Browse products with filters and categories 🛍️.
  - Add items to cart and manage cart 🛒.
  - Secure checkout with **Stripe** 💳.
  - Responsive design for mobile and desktop 📱💻.
  - Engaging visuals with **Swiper** and **SplineTool** 🎨.
- **Admin Dashboard** 📊:
  - Manage products, orders, and users 👨‍💼.
  - Visualize sales and user data with **Recharts** 📈.
  - Upload product images with **React Dropzone** 📸.
  - Intuitive UI with **MUI Data Grid** and **Bootstrap** 🖼️.
- **Security** 🔒:
  - JWT-based authentication with **jsonwebtoken** 🔑.
  - Password hashing with **bcrypt** 🛡️.
  - Environment variable validation with **envalid** 🌍.
- **Type Safety** ✅: **TypeScript** ensures robust code across the stack.

---

## 🛠️ Tech Stack

### 🌐 Frontend (Storefront)

- **React** ⚛️: For dynamic user interfaces.
- **React Router** 🛤️: For client-side navigation.
- **Redux Toolkit & Redux Persist** 🗃️: For state management and persistence.
- **React Bootstrap & MUI** 🎨: For responsive, styled components.
- **React Hook Form** 📋: For efficient form handling.
- **Swiper** 📸: For interactive product carousels.
- **SplineTool** 🖼️: For 3D visuals.
- **Stripe** 💳: For secure payment processing.
- **Styled Components** 💅: For custom CSS-in-JS styling.
- **TypeScript** 🧩: For type-safe JavaScript.

### 🖥️ Admin Dashboard

- **React** ⚛️: For building the admin interface.
- **MUI Data Grid** 📋: For tabular data management.
- **Recharts** 📈: For data visualizations.
- **React Dropzone** 📤: For image uploads.
- **Redux Toolkit & Redux Persist** 🗃️: For state management.
- **MUI & Bootstrap** 🎨: For a polished UI.
- **TypeScript** 🧩: For type safety.

### ⚙️ Backend

- **Node.js & Express** 🖥️: For a robust API.
- **MongoDB & Mongoose** 🗄️: For data storage and management.
- **TypeScript** 🧩: For type-safe backend code.
- **JWT** 🔑: For secure authentication.
- **Bcrypt** 🔐: For password hashing.
- **Stripe** 💳: For payment processing.
- **Morgan** 📜: For HTTP request logging.
- **Cors** 🌐: For cross-origin resource sharing.
- **Envalid** 🌍: For environment variable validation.

### 🧰 Dev Tools

- **ESLint** ✅: For code quality and consistency.
- **Nodemon** 🔄: For auto-restarting the server during development.
- **React Scripts** 🛠️: For streamlined frontend development.
- **TypeScript** 🧩: For type checking across the stack.

---

## ⚙️ Installation

### 📋 Prerequisites

- **Node.js** (v16 or higher) 🟢
- **MongoDB** (local or MongoDB Atlas) 🗄️
- **npm** (included with Node.js) 📦
- **Stripe Account** (for payment processing) 💳

### 🛠️ Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/ecommerce-platform.git
   cd ecommerce-platform
   ```

2. **Set up the backend**:

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:

   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PORT=5000
   ```

3. **Set up the frontend (storefront)**:

   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up the admin dashboard**:

   ```bash
   cd ../admin
   npm install
   ```

5. **Start the backend** 🚀: From the `backend` directory:

   ```bash
   npm run dev
   ```

6. **Start the frontend** 🌟: From the `frontend` directory:

   ```bash
   npm start
   ```

7. **Start the admin dashboard** 📊: From the `admin` directory:

   ```bash
   npm start
   ```

   The app will be available at:

   - Storefront: `http://localhost:3000` 🛍️
   - Admin Dashboard: `http://localhost:3001` 📊
   - Backend: `http://localhost:5000` ⚙️

---

## 📚 Usage

- **Storefront** 🏬:
  - Visit `http://localhost:3000` to browse products 🌐.
  - Add items to your cart 🛒 and proceed to checkout with **Stripe** 💳.
  - Enjoy a responsive, visually engaging experience with **Swiper** and **SplineTool** 🎉.
- **Admin Dashboard** 📊:
  - Access `http://localhost:3001` (requires admin login) 🔐.
  - Manage products, view orders, and monitor user activity 👨‍💼.
  - Upload product images with **React Dropzone** 📸.
  - Analyze sales data with **Recharts** 📈.

---

## 🗂️ Project Structure

```
ecommerce-platform/
├── admin/ 📊
│   ├── src/
│   │   ├── components/ 🧩
│   │   ├── pages/ 📄
│   │   ├── App.tsx ⚛️
│   │   └── index.tsx 🚀
│   └── package.json 📦
├── backend/ 🖥️
│   ├── src/
│   │   ├── server.ts ⚙️
│   │   ├── routes/ 🛤️
│   │   ├── models/ 🗄️
│   │   ├── controllers/ 🎮
│   │   └── middleware/ 🔒
│   ├── .env 🔧
│   └── package.json 📦
├── frontend/ 🛍️
│   ├── src/
│   │   ├── components/ 🧩
│   │   ├── pages/ 📄
│   │   ├── App.tsx ⚛️
│   │   └── index.tsx 🚀
│   └── package.json 📦
└── README.md 📜
```

---

## 📜 Scripts

### Backend ⚙️

- `npm run dev` 🚀: Start the backend with nodemon.
- `npm start` ▶️: Run the built backend.
- `npm build` 🏗️: Compile TypeScript to JavaScript.

### Frontend (Storefront) 🌐

- `npm start` 🌟: Run the development server.
- `npm build` 🏗️: Build the app for production.
- `npm test` 🧪: Execute tests with Jest.
- `npm eject` ⚠️: Eject from Create React App (use with caution).

### Admin Dashboard 📊

- `npm start` 🌟: Run the development server.
- `npm build` 🏗️: Build the app for production.
- `npm test` 🧪: Execute tests with Jest.
- `npm eject` ⚠️: Eject from Create React App (use with caution).

---

## 🤝 Contributing

We welcome contributions! 🎉 To get started:

1. Fork the repository 🍴.
2. Create a new branch (`git checkout -b feature/your-feature`) 🌿.
3. Make your changes and commit (`git commit -m "Add your feature"`) ✍️.
4. Push to the branch (`git push origin feature/your-feature`) 🚀.
5. Open a Pull Request 📬.

Please ensure your code adheres to **ESLint** rules and includes tests where applicable. ✅

---

## 📄 License

This project is licensed under the **ISC License**. See the `backend/package.json` for details. 📜

---

**Happy shopping and managing!** 🛒📊✨
