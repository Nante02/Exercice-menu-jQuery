//jQuery
$(document).ready(function(){
    $("#aparu").hide();
    $("#plus").hover(   
        function () {
            $('#aparu').show();
        },
        function (){
        //     $('#aparu').hide();
        }
        );
    $("#aparu").hover(
        function(){
        },function(){
            $(this).hide();
        }); 
    $("body").click(function(){
        $('#aparu').hide();
    })
});
