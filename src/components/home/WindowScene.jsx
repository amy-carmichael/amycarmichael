import React from 'react';

/*
 * Homepage window scene.
 *
 * One static hand-drawn window. Behind the glass, a rotating cast of subjects
 * (dog, headphones girl, binoculars person) slides in from behind the shutter,
 * pauses to "look out", then slides off — one at a time, on a loop.
 *
 * Every element is wrapped in the same feTurbulence/feDisplacementMap "boil"
 * filter used by the About-page stars, giving the whole thing a hand-drawn
 * stop-motion shimmer. The boil seed steps DISCRETELY (not per frame), so the
 * filter is only recomputed a few times a second and stays cheap.
 *
 * Pure inline SVG — no external assets, no animation library — so it replaces
 * the heavy Spline iframe without adding meaningful load/build weight.
 */

const BLUE = '#4a55a2';

// --- Static window frame (traced) ---------------------------------------
// viewBox 0 0 1375 1144. The clear opening (where subjects appear) is roughly
// x:412–940, y:194–966. Shutters flank it at x:100–360 and x:980–1264.
const WINDOW_PATH =
  'M 104.0 120.0 L 102.0 127.0 L 102.0 138.0 L 105.0 162.0 L 106.0 230.0 L 102.0 327.0 L 95.0 420.0 L 98.0 604.0 L 107.0 770.0 L 106.0 1050.0 L 108.0 1058.0 L 113.0 1065.0 L 122.0 1067.0 L 132.0 1063.0 L 198.0 1047.0 L 282.0 1017.0 L 351.0 988.0 L 358.0 990.0 L 360.0 1004.0 L 365.0 1010.0 L 392.0 1009.0 L 421.0 1012.0 L 516.0 1014.0 L 637.0 1014.0 L 656.0 1012.0 L 726.0 1012.0 L 752.0 1009.0 L 971.0 1004.0 L 984.0 1000.0 L 989.0 985.0 L 999.0 985.0 L 1128.0 1013.0 L 1185.0 1022.0 L 1229.0 1026.0 L 1252.0 1032.0 L 1259.0 1029.0 L 1264.0 979.0 L 1264.0 936.0 L 1267.0 897.0 L 1264.0 825.0 L 1264.0 766.0 L 1277.0 574.0 L 1277.0 474.0 L 1275.0 447.0 L 1274.0 347.0 L 1275.0 270.0 L 1271.0 228.0 L 1274.0 189.0 L 1274.0 141.0 L 1271.0 133.0 L 1265.0 127.0 L 1250.0 123.0 L 1218.0 123.0 L 1105.0 137.0 L 1029.0 154.0 L 982.0 169.0 L 954.0 173.0 L 884.0 172.0 L 836.0 176.0 L 779.0 178.0 L 591.0 179.0 L 559.0 176.0 L 418.0 172.0 L 390.0 168.0 L 369.0 158.0 L 311.0 144.0 L 200.0 123.0 L 167.0 118.0 L 124.0 118.0 L 116.0 115.0 L 110.0 115.0 Z M 938.0 194.0 L 943.0 219.0 L 943.0 273.0 L 947.0 328.0 L 947.0 370.0 L 951.0 410.0 L 948.0 735.0 L 943.0 793.0 L 941.0 916.0 L 937.0 960.0 L 933.0 963.0 L 909.0 967.0 L 858.0 971.0 L 620.0 971.0 L 515.0 965.0 L 414.0 968.0 L 412.0 966.0 L 411.0 941.0 L 410.0 307.0 L 412.0 274.0 L 412.0 220.0 L 410.0 197.0 L 412.0 195.0 L 421.0 194.0 L 436.0 196.0 L 629.0 199.0 L 804.0 196.0 L 871.0 192.0 L 932.0 192.0 Z M 983.0 824.0 L 985.0 817.0 L 989.0 814.0 L 1162.0 812.0 L 1208.0 815.0 L 1211.0 819.0 L 1212.0 828.0 L 1211.0 834.0 L 1207.0 838.0 L 1030.0 841.0 L 988.0 838.0 L 984.0 833.0 Z M 1215.0 755.0 L 1215.0 765.0 L 1212.0 769.0 L 1193.0 769.0 L 1176.0 772.0 L 1038.0 780.0 L 989.0 779.0 L 985.0 773.0 L 986.0 761.0 L 992.0 757.0 L 1079.0 749.0 L 1180.0 746.0 L 1211.0 749.0 Z M 1226.0 423.0 L 1227.0 436.0 L 1224.0 441.0 L 1107.0 452.0 L 1017.0 464.0 L 991.0 462.0 L 987.0 458.0 L 986.0 454.0 L 987.0 446.0 L 990.0 443.0 L 1039.0 434.0 L 1139.0 424.0 L 1194.0 422.0 Z M 982.0 931.0 L 986.0 924.0 L 1035.0 926.0 L 1114.0 938.0 L 1206.0 946.0 L 1210.0 950.0 L 1211.0 968.0 L 1207.0 975.0 L 1140.0 967.0 L 1070.0 953.0 L 1002.0 946.0 L 985.0 941.0 L 982.0 936.0 Z M 1221.0 364.0 L 1220.0 375.0 L 1170.0 382.0 L 1095.0 387.0 L 1011.0 398.0 L 994.0 397.0 L 990.0 390.0 L 990.0 384.0 L 994.0 380.0 L 1031.0 370.0 L 1090.0 362.0 L 1189.0 356.0 L 1219.0 357.0 Z M 1224.0 291.0 L 1224.0 303.0 L 1220.0 309.0 L 1150.0 317.0 L 1078.0 332.0 L 997.0 344.0 L 989.0 344.0 L 986.0 341.0 L 986.0 333.0 L 990.0 328.0 L 1029.0 317.0 L 1069.0 311.0 L 1140.0 294.0 L 1169.0 289.0 L 1219.0 284.0 L 1222.0 286.0 Z M 1222.0 625.0 L 1221.0 637.0 L 1185.0 642.0 L 1148.0 642.0 L 1036.0 650.0 L 998.0 650.0 L 993.0 649.0 L 989.0 645.0 L 989.0 636.0 L 993.0 632.0 L 1030.0 626.0 L 1092.0 623.0 L 1139.0 618.0 L 1219.0 620.0 Z M 1220.0 502.0 L 1217.0 509.0 L 1193.0 514.0 L 1076.0 524.0 L 1016.0 526.0 L 1009.0 524.0 L 991.0 524.0 L 986.0 518.0 L 986.0 512.0 L 990.0 507.0 L 1006.0 504.0 L 1061.0 502.0 L 1140.0 493.0 L 1189.0 493.0 L 1217.0 491.0 L 1219.0 492.0 Z M 983.0 877.0 L 986.0 873.0 L 1102.0 874.0 L 1207.0 885.0 L 1208.0 902.0 L 1206.0 904.0 L 1167.0 905.0 L 1085.0 899.0 L 1045.0 898.0 L 989.0 892.0 L 983.0 887.0 Z M 1219.0 689.0 L 1219.0 700.0 L 1216.0 704.0 L 1108.0 707.0 L 1028.0 713.0 L 997.0 713.0 L 991.0 711.0 L 989.0 708.0 L 989.0 698.0 L 993.0 694.0 L 1036.0 689.0 L 1159.0 682.0 L 1216.0 684.0 Z M 153.0 354.0 L 158.0 349.0 L 245.0 350.0 L 273.0 354.0 L 357.0 359.0 L 361.0 363.0 L 361.0 373.0 L 358.0 376.0 L 340.0 377.0 L 226.0 376.0 L 183.0 378.0 L 158.0 374.0 L 154.0 369.0 Z M 1223.0 236.0 L 1221.0 246.0 L 1217.0 251.0 L 1124.0 261.0 L 1003.0 280.0 L 997.0 280.0 L 993.0 277.0 L 993.0 268.0 L 995.0 265.0 L 1031.0 255.0 L 1083.0 248.0 L 1158.0 233.0 L 1210.0 226.0 L 1219.0 227.0 Z M 359.0 702.0 L 359.0 711.0 L 354.0 715.0 L 254.0 732.0 L 202.0 744.0 L 164.0 746.0 L 160.0 742.0 L 159.0 728.0 L 161.0 726.0 L 182.0 722.0 L 213.0 712.0 L 297.0 700.0 L 355.0 698.0 Z M 358.0 595.0 L 357.0 602.0 L 353.0 606.0 L 198.0 622.0 L 164.0 620.0 L 161.0 616.0 L 159.0 606.0 L 160.0 600.0 L 172.0 599.0 L 188.0 595.0 L 284.0 587.0 L 354.0 588.0 Z M 356.0 877.0 L 356.0 886.0 L 351.0 890.0 L 175.0 945.0 L 166.0 945.0 L 164.0 943.0 L 162.0 926.0 L 165.0 922.0 L 256.0 894.0 L 308.0 880.0 L 347.0 872.0 L 353.0 873.0 Z M 1221.0 568.0 L 1220.0 577.0 L 1217.0 580.0 L 1120.0 587.0 L 1005.0 589.0 L 994.0 587.0 L 989.0 581.0 L 989.0 575.0 L 995.0 569.0 L 1117.0 566.0 L 1197.0 560.0 L 1214.0 560.0 L 1219.0 562.0 Z M 1219.0 178.0 L 1219.0 186.0 L 1217.0 190.0 L 1169.0 201.0 L 1055.0 215.0 L 993.0 226.0 L 989.0 223.0 L 990.0 212.0 L 1118.0 184.0 L 1182.0 175.0 L 1217.0 176.0 Z M 357.0 818.0 L 356.0 826.0 L 352.0 829.0 L 280.0 847.0 L 205.0 870.0 L 174.0 877.0 L 165.0 877.0 L 161.0 872.0 L 161.0 855.0 L 165.0 851.0 L 173.0 848.0 L 214.0 841.0 L 269.0 827.0 L 348.0 812.0 L 353.0 812.0 Z M 157.0 247.0 L 159.0 239.0 L 164.0 235.0 L 235.0 238.0 L 301.0 249.0 L 352.0 255.0 L 359.0 259.0 L 360.0 268.0 L 357.0 272.0 L 320.0 269.0 L 197.0 264.0 L 160.0 256.0 L 158.0 254.0 Z M 358.0 647.0 L 358.0 656.0 L 354.0 660.0 L 247.0 675.0 L 164.0 683.0 L 158.0 680.0 L 156.0 672.0 L 157.0 661.0 L 160.0 658.0 L 182.0 658.0 L 215.0 653.0 L 340.0 643.0 L 354.0 643.0 Z M 156.0 417.0 L 159.0 413.0 L 180.0 410.0 L 312.0 411.0 L 356.0 416.0 L 360.0 420.0 L 361.0 428.0 L 357.0 433.0 L 281.0 432.0 L 265.0 434.0 L 165.0 434.0 L 158.0 430.0 Z M 158.0 550.0 L 158.0 541.0 L 164.0 536.0 L 176.0 536.0 L 223.0 529.0 L 255.0 527.0 L 356.0 530.0 L 360.0 534.0 L 360.0 543.0 L 357.0 546.0 L 338.0 550.0 L 230.0 551.0 L 201.0 553.0 L 172.0 558.0 L 162.0 556.0 Z M 359.0 762.0 L 358.0 768.0 L 355.0 771.0 L 187.0 812.0 L 164.0 815.0 L 160.0 807.0 L 161.0 796.0 L 166.0 792.0 L 303.0 761.0 L 354.0 755.0 Z M 152.0 303.0 L 153.0 299.0 L 158.0 295.0 L 209.0 295.0 L 224.0 297.0 L 293.0 299.0 L 354.0 305.0 L 359.0 309.0 L 360.0 320.0 L 357.0 323.0 L 285.0 320.0 L 215.0 320.0 L 160.0 315.0 L 153.0 310.0 Z M 361.0 476.0 L 360.0 482.0 L 357.0 485.0 L 224.0 490.0 L 177.0 494.0 L 162.0 492.0 L 159.0 487.0 L 161.0 478.0 L 166.0 475.0 L 236.0 467.0 L 351.0 467.0 L 356.0 468.0 L 360.0 472.0 Z M 156.0 184.0 L 160.0 178.0 L 167.0 175.0 L 172.0 175.0 L 219.0 184.0 L 303.0 193.0 L 357.0 203.0 L 361.0 207.0 L 361.0 214.0 L 358.0 217.0 L 311.0 214.0 L 190.0 202.0 L 160.0 195.0 L 156.0 190.0 Z M 355.0 932.0 L 354.0 941.0 L 290.0 967.0 L 180.0 1003.0 L 170.0 1004.0 L 166.0 999.0 L 166.0 987.0 L 172.0 981.0 L 215.0 970.0 L 323.0 934.0 L 352.0 928.0 Z';

// Boil filter: a roughen that "boils" by stepping the turbulence seed in
// discrete stop-motion frames. Reused (with different seeds/durations to
// desync) for the window and each subject.
const Boil = ({ id, seed, dur, scale = 4 }) => (
  <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="turbulence" baseFrequency="0.012" numOctaves="1" seed={seed} result="n">
      <animate
        attributeName="seed"
        calcMode="discrete"
        values={`${seed};${seed + 1};${seed + 2};${seed + 3}`}
        dur={dur}
        repeatCount="indefinite"
      />
    </feTurbulence>
    <feDisplacementMap in="SourceGraphic" in2="n" scale={scale} />
  </filter>
);

// Shared stroke styling for all subjects — keeps the cast visually uniform.
const stroke = {
  fill: 'none',
  stroke: BLUE,
  strokeWidth: 7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

// --- Subjects (loose blue line art, ~centered on x=676, feet near y=948) --

const Dog = () => (
  <g {...stroke}>
    {/* sitting body — connects up to the neck so head doesn't float */}
    <path d="M642 648 C 598 686 575 778 575 852 C 575 918 615 948 676 948 C 737 948 777 918 777 852 C 777 778 754 686 710 648" />
    {/* floppy ears (drawn first, behind head) */}
    <path d="M600 498 C 548 512 545 612 588 664" />
    <path d="M752 498 C 804 512 807 612 764 664" />
    {/* head */}
    <circle cx="676" cy="566" r="100" />
    {/* muzzle + nose */}
    <path d="M642 596 C 658 624 694 624 710 596" />
    <circle cx="676" cy="592" r="9" fill={BLUE} />
    {/* eyes */}
    <circle cx="640" cy="552" r="7" fill={BLUE} />
    <circle cx="712" cy="552" r="7" fill={BLUE} />
    {/* tongue */}
    <path d="M676 604 C 672 628 668 642 676 654 C 684 642 680 628 676 604" />
    {/* front legs + paws */}
    <path d="M646 860 L 642 944" />
    <path d="M706 860 L 710 944" />
    <path d="M620 944 Q 642 956 664 944" />
    <path d="M688 944 Q 710 956 732 944" />
    {/* tail */}
    <path d="M775 858 C 836 852 850 798 826 766" />
  </g>
);

const HeadphonesGirl = () => (
  <g {...stroke}>
    {/* hair bun */}
    <circle cx="676" cy="430" r="30" />
    {/* head */}
    <circle cx="676" cy="520" r="80" />
    {/* face */}
    <path d="M660 540 Q 676 552 692 540" />
    <circle cx="654" cy="512" r="4" fill={BLUE} />
    <circle cx="698" cy="512" r="4" fill={BLUE} />
    {/* headphone band + cups */}
    <path d="M600 505 C 612 452 740 452 752 505" />
    <ellipse cx="598" cy="525" rx="16" ry="26" />
    <ellipse cx="754" cy="525" rx="16" ry="26" />
    {/* torso */}
    <path d="M640 600 L 624 770 L 728 770 L 712 600" />
    {/* raised hand to ear */}
    <path d="M712 620 C 742 600 756 560 750 532" />
    {/* other arm */}
    <path d="M640 615 C 612 660 606 710 614 752" />
    {/* legs (mid-stride) */}
    <path d="M650 770 L 638 940" />
    <path d="M702 770 L 720 940" />
    {/* music notes */}
    <path d="M812 470 L 812 540 M 812 470 L 842 462 L 842 532" />
    <circle cx="804" cy="540" r="9" fill={BLUE} />
    <circle cx="834" cy="532" r="9" fill={BLUE} />
  </g>
);

const BinocularsPerson = () => (
  <g {...stroke}>
    {/* hair cap */}
    <path d="M598 512 C 606 452 746 452 754 512" />
    {/* head */}
    <circle cx="676" cy="525" r="82" />
    {/* binoculars */}
    <circle cx="642" cy="512" r="30" />
    <circle cx="710" cy="512" r="30" />
    <path d="M668 512 L 684 512" />
    {/* arms up to binoculars */}
    <path d="M628 660 C 622 600 628 548 638 522" />
    <path d="M724 660 C 730 600 724 548 714 522" />
    {/* torso */}
    <path d="M636 640 L 624 780 L 728 780 L 716 640" />
    {/* legs */}
    <path d="M658 780 L 650 940" />
    <path d="M696 780 L 704 940" />
  </g>
);

// Each subject gets its own boil + a phase-shifted copy of the same peek
// animation, so they cycle through the window one at a time.
const SUBJECTS = [
  { id: 'dog', el: <Dog />, seed: 11, dur: '1.4s', delay: '0s' },
  { id: 'girl', el: <HeadphonesGirl />, seed: 27, dur: '1.6s', delay: '-6s' },
  { id: 'binoc', el: <BinocularsPerson />, seed: 43, dur: '1.5s', delay: '-12s' },
];

export const WindowScene = () => (
  <svg
    viewBox="0 0 1375 1144"
    className="window-scene"
    role="img"
    aria-label="An illustrated window where a dog, a girl listening to music, and a person with binoculars take turns looking out."
  >
    <defs>
      <Boil id="boil-win" seed={3} dur="1.9s" scale={3} />
      {SUBJECTS.map((s) => (
        <Boil key={s.id} id={`boil-${s.id}`} seed={s.seed} dur={s.dur} scale={5} />
      ))}
      <clipPath id="window-opening">
        <rect x="414" y="196" width="522" height="770" />
      </clipPath>
    </defs>

    {/* Subjects ride behind the glass, clipped to the opening. */}
    <g clipPath="url(#window-opening)">
      {SUBJECTS.map((s) => (
        <g
          key={s.id}
          className="window-subject"
          style={{ animationDelay: s.delay }}
          filter={`url(#boil-${s.id})`}
        >
          {s.el}
        </g>
      ))}
    </g>

    {/* Window frame on top. */}
    <g filter="url(#boil-win)">
      <path d={WINDOW_PATH} fill={BLUE} fillRule="evenodd" />
    </g>
  </svg>
);

export default WindowScene;
