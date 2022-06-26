
$(document).ready(function(){
    $("#myInput").on("keyup", function(){
        var value = $(this).val().toLowerCase();

        $("#myBody").find('td').each(function(){
            var text = $(this).text();
            var position = text.indexOf(value);
            var check = new RegExp(value, "ig");
            text = text.replace(check, (match, $1) => {
                return "<mark style='background-color:yellow';>" + match + "</mark>"
            });
            $(this).html(text);
        });

        $("#myBody tr").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1)
        });

    });
});