$(document).ready(function(){
  $("#content").submit(function(event){
    var icecreams = ["first", "second", "third", "fourth"];
    var favoriteArray = [];
    var index = 0;
      icecreams.forEach(function(icecream) {
        var input = $("input#" + icecream).val();
        favoriteArray.push(input);
        $("." + icecream).text(favoriteArray[index]);
        index += 1;
      });

    // var firstInput = $("input#first").val();
    // var secondInput = $("input#second").val();
    // var thirdInput = $("input#third").val();
    // var fourthInput = $("input#fourth").val();
    // var favoriteArray = [firstInput, secondInput, thirdInput, fourthInput];
    var newArray = [];
    newArray.push(favoriteArray);


    // $(".first").text(favoriteArray[0]);
    // $(".second").text(favoriteArray[1]);
    // $(".third").text(favoriteArray[2]);
    // $(".fourth").text(favoriteArray[3]);
    $(".array").text(newArray);

    $("#result").show();

    event.preventDefault();
  })

});
