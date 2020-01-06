export function navTitle() {
  const navTitleItrationNum = '001';
  console.log('navtitle' + navTitleItrationNum);
    const tl = new TimelineMax(); // Time Line
    // Variables
    const navTitle = '.Header-branding';
    const splitTextNavTitle = new SplitText(
      navTitle, {
      type: 'chars',
    });

    const titleLength = 1.3;
    const charsLength = titleLength / (titleLength * 50);
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