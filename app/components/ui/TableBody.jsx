"use client";

import { getData } from "@/app/utils/getData";
import { getFetchBody } from "@/app/utils/getFetchBody";
import { useQuery } from "@tanstack/react-query";

export function TableBody({ initialData }) {
  const fetchBody = getFetchBody();

  const {
    isPending,
    error,
    data: filteredData,
  } = useQuery({
    queryKey: ["data", { fetchBody }],
    queryFn: () => getData(fetchBody),
    initialData: initialData,
  });

  if (isPending) return <div>Loading...</div>;

  if (filteredData.length === 0) {
    return (
      <div
        className="absolute mt-8 left-1/2 
      -translate-x-1/2 text-center"
      >
        No results has found
      </div>
    );
  }

  // data is going to be filteredData if it is exists
  const data = filteredData || initialData;

  return (
    <tbody>
      {data.map((data, index) => (
        <tr
          className="border-b border-x
         border-muted transition-colors
         hover:bg-muted/50 last:border-b-0"
          key={index}
        >
          {Object.entries(data).map(([key, value]) => (
            <td className="px-4 p-4" key={key}>
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
