import { arrayOf } from "../../helper services/arrayOf/arrayOf002";

export function footer(){
  const footerIterationNum = '001';
  console.log('footer' + footerIterationNum);

  // footer  set up
    function footerSetUp() {
      const footer = document.getElementsByTagName('footer')[0];
      footer.style.backgroundColor = 'none';
      footer.style.background = 'rgb(0, 0, 0)';
      footer.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 32%, rgba(91,57,140,1) 98%)';        
    }
    footerSetUp();

  // event trigger
    function footerSequence() {
      let tl = new TimelineMax();

      
      const firstFooterNavHeader = document.getElementsByClassName('Footer-nav-folder-heading')[0];
      firstFooterNavHeader.style.opacity = 0;

      let footerNavHeaders = arrayOf('Footer-nav-folder-heading', 'class');
      footerNavHeaders.shift();
      const remainingFooterNavHeaders = footerNavHeaders;

      
      tl
        .to(firstFooterNavHeader, 2, {
          opacity: 1,
        })

        .staggerFrom(remainingFooterNavHeaders, .25, {
          opacity: 0,
          y: -100,
        },
        .25,
        '-=1'
        )
        
      //* reveal first footerNavHeader — word fade in from behind
      //* reveal remaining footerNavHeaders — spread from behind first footerNavHeader
      //* footerNavHeaders wave jump spread revealing the footerNavLinks
    }
    footerSequence();

    // bottom of the window
    // 75% of the footer (from the bottom)

  // simple reveal animation

  // button movement

  // reset trigger
    // bottom of the window

}