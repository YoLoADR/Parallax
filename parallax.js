// Quand l'éccran scroll
$(window).scroll(function(){
	// La variale scrollPX revient à la hauteur sur laquelle on trouve lorsqu'on scrolle
	var scrolPx = $(this).scrollTop();
	// L'élément avec une class .objet prend l'attribut css transform avec la valeur translateY et la hauteur sur laquelle on trouve lorsqu'on scrolle
	$('.objet1').css({'transform': 'translateY(' +scrolPx/2 + 'px)'
	});
	// Possibilité de mettre deux valeur et pour aller dans le sens contraire mettre le signe négative avant la valeur '-'
	$('.objet2').css({'transform': 'translateX(' +scrolPx + 'px) translateX(-' + scrolPx + 'px)'
	});
	$('.objet3').css({'transform': 'translateY(' +scrolPx/1.5 + 'px)'
	});
});