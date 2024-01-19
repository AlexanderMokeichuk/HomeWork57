import "bootstrap/dist/css/bootstrap-grid.min.css";
import UserForm from "./Components/UserForm/UserForm";
import {useState} from "react";
import {User} from "./types";
import Users from "./Components/Users/Users";
import "./App.css";

function App() {
  const [users, setUsers] = useState<User[]>([
    {id: "007", name: "Alexander Mokeichuk", email: "alexander.q.qa.a@mail.ru", role: "Admin", isActive: true}
  ]);

  const addUser = (user: User) => {
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <main className={"mt-5"}>
      <div className={"container g-5"}>
        <div className={"row mt-2"}>
          <div className={"col-4"}>
            <UserForm onSubmit={addUser}/>
          </div>
          <div className={" col-7 ms-auto p-2 border rounded-1"}>
            <h4 className={"text-primary"}>Users</h4>
            <div className={"users"} style={{height: 600}}>
              <Users users={users}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
