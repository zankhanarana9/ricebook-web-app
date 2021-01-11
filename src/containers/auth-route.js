import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
    console.log(props)
  const { isAuthUser, type } = props;
  if (type === "guest" && isAuthUser) return <Redirect to="/" />;
  else if (type === "private" && !isAuthUser) return <Redirect to="/main/" />;

  return <Route {...props} />;
};

const mapStateToProps = ({ isAuthUser }) => ({
  isAuthUser
});

export default connect(mapStateToProps)(AuthRoute);