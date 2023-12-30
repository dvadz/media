import { removeUser } from "../store";
import useThunk from "./hooks/use-thunk";
import Button from "./Button";
import { GoTrash } from "react-icons/go";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded flex items-center">
      <Button loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
        {error ? <div>Error deleting user</div> : null}
      </div>
    </div>
  );
};

export default UsersListItem;
