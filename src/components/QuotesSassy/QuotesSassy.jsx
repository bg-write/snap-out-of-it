import React, { Component } from 'react';

const textNodes =  [
    {
        id: 1,
        text: '"All discarded lovers should be given a second chance, but with somebody else." - Mae West',
    },
    {
        id: 2,
        text: '"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell." - Joan Crawford',
    },
    {
        id: 3,
        text: '"The difference between a divorce and a legal separation is that a legal separation gives a husband time to hide his money." - Johnny Carson',

    },
    {
        id: 4,
        text: '"Only time can heal your broken heart, just as time can heal his broken arms and legs." - Miss Piggy',
    },
    {
        id: 5,
        text: '"Snap out of it!" - Cher',
    },
    {
        id: 6,
        text: '"Sometimes I wonder if men and women really suit each other. Perhaps they should live next door and just visit now and then." - Katherine Hepburn',
    },
    {
        id: 7,
        text: '“I break up very well. I am a good breaker-upper.” – Simon Cowell',
    }
]


function showTextNode(textIndex){

// const textNode = textNodes.find(textNode => textNode.id === textIndex)
let randomQuoteSelector = Math.floor(Math.random() * 7) + 1

return (
    <>
        <div>
            <p>textNodes[{randomQuoteSelector}].text</p>
        </div>
    </>
)
}

export default showTextNode;
