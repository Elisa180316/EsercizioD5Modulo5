import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import RatingSystem from "./RatingSystem";

const CommentList = ({ comments }) => {
  
  if (!comments) { // verifica se comments è null o undefined
    return <p>Non ci sono recensioni al momento.</p>; // restituisci un messaggio di errore o una lista vuota
  }
  return (
    
    <ListGroup className="my-4"> 
      <h4>Recensioni</h4>
      {comments.slice(-10).map((comment, id) => (
        <ListGroup.Item key={id}>
          <p className="mb-0">{comment.comment}</p>
          <small>
            Valutazione:<RatingSystem stars={comment.rate}/>
          </small>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;

