import Hero from "./components/Hero";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("./components/Dashboard"), {
  loading: () => <div className="loading">Loading...</div>,
});

export default function Home() {
  return (
    <main className="main-container">
      <Hero />
      <Dashboard />
      <Footer />
    </main>
  );
}
