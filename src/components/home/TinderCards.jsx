import React,{useState,useEffect} from 'react'
import "./tinder.css";
import TinderCard from "react-tinder-card";
import database from "../firebase";

function TinderCards() {

    const [people,setPeople]=useState([]);
    useEffect(() => {
        database
            .collection('people')
            .onSnapshot((snapshot)=>
            setPeople(snapshot.docs.map((doc)=>doc.data()))
        );
        
    }, []);

    return(
    <>
    <div>
    <h1>Tinder Cards</h1>
    
        <div className="tinderCards-cardContainer">
           
           {people.map(item =>(
            //    install npm/yarn package of tinder card, import from react-tinder-card 
               <TinderCard 
               className="swipe"
               key={item.name}
               preventSwipe={["up","down"]}>
                   <div style={{backgroundImage:`url(${item.url})`}} className="card"><h3>{item.name}</h3>
                   
                   </div>
               </TinderCard>
           ))}
        </div>
    </div>
     </>
    )
}

export default TinderCards;
