import React from "react";

const UserForm: React.FC = () => {
  return (
    <form className={"d-flex flex-column gap-3"} style={{width: 400}}>
      <h4>Ad new user</h4>
      <div className={"form-group"}>
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name={"name"}
          id={"name"}
          className={"form-control"}
        />
      </div>

      <div className={"form-group"}>
        <label htmlFor={"email"}>Email</label>
        <input
          type={"text"}
          name={"email"}
          id={"email"}
          className={"form-control"}
        />
      </div>

      <div className={"form-group"}>
        <label htmlFor={"role"}>Role</label>
        <select
          name={"role"}
          id={"role"}
          className={"form-select form-select-sm"}
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
        />
      </div>

      <button type={"submit"} className={"btn btn-primary px-4 mt-2 ms-auto"}>Add</button>
    </form>
  );
};

export default UserForm;