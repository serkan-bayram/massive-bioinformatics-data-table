import { Table } from "@/app/components/Table";
import { Filters } from "@/app/components/Filters";
import { getData } from "./utils/getData";

export default async function Home({ searchParams }) {
  const initialData = await getData([searchParams]);

  return (
    <main
      className="flex min-h-screen flex-col 
    items-center justify-between lg:p-24 p-3 "
    >
      <div className="w-full">
        <Filters />
        <Table initialData={initialData} />
      </div>
    </main>
  );
}
