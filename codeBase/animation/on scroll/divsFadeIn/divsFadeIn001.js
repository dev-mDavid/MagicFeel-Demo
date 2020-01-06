export function divsFadeIn() {
  
  const hr = Array.from(document.getElementsByClassName('sqs-block-horizontalrule'));

  TweenMax.from(
    hr, 2, {
      opacity: 0,
      delay: 2,
      y: 25,
      scale: 0.925,
      ease: Power1.easeOut,
      // clearProps: 'opacity'
  }
  );
}