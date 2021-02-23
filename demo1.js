
//tab전환
$(document).ready(function() {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tabb'); //클릭이벤트 발생한 data-tab값을 가져옴
        
        $('ul.tabs li').removeClass('current'); //선택 요소의  class를 제거
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');    
    })
});

$(document).ready(function() {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tabb'); //클릭이벤트 발생한 data-tab값을 가져옴
        
        $('ul.tabs li').removeClass('current1'); //선택 요소의  class를 제거
        $('.tab-content').removeClass('current1');

        $(this).addClass('current1');
        $('#'+tab_id).addClass('current1');    
    })
});


//dropdown button
 function dp_menu(){
    let click = document.getElementById("drop-content");
    if(click.style.display === "none"){
        click.style.display = "block"; 
         }else{click.style.display = "none"; 
            }
        };




