import { aboveTheFold } from "../../../codeBase/animation/above the fold/aboveTheFold006";
import { onScroll } from "../../../codeBase/animation/on scroll/onScroll003";
import { textJump } from "../../../codeBase/animation/mouse reactive/text jump/textJump004";
import { textSwoop } from "../../../codeBase/animation/mouse reactive/text swoop/textSwoop002";

export function buildThis() {
    aboveTheFold()
    onScroll();
    textJump();
    textSwoop();
};