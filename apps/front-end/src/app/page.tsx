import { BimesterSection } from "@/components/shards/bimester-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 max-w-screen-lg mx-auto ">
      <BimesterSection bimester="primeiro" />
      <BimesterSection bimester="segundo" />
      <BimesterSection bimester="terceiro" />
      <BimesterSection bimester="quarto" />
    </main>
  );
}
