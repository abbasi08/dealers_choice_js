const express = require ('express');
const morgan = require('morgan'); 
const bookData = require ('./displayList')

const app = express(); 
app.use(morgan('dev')); 
app.use(express.static('public')); 

const header = `<head>
    <title>Polyamory</title>
    <link rel="stylesheet" href="/style.css" />
  </head>`

app.get('/', (req, res) => {
    const books = bookData.list();
    const html = `<!DOCTYPE html>
        <html>
            ${header}
            <body>
                <div class="book-list">
                <header><img src="/poly_logo2.jpg"/> 9 Best Polyamory Books on Consensual Non-Monogamy</header>
                ${books.map(book => `
                    <div class='book-item'>
                    <p>
                        <span class="book-position">${book.id}. ▲ </span>${book.title}
                        <small>by ${book.author}</small>
                    </p>
                    </div>`
                ).join('')}
                </div>
            </body>
        </html>`

    res.send(html)
}); 


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
})