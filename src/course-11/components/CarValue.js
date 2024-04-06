import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <div>
      <h1>Total Value: ${totalCost}</h1>
    </div>
  );
}
