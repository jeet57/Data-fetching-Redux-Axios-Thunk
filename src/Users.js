import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/actions/userAction";

const Users = () => {
  const dispatch = useDispatch();
  const usersListData = useSelector((state) => state.usersList);
  const { loading, error, users } = usersListData;
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      {loading
        ? "Loading..."
        : error
        ? error.message
        : users?.map((u) => <h3 key={u.id}>{u.name}</h3>)}
    </div>
  );
};

export default Users;
