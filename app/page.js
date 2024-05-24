import Image from "next/image";
import Navbar from "@/app/nav";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar />
            <div className="">
                <div className="container mx-auto text-center">
                    <h1 className="text-6xl font-bold text-blue-500 mt-40 uppercase">Welcome to power!!</h1>
                    <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eget porta convallis, lectus mauris blandit lectus, at ultrices sapien nulla sit amet sem. Sed aliquet, elit eget tincidunt luctus, sem mauris ultricies ligula, vel tincidunt elit nulla a nunc. Sed vehicula, ligula vel tincidunt aliquet, sem velit lacinia nunc, a ullamcorper nisl mauris in nulla.</p>
                    <a href="#" className="mt-8 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</a>
                </div>
            </div>
        </main>
    );
}