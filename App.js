import React from "react";
import "./App.css";

class SigninContainer extends React.Component {
  render() {
    return (
       <div className={"authBox"}>
        <div className={"rightBox"}>
          <div className={"imageAuth"} />
        </div>
        <div className={"leftBox"}>
          <div className={"box"}>
            <div className={"logo"}>WEEbify</div>
            <div className={"pageswitch"}>
              <a href="#" className="loginswitch">
                Login
              </a>
              <a href="#" className="signupswitch">
                Signup
              </a>
            </div>
            <div className={"titleAuth"}>Log In</div>
            <div className={"inputSBox"}>
              <input className={"inputS"} type={"text"} placeholder={"Email"} />
            </div>
            <div className={"inputSBox"}>
              <input
                className={"inputS"}
                type={"password"}
                placeholder={"Password"}
              />
            </div>
            <div className={"contentBox"}>
              <div className="checkboxBox">
                <input type={"checkbox"} className={"checkbox"} />
                <label className={"checkboxLabel"}>Remember Me</label>
              </div>
              <div className={"text1"}>Forgot Password?</div>
            </div>
            <div className={"btnAuth"}>Log In</div>
          </div>
        </div>
      </div>
    );
  }
}

class SignupContainer extends React.Component {
  render() {
    return (
      <div className={"authBox"}>
        <div className={"rightBox"}>
          <div className={"imageAuth"} />
        </div>
        <div className={"leftBox"}>
          <div className={"box"}>
            <div className={"logo"}>WEEbify</div>
            <div className={"pageswitch"}>
              <a href="#" className="loginswitch">
                Login
              </a>
              <a href="#" className="signupswitch">
                Signup
              </a>
            </div>
            <div className={"titleAuth"}>Log In</div>
            <div className={"inputSBox"}>
              <input className={"inputS"} type={"text"} placeholder={"Email"} />
            </div>
            <div className={"inputSBox"}>
              <input
                className={"inputS"}
                type={"password"}
                placeholder={"Password"}
              />
            </div>
            <div className={"contentBox"}>
              <div className="checkboxBox">
                <input type={"checkbox"} className={"checkbox"} />
                <label className={"checkboxLabel"}>Remember Me</label>
              </div>
              <div className={"text1"}>Forgot Password?</div>
            </div>
            <div className={"btnAuth"}>Log In</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SigninContainer;



