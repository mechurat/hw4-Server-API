$('form').on('submit', handleSubmit);   

function handleSubmit(event){
    console.log(event);
    //don't leave the page
    event.preventDefault();

    //Array of elements submitted into search
    var searchEle = {
        isbn:$('#isbn').val(),
        author:$('#author').val(),
        title:$('title').val()
    };
    var i=0;

    var formData ={
        //use 'if' statement in while loop to determine which search parameter was used, and then submit that data with a return
        while(searchEle[i]==''){
            if(searchEle[i] != ''){
                return searchEle[i];
                console.log(searchEle[i]);
            }
            i++;
        }
        //Current errors:
        //Returns all 3 search parameters
        //Posts them AFTER the API key in the URL
        'api-key':$('#appid').val()
    };

    $.ajax({
        url:'http://api.nytimes.com/svc/books/v3/reviews.json',
        method:'get',
        data: formData
    }).done(function(data){
        var author;
        var title;
        var isbn = [''];
        var summary;

        author = data.results.book_author;
        console.log(author);

        title = data.results.book_author;
        console.log(title);

        isbn[0] = data.results.isbn13;
        console.log(isbn[0]);

        searchResult(isbn, title, author, summary)
    })

    .fail(handleError)
}

function searchResult(isbn, title, author, summary){
    var str = "Your search results:<br>ISBN13: " + isbn[0] + "</span><br>Book Title: " + title + "<br>Author: " + author + "<br><br>Summary:<br>" + summary; 

    callback(str);
}

function handleError(err){
    console.log('error', err)
}