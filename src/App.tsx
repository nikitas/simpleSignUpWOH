import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import Layout from "./components/Layout/Layout";
import SignIn from "./pages/signIn/SignIn";
import { routes } from "./routes";
import Home from "./pages/home/Home";

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={routes.home} element={<SignUp />} />
        <Route path={routes.signin} element={<SignIn />} />
        <Route path={routes.signup} element={<SignUp />} />
      </Routes>
    </Layout>
  );
};


export default App;
