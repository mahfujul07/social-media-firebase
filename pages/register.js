import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsTwitter, BsFacebook, BsFillShieldFill } from "react-icons/bs";
import Link from "next/link";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const register = (e) => {
    e.preventDefault();
    signUp("credentials", {
      redirect: false,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    }).then((res) => {
      if (res.ok) {
        router.push("/");
      }
    });
  };

  return (
    <div className="auth-bg flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-96 bg-white p-5 rounded-md shadow-md">
        <Image src="/logo.png" width={200} height={200} objectFit="contain" />
        <form className="flex flex-col items-center justify-center w-full mt-5">
          <input
            type="text"
            placeholder="User Name"
            className="w-full p-3 rounded-md border border-gray-300 outline-none"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 outline-none mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md border border-gray-300 outline-none mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-md border border-gray-300 outline-none mt-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="submit w-full p-3 bg-blue-500 text-white rounded-md mt-3"
            onClick={register}
          >
            <span>
              <BsFillShieldFill className="inline-block mr-2" />
            </span>
            Register
          </button>
        </form>
        <p className="mt-3">
          Already a member?{" "}
          <Link href="/login">
            <a className="text-blue-500">Login</a>
          </Link>
        </p>
        <div className="flex items-center justify-center mt-3">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mr-3">
            <FcGoogle className="text-2xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full mr-3">
            <BsGithub className="text-2xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 text-blue-400 rounded-full mr-3">
            <BsTwitter className="text-2xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center w-8 h-8 text-blue-600 rounded-full mr-3">
            <BsFacebook className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;