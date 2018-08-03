import React from 'react';
import '../App.css';

function Header() {
    
    return (
        <div className="list-books-title">
            <div className="content-wrapper">
                <div className="quote-container">
                    <q className="quote">Every story I create, creates me. I write to create myself</q>
                    <p className="quote-author">~ Octavia E. Butler</p>
                </div>
                
                <h1>MyReads</h1>
            </div>
        </div>
    )
    
}

export default Header;