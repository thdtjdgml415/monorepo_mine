import"./index-BpYrhlGc.js";const{useParameter:S,addons:p,useEffect:g,useMemo:N}=__STORYBOOK_MODULE_PREVIEW_API__;var R=Object.defineProperty,O=(e,t)=>{for(var r in t)R(e,r,{get:t[r],enumerable:!0})},v={};O(v,{initializeThemeState:()=>_,pluckThemeFromContext:()=>c,useThemeParameters:()=>T});var h="themes",A=`storybook/${h}`,M="theme",k={},L={REGISTER_THEMES:`${A}/REGISTER_THEMES`};function c({globals:e}){return e[M]||""}function T(){return S(h,k)}function _(e,t){p.getChannel().emit(L.REGISTER_THEMES,{defaultTheme:t,themes:e})}var P="html",E=e=>e.split(" ").filter(Boolean),D=({themes:e,defaultTheme:t,parentSelector:r=P})=>(_(Object.keys(e),t),(f,u)=>{let{themeOverride:s}=T(),l=c(u);return g(()=>{let o=s||l||t,a=document.querySelector(r);if(!a)return;Object.entries(e).filter(([i])=>i!==o).forEach(([i,d])=>{let n=E(d);n.length>0&&a.classList.remove(...n)});let m=E(e[o]);m.length>0&&a.classList.add(...m)},[s,l]),f()});const b={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},themes:{default:"light",list:[{name:"light",class:"theme-light",color:"#ffffff"},{name:"dark",class:"theme-dark",color:"#000000"}]}},decorators:[D({themes:{light:"theme-light",dark:"theme-dark"},defaultTheme:"light"})]};export{b as default};
