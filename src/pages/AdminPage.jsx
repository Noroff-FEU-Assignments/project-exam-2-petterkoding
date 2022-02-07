import React, { useContext} from "react";
import {useNavigate } from "react-router-dom";
import Layout from "../components/admin/Layout";
import WelcomeUser from "../components/admin/WelcomeUser";
import AuthContext from "../context/AuthContext";

const AdminPage = () => {

  const [auth, setAuth] = useContext(AuthContext);

  const history = useNavigate();

  if (!auth) {
    history("/")
  }

  const { user: { username } } = auth;

  return(
    <>
      {auth &&
      <>
        <WelcomeUser username={username} />
        <Layout/>
      </>
      }
    </>
  );
};

export default AdminPage;
