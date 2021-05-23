import React from 'react'
import Chat from './Chat';
import "./chats.css";

const Chats = () => {
    return (
        <>
        <div className="chats">
            <Chat
            name="sarah"
            message="hey! how are you"
            timestamp="30 minutes ago"
            profilePic="https://www.milbank.com/images/content/1/0/v2/108069/Resch-Sarah-FFM-OFFICE.jpg"
            />
            <Chat
            name="ellen"
            message="what's up dude"
            timestamp="10 minutes ago"
            profilePic="https://pyxis.nymag.com/v1/imgs/a78/db3/660911c35bad426065cbf5a92ebedbb557-ellen-degeneres.rsquare.w700.jpg"
            />
            <Chat
            name="sandra"
            message="where are you now ?"
            timestamp="46 minutes ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BMYoZoS3xppnCOlMoLXkPowoTSol-M7EqUyg1vcfPt3f7Lzhf1p_AYYdMpJm8JALdGg&usqp=CAU"
            />
            <Chat name="natasha"
            message="i am busy these days"
            timestamp="30 minutes ago"
            profilePic="https://static.wikia.nocookie.net/fear-factor-khatron-ke-khiladi/images/8/83/KKK7Natasha.jpg/revision/latest?cb=20200306200417"
            />
        </div>
        </>
    )
}

export default Chats;
