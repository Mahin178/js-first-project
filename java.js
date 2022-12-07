var text1 = prompt('first name :');
var text2 = prompt('last name :');

var  text = text2 + text1 ;
var  text3= text.toUpperCase();


document.write('<b>This is your full name: </b>'+text);
document.write( '<b> <br/>This is the nunber of your name: </b>' +text.length);
document.write( '<b><br/>Your name in capital letter: </b>'+ text3);
document.write( '<b><br/>3rd caracter of your name: </b>'+text.charAt(2));
