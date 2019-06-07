import React, { Component } from 'react';

class Reviews extends Component {
    render() {
        return (
            <>
                {/* <h2>Reviews</h2> */}
                {
                    this.props.reviews.map(review => {
                        return (
                            <div className='reviews' key={review.id}>
                                <li>Title: <h3> {review.title}</h3></li>
                                <li>Content: <h3>{review.content}</h3></li>
                                <li>Author:<h3>{review.author}</h3> </li>

                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default Reviews