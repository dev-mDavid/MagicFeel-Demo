import { arrayAnimator } from "../../helper services/arrayAnimator/arrayAnimator001";

export function onScroll() {
  const onScrollIterationNum = '003';
  console.log('onScroll' + onScrollIterationNum);

  const
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    p = 'p',
    hr = 'sqs-block-horizontalrule'
  ;

  const targetsArray = [
    h1,
    h2,
    h3,
    p,
    hr
  ];

  const fadeInAni = {
    opacity: 0,
    y: 25,
    scale: 0.925,
    ease: Power1.easeOut,
    clearProps: 'opacity'
  };

  arrayAnimator(targetsArray, fadeInAni);

}