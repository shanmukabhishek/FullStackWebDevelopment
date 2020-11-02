// Enter your code here
// Enter your code here
window.addEventListener('resize', Size);
    const widthOutput = document.querySelector('#width');
    const heightOutput = document.querySelector('#height');
    
    function Size() {
      widthOutput.textContent = window.innerWidth;
      heightOutput.textContent = window.innerHeight;
    }
    
    window.onresize = reportWindowSize;
