import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <AppRoutes />
        </Layout>
      </Router>
    </>
  );
};

export default App;
