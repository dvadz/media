import { removeUser } from "../store";
import useThunk from "./hooks/use-thunk";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {user.name}
      {error ? <div>Error deleting user</div> : null}
    </>
  );
  return <ExpandablePanel header={header}>CONTENT!!!</ExpandablePanel>;
};

export default UsersListItem;
