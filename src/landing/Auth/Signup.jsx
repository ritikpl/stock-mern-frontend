import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = inputValue;

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
        `${import.meta.env.VITE_API_URL}/signup`,
        inputValue,
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message);

         setTimeout(() => {
          window.location.href = import.meta.env.VITE_DASHBOARD_URL;
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
       console.log(err.response);
       console.log(err.response.data);
       toast.error(
        err.response?.data?.message || "Something went wrong"
       );
       console.log(err);
    }

    setInputValue({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-page">
    <div className="form_container">
      <h2>Signup Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={handleOnChange}
          />
        </div>

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

        <button type="submit">Signup</button>

        <span>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer
  position="top-right"
  autoClose={2500}
  theme="colored"
  hideProgressBar={true}
  closeButton={false}
  closeOnClick={false}
  pauseOnHover={false}
  draggable={false}
/>
    </div>
    </div>
  );
};

export default Signup;