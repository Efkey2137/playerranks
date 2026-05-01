"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";

//Pages
import Dashboard from "./pages/Dashboard";
import Players from "./pages/Players"; 

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Dashboard />;
      case "players":
        return <Players />;
      default:
        return <div>Wybierz opcję z menu.</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
        <aside className="w-1/7 bg-gray-900 text-white py-4">
          <Navbar setActiveTab={setActiveTab} />
        </aside>

        <main className="flex-1 p-10 bg-gray-800">
          {renderContent()}
        </main>
    </div>
  );
}