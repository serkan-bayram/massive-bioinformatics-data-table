// For consistency there should be only one
// Sort option, like Age or Balance
// When one selected we remove others
export function removeOtherOptions(params, columns, selectedColumn) {
  const filterableColumns = columns.filter((column) => column.isSortable);

  filterableColumns.forEach((column) => {
    if (column.id !== selectedColumn) {
      params.delete(column.id);
    }
  });
}
