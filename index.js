const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
            <div>
                <h1>The Secret Society of Old Man Jenkins</h1>
                <p>So to seems you have heard of my new society to uncover the secrets fo the mysterious Old Man Jenkins. Not anyone is able to join this selective society. To join, you will need to complete 6 puzzles, proving your mental fortitude.</p>
                <p>To begin, add "/puzzle1" onto the end of the url</p>
            </div>
    `);
    } else if (req.url === '/puzzle1') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/hint1') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/puzzle2') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/hint2') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/puzzle3') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/hint3') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/puzzle4') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/hint4') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/puzzle5') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/hint5') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/puzzle6') {
        res.end(`
            <div>
                
            </div>
        `);
    } else if (req.url === '/hint6') {
        res.end(`
            <div>
                
            </div>
        `);
    } 
    
    
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you were looking for</p>
            <a href='/'>Back Home</a>
        `);
    }
})

server.listen(5000);