import React, { useState, useEffect } from 'react';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { firestore } from '../firebase';

    const MatchManager = () => {
      const [matches, setMatches] = useState([]);

      useEffect(() => {
        const matchesCollectionRef = collection(firestore, 'matches');
        const unsubscribe = onSnapshot(matchesCollectionRef, (snapshot) => {
          const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setMatches(data);
        });

        return () => unsubscribe();
      }, []);

      return (
        <div>
          <h2>Match Management</h2>
          <ul>
            {matches.map((match) => (
              <li key={match.id}>Date: {match.date}, Teams: {match.teams.join(', ')}, Score: {match.score.join('-')}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default MatchManager;
