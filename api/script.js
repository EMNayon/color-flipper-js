const colors = ['green','silver','yellow','cyan','gray','olive','purple','navy','lime', 'pink','black' ,'red', 'rgba(133,122,200)','#f15025'];

const btn = document.getElementById('btn');
// The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element.
const color = document.querySelector(".color");

// The addEventListener() method attaches an event handler to the element.
btn.addEventListener('click',function(){
    // get random number between 0 - 3 
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    // he textContent property sets or returns the text content of the specified node, and all its descendants.
    color.textContent = colors[randomNumber];
});


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

