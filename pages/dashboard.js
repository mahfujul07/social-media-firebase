import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading) return <h1>Loading</h1>;
  if (!user) route.push("/login");
  if (user)
    return (
      <>
        <Header />

        <div className="flex items-center justify-center mt-9">
          <h1 className="text-4xl font-semibold">
            Welcome to your dashboard {user.displayName}
          </h1>

          <button
            onClick={() => auth.signOut()}
            className="px-4 py-2 ml-4 text-white bg-blue-500 rounded-md"
          >
            Logout
          </button>
        </div>
        <div className="mt-5 items-center justify-center">
          <h1 className="">username: {user.displayName}</h1>
          <h1 className="">Email: {user.email}</h1>
          <h1 className="">Phone Number: {user.phoneNumber}</h1>
          <h1 className="">UID: {user.uid}</h1>
          <h1>Last Login: {user.metadata.lastSignInTime}</h1>
          <h1 className="">Account created on: {user.metadata.creationTime}</h1>
        </div>
      </>
    );
}
