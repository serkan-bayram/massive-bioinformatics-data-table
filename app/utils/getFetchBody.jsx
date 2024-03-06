import { useSetParams } from "./useSetParams";

// Returns url params as an array of objects
export function getFetchBody() {
  const { params } = useSetParams();

  const fetchBody = [];
  for (const [key, value] of params.entries()) {
    fetchBody.push({ [key]: value });
  }

  return fetchBody;
}
