const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                <h1>The Secret Society of Old Man Jenkins</h1>
                <p>So to seems you have heard of my new society to uncover the secrets fo the mysterious Old Man Jenkins. Not anyone is able to join this selective society. To join, you will need to complete 6 puzzles, proving your mental fortitude.</p>
                <p>To begin, add "/puzzle1" onto the end of the url</p>
            </div>
    `);
    res.end();
    } else if (req.url === '/puzzle1') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                <img src="http://localhost:5000/puzzle1/images/puzzle1.png">
                <a href='/hint1'>I need help</a>
            </div>
        `);
        res.end();
    } else if (req.url === '/hint1') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                <ul>
                    <li>West Mec</li>
                    <li>North East Campus</li>
                    <li>Coding</li>
                    <li>HTML</li>
                    <li>VSCode</li>
                    <li>Code Wars</li>
                    <li>React</li>
                </ul>
                <a href='/puzzle1'>Go back</a>
                <a href='/answerKey'>Answer Key</a>
            </div>
        `);
        res.end();
    } else if (req.url === '/puzzle2') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                
            </div>
        `);
        res.end();
    } else if (req.url === '/hint2') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>

                <a href='/answerKey'>Answer Key</a>
            </div>
        `);
        res.end();
    } else if (req.url === '/puzzle3') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                
            </div>
        `);
        res.end();
    } else if (req.url === '/hint3') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                
                <a href='/answerKey'>Answer Key</a>
            </div>
        `);
        res.end();
    } else if (req.url === '/puzzle4') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                <p>A girl has the same amount of brothers as sisters, but each brother has half as many brothers as he has sisters. How many brothers and sisters are there?</p>
                <p>Example Answer: "/twoBrothersTwoSisters"</p>
            </div>
        `);
        res.end();
    } else if (req.url === '/hint4') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                <p>
                    x = Sisters<br>
                    y = Brothers<br>

                    (x-1) + y = 2y
                    x + (y-1) = x + (y/2)
                </p>
                <a href='/answerKey'>Answer Key</a>
            </div>
        `);
        res.end();
    } else if (req.url === '/threeBrothersFourSisters') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                Puzzle 5      
            </div>
        `);
        res.end();
    } else if (req.url === '/hint5') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                
                <a href='/answerKey'>Answer Key</a>
            </div>
        `);
        res.end();
    } else if (req.url === '/puzzle6') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                
            </div>
        `);
        res.end();
    } else if (req.url === '/hint6') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <div>
                
                <a href='/answerKey'>Answer Key</a>
            </div>
        `);
        res.end();
    } 
    
    
    else {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you were looking for</p>
            <a href='/'>Back Home</a>
        `);
        res.end();
    }
})

server.listen(5000);