import React, {useState, useEffect, setError} from 'react';
import Compiler from '../components/compiler/Compiler.js';
import axios from "axios";
import { Link } from 'react-router-dom'
import randomCodeGenerator from '../utils/randomCodeGenerator'

const Overview = () => {

  const [user, setUser] = useState({ hits: [] });
 
  useEffect(async () => {

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const token = localStorage.getItem("authToken");

    const { data } = await axios.post(
        "/api/auth/currentUser",
        { token },
        config
      );
 
    setUser(data.user);
  }, []);

  localStorage.setItem("username", user.username);  
  localStorage.setItem("rating", user.rating);  

  return (
    <div className='main'>
            <h1>Welcome {user.username}</h1>
    </div>
  );
};

export const Battle = () => {

  const [roomCode, setRoomCode] = useState('')

    return (
      <div className='main'>
      <div className='homepage-form'>
          <div >
              <input type='text' placeholder='Game Code' onChange={(event) => setRoomCode(event.target.value)} />
              <Link to={`/overview/battle/play?roomCode=${roomCode}`}><button className="game-button green">JOIN BATTLE</button></Link>
          </div>
          <h1>OR</h1>
          <div className='homepage-create'>
              <Link to={`/overview/battle/play?roomCode=${randomCodeGenerator(5)}`}><button className="game-button orange">CREATE BATTLE</button></Link>
          </div>
      </div>
  </div>
    );
  };
  
  export const Practice = () => {
    return (
      // <div className='main'>
      //   <h1>Practice</h1>
      // </div>
      <Compiler/>
    );
  };
  
  export const Tournaments = () => {
    return (
      <div className='main'>
        <h1>Tournaments</h1>
      </div>
    );
  };

export default Overview;
