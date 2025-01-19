import { Button } from "@/app/_components/ui/button";
import Form from "./_components/ui/Form";

export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center bg-slate-100"
      suppressHydrationWarning
    >
      <Form />
    </main>
  );
}
