import ButtonExamples from "@/components/ButtonExamples";
import CardExamples from "@/components/CardExamples";
import InputExamples from "@/components/InputExamples";
import DialogExamples from "@/components/DialogExamples";

function App() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-12">
      <h1 className="text-3xl font-extrabold">Guía shadcn/ui — 4 componentes</h1>
      <ButtonExamples />
      <CardExamples />
      <InputExamples />
      <DialogExamples />
    </main>
  );
}

export default App;
