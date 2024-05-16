import "./SignUp.css";
import img from "../public/Yasser_Imane.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const isUpperCase = (str) => /[A-Z]/.test(str);
const isDigit = (str) => /\d/.test(str);
const isSpecialCharacter = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);
const isMoreThan8 = (value) => value.length >= 8;

export default function SignUp() {
  const [role, setRole] = useState("jobSeeker");
  const [showP, setshowP] = useState(false);
  const [infos, setInfos] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Hi ana Imane lkhayba");
    // console.log('Your acc had been creted sucsuflly : ', data);
  };
  //HH SFE TAL GHDA WNCHOF MNACH
  // HHHHH SAFI ALKHAAYB
  //<YAAAAAAAAAAAAAAAAAAAK>
  //CONST IMANE=  KHAYBA
  //</YAAAAAAAAAAAAAAAAAAAK>

  return (
    <div className="sign-up">
      <div className="sign-up-body">
        <div className="sign-up-choix">
          <button
            className={role == "jobSeeker" ? "choix-active" : ""}
            onClick={() => setRole("jobSeeker")}
          >
            Job Seeker
          </button>
          <button
            className={role == "company" ? "choix-active" : ""}
            onClick={() => setRole("company")}
          >
            Company
          </button>
        </div>

        <div className="sing-up-title">
          <h2>Get more opportunities</h2>
        </div>

        <div className="sign-up-with-google">
          <div></div>
        </div>

        <div className="sign-up-sparate">
          <hr />
          <span>Or Sign up with email</span>
          <hr />
        </div>

        <div className="sign-up-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="sign-up-input">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                {...register("name", { required: "This field is required" })}
              />
              {errors.name && (
                <span className="error">{errors.name.message}</span>
              )}
            </div>

            <div className="sign-up-input">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter email address"
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="error">Error: {errors.email.message}</span>
              )}
            </div>

            <div className="sign-up-input">
              <label htmlFor="password">Password</label>
              <div className="sign-up-pswd">
                <input
                  type={showP ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "This field is required",
                    validate: (value) => {
                      const regex =
                        /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[!@#$%^&(),.?":{}|<>])[a-zA-Z\d!@#$%^&(),.?":{}|<>]{8,}$/;
                      return regex.test(value) || "Password should be strong";
                    },
                  })}
                  value={infos.password}
                  onChange={(e) =>
                    setInfos({ ...infos, password: e.target.value })
                  }
                />
                <div className="sign-up-pswd-icons">
                  {showP ? (
                    <button
                      onClick={(e) => {
                        setshowP(false);
                        e.preventDefault();
                      }}
                    >
                      <i className="fa-solid fa-eye-slash"></i>
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        setshowP(true);
                        e.preventDefault();
                      }}
                    >
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  )}
                </div>
              </div>
              {/* {errors.password && <span className="error">{errors.password.message}</span>} */}
            </div>

            <div className="sign-up-pswd-cn">
              <span
                style={
                  isMoreThan8(infos.password)
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                • Minimum 8 characters
              </span>
              <span
                style={
                  isUpperCase(infos.password)
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                • At least one uppercase letter
              </span>
              <span
                style={
                  isDigit(infos.password)
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                • At least one number
              </span>
              <span
                style={
                  isSpecialCharacter(infos.password)
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                • At least one special character
              </span>
            </div>

            <div className="sign-up-btn">
              <button type="submit">Continue</button>
            </div>
          </form>
          <h4>
            already have an account? <Link to="/login">Login</Link>
          </h4>
          <p>
            By Clicking 'Continue', you acknowledge that you have read and
            accept the <span>Term of Service</span> and <span>Policy</span>
          </p>
        </div>
      </div>
       
    </div>
  );
}
