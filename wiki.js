$(document).ready(() => {
  const factURL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  const addToDOM = (fact) => {
    $("#results")
      .addClass("description")

      .append($("<p>").text("+ " + fact));
  };

  const fetchFactData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        console.log(data.text);
        addToDOM(data.text);
      },
      error: (error) => {
        console.error(error);
        $("#results").append(
          $("<div>").text(
            "An error occured. Please reload the page or try again later."
          )
        );
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };
  fetchFactData(factURL);
  fetchFactData(factURL);
  fetchFactData(factURL);
  fetchFactData(factURL);
});
