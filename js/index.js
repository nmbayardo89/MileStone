// The variable const bookshelf is intialized as the class BookShelf.js 
const bookshelf = new BookShelf();

//This for loop loops through the array in book-data.js
for(let i = 0; i< bookData.length; i++) {
    //adding a book to a bookshelf
    
    // The variable const book is intialized as the class Book
    const book = new Book(bookData[i].author, bookData[i].language, bookData[i].subject, bookData[i].title);

    //addToBookShelf() is a function in my booShelf.js file. It is taking the instance created in this loop and feeding it into this.books = new Array() in the bookShelf.js file.
    bookshelf.addToBookShelf(book);
    //addEvevntlistener to everybook
}


//this line of code prints the information in the HTML
function refreshDom(){
    document.getElementById("bookshelf-container").innerHTML = bookshelf.render();
}


// creates language with input submit class
const submit = document.body.querySelector('button');

 //Function to pull user submitted user info
submit.addEventListener('click', newBookAdded);

function newBookAdded(){
    let author = document.getElementsByClassName('bookAuthor')[0].value;
    
    let language  = document.getElementsByClassName('bookLanguage')[0].value;

    let subject = document.getElementsByClassName('bookSubject')[0].value;

    let title = document.getElementsByClassName('bookTitle')[0].value;
    
    const newBook = new Book(author, language, subject, title);
    
    bookshelf.addToBookShelf(newBook);

    refreshDom();   
}

refreshDom();

//create new variable
//when submit in comment box is clicked add comment to the first book in the bookshelf
//make new commet box per book line 12

newComment.addEventListener('click', newCommentAdded);

function newCommentAdded(){
    let commentBookBtn = document.getElementsByClassName('')[0].value;

    const newComment = new Book(/*comments[""]*/)
    
    bookshelf.addComment(comment)

    refreshDom();
}
