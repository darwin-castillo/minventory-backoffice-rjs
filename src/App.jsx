import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Login from './pages/Login';
import Products from './pages/Products';
import ManageProduct from './pages/ManageProduct';
import ManageUser from './pages/ManageUser';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';


const AppContent = () => {
  const { user, loading } = useAuth();

  if (loading) return <div className="h-screen flex items-center justify-center font-bold">Cargando...</div>;

  return (
    <Routes>
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />

      <Route path="/*" element={
        user ? (
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/manage" element={<ManageUser />} />
              <Route path="/users/manage/:id" element={<ManageUser />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/manage" element={<ManageProduct />} />
              <Route path="/products/manage/:id" element={<ManageProduct />} />
            </Routes>
          </Layout>
        ) : (
          <Navigate to="/login" />
        )
      } />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;