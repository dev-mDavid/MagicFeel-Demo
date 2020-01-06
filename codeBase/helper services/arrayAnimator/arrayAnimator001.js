
export function arrayAnimator(array, animation, duration = '50%', offset = .5) {
  const arrayAnimatorIterationNum = '001';
  console.log('arrayAnimator' + arrayAnimatorIterationNum);

    var arrayOfArrays = [];

    for (var i = 0; i < array.length; i++) {

      var tags = [
        'h1',
        'h2',
        'h3',
        'p'
      ];

      if (tags.includes(array[i])
      ) {
        arrayOfArrays.push(
          Array.from(
            document.getElementsByClassName('Site-inner')[0].getElementsByTagName(array[i])
          )
        );

      } else {
        arrayOfArrays.push(
          Array.from(
            document.getElementsByClassName(array[i])
          )
        );
      }
    }

    // input in a list            
    var flatArray = arrayOfArrays.flat();

    // input an animation
    for (var i = 0; i < flatArray.length; i++) {

      // filters to only targets that are Below the Fold
      if (flatArray[i].getBoundingClientRect().top > window.innerHeight) {

        // turns each object in array into a target
        var eachTarget = flatArray[i];

        // animation config
        var $animationTween = TweenMax.from(
          eachTarget, 2, animation
        )
      }

      // animation into scroll magic
      var controller = new ScrollMagic.Controller();

      new ScrollMagic.Scene({
        duration: duration
      })
        .setTween($animationTween)
        .triggerElement(eachTarget)
        .offset(-(window.innerHeight * offset))
        // .addIndicators()
        .addTo(controller)
    }
}