import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';


const AddComment = ({ asin }) => {

    const [comment, setComment] = useState('')
    const [rate, setRate] = useState('1')
    const [loading, setLoading] = useState(false);

    const handleCommentSubmit = async (event) => {
        event.preventDefault()

        setLoading(true);

        try {
            console.log(comment)

            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify({
                    comment: comment,
                    rate: rate,
                    elementId: asin
                }),

                headers: {
                    'Authorization':
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWRhZGIxNGE1MTAwMTQ2NjQwMDYiLCJpYXQiOjE2ODI2MjI2MDMsImV4cCI6MTY4MzgzMjIwM30.-tp46JMUERvpm3iEsrOsQo3KHMegj-jXe56j2T_aUgE",
                      'Content-Type': 'application/json',
                  },
               
            })
            if (response.ok) {
                alert('Comment added!')
                setComment('');
                setRate('1');
            } else {
                console.log('Error')
                alert('Error')
            }
        } catch (error) {
            console.log(error)
            alert('Error')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h4>Add comment</h4>
            <form onSubmit={handleCommentSubmit}>
                <div className="form-group">
                    <label htmlFor="rate">Stars:</label>
                    <select
                        className="form-control"
                        id="rate"
                        value={rate}
                        onChange={(element) => setRate(element.target.value)}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        className="form-control"
                        id="comment"
                        rows="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Send
                </button>
                {loading && (
                    <div className="d-flex justify-content-center align-items-center">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}
            </form>
        </div>
    )
}

export default AddComment