import { useState } from "react";

// reusable hooks are some function that input & output the certain data
export default function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  // toggle the sort state between "asc, desc, null"
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  // sort the data: 1) make a 'data' copy, 2)sort the data based on sortBy and sortOrder
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(
      (columnData) => columnData.label === sortBy
    );
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortOrder,
    sortBy,
    handleClick,
    sortedData,
  };
}
