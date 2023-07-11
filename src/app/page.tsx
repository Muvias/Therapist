import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <About />
      <Expertise />
    </main>
  )
}
