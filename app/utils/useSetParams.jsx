import { usePathname, useRouter, useSearchParams } from "next/navigation";

/* Useful functions 
params.get("param") -> Returns search param, returns null if not exists
params.set("sort", "ASC") -> Sets search param -> sort=ASC
replace -> Put params to the URL -> replace(`${pathname}?${params.toString()}`)
*/

// Custom function to handle search params
export function useSetParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  return { params, replace, pathname };
}
