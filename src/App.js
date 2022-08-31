import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <AuthWrapper>
            <Router>
                <Routes>
                    <Route
                        element={
                            <PrivateRoute>
                                <Dashboard />
                            </PrivateRoute>
                        }
                        path="/"
                        index
                    />
                    <Route element={<Login />} path="/login" />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </AuthWrapper>
    );
}

export default App;
