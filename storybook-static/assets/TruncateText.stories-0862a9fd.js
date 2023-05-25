import{a as de,F as ce,j as S}from"./jsx-runtime-91a467a5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const ne=4,_=360,se="... more";function le(a,n=ne,i=_,s=se,f=void 0){let c=!1;const t=document.createElement("span");f&&Object.entries(f).forEach(([v,y])=>{t.style[v]=y}),t.style.zIndex="-1",t.style.visibility="hidden",t.style.position="absolute",t.style.top="0",t.style.left="0";const o=ue(a);document.body.appendChild(t);let r=0,E=n,e="",N="",l="";for(;E>0&&r<o.length;){for(e="",t.innerText="",E===1&&(e=s);t.clientWidth<i&&r<o.length;){if(N=e,o[r]===" ")e+=" ";else if(o[r]===`
`){e+=`
`,r++;break}else e+=o[r]+" ";if(t.innerText=e,t.clientWidth>=i){e=N,t.innerText=e;break}else if(r++,t.clientWidth===i)break}if(E===1){if(e=e.slice(s.length),t.innerText=e,e===`
`){for(;l.endsWith(`
`);)l=l.trimEnd();c=!0}else if(e.endsWith(`
`))c=!0;else if(r<=o.length-1){let v=r,y=e;const oe=()=>r<=o.length-1;for(;oe()&&t.clientWidth<=i&&o[r]!==`
`;)e+=o[r]+" ",t.innerText=e,r++;c=!(r>o.length-1)||t.clientWidth>i,c&&(e=y,r=v)}c&&(e=e.trimEnd())}l+=e,E--}return document.body.removeChild(t),{text:l,isTruncated:c}}function ue(a){let n=[],i="";for(let s of a.split(""))s===" "?i?(n.push(i),i=""):n.push(s):s===`
`?(i&&(n.push(i),i=""),n.push(s)):i+=s;return i&&(n.push(i),i=""),n}function I({children:a="",maxLines:n=ne,width:i=_,expandTextLabel:s,styles:f}){const{text:c,isTruncated:t}=le(a,n,i,s,f);return t?de(ce,{children:[c," ",S(me,{})]}):a}function me({label:a=se}){return S("span",{style:{whiteSpace:"nowrap"},children:a})}I.__docgenInfo={description:"",methods:[],displayName:"TruncateText",props:{children:{defaultValue:{value:"''",computed:!1},required:!1},maxLines:{defaultValue:{value:"4",computed:!1},required:!1},width:{defaultValue:{value:"360",computed:!1},required:!1}}};const _e={title:"TruncateText",component:I},d=a=>S("div",{style:{whiteSpace:"pre-wrap",border:"1px dotted gray",width:a.width||_},children:S(I,{width:a.width,...a})}),pe="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",u=d.bind({});u.args={children:"Lorem ipsum"};const m=d.bind({});m.args={children:pe};const ge="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",p=d.bind({});p.args={children:ge};const he="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",g=d.bind({});g.args={children:he};const Te=`Lorem  ipsum dolor  sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
`,h=d.bind({});h.args={children:Te};const we=`Lorem   ipsum dolor   sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
`,T=d.bind({});T.args={children:we};const xe=`Lorem ipsum dolor sit amet, consectetur adipisicing

elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
`,w=d.bind({});w.args={children:xe};const Le=`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 


labore et dolore magna aliqua ex ea commodo consequat. 
`,x=d.bind({});x.args={children:Le};const be=`Lorem ipsum dolor sit amet, consectetur adipisicing


elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ex ea commodo consequat. 
`,L=d.bind({});L.args={children:be};const fe=`Lorem ipsum dolor sit amet, consectetur
Lorem ipsum dolor sit amet, consectetur
Lorem ipsum dolor sit amet, consectetur
Lorem ipsum dolor sit amet, 
consectetur`,b=d.bind({});b.args={children:fe};var D,q,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(A=(q=u.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var F,W,U;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(U=(W=m.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var C,O,H;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(H=(O=p.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var R,k,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(V=(k=g.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var X,j,B;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(B=(j=h.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var P,M,G;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(G=(M=T.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var K,z,Y;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(Y=(z=w.parameters)==null?void 0:z.docs)==null?void 0:Y.source}}};var J,Q,Z;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(Z=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,te;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ie,re,ae;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <div style={{
  whiteSpace: 'pre-wrap',
  border: '1px dotted gray',
  width: args.width || DEFAULT_WIDTH
}}>
    <TruncateText width={args.width} {...args} />
  </div>`,...(ae=(re=b.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Ie=["NoTruncateOnSingleLine","TruncateOnOverflow","FitsFlushNoTruncate","SlightOverflow","ContainsDoublespace","ContainsTriplespace","ContainsLinebreak","TrailingNewlines","ConsecutiveLinebreaks","EndsOnNewlineWhileNextlineFits"];export{L as ConsecutiveLinebreaks,h as ContainsDoublespace,w as ContainsLinebreak,T as ContainsTriplespace,b as EndsOnNewlineWhileNextlineFits,p as FitsFlushNoTruncate,u as NoTruncateOnSingleLine,g as SlightOverflow,x as TrailingNewlines,m as TruncateOnOverflow,Ie as __namedExportsOrder,_e as default};
//# sourceMappingURL=TruncateText.stories-0862a9fd.js.map
