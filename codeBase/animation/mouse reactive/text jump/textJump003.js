export function textJump() {
  const textJumpIterationNum = '003';
  console.log('textJump' + textJumpIterationNum);


// let jumpPhrase = document.getElementsByClassName('sci-text-jump')[0];
    // jumpPhrase.addEventListener('mouseOver', jumpTextAni);

    let jumpText = document.getElementsByClassName('sci-text-jump')[0];

    new SplitText(
        jumpText
        , { type: 'chars' }).chars;


    // let element = document.getElementById("sci-text-jump");

  jumpText.addEventListener('mouseover', onMouseOver);

  function onMouseOver( animation ) {
      let aniTarget = animation.target;
      if(aniTarget.tagName.toLowerCase() === 'div') {
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