const typewriterText = 'This is the text you want to display using the typewriter effect.';
const typingSpeed = 100; // Time in milliseconds between each character

let index = 0;
let textNode = document.createTextNode('');

document.getElementById('typewriter').appendChild(textNode);

function type() {
    if (index < typewriterText.length) {
        textNode.nodeValue += typewriterText.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    }
}

type();