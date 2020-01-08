export function textSwoop() {
  const textSwoopIterationNum = '002';
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
        .to(splitText.target, 1, {
           bezier: { 
            type: 'quadratic', 
            values: [
              /*p1*/{ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 10, y: 10 }, 
              /*p2*/{ x: 10, y: 20 }, { x: 0, y: 20 },  
              /*p3*/{ x: -10, y: 20 }, { x: -10, y: 10 },  
              /*p4*/{ x: -10, y: 0 }, { x: 0, y: 0 }] }
              /*bezier end*/, 
              ease: Linear.easeNone, 
              // paused: true 
            })
      ;
    }
  }
}