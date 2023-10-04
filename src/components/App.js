import { Route, Routes } from "react-router-dom";
import "../styles/App.css"
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "../contexts/AuthContext"
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <PrivateRoute path="/quiz" element={<Quiz></Quiz>}></PrivateRoute>
            <PrivateRoute path="/result" element={<Result></Result>}></PrivateRoute>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  )
}

export default App;
