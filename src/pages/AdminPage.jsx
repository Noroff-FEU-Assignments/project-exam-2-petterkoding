import React, { useContext } from "react";
import {Link, Outlet, useNavigate } from "react-router-dom";
// import Enquiries from "../components/admin/Enquiries";
// import Messages from "../components/admin/Messages";
import Layout from "../components/admin/Layout";
import WelcomeUser from "../components/admin/WelcomeUser";
import AuthContext from "../context/AuthContext";

const AdminPage = () => {

  const [auth, setAuth] = useContext(AuthContext);

  const { user: { username } } = auth;

  const history = useNavigate();

  if (!auth) {
    history("/")
  }

  return(
    <>
      {auth &&
      <>
        <WelcomeUser username={username} />
        <Layout/>
        {/* <Messages />
        <Enquiries /> */}
        {/* render msg/enquiries card here with Links */}
      </>
      }
    </>
  );
};

export default AdminPage;
