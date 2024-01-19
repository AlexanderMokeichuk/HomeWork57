import React, {useState} from "react";
import {User, UserForm} from "../../types";
import "./User.Form.css";

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserForm>({
    name: "",
    email: "",
    role: "",
    isActive: false,
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const changeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prevState => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.name !== "" && user.email !== "" && user.role !== "") {
      onSubmit({
        id: Math.random().toString(),
        ...user,
      });
    } else {
      alert("Заполните форму полностью");
    }
  };

  return (
    <form className={"userForm d-flex flex-column gap-3"} style={{width: 400}} onSubmit={onFormSubmit}>
      <h4 className={"text-primary"}>Ad new user</h4>
      <div className={"form-group"}>
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name={"name"}
          id={"name"}
          className={"form-control"}

          value={user.name}
          onChange={changeUser}
        />
      </div>

      <div className={"form-group"}>
        <label htmlFor={"email"}>Email</label>
        <input
          type={"email"}
          name={"email"}
          id={"email"}
          className={"form-control"}

          value={user.email}
          onChange={changeUser}
        />
      </div>

      <div className={"form-group"}>
        <label htmlFor={"role"}>Role</label>
        <select
          name={"role"}
          id={"role"}
          className={"form-select form-select-sm"}

          value={user.role}
          onChange={changeUser}
        >
          <option>Select a role</option>
          <option value={"user"}>user</option>
          <option value={"editor"}>Editor</option>
          <option value={"admin"}>Admin</option>

        </select>
      </div>

      <div className={"form-group"}>
        <label htmlFor={"isActive"}>Is active?</label>
        <input
          type={"checkbox"}
          name={"isActive"}
          id={"isActive"}
          className={"form-check-input ms-1 cu"}

          checked={user.isActive}
          onChange={changeIsActive}
        />
      </div>

      <button type={"submit"} className={"btn btn-primary px-4 ms-auto"}>Add</button>
    </form>
  );
};

export default UserForm;