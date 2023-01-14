class Book {
    constructor(author, language, subject, title, /* comments=[] */){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
        this.comments = [" "];

        //render this.comments
        //add new comments
    }
    
    render(){
        
        let renderDiv = '<div id="bookContainer" class="bookContainer">'
            
            renderDiv += '<div class="imgBook">' + '</div>'
        
            renderDiv += '<div class="bookContent">'
                renderDiv += '<p>' + this.author + '</p>'
                renderDiv += '<p>' + this.title + '</p>'
                renderDiv += '<p>' + this.subject + '</p>'
                renderDiv += '<p>' + this.language + '</p>'
            renderDiv += '</div>'

            renderDiv += '<div>'
            renderDiv += '</div>'

            renderDiv += '<button id="myBtn" type="button">' + "Comment" + '</button>'

            renderDiv += '<div>'
            renderDiv += '<ul>'
            //renderDiv += '<li>' + "example 1" + "</li>"
            //renderDiv += '<li>' + "example 2" + "</li>"
            for(let i=0; i< this.comments.length; i++){
                renderDiv += '<li>' + this.comments[i] + "</li>"
            }
            renderDiv += '</ul>'
            renderDiv += '</div>'

        renderDiv += "</div>"

        return renderDiv 
    }

    addComment(comment){
        this.comment.push(comment)
    }
};

//const newBook = new Book("Nick", "EN", "Confused", "FML");

/* 
renderDiv += '<>'
                
renderDiv += '</>' 
*/


