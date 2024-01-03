import { Fragment } from "react";
import MessagesCRUD from "../components/MessagesCRUD";
// import ScrollRevealElement from "../components/ScrollRevealElement";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare, faTag, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";

function OHcrud() {
  return (
    <Fragment>
      <div className="nav-header"></div>
      <div className="additional-content">
        <MessagesCRUD />
      </div>
      <div className="add-on-content">
          <h4>Welcome to CRUD</h4>
          <h2>Hey, I am practicing React!</h2>
            <p>The Home page was my attempt at creating the BLUEWIND home page.</p>
      </div>
    </Fragment>
  )
}

export default OHcrud;