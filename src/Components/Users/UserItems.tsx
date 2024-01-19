import React from "react";
import {User} from "../../types";

interface Props {
  user: User,
}

const UserItems: React.FC<Props> = ({user}) => {
  let isActive = "Active ✅";
  if (!user.isActive) isActive = "Not active ❌";

  return (
    <div className="card">
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title">{user.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
        </div>
        <div className={"d-flex flex-column justify-content-between"}>
          <h6 className="card-subtitle mb-2 text-body-secondary">{user.role}</h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">{isActive}</h6>
        </div>
      </div>
    </div>
  );
};

export default UserItems;