import { Table } from "@/app/components/Table";
import { Filters } from "@/app/components/Filters";
import { unstable_noStore } from "next/cache";

export default async function Home() {
  unstable_noStore();

  let initialData = await fetch("http://localhost:3000/api/data", {
    method: "POST",
  });

  initialData = await initialData.json();

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
