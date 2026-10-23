import { fetchUsers } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export const UserView = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <h2>List of users</h2>

      {userList.length > 0 &&
        userList.map((user) => <p key={user.id}>{user.name}</p>)}
    </>
  );
};
