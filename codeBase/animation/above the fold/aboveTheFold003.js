import { navTitle } from "./navTitle/navTitle001";
import { navLinksPrimary } from "./navLinks/navLinksPrimary/navLinksPrimary001";

export function aboveTheFold() {
  const aboveTheFoldIterationNum = '003';
  console.log('aboveTheFold' + aboveTheFoldIterationNum);
 
  // Master Timeline
    const master = new TimelineMax();

    master
      .add(navTitle().duration(2))
      .add('navTitle')
      
      .add(navLinksPrimary().duration(2.5), 'navTitle-=.5')
      .add('navLinks1')


    console.log("aboveTheFoldTimeLineDuration: " + master.duration())


}