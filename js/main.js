var m,
	path = 'microsoft',
	ewc = '';

if(m = /\Wwindows nt ([\d.]+);/i.exec(navigator.userAgent)){
	if(parseFloat(m[1])>8){
		ewc = ' class="win"'
	}
}

var fams = ['','Smileys & People','Animals & Nature','Food & Drink','Activity','Travel & Places','Objects','Symbols','Flags'];


function cp(t) {
	for (var n = [], r = 0, o = 0, h = 0; h < t.length;) r = t.charCodeAt(h++), o ? (n.push((65536 + (o - 55296 << 10) + (r - 56320)).toString(16)), o = 0) : r >= 55296 && 56319 >= r ? o = r : n.push(r.toString(16));
	return n.join("-");
}

function deco(s){
	var nar = s.split('-');
	for (var i = 0; i < nar.length; i++) {
		nar[i] = 'U+'+nar[i];
	}
	return nar.join(' ').toUpperCase();
}

$('.col span').click(function(){
	path = $(this).attr('data-path');
	drawEmojis()
});



function drawEmojis(){
	$('#emojis').empty();
	var cont,
		ecp,
		fsta=0;

	for (var i = 0; i < table.length; i++) {
		ecp = cp(table[i].e.replace(/\ufe0f|\u200d/gm, ''));
		
		if(table[i].f!=fsta){ //&& fsta<10
			fsta++;
			$('#emojis').append('<tr><th colspan="5" class="text-center">'+fams[fsta]+'</th></tr>');
		}				

		cont = '<tr>';

		// Apple
		cont+='<td><img src="img/apple/'+ecp+'.png" width="40" height="40"></td>';

		// OS
		cont+='<td'+ewc+'>'+table[i].e+'</td>';

		// Selected Set
		cont+='<td><img src="img/'+path+'/'+ecp+'.png" width="40" height="40"></td>';

		// Code Point
		cont+='<td>'+deco(cp(table[i].e))+'</td>';

		// Description
		cont+='<td>'+table[i].d+'</td>';
			

		cont+='</tr>';

		$('#emojis').append(cont);
	};
}

// onLoad
$(function(){
	drawEmojis();
});

// GA
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-389407-1']);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();