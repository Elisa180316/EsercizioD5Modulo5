import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import '..//Styles/book-card.css' //css importato per le immagini delle card
import React, {useState} from 'react'
import CommentsModal from "./CommentsModal";



const SingleCard = ({ title, asin, img, catogory, price }) => {
    const [selected, setSelected] = useState(false);
    const [modalState, setModalState] = useState(false);
  
    const toggleSelected = () => {
      setSelected(!selected);
    };
  
    const toggleModal = () => {
      setModalState(!modalState);
    };
  
    return (
      <>
        <Card
          className={`${selected ? "border border-danger shadow" : null}`}
          style={{ width: "18rem" }}
          onClick={toggleSelected}
        >
          <Card.Img
            className="object-fit-cover w-100 book-card"
            variant="top"
            src={img}
          />
          <Card.Body>
            <Card.Title as="h6">{asin}</Card.Title>
            <Card.Title className="text-truncate">{title}</Card.Title>
            <Card.Text>{catogory}</Card.Text>
            <Card.Text>{price}</Card.Text>
  
            <Button onClick={toggleModal} variant="primary">
              Comments
            </Button>
            
          </Card.Body>
        </Card>
  
        {modalState && (
          <div className="bg-danger">
            <CommentsModal asin={asin} closeFunction={toggleModal} />
          </div>
        )}
      </>
    );
  };
  
export default SingleCard;