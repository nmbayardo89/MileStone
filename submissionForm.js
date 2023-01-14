/*
class BooksAdded {
    constructor (author, language, subject, title){
    this.author = author;
    this.language = language;
    this.subject = subject;
    this.title = title;
    }

    render(){
        let booksAdded = document.createElement('li');
        booksAdded.classList.add("booksAddeds");
        list.append(booksAdded);

        let bookAuthor = document.createElement('p');
        bookAuthor.innerHTML = "Author: " + " " +this.author;

        let bookLanguage = document.createElement('p');
        bookLanguage.innerHTML = "Language: " + " " + this.language;

        let bookSubject = document.createElement('p');
        bookSubject.innerHTML = "Subject: " + " " + this.subject;

        let bookTitle = document.createElement('p');
        bookTitle.innerHTML = "Title: " + " " + this.title;

        booksAdded.append(bookAuthor, bookLanguage, bookSubject, bookTitle);

        //input

        let commentDiv = document.createElement('div');

        booksAdded.append(commentDiv);

        let commentInput = document.createElement("input");
        commentInput.setAttribute("type", "text");
        commentInput.setAttribute("placeholder", "Tell us what you think!");
        commentDiv.append(commentInput);

        //button
        let btn = document.createElement("button");
        btn.setAttribute("class", "comment");
        btn.innerText = "comment";
        commentDiv.append(btn);

        //comment box

        let commentDivTwo = document.createElement("div");
        booksAdded.append(commentDivTwo);

        let commentBox = document.createElement("p");
        commentBox.classList.add("commentBox");
        commentBox.innerText = "Comments: ";
        commentDivTwo.append(commentBox);

        btn.addEventListener("click", () => {
            let newC = document.createElement("p");
            if((commentInput.value).length > 280){
                return;
            }else{
                commentBox.innerText = commentInput.value;
                commentBox.append(comment);
                commentInput.value = "";
            }
        })
*/



//function to filter between author and language
//push author and language into array
//render function create list items