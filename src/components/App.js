import { Route, Routes } from "react-router-dom";
import "../styles/App.css"
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthProvider } from "../contexts/AuthContext"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/quiz" element={<Quiz></Quiz>}></Route>
            <Route path="/result" element={<Result></Result>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </div>
  )
}

export default App;
