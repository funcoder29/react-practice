import { fetchUsers } from "./userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export const UserView = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <h2>List of users</h2>

      {!userState.loading &&
        userState.users.length > 0 &&
        userState.users.map((user) => <p key={user.id}>{user.name}</p>)}
      {!userState.loading && userState.error.length > 0 && (
        <p>Something went wrong!!</p>
      )}
      {userState.loading && <p>Loading!!</p>}
    </>
  );
};
