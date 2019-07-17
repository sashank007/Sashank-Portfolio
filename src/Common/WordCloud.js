import React from "react";

const WordCloud = () => {
  return (
    <div>
      {/* // <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024px" height="768px" viewBox="0 0 1024 768">
    // <clipPath id="cp2">
    // <path d="M 0,0 L 1024,0 L1024,768 L 0,768 z M 0,0 L 1280,0 L 1280,960 L 0,960 z" fill-rule="evenodd">
    // </path>
    // </clipPath>
    // <g clip-path="url(#cp2)">
    // </g>
    // <rect x="0" y="0" width="1280" height="960" opacity="1" fill="#222" stroke="none">
    // </rect>
    // <text x="-319.93988037109375" y="9.2060514" style="font: normal 92.06051399999998px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="36.38755494071146" opacity="1" fill="#e80c7a" stroke="none" transform="translate(512, 382) rotate(-78.08497159706033)">problem-solver</text>
    // <text x="-268.98480224609375" y="7.978577879999996" style="font: normal 79.78577879999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="31.535880948616597" opacity="1" fill="#e80c7a" stroke="none" transform="translate(684, 450) rotate(-42.73383965341346)">communication</text>
    // <text x="-153.15188598632812" y="7.978577879999996" style="font: normal 79.78577879999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="31.535880948616597" opacity="1" fill="#ff530d" stroke="none" transform="translate(366, 332)">creative</text>
    // <text x="-133.61590576171875" y="7.978577879999996" style="font: normal 79.78577879999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="31.535880948616597" opacity="1" fill="#e80c7a" stroke="none" transform="translate(350, 408)">passion</text>
    // <text x="-92.05084228515625" y="7.978577879999996" style="font: normal 79.78577879999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="31.535880948616597" opacity="1" fill="#e82c0c" stroke="none" transform="translate(632, 356)">team</text>
    // <text x="-158.6423797607422" y="7.364841119999998" style="font: normal 73.6484112px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="29.11004395256917" opacity="1" fill="#f00" stroke="none" transform="translate(354, 268)">discipline</text>
    // <text x="-157.86392211914062" y="6.751104359999999" style="font: normal 67.5110436px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="26.684206956521738" opacity="1" fill="#e80c7a" stroke="none" transform="translate(306, 502)">inquisitive</text>
    // <text x="-174.4777069091797" y="6.751104359999999" style="font: normal 67.5110436px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="26.684206956521738" opacity="1" fill="#ff0dff" stroke="none" transform="translate(334, 206)">trustworth</text>
    // <text x="-176.7533416748047" y="6.1373675999999975" style="font: normal 61.37367599999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="24.258369960474305" opacity="1" fill="#f00" stroke="none" transform="translate(638, 582) rotate(-35.986732637220754)">fast-learner</text>
    // <text x="-120.18184661865234" y="5.523630839999999" style="font: normal 55.23630839999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="21.832532964426875" opacity="1" fill="#e82c0c" stroke="none" transform="translate(688, 284)">proactive</text>
    // <text x="-78.43574523925781" y="5.523630839999999" style="font: normal 55.23630839999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="21.832532964426875" opacity="1" fill="#ff0dff" stroke="none" transform="translate(374, 558) rotate(18.147572807504243)">caring</text>
    // <text x="-88.74788665771484" y="4.909894079999997" style="font: normal 49.098940799999994px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="19.406695968379445" opacity="1" fill="#ff530d" stroke="none" transform="translate(662, 226) rotate(-16.352986424295956)">flexible</text>
    // <text x="-183.6182861328125" y="4.296157319999999" style="font: normal 42.9615732px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="16.980858972332015" opacity="1" fill="#e82c0c" stroke="none" transform="translate(716, 146) rotate(45.39095176442993)">leadership-minded</text>
    // <text x="-137.5222930908203" y="4.296157319999999" style="font: normal 42.9615732px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="16.980858972332015" opacity="1" fill="#f00" stroke="none" transform="translate(410, 154)">smart-worker</text>
    // <text x="-58.47509002685547" y="3.682420559999999" style="font: normal 36.8242056px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="14.555021976284586" opacity="1" fill="#e82c0c" stroke="none" transform="translate(604, 408)">ethical</text>
    // <text x="-47.705970764160156" y="3.682420559999999" style="font: normal 36.8242056px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="14.555021976284586" opacity="1" fill="#ff0dff" stroke="none" transform="translate(586, 444)">sharp</text>
    // <text x="-30.38037872314453" y="3.0686837999999987" style="font: normal 30.686837999999995px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="12.129184980237152" opacity="1" fill="#e82c0c" stroke="none" transform="translate(462, 380)">bold</text>
    // <text x="-117.19964599609375" y="3.0686837999999987" style="font: normal 30.686837999999995px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="12.129184980237152" opacity="1" fill="#e80c7a" stroke="none" transform="translate(364, 460)">multidimensional</text>
    // <text x="-51.596290588378906" y="2.4549470399999986" style="font: normal 24.549470399999997px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="9.703347984189723" opacity="1" fill="#ff530d" stroke="none" transform="translate(618, 326)">unselfish</text>
    // <text x="-45.77281951904297" y="2.4549470399999986" style="font: normal 24.549470399999997px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="9.703347984189723" opacity="1" fill="#ff0dff" stroke="none" transform="translate(546, 502) rotate(-65.13040299847418)">decisive</text>
    // <text x="-39.70973205566406" y="2.4549470399999986" style="font: normal 24.549470399999997px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="9.703347984189723" opacity="1" fill="#ff0dff" stroke="none" transform="translate(612, 182) rotate(-86.36678499125618)">helpful</text>
    // <text x="-19.62353515625" y="1.8412102799999994" style="font: normal 18.4121028px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="7.277510988142293" opacity="1" fill="#f00" stroke="none" transform="translate(414, 372) rotate(35.689393676733765)">open</text>
    // <text x="-49.854393005371094" y="1.8412102799999994" style="font: normal 18.4121028px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="7.277510988142293" opacity="1" fill="#e80c7a" stroke="none" transform="translate(332, 376) rotate(2.9451036544336873)">hardworker</text>
    // <text x="-45.256370544433594" y="1.8412102799999994" style="font: normal 18.4121028px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="7.277510988142293" opacity="1" fill="#e80c7a" stroke="none" transform="translate(392, 440)">meticulous</text>
    // <text x="-32.30286407470703" y="1.8412102799999994" style="font: normal 18.4121028px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="7.277510988142293" opacity="1" fill="#ff530d" stroke="none" transform="translate(476, 308)">reliable</text>
    // <text x="-17.826828002929688" y="1.2274735199999993" style="font: normal 12.274735199999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="4.851673992094861" opacity="1" fill="#ff0dff" stroke="none" transform="translate(592, 466) rotate(-9.303752027700693)">driven</text>
    // <text x="-11.847602844238281" y="1.2274735199999993" style="font: normal 12.274735199999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="4.851673992094861" opacity="1" fill="#e80c7a" stroke="none" transform="translate(534, 388)">kind</text>
    // <text x="-46.72239685058594" y="1.2274735199999993" style="font: normal 12.274735199999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="4.851673992094861" opacity="1" fill="#e82c0c" stroke="none" transform="translate(612, 432)">forward-thinker</text>
    // <text x="-26.93645477294922" y="1.2274735199999993" style="font: normal 12.274735199999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="4.851673992094861" opacity="1" fill="#e82c0c" stroke="none" transform="translate(600, 480)">impactful</text>
    // <text x="-44.48467254638672" y="1.2274735199999993" style="font: normal 12.274735199999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="4.851673992094861" opacity="1" fill="#e80c7a" stroke="none" transform="translate(478, 248)">barrier-braking</text>
    // <text x="-23.877952575683594" y="1.2274735199999993" style="font: normal 12.274735199999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="4.851673992094861" opacity="1" fill="#e82c0c" stroke="none" transform="translate(486, 504)">resilient</text>
    // <text x="-25.732223510742188" y="1.2274735199999993" style="font: normal 12.274735199999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="4.851673992094861" opacity="1" fill="#ff530d" stroke="none" transform="translate(616, 308)">stubborn</text>
    // <text x="-17.93499755859375" y="0.6137367599999997" style="font: normal 6.137367599999999px 'Comic Sans MS',cursive,sans-serif" text-anchor="start" dy="2.4258369960474306" opacity="1" fill="#ff0dff" stroke="none" transform="translate(526, 482)">open-minded</text>
    // </svg> */}
      //{" "}
    </div>
  );
};

export default WordCloud;
