"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconTemplates = exports.ribbonTemplates = exports.badgeTemplates = void 0;
const badges_1 = __importDefault(require("./badges"));
const ribbons_1 = __importDefault(require("./ribbons"));
exports.badgeTemplates = [
    {
        id: "BadgeType7",
        Component: badges_1.default.BadgeType7,
        colors: {
            mainColor: "#FF1B64",
            subColor: "#FF91B2",
        },
    },
];
exports.ribbonTemplates = [
    {
        id: "RibbonType1",
        Component: ribbons_1.default.RibbonType1,
        colors: {
            mainColor: "#364FC7",
            subColor: "#8FA2FF",
        },
    },
    {
        id: "RibbonType2",
        Component: ribbons_1.default.RibbonType2,
        colors: {
            mainColor: "#1C2A54",
            subColor: "#09B3EA",
        },
    },
    {
        id: "RibbonType4",
        Component: ribbons_1.default.RibbonType4,
        colors: {
            mainColor: "#8266FB",
            subColor: "#AA96FF",
        },
    },
    {
        id: "RibbonType5",
        Component: ribbons_1.default.RibbonType5,
        colors: {
            mainColor: "#8FA3FF",
            subColor: "#364FC7",
        },
    },
    {
        id: "RibbonType6",
        Component: ribbons_1.default.RibbonType6,
        colors: {
            mainColor: "#2091F8",
            subColor: "#46DEFF",
        },
    },
    {
        id: "RibbonType7",
        Component: ribbons_1.default.RibbonType7,
        colors: {
            mainColor: "#FF1B64",
            subColor: "#FF91B2",
        },
    },
    // {
    //   id: "RibbonType7_1",
    //   Component: Ribbons.RibbonType7_1,
    //   colors: {
    //     mainColor: "#FF1B64",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType8",
    //   Component: Ribbons.RibbonType8,
    //   colors: {
    //     mainColor: "#FA2E43",
    //     subColor: "#FF7A41",
    //   },
    // },
    // {
    //   id: "RibbonType12",
    //   Component: Ribbons.RibbonType12,
    //   colors: {
    //     mainColor: "#FF674E",
    //     subColor: "#FF9A67",
    //   },
    // },
    // {
    //   id: "RibbonType13",
    //   Component: Ribbons.RibbonType13,
    //   colors: {
    //     mainColor: "#7B38CA",
    //     subColor: "#34098B",
    //     extraColor1: "#691BC2",
    //   },
    // },
    // {
    //   id: "RibbonType13_1",
    //   Component: Ribbons.RibbonType13_1,
    //   colors: {
    //     mainColor: "#691BC2",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType18",
    //   Component: Ribbons.RibbonType18,
    //   colors: {
    //     mainColor: "#00BF7D",
    //     subColor: "#00713C",
    //   },
    // },
    // {
    //   id: "RibbonType18_1",
    //   Component: Ribbons.RibbonType18_1,
    //   colors: {
    //     mainColor: "#00BF7D",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType19",
    //   Component: Ribbons.RibbonType19,
    //   colors: {
    //     mainColor: "#FF1B64",
    //     subColor: "#FFB3CA",
    //   },
    // },
    // {
    //   id: "RibbonType19_1",
    //   Component: Ribbons.RibbonType19_1,
    //   colors: {
    //     mainColor: "#FF1B64",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType21",
    //   Component: Ribbons.RibbonType21,
    //   colors: {
    //     mainColor: "#00BF7D",
    //     subColor: "#01723D",
    //   },
    // },
    // {
    //   id: "RibbonType22",
    //   Component: Ribbons.RibbonType22,
    //   colors: {
    //     mainColor: "#6125FF",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType23",
    //   Component: Ribbons.RibbonType23,
    //   colors: {
    //     mainColor: "#FA2E43",
    //     subColor: "#FF7A41",
    //   },
    // },
    // {
    //   id: "RibbonType23_1",
    //   Component: Ribbons.RibbonType23_1,
    //   colors: {
    //     mainColor: "#FA2E43",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType24",
    //   Component: Ribbons.RibbonType24,
    //   colors: {
    //     mainColor: "#4386FC",
    //     subColor: "#1BB5FF",
    //   },
    // },
    // {
    //   id: "RibbonType24_1",
    //   Component: Ribbons.RibbonType24_1,
    //   colors: {
    //     mainColor: "#4386FC",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType26",
    //   Component: Ribbons.RibbonType26,
    //   colors: {
    //     mainColor: "#04714A",
    //     subColor: "#12A35E",
    //   },
    // },
    // {
    //   id: "RibbonType27",
    //   Component: Ribbons.RibbonType27,
    //   colors: {
    //     mainColor: "#2091F8",
    //     subColor: "#84E9FF",
    //   },
    // },
    // {
    //   id: "RibbonType27_1",
    //   Component: Ribbons.RibbonType27_1,
    //   colors: {
    //     mainColor: "#2091F8",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType34",
    //   Component: Ribbons.RibbonType34,
    //   colors: {
    //     mainColor: "#FA2E43",
    //     subColor: "#FF7942",
    //   },
    // },
    // {
    //   id: "RibbonType35",
    //   Component: Ribbons.RibbonType35,
    //   colors: {
    //     mainColor: "#2091F8",
    //     subColor: "#84E9FF",
    //   },
    // },
    // {
    //   id: "RibbonType35_1",
    //   Component: Ribbons.RibbonType35_1,
    //   colors: {
    //     mainColor: "#2091F8",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType45",
    //   Component: Ribbons.RibbonType45,
    //   colors: {
    //     mainColor: "#FA2E43",
    //     subColor: "#FF613F",
    //   },
    // },
    // {
    //   id: "RibbonType46",
    //   Component: Ribbons.RibbonType46,
    //   colors: {
    //     mainColor: "#970917",
    //     subColor: "#D07C5A",
    //   },
    // },
    // {
    //   id: "RibbonType53",
    //   Component: Ribbons.RibbonType53,
    //   colors: {
    //     mainColor: "#002333",
    //     // subColor: "#AA96FF",
    //   },
    // },
    // {
    //   id: "RibbonType57",
    //   Component: Ribbons.RibbonType57,
    //   colors: {
    //     mainColor: "#1E93FF",
    //     subColor: "white",
    //   },
    // },
    // {
    //   id: "RibbonType61",
    //   Component: Ribbons.RibbonType61,
    //   colors: {
    //     mainColor: "#1B85FF",
    //     subColor: "#6AAFFF",
    //   },
    // },
    // // 윙 타입 추가
    // {
    //   id: "RibbonWing1",
    //   Component: Ribbons.RibbonWing1,
    //   colors: {
    //     mainColor: "#FF9A67",
    //   },
    // },
    // {
    //   id: "RibbonWing2",
    //   Component: Ribbons.RibbonWing2,
    //   colors: {
    //     mainColor: "#E1BAFF",
    //   },
    // },
    // {
    //   id: "RibbonWing3",
    //   Component: Ribbons.RibbonWing3,
    //   colors: {
    //     mainColor: "#E9E0FB",
    //   },
    // },
    // {
    //   id: "RibbonWing4",
    //   Component: Ribbons.RibbonWing4,
    //   colors: {
    //     mainColor: "#000000",
    //   },
    // },
    // {
    //   id: "RibbonWing5",
    //   Component: Ribbons.RibbonWing5,
    //   colors: {
    //     mainColor: "#ffffff",
    //   },
    // },
    // {
    //   id: "RibbonWing6",
    //   Component: Ribbons.RibbonWing6,
    //   colors: {
    //     mainColor: "#94896B",
    //     // subColor: "#09B3EA",
    //   },
    // },
    // {
    //   id: "RibbonWing7",
    //   Component: Ribbons.RibbonWing7,
    //   colors: {
    //     mainColor: "#5C4BCD",
    //     // subColor: "#09B3EA",
    //   },
    // },
    // {
    //   id: "RibbonWing8",
    //   Component: Ribbons.RibbonWing8,
    //   colors: {
    //     mainColor: "#E1D1A1",
    //     // subColor: "#09B3EA",
    //   },
    // },
    // {
    //   id: "RibbonWing9",
    //   Component: Ribbons.RibbonWing9,
    //   colors: {
    //     mainColor: "#FA2E43",
    //   },
    // },
    // {
    //   id: "RibbonWing10",
    //   Component: Ribbons.RibbonWing10,
    //   colors: {
    //     mainColor: "#2091F8",
    //   },
    // },
    // {
    //   id: "RibbonWing11",
    //   Component: Ribbons.RibbonWing11,
    //   colors: {
    //     mainColor: "#000000",
    //   },
    // },
    // {
    //   id: "RibbonWing12",
    //   Component: Ribbons.RibbonWing12,
    //   colors: {
    //     mainColor: "#FF7C32",
    //     // subColor: "#09B3EA",
    //   },
    // },
];
exports.IconTemplates = [
// customIcon
];
