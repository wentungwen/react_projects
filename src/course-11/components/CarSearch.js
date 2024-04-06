import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

export default function CarForm() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  return (
    <div className="flex items-center">
      <label className="label mr-3">Search</label>
      <input
        className="input"
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}
