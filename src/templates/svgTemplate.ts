import Badges from "./badges";
import Ribbons from "./ribbons";
import Icons from "./icons";

export interface templateType {
  id: string;
  Component: (props: any) => string | HTMLElement;
  colors?: any;
}

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

export const iconTemplates: templateType[] = [
  // customIcon
  {
    id: "IconArrow",
    Component: Icons.IconArrow,
  },
  {
    id: "IconBg1",
    Component: Icons.IconBg1,
  },
  {
    id: "IconBg2",
    Component: Icons.IconBg2,
  },
  {
    id: "IconBg3",
    Component: Icons.IconBg3,
  },
  {
    id: "IconBg4",
    Component: Icons.IconBg4,
  },
  {
    id: "IconBg5",
    Component: Icons.IconBg5,
  },
  {
    id: "IconBg6",
    Component: Icons.IconBg6,
  },
  {
    id: "IconBg7",
    Component: Icons.IconBg7,
  },
  {
    id: "IconBg8",
    Component: Icons.IconBg8,
  },
  {
    id: "IconBg9",
    Component: Icons.IconBg9,
  },
  {
    id: "IconBottomLeft1",
    Component: Icons.IconBottomLeft1,
  },
  {
    id: "IconBottomLeft2",
    Component: Icons.IconBottomLeft2,
  },
  {
    id: "IconBottomRight1",
    Component: Icons.IconBottomRight1,
  },
  {
    id: "IconBottomRight2",
    Component: Icons.IconBottomRight2,
  },
  {
    id: "IconContainer1",
    Component: Icons.IconContainer1,
  },
  {
    id: "IconContainer2",
    Component: Icons.IconContainer2,
  },
  {
    id: "IconContainer3",
    Component: Icons.IconContainer3,
  },
  {
    id: "IconContainer4",
    Component: Icons.IconContainer4,
  },
  {
    id: "IconContainer5",
    Component: Icons.IconContainer5,
  },
  {
    id: "IconDonut",
    Component: Icons.IconDonut,
  },
  {
    id: "IconEllipse1",
    Component: Icons.IconEllipse1,
  },
  {
    id: "IconEllipse2",
    Component: Icons.IconEllipse2,
  },
  {
    id: "IconEtc1",
    Component: Icons.IconEtc1,
  },
  {
    id: "IconEtc2",
    Component: Icons.IconEtc2,
  },
  {
    id: "IconEtc3",
    Component: Icons.IconEtc3,
  },
  { id: "IconFrame1", Component: Icons.IconFrame1 },
  { id: "IconFrame2", Component: Icons.IconFrame2 },
  { id: "IconFrame3", Component: Icons.IconFrame3 },
  { id: "IconFrame4", Component: Icons.IconFrame4 },
  { id: "IconGear", Component: Icons.IconGear },
  { id: "IconMedal", Component: Icons.IconMedal },
  { id: "IconMortarboard1", Component: Icons.IconMortarboard1 },
  { id: "IconMortarboard2", Component: Icons.IconMortarboard2 },
  { id: "IconMortarboard3", Component: Icons.IconMortarboard3 },
  { id: "IconMortarboard4", Component: Icons.IconMortarboard4 },
  { id: "IconMortarboard5", Component: Icons.IconMortarboard5 },
  { id: "IconPhrase1", Component: Icons.IconPhrase1 },
  { id: "IconPhrase2", Component: Icons.IconPhrase2 },
  { id: "IconPhrase3", Component: Icons.IconPhrase3 },
  { id: "IconPhrase4", Component: Icons.IconPhrase4 },
  { id: "IconPillar1", Component: Icons.IconPillar1 },
  { id: "IconPillar2", Component: Icons.IconPillar2 },
  { id: "IconSkewedLeft", Component: Icons.IconSkewedLeft },
  { id: "IconSkewedRight", Component: Icons.IconSkewedRight },
  { id: "IconSmallType1", Component: Icons.IconSmallType1 },
  { id: "IconSmallType2", Component: Icons.IconSmallType2 },
  { id: "IconSmallType3", Component: Icons.IconSmallType3 },
  { id: "IconSmallType4", Component: Icons.IconSmallType4 },
  { id: "IconSmallType5", Component: Icons.IconSmallType5 },
  { id: "IconSmallType6", Component: Icons.IconSmallType6 },
  { id: "IconSmallType7", Component: Icons.IconSmallType7 },
  { id: "IconSmallType8", Component: Icons.IconSmallType8 },
  { id: "IconSmallType9", Component: Icons.IconSmallType9 },
  { id: "IconSmallType10", Component: Icons.IconSmallType10 },
  { id: "IconSpring1", Component: Icons.IconSpring1 },
  { id: "IconSpring2", Component: Icons.IconSpring2 },
  { id: "IconStar", Component: Icons.IconStar },
  { id: "IconStar2", Component: Icons.IconStar2 },
  { id: "IconStar3", Component: Icons.IconStar3 },
  { id: "IconStar4", Component: Icons.IconStar4 },
  { id: "IconStar5", Component: Icons.IconStar5 },
  { id: "IconStar6", Component: Icons.IconStar6 },
  { id: "IconTopLeft1", Component: Icons.IconTopLeft1 },
  { id: "IconTopLeft2", Component: Icons.IconTopLeft2 },
  { id: "IconTopRight1", Component: Icons.IconTopRight1 },
  { id: "IconTopRight2", Component: Icons.IconTopRight2 },
  { id: "IconTrophy1", Component: Icons.IconTrophy1 },
  { id: "IconTrophy2", Component: Icons.IconTrophy2 },
  { id: "IconTrophy3", Component: Icons.IconTrophy3 },
  { id: "IconTrophy4", Component: Icons.IconTrophy4 },
  { id: "IconType47", Component: Icons.IconType47 },
  { id: "IconWave1", Component: Icons.IconWave1 },
  { id: "IconWave2", Component: Icons.IconWave2 },
];

// const Icons = {
//   IconArrow: createIconArrow,

//   IconBg1: createIconBg1,
//   IconBg2: createIconBg2,
//   IconBg3: createIconBg3,
//   IconBg4: createIconBg4,
//   IconBg5: createIconBg5,
//   IconBg6: createIconBg6,
//   IconBg7: createIconBg7,
//   IconBg8: createIconBg8,
//   IconBg9: createIconBg9,

//   IconBottomLeft1: createIconBottomLeft1,
//   IconBottomLeft2: createIconBottomLeft2,
//   IconBottomRight1: createIconBottomRight1,
//   IconBottomRight2: createIconBottomRight2,

//   IconContainer1: createIconContainer1,
//   IconContainer2: createIconContainer2,
//   IconContainer3: createIconContainer3,
//   IconContainer4: createIconContainer4,
//   IconContainer5: createIconContainer5,

//   IconDonut: createIconDonut,

//   IconEllipse1: createIconEllipse1,
//   IconEllipse2: createIconEllipse2,

//   IconEtc1: createIconEtc1,
//   IconEtc2: createIconEtc2,
//   IconEtc3: createIconEtc3,

//   IconFrame1: createIconFrame1,
//   IconFrame2: createIconFrame2,
//   IconFrame3: createIconFrame3,
//   IconFrame4: createIconFrame4,

//   IconGear: createIconGear,
//   IconMedal: createIconMedal,

//   IconMortarboard1: createIconMortarboard1,
//   IconMortarboard2: createIconMortarboard2,
//   IconMortarboard3: createIconMortarboard3,
//   IconMortarboard4: createIconMortarboard4,
//   IconMortarboard5: createIconMortarboard5,

//   IconPhrase1: createIconPhrase1,
//   IconPhrase2: createIconPhrase2,
//   IconPhrase3: createIconPhrase3,
//   IconPhrase4: createIconPhrase4,

//   IconPillar1: createIconPillar1,
//   IconPillar2: createIconPillar2,

//   IconSkewedLeft: createIconSkewedLeft,
//   IconSkewedRight: createIconSkewedRight,

//   IconSmallType1: createIconSmallType1,
//   IconSmallType2: createIconSmallType2,
//   IconSmallType3: createIconSmallType3,
//   IconSmallType4: createIconSmallType4,
//   IconSmallType5: createIconSmallType5,
//   IconSmallType6: createIconSmallType6,
//   IconSmallType7: createIconSmallType7,
//   IconSmallType8: createIconSmallType8,
//   IconSmallType9: createIconSmallType9,
//   IconSmallType10: createIconSmallType10,

//   IconSpring1: createIconSpring1,
//   IconSpring2: createIconSpring2,

//   IconStar: createIconStar1,
//   IconStar2: createIconStar2,
//   IconStar3: createIconStar3,
//   IconStar4: createIconStar4,
//   IconStar5: createIconStar5,
//   IconStar6: createIconStar6,

//   IconTopLeft1: createIconTopLeft1,
//   IconTopLeft2: createIconTopLeft2,
//   IconTopRight1: createIconTopRight1,
//   IconTopRight2: createIconTopRight2,

//   IconTrophy1: createIconTrophy1,
//   IconTrophy2: createIconTrophy2,
//   IconTrophy3: createIconTrophy3,
//   IconTrophy4: createIconTrophy4,

//   IconType47: createIconType47,

//   IconWave1: createIconWave1,
//   IconWave2: createIconWave2,
// };
