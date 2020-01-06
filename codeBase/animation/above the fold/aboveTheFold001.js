export function aboveTheFold() {
  const aboveTheFoldIterationNum = '001';
  console.log('aboveTheFold' + aboveTheFoldIterationNum);

  function navTitle() {
    var tl = new TimelineMax(); // Time Line
    // Variables
    var navTitle = '.Header-branding';
    var splitTextNavTitle = new SplitText(
      navTitle, {
      type: 'chars',
    });

    var titleLength = 1.3;
    var charsLength = titleLength / (titleLength * 50);
    // Set

    // Animation
    tl
      .staggerFrom(splitTextNavTitle.chars,
        titleLength, {
        // opacity: 0,
        // y: 100,

        y: -10,
        x: -5,
        // rotationX: 180,
        // rotationY: -120,
        // x: -25,
        // perspective: 400,
        // y: 100,
        // transformOrigin: '0% 60% -60%',
        ease: Back.easeInOut
      },
        charsLength,
        '+=0',
        onComplete
      );

    function onComplete() {
      splitTextNavTitle.revert();
    }
    ; return (tl)
  }
 
  // Master Timeline
  var master = new TimelineMax();

  master
    .add(navTitle().duration(2))
    .add('navTitle')
    

  console.log("aboveTheFoldTimeLineDuration: " + master.duration())


}