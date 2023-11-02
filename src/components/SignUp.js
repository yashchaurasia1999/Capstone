import React, { useState } from "react";
import signup from "../components/signup.css";
import register from "../Images/register.png";
import { Navigate, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [userName, setUserName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [mobErr, setMobErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [userErr, setUserErr] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkErr, setCheckErr] = useState("");
  const navigate = useNavigate();

  const nameExp = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
  const userExp = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;
  const mobileExp = /^[0-9]{10}$/;
  const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  function handleSignup() {
    if (!nameExp.test(name)) {
      setNameErr("please fill correct details");
    }
    if (!userExp.test(userName)) {
      setUserErr("please fill correct details");
    }
    if (!mobileExp.test(mobile)) {
      setMobErr("please fill correct details");
    }
    if (!emailExp.test(email)) {
      setEmailErr("please fill correct details");
    }
    if (!isChecked) {
      setCheckErr("Please check the box");
    }
    if (
      nameExp.test(name) &&
      userExp.test(userName) &&
      mobileExp.test(mobile) &&
      emailExp.test(email) &&
      isChecked
    ) {
      const userData = {
        name: name,
        email: email,
        mobile: mobile,
        user: userName,
      };
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/genres");
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 img-style">
            <img src={register} alt="image" className="reg-img" />
            <h1 className="">Discover new things on Superapp</h1>
          </div>
          <div className="col-md-6">
            <div className="heading">
              <h2 className="text-center signup-text">Super app</h2>
              <br />
              <p className="paragraph">Create your new account</p>
            </div>

            <div className="form form-style">
              <div className="mb-2">
                <input
                  type="text"
                  value={name}
                  className="form-control inputStyle"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <p style={{ color: "red", marginLeft: "30px", marginTop:'-20px'}}>{nameErr}</p>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  value={userName}
                  className="form-control inputStyle"
                  id="exampleFormControlInput1"
                  placeholder="UserName"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <p style={{ color: "red", marginLeft: "30px", marginTop:'-20px',marginBottom:'-10px' }}>{userErr}</p>
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  value={email}
                  className="form-control inputStyle"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ color: "red", marginLeft: "30px", marginTop:'-20px' }}>{emailErr}</p>
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  value={mobile}
                  className="form-control inputStyle"
                  id="exampleFormControlInput1"
                  placeholder="Mobile"
                  onChange={(e) => setMobile(e.target.value)}
                />
                <p style={{ color: "red", marginLeft: "30px", marginTop:'-20px' }}>{mobErr}</p>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  id="flexCheckDefault"
                  style={{ marginLeft: "13px", marginTop: "10px" }}
                />
                {isChecked ? (
                  ""
                ) : (
                  <p style={{ color: "red", marginLeft: "30px" }}>{checkErr}</p>
                )}
                <label
                  className="form-check-label check-style"
                  htmlfor="flexCheckDefault"
                >
                  Share my registration data with Superapp
                </label>
              </div>
              <div className="" style={{ marginLeft: "30px" }}>
                <button
                  type="button"
                  className="btn btn-success btn-lg but"
                  onClick={handleSignup}
                >
                  SIGN UP
                </button>
              </div>
            </div>
            <div>
              <p className="para-style">
                By clicking on Sign up. you agree to Superapp{" "}
                <span style={{ color: "#72DB73" }}>
                  Terms and Conditions of Use
                </span>
              </p>
              <p className="para-style">
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp{" "}
                <span style={{ color: "#72DB73" }}>Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
