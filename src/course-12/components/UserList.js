import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Skeleton from "./Skeleton";
import Button from "../../course-5/Button";
import UserListItem from "./UserListItem";

function UserList() {
  // First option: fine-grained loading state
  // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  // const [loadingUsersError, setLoadingUsersError] = useState(null);
  // const [isCreatingUser, setIsCreatingUser] = useState(false);
  // const [creatingUserError, setCreatingUserError] = useState(null);

  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUsers, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useSelector((state) => state.users);

  // ?
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUsers();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6}></Skeleton>;
  } else if (loadingUsersError) {
    content = <div>Error...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1>User List</h1>

        <Button loading={isCreatingUser} primary onClick={handleUserAdd}>
          Add User
        </Button>

        {creatingUserError && "Error creating user..."}
      </div>
      <hr />
      <div>{content}</div>
    </div>
  );
}

export default UserList;
