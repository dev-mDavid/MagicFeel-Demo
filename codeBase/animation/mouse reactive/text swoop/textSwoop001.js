export function textSwoop() {
  const textSwoopIterationNum = '001';
  console.log('textSwoop' + textSwoopIterationNum);

  let swoopText = document.getElementById('power-of-motion-design');  

  new SplitText(
    swoopText,
    { type: 'chars' }
  ).chars;

  swoopText.addEventListener('mouseover', onMouseOver);

  function onMouseOver( splitText ) {
    if(splitText.target.tagName.toLowerCase() === 'div') {
      const tl = new TimelineMax();

      tl
      // .to(splitText.target, .1, {
      //     y: -20,
      //     x: 0,          
      //     // ease: "sine.inOut"
      // })
      .to(splitText.target, .1, {
          y: 0,
          x: 10,          
          rotation: "45",
          // ease: "sine.inOut"
      })
      .to(splitText.target, .1, {
          y: 7,
          x: 20,         
        rotation: "90",
          // ease: "sine.inOut"
      })
      .to(splitText.target, .1, {
          y: 14,
          x: 10,        
          rotation: "135",  
          // ease: "sine.inOut"
      })
      .to(splitText.target, .1, {
          y: 21,
          x: 0,          
          rotation: "180",
          // ease: "sine.inOut"
      })
      .to(splitText.target, .1, {
        y: 14,
        x: -10,          
        rotation: "225",
        // ease: "sine.inOut"
      })
      .to(splitText.target, .1, {
        y: 7,
        x: -20,
        rotation: "270",
        // ease: "sine.inOut"
      })      
      .to(splitText.target, .1, {
        y: 0,
        x: -10,
        rotation: "315",
        // ease: "sine.inOut"
      })      
      // .to(splitText.target, .1, {
      //   y: -20,
      //   x: 0,        
      //   // ease: "sine.inOut"
      // })
      .to(splitText.target, .1, {
        rotation: "360",  
        y: 0,
        x: 0,
        // ease: "sine.inOut"
      })
      
      // .to(splitText.target, .25, {
      //     y: 60,
      //     x: 0,
      //     rotation: "360",
      //     color: '#5b398c',
      //     fontWeight: 800,
      //     // transformOrigin: '0% 60% -60%',
      //     // ease:Power4.easeInOut,
      // })
      // .to(splitText.target, .5, {
      //     clearProps: 'rotation',
      //     fontWeight: 400,
      //     y:0, 
      //     x:0,
      //     color: '#757575',
      //     ease:Power1.easeInOut
      //   })
      ;
    }
  }
}