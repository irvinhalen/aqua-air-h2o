import Axios from "axios";
import { useState } from "react";

function AxiosSample() {
    const [message, setMessage] = useState("");

    const handleSubmit = (event:any) => {
        event.preventDefault();

        Axios.post('http://localhost:3001/api/sendMessage', {
            message: message
        }).then((response:any) => {
            if(response.status === 200){
                console.log(response);
                
                setMessage("");
            }
        });
    }

  return (
    <div>
        <form>
            <div className="input-group">
                <input type="text" value={message} onChange={(event) => {setMessage(event.target.value)}} required />
                <label>Message</label>
            </div>
            
            <button onClick={handleSubmit} className="trd-btn">Submit</button>
        </form>
    </div>
  )
}

export default AxiosSample;
