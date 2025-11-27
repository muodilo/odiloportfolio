import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">
        <h1 className="text-4xl font-bold">Welcome</h1>
      </main>
    </div>
  );
}
