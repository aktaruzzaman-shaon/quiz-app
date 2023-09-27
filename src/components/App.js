import "../styles/App.css"
import Layout from "./Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home></Home> */}
        <SignUp></SignUp>
      </Layout>
    </div>
  );
}

export default App;
