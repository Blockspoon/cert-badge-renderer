"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RibbonType1_1 = require("./RibbonType1");
const RibbonType7_1 = require("./RibbonType7");
// RibbonWing Type
// import { createRibbonWing1 } from "./RibbonWing1";
// import { createRibbonWing2 } from "./RibbonWing2";
const Ribbons = {
    RibbonType1: RibbonType1_1.createRibbonType1,
    RibbonType7: RibbonType7_1.createRibbonType7,
    // RibbonWing Type
    // RibbonWing1: createRibbonWing1,
    // RibbonWing2: createRibbonWing2,
};
exports.default = Ribbons;
