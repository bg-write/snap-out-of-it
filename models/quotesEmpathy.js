const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const quotesEmpathy = new Schema({
    quotes: [
        {
            id: 1,
            quote: '"This is a good sign, having a broken heart. It means we have tried for something." — Elizabeth Gilbert',
        },
        {
            id: 2,
            quote: '"If you`re brave enough to say goodbye, life will reward you with a hello." — Paulo Coelho',
        },
        {
            id: 3,
            quote: '"It is our wounds that create in us a desire to reach for miracles. The fulfillment of such miracles depends on whether we let our wounds pull us down or lift us up toward our dreams." ― Jocelyn Soriano',
        },
        {
            id: 4,
            quote: '"There are far, far better things ahead than any we leave behind" ― C.S. Lewis',
        },
        {
            id: 5,
            quote: '“Bad things do happen; how I respond to them defines my character and the quality of my life. I can choose to sit in perpetual sadness, immobilized by the gravity of my loss, or I can choose to rise from the pain and treasure the most precious gift I have — life itself.” — Walter Anderson',
        },
        {
            id: 6,
            quote: '“Letting go doesn’t mean that you don’t care about someone anymore. It’s just realizing that the only person you really have control over is yourself.” — Deborah Reber',
        },
        {
            id: 7,
            quote: '“One of the best times for figuring out who you are and what you really want out of life? Right after a breakup.” — Mandy Hale',
        },
        {
            id: 8,
            quote: '“We must be willing to let go of the life we have planned, so as to have the life that is waiting for us.” — E.M. Forster',
        },
        {
            id: 9,
            quote: '“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.” ― Steve Maraboli',
        },
        {
            id: 10,
            quote: '“Life becomes easier when you learn to accept an apology you never got.” ― Robert Brault',
        },
        {
            id: 11,
            quote: '“When your ex says ‘You’ll never find anyone like me’. Say ‘that’s the point’.” - Drake',
        },
        {
            id: 12,
            quote: '“A broken heart is just the growing pains necessary so that you can love more completely when the real thing comes along.“ — J.S.B. Morse',
        },
        {
            id: 13,
            quote: '“Pain is inevitable. Suffering is optional.” — Haruki Murakami',
        },
        {
            id: 14,
            quote: '"Remember that sometimes not getting what you want is a wonderful stroke of luck." — Dalai Lama'
        },
        {
            id: 15,
            quote: '“I’m thankful for my struggle because without it I wouldn’t have stumbled across my strength.” — Alex Elle',
        },
        {
            id: 16,
            quote: '"Love isn`t there to make us happy. I believe it exists to show us how much we can endure." — Hermann Hesse'
        },
        {
            id: 17,
            quote: '“Love is never lost. If not reciprocated, it will flow back and soften and purify the heart." — Washington Irving'
        },
        {
            id: 18,
            quote: '"Nothing lasts but nothing is lost." — Terence McKenna',
        },
        {
            id: 19,
            quote: '"Never regret. If it`s good, it`s wonderful. If it`s bad, it`s experience." - Victoria Holt',
        },
        {
            id: 20,
            quote: '“The heart was made to be broken.” - Oscar Wilde',
        },
        {
            id: 21,
            quote: '“You know what is the worst thing about being rejected? The lack of control. If I could only control the where and how of being dumped, it wouldn`t seem as bad.” - Rob Fleming',
        },
        {
            id: 22,
            quote: '"You can love them, forgive them, want good things for them ... but still move on without them." — Mandy Hale',
        },
        {
            id: 23,
            quote: '"The course of true love did never run smooth." — William Shakespeare',
        },
        {
            id: 24,
            quote: '"I didn`t lose you. You lost me. You`ll search for me inside of everyone you`re with and I won`t be found." — R.H.Sin',
        },
        {
            id: 25,
            quote: '“Expectation is the root of all heartache.” -- William Shakespeare',
        },
        {
            id: 26,
            quote: '"The woman who does not require validation from anyone is the most feared individual on the planet." — Mohadesa Najumi',
        },
        {
            id: 27,
            quote: '"We must be willing to let go of the life we’ve planned, so as to have the life that is waiting for us." – Joseph Campbell',
        },
        {
            id: 28,
            quote: '"If you really want closure... at some point, you have to shut the door." — Jacki Wells Wunderlin',
        },
        {
            id: 29,
            quote: '“Everything is going to be alright. Maybe not today, but eventually.” -- Internet',
        },
        {
            id: 30,
            quote: '“When someone leaves, it’s because someone else is about to arrive.” – Paulo Coelho',
        },
        {
            id: 31,
            quote: '“How do you know when it’s over? Maybe when you feel more in love with your memories than with the person standing in front of you.”  — Gunnar Ardelius'
        },
        {
            id: 32,
            quote: '“I believe much of the pain of a breakup comes from having a life plan that you have fallen in love with. When it does not work out, you become angry that you now have to pursue a new life plan.” — Karen Salmansohn',
        },
        {
            id: 33,
            quote: '“Sadly enough, the most painful goodbyes are the ones that are left unsaid and never explained.” ― Jonathan Harnisch'
        },
        {
            id: 34,
            quote: '“What is it that makes you cry? It is only your attachments. What is it that you miss when it is lost? It is the object of your attachment. Ponder over this.” – Osho',
        },
        {
            id: 35,
            quote: '“I think it’s important to realize that you can miss something, but not want it back.” – Paulo Coelho'
        },
        {
            id: 36,
            quote: '“‘Failure’ is not the falling down, but the staying down.” – Mary Pickford',
        },
        {
            id: 37,
            quote: '“The secret of life, though, is to fall seven times and to get up eight times.” ― Paulo Coelho, The Alchemist'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model("QuotesEmpathy", quotesEmpathy);
