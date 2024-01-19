import "bootstrap/dist/css/bootstrap-grid.min.css";
import UserForm from "./Components/UserForm/UserForm";
import {useState} from "react";
import {User} from "./types";
import Users from "./Components/Users/Users";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <main className={"mt-5"}>
      <div className={"container g-5"}>
        <div className={"row mt-2"}>
          <div className={"col-6"}>
            <UserForm onSubmit={addUser} />
          </div>
          <div className={"col-6 ms-auto"}>
            <Users users={users}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
