import { changeName, changeCost, addCar } from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (value) => {
    dispatch(changeName(value));
  };

  const handleCostChange = (value) => {
    const carCost = parseInt(value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !cost) return;
    dispatch(addCar({ name, cost }));

  }

  return (
    <div className="bg-gray-200 rounded p-4 mb-4">
      <h1 className="text-xl font-bold py-3">Add Car</h1>
      <form className="form-inline py-3 my-3 flex items-center" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="new-car-name">Name</label>
          <input
            id="new-car-name"
            className="form-control border border-gray-300 ml-3 p-2 rounded-sm"
            type="text"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="Add car name"
          />
        </div>
        <div className="form-group m-3">
          <label htmlFor="new-car-cost">Cost</label>
          <input
            id="new-car-cost"
            className="form-control border border-gray-300 ml-3 p-2 rounded-sm"
            type="number"
            value={cost || ""}
            onChange={(e) => handleCostChange(e.target.value)}
            placeholder="Add car cost"
          />
        </div>
        <div className="field">
          <button className="bg-yellow-500 text-white rounded py-2 px-4">Add</button>
        </div>
      </form>
    </div>
  );
}
