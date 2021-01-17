import React, { Component } from 'react';

const textNodes =  [

    '"All discarded lovers should be given a second chance, but with somebody else." - Mae West',

    '"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell." - Joan Crawford',

    '"The difference between a divorce and a legal separation is that a legal separation gives a husband time to hide his money." - Johnny Carson',

     '"Only time can heal your broken heart, just as time can heal his broken arms and legs." - Miss Piggy',

     '"Snap out of it!" - Cher',

     '"Sometimes I wonder if men and women really suit each other. Perhaps they should live next door and just visit now and then." - Katherine Hepburn',

     '“I break up very well. I am a good breaker-upper.” – Simon Cowell',
     '“I’m so miserable without you, it’s almost as if you’re here!” – Billy Ray Cyrus',

     '“A breakup would imply she was my girlfriend. She was a girl who was my friend who is now a girl who is not my friend.” - Sheldon Cooper',

    '“When one door closes another door opens. Usually a refrigerator.” - Bonnie McFarlane',

    '“When your ex says ‘You’ll never find anyone like me’. Say ‘that’s the point’.” - Drake',

    '“I`ve never been married, but I tell people I`m divorced so they won`t think something is wrong with me.” - Elayne Boosler',

    '“I will always love the false image I had of you.” - Ashleigh Brilliant'

]

function showTextNode(textNodes){

    // const textNode = textNodes.find(textNode => textNode.id === textIndex)
    let randomQuoteSelector = Math.floor(Math.random() * 7) + 1

return (
    <>
        <div>
            <p>{textNodes[randomQuoteSelector]}</p>
        </div>
    </>
)
}

export default showTextNode;

// const textNodes =  [
//     {
//         id: 1,
//         text: '"All discarded lovers should be given a second chance, but with somebody else." - Mae West',
//     },
//     {
//         id: 2,
//         text: '"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell." - Joan Crawford',
//     },
//     {
//         id: 3,
//         text: '"The difference between a divorce and a legal separation is that a legal separation gives a husband time to hide his money." - Johnny Carson',

//     },
//     {
//         id: 4,
//         text: '"Only time can heal your broken heart, just as time can heal his broken arms and legs." - Miss Piggy',
//     },
//     {
//         id: 5,
//         text: '"Snap out of it!" - Cher',
//     },
//     {
//         id: 6,
//         text: '"Sometimes I wonder if men and women really suit each other. Perhaps they should live next door and just visit now and then." - Katherine Hepburn',
//     },
//     {
//         id: 7,
//         text: '“I break up very well. I am a good breaker-upper.” – Simon Cowell',
//     }
// ]
