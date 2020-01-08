export function textJump() {
  const textJumpIterationNum = '001';
  console.log('textJump' + textJumpIterationNum);


  let element = document.getElementById("sci-text-jump");

  element.addEventListener('mouseover', onMouseOver);

  function onMouseOver( animation ) {
      let aniTarget = animation.target;
      if(aniTarget.tagName.toLowerCase() === 'span') {
          const tl = new TimelineMax();
          
          tl
          .to(aniTarget, .25, {
              y:-30,
              rotation: "360",
              color: '#5b398c',
              fontWeight: 800,
              ease:Power4.easeInOut,

          })
          .to(aniTarget, .5, {
              clearProps: 'rotation',
              fontWeight: 400,
              y:0, 
              x:0,
              color: '#757575',
              ease:Power1.easeInOut});
      }
    }
}