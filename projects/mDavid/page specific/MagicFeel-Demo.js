import { afterDOMHasLoaded } from "../../../codeBase/helper services/afterDOMHasLoaded/afterDOMHasLoaded001";
import { aboveTheFold } from "../../../codeBase/animation/above the fold/aboveTheFold005";
// import { onScroll } from "../../../codeBase/animation/on scroll/onScroll002";
export function buildThis() {
  afterDOMHasLoaded(
    aboveTheFold()
    // onScroll();
  );

};