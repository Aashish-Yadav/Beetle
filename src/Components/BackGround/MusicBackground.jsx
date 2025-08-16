import React from 'react';
import './MusicBackground.css';

const MusicBackground = () => {
  return (
    <div className="music-background">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <feOffset dx="5" dy="5" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#9D00FF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#4B0082', stopOpacity: 0.6 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00F5FF', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#0A0F24', stopOpacity: 0.6 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF00A0', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#9D00FF', stopOpacity: 0.6 }} />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4B0082', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#00F5FF', stopOpacity: 0.6 }} />
          </linearGradient>
          <style>
            {`
              :root {
                --purple: #9D00FF;
                --navy: #0A0F24;
                --blue: #00F5FF;
                --pink: #FF00A0;
                --violet: #4B0082;
                --gray: #1E1E2F;
              }
              .background {
                fill: var(--gray);
              }
              .note {
                stroke: none;
                filter: url(#shadow);
              }
              .note1 { fill: url(#grad1); }
              .note2 { fill: url(#grad2); }
              .note3 { fill: url(#grad3); }
              .note4 { fill: url(#grad4); }
              @keyframes float1 {
                0% { transform: translate(0, 0); opacity: 0.5; }
                50% { opacity: 0.9; }
                100% { transform: translate(-1800px, -400px); opacity: 0.5; }
              }
              @keyframes float2 {
                0% { transform: translate(0, 0); opacity: 0.5; }
                50% { opacity: 0.9; }
                100% { transform: translate(-1600px, 300px); opacity: 0.5; }
              }
              @keyframes float3 {
                0% { transform: translate(0, 0); opacity: 0.5; }
                50% { opacity: 0.9; }
                100% { transform: translate(-1700px, -200px); opacity: 0.5; }
              }
              @keyframes float4 {
                0% { transform: translate(0, 0); opacity: 0.5; }
                50% { opacity: 0.9; }
                100% { transform: translate(-1500px, 250px); opacity: 0.5; }
              }
              @keyframes float5 {
                0% { transform: translate(0, 0); opacity: 0.5; }
                50% { opacity: 0.9; }
                100% { transform: translate(-1400px, -350px); opacity: 0.5; }
              }
              @keyframes float6 {
                0% { transform: translate(0, 0); opacity: 0.5; }
                50% { opacity: 0.9; }
                100% { transform: translate(-1900px, 200px); opacity: 0.5; }
              }
              .float1 { animation: float1 22s linear infinite; }
              .float2 { animation: float2 19s linear infinite; }
              .float3 { animation: float3 24s linear infinite; }
              .float4 { animation: float4 20s linear infinite; }
              .float5 { animation: float5 21s linear infinite; }
              .float6 { animation: float6 23s linear infinite; }
            `}
          </style>
        </defs>
        <rect className="background" width="100%" height="100%" />
        {/* Core Notes - Quarter Notes */}
        <path className="note note1 float1" d="M1500 200 Q1480 180 1500 160 V100 Q1500 80 1520 80 H1540 Q1560 80 1560 100 V160 Q1580 180 1560 200 Q1540 220 1500 200" />
        <path className="note note2 float2" d="M1700 400 Q1680 380 1700 360 V300 Q1700 280 1720 280 H1740 Q1760 280 1760 300 V360 Q1780 380 1760 400 Q1740 420 1700 400 M1760 360 L1800 300" />
        <circle className="note note3 float3" cx="1600" cy="600" r="20" />
        <circle className="note note4 float4" cx="1800" cy="800" r="20" />
        <path className="note note4 float4" d="M1800 800 V740 Q1800 720 1820 720 H1840 Q1860 720 1860 740" />

        {/* Extra Notes - Quarter Notes and Eighth Notes */}
        <circle className="note note1 float2" cx="1400" cy="300" r="15" />
        <circle className="note note2 float3" cx="1200" cy="500" r="18" />
        <circle className="note note3 float1" cx="1000" cy="700" r="12" />
        <path className="note note4 float2" d="M1300 400 V340 Q1300 320 1320 320 H1340 Q1360 320 136(nil)0 340" />
        <path className="note note1 float3" d="M1100 650 Q1080 630 1100 610 V550 Q1100 530 1120 530 H1140 Q1160 530 1160 550 V610 Q1180 630 1160 650 Q1140 670 1100 650" />
        <circle className="note note2 float4" cx="900" cy="850" r="20" />

        {/* More Scattered Notes - Eighth Notes and Beamed Notes */}
        <circle className="note note3 float1" cx="800" cy="200" r="10" />
        <circle className="note note4 float2" cx="700" cy="400" r="14" />
        <circle className="note note1 float3" cx="600" cy="600" r="16" />
        <circle className="note note2 float4" cx="500" cy="300" r="12" />
        <path className="note note3 float2" d="M750 500 V440 Q750 420 770 420 H790 Q810 420 810 440" />
        <path className="note note4 float1" d="M650 700 Q630 680 650 660 V600 Q650 580 670 580 H690 Q710 580 710 600 V660 Q730 680 710 700 Q690 720 650 700" />
        <circle className="note note1 float3" cx="400" cy="800" r="18" />
        <circle className="note note2 float2" cx="300" cy="500" r="15" />
        <circle className="note note3 float4" cx="200" cy="700" r="20" />
        <circle className="note note4 float1" cx="100" cy="300" r="12" />

        {/* Additional Notes - Beamed Eighth Notes and Rests */}
        <path className="note note1 float5" d="M1850 150 Q1830 130 1850 110 V50 Q1850 30 1870 30 H1890 Q1910 30 1910 50 V110 Q1930 130 1910 150 Q1890 170 1850 150 M1910 110 L1950 50 M1950 150 Q1930 130 1950 110 V50 Q1950 30 1970 30 H1990 Q2010 30 2010 50 V110 Q2030 130 2010 150 Q1990 170 1950 150 M2010 110 H1910" />
        <path className="note note2 float6" d="M50 950 Q30 930 50 910 V850 Q50 830 70 830 H90 Q110 830 110 850 V910 Q130 930 110 950 Q90 970 50 950" />
        <circle className="note note3 float5" cx="250" cy="100" r="15" />
        <circle className="note note4 float6" cx="350" cy="250" r="18" />
        <path className="note note1 float5" d="M450 350 V290 Q450 270 470 270 H490 Q510 270 510 290" />
        <path className="note note2 float6" d="M550 450 Q530 430 550 410 V350 Q550 330 570 330 H590 Q610 330 610 350 V410 Q630 430 610 450 Q590 470 550 450 M610 410 L650 350" />
        <circle className="note note3 float5" cx="1750" cy="900" r="16" />
        <circle className="note note4 float6" cx="1650" cy="100" r="12" />
        <path className="note note1 float5" d="M1550 300 Q1530 280 1550 260 V200 Q1550 180 1570 180 H1590 Q1610 180 1610 200 V260 Q1630 280 1610 300 Q1590 320 1550 300 M1610 260 L1650 200" />
        <circle className="note note2 float6" cx="1450" cy="950" r="20" />
        <path className="note note3 float5" d="M1350 150 Q1330 130 1350 110 V50 Q1350 30 1370 30 H1390 Q1410 30 1410 50 V110 Q1430 130 1410 150 Q1390 170 1350 150" />
        <circle className="note note4 float6" cx="1250" cy="250" r="14" />
        <path className="note note1 float5" d="M1150 400 V340 Q1150 320 1170 320 H1190 Q1210 320 1210 340" />
        <circle className="note note2 float6" cx="1050" cy="550" r="18" />
        <path className="note note3 float5" d="M950 700 Q930 680 950 660 V600 Q950 580 970 580 H990 Q1010 580 1010 600 V660 Q1030 680 1010 700 Q990 720 950 700" />
        <circle className="note note4 float6" cx="850" cy="850" r="15" />
        <path className="note note1 float5" d="M750 100 Q730 80 750 60 H810 Q830 80 810 100 Q790 120 750 100" />
        <path className="note note2 float6" d="M650 250 Q630 230 650 210 H710 Q730 230 710 250 Q690 270 650 250" />
        <path className="note note3 float5" d="M550 900 Q530 880 550 860 H610 Q630 880 610 900 Q590 920 550 900" />
        <path className="note note4 float6" d="M450 150 Q430 130 450 110 V50 Q450 30 470 30 H490 Q510 30 510 50 V110 Q530 130 510 150 Q490 170 450 150 M510 110 L550 50 M550 150 Q530 130 550 110 V50 Q550 30 570 30 H590 Q610 30 610 50 V110 Q630 130 610 150 Q590 170 550 150 M610 110 H510" />
      </svg>
    </div>
  );
};

export default MusicBackground;