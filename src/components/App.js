import { Route, Routes } from "react-router-dom";
import "../styles/App.css"
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/quiz" element={<Quiz></Quiz>}></Route>
          <Route path="/result" element={<Result></Result>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Layout>
    </div>
  )
}

export default App;
