var resetBtn = document.querySelector(".reset")
$(resetBtn).on("click", function () {
    $(".form-control").text("");
})

var term = document.querySelector("#query");
var searchBtn = document.querySelector(".go");
var searchVol = document.querySelector("#nombre");
$(searchBtn).on("click", function () {
    event.preventDefault();
    term = $(term).val();
    let numArt = $(searchVol).val();
    var NYTsearch = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=AXjEQTirAYbsDbmYlkVR5qhHHj352GYj";
    $.ajax({
        url: NYTsearch,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (q = 0; q<numArt; q++) {
            var artDisplay = $("<div>");
            $(artDisplay);
        }
    });

});