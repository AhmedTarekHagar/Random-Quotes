/*
-------- add array of objects (quotes)
-------- create html structure
-------- create a random number
-------- validate number is not dublicate
-------- pass html to document
*/

var quotes = [
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        author: `― Oscar Wilde`
    },
    {
        quote: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        author: `― Marilyn Monroe`
    },
    {
        quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author: `― Albert Einstein`
    },
    {
        quote: `“A room without books is like a body without a soul.”`,
        author: `― Marcus Tullius Cicero`,
    },
    {
        quote: `“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”`,
        author: `― William W. Purkey`
    }
];

for (var i = 0; i < quotes.length; i++) {
    document.getElementById('numberOfQuotes').innerHTML += `
                                                            <option class="fs-3 text-center" value="${i}">${i + 1}</option>
                                                            `
}

var lastNumber;

function getRandomNumber() {
    var randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * quotes.length);
    } while (randomNumber == lastNumber);

    lastNumber = randomNumber;

    return randomNumber;
}

function viewQuote() {
    document.getElementById('quote').innerHTML = ``;

    var numberOfQuotes = document.getElementById('numberOfQuotes').value;

    for (var i = 0; i <= numberOfQuotes; i++) {
        var randomNumber = getRandomNumber();
        document.getElementById('quote').innerHTML += `
                                                    <div class="col-2"></div>
                                                    <div class="col-2">
                                                        <img class="w-100 img-thumbnail rounded-circle" src="images/${quotes[randomNumber].author}.jpg" alt="images/${quotes[randomNumber].author}">
                                                    </div>
                                                    <div class="col-1"></div>
                                                    <div class="col-7 text-start d-inline-flex flex-column justify-content-center">
                                                        <p class="fw-semibold fs-2 text-light">${quotes[randomNumber].quote}</p>
                                                        <p class="fw-bold fs-1 text-light">${quotes[randomNumber].author}</p>
                                                    </div>
                                                    `;
    }

}