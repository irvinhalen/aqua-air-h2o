import Axios from "axios";
import { useEffect, useState } from "react";

function ViewMessages() {
    const [listOfMessages, setListOfMessages] = useState<any[]>([]);

    const getMessages = () =>{
        Axios.get('http://localhost:3001/api/read-messages').then((response) => {
          setListOfMessages(response.data);
        });
    };

    useEffect(() => {
        getMessages();
    }, []);
    
  return (
    <div>
        {listOfMessages.map((val) => {
            return(<div key={val.id}><h1>{val.message}</h1></div>)
        })}
    </div>
  )
}

export default ViewMessages;
