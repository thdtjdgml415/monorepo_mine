import{r as h,R as k}from"./index-BpYrhlGc.js";import{l as p,c as _}from"./index-O5wUIaOm.js";import{j as g}from"./jsx-runtime-WdPq8kIh.js";import{T as L}from"./index-Cj-HUNvr.js";var R=e=>{let{elementType:t="button",isDisabled:r,isLoading:n,tabIndex:a,onKeyDown:i,type:l="button"}=e,s=r||n,c=o=>{if(i==null||i(o),o.key===" "||o.key==="Spacebar"||o.key==="32"){if(s||o.defaultPrevented||t==="button")return;o.preventDefault(),o.currentTarget.click();return}if(o.key==="Enter"||o.key==="13"){if(s||o.defaultPrevented||t==="input"&&l!=="button")return;o.preventDefault(),o.currentTarget.click();return}},d={...e,"data-loading":n,tabIndex:s?void 0:a??0,onKeyDown:c},u={};switch(t){case"button":{u={type:l??"button",disabled:s};break}case"a":{let{href:o,target:b,rel:f}=e;u={role:"button",href:s?void 0:o,target:s?void 0:b,rel:s?void 0:f,"area-disabled":r};break}case"input":{u={role:"button",type:e.type,disabled:s,"area-disabled":void 0};break}default:{u={role:"button",type:l??"button","area-disabled":r};break}}return{buttonProps:{...d,...u}}};function K(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function F(e,t){var r={};{var n=e;for(var a in n){var i=n[a];i!=null&&(r[K(a)]=i)}}return Object.defineProperty(r,"toString",{value:function(){return Object.keys(this).map(l=>"".concat(l,":").concat(this[l])).join(";")},writable:!1}),r}function A(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function q(e){var t=A(e,"string");return typeof t=="symbol"?t:String(t)}function G(e,t,r){return t=q(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(n){G(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function T(e,t){var r={};for(var n in e)r[n]=t(e[n],n);return r}var H=(e,t,r)=>{for(var n of Object.keys(e)){var a;if(e[n]!==((a=t[n])!==null&&a!==void 0?a:r[n]))return!1}return!0},S=e=>{var t=r=>{var n=e.defaultClassName,a=O(O({},e.defaultVariants),r);for(var i in a){var l,s=(l=a[i])!==null&&l!==void 0?l:e.defaultVariants[i];if(s!=null){var c=s;typeof c=="boolean"&&(c=c===!0?"true":"false");var d=e.variantClassNames[i][c];d&&(n+=" "+d)}}for(var[u,o]of e.compoundVariants)H(u,a,e.defaultVariants)&&(n+=" "+o);return n};return t.variants=()=>Object.keys(e.variantClassNames),t.classNames={get base(){return e.defaultClassName.split(" ")[0]},get variants(){return T(e.variantClassNames,r=>T(r,n=>n.split(" ")[0]))}},t},J="var(--rg26h92)",M=S({defaultClassName:"rg26h93",variantClassNames:{size:{xs:"rg26h94",sm:"rg26h95",md:"rg26h96",lg:"rg26h97"},variant:{solid:"rg26h98",outline:"rg26h99",ghost:"rg26h9a"}},defaultVariants:{},compoundVariants:[]}),Q="var(--rg26h90)",U="var(--rg26h91)",C=S({defaultClassName:"rg26h9b",variantClassNames:{size:{xs:"rg26h9c",sm:"rg26h9d",md:"rg26h9e",lg:"rg26h9f"}},defaultVariants:{},compoundVariants:[]}),W=S({defaultClassName:"rg26h9h",variantClassNames:{size:{xs:"rg26h9i",sm:"rg26h9j",md:"rg26h9k",lg:"rg26h9l"}},defaultVariants:{},compoundVariants:[]}),X=(e,t)=>{let{buttonProps:r}=R(e),{variant:n="solid",size:a="md",color:i="gray",children:l,style:s,rightIcon:c,leftIcon:d,isLoading:u}=e,o=p.colors.$scale[i][500],b=n==="solid"?p.colors.$scale[i][600]:p.colors.$scale[i][50],f=n==="solid"?p.colors.$scale[i][700]:p.colors.$scale[i][100];return g.jsxs("button",{...r,role:"button","data-loading":u,ref:t,className:_([M({size:a,variant:n})]),style:{...F({[Q]:o,[U]:b,[J]:f}),...s},children:[u&&g.jsx("div",{className:W({size:a})}),d&&g.jsx("span",{className:C({size:a}),children:d}),g.jsx("span",{children:l}),c&&g.jsx("span",{className:C({size:a}),children:c})]})},j=h.forwardRef(X);j.__docgenInfo={description:"",methods:[],displayName:"F"};var P=e=>{let{elementType:t="button",isDisabled:r,isLoading:n,tabIndex:a,onKeyDown:i,type:l="button"}=e,s=r||n,c=o=>{if(i==null||i(o),o.key===" "||o.key==="Spacebar"||o.key==="32"){if(s||o.defaultPrevented||t==="button")return;o.preventDefault(),o.currentTarget.click();return}if(o.key==="Enter"||o.key==="13"){if(s||o.defaultPrevented||t==="input"&&l!=="button")return;o.preventDefault(),o.currentTarget.click();return}},d={...e,"data-loading":n,tabIndex:s?void 0:a??0,onKeyDown:c},u={};switch(t){case"button":{u={type:l??"button",disabled:s};break}case"a":{let{href:o,target:b,rel:f}=e;u={role:"button",href:s?void 0:o,target:s?void 0:b,rel:s?void 0:f,"area-disabled":r};break}case"input":{u={role:"button",type:e.type,disabled:s,"area-disabled":void 0};break}default:{u={role:"button",type:l??"button","area-disabled":r};break}}return{buttonProps:{...d,...u}}},Y=({isSelected:e=!1})=>{let[t,r]=h.useState(e),n=h.useCallback(()=>{r(a=>!a)},[]);return{isSelected:t,setSelected:r,toggle:n}},Z=(e,t)=>{let{isSelected:r,toggle:n}=Y({isSelected:t}),a=l=>{var s;n(),(s=e==null?void 0:e.onClick)==null||s.call(e,l)},{buttonProps:i}=P({...e,onClick:a});return{buttonProps:i,isSelected:r}};const oe={title:"React Components/Button/button",component:j,parameters:{layout:"centered"},argTypes:{size:{options:["xs","sm","md","lg"],control:"select"},color:{options:Object.keys(p.colors.$scale),control:"select"},variant:{options:["solid","outline","ghost"],control:"select"}},decorators:[e=>{const t=P({elementType:"div",onClick:()=>{console.log("tttt")}});return k.createElement(e,{args:t})}],tags:["autodocs"]},v={args:{size:"lg",children:"Button",variant:"outline",isDisabled:!1,color:"gray",leftIcon:"🤫",rightIcon:"🫥",isLoading:!1}},m={render:()=>{const{buttonProps:e}=P({elementType:"div",onClick:()=>{console.log("tttt")}});return k.createElement(L,{...e,as:"div",fontSize:"md",color:"green",style:{userSelect:"none",cursor:"pointer"}},"텍스트 버튼 입니다.")}},y={render:()=>{const{buttonProps:e,isSelected:t}=Z({elementType:"div"},!1);return k.createElement(j,{...e,variant:t?"solid":"outline",color:"green"},t?"😀":"😂")}};var N,w,D;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    color: "gray",
    leftIcon: "🤫",
    rightIcon: "🫥",
    isLoading: false
  }
}`,...(D=(w=v.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var z,B,E;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      buttonProps
    } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("tttt");
      }
    });
    return <Text {...buttonProps} as="div" fontSize={"md"} color="green" style={{
      userSelect: "none",
      cursor: "pointer"
    }}>
        텍스트 버튼 입니다.
      </Text>;
  }
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var I,V,$;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      buttonProps,
      isSelected
    } = useToggleButton({
      elementType: "div"
    }, false);
    return <_Button {...buttonProps} variant={isSelected ? "solid" : "outline"} color="green">
        {isSelected ? "😀" : "😂"}
      </_Button>;
  }
}`,...($=(V=y.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};const ae=["ButtonStory","TextButtonStory","ToggleButtonStory"];export{v as ButtonStory,m as TextButtonStory,y as ToggleButtonStory,ae as __namedExportsOrder,oe as default};
