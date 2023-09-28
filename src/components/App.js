import "../styles/App.css"
import Layout from "./Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
// import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home></Home> */}
        {/* <SignUp></SignUp> */}
        {/* <Quiz></Quiz> */}
        <Result></Result>

      </Layout>
    </div>
  );
}

export default App;
