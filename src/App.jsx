import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Login from './pages/Login';
import './App.css';

function App() {
  // Simulación de autenticación (Cámbialo a true para entrar al panel)
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta de Login (Sin Layout) */}
        <Route path="/login" element={<Login />} />

        {/* Rutas Protegidas (Con Layout) */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/usuarios" element={<Users />} />
                  {/* Redirigir cualquier ruta desconocida al Dashboard */}
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </Layout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;