import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CotizacionPage from "../pages/CotizacionPage";
import ConstructionPage from "../pages/ConstruccionPage";
import ReformasPage from "../pages/ReformasPage";
import DemolicionPage from "../pages/DemolicionPage";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
import ProtectedRoute from "../utils/ProtectedRoute";
import ContactoPage from "../pages/ContactoPage"

function RoutesCom(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Construccion" element={<ConstructionPage />} />
        <Route path="/Reformas" element={<ReformasPage />} />
        <Route path="/Demolicion" element={<DemolicionPage />} />
        <Route path="/Cotizacion" element={<CotizacionPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path="/Contacto" element={<ContactoPage />} />
      </Routes>
    </Router>
  );
}
export default RoutesCom;
