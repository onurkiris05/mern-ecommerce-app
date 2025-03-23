import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import UserPage from "./pages/UserPage";
import NewUserPage from "./pages/NewUserPage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import NewProductPage from "./pages/NewProductPage";
import NotFoundPage from "./pages/NotFoundPage";

const Container = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
          <Route path="/newUser" element={<NewUserPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/newproduct" element={<NewProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
