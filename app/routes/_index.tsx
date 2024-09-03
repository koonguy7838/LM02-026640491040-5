import type { MetaFunction } from "@remix-run/node";
import { Menu } from "./template/menu";
import { Header } from "./template/header";
import { Footer } from "./template/footer";
import { MyHomePage } from "./MyHomePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Herb" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Menu/>
      <Header/>
      <div className="font-sans m-0 p-4 bg-gray-400 h-screen" style={{paddingTop: "15%;"}}>
        <h1 className="text-6xl text-center text-white">Welcome</h1>
        <MyHomePage/>
      </div>
      <Footer/>
    </div>
  );
}
