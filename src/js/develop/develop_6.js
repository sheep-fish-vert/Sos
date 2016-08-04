function get_timer(){
	var date_new ="June 24, 2012 13:00";

	var date_t = new Date(date_new);//присвоюємо змінній нову дату в майбутньому
	var date = new Date;

	var timer= date_t - date;

	if(date_t > date){
		//day
		var day = parseInt(timer/(24*60*60*1000));
		if(day <10){
			day="0"+day;
		}
		day = day.toString(); //превратить число в строку для того чтобы обращаться к елементам числа с помощью индекса масива
		//hour
		var hour = parseInt(timer/(60*60*1000))%24;
		hour = hour.toString();
	}else{
		$('').html("<span id='stop'>Count stop</span>")
	}
}
// some manipulation wit the cookie var date = new Date(); date.setDate(date.getDate() + 5);

$(document).ready(function(){

});

$(window).load(function(){

});

$(window).resize(function(){

});