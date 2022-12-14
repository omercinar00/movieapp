import React, { useState} from "react";
import { forgotPassword, signIn, signUpProvider } from "../auth/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  console.log('email', email)
  console.log('password', password)
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  const navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    signIn(email,password,navigate)

  }
  
  return (
    <div className="login-div d-flex">
      <div className="form-image d-none d-md-block ">
        <img
          className="login-img"
          src={"https://picsum.photos/800/800"}
          alt="sample-movie"
        />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="link"
          onClick={()=>forgotPassword(email)}>Forgot Password?</div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
        </form>
        <button
          className="btn btn-primary form-control"
          onClick={handleProviderLogin}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
