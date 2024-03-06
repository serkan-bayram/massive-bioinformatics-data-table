import { Table } from "@/app/components/Table";
import { Filters } from "@/app/components/Filters";
import { getData } from "./utils/getData";

export default async function Home() {
  const initialData = await getData();

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
