import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AuthForm from "./authForm";
import PreventSignInRoute from "hoc/preventSignInRoute";

const RegisterLogin = (props) => {
  const [formType, setFormType] = useState(false);

  const toggleFormType = () => {
    setFormType(!formType);
  };

  return (
    <PreventSignInRoute>
      <div className="page_wrapper">
        <div className="container">
          <div className="register_login_container">
            <div className="left">
              {formType ? (
                <>
                  <h1>New customers</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis sed lacus nisl. Proin id purus leo. Cras odio ipsum,
                    maximus at ex id, interdum commodo nulla. Pellentesque quis
                    vehicula neque.
                  </p>
                </>
              ) : (
                <>
                  <h1>Welcome back</h1>
                  <p>
                    Duis pharetra diam vel varius commodo. Suspendisse bibendum,
                    quam eu sagittis ultricies, quam ligula porta lorem, eget
                    efficitur arcu magna eget ligula. Fusce rutrum est enim.
                  </p>
                </>
              )}
              <Button
                variant="contained"
                color="default"
                size="small"
                onClick={() => toggleFormType()}
              >
                {formType ? "Already registered ?" : "Need to register"}
              </Button>
            </div>
            <div className="right">
              <h2>{formType ? "Register" : "Sign in"}</h2>
              <AuthForm formType={formType} {...props} />
            </div>
          </div>
        </div>
      </div>
    </PreventSignInRoute>
  );
};

export default RegisterLogin;
