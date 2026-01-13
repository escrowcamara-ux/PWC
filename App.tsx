
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Network from './pages/Network';
import Team from './pages/Team';
import Curriculum from './pages/Curriculum';
import Login from './pages/Login';
import AboutPublic from './pages/AboutPublic';
import GettingStarted from './pages/GettingStarted';
import Presentation from './pages/Presentation';
import ContactSupport from './pages/ContactSupport';
import Wallet from './pages/Wallet';
import Resources from './pages/Resources';
import CoursePlayer from './pages/CoursePlayer';
import FundingApplication from './pages/FundingApplication';
import CorporateCredit from './pages/CorporateCredit';
import TrustsProtection from './pages/TrustsProtection';
import LegacyWealth from './pages/LegacyWealth';
import Profile from './pages/Profile';
import RoyalSignal from './pages/RoyalSignal';
import PrivateBanker from './pages/PrivateBanker';
import InnerSanctum from './pages/InnerSanctum';
import Rituals from './pages/Rituals';
import { CURRENT_USER } from './constants';

/**
 * Private Route Wrapper to handle authentication and layout.
 * Defined outside the App component to avoid re-creation on every render and resolve TypeScript prop errors.
 */
const ProtectedLayout = ({ 
  isLoggedIn, 
  onLogout, 
  children 
}: { 
  isLoggedIn: boolean; 
  onLogout: () => void; 
  children: React.ReactNode 
}) => {
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <Layout user={CURRENT_USER} onLogout={onLogout}>{children}</Layout>;
};

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Routes>
        {/* Public Landing & Login */}
        <Route path="/about" element={<AboutPublic />} />
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login onLogin={() => setIsLoggedIn(true)} />} 
        />

        {/* Protected Application Routes */}
        <Route path="/" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Dashboard /></ProtectedLayout>} />
        <Route path="/profile" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Profile /></ProtectedLayout>} />
        <Route path="/team" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Team /></ProtectedLayout>} />
        <Route path="/getting-started" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><GettingStarted /></ProtectedLayout>} />
        <Route path="/presentation" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Presentation /></ProtectedLayout>} />
        <Route path="/compensation-plan" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Network /></ProtectedLayout>} />
        <Route path="/curriculum" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Curriculum /></ProtectedLayout>} />
        <Route path="/contact-support" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><ContactSupport /></ProtectedLayout>} />
        <Route path="/wallet" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Wallet /></ProtectedLayout>} />
        <Route path="/resources" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Resources /></ProtectedLayout>} />
        <Route path="/course/:courseId" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><CoursePlayer /></ProtectedLayout>} />
        <Route path="/funding-application" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><FundingApplication /></ProtectedLayout>} />
        <Route path="/corporate-credit" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><CorporateCredit /></ProtectedLayout>} />
        <Route path="/trusts-protection" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><TrustsProtection /></ProtectedLayout>} />
        <Route path="/legacy-wealth" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><LegacyWealth /></ProtectedLayout>} />
        <Route path="/royal-signal" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><RoyalSignal /></ProtectedLayout>} />
        <Route path="/private-banker" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><PrivateBanker /></ProtectedLayout>} />
        <Route path="/inner-sanctum" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><InnerSanctum /></ProtectedLayout>} />
        <Route path="/rituals" element={<ProtectedLayout isLoggedIn={isLoggedIn} onLogout={handleLogout}><Rituals /></ProtectedLayout>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
