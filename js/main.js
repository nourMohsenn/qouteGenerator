var rand;
var temp;
function randomQoute() {
    var qoutes = [
        { qoute: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
        { qoute: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", author: "― Marilyn Monroe" },
        { qoute: "“So many books, so little time.”", author: "― Frank Zappa" },
        { qoute: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "―Albert Einstein" },
        { qoute: "“A room without books is like a body without a soul.”", author: "― Marcus Tullius Cicero" },
        { qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author: "― Bernard M. Baruch" },
        { qoute: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”", author: "― William W. Purkey" },
        { qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", author: "― Dr. Seuss" },
        { qoute: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
        { qoute: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi" },
        { qoute: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "― Robert Frost" },
        { qoute: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”", author: "― J.K. Rowling, Harry Potter and the Goblet of Fire" }

    ]

    rand = Math.floor(Math.random() * qoutes.length);



    if (temp == rand && qoutes.length != 1) {
        // rand = Math.floor(Math.random() * qoutes.length);//not valid, when condition occurs last qoute doesn't change and function stops
        // console.log('what');
        randomQoute();//valid,works recursively till last qoute changes
    }
    else {
        document.getElementById('qoutes').innerHTML = qoutes[rand].qoute;
        document.getElementById('author').innerHTML = qoutes[rand].author;
        console.log('rand ' + rand + " and temp " + temp);//test case to make sure that qoute index doesn't repeated 
        temp = rand;
    }




}

