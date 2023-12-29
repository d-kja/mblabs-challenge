import { BimesterSection } from "@/components/shards/bimester-section";

export default function Home() {
  return (
    <main>
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
        ]}
      />
    </main>
  );
}
