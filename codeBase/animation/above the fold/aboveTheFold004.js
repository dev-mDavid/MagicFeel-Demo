// export function aboveTheFold() {
  // const aboveTheFoldIterationNum = '004';
  // console.log('aboveTheFold' + aboveTheFoldIterationNum);

  // Start Phase
    // hideBackground
      function startPhase() {
        var tl = new TimelineMax()
        document.getElementById('magic-feel-opener').style.backgroundColor = 'white';
        // document.getElementsByTagName('h1')[0].style.opacity = 0;
        document.getElementsByTagName('h1')[0].style.color = '#1c1c1c';
        document.getElementsByTagName('h3')[0].style.color = '#1c1c1c';
        document.getElementsByClassName('Header-tagline')[0].style.color = '#4287f5';
        return (tl)
      }

  // Title Reveal
      function titleReveal() {
        var tl = new TimelineMax()
        // Variables
        var title = document.getElementsByTagName('h1')[0];
        var splitTextTitle = new SplitText(
          title, {
          type: 'chars',
        });

        var titleLength = 2;
        var charsLength = titleLength / (titleLength * 5);
        // Set

        // Animation
        tl
          .staggerFrom(splitTextTitle.chars,
            titleLength, {
            opacity: 0,
            // y: 100,

            // y: -10,
            // x: -5,
            // rotationX: 180,
            // rotationY: 120,
            // x: -25,
            perspective: 400,
            scaleY: 0.8,
            scaleX: 0.8,
            // y: 100,
            // transformOrigin: '0% 75% 0%',
            // ease: Back.easeInOut
          },
            charsLength,
            '+=0',
            onComplete
          );

        function onComplete() {
          splitTextTitle.revert();
        }
        ; return (tl)
      }
      
  // Subtitle Wave Motion
      var subtitle = document.getElementsByTagName('h3')[0];
      var splitTextSubtitle = new SplitText(
        subtitle, {
        type: 'chars',
      });

      function subtitleSnap() {
        var tl = new TimelineMax()
        // Variables  

        var subtitleLength = .5;
        var charsLength = subtitleLength / (subtitleLength * 45);
        // Set

        // Animation
        tl
          .staggerTo(splitTextSubtitle.chars,
            subtitleLength, {
            // opacity: 1,
            // y: 100,

            // y: -10,
            // x: -5,
            rotationX: -360,
            // rotationY: 45,
            // x: -25,
            perspective: 400,
            // y: 100,
            transformOrigin: '0% -60% -20%',
            ease: "back.in"
            // ease: "elastic.inOut(1, 0.3)"
          },
            charsLength,
            '+=0',
            onComplete
          );

        function onComplete() {
          splitTextSubtitle.revert();
        }
        ; return (tl)
      }

    function snapChange() {
      // Variables
      var tl = new TimelineMax(); // Time Line
      // document.getElementById('magic-feel-opener').style.backgroundColor = 'black';
      var title = document.getElementsByTagName('h1')[0];
      var subtitle = document.getElementsByTagName('h3')[0];
      // var header = document.getElementsByClassName()[0];
      tl
        .to('.Header--top', 0.01, { background: 'rgb(41,13,65)', background: 'radial-gradient(circle, rgba(41,13,65,1) 0%, rgba(123,8,170,1) 100%)' })
        .to('#magic-feel-opener', 0.02, {backgroundColor: 'transparent'})
        .to(title, 0.03, {color: 'white'})
        .to(subtitle, 0.04, {color: 'white'})
        .to('.Header-tagline', 0.05, {color: 'white'})
        
        

      // Set Up

      // Animation

      ; return (tl)
        }
  // Header Change
  // Video Reveal Background
  // Title Color Change


  // Master Timeline
    var master = new TimelineMax();

    master
      .add(startPhase())
      .add('startPhase')

      .add(titleReveal().duration(3), 'startPhase+=1.5')
      .add('titleReveal')

      .add(subtitleSnap().duration(2),'titleReveal-=0')
      .add('subtitleSnap')

      .add(snapChange(),'subtitleSnap-=0.35')
    console.log("aboveTheFoldTimeLineDuration: " + master.duration())


// }