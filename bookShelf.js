class BookShelf {
    constructor(){
        this.books = new Array() //an array of book instances
    }

    render(){
        let renderString = '<div class="bookshelf">'

        for(let i = 0; i < this.books.length; i++){
            // the book instance can render
            // the loop starts at 0 and continues to loop until it reaches the end of the "books" array
            // iterating through all the book instances

            // Everytime it goes through the loop I want it to render each book instance
            // render each book

            renderString += this.books[i].render();
        }
    
        renderString += "</div>"
        return renderString
    }

    getBooks(){
        return this.books
    }
    
    addToBookShelf(book){
        this.books.push(book);
    }
}

