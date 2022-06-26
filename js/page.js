var $grid = $(".grid").isotope({
    itemSelector:".items"
});

var filters = [];

$(".filters").on("click", "button", function(event){
    var $target = $(event.currentTarget);
    $target.toggleClass("is-checked");
    var isChecked = $target.hasClass("is-checked");
    var filter = $target.attr("data-filter");

    if(isChecked){
        addFilter(filter);
    }else{
        removeFilter(filter);
    }

    $grid.isotope({
        filter:filters.join(',')
    });

    function addFilter(filter){
        if(filters.indexOf(filter)==-1){
            filters.push(filter);
        }
    }
    function removeFilter(filter){
        if(filter.indexOf(filter)!=-1){
            filters.splice(filter.indexOf(filter), 1);
        }
    }
});