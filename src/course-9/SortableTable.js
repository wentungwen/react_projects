import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Table from "./Table";
import useSort from "./hooks/use-sort";

// take config out of props. sortOrder(null, asc, desc),sortBy (null, Name, Score)
function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, handleClick, sortedData } = useSort(data, config);

  // update the header if there is sortValue
  const updatedConfig = config.map((columnData) => {
    if (!columnData.sortValue) {
      return columnData;
    }
    return {
      ...columnData,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(columnData.label)}
        >
          <div className="flex items-center">
            {getIcons(columnData.label, sortBy, sortOrder)}
            {columnData.label}
          </div>
        </th>
      ),
    };
  });

  // update the updatedConfig, sortedData and props
  return (
    <div>
      {sortBy} - {sortOrder}
      <Table {...props} data={sortedData} config={updatedConfig}></Table>
    </div>
  );
}

// display the icons on label
function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <>
        {" "}
        <AiFillCaretUp />
        <AiFillCaretDown />
      </>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <AiFillCaretUp />
        <AiFillCaretDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <AiFillCaretUp />;
  } else if (sortOrder === "desc") {
    return <AiFillCaretDown />;
  }
}

export default SortableTable;




