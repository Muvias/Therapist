import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Expertise } from "@/components/Expertise";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Sessions } from "@/components/Sessions";
import { Testimonials } from "@/components/Testimonials";
import { Therapy } from "@/components/Therapy";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <About />
      <Expertise />
      <Therapy />
      <Sessions />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  )
}
