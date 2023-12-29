import { BimesterSection } from "@/components/shards/bimester-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <BimesterSection
        bimester="primeiro"
        classes={[
          {
            classType: {
              createdAt: new Date(),
              grade: 5,
              id: "1",
              name: "biologia",
            },
            handleDelete: async (id: string) => {
              "use server";
            },
          },
          {
            classType: {
              createdAt: new Date(),
              grade: 6,
              id: "2",
              name: "artes",
            },
            handleDelete: async (id: string) => {
              "use server";
            },
          },
          {
            classType: {
              createdAt: new Date(),
              grade: 8,
              id: "3",
              name: "geografia",
            },
            handleDelete: async (id: string) => {
              "use server";
            },
          },
        ]}
      />

      <BimesterSection
        bimester="segundo"
        classes={[
          {
            classType: {
              createdAt: new Date(),
              grade: 8,
              id: "3",
              name: "geografia",
            },
            handleDelete: async (id: string) => {
              "use server";
            },
          },
        ]}
      />
    </main>
  );
}
