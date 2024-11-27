import React, { useState, useEffect } from 'react';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { firestore } from '../firebase';

    const UserManager = () => {
      const [users, setUsers] = useState([]);

      useEffect(() => {
        const usersCollectionRef = collection(firestore, 'users');
        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setUsers(data);
        });

        return () => unsubscribe();
      }, []);

      return (
        <div>
          <h2>User Management</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default UserManager;
