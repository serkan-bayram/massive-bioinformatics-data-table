const URL = "http://localhost:3000";

export async function getData(params) {
  const data = await fetch(`${URL}/api/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params || null),
  });

  return await data.json();
}
