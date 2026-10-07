export interface CategoryInfo {
  id: 'border' | 'winged' | 'roots' | 'forest';
  number: string;
  name: string;
  englishSubtitle: string;
  description: string;
  curatorNote: string;
}

export interface StoryComment {
  id: string;
  author: string;
  date: string;
  content: string;
}

export interface BlogPost {
  id: string;
  categoryId: 'border' | 'winged' | 'roots' | 'forest';
  catalogueNo: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  location: string;
  imageUrl: string;
  imageAlt: string;
  figureCaption: string;
  pullQuote: string;
  content: string[];
  specimenNote: string;
  likes: number;
  comments: StoryComment[];
}

export interface GuestbookEntry {
  id: string;
  visitorName: string;
  date: string;
  message: string;
  favoriteCategory: string;
}

const svgToDataUri = (svgString: string): string =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;

export const ARTWORK_PLATES: Record<string, string> = {
  // Category 1: 경계에 사는 것들 (2, 3, 4)
  border_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgB2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#222923"/>
          <stop offset="55%" stop-color="#344236"/>
          <stop offset="100%" stop-color="#191E19"/>
        </linearGradient>
        <radialGradient id="glowB2" cx="0.65" cy="0.35" r="0.55">
          <stop offset="0%" stop-color="#D4DFC7" stop-opacity="0.35"/>
          <stop offset="60%" stop-color="#7FA078" stop-opacity="0.12"/>
          <stop offset="100%" stop-color="#191E19" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgB2)"/>
      <rect width="800" height="600" fill="url(#glowB2)"/>
      <path d="M0,420 L310,330 L490,410 L800,290 L800,600 L0,600 Z" fill="#2A2F2B"/>
      <path d="M0,180 L290,325 L480,260 L800,310 L800,0 L0,0 Z" fill="#1E231F" opacity="0.85"/>
      <path d="M270,320 Q380,355 510,275" stroke="#111512" stroke-width="14" fill="none" stroke-linecap="round"/>
      <ellipse cx="320" cy="340" rx="85" ry="28" fill="#4A6B49" opacity="0.9"/>
      <ellipse cx="430" cy="325" rx="70" ry="22" fill="#5D8258" opacity="0.85"/>
      <ellipse cx="240" cy="365" rx="65" ry="20" fill="#3B553A" opacity="0.9"/>
      <g stroke="#C5D6B8" stroke-width="2.2" fill="none" stroke-linecap="round">
        <path d="M350,340 Q370,220 435,145"/>
        <path d="M335,345 Q310,240 265,175"/>
        <path d="M365,342 Q420,260 495,215"/>
      </g>
      <g fill="#A8C299" opacity="0.9">
        <ellipse cx="368" cy="275" rx="16" ry="5" transform="rotate(-25 368 275)"/>
        <ellipse cx="388" cy="268" rx="16" ry="5" transform="rotate(20 388 268)"/>
        <ellipse cx="382" cy="240" rx="15" ry="4.5" transform="rotate(-28 382 240)"/>
        <ellipse cx="402" cy="235" rx="15" ry="4.5" transform="rotate(18 402 235)"/>
        <ellipse cx="398" cy="205" rx="13" ry="4" transform="rotate(-30 398 205)"/>
        <ellipse cx="416" cy="202" rx="13" ry="4" transform="rotate(15 416 202)"/>
        <ellipse cx="415" cy="175" rx="10" ry="3.5" transform="rotate(-30 415 175)"/>
        <ellipse cx="315" cy="275" rx="14" ry="4.5" transform="rotate(-15 315 275)"/>
        <ellipse cx="298" cy="245" rx="13" ry="4" transform="rotate(-20 298 245)"/>
        <ellipse cx="284" cy="215" rx="11" ry="3.5" transform="rotate(-22 284 215)"/>
      </g>
      <circle cx="435" cy="145" r="4.5" fill="#F4F7F0"/>
      <circle cx="265" cy="175" r="3.5" fill="#F4F7F0" opacity="0.85"/>
      <circle cx="495" cy="215" r="4" fill="#F4F7F0" opacity="0.9"/>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.22" stroke-width="1"/>
    </svg>
  `),

  border_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="skyB3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A2230"/>
          <stop offset="48%" stop-color="#3E4A59"/>
          <stop offset="72%" stop-color="#9A7B62"/>
          <stop offset="100%" stop-color="#23201E"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#skyB3)"/>
      <circle cx="620" cy="135" r="34" fill="#EFE6D5" opacity="0.88"/>
      <circle cx="634" cy="126" r="30" fill="#232C3B"/>
      <path d="M0,330 Q220,305 460,328 T800,315 L800,430 L0,430 Z" fill="#25282D" opacity="0.85"/>
      <rect x="0" y="365" width="800" height="145" fill="#4B4C52" opacity="0.55"/>
      <ellipse cx="620" cy="415" rx="45" ry="6" fill="#E8D8BE" opacity="0.35"/>
      <ellipse cx="620" cy="432" rx="30" ry="4" fill="#E8D8BE" opacity="0.25"/>
      <path d="M0,455 Q290,435 550,485 L800,470 L800,600 L0,600 Z" fill="#171615"/>
      <g fill="#121110" transform="translate(275, 395)">
        <path d="M0,65 L12,28 L24,42 L68,38 L92,16 L98,4 L106,18 L115,6 L114,24 L130,32 L116,40 L102,65 L94,88 L86,88 L88,65 L42,65 L36,88 L28,88 L31,65 Z"/>
        <path d="M12,42 Q-32,48 -46,68 Q-22,74 8,56 Z"/>
      </g>
      <g stroke="#2C2723" stroke-width="2" fill="none">
        <line x1="110" y1="520" x2="128" y2="310"/>
        <line x1="125" y1="520" x2="115" y2="335"/>
        <line x1="142" y1="520" x2="155" y2="345"/>
        <line x1="680" y1="530" x2="665" y2="330"/>
        <line x1="700" y1="530" x2="712" y2="350"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.22" stroke-width="1"/>
    </svg>
  `),

  border_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgB4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#D9D2C5"/>
          <stop offset="55%" stop-color="#B8B2A6"/>
          <stop offset="100%" stop-color="#6E736B"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgB4)"/>
      <circle cx="240" cy="190" r="85" fill="#F7F2E7" opacity="0.7"/>
      <path d="M0,390 Q200,380 400,390 T800,385 L800,600 L0,600 Z" fill="#7D847B" opacity="0.65"/>
      <g stroke="#EDE8DC" stroke-width="1.5" opacity="0.55">
        <line x1="140" y1="435" x2="340" y2="435"/>
        <line x1="180" y1="465" x2="420" y2="465"/>
        <line x1="220" y1="495" x2="360" y2="495"/>
      </g>
      <g stroke="#2E332C" stroke-width="2.5" fill="none" stroke-linecap="round">
        <path d="M560,600 Q530,360 390,210"/>
        <path d="M610,600 Q595,380 490,160"/>
        <path d="M655,600 Q650,410 585,240"/>
        <path d="M510,600 Q460,420 290,310"/>
      </g>
      <g fill="#4A4238" opacity="0.85">
        <ellipse cx="385" cy="205" rx="22" ry="7" transform="rotate(-38 385 205)"/>
        <ellipse cx="486" cy="155" rx="24" ry="7" transform="rotate(-55 486 155)"/>
        <ellipse cx="582" cy="234" rx="20" ry="6" transform="rotate(-65 582 234)"/>
      </g>
      <g transform="translate(422, 246) rotate(-12)">
        <ellipse cx="0" cy="0" rx="20" ry="13" fill="#234B5E"/>
        <path d="M-12,4 Q0,14 14,3 Z" fill="#9E4B28"/>
        <circle cx="-14" cy="-8" r="10" fill="#234B5E"/>
        <polygon points="-23,-9 -44,-6 -23,-3" fill="#1C1917"/>
        <circle cx="-17" cy="-10" r="2" fill="#FBF9F5"/>
        <polygon points="16,2 34,8 18,10" fill="#1B3A49"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#292524" stroke-opacity="0.18" stroke-width="1"/>
    </svg>
  `),

  // Category 2: 날개 달린 것들 (2, 3, 4)
  winged_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgW2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F2EDE2"/>
          <stop offset="100%" stop-color="#DDD4C3"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgW2)"/>
      <path d="M0,410 Q240,360 460,295 T800,190" stroke="#3A322C" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M290,342 Q370,410 475,435" stroke="#3A322C" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M510,280 Q580,210 660,140" stroke="#3A322C" stroke-width="5" fill="none" stroke-linecap="round"/>
      <g fill="#9A3412">
        <circle cx="475" cy="435" r="9"/>
        <circle cx="492" cy="428" r="8"/>
        <circle cx="465" cy="450" r="7.5"/>
        <circle cx="660" cy="140" r="8.5"/>
        <circle cx="675" cy="148" r="7"/>
      </g>
      <g transform="translate(230, 322)">
        <ellipse cx="0" cy="0" rx="26" ry="22" fill="#4A443E"/>
        <ellipse cx="2" cy="5" rx="20" ry="15" fill="#E6DEC8"/>
        <circle cx="14" cy="-14" r="14" fill="#2A2623"/>
        <circle cx="18" cy="-16" r="2.2" fill="#FBF9F5"/>
        <polygon points="27,-15 38,-12 27,-9" fill="#78350F"/>
        <path d="M-22,4 L-52,18 L-44,24 L-16,12 Z" fill="#2A2623"/>
      </g>
      <g transform="translate(385, 276)">
        <ellipse cx="0" cy="0" rx="25" ry="21" fill="#574E46"/>
        <ellipse cx="-2" cy="5" rx="19" ry="14" fill="#EBE3D0"/>
        <circle cx="-12" cy="-14" r="13" fill="#2A2623"/>
        <circle cx="-16" cy="-16" r="2.2" fill="#FBF9F5"/>
        <polygon points="-24,-15 -35,-12 -24,-9" fill="#78350F"/>
        <path d="M20,4 L48,16 L40,22 L14,12 Z" fill="#2A2623"/>
      </g>
      <g transform="translate(540, 232)">
        <ellipse cx="0" cy="0" rx="24" ry="20" fill="#4A443E"/>
        <ellipse cx="2" cy="4" rx="18" ry="13" fill="#E6DEC8"/>
        <circle cx="12" cy="-13" r="13" fill="#2A2623"/>
        <circle cx="16" cy="-15" r="2" fill="#FBF9F5"/>
        <polygon points="24,-14 35,-11 24,-8" fill="#78350F"/>
        <path d="M-20,4 L-46,16 L-38,22 L-14,10 Z" fill="#2A2623"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#78350F" stroke-opacity="0.2" stroke-width="1"/>
    </svg>
  `),

  winged_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgW3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1E2420"/>
          <stop offset="100%" stop-color="#121614"/>
        </linearGradient>
        <radialGradient id="wingGlow" cx="0.5" cy="0.48" r="0.45">
          <stop offset="0%" stop-color="#D9C79E" stop-opacity="0.32"/>
          <stop offset="100%" stop-color="#121614" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgW3)"/>
      <rect width="800" height="600" fill="url(#wingGlow)"/>
      <line x1="400" y1="60" x2="400" y2="540" stroke="#D6CEBE" stroke-opacity="0.12" stroke-dasharray="4 6"/>
      <line x1="100" y1="280" x2="700" y2="280" stroke="#D6CEBE" stroke-opacity="0.12" stroke-dasharray="4 6"/>
      <g transform="translate(400, 280)">
        <path d="M8,-10 C110,-95 245,-90 290,-45 C305,-30 280,5 190,12 C110,18 35,2 8,-10 Z" fill="#E8DFCA" fill-opacity="0.18" stroke="#D8C8A8" stroke-width="2"/>
        <path d="M25,-12 L275,-42 M60,-28 L120,8 M115,-42 L175,10 M170,-52 L225,4 M220,-54 L260,-10" stroke="#D8C8A8" stroke-width="0.9" stroke-opacity="0.65"/>
        <path d="M-8,-10 C-110,-95 -245,-90 -290,-45 C-305,-30 -280,5 -190,12 C-110,18 -35,2 -8,-10 Z" fill="#E8DFCA" fill-opacity="0.18" stroke="#D8C8A8" stroke-width="2"/>
        <path d="M-25,-12 L-275,-42 M-60,-28 L-120,8 M-115,-42 L-175,10 M-170,-52 L-225,4 M-220,-54 L-260,-10" stroke="#D8C8A8" stroke-width="0.9" stroke-opacity="0.65"/>
        <path d="M8,8 C95,12 225,42 255,85 C268,104 230,128 150,105 C80,84 28,36 8,8 Z" fill="#E8DFCA" fill-opacity="0.14" stroke="#D8C8A8" stroke-width="1.8"/>
        <path d="M20,14 L240,82 M75,32 L110,90 M130,48 L165,106 M180,64 L210,108" stroke="#D8C8A8" stroke-width="0.9" stroke-opacity="0.6"/>
        <path d="M-8,8 C-95,12 -225,42 -255,85 C-268,104 -230,128 -150,105 C-80,84 -28,36 -8,8 Z" fill="#E8DFCA" fill-opacity="0.14" stroke="#D8C8A8" stroke-width="1.8"/>
        <path d="M-20,14 L-240,82 M-75,32 L-110,90 M-130,48 L-165,106 M-180,64 L-210,108" stroke="#D8C8A8" stroke-width="0.9" stroke-opacity="0.6"/>
        <ellipse cx="0" cy="-42" rx="14" ry="10" fill="#8C9E8E"/>
        <ellipse cx="0" cy="-8" rx="11" ry="24" fill="#6D8270"/>
        <rect x="-4.5" y="16" width="9" height="185" rx="4.5" fill="#9EB09E"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.25" stroke-width="1"/>
    </svg>
  `),

  winged_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgW4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0E151B"/>
          <stop offset="65%" stop-color="#1C2730"/>
          <stop offset="100%" stop-color="#111618"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgW4)"/>
      <circle cx="400" cy="240" r="115" fill="#F3E9D2" opacity="0.9"/>
      <polygon points="80,600 150,310 220,600" fill="#0B1014"/>
      <polygon points="180,600 260,360 340,600" fill="#10171D"/>
      <polygon points="480,600 560,340 640,600" fill="#10171D"/>
      <polygon points="590,600 680,280 770,600" fill="#0B1014"/>
      <g transform="translate(400, 235)">
        <path d="M0,12 Q-95,-45 -235,-28 Q-175,28 -75,32 Q-35,34 0,24 Q35,34 75,32 Q175,28 235,-28 Q95,-45 0,12 Z" fill="#1F1B18"/>
        <path d="M-190,-18 Q-120,8 -45,16 M190,-18 Q120,8 45,16" stroke="#8C7A65" stroke-width="1.5" fill="none" opacity="0.6"/>
        <ellipse cx="0" cy="14" rx="22" ry="26" fill="#2B2520"/>
        <polygon points="-14,-8 -24,-24 -6,-12" fill="#1F1B18"/>
        <polygon points="14,-8 24,-24 6,-12" fill="#1F1B18"/>
        <circle cx="-7" cy="2" r="3.5" fill="#E59838"/>
        <circle cx="7" cy="2" r="3.5" fill="#E59838"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.2" stroke-width="1"/>
    </svg>
  `),

  // Category 3: 뿌리와 가시 (2, 3, 4)
  roots_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgR2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#F5EFE4"/>
          <stop offset="100%" stop-color="#E4DAC8"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgR2)"/>
      <rect x="36" y="36" width="728" height="528" fill="none" stroke="#574C3F" stroke-opacity="0.3" stroke-width="1"/>
      <path d="M400,560 Q392,390 405,210" stroke="#3D4738" stroke-width="6" fill="none"/>
      <path d="M398,420 Q310,365 245,390 L275,355 L235,335 L295,330 L270,295 Q345,325 400,385 Z" fill="#4E5B47"/>
      <path d="M402,360 Q490,305 555,330 L525,295 L565,275 L505,270 L530,235 Q455,265 402,325 Z" fill="#4E5B47"/>
      <g stroke="#5C4E3E" stroke-width="1.8">
        <line x1="396" y1="470" x2="372" y2="458"/>
        <line x1="404" y1="445" x2="428" y2="432"/>
        <line x1="397" y1="310" x2="370" y2="296"/>
        <line x1="405" y1="275" x2="432" y2="262"/>
      </g>
      <g transform="translate(405, 195)">
        <g stroke="#6B5E4C" stroke-width="2">
          <line x1="0" y1="10" x2="-65" y2="-15"/>
          <line x1="0" y1="10" x2="65" y2="-15"/>
          <line x1="0" y1="10" x2="-52" y2="35"/>
          <line x1="0" y1="10" x2="52" y2="35"/>
          <line x1="0" y1="10" x2="-75" y2="10"/>
          <line x1="0" y1="10" x2="75" y2="10"/>
        </g>
        <path d="M-32,-10 Q-55,-75 -15,-85 Q0,-90 15,-85 Q55,-75 32,-10 Z" fill="#7C3F58" opacity="0.88"/>
        <ellipse cx="0" cy="8" rx="36" ry="28" fill="#46523E"/>
      </g>
    </svg>
  `),

  roots_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgR3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#2B241E"/>
          <stop offset="40%" stop-color="#1E1814"/>
          <stop offset="100%" stop-color="#100D0B"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgR3)"/>
      <path d="M60,260 L340,240 L375,355 L110,385 Z" fill="#3B352F" opacity="0.75"/>
      <path d="M445,280 L735,255 L710,395 L425,375 Z" fill="#36302A" opacity="0.75"/>
      <path d="M0,515 Q240,485 480,520 T800,505 L800,600 L0,600 Z" fill="#243B42" opacity="0.7"/>
      <g stroke="#9E8264" fill="none" stroke-linecap="round">
        <path d="M400,0 L400,110 Q395,210 398,320 Q402,430 385,535" stroke-width="26"/>
        <path d="M395,120 Q260,180 215,255 Q175,325 225,445 Q255,500 245,550" stroke-width="16"/>
        <path d="M405,135 Q540,195 575,275 Q605,355 545,455 Q515,505 535,555" stroke-width="16"/>
        <path d="M215,285 Q120,335 90,455" stroke-width="9"/>
        <path d="M565,305 Q660,365 695,475" stroke-width="9"/>
        <path d="M398,300 Q335,395 310,525" stroke-width="10"/>
        <path d="M402,315 Q465,405 475,530" stroke-width="10"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.2" stroke-width="1"/>
    </svg>
  `),

  roots_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgR4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1E261E"/>
          <stop offset="100%" stop-color="#2D382B"/>
        </linearGradient>
        <radialGradient id="sproutGlow" cx="0.5" cy="0.5" r="0.38">
          <stop offset="0%" stop-color="#CBE3A6" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#1E261E" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgR4)"/>
      <rect width="800" height="600" fill="url(#sproutGlow)"/>
      <g stroke="#525C49" stroke-width="9" fill="none" stroke-linecap="round">
        <path d="M60,120 Q380,240 740,150"/>
        <path d="M60,470 Q410,360 740,480"/>
        <path d="M160,60 Q280,310 190,540"/>
        <path d="M640,60 Q520,300 610,540"/>
      </g>
      <g fill="#7A856D">
        <polygon points="270,175 295,110 288,182"/>
        <polygon points="490,192 515,260 508,190"/>
        <polygon points="310,415 280,345 326,410"/>
        <polygon points="480,412 515,345 496,416"/>
        <polygon points="222,280 292,265 224,298"/>
        <polygon points="576,280 508,295 574,262"/>
      </g>
      <g transform="translate(400, 300)">
        <path d="M0,30 C-28,5 -32,-28 0,-48 C32,-28 28,5 0,30 Z" fill="#A7D179"/>
        <path d="M0,30 C-42,18 -56,-8 -32,-26 C-12,-14 -6,10 0,30 Z" fill="#82B356"/>
        <path d="M0,30 C42,18 56,-8 32,-26 C12,-14 6,10 0,30 Z" fill="#82B356"/>
        <line x1="0" y1="30" x2="0" y2="-36" stroke="#E9F5D8" stroke-width="2"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.22" stroke-width="1"/>
    </svg>
  `),

  // Category 4: 숲의 형상 (2, 3, 4)
  forest_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgF2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1D2820"/>
          <stop offset="100%" stop-color="#111712"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgF2)"/>
      <path d="M40,390 Q380,350 760,410 L760,520 Q380,470 40,510 Z" fill="#3B2D23"/>
      <path d="M40,390 Q380,350 760,410 Q380,385 40,425 Z" fill="#4F6948" opacity="0.85"/>
      <g fill="#E6D5B8">
        <rect x="218" y="315" width="6" height="68" rx="3" fill="#C9B99B"/>
        <path d="M185,320 Q221,275 257,320 Z"/>
        <rect x="255" y="335" width="5" height="48" rx="2.5" fill="#C9B99B"/>
        <path d="M232,340 Q257,308 282,340 Z"/>
        <rect x="445" y="295" width="7" height="82" rx="3.5" fill="#C9B99B"/>
        <path d="M405,302 Q448,250 492,302 Z"/>
        <rect x="490" y="325" width="5" height="54" rx="2.5" fill="#C9B99B"/>
        <path d="M465,330 Q492,296 520,330 Z"/>
        <path d="M580,425 Q635,410 650,435 Q615,450 580,435 Z" fill="#D5BC94"/>
        <path d="M610,450 Q655,440 668,460 Q638,472 610,458 Z" fill="#C2A67A"/>
      </g>
      <g fill="#EFE4C8" opacity="0.55">
        <circle cx="230" cy="240" r="2.5"/>
        <circle cx="280" cy="215" r="2"/>
        <circle cx="440" cy="220" r="3"/>
        <circle cx="485" cy="195" r="2"/>
        <circle cx="360" cy="255" r="2.5"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.22" stroke-width="1"/>
    </svg>
  `),

  forest_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <radialGradient id="skyF3" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0%" stop-color="#F2EFE7"/>
          <stop offset="65%" stop-color="#CBD6D0"/>
          <stop offset="100%" stop-color="#8FA399"/>
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#skyF3)"/>
      <g fill="#19241C">
        <path d="M0,0 L355,0 Q370,95 335,165 Q285,220 205,235 Q110,250 0,220 Z"/>
        <path d="M405,0 L800,0 L800,245 Q685,260 595,230 Q495,195 435,150 Q395,95 405,0 Z"/>
        <path d="M0,265 Q125,290 235,275 Q325,265 365,335 Q390,435 350,600 L0,600 Z"/>
        <path d="M800,295 L800,600 L405,600 Q435,445 415,350 Q455,260 575,275 Q695,295 800,295 Z"/>
      </g>
      <g stroke="#111813" stroke-width="10" stroke-linecap="round">
        <line x1="0" y1="60" x2="265" y2="165"/>
        <line x1="800" y1="80" x2="515" y2="165"/>
        <line x1="60" y1="600" x2="285" y2="355"/>
        <line x1="740" y1="600" x2="505" y2="365"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#FBF9F5" stroke-opacity="0.25" stroke-width="1"/>
    </svg>
  `),

  forest_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
      <defs>
        <linearGradient id="bgF4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2D3A34"/>
          <stop offset="50%" stop-color="#45564E"/>
          <stop offset="100%" stop-color="#1C2420"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bgF4)"/>
      <path d="M0,250 Q180,175 370,235 T800,195 L800,600 L0,600 Z" fill="#34443D" opacity="0.75"/>
      <path d="M0,310 Q250,280 500,315 T800,295 L800,365 Q520,390 250,355 T0,375 Z" fill="#EAE6DC" opacity="0.28"/>
      <path d="M0,385 Q220,330 460,395 T800,355 L800,600 L0,600 Z" fill="#232E29"/>
      <path d="M0,445 Q300,415 580,455 T800,435 L800,495 Q540,515 280,480 T0,505 Z" fill="#EAE6DC" opacity="0.22"/>
      <path d="M0,510 Q360,475 800,520 L800,600 L0,600 Z" fill="#141C18"/>
      <g stroke="#EDE8DC" stroke-width="1" opacity="0.25">
        <line x1="180" y1="60" x2="150" y2="210"/>
        <line x1="340" y1="90" x2="310" y2="240"/>
        <line x1="520" y1="50" x2="490" y2="200"/>
        <line x1="670" y1="110" x2="640" y2="260"/>
      </g>
      <rect x="28" y="28" width="744" height="544" fill="none" stroke="#D6CEBE" stroke-opacity="0.22" stroke-width="1"/>
    </svg>
  `),
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'border',
    number: '01',
    name: '경계에사는것들',
    englishSubtitle: 'Things Living on the Border',
    description: '물과 뭍, 낮과 밤, 돌담과 이끼처럼 서로 다른 두 세계가 맞닿은 틈새에서 조용히 숨 쉬는 존재들의 기록입니다.',
    curatorNote: '어느 한쪽으로 완전히 속하지 않기에 비로소 두 세계를 모두 품는 자리',
  },
  {
    id: 'winged',
    number: '02',
    name: '날개달린것들',
    englishSubtitle: 'Winged Things',
    description: '가벼운 깃털과 투명한 날개맥으로 바람의 결을 읽으며, 땅의 중력 너머로 작은 그림자를 드리우는 비행의 이야기입니다.',
    curatorNote: '머무름보다 떠남에 가까운 몸짓으로 계절의 소식을 나르는 전령들',
  },
  {
    id: 'roots',
    number: '03',
    name: '뿌리와가시',
    englishSubtitle: 'Roots and Thorns',
    description: '보이지 않는 어둠 속에서 바위를 껴안는 뿌리와, 가장 여린 새순을 지키기 위해 스스로 날카로워진 가시들의 문장입니다.',
    curatorNote: '단단하게 버티는 힘과 스스로를 방어하는 고독한 아름다움에 대하여',
  },
  {
    id: 'forest',
    number: '04',
    name: '숲의형상',
    englishSubtitle: 'Shapes of the Forest',
    description: '안개를 가르는 빛기둥, 쓰러진 고목 위에 피어난 작은 도시, 나무들이 서로를 배려하며 비워둔 하늘의 윤곽을 담았습니다.',
    curatorNote: '수천 그루의 나무가 한 호흡으로 빚어내는 침묵과 빛의 건축',
  },
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  // ==========================================
  // 01. 경계에사는것들 (4 items)
  // ==========================================
  {
    id: 'border-1',
    categoryId: 'border',
    catalogueNo: 'ARC-01-01',
    title: '밀물과 썰물 사이, 안개가 머무는 갯벌의 새벽 기록',
    subtitle: '하루에 두 번 바다가 물러난 자리에 남는 물결 무늬와 흰 왜가리의 고요한 발걸음',
    date: '2026. 10. 02',
    readTime: '6분 읽기',
    location: '서해 천수만 기수역',
    imageUrl: '/src/assets/images/category_border_dwellers_1791367359966.jpg',
    imageAlt: '안개 낀 새벽 갯벌과 이끼 낀 바위 사이 얕은 물가에 서 있는 흰 왜가리',
    figureCaption: 'Fig. 1.1 — 조간대의 새벽 물안개와 외로운 왜가리의 그림자',
    pullQuote: '바다도 아니고 육지도 아닌 시간, 물이 빠져나간 자리에만 비로소 읽히는 문장들이 있다.',
    content: [
      '새벽 다섯 시의 갯벌은 아직 밤의 색깔을 완전히 벗지 못한 채 젖은 연필심처럼 은은하게 빛난다. 밀물이 남기고 간 얕은 물웅덩이마다 새벽하늘의 잿빛 구름이 조각조각 담겨 있고, 그 위를 걸어가는 왜가리 한 마리의 긴 다리가 수면의 거울을 천천히 깨뜨린다.',
      '경계에 산다는 것은 늘 두 개의 시간을 동시에 겪는 일이다. 물이 차오를 때는 바다의 문법을 따르고, 물이 빠져나갈 때는 대지의 호흡을 견뎌야 한다. 바위 틈에 붙은 따개비와 갯잔디는 그 끊임없는 밀고 당김 속에서 자신만의 단단한 집을 짓는다.',
      '우리는 흔히 확실한 영토 안에 머물기를 바라지만, 가장 경이로운 생명들은 언제나 흔들리는 가장자리에서 태어난다. 안개가 천천히 걷히며 드러나는 갯벌의 미세한 숨구멍들을 바라보며, 나 또한 내 삶의 모호한 경계들을 조금 더 사랑하기로 했다.',
    ],
    specimenNote: '채집 노트: 조간대 바위 표면의 염생 이끼와 새벽 5시 20분의 수온 기록',
    likes: 42,
    comments: [
      {
        id: 'c-1',
        author: '산책자 윤슬',
        date: '2026. 10. 03',
        content: '바다도 육지도 아닌 시간이라는 문장이 마음에 오래 남습니다. 새벽 물안개 냄새가 전해지는 것 같아요.',
      },
    ],
  },
  {
    id: 'border-2',
    categoryId: 'border',
    catalogueNo: 'ARC-01-02',
    title: '돌담과 이끼의 틈새에서 피어난 작은 양치식물의 겨울나기',
    subtitle: '한 줌의 흙도 허락되지 않은 현무암 그늘에서 스스로 숲을 만든 고사리의 시간',
    date: '2026. 09. 28',
    readTime: '5분 읽기',
    location: '제주 선흘리 옛 돌담길',
    imageUrl: ARTWORK_PLATES.border_2,
    imageAlt: '오래된 돌담의 틈새와 초록 이끼 위로 피어난 양치식물 잎사귀와 아침 이슬',
    figureCaption: 'Fig. 1.2 — 현무암 틈새의 벨벳 이끼와 일엽초의 겨울 눈',
    pullQuote: '돌의 차가움과 바람의 건조함 사이, 단 1밀리미터의 틈만 있다면 초록은 기어이 자리를 펴고 앉는다.',
    content: [
      '오래된 돌담을 가까이 들여다보면, 돌과 돌이 맞물린 어두운 틈새마다 작은 열대우림이 숨어 있음을 알게 된다. 사람이 쌓아 올린 인공의 경계선 위에 바람이 실어 나른 포자가 내려앉고, 이끼가 먼저 얇은 초록 양탄자를 깔아 습기를 머금는다.',
      '가을이 깊어지고 찬 바람이 돌담 구멍을 통과할 때면 양치식물들은 잎을 안쪽으로 살짝 말아 올리며 겨울을 준비한다. 거대한 나무의 그늘 아래가 아니라 가장 척박한 돌의 모서리에서 버텨낸 잎사귀일수록 그 결이 유난히 반짝인다.',
      '누군가에게는 그저 무너져가는 낡은 담장일지 몰라도, 작은 생명들에게 그 틈새는 세상에서 가장 아늑한 협곡이자 우주다.',
    ],
    specimenNote: '채집 노트: 현무암 북향 돌틈의 솔이끼 및 꼬리고사리 군락 관찰',
    likes: 35,
    comments: [],
  },
  {
    id: 'border-3',
    categoryId: 'border',
    catalogueNo: 'ARC-01-03',
    title: '낮과 밤이 교차하는 박명의 시간, 강둑을 건너는 여우의 발자국',
    subtitle: '해가 저물고 첫 별이 뜨기 직전, 빛과 어둠의 경계를 산책하는 야행성 동물들의 길',
    date: '2026. 09. 21',
    readTime: '7분 읽기',
    location: '소양강 상류 자갈밭',
    imageUrl: ARTWORK_PLATES.border_3,
    imageAlt: '초승달이 뜬 황혼녘 강둑 위를 걸어가는 여우의 실루엣과 강물의 반영',
    figureCaption: 'Fig. 1.3 — 박명(Twilight)의 강변을 가로지르는 발자국 궤적',
    pullQuote: '낮의 소란이 가라앉고 밤의 침묵이 아직 완성되지 않은 그 짧은 틈에 숲의 진짜 주인들이 걸어 나온다.',
    content: [
      '프랑스어로 황혼을 뜻하는 말은 개와 늑대를 구분할 수 없는 시간(L’heure entre chien et loup)이라고 부른다. 사물의 윤곽이 흐려지고 익숙하던 풍경이 낯선 신비로 물드는 이 경계의 시간은, 인간이 숲의 자리를 동물들에게 돌려주어야 하는 시각이기도 하다.',
      '젖은 모래톱 위에 찍힌 작고 일정한 보폭의 발자국들은 강물 바로 앞까지 이어지다 홀연히 억새밭 속으로 사라진다. 여우는 물을 마시기 전에 잠시 걸음을 멈추고 강 건너편 마을의 불빛을 바라보았을 것이다.',
      '보이지 않는다고 해서 존재하지 않는 것은 아니다. 우리가 잠든 사이에도 강둑의 길들은 수많은 발걸음으로 촘촘히 쓰이고 지워진다.',
    ],
    specimenNote: '채집 노트: 일몰 직후 25분간 강변 모래톱의 포유류 보행 흔적 기록',
    likes: 51,
    comments: [],
  },
  {
    id: 'border-4',
    categoryId: 'border',
    catalogueNo: 'ARC-01-04',
    title: '민물과 바닷물이 만나는 기수역, 갈대밭에 숨은 물총새의 기다림',
    subtitle: '강물의 여정이 끝나고 바다의 노래가 시작되는 곳에서 빛나는 비취색 날개',
    date: '2026. 09. 14',
    readTime: '5분 읽기',
    location: '순천만 갈대 군락지',
    imageUrl: ARTWORK_PLATES.border_4,
    imageAlt: '안개 낀 기수역 갈대 줄기 끝에 앉아 수면을 응시하는 비취색 물총새',
    figureCaption: 'Fig. 1.4 — 휘어진 갈대 줄기 위에서 수면의 파장을 읽는 물총새',
    pullQuote: '가장 고요한 기다림 끝에 가장 빠른 화살이 날아간다. 갈대 줄기가 한 번 출렁이면 이미 물방울만 남아 있다.',
    content: [
      '강물이 먼 내륙의 흙내음을 안고 내려와 마침내 짠 바닷물과 뒤섞이는 기수역은, 물의 성격이 바뀌는 거대한 환승역과 같다. 이곳의 갈대들은 민물의 부드러움과 바닷바람의 매서움을 동시에 견디며 사람 키보다 높게 자라난다.',
      '갈대 줄기 하나가 유독 낮게 휘어져 있다 싶어 눈을 맞추면, 어김없이 작은 보석 같은 물총새 한 마리가 미동도 없이 수면을 내려다보고 있다. 바람에 갈대가 흔들려도 물총새의 머리는 마치 나침반의 바늘처럼 한 치도 흔들리지 않는다.',
      '경계의 물결 속에서 은빛 송사리가 반짝이는 찰나, 푸른 섬광이 수면을 가른다. 기다림이란 아무것도 하지 않는 시간이 아니라 온몸의 감각을 한 점으로 모으는 가장 치열한 시간임을 새에게서 배운다.',
    ],
    specimenNote: '채집 노트: 기수역 갈대 줄기 위 물총새의 평균 응시 시간과 다이빙 각도',
    likes: 39,
    comments: [],
  },

  // ==========================================
  // 02. 날개달린것들 (4 items)
  // ==========================================
  {
    id: 'winged-1',
    categoryId: 'winged',
    catalogueNo: 'ARC-02-01',
    title: '자작나무 껍질 위에 내려앉은 달빛나방의 투명한 숨결',
    subtitle: '단 일주일의 비행을 위해 긴 겨울 고치 속에서 직조해 낸 연옥빛 날개의 비밀',
    date: '2026. 10. 04',
    readTime: '6분 읽기',
    location: '인제 원대리 자작나무 숲',
    imageUrl: '/src/assets/images/category_winged_things_1791367385742.jpg',
    imageAlt: '하얀 자작나무 껍질 위에 앉아 황혼 빛을 받아 반투명하게 빛나는 연옥색 달빛나방',
    figureCaption: 'Fig. 2.1 — 자작나무 수피 위에서 날개를 말리는 옥색긴꼬리산누에나방',
    pullQuote: '입을 버리고 날개를 얻은 생명은 오직 달빛과 바람만을 양식 삼아 밤의 숲을 건넌다.',
    content: [
      '옥색긴꼬리산누에나방, 흔히 달빛나방이라 불리는 이 신비로운 생명체를 처음 마주한 것은 해 질 녘 자작나무 숲에서였다. 하얀 수피 위에 마치 연옥으로 깎아 만든 나뭇잎 하나가 내려앉은 듯, 길게 뻗은 꼬리날개가 미풍에 가늘게 떨리고 있었다.',
      '놀랍게도 이 아름다운 나방은 성충이 되면서 입이 퇴화해 아무것도 먹지 못한다. 애벌레 시절 모아둔 에너지만으로 단 며칠 동안 밤하늘을 날아 짝을 찾고 생을 마감한다. 먹는 일조차 포기할 만큼 간절했던 단 하나의 비행.',
      '짧기에 더욱 투명한 그 날개 위로 어스름한 달빛이 스며들 때, 숲의 시간은 잠시 멈춘 듯 고요해졌다. 영원하지 않아서 더 눈부신 것들이 세상에는 분명히 존재한다.',
    ],
    specimenNote: '채집 노트: 자작나무 수피(지상 1.4m)에서 관찰한 날개 편 길이 112mm 개체',
    likes: 64,
    comments: [
      {
        id: 'c-2',
        author: '기록자 서진',
        date: '2026. 10. 05',
        content: '입을 버리고 날개를 얻었다는 구절이 한 편의 시 같습니다. 사진 속 나방의 날개 빛깔이 정말 신비로워요.',
      },
    ],
  },
  {
    id: 'winged-2',
    categoryId: 'winged',
    catalogueNo: 'ARC-02-02',
    title: '첫서리가 내린 아침, 남쪽으로 떠나지 못한 텃새들의 합창',
    subtitle: '붉은 산수유 열매와 얼어붙은 나뭇가지 위에서 겨울을 맞이하는 오목눈이 무리',
    date: '2026. 09. 29',
    readTime: '5분 읽기',
    location: '남한산성 북문 산책로',
    imageUrl: ARTWORK_PLATES.winged_2,
    imageAlt: '서리 내린 겨울 나뭇가지와 붉은 열매 곁에 나란히 앉은 세 마리의 작은 텃새',
    figureCaption: 'Fig. 2.2 — 서리 맺힌 산수유 가지에 모여 체온을 나누는 텃새들',
    pullQuote: '떠나는 새들에게는 광활한 항로가 있고, 남는 새들에게는 서로의 어깨를 맞대는 따뜻한 가지가 있다.',
    content: [
      '철새들이 높은 브이(V) 자 대열을 그리며 남쪽 바다로 날아간 뒤, 잎을 모두 떨군 겨울 숲은 한결 헐거워진다. 하지만 빈 가지 사이를 자세히 들여다보면 솜뭉치처럼 깃털을 잔뜩 부풀린 오목눈이와 박새들이 쉴 새 없이 가지를 옮겨 다니며 아침 인사를 나눈다.',
      '무게가 채 십 그램도 되지 않는 작은 몸으로 영하의 바람을 견디는 비결은 끊임없이 움직이고, 밤이면 한 가지에 촘촘히 붙어 앉아 서로의 체온을 나누는 데 있다. 서리가 하얗게 내려앉은 붉은 열매 하나를 두고도 차례를 기다릴 줄 아는 작은 예의.',
      '가장 추운 계절에 가장 맑은 목소리로 노래하는 숲의 작은 음악가들 덕분에, 겨울 산책길은 결코 쓸쓸하지 않다.',
    ],
    specimenNote: '채집 노트: 첫서리 직후 오목눈이 무리의 군집 이동 및 열매 채식 기록',
    likes: 47,
    comments: [],
  },
  {
    id: 'winged-3',
    categoryId: 'winged',
    catalogueNo: 'ARC-02-03',
    title: '유리창 너머로 날아든 왕잠자리, 그 얇고 정교한 날개맥의 지도',
    subtitle: '수억 년 전 고생대의 하늘부터 변함없이 이어져 온 가장 완벽한 비행 기하학',
    date: '2026. 09. 19',
    readTime: '6분 읽기',
    location: '이야기상점 남쪽 창가',
    imageUrl: ARTWORK_PLATES.winged_3,
    imageAlt: '어두운 배경 위에 대칭으로 펼쳐진 왕잠자리의 정교한 황금빛 날개맥 표본 일러스트',
    figureCaption: 'Fig. 2.3 — 네 장의 날개에 새겨진 육각형 시맥(Wing Venation) 구조도',
    pullQuote: '가장 가벼운 막 위에 가장 튼튼한 다리를 놓는 법을, 잠자리는 인간보다 삼억 년 먼저 알고 있었다.',
    content: [
      '가을 햇살이 깊숙이 들어오던 오후, 이야기상점의 열어둔 창문으로 왕잠자리 한 마리가 길을 잃고 날아들었다. 책상 모서리에 잠시 내려앉은 잠자리의 날개는 유리보다 얇으면서도 무지갯빛 광택을 머금고 있었다.',
      '돋보기로 들여다본 날개맥은 마치 오래된 성당의 스테인드글라스 창틀이나 강줄기가 갈라지는 삼각주의 지도를 닮아 있었다. 미세한 주름으로 이루어진 이 격자 구조 덕분에 잠자리는 자기 몸무게보다 훨씬 강한 맞바람 속에서도 공중에 정지한 채 머물 수 있다.',
      '창문을 활짝 열어주자 잠자리는 짧은 날갯짓 소리와 함께 다시 푸른 가을 하늘 속으로 미끄러져 나갔다. 내 노트 위에는 그 정교한 날개맥의 스케치만이 남았다.',
    ],
    specimenNote: '채집 노트: 앞날개와 뒷날개의 결절(Nodulus) 및 가연문 구조 정밀 스케치',
    likes: 38,
    comments: [],
  },
  {
    id: 'winged-4',
    categoryId: 'winged',
    catalogueNo: 'ARC-02-04',
    title: '깊은 밤 전나무 숲을 가르는 수리부엉이의 소리 없는 비행',
    subtitle: '바람 소리조차 삼키는 톱니 모양의 깃털로 어둠의 골짜기를 유영하는 밤의 제왕',
    date: '2026. 09. 10',
    readTime: '7분 읽기',
    location: '오대산 월정사 전나무 숲',
    imageUrl: ARTWORK_PLATES.winged_4,
    imageAlt: '보름달이 뜬 밤하늘과 전나무 숲 실루엣 위로 날개를 활짝 펼친 수리부엉이',
    figureCaption: 'Fig. 2.4 — 달빛을 등지고 계곡을 활강하는 수리부엉이의 무음 비행',
    pullQuote: '진정한 힘은 소란을 피우지 않는다. 가장 거대한 날개가 지나간 자리에 남는 것은 오직 깊어진 침묵뿐이다.',
    content: [
      '대부분의 새가 날아오를 때는 공기를 가르는 날갯짓 소리가 난다. 그러나 밤의 숲을 지배하는 수리부엉이는 바로 머리 위를 스쳐 지나가도 단 한 줄기의 바람 소리조차 남기지 않는다. 첫째 날개깃 가장자리에 촘촘히 돋아난 빗살 모양의 깃털이 공기의 소용돌이를 부드럽게 잘게 쪼개기 때문이다.',
      '보름달이 전나무 우듬지 위로 떠오른 밤, 낮고 웅장한 울음소리가 골짜기를 한 번 울린 뒤 거대한 그림자가 달빛을 가로질렀다. 호박색 눈동자에 달빛을 가득 담은 채 숲의 어둠을 굽어보는 그 고요한 위엄.',
      '소리가 넘쳐나는 세상에 살면서 가끔은 부엉이의 깃털을 닮은 문장을 쓰고 싶어진다. 아무도 놀라게 하지 않으면서 마음 가장 깊은 곳에 사뿐히 내려앉는 그런 문장을.',
    ],
    specimenNote: '채집 노트: 야간 전나무 숲 상공 활강 목격 및 첫째 날개깃 소음 감쇄 구조 기록',
    likes: 58,
    comments: [],
  },

  // ==========================================
  // 03. 뿌리와가시 (4 items)
  // ==========================================
  {
    id: 'roots-1',
    categoryId: 'roots',
    catalogueNo: 'ARC-03-01',
    title: '서리 내린 찔레꽃 덩굴과 고목의 뿌리가 서로를 껴안는 방식',
    subtitle: '상처를 내는 가시와 상처를 감싸는 나무뿌리가 한 자리에서 세월을 건너는 풍경',
    date: '2026. 10. 05',
    readTime: '6분 읽기',
    location: '지리산 둘레길 구례 구간',
    imageUrl: '/src/assets/images/category_roots_and_thorns_1791367400249.jpg',
    imageAlt: '서리 결정이 맺힌 야생 찔레 가시 덩굴과 거대한 참나무 뿌리가 얽혀 있는 숲바닥',
    figureCaption: 'Fig. 3.1 — 고목의 노출된 뿌리 등성이를 따라 뻗은 야생 찔레 덩굴',
    pullQuote: '가시는 찌르기 위해서가 아니라 기대어 오르기 위해 돋아나고, 뿌리는 그 아픈 기댐마저 묵묵히 받아준다.',
    content: [
      '숲길 비탈면에서 비바람에 흙이 씻겨 내려간 자리에 수백 년 된 참나무의 굵은 뿌리가 거대한 혈관처럼 드러나 있었다. 그리고 그 단단한 뿌리 사이사이를 야생 찔레나무의 가시 덩굴이 촘촘하게 감싸 안으며 겨울 아침의 서리를 함께 맞고 있었다.',
      '찔레의 날카로운 갈고리 가시는 원래 연약한 줄기가 쓰러지지 않고 햇빛을 향해 오르기 위해 만든 손잡이다. 거친 참나무 수피에 가시를 걸고 지탱하는 덩굴과, 그 찔레가 흘린 낙엽을 거름 삼아 다시 깊은 흙 속으로 뿌리를 뻗는 고목.',
      '서로 다른 성질을 가진 존재들이 한 자리를 공유하며 살아가는 일은 언제나 조금의 아픔과 깊은 포용을 동반한다. 서리 내린 뿌리와 가시의 포옹 앞에서 한참 동안 발길을 떼지 못했다.',
    ],
    specimenNote: '채집 노트: 졸참나무 판근(Buttress root)과 찔레나무 줄기의 공생 지점 관찰',
    likes: 49,
    comments: [],
  },
  {
    id: 'roots-2',
    categoryId: 'roots',
    catalogueNo: 'ARC-03-02',
    title: '스스로를 지키기 위해 가장 날카로운 문장을 만든 엉겅퀴의 기록',
    subtitle: '잎 끝마다 돋은 가시 너머로 가장 부드러운 자줏빛 꽃밥을 피워 올리는 역설',
    date: '2026. 09. 25',
    readTime: '5분 읽기',
    location: '태백산 고원 초지',
    imageUrl: ARTWORK_PLATES.roots_2,
    imageAlt: '보타니컬 아트 스타일로 세밀하게 그려진 가시 돋친 엉겅퀴 잎과 자주색 꽃봉오리',
    figureCaption: 'Fig. 3.2 — 엉겅퀴(Cirsium japonicum)의 잎 가장자리 가시와 총포 구조',
    pullQuote: '가장 여린 마음을 가진 존재일수록 세상과 마주하는 가장자리에는 날 선 가시를 세워둔다.',
    content: [
      '바람이 거센 고원 초지에서 엉겅퀴는 누구에게도 쉽게 곁을 내주지 않는다. 깊게 갈라진 잎의 끝마다 단단한 바늘 같은 가시가 돋아 있어 초식동물들도 감히 입을 대지 못하고 돌아선다.',
      '하지만 그 삼엄한 가시의 성채 꼭대기에 피어난 자줏빛 꽃송이는 비단실처럼 부드럽고 달콤한 꿀을 가득 품고 있다. 호랑나비와 뒤영벌에게는 세상에서 가장 후한 식탁을 차려주면서도, 자신을 꺾으려는 손길 앞에서는 단호하게 거리를 두는 지혜.',
      '무조건 둥글고 부드러워지는 것만이 성숙은 아닐 것이다. 지켜야 할 소중한 중심이 있다면, 때로는 엉겅퀴처럼 선명한 경계의 가시를 가질 줄도 알아야 한다.',
    ],
    specimenNote: '채집 노트: 해발 1,100m 고원 초지 엉겅퀴 개화기 및 방어 가시 분포도',
    likes: 44,
    comments: [],
  },
  {
    id: 'roots-3',
    categoryId: 'roots',
    catalogueNo: 'ARC-03-03',
    title: '어두운 흙 속 삼백 년, 바위를 뚫고 물길을 찾아낸 느티나무 뿌리',
    subtitle: '지상의 화려한 단풍보다 더 장엄한, 보이지 않는 지하 세계의 느린 건축술',
    date: '2026. 09. 17',
    readTime: '7분 읽기',
    location: '안동 하회마을 옛 강변',
    imageUrl: ARTWORK_PLATES.roots_3,
    imageAlt: '어두운 지하 지층의 거대한 바위를 감싸 안으며 깊은 지하수맥까지 뻗어 내려간 나무뿌리 단면도',
    figureCaption: 'Fig. 3.3 — 지하 암반층을 우회하여 수맥에 도달한 고목의 심근계(Deep Root System)',
    pullQuote: '나무는 장애물을 만나면 부수려 하지 않고, 그 바위를 자기 몸의 일부로 껴안으며 더 깊이 내려간다.',
    content: [
      '가을이면 수만 장의 금빛 잎사귀로 하늘을 덮는 당산나무도, 사실 그 생명의 절반은 한 줄기 빛조차 들지 않는 캄캄한 지하에 묻혀 있다. 나무의 키만큼이나 깊고 넓게 뻗어 나간 뿌리의 그물망이 태풍에도 흔들리지 않는 중심을 잡아준다.',
      '땅속을 내려가던 뿌리가 거대한 화강암 바위를 만나면 어떻게 할까. 뿌리는 서두르지 않고 일 년에 몇 밀리미터씩 바위의 표면을 따라 흐르듯 자라며 마침내 바위 전체를 감싸 안는다. 바위를 적으로 여기는 대신 가장 튼튼한 주춧돌로 삼는 것이다.',
      '우리의 삶에서도 도무지 치울 수 없는 단단한 바위 같은 시간을 만날 때가 있다. 그럴 때마다 어둠 속에서 바위를 껴안고 물길을 찾아낸 느티나무의 뿌리를 떠올린다.',
    ],
    specimenNote: '채집 노트: 수령 300년 느티나무의 암반 포섭 뿌리 구조 및 토양 수분 경로',
    likes: 56,
    comments: [],
  },
  {
    id: 'roots-4',
    categoryId: 'roots',
    catalogueNo: 'ARC-03-04',
    title: '탱자나무 가시 울타리 안쪽에 숨겨진 봄날의 가장 여린 새순',
    subtitle: '겨울 내내 회초리 같던 푸른 가시 가지 사이에서 기적처럼 돋아나는 연둣빛 문장',
    date: '2026. 09. 08',
    readTime: '5분 읽기',
    location: '강화도 전등사 남쪽 성곽길',
    imageUrl: ARTWORK_PLATES.roots_4,
    imageAlt: '길고 억센 탱자나무 가시들이 얽힌 중심에서 환하게 빛나는 연둣빛 새순',
    figureCaption: 'Fig. 3.4 — 어긋나게 뻗은 탱자나무 가시 요새 한가운데에서 움튼 첫 잎눈',
    pullQuote: '가장 억센 가시들의 교차점 한가운데에, 세상에서 가장 연하고 향기로운 생명이 잠들어 있다.',
    content: [
      '옛 사찰이나 고택의 울타리로 흔히 심던 탱자나무는 겨울이면 잎을 모두 떨구고 푸른빛이 도는 날카로운 가시만 남긴다. 손가락만큼 길고 단단한 가시들이 사방으로 얽혀 있어 바람조차 통과하기 힘들 만큼 험상궂은 모양새다.',
      '그러나 그 가시 울타리 안쪽을 가만히 들여다보면, 매서운 겨울바람이 닿지 않는 가장 안전한 중심부에서 손톱만 한 연둣빛 새순과 하얀 꽃봉오리가 조용히 숨을 쉬고 있다. 바깥을 향한 가시가 사나울수록 안쪽을 향한 품은 더욱 아늑하다.',
      '누군가의 차갑고 날 선 말투 뒤에도 어쩌면 다치지 않고 싶어 하는 여린 새순 하나가 숨어 있을지 모른다. 가시 너머의 연둣빛을 볼 줄 아는 눈을 갖고 싶다.',
    ],
    specimenNote: '채집 노트: 탱자나무(Poncirus trifoliata) 가시 길이(3.5~5cm)와 겨울눈 보호 배치',
    likes: 41,
    comments: [],
  },

  // ==========================================
  // 04. 숲의형상 (4 items)
  // ==========================================
  {
    id: 'forest-1',
    categoryId: 'forest',
    catalogueNo: 'ARC-04-01',
    title: '오래된 삼나무 숲의 아침 안개를 통과하는 빛의 기둥들',
    subtitle: '빽빽한 수관 사이로 쏟아져 내린 햇살이 이끼 낀 숲바닥에 그리는 황금빛 성당',
    date: '2026. 10. 06',
    readTime: '6분 읽기',
    location: '사려니숲 삼나무 군락지',
    imageUrl: '/src/assets/images/category_forest_shapes_1791367417460.jpg',
    imageAlt: '이끼 낀 고목과 양치식물이 가득한 안개 낀 삼나무 숲속으로 비스듬히 쏟아지는 아침 햇살 기둥',
    figureCaption: 'Fig. 4.1 — 삼나무 수관층을 통과한 아침 빛내림(Tyndall Effect)과 양치식물 군락',
    pullQuote: '빛은 홀로 있을 때 보이지 않고, 숲의 안개와 나뭇잎의 그림자를 만날 때 비로소 만질 수 있는 기둥이 된다.',
    content: [
      '비 개인 다음 날 아침, 삼나무 숲에 들어서면 공기는 물기를 머금은 유리알처럼 투명하고도 묵직하다. 하늘을 가린 수십 미터 높이의 우듬지 틈새로 아침 해가 떠오르면, 숲속에는 수백 개의 황금빛 기둥이 일제히 세워진다.',
      '빛의 기둥 속에서는 눈에 보이지 않던 미세한 물방울과 꽃가루, 이끼의 포자들이 천천히 춤을 추며 떠오른다. 어두운 나무 그림자가 깊을수록 그 사이를 가르는 빛의 윤곽은 더욱 또렷해진다.',
      '인간이 지은 그 어떤 건축물도 이 아침 숲의 기둥만큼 경건할 수는 없을 것이다. 빛과 그림자가 서로를 지우지 않고 나란히 서서 완성하는 숲의 형상 속에서, 마음속 오래된 소음들이 차분히 가라앉는다.',
    ],
    specimenNote: '채집 노트: 오전 7시 40분 수관 투과광 각도 28도 및 숲바닥 습도 88% 기록',
    likes: 73,
    comments: [
      {
        id: 'c-3',
        author: '숲지기 도현',
        date: '2026. 10. 06',
        content: '비 온 뒤 사려니숲의 아침 공기가 그대로 느껴집니다. 이야기상점에 들를 때마다 마음이 맑아져요.',
      },
    ],
  },
  {
    id: 'forest-2',
    categoryId: 'forest',
    catalogueNo: 'ARC-04-02',
    title: '쓰러진 아름드리 나무 한 그루가 수천의 버섯과 이끼의 도시가 되기까지',
    subtitle: '죽음이 끝이 아니라 가장 풍요로운 시작이 되는 숲의 요람, 도목갱신(倒木更新)의 시간',
    date: '2026. 09. 26',
    readTime: '7분 읽기',
    location: '점봉산 곰배령 원시림',
    imageUrl: ARTWORK_PLATES.forest_2,
    imageAlt: '숲바닥에 쓰러진 고목 위로 초록 이끼와 크고 작은 버섯들이 피어나 포자를 흩날리는 모습',
    figureCaption: 'Fig. 4.2 — 쓰러진 고목(Nurse Log) 위에 형성된 이끼와 버섯의 미세 생태계',
    pullQuote: '숲에서는 아무것도 헛되이 사라지지 않는다. 거목이 쓰러진 자리에 가장 작은 것들의 우주가 열린다.',
    content: [
      '수백 년 동안 숲의 천장을 떠받치던 거목이 어느 태풍 불던 밤 쿵 소리와 함께 쓰러진다. 하지만 숲에서 나무의 쓰러짐은 장례식이 아니라 새로운 도시의 개막식이다. 고목이 비워낸 자리로 그동안 닿지 못하던 햇살이 쏟아져 내리고, 누운 줄기 위로는 이끼와 버섯들이 모여든다.',
      '생태학에서는 이렇게 쓰러진 나무 위에서 어린 묘목들이 자라나는 현상을 유모 통나무(Nurse Log) 혹은 도목갱신이라 부른다. 어미 나무가 자신의 몸을 허물어 수분과 영양분을 아낌없이 내어주며 다음 세대의 어린 나무들을 길러내는 것이다.',
      '부서지고 낮아짐으로써 오히려 수천의 생명을 품는 나무의 마지막 형상. 잘 늙어간다는 것과 아름답게 물러난다는 것의 의미를 숲바닥에 누운 고목에게서 배운다.',
    ],
    specimenNote: '채집 노트: 분비나무 도목 위 우산이끼, 구름버섯 및 어린 단풍나무 실생묘 관찰',
    likes: 52,
    comments: [],
  },
  {
    id: 'forest-3',
    categoryId: 'forest',
    catalogueNo: 'ARC-04-03',
    title: '우듬지 사이로 올려다본 하늘의 조각, 나무들이 서로 비켜선 자리',
    subtitle: '바람에 흔들려도 서로의 가지를 꺾지 않기 위해 일정한 간격을 남겨두는 수관 기피 현상',
    date: '2026. 09. 18',
    readTime: '5분 읽기',
    location: '남해 편백나무 숲',
    imageUrl: ARTWORK_PLATES.forest_3,
    imageAlt: '숲바닥에서 하늘을 올려다본 시점으로, 나무 우듬지들이 서로 닿지 않게 강줄기 모양의 하늘 틈을 남겨둔 풍경',
    figureCaption: 'Fig. 4.3 — 수관 기피(Crown Shyness)가 만들어낸 하늘의 강줄기 무늬',
    pullQuote: '가장 빽빽한 숲에서도 나무들은 서로의 끝을 침범하지 않는다. 그 비워둔 틈으로 바람과 빛이 흐른다.',
    content: [
      '키 큰 나무들이 빽빽하게 들어찬 숲 한가운데에 누워 하늘을 올려다보면 놀라운 기하학 무늬를 발견하게 된다. 무성한 나뭇가지들이 하늘을 빈틈없이 덮은 것 같지만, 실제로는 나무와 나무의 우듬지 사이에 마치 퍼즐 조각처럼 일정한 틈이 비워져 있다.',
      '식물학자들이 수관 기피(Crown Shyness)라고 부르는 이 현상은, 거센 바람에 나무들이 흔들릴 때 서로의 여린 새순이 부딪혀 상처 입지 않도록 스스로 성장을 멈추고 자리를 비켜주면서 만들어진다.',
      '가까이 있으면서도 서로의 영역을 존중하는 나무들의 예의가 숲바닥까지 햇빛을 내려보내는 하늘의 강줄기를 만든다. 사람과 사람 사이의 가장 아름다운 거리 또한 이 우듬지의 틈을 닮아야 하지 않을까.',
    ],
    specimenNote: '채집 노트: 수고 22m 편백나무 군락의 수관 간 평균 이격 거리(35~50cm) 촬영',
    likes: 61,
    comments: [],
  },
  {
    id: 'forest-4',
    categoryId: 'forest',
    catalogueNo: 'ARC-04-04',
    title: '소나기가 지나간 뒤 전나무 숲바닥에서 피어오르는 흙내음의 지도',
    subtitle: '마른 낙엽과 솔방울, 바위와 흙이 빗방울을 맞이하며 공기 중에 띄워 보내는 페트리코르의 기억',
    date: '2026. 09. 11',
    readTime: '5분 읽기',
    location: '광릉수목원 전나무 숲길',
    imageUrl: ARTWORK_PLATES.forest_4,
    imageAlt: '소나기가 지나간 뒤 겹겹의 전나무 숲 능선 사이로 하얀 물안개가 피어오르는 고요한 풍경',
    figureCaption: 'Fig. 4.4 — 강우 직후 침엽수림 능선을 따라 피어오르는 지면 수증기와 운무',
    pullQuote: '숲의 형상은 눈으로만 보는 것이 아니다. 비가 그친 뒤 눈을 감으면 냄새로 그려지는 더 깊은 숲이 있다.',
    content: [
      '후드득 나뭇잎을 두드리던 소나기가 거짓말처럼 그치면, 숲은 일제히 깊고 짙은 숨을 내쉬기 시작한다. 마른 흙과 바위 틈에 숨어 있던 기름기가 빗방울과 만나 공기 중으로 터져 나오며 만드는 냄새, 그리스어로 돌의 피라는 뜻을 가진 페트리코르(Petrichor)다.',
      '전나무 잎 끝에서 마지막 물방울이 떨어질 때마다 솔향기와 젖은 부엽토의 묵직한 향기가 겹겹이 번져 나간다. 능선 너머로는 땅의 열기를 머금은 하얀 물안개가 천천히 허리를 감으며 올라온다.',
      '이야기상점의 마지막 서랍에는 언제나 이 비 개인 숲의 공기를 담아두고 싶다. 지친 하루 끝에 이곳을 찾은 누군가가 문장 사이에서 젖은 숲의 숨결을 한 모금 들이켤 수 있도록.',
    ],
    specimenNote: '채집 노트: 강우 15mm 직후 전나무 숲 지면 안개 형성 및 방향성 테르펜 농도 기록',
    likes: 46,
    comments: [],
  },
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 'gb-1',
    visitorName: '산책자 윤슬',
    date: '2026. 10. 07',
    message: '경계에사는것들과 숲의형상 이야기를 읽으며 오랜만에 마음이 고요해졌습니다. 정성스런 글과 그림 감사합니다.',
    favoriteCategory: '경계에사는것들',
  },
  {
    id: 'gb-2',
    visitorName: '기록자 서진',
    date: '2026. 10. 06',
    message: '달빛나방과 수리부엉이 이야기가 참 깊네요. 밤마다 한 편씩 꺼내 읽고 싶은 보물 같은 이야기상점입니다.',
    favoriteCategory: '날개달린것들',
  },
  {
    id: 'gb-3',
    visitorName: '식물채집가 다온',
    date: '2026. 10. 04',
    message: '뿌리와가시 카테고리의 문장들이 오늘 저에게 큰 위로가 되었어요. 자주 들러서 책갈피를 꽂아둘게요.',
    favoriteCategory: '뿌리와가시',
  },
];
