import { Header, LeftSidebar, RightSidebar, Posts } from "../components";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="bg-slate-200">
        <div className="flex w-[80%] m-auto justify-between">
          <LeftSidebar />
          <Posts />
          <RightSidebar />
        </div>
      </div>

    </div>
  );
}
