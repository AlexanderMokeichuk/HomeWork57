import React from "react";
import UserItems from "./UserItems";
import {User} from "../../types";

interface Props {
  users: User[],
}
const Users: React.FC<Props> = ({users}) => {

  return (
    <div className={"d-flex flex-column gap-3"}>
      <h4>Users</h4>
      {users.map((user) => (
        <UserItems
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default Users;