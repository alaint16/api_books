$(document).ready(function() {
    $(".srbook").click(function() {
        var book = $(".bookInput").val();
        console.log(book)
        
         $.get('http://www.openlibrary.org/b/OL7668717M', function(dataresults){
         	$(".result_cover").append("<div>" + book + " " + dataresults.bookName + "</div>");
         	$(".bookInput").val(" ");
         
    //  showResults(time.Search);
    });
    })

});




