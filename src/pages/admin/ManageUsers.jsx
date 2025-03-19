import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/userSlice";

const ManageUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  if (!Array.isArray(users)) {
    return <p>There was an error loading users.</p>; // عرض رسالة إذا كانت البيانات غير صحيحة
  }

  return (
    <div className="admin-page">
      <h2>👥 Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => dispatch(deleteUser(user.id))}>❌ Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
