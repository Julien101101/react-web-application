import React from 'react';
import './HomePage.css';

var title = "Home Page"
var sentence = "This is my home page!";
var sentence2 = "Welcome to the universe...";

export const HomePage = () => {
    return(
    <div>
        <h1 id="title">{title}</h1>
        <p class="paragraphTag">{sentence}</p>
        <p class="paragraphTag">{sentence2}</p>
        <ul class="unorderedListTag">
            <li class="listTag">Home</li>
            <li class="listTag">About</li>
            <li class="listTag">News</li>
        </ul>
    </div>
    );
};