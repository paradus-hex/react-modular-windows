import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";

import AddUser from "./components/Users/AddUser";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [usersList, setUsersList] = useState([]);
  const usersListHandler = (userAge, userName) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  const [error, setError] = useState();

  const errorHandler = (error) => {
    setError(error);
  };

  const closeHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={closeHandler}
        />
      )}
      <AddUser onAddUser={usersListHandler} onError={errorHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
