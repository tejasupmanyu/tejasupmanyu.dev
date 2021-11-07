import styled from "@emotion/styled";

// export const HeaderContainer = styled.header`
//   width: 100%;
//   max-width: 1220px;
//   margin: 0 auto;
//   padding: 0 4rem;
// `;

// export const HeaderNav = styled.div`
//   position: relative;
//   z-index: 100;
//   padding-top: 72px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// export const HeaderActions = styled.div`
//   display: flex;
// `;

// export const LogoLink = styled.a`
//   cursor: pointer;
// `;

// export const ToolTip = styled.div<{ isDark: boolean; hasCopied: boolean }>`
//   position: absolute;
//   padding: 4px 13px;
//   background: ${(p) => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
//   color: ${(p) => (p.isDark ? "#fff" : "#000")};
//   border-radius: 5px;
//   font-size: 14px;
//   top: -35px;
//   opacity: ${(p) => (p.hasCopied ? 1 : 0)};
//   transform: ${(p) => (p.hasCopied ? "translateY(-3px)" : "none")};
//   transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
//   &::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: -6px;
//     margin: 0 auto;
//     width: 0;
//     height: 0;
//     border-left: 6px solid transparent;
//     border-right: 6px solid transparent;
//     border-top: 6px solid ${(p) => (p.isDark ? "#000" : "rgba(0,0,0,0.1)")};
//   }
// `;

export const IconWrapper = styled.button`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;
  background: transparent;
  border: none;

  &:hover {
    opacity: 1;
  }

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: 0;
    top: -30%;
    width: 100%;
    height: 160%;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`;

// // This is based off a codepen! Much appreciated to: https://codepen.io/aaroniker/pen/KGpXZo
// export const MoonOrSun = styled.div<{ isDark: boolean }>`
//   position: relative;
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   border: ${(p) => (p.isDark ? "4px" : "2px")} solid ${(p) => p.theme.primary};
//   background: ${(p) => p.theme.primary};
//   transform: scale(${(p) => (p.isDark ? 0.55 : 1)});
//   transition: all 0.45s ease;
//   overflow: ${(p) => (p.isDark ? "visible" : "hidden")};

//   &::before {
//     content: "";
//     position: absolute;
//     right: -9px;
//     top: -9px;
//     height: 24px;
//     width: 24px;
//     border: 2px solid ${(p) => p.theme.primary};
//     border-radius: 50%;
//     transform: translate(${(p) => (p.isDark ? "14px, -14px" : "0, 0")});
//     opacity: ${(p) => (p.isDark ? 0 : 1)};
//     transition: transform 0.45s ease;
//   }

//   &::after {
//     content: "";
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//     margin: -4px 0 0 -4px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     box-shadow: 0 -23px 0 ${(p) => p.theme.primary},
//       0 23px 0 ${(p) => p.theme.primary}, 23px 0 0 ${(p) => p.theme.primary},
//       -23px 0 0 ${(p) => p.theme.primary}, 15px 15px 0 ${(p) => p.theme.primary},
//       -15px 15px 0 ${(p) => p.theme.primary},
//       15px -15px 0 ${(p) => p.theme.primary},
//       -15px -15px 0 ${(p) => p.theme.primary};
//     transform: scale(${(p) => (p.isDark ? 1 : 0)});
//     transition: all 0.35s ease;
//   }
// `;

// export const MoonMask = styled.div<{ isDark: boolean }>`
//   position: absolute;
//   right: -1px;
//   top: -8px;
//   height: 24px;
//   width: 24px;
//   border-radius: 50%;
//   border: 0;
//   background: ${(p) => {
//     return p.theme.body;
//   }};
//   transform: translate(${(p) => (p.isDark ? "14px, -14px" : "0, 0")});
//   opacity: ${(p) => (p.isDark ? 0 : 1)};
// `;

// export const Hidden = styled.span`
//   position: absolute;
//   display: inline-block;
//   opacity: 0;
//   width: 0px;
//   height: 0px;
//   visibility: hidden;
//   overflow: hidden;
// `;
