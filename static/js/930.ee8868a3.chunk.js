"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[930],{150:function(e,t,n){n.d(t,{Hq:function(){return p},xc:function(){return f},Y5:function(){return d},Hx:function(){return l},Tg:function(){return s}});var r=n(861),a=n(757),o=n.n(a),c=n(243),i=n.p+"static/media/no-foto.3f37e96d8d04d1e67452.jpg";c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"39f0108882e0b7a90d2772574acea0d6",include_adult:!1};var u="https://image.tmdb.org/t/p/w500",s=function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.Z.get("/trending/all/day?").then((function(e){return e.data.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:u+r}}))})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.Z.get("/search/movie?query=".concat(t)).then((function(e){return e.data.results.map((function(e){var t=e.id,n=e.title,r=e.poster_path;return{id:t,title:n,poster:u+r}}))})).catch((function(e){console.log(e.message)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){return c.Z.get("/movie/".concat(e,"?")).then((function(e){var t=e.data,n=t.id,r=t.poster_path,a=t.title,o=t.release_date,c=t.vote_average,i=t.overview,s=t.genres;return{id:n,poster:u+r,title:a,releaseYear:new Date(o).getFullYear(),userScore:Math.round(10*c),overview:i,genres:s}})).catch((function(e){console.log(e.message)}))},f=function(e){return c.Z.get("/movie/".concat(e,"/credits?")).then((function(e){return e.data.cast.map((function(e){var t=e.id,n=e.name,r=e.character,a=e.profile_path;return{id:t,name:n,character:r,photo:a?u+a:i}}))})).catch((function(e){console.log(e.message)}))},l=function(e){return c.Z.get("/movie/".concat(e,"/reviews?")).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))})).catch((function(e){console.log(e.message)}))}},779:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r,a=n(439),o=n(150),c=n(689),i=n(791),u=n(168),s=n(444).ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  flex-direction: column;\n  align-items: center;\n"]))),p=n(184),d=function(){var e=(0,c.UO)("movieId").movieId,t=(0,i.useState)([]),n=(0,a.Z)(t,2),r=n[0],u=n[1];return(0,i.useEffect)((function(){(0,o.Hx)(e).then(u)}),[e]),(0,p.jsx)(s,{children:r.length>0?(0,p.jsx)("ul",{children:r.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:n}),(0,p.jsx)("p",{children:r})]},t)}))}):(0,p.jsx)("p",{children:"We don`t have any reviews for this movie"})})}}}]);
//# sourceMappingURL=930.ee8868a3.chunk.js.map