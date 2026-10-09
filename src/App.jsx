import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './auth';
import { PAGES } from './routes';
import { HOME_BY_ROLE, canAccess } from './roles';
import AppLayout from './components/AppLayout';
import Login from './pages/Login';

function ProtectedPage({ page }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <AppLayout page={page} denied={!canAccess(user.role, page.path)} />;
}

function Home() {
  const { user } = useAuth();
  return <Navigate to={user ? HOME_BY_ROLE[user.role] : '/login'} replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        {PAGES.map((page) => (
          <Route key={page.path} path={page.path} element={<ProtectedPage page={page} />} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}
