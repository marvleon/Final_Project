$(document).ready(() => {
  const factURL = "https://meowfacts.herokuapp.com/";

  const addToDOM = (fact) => {
    $("#results")
      .addClass("description")

      .append($("<p>").text("+ " + fact));
  };

  const fetchFactData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (fact) => {
        console.log(fact.data);
        addToDOM(fact.data);
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
