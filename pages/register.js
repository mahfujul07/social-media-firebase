import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsFillShieldFill } from "react-icons/bs";
import Link from "next/link";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";


const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
    const [user, loading] = useAuthState(auth);


  // register with validation 
  const register = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      router.push("/dashboard");
    }
  };

  // sign in with google
  const GoogleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      console.log(result.user);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      <h1 className="">Error while signIn</h1>;
    }
  };

  // sign in with github
  const GithubProvider = new GithubAuthProvider();
  const GithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GithubProvider);
      console.log(result.user);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-bg flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-96 bg-white p-5 rounded-md shadow-md">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          objectFit="contain"
        />
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
        <div className="mt-5">
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
            onClick={GoogleLogin}
          >
            <FcGoogle size={30} />
            <span
              className="ml-3 text-indigo-700 font-semibold"
              disabled={loading}
              to="/dashboard"
            >
              Continue With Google
            </span>
          </button>
        </div>
        <div className="mt-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 focis:outline-none"
            onClick={GithubLogin}
          >
            <BsGithub size={30} />
            <span
              className="ml-3 text-indigo-700 font-semibold"
              disabled={loading}
              to="/dashboard"
            >
              Continue With GitHub
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;