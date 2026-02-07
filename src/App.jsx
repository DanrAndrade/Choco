import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// --- COMPONENTES LEVES (Carregamento Imediato) ---
import Home from './pages/Home'; 
import AdminLogin from './pages/admin/AdminLogin';

// --- LAZY LOADING (Carregamento sob Demanda) ---
const Contact = lazy(() => import('./pages/Contact'));
const History = lazy(() => import('./pages/History'));
const Jobs = lazy(() => import('./pages/Jobs'));
const Login = lazy(() => import('./pages/Login'));
const ClientDashboard = lazy(() => import('./pages/ClientDashboard'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

// Tela de carregamento
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
    <div className="w-12 h-12 border-4 border-[#D91A3C] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// --- CORREÇÃO: PROTEÇÃO DO ADMIN ---
// Agora verificamos diretamente o "crachá" no navegador, independente do AuthContext
const AdminRoute = ({ children }) => {
  const adminUser = localStorage.getItem('admin_user');
  const isAdminMode = localStorage.getItem('admin_mode') === 'true';

  // Se não tiver o crachá de admin, manda pro login
  if (!adminUser || !isAdminMode) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/historia" element={<History />} />
          <Route path="/trabalhe-conosco" element={<Jobs />} />
          <Route path="/login" element={<Login />}/>
          
          {/* Rota Protegida Cliente */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <ClientDashboard />
              </ProtectedRoute>
            } 
          />

          {/* Rotas Admin */}
          <Route path="/admin" element={<AdminLogin />} />
          
          <Route 
            path="/admin/dashboard" 
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } 
          />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}