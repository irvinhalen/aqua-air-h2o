import { Fragment } from "react";
import CreateMessage from "../components/CreateMessage";
import ViewMessages from "../components/ViewMessages";
// import ScrollRevealElement from "../components/ScrollRevealElement";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare, faTag, faTrashCan, faUser } from "@fortawesome/free-solid-svg-icons";

function OHcrud() {
  return (
    <Fragment>
      <div className="nav-header"></div>
      <div className="additional-content">
        <CreateMessage />
        <ViewMessages />
      </div>
      <div className="add-on-content">
          <h4>Welcome to CRUD</h4>
          <h2>Hey, I am practicing React!</h2>
            <p>There are cards underneath this section that displays the members. Click the button below that says Add Member to add another member. Click Show Members button to show all the members. Click on the pencil icon to update the bio of the members. Click on the trash bin icon to delete a member. In this practice project I am using React to create a simple website and for this page my focus is on the functionalities. The Home page was my attempt at creating the BLUEWIND website.</p>
      </div>
    </Fragment>
  )
}

export default OHcrud;