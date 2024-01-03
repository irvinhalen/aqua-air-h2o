import React, { useEffect, useState } from "react";
import Axios from "axios";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MessagesCRUD() {
  const [listOfMessages, setListOfMessages] = useState<any[]>([]);
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const messageLength = 35;
  const modalRef = React.useRef<HTMLInputElement>(null);

    const handleSubmit = (event:any) => {
        event.preventDefault();

        Axios.post('http://localhost:3001/api/create-message', {
            message: message
        }).then((response:any) => {
            if(response.status === 200){                
              setMessage("");
              getMessages();
            }
        });
    }

    useEffect(() => {
      setCharCount(message.length);
    }, [message])

  const getMessages = () =>{
      Axios.get('http://localhost:3001/api/read-messages').then((response) => {
        setListOfMessages(response.data);
      });
  };

  useEffect(() => {
      getMessages();
  }, []);
  
  const openEditModal = () => {
    if (modalRef.current !== null) {
      modalRef.current.style.display = 'block';
    }
  }

  const closeEditModal = () => {
    if (modalRef.current !== null) {
      modalRef.current.style.display = 'none';
      setNewMessage("");
    }
  }

  const editMessage = (id:any) => {    
    Axios.get(`http://localhost:3001/api/edit-message/${id}`).then((response) => {
      setNewMessage(response.data.message);
    });

    if (modalRef.current !== null) {
      modalRef.current.style.display = 'block';
    }
  }

  const updateMessage = (id:any) => {
    Axios.put(`http://localhost:3001/api/update-message/${id}`, {message: newMessage}).then(() => {
      setListOfMessages(listOfMessages.map((val)  => {
        return val.id === id ? {message: val.message} : val
        }));
    });
  }

  const deleteMessage = (id:any) => {
    Axios.delete(`http://localhost:3001/api/delete-message/${id}`).then(() => {
            setListOfMessages(listOfMessages.filter((val) => {
            return val.id !== id;
            }));
        });
  };

  return (
    <div>
        <form>
          <div className="input-group">
              <input type="text" maxLength={messageLength} value={message} onChange={(event) => {setMessage(event.target.value)}} required />
              <label>Message</label>
              <div className='top-inputLine-remover' />
              <p>{charCount}/{messageLength}</p>
              <div className='bottom-inputLine-remover' />
          </div>
          <button onClick={handleSubmit} className="trd-btn">Submit</button>
        </form>

        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <div className="input-group">
                <input type="text" value={newMessage} onChange={(event) => {setNewMessage(event.target.value)}} maxLength={messageLength} />
            </div>
            <div className='row'><div className='col'><button className="edit-btn">Update</button></div><div className='col'><button onClick={closeEditModal} className="delete-btn">Cancel</button></div></div>
          
          </div>
        </div>

        {listOfMessages.map((val, i) => {
            return (<div className="container card crud-card" key={val.id}><h1 className='background-text-1'>{i+1}</h1><div className='row'><h1>{val.message}</h1></div><div className='row'><div className='col'><button onClick={() => editMessage(val.id)} className="edit-btn"><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></button></div><div className='col'><button onClick={() => deleteMessage(val.id)} className="delete-btn"><FontAwesomeIcon icon={faTrash} /></button></div></div><h1 className='background-text-2'>{i+1}</h1></div>);
        })}
    </div>
  )
}

export default MessagesCRUD;
