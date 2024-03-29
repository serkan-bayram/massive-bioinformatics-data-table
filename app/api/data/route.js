import { byAge, byBalance, byCount, bySearch } from "@/app/utils/filter";

export async function POST(request) {
  const data = [
    {
      name: "Serkan",
      age: 20,
      balance: "56,77 ₺",
      gender: "M",
    },
    {
      name: "Elena",
      age: 25,
      balance: "120,45 ₺",
      gender: "F",
    },
    {
      name: "Carlos",
      age: 30,
      balance: "89,12 ₺",
      gender: "M",
    },
    {
      name: "Sophie",
      age: 22,
      balance: "40,20 ₺",
      gender: "F",
    },
    {
      name: "Ahmet",
      age: 28,
      balance: "75,60 ₺",
      gender: "M",
    },
    {
      name: "Mia",
      age: 24,
      balance: "95,30 ₺",
      gender: "F",
    },
    {
      name: "Kaan",
      age: 26,
      balance: "64,50 ₺",
      gender: "M",
    },
    {
      name: "Isabella",
      age: 23,
      balance: "110,80 ₺",
      gender: "F",
    },
    {
      name: "Ali",
      age: 29,
      balance: "82,15 ₺",
      gender: "M",
    },
    {
      name: "Lily",
      age: 21,
      balance: "50,90 ₺",
      gender: "F",
    },
    {
      name: "Mustafa",
      age: 27,
      balance: "70,05 ₺",
      gender: "M",
    },
    {
      name: "Emma",
      age: 31,
      balance: "105,40 ₺",
      gender: "F",
    },
    {
      name: "Omar",
      age: 32,
      balance: "78,35 ₺",
      gender: "M",
    },
    {
      name: "Chloe",
      age: 29,
      balance: "55,75 ₺",
      gender: "F",
    },
    {
      name: "Aylin",
      age: 23,
      balance: "68,20 ₺",
      gender: "F",
    },
    {
      name: "Gabriel",
      age: 27,
      balance: "92,10 ₺",
      gender: "M",
    },
    {
      name: "Aria",
      age: 26,
      balance: "45,60 ₺",
      gender: "F",
    },
    {
      name: "Selim",
      age: 24,
      balance: "80,25 ₺",
      gender: "M",
    },
    {
      name: "Olivia",
      age: 28,
      balance: "100,15 ₺",
      gender: "F",
    },
    {
      name: "Deniz",
      age: 22,
      balance: "60,30 ₺",
      gender: "M",
    },
  ];

  const requestBody = await request.json();

  // If requestBody is null we can just return
  // the whole data because there is not any filter
  if (requestBody === null) return Response.json({ data: data, error: null });

  let filteredArray = [...data];

  const usedFilters = {};

  for (let i = 0; i < requestBody.length; i++) {
    const filter = Object.keys(requestBody[i]);
    usedFilters[filter] = requestBody[i][filter];
  }

  // We can prioritize filters by order
  if (usedFilters.hasOwnProperty("search")) {
    filteredArray = bySearch(filteredArray, usedFilters.search);
  }
  if (usedFilters.hasOwnProperty("count")) {
    filteredArray = byCount(filteredArray, usedFilters.count);
  }
  if (
    usedFilters.hasOwnProperty("age") &&
    usedFilters.hasOwnProperty("balance")
  ) {
    return Response.json({ data: filteredArray, error: "multipleSortOptions" });
  }
  if (usedFilters.hasOwnProperty("age")) {
    byAge(filteredArray, usedFilters.age);
  }
  if (usedFilters.hasOwnProperty("balance")) {
    byBalance(filteredArray, usedFilters.balance);
  }

  return Response.json({ data: filteredArray, error: null });
}
