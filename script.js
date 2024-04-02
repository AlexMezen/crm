$(function () {
  $(".sidebar__mobile-burger").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".sidebar__menu-item").on("click", function (e) {
    e.preventDefault();
    const id = $(this).attr("href");
    $(".sidebar__menu-item").removeClass("active");
    $(this).addClass("active");

    $(".content-item").hide();
    $(id).show();
  });
});
