/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/


const dyslexiaMode = (ev) => {
    if (document.querySelector('body').className != "dyslexia-mode"){
        document.querySelector('body').className = 'dyslexia-mode';
    }
    else{
        document.querySelector('body').className = 'default';
    }
};


document.querySelector('#dyslexia-toggle').addEventListener('click', dyslexiaMode);