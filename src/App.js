import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Auth/Signup";
import { ProtectedRoute } from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/auth" element={<SignUp/>} />
      </Routes>
    </>
  );
}

export default App;
