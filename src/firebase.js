import { initializeApp } from 'firebase/app';
    import { getAuth } from 'firebase/auth';
    import { getFirestore } from 'firebase/firestore';

    const firebaseConfig = {
      apiKey: "AIzaSyAs5k99_GqMaW3WPSKkWwCs5L6bjSxtQmM",
      authDomain: "badmintonscorer.firebaseapp.com",
      projectId: "badmintonscorer",
      storageBucket: "badmintonscorer.firebasestorage.app",
      messagingSenderId: "761778154232",
      appId: "1:761778154232:web:7fd8838a495f75973ba90d"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and Firestore
    export const auth = getAuth(app);
    export const firestore = getFirestore(app);
