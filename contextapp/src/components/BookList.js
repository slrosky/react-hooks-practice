import React, { Component } from 'react';

class BookList extends Component {
    state = {}
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>The Way of Kings</li>
                    <li>The Name of The Wind</li>
                    <li>The Final Empire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;