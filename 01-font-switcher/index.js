const makeBigger = () => {
    /*
    var our_size = document.getElementsByClassName('content')[0].style.fontSize;
    our_size = our_size + 3;
    document.querySelector('.content').style.fontSize = our_size + "px";
    */
    
     txt = document.getElementsByClassName('content')[0];
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + 5) + 'px';
     
     
     txt = document.querySelector('h1');
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize + 5) + 'px';
};

const makeSmaller = () => {
    
     txt = document.getElementsByClassName('content')[0];
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize - 5) + 'px';
     
     
     txt = document.querySelector('h1');
     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     currentSize = parseFloat(style);
     txt.style.fontSize = (currentSize - 5) + 'px';
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
