$(function () {
  //*JQUERY CODE STARTS HERE

  // *SEARCH BAR
  const searchArea = $(".searchArea");
  const searchLg = $(".search-lg");
  const searchSm = $(".search-sm");
  
  searchLg.on("click", searchAreaToggler);
  searchSm.on("click", searchAreaToggler);

  function searchAreaToggler() {
    $(this).children("i").toggleClass("fa-xmark");

    searchArea.toggleClass("show");
  }

  //*SEARCH BAR ENDS HERE
});
