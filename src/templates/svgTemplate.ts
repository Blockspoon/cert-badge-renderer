import Badges from "./badges";
import Ribbons from "./ribbons";
import Icons from "./icons";
import Backgrounds from "./backgrounds";

export interface templateType {
  id: string;
  Component: (props: any) => string | HTMLElement;
  colors?: any;
}

export const backgroundTemplates: templateType[] = [
  { id: "BackgroundEmptyHatch", Component: Backgrounds.BackgroundEmptyHatch, },
  { id: "BackgroundEmptyHorizontal", Component: Backgrounds.BackgroundEmptyHorizontal, },
  { id: "BackgroundEmptyVertical", Component: Backgrounds.BackgroundEmptyVertical, },
  { id: "BackgroundEmptyWave", Component: Backgrounds.BackgroundEmptyWave },
  { id: "BackgroundType1", Component: Backgrounds.BackgroundType1 },
  { id: "BackgroundType2", Component: Backgrounds.BackgroundType2 },
  { id: "BackgroundType2Single", Component: Backgrounds.BackgroundType2Single },
  { id: "BackgroundType3", Component: Backgrounds.BackgroundType3 },
  { id: "BackgroundType3Single", Component: Backgrounds.BackgroundType3Single },
  { id: "BackgroundType4", Component: Backgrounds.BackgroundType4 },
  { id: "BackgroundType4Single", Component: Backgrounds.BackgroundType4Single },
  { id: "BackgroundType5", Component: Backgrounds.BackgroundType5 },
  { id: "BackgroundType5Single", Component: Backgrounds.BackgroundType5Single },
  { id: "BackgroundType6", Component: Backgrounds.BackgroundType6 },
  { id: "BackgroundType6Single", Component: Backgrounds.BackgroundType6Single },
  { id: "BackgroundType7", Component: Backgrounds.BackgroundType7 },
  { id: "BackgroundType7Single", Component: Backgrounds.BackgroundType7Single },
  { id: "BackgroundType8", Component: Backgrounds.BackgroundType8 },
  { id: "BackgroundType8Single", Component: Backgrounds.BackgroundType8Single },
  { id: "BackgroundType9", Component: Backgrounds.BackgroundType9 },
  { id: "BackgroundType11", Component: Backgrounds.BackgroundType11 },
  { id: "BackgroundType13", Component: Backgrounds.BackgroundType13 },
  { id: "BackgroundType14", Component: Backgrounds.BackgroundType14 },
  { id: "BackgroundType15", Component: Backgrounds.BackgroundType15 },
  { id: "BackgroundType16", Component: Backgrounds.BackgroundType16 },
  { id: "BackgroundType17", Component: Backgrounds.BackgroundType17 },
  { id: "BackgroundType18", Component: Backgrounds.BackgroundType18 },
  { id: "BackgroundType20", Component: Backgrounds.BackgroundType20 },
  { id: "BackgroundType21", Component: Backgrounds.BackgroundType21 },
  { id: "BackgroundType25", Component: Backgrounds.BackgroundType25 },
  { id: "BackgroundType26", Component: Backgrounds.BackgroundType26 },
  { id: "BackgroundType28", Component: Backgrounds.BackgroundType28 },
  { id: "BackgroundType29", Component: Backgrounds.BackgroundType29 },
  { id: "BackgroundType30", Component: Backgrounds.BackgroundType30 },
  { id: "BackgroundType31", Component: Backgrounds.BackgroundType31 },
  { id: "BackgroundType33", Component: Backgrounds.BackgroundType33 },
  { id: "BackgroundType34", Component: Backgrounds.BackgroundType34 },
];

export const badgeTemplates: templateType[] = [
  {
    id: "BadgeType1",
    Component: Badges.BadgeType1,
  },
  {
    id: "BadgeType2",
    Component: Badges.BadgeType2,
  },
  {
    id: "BadgeType3",
    Component: Badges.BadgeType3,
  },
  {
    id: "BadgeType4",
    Component: Badges.BadgeType4,
  },
  {
    id: "BadgeType5",
    Component: Badges.BadgeType5,
  },
  {
    id: "BadgeType6",
    Component: Badges.BadgeType6,
  },
  {
    id: "BadgeType7",
    Component: Badges.BadgeType7,
  },
  {
    id: "BadgeType8",
    Component: Badges.BadgeType8,
  },
  {
    id: "BadgeType9",
    Component: Badges.BadgeType9,
  },
  {
    id: "BadgeType10",
    Component: Badges.BadgeType10,
  },
  {
    id: "BadgeType11",
    Component: Badges.BadgeType11,
  },
  {
    id: "BadgeType12",
    Component: Badges.BadgeType12,
  },
  {
    id: "BadgeType13",
    Component: Badges.BadgeType13,
  },
  {
    id: "BadgeType14",
    Component: Badges.BadgeType14,
  },
  // {
  //   id: "BadgeType15",
  //   Component: Badges.BadgeType15,
  // },
  {
    id: "BadgeType16",
    Component: Badges.BadgeType16,
  },
  {
    id: "BadgeType17",
    Component: Badges.BadgeType17,
  },
  {
    id: "BadgeType18",
    Component: Badges.BadgeType18,
  },
  {
    id: "BadgeType19",
    Component: Badges.BadgeType19,
  },
  {
    id: "BadgeType20",
    Component: Badges.BadgeType20,
  },
  // {
  //   id: "BadgeType21",
  //   Component: Badges.BadgeType21,
  // },
  {
    id: "BadgeType22",
    Component: Badges.BadgeType22,
  },
  {
    id: "BadgeType23",
    Component: Badges.BadgeType23,
  },
  {
    id: "BadgeType24",
    Component: Badges.BadgeType24,
  },
  {
    id: "BadgeType25",
    Component: Badges.BadgeType25,
  },
  {
    id: "BadgeType26",
    Component: Badges.BadgeType26,
  },
  {
    id: "BadgeType27",
    Component: Badges.BadgeType27,
  },
  {
    id: "BadgeType28",
    Component: Badges.BadgeType28,
  },
  {
    id: "BadgeType29",
    Component: Badges.BadgeType29,
  },
  {
    id: "BadgeType30",
    Component: Badges.BadgeType30,
  },
  {
    id: "BadgeType31",
    Component: Badges.BadgeType31,
  },
  {
    id: "BadgeType32",
    Component: Badges.BadgeType32,
  },
  {
    id: "BadgeType33",
    Component: Badges.BadgeType33,
  },
  {
    id: "BadgeType34",
    Component: Badges.BadgeType34,
  },
  {
    id: "BadgeType35",
    Component: Badges.BadgeType35,
  },
  {
    id: "BadgeType36",
    Component: Badges.BadgeType36,
  },
  {
    id: "BadgeType37",
    Component: Badges.BadgeType37,
  },
  {
    id: "BadgeType38",
    Component: Badges.BadgeType38,
  },
  {
    id: "BadgeType39",
    Component: Badges.BadgeType39,
  },
  {
    id: "BadgeType40",
    Component: Badges.BadgeType40,
  },
  {
    id: "BadgeType41",
    Component: Badges.BadgeType41,
  },
  {
    id: "BadgeType42",
    Component: Badges.BadgeType42,
  },
  {
    id: "BadgeType43",
    Component: Badges.BadgeType43,
  },
  {
    id: "BadgeType44",
    Component: Badges.BadgeType44,
  },
  {
    id: "BadgeType45",
    Component: Badges.BadgeType45,
  },
  {
    id: "BadgeType46",
    Component: Badges.BadgeType46,
  },
  {
    id: "BadgeType47",
    Component: Badges.BadgeType47,
  },
  {
    id: "BadgeType48",
    Component: Badges.BadgeType48,
  },
  {
    id: "BadgeType49",
    Component: Badges.BadgeType49,
  },
  {
    id: "BadgeType50",
    Component: Badges.BadgeType50,
  },
  {
    id: "BadgeType51",
    Component: Badges.BadgeType51,
  },
  {
    id: "BadgeType52",
    Component: Badges.BadgeType52,
  },
  {
    id: "BadgeType53",
    Component: Badges.BadgeType53,
  },
  {
    id: "BadgeType54",
    Component: Badges.BadgeType54,
  },
  {
    id: "BadgeType55",
    Component: Badges.BadgeType55,
  },
  {
    id: "BadgeType56",
    Component: Badges.BadgeType56,
  },
  {
    id: "BadgeType57",
    Component: Badges.BadgeType57,
  },
  {
    id: "BadgeType58",
    Component: Badges.BadgeType58,
  },
  {
    id: "BadgeType59",
    Component: Badges.BadgeType59,
  },
  {
    id: "BadgeType60",
    Component: Badges.BadgeType60,
  },
  {
    id: "BadgeType61",
    Component: Badges.BadgeType61,
  },
  {
    id: "BadgeType62",
    Component: Badges.BadgeType62,
  },
  {
    id: "BadgeType63",
    Component: Badges.BadgeType63,
  },
  {
    id: "BadgeType64",
    Component: Badges.BadgeType64,
  },
  {
    id: "BadgeType65",
    Component: Badges.BadgeType65,
  },
  {
    id: "BadgeType66",
    Component: Badges.BadgeType66,
  },
  {
    id: "BadgeType67",
    Component: Badges.BadgeType67,
  },
  {
    id: "BadgeType68",
    Component: Badges.BadgeType68,
  },
  {
    id: "BadgeType69",
    Component: Badges.BadgeType69,
  },
  {
    id: "BadgeType70",
    Component: Badges.BadgeType70,
  },
  {
    id: "BadgeType71",
    Component: Badges.BadgeType71,
  },
];

export const ribbonTemplates: templateType[] = [
  {
    id: "RibbonType1",
    Component: Ribbons.RibbonType1,
  },
  {
    id: "RibbonType2",
    Component: Ribbons.RibbonType2,
  },
  {
    id: "RibbonType4",
    Component: Ribbons.RibbonType4,
  },
  {
    id: "RibbonType5",
    Component: Ribbons.RibbonType5,
  },
  {
    id: "RibbonType6",
    Component: Ribbons.RibbonType6,
  },
  {
    id: "RibbonType7",
    Component: Ribbons.RibbonType7,
  },
  {
    id: "RibbonType7_1",
    Component: Ribbons.RibbonType7_1,
  },
  {
    id: "RibbonType8",
    Component: Ribbons.RibbonType8,
  },
  {
    id: "RibbonType12",
    Component: Ribbons.RibbonType12,
  },
  {
    id: "RibbonType13",
    Component: Ribbons.RibbonType13,
  },
  {
    id: "RibbonType13_1",
    Component: Ribbons.RibbonType13_1,
  },
  {
    id: "RibbonType18",
    Component: Ribbons.RibbonType18,
  },
  {
    id: "RibbonType18_1",
    Component: Ribbons.RibbonType18_1,
  },
  {
    id: "RibbonType19",
    Component: Ribbons.RibbonType19,
  },
  {
    id: "RibbonType19_1",
    Component: Ribbons.RibbonType19_1,
  },
  {
    id: "RibbonType21",
    Component: Ribbons.RibbonType21,
  },
  {
    id: "RibbonType22",
    Component: Ribbons.RibbonType22,
  },
  {
    id: "RibbonType23",
    Component: Ribbons.RibbonType23,
  },
  {
    id: "RibbonType23_1",
    Component: Ribbons.RibbonType23_1,
  },
  {
    id: "RibbonType24",
    Component: Ribbons.RibbonType24,
  },
  {
    id: "RibbonType24_1",
    Component: Ribbons.RibbonType24_1,
  },
  {
    id: "RibbonType26",
    Component: Ribbons.RibbonType26,
  },
  {
    id: "RibbonType27",
    Component: Ribbons.RibbonType27,
  },
  {
    id: "RibbonType27_1",
    Component: Ribbons.RibbonType27_1,
  },
  {
    id: "RibbonType34",
    Component: Ribbons.RibbonType34,
  },
  {
    id: "RibbonType35",
    Component: Ribbons.RibbonType35,
  },
  {
    id: "RibbonType35_1",
    Component: Ribbons.RibbonType35_1,
  },
  {
    id: "RibbonType45",
    Component: Ribbons.RibbonType45,
  },
  {
    id: "RibbonType46",
    Component: Ribbons.RibbonType46,
  },
  {
    id: "RibbonType53",
    Component: Ribbons.RibbonType53,
  },
  {
    id: "RibbonType57",
    Component: Ribbons.RibbonType57,
  },
  {
    id: "RibbonType61",
    Component: Ribbons.RibbonType61,
  },
  // 윙 타입 추가
  {
    id: "RibbonWing1",
    Component: Ribbons.RibbonWing1,
  },
  {
    id: "RibbonWing2",
    Component: Ribbons.RibbonWing2,
  },
  {
    id: "RibbonWing3",
    Component: Ribbons.RibbonWing3,
  },
  {
    id: "RibbonWing4",
    Component: Ribbons.RibbonWing4,
  },
  {
    id: "RibbonWing5",
    Component: Ribbons.RibbonWing5,
  },
  {
    id: "RibbonWing6",
    Component: Ribbons.RibbonWing6,
  },
  {
    id: "RibbonWing7",
    Component: Ribbons.RibbonWing7,
  },
  {
    id: "RibbonWing8",
    Component: Ribbons.RibbonWing8,
  },
  {
    id: "RibbonWing9",
    Component: Ribbons.RibbonWing9,
  },
  {
    id: "RibbonWing10",
    Component: Ribbons.RibbonWing10,
  },
  {
    id: "RibbonWing11",
    Component: Ribbons.RibbonWing11,
  },
  {
    id: "RibbonWing12",
    Component: Ribbons.RibbonWing12,
  },
  {
    id: "RibbonWing14",
    Component: Ribbons.RibbonWing14,
  },
];

export const IconTemplates: templateType[] = [
  // customIcon
];
