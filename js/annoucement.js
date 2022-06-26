// 一頁顯示幾個項目
var perPage = 4;
// 總共多少項目
var numItems = $(".list-item").length;

$(".list-item").slice(perPage).hide();

$('#pagination-container').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick:function(pageNumber){
        var from = perPage * (pageNumber - 1);
        var to = from + perPage;
        $(".list-item").hide().slice(from, to).show();
    }
});