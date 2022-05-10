import React, {useState} from 'react';
import  AddUsers  from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, updateUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    updateUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]
    });
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      { usersList.length > 0 && <UsersList users={usersList}></UsersList>}
    </div>
  );
}

export default App;
