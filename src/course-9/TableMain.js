import SortableTable from "./SortableTable";

export default function TableMain() {
  const data = [
    { name: "fruit 1", color: "bg-red-500", score: 33 },
    { name: "fruit 2", color: "bg-orange-500", score: 3 },
    { name: "fruit 3", color: "bg-blue-500", score: 2 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      header: () => <th className="bg-yellow-500">Head</th>,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div>,
      header: () => <th>Color</th>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500">score</th>,
      sortValue: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <>
      <SortableTable data={data} config={config} keyFn={keyFn}></SortableTable>
    </>
  );
}


