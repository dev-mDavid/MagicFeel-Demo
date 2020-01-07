export function aboveTheFold() {
  const aboveTheFoldIterationNum = '004';
  console.log('aboveTheFold' + aboveTheFoldIterationNum);

  // Start Phase
    // hideBackground
    function startPhase() {
      document.getElementById('magic-feel-opener').style.backgroundColor = 'white';
      document.getElementsByTagName('h3')[0].style.color = '#1c1c1c';
      document.getElementsByClassName('Header-tagline')[0].style.color = '#4287f5';
    }
    startPhase()

    // Hidden Title
    function navTitle() {
    var tl = new TimelineMax(); // Time Line
    // Variables
    var $navTitle = '.Header-branding';
    var $STnavTitle = new SplitText(
      $navTitle, {
      type: 'chars',
    });

    var $titleLength = 1.3;
    var $charsLength = $titleLength / ($titleLength * 50);
    // Set

    // Animation
    tl
      .staggerFrom($STnavTitle.chars,
        $titleLength, {
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
        $charsLength,
        '+=0',
        onComplete
      );

    function onComplete() {
      $STnavTitle.revert();
    }
    ; return (tl)
  // Title Reveal
  // Subtitle Wave Motion

  // Header Change
  // Video Reveal Background
  // Title Color Change


  // Master Timeline
    const master = new TimelineMax();

    master

    console.log("aboveTheFoldTimeLineDuration: " + master.duration())


}