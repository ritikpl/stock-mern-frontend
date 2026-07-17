import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message);

        // Token save
        localStorage.setItem("token", data.token || "loggedin");

        setTimeout(() => {
          window.location.href = import.meta.env.VITE_DASHBOARD_URL;
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      if(err.response){
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong")
      }
      console.log(err);
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-page">
    <div className="form_container">
      <h2>Login Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={handleOnChange}
          />
        </div>

        <button type="submit">Login</button>

        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>

      <ToastContainer
  position="top-right"
  autoClose={2500}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick={true}
  pauseOnHover={true}
  draggable={true}
  theme="light"
/>
    </div>
    </div>
  );
};

export default Login;