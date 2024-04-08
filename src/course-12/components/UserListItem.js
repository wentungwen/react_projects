import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "../../course-5/Button";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => doRemoveUser(user);
  return (
    <div className="card mb-2 p-3" key={user.id}>
      <div className=" flex justify-between">
        {user.name}
        <Button warning loading={isLoading} onClick={handleClick}>
          <GoTrash /> remove
        </Button>
      </div>
      {error && <div>Error deleting users.</div>}
    </div>
  );
}

export default UserListItem;
