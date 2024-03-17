import { CardComponent } from "@/components/Card";
import { Header } from "@/components/Header"
import { AboutMe } from "@/pages/AboutMe";

export default function Home() {
  return (
    <div className="flex">
      <Header name="Marcos"/>
      <main className="flex px-12 py-12 flex-col">
        <AboutMe />
        <CardComponent />
      </main>
    </div>
  );
}
