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