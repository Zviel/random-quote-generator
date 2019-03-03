// Variables

let interval = setInterval(printQuote, 12000);
let quotes = [

                {
                                
                    quote: 'If You Can Dream It - You Can Do It.',
                    source: 'Walt Disney',
                    tags: ['Dreams', 'Motivational', 'Inspirational']
                
                },

                {
                    
                    quote: 'Shoot For The Moon. Even If You Miss, You\'ll Still End Up Among The Stars.',
                    source: 'Les Brown',
                    tags: ['Motivational', 'Success', 'Inspirational']
                   
                },

                {
                    
                    quote: 'You Can Never Quit. Winners Never Quit, And Quitters Never Win.',
                    source: 'Ted Turner',
                    tags: ['Business', 'Inspirational']
                   
                },

                {
                    
                    quote: 'Always Desire To Learn Something Useful.',
                    source: 'Sophocles',
                    tags: ['Intelligence', 'Knowledge', 'Learning']
                   
                },

                {
                    
                    quote: 'Veni, Vidi, Vici.',
                    source: 'Julius Caesar',
                    tags: ['History', 'War']
                   
                },

                {
                    
                    quote: 'A Happy Man Is Too Satisfied With The Present To Dwell Too Much On The Future.',
                    source: 'Albert Einstein',
                    tags: ['Happiness', 'Satisfaction'],
                    citation: '\"Mes Projets d\'Avenir\" - A French Essay Written At Age 17 For A School Exam',
                    year: 1896
                   
                },

                {
                    
                    quote: 'When Something Is Important Enough, You Do It Even If The Odds Are Not In Your Favor.',
                    source: 'Elon Musk'
                   
                },

                {
                    
                    quote: 'Quality Is Not An Act. It Is A Habit.',
                    source: 'Aristotle'
                   
                },

                {
                    
                    quote: 'The Secret Of Getting Ahead Is Getting Started.',
                    source: 'Mark Twain'
                   
                },

                {
                    
                    quote: 'Well Done Is Better Than Well Said.',
                    source: 'Benjamin Franklin'
                   
                },

                {
                    
                    quote: 'The People Who Influence You Are The People Who Believe In You.',
                    source: 'Henry Drummond'
                   
                },

                {
                    
                    quote: 'Good, Better, Best. Never Let It Rest. \'Til Your Good Is Better And Your Better Is Best.',
                    source: 'St. Jerome'
                   
                },

                {
                    
                    quote: 'It Does Not Matter How Slowly You Go As Long As You Do Not Stop.',
                    source: 'Confucius'
                   
                },

                {
                    
                    quote: 'It Always Seems Impossible - Until It\'s Done.',
                    source: 'Nelson Mandela'
                   
                },

                {
                    
                    quote: 'Act As If What You Do Makes A Difference. It Does.',
                    source: 'William James'
                   
                },

                {
                    
                    quote: 'Don\'t Watch The Clock; Do What It Does - Keep Going.',
                    source: 'Sam Levenson'
                   
                },

                {
                    
                    quote: 'Intelligence Is The Ability To Adapt To Changes.',
                    source: 'Stephen Hawking'
                   
                },

                {
                    
                    quote: 'However Difficult Life May Seem, There Is Always Something You Can Do And Succeed At.',
                    source: 'Stephen Hawking'
                   
                },

                {
                    
                    quote: 'Success Consists Of Going From Failure To Failure Without Loss Of Enthusiasm.',
                    source: 'Winston Churcill'
                   
                },

                {
                    
                    quote: 'You Have Enemies? Good. That Means You\'ve Stood Up For Something, Sometime In Your Life.',
                    source: 'Winston Churcill'
                   
                },

                {
                    
                    quote: 'Do Your Work With Your Whole Heart, And You Will Succeed - There\'s So Little Competition.',
                    source: 'Elbert Hubbard'
                   
                },

                {
                    
                    quote: 'Learning Never Exhausts The Mind.',
                    source: 'Leonardo Da Vinci'
                   
                },

                {
                    
                    quote: 'If You Cannot Do Great Things, Do Small Things In A Great Way.',
                    source: 'Napoleon Hill'
                   
                },

                {
                    
                    quote: 'The Journey Of A Thousand Miles Begins With One Step.',
                    source: 'Lao Tzu'
                   
                },

                {
                    
                    quote: 'I Have Not Failed. I\'ve Just Found 10,000 Ways That Won\'t Work.',
                    source: 'Thomas Edison'
                   
                },

                {
                    
                    quote: 'Tell Me And I Forget; Teach Me And I Remember; Involve Me And I Learn.',
                    source: 'Benjamin Franklin'
                   
                },

                {
                    
                    quote: 'Very Little Is Needed To Make A Happy Life; It Is All Within Yourself, In Your Way Of Thinking.',
                    source: 'Marcus Aurelius'
                   
                },

                {
                    
                    quote: 'A Leader Is One Who Knows The Way, Goes The Way, And Shows The Way.',
                    source: 'John C. Maxwell'
                   
                },

                {
                    
                    quote: 'If Opportunity Doesn\'t Knock - Build A Door.',
                    source: 'Milton Berle'
                   
                },

                {
                    
                    quote: 'Wise Men Speak Because They Have Something To Say; Fools Speak Because They Have To Say Something.',
                    source: 'Plato'
                   
                },

                {
                    
                    quote: 'The Only True Wisdom Is In Knowing You Know Nothing.',
                    source: 'Socrates'
                   
                },

                {
                    
                    quote: 'Believe You Can And You\'re Halfway There.',
                    source: 'Theodore Roosevelt'
                   
                },

                {
                    
                    quote: 'Education Is The Most Powerful Weapon Which You Can Use To Change The World.',
                    source: 'Nelson Mandela'
                   
                },

                {
                    
                    quote: 'Success Is Not Final, Failure Is Not Fatal - It Is The Courage To Continue That Counts.',
                    source: 'Winston Churcill'
                   
                },

                {
                    
                    quote: 'Do Not Dwell In The Past, Do Not Dream Of The Future; Concentrate The Mind On The Present Moment.',
                    source: 'Buddha'
                   
                },

                {
                    
                    quote: 'Nothing Is Impossible. The Word Itself Says \'I\'m Possible\'.',
                    source: 'Audrey Hepburn'
                   
                },

                {
                    
                    quote: 'A Little More Persistence, A Little More Effort, And What Seemed Hopeless Failure May Turn To Glorious Success.',
                    source: 'Elbert Hubbard'
                   
                },

                {
                    
                    quote: 'You Are Never Too Old To Set Another Goal Or To Dream A New Dream.',
                    source: 'Les Brown'
                   
                },

                {
                    
                    quote: 'We Aim Above The Mark To Hit The Mark.',
                    source: 'Ralph Waldo Emerson'
                   
                },

                {
                    
                    quote: 'I Am A Slow Walker - But I Never Walk Back.',
                    source: 'Abraham Lincoln'
                   
                }

             ];

// Functions

// getRandomColor

function getRandomColor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

// switchColor

function switchColor() {

    let body = document.querySelector("body");
    let loadQuoteButton = document.querySelector("#loadQuote");
    let randomColor = getRandomColor();

    body.style.backgroundColor = randomColor;
    loadQuoteButton.style.backgroundColor = randomColor;

}

// getRandomQuote

function getRandomQuote() {

    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];

}

// getAdditionalAttributes

function getAdditionalAttributes(quoteObject) {

    let strToReturn = '';

    if (quoteObject.citation !== undefined) {

        strToReturn += '<span class = "citation">' + quoteObject.citation + '</span>';

    }

    if (quoteObject.year !== undefined) {

        strToReturn += '<span class = "year">' + quoteObject.year + '</span>';
        
    }

    if (quoteObject.tags !== undefined) {

        strToReturn += '<span class = "tags">Tags: ';

        for (let i = 0; i < quoteObject.tags.length; i ++) {

            strToReturn += quoteObject.tags[i];

            if (i != quoteObject.tags.length - 1) {

                strToReturn += ', ';

            }

        }

        strToReturn += '</span>';

    }

    return strToReturn;

}

// buildQuote

function buildQuote() {

    let quoteObject = getRandomQuote();
    let strToReturn = '';

    strToReturn += '<p class = "quote">\"' + quoteObject.quote + '\"</p>';
    strToReturn += '<p class = "source"> - ' + quoteObject.source;

    strToReturn += getAdditionalAttributes(quoteObject);
    strToReturn += "</p>";
    return strToReturn;

}

// printQuote

function printQuote() {

    let quote = buildQuote();
    let quoteDiv = document.querySelector("#quote");

    switchColor();
    quoteDiv.innerHTML = quote;

    clearInterval(interval);
    interval = setInterval(printQuote, 15000);

}

// Run The Script

printQuote();
document.querySelector("#loadQuote").addEventListener("click", printQuote);