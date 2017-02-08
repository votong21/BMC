$(function () {
    $('input:radio').click(function (e) {
        e.stopPropagation();
        $('li').removeClass('active')
        $(this).parent().parent().addClass('active');
        var tabpane = $(this).parent().attr('aria-controls');
        $('.tab-content').children().removeClass('active');
        $('#' + tabpane).addClass('active');
    });
    $('a').click(function (e) {
        $(this).find("input[type=radio]").trigger('click');
    });
});
$(document).ready(function(){
    //Stop people from typing
    $('.spinner input').keydown(function(e){
        e.preventDefault();
        return false;
    });
    var minNumber = 1;
    var maxNumber = 10;
    $('.spinner .btn:first-of-type').on('click', function() {
        if($('.spinner input').val() == maxNumber){
            return false;
        }else{
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
            return false;
        }
    });

    $('.spinner .btn:last-of-type').on('click', function() {
        if($('.spinner input').val() == minNumber){
            return false;
        }else{
            $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
            return false;
        }
    });

    $('#s-option').on('click', function () {
        $('#1').show();
        $('#2').hide();
    });
    $('#f-option').on('click', function () {
        $('#2').show();
        $('#1').hide();
    });

});
$( "#address" ).click(function() {
    var x = document.getElementById('delivery-car');
    x.style.display = 'block';
});
function openDiv(id) {
    var x = document.getElementsByClassName('address');
    var i;
    for(i=0;i<x.length;i++){
        x[i].style.border = 'solid 1px #ea9215';
        x[i].getElementsByClassName('Delivery')[0].style.display= 'block';
    }
    document.getElementById(id).style.border ='dashed 1px ';
    document.getElementById(id).getElementsByClassName('Delivery')[0].style.display= 'none';

}
