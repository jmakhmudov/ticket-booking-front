import Navbar from "@/components/Navbar";
import EventsList from "@/components/EventsList";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen">
      <Navbar />
      <h1 className="pl-5 sm:pl-10 mt-5 text-2xl font-semibold">Events</h1>
      <EventsList />
    </main>
  )
}
