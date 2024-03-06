export function bySearch(filteredArray, input) {
  return filteredArray.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );
}

export function byCount(filteredArray, count) {
  return filteredArray.slice(0, count);
}

export function byAge(filteredArray, direction) {
  if (direction === "asc") {
    // Sort the data array by age in ascending order
    filteredArray.sort((a, b) => a.age - b.age);
  } else if (direction === "desc") {
    filteredArray.sort((a, b) => b.age - a.age);
  }
}

export function byBalance(filteredArray, direction) {
  // Convert balance strings to numeric values for sorting
  const numericBalance = (balance) =>
    parseFloat(balance.replace(/[^\d.]/g, ""));

  if (direction === "asc") {
    // Sort the data array by balance in ascending order
    filteredArray.sort(
      (a, b) => numericBalance(a.balance) - numericBalance(b.balance)
    );
  } else if (direction === "desc") {
    filteredArray.sort(
      (a, b) => numericBalance(b.balance) - numericBalance(a.balance)
    );
  }
}
