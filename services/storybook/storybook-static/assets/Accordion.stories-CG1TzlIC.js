import{r as s,R as u}from"./index-BpYrhlGc.js";import{c as T,a as x}from"./index-O5wUIaOm.js";import{j as p}from"./jsx-runtime-WdPq8kIh.js";import{s as A,T as h}from"./index-Cj-HUNvr.js";/* empty css              */var k=s.createContext({activeItems:[],setActiveItem:()=>{}}),S=()=>s.useContext(k),w=k,z="_1it84nu3 _1it84nu0",R="_1it84nu2 _1it84nu0",C="_1it84nu5 _1it84nu0",D="_1it84nu0",$="var(--_1it84nu4)",H=(n,o)=>{let{children:t,defaultActiveItems:i=[],className:c,...l}=n,[a,e]=s.useState(i),m=f=>{a.includes(f)?e(a.filter(d=>d!==f)):e([...a,f])};return p.jsx(w.Provider,{value:{activeItems:a,setActiveItem:m},children:p.jsx("div",{...l,ref:o,className:T([D,c]),children:t})})},j=s.forwardRef(H),B=(n,o)=>{let{itemName:t,children:i,className:c,...l}=n,a=s.Children.toArray(i).map(e=>{if(s.isValidElement(e))return s.cloneElement(e,{...e.props,itemName:t})});return p.jsx("div",{...l,ref:o,className:x([c,R]),children:a})},b=s.forwardRef(B);function L(n){var o=n.match(/^var\((.*)\)$/);return o?o[1]:n}function O(n,o){var t={};{var i=n;for(var c in i){var l=i[c];l!=null&&(t[L(c)]=l)}}return Object.defineProperty(t,"toString",{value:function(){return Object.keys(this).map(a=>"".concat(a,":").concat(this[a])).join(";")},writable:!1}),t}var F=(n,o)=>{var t;let{itemName:i="",children:c,className:l,style:a,...e}=n,m=s.useRef(null),{activeItems:f}=S(),d=f.includes(i),[r,y]=s.useState();return s.useEffect(()=>{m.current&&y(d?`${m.current.clientHeight}px`:"0")},[d,f]),p.jsx("div",{...e,ref:o,className:x([C,l]),"data-action-item":d,style:{...O({[$]:r??`${(t=m.current)==null?void 0:t.clientHeight}px`}),...a},children:p.jsx("div",{"data-name":"panel-inner",ref:m,children:c})})},E=F,K=n=>{let{elementType:o="button",type:t="button",isDisabled:i,isLoading:c,tabIndex:l,onKeyDown:a}=n,e=i||c,m=r=>{if(a==null||a(r),r.key,r.key==="Spacebar"||r.key==="32"){if(e||r.defaultPrevented||o==="button")return;r.preventDefault(),r.currentTarget.click()}if(r.key==="Enter"||r.key==="13"){if(e||r.defaultPrevented||o==="input"&&t!=="button")return;r.preventDefault(),r.currentTarget.click();return}},f={...n,"data-loading":c,tabIndex:e?void 0:l??0,onKeyDown:m},d={};switch(o){case"button":{d={type:t??"button",disabled:e};break}case"a":{let{href:r,target:y,rel:P}=n;d={role:"button",href:e?void 0:r,target:e?void 0:y,rel:e?void 0:P,"area-disabled":i};break}case"input":{d={role:"button",type:n.type,disabled:e,"area-disabled":void 0};break}default:{d={role:"button",type:t??"button","area-disabled":i};break}}return{buttonProps:{...f,...d}}},U=(n,o)=>{let{className:t,itemName:i="",onClick:c,children:l,...a}=n,{setActiveItem:e}=S(),m=s.useCallback(d=>{e(i),c==null||c(d)},[i,c,e]),{buttonProps:f}=K({...a,onClick:m,elementType:"button"});return p.jsx("button",{...f,ref:o,className:x([z,t]),children:l})},g=s.forwardRef(U);j.__docgenInfo={description:"",methods:[],displayName:"L"};g.__docgenInfo={description:"",methods:[],displayName:"U"};b.__docgenInfo={description:"",methods:[],displayName:"$"};const M={title:"React Components/Accordion",parameters:{layout:"centered"}},v={render:()=>u.createElement(j,{defaultActiveItems:["목록1"],style:{width:"500px"}},u.createElement(b,{itemName:"목록1"},u.createElement(g,null,u.createElement(A,{color:"gray",fontSize:"lg"},"목록 1")),u.createElement(E,null,u.createElement(h,{color:"gray",fontSize:"md"},"내용입니다."))),u.createElement(b,{itemName:"목록2"},u.createElement(g,null,u.createElement(A,{color:"gray",fontSize:"lg"},"목록 2")),u.createElement(E,null,u.createElement(h,{color:"gray",fontSize:"md"},"내용입니다.",u.createElement("br",null),"내용입니다."))))};var I,N,_;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    return <Accordion defaultActiveItems={["목록1"]} style={{
      width: "500px"
    }}>
        <AccordionItem itemName="목록1">
          <AccordionButton>
            <Heading color="gray" fontSize="lg">
              목록 1
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <Text color="gray" fontSize="md">
              내용입니다.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem itemName="목록2">
          <AccordionButton>
            <Heading color="gray" fontSize="lg">
              목록 2
            </Heading>
          </AccordionButton>
          <AccordionPanel>
            <Text color="gray" fontSize="md">
              내용입니다.
              <br />
              내용입니다.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>;
  }
}`,...(_=(N=v.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const W=["DefaultAccordion"];export{v as DefaultAccordion,W as __namedExportsOrder,M as default};
