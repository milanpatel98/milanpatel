export const characterConfig = {
  /** Bone/object name candidates in order of preference */
  headBoneNames: [
    "spine006",
    "Head",
    "head",
    "mixamorigHead",
    "mixamorig:Head",
    "J_Bip_C_Head",
  ],
  rightFootNames: ["footR", "RightFoot", "mixamorigRightFoot", "mixamorig:RightFoot"],
  leftFootNames: ["footL", "LeftFoot", "mixamorigLeftFoot", "mixamorig:LeftFoot"],
  screenLightNames: ["screenlight", "ScreenLight", "screenLight"],

  /** Animation clip name candidates */
  introAnimationNames: ["introAnimation", "Intro", "intro"],
  blinkAnimationNames: ["Blink", "blink"],

  /** Optional extra clips */
  loopedClips: ["key1", "key2", "key5", "key6"],
  typingClipName: "typing",
  browUpClipName: "browup",

  /** Misc */
  footYOffset: 3.36,
} as const;

