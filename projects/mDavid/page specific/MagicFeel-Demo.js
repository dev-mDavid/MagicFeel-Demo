
// import { divsFadeIn } from "../../../codeBase/animation/on scroll/divsFadeIn/divsFadeIn001";
import { onScroll } from "../../../codeBase/animation/on scroll/onScroll001";

export function buildThis() {

  // divsFadeIn();
  onScroll();

//Module Finder
  const modulesUsed = [
    'onScroll001'
  ];

  console.log("Modules used: ");
  modulesUsed.forEach(element => console.log("  " + element));

};