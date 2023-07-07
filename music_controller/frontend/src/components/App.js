import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room"
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: null
        }
    }

    async componentDidMount(){
        fetch('/api/user-in-room').then((response) => response.json()).then((data) => {
            this.setState({
                roomCode: data.code
            })
        })  
        console.log(this.state.roomCode)
    }

    leaveRoomCallback(){
        this.setState({
            roomCode: null
        })
    }

    render(){
        return (
            <div className = "center">
           <Router>
                <Routes>
                    <Route exact path ='/' element={!this.state.roomCode ? <HomePage /> : <Navigate to={`/room/${this.state.roomCode}`}/>} />
                    <Route path = '/join' element = {<RoomJoinPage/>} />
                    <Route path = '/create' element = {<CreateRoomPage/>}/>
                    <Route path = '/room/:roomCode' element = {<Room leaveRoomCallback = {this.leaveRoomCallback}/>}/>
                </Routes>
            </Router>
        
        {/* <RoomJoinPage/>
        <CreateRoomPage/> */}
        </div>
        )
    }
}

const appDiv = document.getElementById("app")
render(< App />, appDiv)