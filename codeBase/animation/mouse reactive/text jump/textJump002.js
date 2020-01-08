import { arrayOf } from "../../../helper services/arrayOf/arrayOf002";
    
export function textJump() {
  const textJumpIterationNum = '002';
  console.log('textJump' + textJumpIterationNum);


  let jumpPhrase = document.getElementsByClassName('sci-text-jump')[0];
  console.log();
  jumpPhrase.addEventListener('mouseOver', jumpTextAni);

  function jumpTextAni(){
  
    let splitTextJumpPhrase = new SplitText(
      jumpPhrase
      , { type: 'chars' }).chars;

    console.log(splitTextJumpPhrase.chars);
    let tl = new TimelineMax();

    tl
      .to(splitTextJumpPhrase.chars, 
        .25, {
          y:-30,
          rotation: "360",
          color: '#5b398c',
          fontWeight: 800,
          ease:Power4.easeInOut
        }
      )
      .to(splitTextJumpPhrase.chars,
        .5, {
          clearProps: 'rotation',
          fontWeight: 400,
          y:0, 
          x:0,
          color: '#757575',
          ease:Power1.easeInOut
        }
      )
  }
//   element.addEventListener('mouseover', onMouseOver);
    // element.addEventListener('mouseover', onMouseOverProto);
    // function onMouseOverProto() {

    // }
    
//   function onMouseOver( animation ) {
//       let aniTarget = animation.target;
//       if(aniTarget.tagName.toLowerCase() === 'span') {
//           const tl = new TimelineMax();
          
//           tl
//           .to(aniTarget, .25, {
//               y:-30,
//               rotation: "360",
//               color: '#5b398c',
//               fontWeight: 800,
//               ease:Power4.easeInOut,

//           })
//           .to(aniTarget, .5, {
//               clearProps: 'rotation',
//               fontWeight: 400,
//               y:0, 
//               x:0,
//               color: '#757575',
//               ease:Power1.easeInOut});
//       }
//     }
}