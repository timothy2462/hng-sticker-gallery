
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import AppRouter from "./components/Router";


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Firebase authentication listener
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []);

  return (
    <div className="App">
      {/* <AppRouter authenticated={authenticated} /> */}
      <AppRouter authenticated={authenticated} />
    </div>
  );
}

export default App;
