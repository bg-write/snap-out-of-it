const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const quotesSassy = new Schema({
    quotes: [
        {
            id: 1,
            quote: '"All discarded lovers should be given a second chance, but with somebody else." - Mae West',
        },
        {
            id: 2,
            quote: '"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell." - Joan Crawford',
        },
        {
            id: 3,
            quote: '"The difference between a divorce and a legal separation is that a legal separation gives a husband time to hide his money." - Johnny Carson',

        },
        {
            id: 4,
            quote: '"Only time can heal your broken heart, just as time can heal his broken arms and legs." - Miss Piggy',
        },
        {
            id: 5,
            quote: '"Snap out of it!" - Cher',
        },
        {
            id: 6,
            quote: '"Sometimes I wonder if men and women really suit each other. Perhaps they should live next door and just visit now and then." - Katherine Hepburn',
        },
        {
            id: 7,
            quote: '“I break up very well. I am a good breaker-upper.” – Simon Cowell',
        },
        {
            id: 8,
            quote: '“I’m so miserable without you, it’s almost as if you’re here!” – Billy Ray Cyrus',
        },
        {
            id: 9,
            quote: '“A breakup would imply she was my girlfriend. She was a girl who was my friend who is now a girl who is not my friend.” - Sheldon Cooper',
        },
        {
            id: 10,
            quote: '“When one door closes another door opens. Usually a refrigerator.” - Bonnie McFarlane',
        },
        {
            id: 11,
            quote: '“When your ex says ‘You’ll never find anyone like me’. Say ‘that’s the point’.” - Drake',
        },
        {
            id: 12,
            quote: '“I`ve never been married, but I tell people I`m divorced so they won`t think something is wrong with me.” - Elayne Boosler',
        },
        {
            id: 13,
            quote: '“I will always love the false image I had of you.” - Ashleigh Brilliant',
        },
        {
            id: 14,
            quote: '"He taught me housekeeping; when I divorce him I keep the house. - Zsa Zsa Gabor"'
        },
        {
            id: 15,
            quote: '"If you don`t love yourself, how in the hell you gonna love somebody else?" — RuPaul',
        },
        {
            id: 16,
            quote: '"“Like some wines our love could neither mature nor travel.” ― Graham Greene'
        },
        {
            id: 17,
            quote: '"Want to be happy? Stop trying to be perfect." - Brene Brown'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model("QuotesSassy", quotesSassy);
