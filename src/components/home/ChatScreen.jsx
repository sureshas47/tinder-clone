import React from "react";
import {useState} from "react";
import "./chatScreen.css";
import {Avatar} from "@material-ui/core";

function ChatScreen() {


    const [input, setInput] = useState('')
    const [message, setMessage] = useState([
        {
            name: "ellen",
            image: "https://pyxis.nymag.com/v1/imgs/a78/db3/660911c35bad426065cbf5a92ebedbb557-ellen-degeneres.rsquare.w700.jpg",
            message: "hey! what's up"
        },
        {
            name: "ellen",
            image: "https://pyxis.nymag.com/v1/imgs/a78/db3/660911c35bad426065cbf5a92ebedbb557-ellen-degeneres.rsquare.w700.jpg",
            message: "what's going on ?"
        },

        {
            message: "how are you ellen?"
        }

    ])
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage([...message, {message: input}])
        setInput('');
    }
    return (
        <>
            <div className="chatScreen">
                <p className="chatScreen_timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
                {message.map(item => (

                    item.name ? (
                        //if the item.name found in the map will show this
                        <div className="chatScreen_message">
                            <Avatar className="chatScreen_image"
                                    src={item.image}
                                    alt={item.name}/>
                            <p className="chatScreen_text">{item.message}</p>
                        </div>
                    ) : (
                        //else this
                        <div className="chatScreen_message">
                            <p className="chatScreen_user">{item.message}</p>
                        </div>
                    )
                ))
                }
                <div>
                    <form className="chatScreen_input" action="" onSubmit={handleSubmit}>
                        <input className="chatScreen_inputField"
                               onChange={(e) => setInput(e.target.value)}
                               value={input}
                               type="text" placeholder="type a message..."/>
                        <button type="submit" className="chatScreen_inputButton">SEND</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ChatScreen;
