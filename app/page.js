import Image from "next/image";
import Navbar from "@/app/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
       <h1 className="text-6xl text-blue-500 mt-40">  Welcome to power!!</h1>



    </main>
  );
}
