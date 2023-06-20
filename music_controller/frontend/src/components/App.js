import React, {Component} from "react";
import {render} from "react-dom";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room"
import {BrowserRouter as Router, Routes, Route, Link, Redirect} from 'react-router-dom'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
           <Router>
                <Routes>
                    <Route exact path ='/' element = {<HomePage/>}/>
                    <Route path = '/join' element = {<RoomJoinPage/>} />
                    <Route path = '/create' element = {<CreateRoomPage/>}/>
                    <Route path = '/room/:roomCode' element = {<Room/>} />
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