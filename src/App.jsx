import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageTransition from "./components/PageTransition";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Philosophy from "./pages/Philosophy";
import CompanyInfo from "./pages/CompanyInfo";
import CeoGreeting from "./pages/CeoGreeting";
import Recruitment from "./pages/Recruitment";
import { AuthProvider } from "./services/authContext/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageTransition>
                                <Home />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <PageTransition>
                                <About />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            <PageTransition>
                                <Contact />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/philosophy"
                        element={
                            <PageTransition>
                                <Philosophy />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/company"
                        element={
                            <PageTransition>
                                <CompanyInfo />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/greeting"
                        element={
                            <PageTransition>
                                <CeoGreeting />
                            </PageTransition>
                        }
                    />
                    <Route
                        path="/recruitment"
                        element={
                            <PageTransition>
                                <Recruitment />
                            </PageTransition>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
