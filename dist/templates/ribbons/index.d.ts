import { createRibbonType1 } from "./RibbonType1";
import { createRibbonType2 } from "./RibbonType2";
import { createRibbonType4 } from "./RibbonType4";
import { createRibbonType5 } from "./RibbonType5";
import { createRibbonType6 } from "./RibbonType6";
import { createRibbonType7 } from "./RibbonType7";
import { createRibbonWing1 } from "./RibbonWing1";
import { createRibbonWing2 } from "./RibbonWing2";
declare const Ribbons: {
    RibbonType1: typeof createRibbonType1;
    RibbonType2: typeof createRibbonType2;
    RibbonType4: typeof createRibbonType4;
    RibbonType5: typeof createRibbonType5;
    RibbonType6: typeof createRibbonType6;
    RibbonType7: typeof createRibbonType7;
    RibbonWing1: typeof createRibbonWing1;
    RibbonWing2: typeof createRibbonWing2;
};
export default Ribbons;
