import React from "react";
import {Route,Switch} from "react-router-dom";
import Header from "./components/home/Header";
import SwipeButtons from "./components/home/SwipeButtons";
// import Home from "./components/home/Home";
import TinderCards from "./components/home/TinderCards";
import Chat from "./components/home/Chats";
import ChatScreen from "./components/home/ChatScreen";

const Routes=()=>{
    return(
        <div>
        <Switch>
            {/* whatever the path given after chat, it redirects to the chatscreen compo 
            & when click back button it shows chat comp  */}
        <Route path="/chat/:person"> 
        <Header backButton="/chat"/> 
       <ChatScreen/>
        </Route>
        
        <Route path="/chat"> 
        <Header backButton="/"/> 
        <Chat/>
        </Route>
        
        <Route path="/">
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
        </Route>
        </Switch>
        </div>
    )
}
export default Routes;