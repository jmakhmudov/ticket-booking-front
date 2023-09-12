import Navbar from "@/components/Navbar";
import EventsList from "@/components/EventsList";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen">
      <Navbar />
      <EventsList />
    </main>
  )
}
