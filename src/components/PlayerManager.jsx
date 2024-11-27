import React, { useState, useEffect } from 'react';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { firestore } from '../firebase';

    const PlayerManager = () => {
      const [players, setPlayers] = useState([]);

      useEffect(() => {
        const playersCollectionRef = collection(firestore, 'players');
        const unsubscribe = onSnapshot(playersCollectionRef, (snapshot) => {
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setPlayers(data);
        });

        return () => unsubscribe();
      }, []);

      return (
        <div>
          <h2>Player Management</h2>
          <ul>
            {players.map((player) => (
              <li key={player.id}>{player.name} - Age: {player.age}, Country: {player.country}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default PlayerManager;
