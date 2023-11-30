document.addEventListener('DOMContentLoaded', function() {
    var text = 'Welcome to Rijally Website!';
    var typewriter = document.querySelector('.typewriter');
    var duration = 100 * text.length;
     
    typewriter.innerHTML = '';
     
    text.split('').forEach(function(character, index) {
       setTimeout(function() {
         typewriter.innerHTML += character;
       }, 100 * index);
    });
     
    setTimeout(function() {
       typewriter.style.animationPlayState = 'paused';
    }, duration);
   });