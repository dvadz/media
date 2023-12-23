import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";

const useThunk = (thunk) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(() => {
    setIsLoading(true);
    dispatch(thunk())
      .unwrap()
      .catch((err) => {
        setError(err).finally(() => {
          setIsLoading(false);
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error];
};

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap()
      .catch((err) => {
        setLoadingUsersError(err);
      })
      .finally(() => {
        setIsLoadingUsers(false);
      });
  }, [dispatch]); //[dispatch] does not serve a purpose except to get rid of the eslint warning

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => {
        setCreatingUserError(err);
      })
      .finally(() => {
        setIsCreatingUser(false);
      });
  };

  if (isLoadingUsers) return <Skeleton times={5} className="h-5 w-5/6" />;

  if (loadingUsersError) return <div>Error fetching data...</div>;

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
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError ? "Error creating user" : ""}
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
