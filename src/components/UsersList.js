import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

const UsersList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]); //[dispatch] does not serve a purpose except to get rid of the eslint warning

  return <div>UsersList</div>;
};

export default UsersList;
