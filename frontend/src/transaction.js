
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'payments'));
        const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containers">
    <h1 className="title">Users List with Name and Amount</h1>
    {/* <div className="header">
      <span className="header-name">Name</span>
      <span className="header-amount">Amount</span>
    </div> */}
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id} className="user-item">
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-amount">${user.amount}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default App;
