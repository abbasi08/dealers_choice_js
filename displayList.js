const bookData = [
    {id: 1, title: 'The Ethical Slut', author: 'Janet W. Hardy and Dossie Easton'},
    {id: 2, title: 'Opening Up', author: 'Tristan Taormino'},
    {id: 3, title: 'More Than Two', author: 'Franklin Veaux and Eve Rickert'},
    {id: 4, title: 'A Happy Life in an Open Relationship', author: 'Susan Wenzel'},
    {id: 5, title: 'Tales of Swinging and Polyamory', author: 'Cooper Beckett'},
    {id: 6, title: 'The Smart Girl\'s Guide to Polyamory', author: 'Dedeker Winston'},
    {id: 7, title: 'Love Trinity On The Open Road', author: 'Richard Deerton'},
    {id: 8, title: 'Polyamory: Easy Introductory Guide', author: 'Marissa Blake'},
    {id: 9, title: 'A Color Named Love', author: 'M. Ellery'}
]; 

const list = () => {
    return [...bookData]
}

const find = (id) => {
    const book = bookData.find(book => book.id === +id);
    return {...book}
}

module.exports = {list, find}; 