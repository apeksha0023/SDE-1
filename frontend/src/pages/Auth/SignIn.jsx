import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);  // State for error handling

  const onSubmit = async (data) => {
    try {
      const userData = await loginUser(data);
      if (userData && userData.token) {
        setUser(userData);  // Store the user in context or local storage
        navigate("/");  // Redirect to the dashboard after successful login
      } else {
        setError("Invalid email or password.");  // Display an error message if login fails
      }
    } catch (err) {
      setError("An error occurred. Please try again.");  // Handle any network/API errors
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign In</h2>

        {/* Display error message if there is an error */}
        {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}

        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="mb-4 w-full"
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="mb-6 w-full"
        />
        <Button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Login
        </Button>
        <div className="mt-6 text-center text-sm">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Don't have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
