(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[15],{819:function(e,n,t){"use strict";var i,c=t(15),r=t(4).e.div(i||(i=Object(c.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));n.a=r},830:function(e,n,t){"use strict";t(0);var i=t(16),c=t(60),r=t(36),s=t(819),a=t(52),l=t(1),o=function(){var e=Object(r.a)();return Object(l.jsx)(i.l,{mb:"32px",isActive:!0,children:Object(l.jsx)(i.m,{children:Object(l.jsxs)(i.y,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(i.z,{size:"lg",mb:"8px",children:e(999,"You haven't set up your profile yet!")}),Object(l.jsx)(i.T,{children:e(999,"You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(i.h,{as:a.b,to:"/profile",mt:["16px",null,0],children:e(999,"Set up now")})]})})})};n.a=function(){var e=Object(r.a)(),n=Object(c.i)(),t=n.isInitialized,a=n.profile,d=t&&!a;return Object(l.jsxs)(l.Fragment,{children:[d&&Object(l.jsx)(o,{}),Object(l.jsxs)(s.a,{children:[Object(l.jsx)(i.z,{as:"h1",size:"xxl",color:"secondary",children:e(999,"Teams & Profiles")}),Object(l.jsx)(i.T,{bold:!0,children:e(999,"Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}},861:function(e,n,t){"use strict";t.r(n);t(0);var i,c,r,s,a,l,o,d,j=t(16),x=t(166),b=t.n(x),u=t(60),p=t(132),h=t(36),m=t(15),O=t(4),f=t(52),g=t(1),y=O.e.div(i||(i=Object(m.a)(["\n  align-self: stretch;\n  background: ",";\n  flex: none;\n  padding: 16px 0;\n  text-align: center;\n  width: 56px;\n"])),(function(e){return function(e){return e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)"}(e.theme)})),v=O.e.div(c||(c=Object(m.a)(["\n  align-items: start;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: 24px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),w=O.e.div(r||(r=Object(m.a)(["\n  flex: 1;\n"]))),z=O.e.img(s||(s=Object(m.a)(["\n  border-radius: 50%;\n"]))),F=Object(O.e)(j.z).attrs({as:"h3"})(a||(a=Object(m.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),S=O.e.div(l||(l=Object(m.a)(["\n  flex: none;\n  margin-right: 8px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n\n  "," {\n    display: none;\n  }\n"])),z,(function(e){return e.theme.mediaQueries.md})),k=O.e.div(o||(o=Object(m.a)(["\n  display: none;\n\n  "," {\n    display: block;\n    margin-left: 24px;\n\n    "," {\n      height: 128px;\n      width: 128px;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),z),T=Object(O.e)(j.l)(d||(d=Object(m.a)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),D=function(e){var n=e.rank,t=e.team,i=Object(h.a)(),c=Object(g.jsx)(z,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"});return Object(g.jsxs)(T,{children:[Object(g.jsx)(y,{children:Object(g.jsx)(j.T,{bold:!0,fontSize:"24px",children:n})}),Object(g.jsxs)(v,{children:[Object(g.jsxs)(w,{children:[Object(g.jsxs)(j.y,{alignItems:"center",mb:"16px",children:[Object(g.jsx)(S,{children:c}),Object(g.jsx)(F,{children:t.name})]}),Object(g.jsx)(j.T,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:t.description}),Object(g.jsxs)(j.y,{children:[Object(g.jsxs)(j.y,{children:[Object(g.jsx)(j.M,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.T,{fontSize:"24px",bold:!0,children:t.points.toLocaleString()})]}),Object(g.jsxs)(j.y,{ml:"24px",children:[Object(g.jsx)(j.x,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(g.jsx)(j.T,{fontSize:"24px",bold:!0,children:t.users.toLocaleString()})]})]})]}),Object(g.jsx)(j.h,{as:f.b,to:"/teams/".concat(null===t||void 0===t?void 0:t.id),variant:"secondary",size:"sm",children:i(999,"See More")}),Object(g.jsx)(k,{children:c})]})]})},I=t(830);n.default=function(){var e=Object(h.a)(),n=Object(u.k)(),t=n.teams,i=n.isLoading,c=Object.values(t),r=b()(c,["points","id","name"],["desc","asc","asc"]);return Object(g.jsxs)(p.a,{children:[Object(g.jsx)(I.a,{}),Object(g.jsxs)(j.y,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(g.jsx)(j.z,{size:"xl",children:e(999,"Teams")}),i&&Object(g.jsx)(j.c,{spin:!0})]}),r.map((function(e,n){return Object(g.jsx)(D,{rank:n+1,team:e},e.id)}))]})}}}]);
//# sourceMappingURL=15.2d6bfcff.chunk.js.map