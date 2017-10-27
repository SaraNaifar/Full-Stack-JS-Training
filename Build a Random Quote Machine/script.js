var quoteList = {["first quote  : auteur1", " second quote : auteur2", "third quote : auteur 3"]};


function randomQuote(quoteList) {

    var number = Math.floor(Math.random()*quoteList.length);
    return quoteList[number];
}



 $(document).ready(function() {
    $(".mybutton").on("click", function(){
      // Only change code below this line.
       $(".displayquote").html("hello");
      // Only change code above this line.
    });
  });
}

