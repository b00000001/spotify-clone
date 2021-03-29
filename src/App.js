import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
    console.log("I HAVE A TOKEN>>> ", token);
  }, []);
  return (
    <div className="app">{token ? <h4>Hi I am logged in.</h4> : <Login />}</div>
  );
}

export default App;
