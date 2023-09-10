import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";

const UsersList = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); //[dispatch] does not serve a purpose except to get rid of the eslint warning

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching data...</div>;

  return <div>{data.length}</div>;
};

export default UsersList;
