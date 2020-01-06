export function navLinksPrimary() {
  const navLinksPrimaryIterationNum = '001';
  console.log('navLinksPrimary' + navLinksPrimaryIterationNum);

  const tl = new TimelineMax(); // Time Line
  // Variables
  const primaryNavLinks = document
    .getElementsByClassName('Header-nav--primary')[0]
    .getElementsByTagName('a')
  // .getElementsByClassName('Header-nav-item')

  // var $navLinks1List = Array.from(document.getElementsByClassName('Header-nav--primary')[0].getElementsByClassName('Header-nav-item'));

  // Set

  // Animation
  tl
    .staggerFrom(
      primaryNavLinks,
      // $navLinks1List,
      // '.Header-nav-item',
      2, {
      x: -10,
      opacity: 0,
      scale: .9,
      y: 10,
      ease: Back.easeOut,
    },
      .5
    );
  return (tl)
}