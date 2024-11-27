import React, { useState, useEffect } from 'react';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { firestore } from '../firebase';

    const TeamManager = () => {
      const [teams, setTeams] = useState([]);

      useEffect(() => {
        const teamsCollectionRef = collection(firestore, 'teams');
        const unsubscribe = onSnapshot(teamsCollectionRef, (snapshot) => {
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setTeams(data);
        });

        return () => unsubscribe();
      }, []);

      return (
        <div>
          <h2>Team Management</h2>
          <ul>
            {teams.map((team) => (
              <li key={team.id}>{team.name} - Players: {team.players.join(', ')}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default TeamManager;
