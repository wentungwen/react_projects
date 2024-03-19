import { Fragment } from "react";

// a function just return the children in between
function Echo({ children }) {
  return children;
}

export default function Table({ data, config, keyFn }) {
  // if there is no headers, then use label.
  const renderedHeader = config.map((columnData) => {
    if (columnData.header) {
      return <Fragment key={columnData.label}>{columnData.header()}</Fragment>;
    }
    return <Echo key={columnData.label}>{columnData.label}</Echo>;
  });

  // Loop the data array to render rows
  const renderedRows = data.map((rowData) => {
    // render each cell in the row
    const renderCells = config.map((columnData) => {
      return (
        <td className="p-3" key={columnData.label}>
          {columnData.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderCells}
      </tr>
    );
  });

  return (
    <>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeader}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </>
  );
}

// const data = [
//   { name: "fruit 1", color: "bg-red-500", score: 33 },
//   { name: "fruit 2", color: "bg-orange-500", score: 3 },
//   { name: "fruit 3", color: "bg-blue-500", score: 2 },
// ];

// function getSortValue(fruit) {
//   return fruit.name;
// }

// const sortOrder = "asc";
// data.sort((a, b) => {
//   const valueA = getSortValue(a);
//   const valueB = getSortValue(b);

//   const reverseOrder = sortOrder === "asc" ? 1 : -1;

//   if (typeof valueA === "string") {
//     return valueA.localeCompare(valueB) * reverseOrder;
//   } else {
//     return (valueA - valueB) * reverseOrder;
//   }
// });
