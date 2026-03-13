import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Login from './pages/Login';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
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
              <Route path="/products" element={<Products />} />
              <Route path="/productos/nuevo" element={<AddProduct />} />
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