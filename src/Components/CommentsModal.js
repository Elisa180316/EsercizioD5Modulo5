import React, { useEffect } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import CommentList from "..//Components/CommentList";
import AddComment from "..//Components/AddComments";

import {
  commentsLoading,
  commentsError,
  arrayOfComments,
} from "..//states/commentState";
import {
  useDispatch,
  useSelector,
} from "react-redux"; /* dispatch esegue azioni che sono in reducer, selector seleziona analiticamente lo stato che ci serve */
import { getCommentsFromBook } from "..//states/commentState";

const CommentsModal = ({ closeFunction, asin }) => {
  const dispatch = useDispatch();
  const loading = useSelector(commentsLoading);
  const error = useSelector(commentsError);
  const comments = useSelector(arrayOfComments);

  useEffect(() => {
    dispatch(getCommentsFromBook());
  }, [dispatch]);

  return (
    <div className="modal show comments-modal" style={{ display: "block" }}>
      <Modal.Dialog centered size="lg">
        <Modal.Body>
          {loading && (
            <div className="d-flex justify-content-center align-items-center">
              <Spinner animation="border" role="status"></Spinner>
            </div>
          )}
          {!loading && (
            <>
              <CommentList comments={comments} />
              <AddComment asin={asin} />
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeFunction} variant="secondary">
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};


export default CommentsModal;
