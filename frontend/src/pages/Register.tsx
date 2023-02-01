import React from "react";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContent } from "react-toastify";
import { RootState } from "../app/store";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import authService from "../features/auth/authService";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";

export default function Register() {
  interface FormData {
    name: string;
    email: string;
    password: string;
    password2: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isError) {
      // toast.error(message)
      console.log(message);
    }

    if (isSuccess || user) {
      console.log(user);
      navigate("/");
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    if (password !== password2) {
      toast.error("Passwords don't match");
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      dispatch(register(newUser));
    }

    dispatch(reset());
  };

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col mt-20 mb-16 mx-auto items-center w-full max-w-2xl border p-6 rounded-md bg-[#f0eff4] shadow-md">
      <section className="flex flex-col items-center text-2xl font-medium mb-12 mt-12 p-4">
        <h1 className="flex items-center text-5xl mb-6 text-[#003049]">
          <FaUser className="flex items-center align-middle mr-4" /> Register
        </h1>
        <p className="text-5xl text-[#003049]">Please create an account</p>
      </section>
      <section className="w-full mb-16">
        <form onSubmit={onSubmit} className="w-7/10 mx-auto">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={onChange}
              className="w-full p-2.5 border border-gray-300 rounded-md mb-4 font-inherit"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={onChange}
              className="w-full p-2.5 border border-gray-300 rounded-md mb-4 font-inherit"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
              className="w-full p-2.5 border border-gray-300 rounded-md mb-4 font-inherit"
            />
          </div>
          <div>
            <input
              type="password"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Re-enter password"
              onChange={onChange}
              className="w-full p-2.5 border border-gray-300 rounded-md mb-4 font-inherit"
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-3 px-4 w-full rounded-md text-white text-center cursor-pointer flex items-center justify-center bg-[#003049] border-[#003049] hover:text-[#f77f00]"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
