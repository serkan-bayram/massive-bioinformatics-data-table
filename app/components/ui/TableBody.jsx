"use client";

import { getData } from "@/app/utils/getData";
import { getFetchBody } from "@/app/utils/getFetchBody";
import { useQuery } from "@tanstack/react-query";
import { Error } from "./Error";
import { removeOtherOptions } from "@/app/utils/removeOtherOptions";
import { useSetParams } from "@/app/utils/useSetParams";

export function TableBody({ columns, initialData }) {
  const fetchBody = getFetchBody();

  const { params, replace, pathname } = useSetParams();

  const {
    isPending,
    error,
    data: filteredData,
  } = useQuery({
    queryKey: ["data", { fetchBody }],
    queryFn: () => getData(fetchBody),
    initialData: initialData,
  });

  const filteredError = filteredData.error;

  if (isPending) return <div>Loading...</div>;

  if (filteredData.data.length === 0) {
    return (
      <tbody
        className="absolute mt-8 left-1/2 
      -translate-x-1/2 text-center"
      >
        <tr>
          <td>No results has found</td>
        </tr>
      </tbody>
    );
  }

  // finalData is going to be filteredData if it is exists
  const finalData = filteredData.data || initialData.data;

  return (
    <>
      <tbody>
        {filteredError && <Error error={filteredError} />}
        {finalData.map((data, index) => (
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
    </>
  );
}
