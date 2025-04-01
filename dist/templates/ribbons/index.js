"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RibbonType1_1 = require("./RibbonType1");
const RibbonType2_1 = require("./RibbonType2");
const RibbonType4_1 = require("./RibbonType4");
const RibbonType5_1 = require("./RibbonType5");
const RibbonType6_1 = require("./RibbonType6");
const RibbonType7_1_1 = require("./RibbonType7_1");
const RibbonType7_2 = require("./RibbonType7");
const RibbonType8_1 = require("./RibbonType8");
const RibbonType12_1 = require("./RibbonType12");
const RibbonType13_1_1 = require("./RibbonType13_1");
const RibbonType13_2 = require("./RibbonType13");
const RibbonType18_1_1 = require("./RibbonType18_1");
const RibbonType18_2 = require("./RibbonType18");
const RibbonType19_1_1 = require("./RibbonType19_1");
const RibbonType19_2 = require("./RibbonType19");
const RibbonType21_1 = require("./RibbonType21");
const RibbonType22_1 = require("./RibbonType22");
const RibbonType23_2 = require("./RibbonType23");
const RibbonType23_1_1 = require("./RibbonType23_1");
const RibbonType24_2 = require("./RibbonType24");
const RibbonType24_1_1 = require("./RibbonType24_1");
const RibbonType26_1 = require("./RibbonType26");
const RibbonType27_2 = require("./RibbonType27");
const RibbonType27_1_1 = require("./RibbonType27_1");
const RibbonType34_1 = require("./RibbonType34");
const RibbonType35_1_1 = require("./RibbonType35_1");
const RibbonType35_2 = require("./RibbonType35");
const RibbonType45_1 = require("./RibbonType45");
const RibbonType46_1 = require("./RibbonType46");
const RibbonType53_1 = require("./RibbonType53");
const RibbonType57_1 = require("./RibbonType57");
const RibbonType61_1 = require("./RibbonType61");
const RibbonWing1_1 = require("./RibbonWing1");
const RibbonWing2_1 = require("./RibbonWing2");
const RibbonWing3_1 = require("./RibbonWing3");
const RibbonWing4_1 = require("./RibbonWing4");
const RibbonWing5_1 = require("./RibbonWing5");
const RibbonWing6_1 = require("./RibbonWing6");
const RibbonWing7_1 = require("./RibbonWing7");
const RibbonWing8_1 = require("./RibbonWing8");
const RibbonWing9_1 = require("./RibbonWing9");
const RibbonWing10_1 = require("./RibbonWing10");
const RibbonWing11_1 = require("./RibbonWing11");
const RibbonWing12_1 = require("./RibbonWing12");
const RibbonWing14_1 = require("./RibbonWing14");
const Ribbons = {
    // RibbonType Type
    RibbonType1: RibbonType1_1.createRibbonType1,
    RibbonType2: RibbonType2_1.createRibbonType2,
    RibbonType4: RibbonType4_1.createRibbonType4,
    RibbonType5: RibbonType5_1.createRibbonType5,
    RibbonType6: RibbonType6_1.createRibbonType6,
    RibbonType7_1: RibbonType7_1_1.createRibbonType7_1,
    RibbonType7: RibbonType7_2.createRibbonType7,
    RibbonType8: RibbonType8_1.createRibbonType8,
    RibbonType12: RibbonType12_1.createRibbonType12,
    RibbonType13_1: RibbonType13_1_1.createRibbonType13_1,
    RibbonType13: RibbonType13_2.createRibbonType13,
    RibbonType18_1: RibbonType18_1_1.createRibbonType18_1,
    RibbonType18: RibbonType18_2.createRibbonType18,
    RibbonType19_1: RibbonType19_1_1.createRibbonType19_1,
    RibbonType19: RibbonType19_2.createRibbonType19,
    RibbonType21: RibbonType21_1.createRibbonType21,
    RibbonType22: RibbonType22_1.createRibbonType22,
    RibbonType23: RibbonType23_2.createRibbonType23,
    RibbonType23_1: RibbonType23_1_1.createRibbonType23_1,
    RibbonType24_1: RibbonType24_1_1.createRibbonType24_1,
    RibbonType24: RibbonType24_2.createRibbonType24,
    RibbonType26: RibbonType26_1.createRibbonType26,
    RibbonType27_1: RibbonType27_1_1.createRibbonType27_1,
    RibbonType27: RibbonType27_2.createRibbonType27,
    RibbonType34: RibbonType34_1.createRibbonType34,
    RibbonType35_1: RibbonType35_1_1.createRibbonType35_1,
    RibbonType35: RibbonType35_2.createRibbonType35,
    RibbonType45: RibbonType45_1.createRibbonType45,
    RibbonType46: RibbonType46_1.createRibbonType46,
    RibbonType53: RibbonType53_1.createRibbonType53,
    RibbonType57: RibbonType57_1.createRibbonType57,
    RibbonType61: RibbonType61_1.createRibbonType61,
    // RibbonWing Type
    RibbonWing1: RibbonWing1_1.createRibbonWing1,
    RibbonWing2: RibbonWing2_1.createRibbonWing2,
    RibbonWing3: RibbonWing3_1.createRibbonWing3,
    RibbonWing4: RibbonWing4_1.createRibbonWing4,
    RibbonWing5: RibbonWing5_1.createRibbonWing5,
    RibbonWing6: RibbonWing6_1.createRibbonWing6,
    RibbonWing7: RibbonWing7_1.createRibbonWing7,
    RibbonWing8: RibbonWing8_1.createRibbonWing8,
    RibbonWing9: RibbonWing9_1.createRibbonWing9,
    RibbonWing10: RibbonWing10_1.createRibbonWing10,
    RibbonWing11: RibbonWing11_1.createRibbonWing11,
    RibbonWing12: RibbonWing12_1.createRibbonWing12,
    RibbonWing14: RibbonWing14_1.createRibbonWing14,
};
exports.default = Ribbons;
