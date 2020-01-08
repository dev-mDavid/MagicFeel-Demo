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
      .to(splitText.target, .25, {
          y:-30,
          rotation: "360",
          color: '#5b398c',
          fontWeight: 800,
          ease:Power4.easeInOut,

      })
      .to(splitText.target, .5, {
          clearProps: 'rotation',
          fontWeight: 400,
          y:0, 
          x:0,
          color: '#757575',
          ease:Power1.easeInOut
        },
      );
    }
  }
}