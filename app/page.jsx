import { Table } from "@/app/components/Table";
import { Filters } from "@/app/components/Filters";

export default async function Home() {
  const initialData = [
    { name: "Serkan", balance: 21.75, createdAt: "21-01-2024" },
    { name: "Mustafa", balance: 11.25, createdAt: "24-01-2024" },
    { name: "Pelin", balance: 123.25, createdAt: "21-03-2024" },
  ];

  return (
    <main
      className="flex min-h-screen flex-col 
    items-center justify-between p-24 "
    >
      <div className="w-full">
        <Filters />
        <Table initialData={initialData} />
      </div>
    </main>
  );
}
