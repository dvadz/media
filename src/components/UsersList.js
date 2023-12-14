import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingusersError] = useState(null);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); //[dispatch] does not serve a purpose except to get rid of the eslint warning

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoading) return <Skeleton times={5} className="h-5 w-5/6" />;

  if (error) return <div>Error fetching data...</div>;

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
