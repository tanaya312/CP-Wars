import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import queryString from 'query-string'
import Compiler from '../components/compiler/Compiler';
import { Questions } from '../components/compiler/Questions';
import {Button} from '@material-ui/core'

const Play = (props) => {

    const data = queryString.parse(props.location.search)

    

    const ENDPOINT = 'http://localhost:5000'
    //initialize socket state
    const [room, setRoom] = useState(data.roomCode)
    const [roomFull, setRoomFull] = useState(false)
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState('')
    const [gameOver, setGameOver] = useState(false)
    const [winner, setWinner] = useState('')

    const username = localStorage.getItem('username')
    const rating = localStorage.getItem('rating')

    const connectionOptions =  {
        "forceNew" : true,
        "reconnectionAttempts": "Infinity", 
        "timeout" : 10000,                  
        "transports" : ["websocket"]
    }
    const socket = io.connect(ENDPOINT, connectionOptions)

    useEffect(() => {

        socket.emit('join', {room: room, name: username, rating: rating}, (error) => {
            if(error)
                setRoomFull(true)
        })

        //cleanup on component unmount
        return function cleanup() {
            socket.emit('disconnect')
            //shut down connnection instance
            socket.off()
        }
    }, [])

    useEffect(() => {

        socket.on("roomData", ({ users }) => {
            console.log(socket)
            setUsers(users)

            if(users.length == 2)
                setRoomFull(true);
        })

        socket.on('currentUserData', ({ name }) => {
            console.log(name)
            setCurrentUser(name)
        })

        socket.on('win', ({gameOver, name}) => {
            console.log("here")
            setGameOver(gameOver);
            console.log(username);
            console.log(name);
            if(name != username)
                setWinner(name);
        })


    }, [])

    

    
    const submit = () => {
        setGameOver(true);
        console.log(room);
        socket.emit('win', ({ gameOver : true, username , room}))
        setWinner('Congratulations You');
    }


  return !roomFull ? (
    <div className=''>
      <h1>Waiting for player to join</h1>
      <br/>
      <h2>Room Code : {room}</h2>
    </div>
  ) : (
    <div className=''>
    <h2>Match Begins</h2>
    {gameOver ?  (
      <div>
          <h2>Good Game</h2>
      <h2>{winner} has completed </h2>
      {winner != currentUser ? 
        <h2>You can still continue</h2>
        : null}
      </div>
  ) : null} 
    <br/>
    <h2>{users[0].name} Vs {users[1].name}</h2>
    <h3>{users[0].rating}    {users[1].rating}</h3>
    <Button variant="contained" onClick={submit}>
        Submit Code
    </Button>
    <Questions/>
    <Compiler/>

  </div>
  );
};

export default Play;
