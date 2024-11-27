import React, { useEffect } from 'react';
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/firestore';

    const firebaseConfig = {
      apiKey: "AIzaSyAs5k99_GqMaW3WPSKkWwCs5L6bjSxtQmM",
      authDomain: "badmintonscorer.firebaseapp.com",
      projectId: "badmintonscorer",
      storageBucket: "badmintonscorer.firebasestorage.app",
      messagingSenderId: "761778154232",
      appId: "1:761778154232:web:7fd8838a495f75973ba90d"
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const App = () => {
      useEffect(() => {
        // Add sample data to Firestore
        const db = firebase.firestore();
        db.collection('users').doc('user1').set({
          name: 'John Doe',
          email: 'john@example.com'
        });
        db.collection('users').doc('user2').set({
          name: 'Jane Smith',
          email: 'jane@example.com'
        });

        db.collection('players').doc('player1').set({
          name: 'Alice',
          age: 25,
          country: 'USA'
        });
        db.collection('players').doc('player2').set({
          name: 'Bob',
          age: 30,
          country: 'Canada'
        });

        db.collection('teams').doc('team1').set({
          name: 'Team Alpha',
          players: ['player1']
        });
        db.collection('teams').doc('team2').set({
          name: 'Team Beta',
          players: ['player2']
        });

        db.collection('matches').doc('match1').set({
          date: '2023-10-01',
          teams: ['team1', 'team2'],
          score: [21, 19]
        });
        db.collection('matches').doc('match2').set({
          date: '2023-10-02',
          teams: ['team1', 'team2'],
          score: [20, 15]
        });
      }, []);

      return (
        <div>
          <h1>Badminton Scorer</h1>
          {/* Add more components for user management, player management, team management, and match management */}
          <UserManager />
          <PlayerManager />
          <TeamManager />
          <MatchManager />
        </div>
      );
    };

    export default App;
