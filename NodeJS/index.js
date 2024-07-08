const fs = require('fs');

// fs.readFile('file1.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data + ' Reading is done !');
// });

// fs.writeFile('file1.txt', 'Hello !', 'utf8', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Data written to file1.txt Writing is done !');
// });

// fs.appendFile('file1.txt', "\nClass is going on", 'utf8', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Data appended to file1.txt Appending is done !');
// });

// fs.mkdir('newDir', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Directory created !');
// });

// fs.rmdir('newDir', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log('Directory deleted !');
// });

// fs.rename('file2.txt', 'file1.txt', (err) => { 
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('File renamed !');
// });

// const p = "C:\Users\WINDOWS\Desktop\NodeJS\file1.txt";
// const path = require('path');
// console.log(path.dirname(p));
// console.log(path.basename(p));
// console.log(path.extname(p));

// Move file1.txt to newDir

// fs.rename('file1.txt', 'newDir/file1.txt', (err) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('File moved !');
// });

const http = require('http');
const data = fs.readFileSync('index.html', 'utf8');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
});

const port = 3000;
const hostname = 'localhost';
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});

// https://localhost:3000

// Move file1.txt to newDir by changing its path

// Why is writing done before reading ?
// Because reading is asynchronous and writing is synchronous.
// So, writing is done before reading.
