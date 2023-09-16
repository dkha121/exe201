import React from "react";
import "./Login.css";
import applelogo from "./apple.png";
import googlelogo from "./google.png";
import microsoftlogo from "./microsoft.png";
import rightpanelbg from './background2.png'

function Login() {
  return (
    <div className="login-container" style={{backgroundImage: `url(${rightpanelbg})`}}>
      <div className="css-2vcdms login-form">
        <div className="css-17v1pnd login-form-block">
          <div className="css-1tzxlvu left-panel">
            <div className="css-1157cvj login-info">
              <div className="css-2f1569 login-with">
                <p className="chakra-text css-xoel77 login-with-title">
                  Login with
                </p>
                <button
                  type="button"
                  className="chakra-button css-vg6uxl login-with-button"
                >
                  <span className="chakra-button__icon css-1wh2kri">
                    <img src={applelogo} alt="" />
                  </span>
                  <span className="chakra-button__icon css-1wh2kri"></span>Apple
                </button>
                <button
                  type="button"
                  className="chakra-button css-vg6uxl login-with-button"
                >
                  <span className="chakra-button__icon css-1wh2kri">
                    <img src={googlelogo} alt="" />
                  </span>
                  <span className="chakra-button__icon css-1wh2kri"></span>
                  Google
                </button>
                <button
                  type="button"
                  className="chakra-button css-vg6uxl login-with-button"
                >
                  <span className="chakra-button__icon css-1wh2kri">
                    <img src={microsoftlogo} alt="" />
                  </span>
                  <span className="chakra-button__icon css-1wh2kri"></span>
                  Microsoft
                </button>
                <div className="css-1dz5bpa">
                  <hr
                    aria-orientation="horizontal"
                    className="chakra-divider css-1gpkjrz"
                  />
                </div>
              </div>
              <div className="css-1ft24js">
                <div className="css-1irchjy">
                  <form>
                    <div className="css-omr7ce">
                      <div
                        role="group"
                        className="chakra-form-control css-10cfm65 login-field"
                      >
                        <label
                          id="email-label"
                          htmlFor="email"
                          className="chakra-form__label css-nfgoc1 login-field-title"
                        >
                          <p>Email</p>
                        </label>
                        <input type="email" name="email"  className="chakra-input css-fqwbme login-field-intput" />
                        {/* <input
                          type="email"
                          name="email"
                          placeholder="name@host.com"
                          // autoComplete="username"
                          id="email"
                          required=""
                          aria-required="true"
                          className="chakra-input css-fqwbme login-field-intput"
                          value=""
                        /> */}
                      </div>
                      <div
                        role="group"
                        className="chakra-form-control css-10cfm65 login-field"
                      >
                        <label
                          id="password-label"
                          htmlFor="password"
                          className="chakra-form__label css-nfgoc1 login-field-title"
                        >
                          <p>Password</p>
                        </label>
                        {/* <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          // autoComplete="current-password"
                          id="password"
                          required=""
                          aria-required="true"
                          className="chakra-input css-fqwbme login-field-intput"
                          value=""
                        /> */}
                         <input type="password" name="password"  className="chakra-input css-fqwbme login-field-intput" />
                      </div>
                      <p className="chakra-text css-1o23m2h login-field-forgot">
                        Forgot your password?
                      </p>
                      <button
                        type="submit"
                        className="chakra-button css-1wv5yw1 login-button"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
                <div className="css-v6c1u4 need-an-account">
                  <p className="chakra-text css-1a9vbqv">
                    Need an account?{" "}
                    <a className="chakra-link css-1w4zcia" href="#signup">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="css-15zvgqv login-footer">
              <div className="css-0">
                <p className="chakra-text css-txhr65">
                  <a target="_blank" href="#privacy" rel="noreferrer">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="css-0">
                <p className="chakra-text css-txhr65">
                  <a target="_blank" href="#terms" rel="noreferrer">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="css-5ab1t1 right-panel">
            <img src={rightpanelbg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
