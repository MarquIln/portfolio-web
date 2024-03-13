import { CardComponent } from "@/components/Card";
import Header from "@/components/Header"

export default function Home() {
  return (
    <div className="flex">
      <Header />
      <main className="flex px-12 py-12">
          <CardComponent />
      </main>
    </div>
  );
}
