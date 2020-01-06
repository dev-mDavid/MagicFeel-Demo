import { navTitle } from "./navTitle/navTitle001";

export function aboveTheFold() {
  const aboveTheFoldIterationNum = '002';
  console.log('aboveTheFold' + aboveTheFoldIterationNum);
 
  // Master Timeline
  var master = new TimelineMax();

  master
    .add(navTitle().duration(2))
    .add('navTitle')
    

  console.log("aboveTheFoldTimeLineDuration: " + master.duration())


}