var quoteList = [{quote: 'May the Force be with you.', author: 'Star Wars'}, {quote : "Genius is one percent inspiration and ninety-nine percent perspiration." , author:"Thomas Edison"}, {quote : "Knowledge is power." , author:"Sir Francis Bacon"}, {quote : "Nothing is certain except for death and taxes." , author:"Benjamin Franklin"}, {quote : "To thine own self, be true." , author:"William Shakespeare"}, {quote : "You must be the change you wish to see in the world." , author:"Mahatma Ghandi"}];
		// var authorList = ["author1", " author2", "author3"];


		function randomquote(){
			var index = Math.floor(Math.random()*quoteList.length);
			return index;
		}
		$(document).ready(function() {
			var randomIndex;

			function init() {
				randomIndex = 0;
				$('.displayquote').html(quoteList[0].quote);
				$('.displayauthor').html(quoteList[0].author);
			}

			init();

			$(".mybutton").on("click", function generateNewQuote(){
				randomIndex=randomquote();
           		$(".displayquote").html(quoteList[randomIndex].quote);
           		$(".displayauthor").html(quoteList[randomIndex].author);
           		//$(".twitter-share-button").attr('href',"https://twitter.com/intent/tweet?text="+quoteList[randomIndex].quote+" "+quoteList[randomIndex].author);
     			});

           
			$(".twitter-share-button").on("click", function(){

           		$(".twitter-share-button").attr('href',"https://twitter.com/intent/tweet?text="+quoteList[randomIndex].quote+" "+quoteList[randomIndex].author);
     			 // Only change code above this line.
     			});
		});

