$(document).ready(function() {
    $(".srbook").click(function() {
        var book = $(".bookInput").val();
        console.log(book);
        
         $.get('https://www.googleapis.com/books/v1/volumes?q=' + book, function(dataresults){
                console.log(dataresults);
         for(var i = 0; i < dataresults.items.length; i++){

            $(".results").append('<li>'+
'<div class="result_cover"><img src="'+ dataresults.items[i].volumeInfo.imageLinks.thumbnail +'"></div>'+
     '<div class="description">' +
    '<div class="result_title">'+ "<a target='_blank' href=' "+ dataresults.items[i].volumeInfo.canonicalVolumeLink + " '> " + dataresults.items[i].volumeInfo.title + "</a>" + '</div>'+
    '<div class="result_author">'+ dataresults.items[i].volumeInfo.authors +'</div>' + '</div>' + '</li>'


            );


         }
  dataresults++;

    
         	$(".bookInput").val(" ");
         
    //  showResults(time.Search);
    });
    })

});




