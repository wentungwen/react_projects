import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
  const dispatch = useDispatch();

  // to extract filtered car data and a name from the Redux store. 
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleDelete = (car) => dispatch(removeCar(car.id));

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`${bold ? "bg-yellow-300" : ""}`}>
        <hr className="border border-green-900" />
        <div className="flex items-center">
          <div className="mr-3">{car.name}</div>
          <div className="mr-3">{car.cost}</div>
          <button
            className="bg-red-400 text-white rounded py-1 px-2"
            onClick={() => handleDelete(car)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="border p-4 rounded my-3">
      <h1 className="text-xl font-bold py-3 ">Car List</h1>
      {renderedCars}
    </div>
  );
}
