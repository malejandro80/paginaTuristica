$(document).ready(function(){

	$("#inicio-button").on("click", function(){
		//$(window).focus("#nosotros");
		$('html,body').animate({
        scrollTop: $("#inicio").offset().top
    }, 1500);
	})
	$("#nosotros-button").on("click", function(){
		//$(window).focus("#nosotros");
		$('html,body').animate({
        scrollTop: $("#nosotros").offset().top
    }, 1500);
	})
	$("#paquetes-button").on("click", function(){
		//$(window).focus("#nosotros");
		$('html,body').animate({
        scrollTop: $("#servicios").offset().top
    }, 1500);
	})
	$("#contacto-button").on("click", function(){
		//$(window).focus("#nosotros");
		$('html,body').animate({
        scrollTop: $("#contacto").offset().top
    }, 1500);
	})
});