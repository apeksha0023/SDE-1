import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/services/authService";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await registerUser(data);
    if (result) {
      navigate("/signin");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

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
          Register
        </Button>
        <div className="mt-6 text-center text-sm">
          <span>Already have an account? </span>
          <a href="/signin" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
