// jQuery(document).ready(function($){
// var topics = ["Dog", "Fish", "Cat", "Hamster", "Skunk"]

// function renderButtons (){
//     $("#animal-div").empty();
//     for (var i=0; i < topics.length; i++){
//         var a = $("<button>");
//         a.addClass("animal-button");
//        a.attr("data-name", topics[i]);
//        a.text(topics[i]);
//        $("#animal-div").append(a); 
//     }
// }
// $("#addAnimal").on("click", function(event){
//     event.preventDefault();
//     var topic = $("#animal-input").val().trim();
//     topics.push(topic);
//     renderButtons();
//       });

//       renderButtons();

// $("#animal-div").on("click", function (){
//     var x = $(this).val("data-search");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=gMTHfZBv00mKZwOLwI7tfRFskNJX0ME8&limit=10";
//     console.log(queryURL)

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).done(function(response){
//           console.log(response)
//           for (i = 0; i < response.data.length; i++) {
//             var gifDiv = $("<div class = 'gifdiv'>");
//             $('body').append("<p>Rating: " + response.data[i].rating+"</p>");
//             // gifDiv.append(p);
//             var image = $("<img class = 'gifclass'>");
//             image.attr("src", response.data[i].images.fixed_height_still.url);
//             gifDiv.append(image);
//             $("#animal-div").append(gifDiv);
//             $("#animal-div").append(gifDiv);
//                 }
//           });
//       });
    
    

//onload end
// });
jQuery(document).ready(function($){
    var topics = ["Dog", "Fish", "Cat", "Hamster", "Skunk"]
    
    function renderButtons (){
        $("#animal-div").empty();
        for (var i=0; i < topics.length; i++){
            var a = $("<button>");
            a.addClass("animal-button");
           a.attr("data-name", topics[i]);
           a.text(topics[i]);
           $("#animal-div").append(a); 
        }
    }
    $("#addAnimal").on("click", function(event){
        event.preventDefault();
        var topic = $("#animal-input").val().trim();
        topics.push(topic);
        renderButtons();
          });
    
          renderButtons();
    
    $(".animal-button").on("click", function (){
        var x = $(this).attr("data-name");
        console.log('Category clicked');
        console.log(x);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=gMTHfZBv00mKZwOLwI7tfRFskNJX0ME8&limit=10";
        console.log(queryURL)
    
        $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response){
              console.log(response)
              for (i = 0; i < response.data.length; i++) {
                var gifDiv = $("<div class = 'gifdiv'>");
                $('body').append("<p>Rating: " + response.data[i].rating+"</p>");
                // gifDiv.append(p);
                var image = $("<img class = 'gifclass'>");
                image.attr("src", response.data[i].images.fixed_height.url);
                gifDiv.append(image);
                $("#animal-div").append(gifDiv);
                $("#animal-div").append(gifDiv);
                    }
              });
          });
        
    
    //onload end
    });