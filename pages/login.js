import { signIn } from "next-auth/react";
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
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [user]);

  // login with credentials (email and password) using firebase auth
  const login = (e) => {
    e.preventDefault();
    signIn("credentials", {
      redirect: false,
      email,
      password,
    }).then((res) => {
      if (res.ok) {
        router.push("/dashboard");
      } else {
        console.log(res);
      }
    });
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
      setError("Failed to sign in");
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
      setError("Failed to sign in");
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
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 outline-none"
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
          <button
            type="submit"
            className="submit w-full p-3 bg-blue-500 text-white rounded-md mt-3"
            onClick={login}
          >
            <span>
              <BsFillShieldFill className="inline-block mr-2" />
            </span>
            Login
          </button>
        </form>
        <p className="mt-3 font-semibold">
          Not a member?{" "}
          <Link href="/register">
            <span className="text-blue-500 cursor-pointer">Register Now</span>
          </Link>
        </p>
        <p className="mt-3">Or continue with these social profile</p>
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

export default Login;
