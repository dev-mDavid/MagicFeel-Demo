import { arrayAnimator } from "../../helper services/arrayAnimator/arrayAnimator001";

export function onScroll() {
  const onScrollIterationNum = '003';
  console.log('onScroll' + onScrollIterationNum);


  

  // All targets
    const
      h1 = 'h1',
      h2 = 'h2',
      h3 = 'h3',
      p = 'p',
      hr = 'sqs-block-horizontalrule',
      icon = 'sci-icon',
      buttonSmall = 'sqs-block-button-element--small',
      galleryImg = 'sqs-gallery-design-grid-slide'

    ;
  
  // Fade In
    const fadeInTargets = [
      h1,
      h2,
      h3,
      p,
    ];
    const fadeInAni = {
      opacity: 0,
      y: 25,
      scale: 0.925,
      ease: Power1.easeOut,
      clearProps: 'opacity'
    };

  // Spin In
    const spinInTargets = [
      icon
    ]
    const spinInAni = {
      opacity: 0,
      scale: 0,
      rotation: "360_ccw",
      clearProps: 'opacity'
    }

  // From Center to Out
    const fromCenterToOutTargets = [
      buttonSmall,
      hr,

    ];
    const fromCenterToOutAni = {
      scale: 0,
    }
  // From Bottom?
    const fromBottom = [
      galleryImg
    ]
    const fromBottomAni = {
     x: -200 
    }

  arrayAnimator(fadeInTargets, fadeInAni);
  arrayAnimator(spinInTargets, spinInAni);
  arrayAnimator(fromCenterToOutTargets, fromCenterToOutAni);
  arrayAnimator(fromBottom, fromBottomAni);

}