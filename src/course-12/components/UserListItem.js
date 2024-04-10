import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "../../course-5/Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);
  const handleClick = () => doRemoveUser(user);
  const header = (
    <>
      <div className="mb-2 p-3" key={user.id}>
        <div className="flex w-100 items-center justify-between">
          <Button warning loading={isLoading} onClick={handleClick}>
            <GoTrash />
          </Button>
          <div className="ml-3">{user.name}</div>
        </div>
        {error && <div>Error deleting users.</div>}
      </div>
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
