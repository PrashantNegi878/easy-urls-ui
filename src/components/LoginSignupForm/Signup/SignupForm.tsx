/* eslint-disable @typescript-eslint/no-explicit-any */
// LoginSignupPage.js
import axios from "axios";
import { useEffect, useState } from "react";
import { GENERIC_FAILURE_MESSAGE, baseUrl } from "../../../helpers/constants";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
      setError("Password must contain at least one letter and one number.");
      return;
    }

    setError(null);
    const formData = { name, email, password };

    try {
      const resp: any = await axios.post(baseUrl + "/user/signup", formData);
      localStorage.setItem("eurl_token", resp.data.token);
      localStorage.setItem("eurl_userName", resp.data.userName);
      navigate("/");
    } catch (resp: any) {
      resp.response?.data?.message
        ? setError(resp.response.data.message)
        : setError(GENERIC_FAILURE_MESSAGE);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("eurl_token");
    if (token) navigate("/");
  }, [navigate]);

  return (
    <div className="m-10">
      <div className="flex py-10 px-10 items-center justify-center bg-banner bg-cover bg-center rounded-3xl">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
            Signup
          </h2>
          {error && (
            <div className="bg-red-100 border text-center border-red-400 text-red-700 px-4 py-2 mb-4 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Signup
            </button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            Already have an account?
            <span
              className="ml-2 text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
