// import { useState } from "react";


// type Logo = {
//   name: string;
//   normal: string;
//   hover: string;
// };

// const logos: Logo[] = [
//   { name: "HTML5", normal: "../assets/icon/html-icon.svg", hover: "../assets/icon/html-icon-hover.svg" },
//   { name: "CSS3", normal: "../assets/icon/css-icon.svg", hover: "../assets/icon/css-icon-hover.svg" },
//   { name: "JavaScript", normal: "../assets/icon/javascript-icon.svg", hover: "../assets/icon/javascript-icon-hover.svg" },
//   // ...adiciona os outros 12 aqui
// ];

// export default function SkillCards() {
//   const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

//   return (
//     <div className="flex flex-wrap gap-6">
//       {logos.map((logo) => (
//         <img
//           key={logo.name}
//           src={'../assets/icon/javascript-icon.svg'}
//           alt={logo.name}
//           className="w-20 h-20 transition-all"
//         // onMouseEnter={() => setHoveredLogo(logo.name)}
//         // onMouseLeave={() => setHoveredLogo(null)}
//         />
//       ))}
//     </div>
//   );
// }
