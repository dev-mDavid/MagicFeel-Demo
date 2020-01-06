export function onScroll(){

const siteInner = document.getElementsByClassName('Site-inner')[0];
 const  
  h1 = Array.from(document.getElementsByTagName('h1')),
  h2 = Array.from(document.getElementsByTagName('h2')),
  h3 = Array.from(document.getElementsByTagName('h3')),
  p = Array.from(siteInner.getElementsByTagName('p')),
  hr = Array.from(document.getElementsByClassName('sqs-block-horizontalrule'));

  const targetsArray = [
    h1, 
    h2,
    h3,
    p,
    hr
  ]

targetsArray.forEach(target => {

  const animationTween = TweenMax.from(
    target, 2, {
      opacity: 0,
      y: 25,
      scale: 0.925,
      ease: Power1.easeOut,
      clearProps: 'opacity'
    }
  )  

  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '50%'
  })
    .setTween(animationTween)
    .triggerElement(target)
    .addTo(controller)

});


  

  
}