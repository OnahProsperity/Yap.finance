(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[14],{818:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var r=n(31),c=n(55),a=(n(106),n(150)),i=n(226),s=function(){return Object(c.a)(a,Object(r.g)())},o=function(){return Object(c.a)(i,Object(r.h)())}},824:function(e,t,n){"use strict";var r=n(34),c=n(56),a=n(3),i=n.n(a),s=n(7),o=n(21),l=n(19),b=n(49),d=n(0),j=n(818),u=n(232),O=Object(j.a)(),f={isLoading:!0,nfts:{}},x=function(e,t){switch(t.type){case"set_nfts":return Object(l.a)(Object(l.a)({},f),{},{isLoading:!1,nfts:t.data});case"reset":return Object(l.a)(Object(l.a)({},f),{},{isLoading:!1});default:return e}};t.a=function(){var e=Object(d.useReducer)(x,f),t=Object(o.a)(e,2),n=t[0],a=t[1],j=Object(b.j)().account;return Object(d.useEffect)((function(){j&&function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,b,d,f,x;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.methods.balanceOf(j).call();case 3:if(!((t=e.sent)>0)){e.next=16;break}for(n={},b=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,c,a,s,l,b,d,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=O.methods,r=n.tokenOfOwnerByIndex,c=n.getBunnyId,a=n.tokenURI,e.next=4,r(j,t).call();case 4:return s=e.sent,e.next=7,Object(u.a)([c(s).call,a(s).call]);case 7:return l=e.sent,b=Object(o.a)(l,2),d=b[0],f=b[1],e.abrupt("return",[Number(d),Number(s),f]);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),d=[],f=0;f<t;f++)d.push(b(f));return e.next=11,Promise.all(d);case 11:x=e.sent,n=x.reduce((function(e,t){if(!t)return e;var n=Object(o.a)(t,3),a=n[0],i=n[1],s=n[2];return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},a,{tokenUri:s,tokenIds:e[a]?[].concat(Object(c.a)(e[a].tokenIds),[i]):[i]}))}),{}),a({type:"set_nfts",data:n}),e.next=17;break;case 16:a({type:"reset"});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a({type:"reset"});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}()()}),[j,a]),n}},860:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,l,b,d,j,u,O,f,x,h,p,m,v=n(15),g=n(0),k=n(4),w=n(16),y=n(36),I=n(132),N=n(1),T=k.e.div(r||(r=Object(v.a)(["\n  border-top: 1px solid ",";\n  padding: 24px 0;\n"])),(function(e){return e.theme.colors.textSubtle})),z=k.e.div(c||(c=Object(v.a)(["\n  margin-bottom: 24px;\n"]))),C=k.e.div(a||(a=Object(v.a)(["\n  text-align: center;\n"]))),B=Object(k.e)(w.T)(i||(i=Object(v.a)(["\n  flex: 1;\n  padding: 0 8px;\n"]))),S=k.e.div(s||(s=Object(v.a)(["\n  align-items: start;\n  display: flex;\n  margin-bottom: 16px;\n"]))),F=function(){var e=Object(y.a)();return Object(N.jsxs)(T,{children:[Object(N.jsxs)(z,{children:[Object(N.jsx)(w.z,{id:"how-it-works",color:"secondary",size:"lg",mb:"16px",children:e(632,"How it works")}),Object(N.jsxs)(S,{children:[Object(N.jsx)(C,{children:Object(N.jsx)(w.b,{})}),Object(N.jsx)(B,{children:e(634,"Winners will be able to claim an NFT on this page once the claiming period starts.")})]}),Object(N.jsxs)(S,{children:[Object(N.jsx)(C,{children:Object(N.jsx)(w.b,{})}),Object(N.jsx)(B,{children:e(636,"If you\u2019re not selected, you won\u2019t be able to claim. Better luck next time!")})]}),Object(N.jsxs)(S,{children:[Object(N.jsx)(C,{children:Object(N.jsx)(w.b,{})}),Object(N.jsx)(B,{children:e(638,"Winners can trade in their NFTs for a CAKE value until the expiry date written below. If you don't trade in your NFT by then, don\u2019t worry: you\u2019ll still keep it in your wallet!")})]})]}),Object(N.jsxs)(z,{children:[Object(N.jsx)(w.z,{color:"secondary",size:"lg",mb:"16px",children:e(640,"How are winners selected?")}),Object(N.jsxs)(S,{children:[Object(N.jsx)(C,{children:Object(N.jsx)(w.b,{})}),Object(N.jsx)(B,{children:e(642,"Winners are selected at random! Good luck!")})]})]}),Object(N.jsx)("div",{children:Object(N.jsx)(w.h,{as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLSfToBNlovtMvTZFSwOhk0TBiDPMGasLxqG0RB-kJN85HR_avA/viewform",target:"_blank",rel:"noopener noreferrer",children:e(644,"Register for a chance to win")})})]})},A=n(166),W=n.n(A),L=n(221),P=n(3),R=n.n(P),E=n(7),_=n(21),D=n(60),U=k.e.div(o||(o=Object(v.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),G=k.e.div(l||(l=Object(v.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),H=k.e.img(b||(b=Object(v.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),J=function(e){var t=e.src,n=e.alt,r=e.originalLink,c=Object(N.jsx)(H,{src:t,alt:n});return Object(N.jsx)(G,{children:r?Object(N.jsx)("a",{href:r,target:"_blank",rel:"noreferrer noopener",children:c}):c})},K=n(19),M=n(49),Q=n(152),q=n(824),Z=n(31),V=n(818),X=n(45),Y=n(226),$=Object(Z.h)(),ee=Object(g.createContext)(null),te=function(e){var t=e.children,n=Object(g.useRef)(!0),r=Object(g.useState)({isInitialized:!1,hasClaimed:!1,startBlockNumber:0,endBlockNumber:0,balanceOf:0}),c=Object(_.a)(r,2),a=c[0],i=c[1],s=Object(M.j)().account,o=Object(Q.a)(),l=Object(q.a)().nfts,b=a.isInitialized;Object(g.useEffect)((function(){(function(){var e=Object(E.a)(R.a.mark((function e(){var t,n,r,c,a,s,o,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(X.a)(Y,[{address:$,name:"startBlockNumber"},{address:$,name:"endBlockNumber"}]);case 3:t=e.sent,n=Object(_.a)(t,2),r=n[0],c=n[1],a=Object(_.a)(r,1),s=a[0],o=Object(_.a)(c,1),l=o[0],i((function(e){return Object(K.a)(Object(K.a)({},e),{},{isInitialized:!0,startBlockNumber:s.toNumber(),endBlockNumber:l.toNumber()})})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error("an error occured",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[b,i]),Object(g.useEffect)((function(){s&&function(){var e=Object(E.a)(R.a.mark((function e(){var t,n,r,c,a,o,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(V.a)(),e.next=4,Object(X.a)(Y,[{address:$,name:"hasClaimed",params:[s]}]);case 4:return n=e.sent,r=Object(_.a)(n,1),c=r[0],e.next=9,t.methods.balanceOf(s).call();case 9:a=e.sent,o=Object(_.a)(c,1),l=o[0],i((function(e){return Object(K.a)(Object(K.a)({},e),{},{isInitialized:!0,hasClaimed:l,balanceOf:a})})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error("an error occured",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}()()}),[b,s,i]),Object(g.useEffect)((function(){return function(){n.current=!1}}),[n]);var d=o<=a.endBlockNumber;return Object(N.jsx)(ee.Provider,{value:Object(K.a)(Object(K.a)({},a),{},{nfts:l,canBurnNft:d,getTokenIds:function(e){var t;return null===(t=l[e])||void 0===t?void 0:t.tokenIds},reInitialize:function(){n.current&&i((function(e){return Object(K.a)(Object(K.a)({},e),{},{isInitialized:!1})}))}}),children:t})},ne=n(88),re=n.n(ne),ce=n(37),ae=Object(k.e)(w.T)(d||(d=Object(v.a)(["\n  font-weight: 600;\n"]))),ie=k.e.div(j||(j=Object(v.a)(["\n  margin-bottom: 16px;\n"]))),se=k.e.div(u||(u=Object(v.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),oe=k.e.label(O||(O=Object(v.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),le=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(g.useState)(!1),i=Object(_.a)(a,2),s=i[0],o=i[1],l=Object(g.useState)(""),b=Object(_.a)(l,2),d=b[0],j=b[1],u=Object(g.useState)(null),O=Object(_.a)(u,2),f=O[0],x=O[1],h=Object(y.a)(),p=Object(M.j)().account,m=Object(ce.g)(),v=function(){var e=Object(E.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,re.a.utils.isAddress(d)){e.next=6;break}x(h(999,"Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,m.methods.transferFrom(p,d,n[0]).send({from:p}).on("sending",(function(){o(!0)})).on("receipt",(function(){c(),r()})).on("error",(function(){console.error(f),x("Unable to transfer NFT"),o(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)(w.I,{title:h(999,"Transfer NFT"),onDismiss:c,children:[Object(N.jsxs)(ie,{children:[f&&Object(N.jsx)(w.T,{color:"failure",mb:"8px",children:f}),Object(N.jsxs)(U,{children:[Object(N.jsxs)(w.T,{children:[h(999,"Transferring"),":"]}),Object(N.jsx)(ae,{children:'1x "'.concat(t.name,'" NFT')})]}),Object(N.jsxs)(oe,{htmlFor:"transferAddress",children:[h(999,"Receiving address"),":"]}),Object(N.jsx)(w.C,{id:"transferAddress",name:"address",type:"text",placeholder:h(999,"Paste address"),value:d,onChange:function(e){var t=e.target.value;j(t)},isWarning:f,disabled:s})]}),Object(N.jsxs)(se,{children:[Object(N.jsx)(w.h,{fullWidth:!0,variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(N.jsx)(w.h,{fullWidth:!0,onClick:v,disabled:!p||s||!d,children:h(464,"Confirm")})]})]})},be=Object(k.e)(U)(f||(f=Object(v.a)(["\n  min-height: 28px;\n"]))),de=Object(k.e)(w.h).attrs({variant:"text",fullWidth:!0})(x||(x=Object(v.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),je=k.e.div(h||(h=Object(v.a)(["\n  padding: 24px;\n"]))),ue=function(e){var t,n=e.nft,r=Object(g.useState)(!1),c=Object(_.a)(r,2),a=c[0],i=c[1],s=Object(y.a)(),o=Object(g.useContext)(ee),l=o.isInitialized,b=o.getTokenIds,d=o.reInitialize,j=Object(D.i)().profile,u=n.bunnyId,O=n.name,f=n.images,x=n.description,h=b(u),p=h&&h.length>0,m=a?w.w:w.t,v=function(){var e=Object(E.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(!a);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=Object(w.db)(Object(N.jsx)(le,{nft:n,tokenIds:h,onSuccess:function(){d()}})),I=Object(_.a)(k,1)[0];return Object(N.jsxs)(w.l,{isActive:p,children:[Object(N.jsx)(J,{src:"/images/nfts/".concat(f.lg),alt:O,originalLink:p?f.ipfs:null}),Object(N.jsxs)(w.m,{children:[Object(N.jsxs)(be,{children:[Object(N.jsx)(w.z,{children:O}),l&&h&&Object(N.jsx)(w.S,{outline:!0,variant:"secondary",children:s(999,"In Wallet")}),(null===j||void 0===j||null===(t=j.nft)||void 0===t?void 0:t.bunnyId)===u&&Object(N.jsx)(w.S,{outline:!0,variant:"success",children:s(999,"Profile Pic")})]}),l&&p&&Object(N.jsx)(w.h,{fullWidth:!0,variant:"secondary",mt:"24px",onClick:I,children:s(999,"Transfer")})]}),Object(N.jsxs)(w.n,{p:"0",children:[Object(N.jsx)(de,{endIcon:Object(N.jsx)(m,{width:"24px",color:"primary"}),onClick:v,children:s(999,"Details")}),a&&Object(N.jsx)(je,{children:Object(N.jsx)(w.T,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:x})})]})]})},Oe=Object(k.e)(w.d)(p||(p=Object(v.a)(["\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  & > div {\n    grid-column: 2 / 6;\n\n    "," {\n      grid-column: span 4;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),fe=function(){return Object(N.jsx)(Oe,{children:W()(L.a,"sortOrder").map((function(e){return Object(N.jsx)("div",{children:Object(N.jsx)(ue,{nft:e})},e.name)}))})},xe=k.e.div(m||(m=Object(v.a)(["\n  border-bottom: 1px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(y.a)();return Object(N.jsx)(te,{children:Object(N.jsxs)(I.a,{children:[Object(N.jsxs)(xe,{children:[Object(N.jsx)(w.z,{as:"h1",size:"xxl",color:"secondary",mb:"24px",children:"NFTs"}),Object(N.jsx)(w.z,{as:"h2",size:"lg",color:"secondary",children:e(999,"Trade in for CAKE, or keep for your collection!")})]}),Object(N.jsx)(fe,{}),Object(N.jsx)(F,{})]})})}}}]);
//# sourceMappingURL=14.a671c8ff.chunk.js.map