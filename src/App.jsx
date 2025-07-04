import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
          <ToastContainer position="top-right" autoClose={3000} />
      </Router>
    </>
  );
};

export default App;
