"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[363],{396:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(44).ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"382af3faf2ede55c6cdb889a6201c6ad"}}),i={getTrendMovies:function(){return r("trending/all/week")},searchMovie:function(e){return r("search/movie",{params:{query:e}})},getSingleMovie:function(e){return r("movie/".concat(e))},getMovieCast:function(e){return r("movie/".concat(e,"/credits"))},getMovieReviews:function(e){return r("movie/".concat(e,"/reviews"))}}},927:function(e,t,n){n(791);var r=n(470),i=n(731),u=n(184);t.Z=function(e){var t=e.items,n=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.title,a=e.name;return(0,u.jsx)("li",{children:(0,u.jsx)(i.OL,{to:"/movies/".concat(t.toString()),state:{from:n},children:null!==r&&void 0!==r?r:a})},t)}))})}},363:function(e,t,n){n.r(t);var r=n(885),i=n(791),u=n(731),a=n(396),c=n(927),o=n(725),s=n(184);t.default=function(){var e=(0,i.useState)([]),t=(0,r.Z)(e,2),n=t[0],v=t[1],l=(0,u.lr)(),f=(0,r.Z)(l,2),d=f[0],h=f[1],m=d.get("query");(0,i.useEffect)((function(){null!==m&&void 0!==m&&m.length?a.b.searchMovie(m).then((function(e){return v(e.data.results)})):v([])}),[m]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.x,{children:(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target[0].value;h(null!==t&&void 0!==t&&t.length?{query:t}:{})},children:[(0,s.jsx)("input",{type:"search",defaultValue:m}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})}),(0,s.jsx)(c.Z,{items:n})]})}},725:function(e,t,n){n.d(t,{x:function(){return u}});var r,i=n(168),u=n(444).ZP.div(r||(r=(0,i.Z)(["\n  padding: 20px 20px 0;\n"])))}}]);
//# sourceMappingURL=363.c77c61fd.chunk.js.map