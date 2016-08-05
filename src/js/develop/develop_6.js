var days = 1 ;
var hour = 10 ;
var min = 10;
var sec  = 10 ;

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


// function get_timer(){
// 	var date_new ="June 24, 2012 13:00";

// 	var date_t = new Date(date_new);//присвоюємо змінній нову дату в майбутньому
// 	var date = new Date;

// 	var timer= date_t - date;

// 	if(date_t > date){
// 		//day
// 		var day = parseInt(timer/(24*60*60*1000));
// 		if(day <10){
// 			day="0"+day;
// 		}
// 		day = day.toString(); //превратить число в строку для того чтобы обращаться к елементам числа с помощью индекса масива
// 		//hour
// 		var hour = parseInt(timer/(60*60*1000))%24;
// 		hour = hour.toString();
// 	}else{
// 		$('').html("<span id='stop'>Count stop</span>")
// 	}
// }
// // some manipulation wit the cookie var date = new Date(); date.setDate(date.getDate() + 5);

$(document).ready(function(){

	setInterval(function(){

        sec--;
        if (sec == 0){
            min--;
            sec = 60 ;
            if(min == -1){
                min = 59;           
                hour--;                
                if(hour  == -1){
                    days --;
                    hour = 23;
                }
            }
        }
        $('.timer').find('.days').html(days);
        $('.timer').find('.hours').html(hour);
        $('.timer').find('.mins').html(min);
        $('.timer').find('.seconds').html(sec);

        /* reload */

    }, 1000);




});

$(window).load(function(){
		if (getCookie('date') == ''){
        document.cookie = "date=" + (Date.now() + 2678400000 - 1) + ';';
    };


    var todayTime = new Date();

    var tillTheEnd = new Date( parseInt(getCookie('date') ));

    var differense  = tillTheEnd - todayTime ;

    if (differense < 0){
        document.cookie = "date=" + (Date.now() + 2678400000-1) + ';';
    }

    var tillTheEnd = new Date( parseInt(getCookie('date')) );

    var differense  = tillTheEnd - todayTime ;

    var d = Math.floor(differense / (1000 * 3600 * 24));

    var h = Math.floor((differense - d*(1000 * 3600 * 24))/(1000*3600));

    var m = Math.floor((differense - d*(1000 * 3600 * 24) - h*(1000*3600) )/(1000*60));

    var s = Math.floor((differense - d*(1000 * 3600 * 24) - h*(1000*3600) - m*(1000*60) )/(1000));

    days =  d; 
    hour = h; 
    min =  m; 
    sec = s; 

        
    /* reload */ 
        $('.timer').find('.days').html(days);
        $('.timer').find('.hours').html(hour);
        $('.timer').find('.mins').html(min);
        $('.timer').find('.seconds').html(sec);
    /* reload */
});

$(window).resize(function(){

});