(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(6133)}])},6133:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return f}});var i=e(5893),a=e(8265),r=e.n(a),u=function(n){let{onClick:t}=n;return(0,i.jsx)("button",{className:r().button,onClick:t,children:"Refresh"})};let s=async()=>{let n=await fetch("https://api.waifu.im/search"),t=await n.json();return t.images[0].url};var c=e(9447),o=e.n(c),_=function(n){let{url:t}=n;return(0,i.jsx)("div",{className:o().container,children:(0,i.jsx)("img",{className:o().image,src:t,alt:""})})},l=e(7294);function f(){let[n,t]=(0,l.useState)(""),e=async()=>{let n=await s();t(n)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(_,{url:n}),(0,i.jsx)(u,{onClick:e})]})}},9447:function(n){n.exports={container:"ImageContainer_container__zOOg5",image:"ImageContainer_image__oXXoM"}},8265:function(n){n.exports={button:"RefreshButton_button__iVY_4"}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);