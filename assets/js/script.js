$(document).ready(function () {
  $.ajax({
    url: "master/header.html",
    context: document.body,
  }).done(function (data) {
    $("#header").html(data);
  });
  $.ajax({
    url: "master/footer.html",
    context: document.body,
  }).done(function (data) {
    $("#footer").html(data);
  });
});
