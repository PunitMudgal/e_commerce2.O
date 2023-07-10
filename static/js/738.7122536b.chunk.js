"use strict";(self.webpackChunkecommerce_2=self.webpackChunkecommerce_2||[]).push([[738],{4784:function(e,t,r){r(2791);var s=r(184);t.Z=function(){return(0,s.jsxs)("div",{className:"bg-red-500 self-center text-white  text-center rounded-md border-2 border-red-700 py-10 px-6 md:py-6 md:px-4 box-shadow",children:[(0,s.jsx)("h1",{className:"text-2xl font-text2 capitalize",children:"There is an error while loading the data"}),(0,s.jsxs)("p",{className:"text-red-100 capitalize",children:["Please check your internet connecetion ",(0,s.jsx)("br",{}),"or Refresh the page to try again"]})]})}},2413:function(e,t,r){r.d(t,{Z:function(){return a}});r(2791);var s=r.p+"static/media/loding.4d1e7abfcae018db4bed.gif",n=r(184);var a=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"flex justify-center items-center w-full bg-transparent",children:(0,n.jsx)("img",{src:s,alt:"loading_cart"})})})}},3948:function(e,t,r){r.r(t);var s=r(2791),n=r(7689),a=r(1087),d=r(6735),i=r(8617),c=r(2413),l=r(4784),o=r(184);t.default=function(){var e=(0,d.fr)(),t=e.getSingleData,r=e.singleProduct,x=e.isSingleError,m=e.isSingleLoading,p=e.HandleAddToCart,h=(0,n.UO)().id;(0,s.useEffect)((function(){Number(h)<=20&&Number(h)>=1?t("".concat("https://fakestoreapi.com/products","/").concat(h)):t("".concat("https://api.pujakaitem.com/api/products","?id=").concat(h))}),[]);var f=r.name?r.image[0].url:r.image;return(0,o.jsxs)("div",{className:"bg-gray-100 min-h-screen",children:[(0,o.jsx)("h1",{className:"uppercase px-8 py-3 font-text3 font-bold text-gray-800 text-2xl md:text-xl",children:"Product Details"}),(0,o.jsxs)(a.rU,{to:"/",className:"flex  items-center font-text1 font-semibold px-8",children:[(0,o.jsx)(i.XJf,{})," Back To Products"]}),m?(0,o.jsx)(c.Z,{}):(0,o.jsxs)("div",{className:"flex md:flex-col gap-6 p-8 md:p-1 mx-40 md:mx-auto md:justify-center md:items-center font-text3 border box-shadow rounded-md",children:[" ",x?(0,o.jsx)(l.Z,{}):(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)("div",{className:"flex justify-center items-center bg-white border rounded-md border-gray-600 w-[30rem] h-[30rem] md:w-[17rem] md:h-[17rem] ",children:(0,o.jsx)("img",{className:"object-cover shadow-md rounded-lg w-[25rem] h-[25rem] md:w-[16rem] md:h-[16rem] ",src:f,alt:r.name||r.title})}),(0,o.jsxs)("div",{className:"flex flex-col flex-1 justify-around md:px-10 md:justify-center md:items-center",children:[(0,o.jsxs)("div",{className:"flex flex-col gap-3 md:gap-1",children:[" ",(0,o.jsx)("p",{className:"font-text2 font-bold text-xl uppercase",children:r.name||r.title}),(0,o.jsxs)("p",{className:"text-sm text- capitalize",children:[(0,o.jsx)("b",{children:"Brand:"})," ",(null===r||void 0===r?void 0:r.company)||"N/A"]}),(0,o.jsxs)("p",{className:"text-[#E74C3C] text-xl font-semibold",children:["$"," ",r.price>1200?r.price/100:r.price,"/- only"]})]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Rating:"})," ",void 0!==r.stars?r.stars:r.rating.rate,"/5"]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Review By:"})," ",void 0!==r.reviews?r.reviews:r.rating.count]}),(0,o.jsx)("p",{className:"font-text1 text-slate-600 text-lg md:text-md text-justify",children:r.description}),(0,o.jsx)("button",{className:"rounded-md shadow-md p-2 md:p-1 font-bold text-white bg-[#F39C12] hover:bg-[#CA6F1E]",onClick:function(){return p(h,r.title,r.name,f,r.price)},children:"Add To Cart"})]})," "]})]}),(0,o.jsx)("div",{children:(0,o.jsx)("h2",{className:"uppercase px-8 py-3 font-bold font-text3 text-2xl text-gray-800 md:text-xl",children:"Reviews & Ratings"})})]})}}}]);
//# sourceMappingURL=738.7122536b.chunk.js.map