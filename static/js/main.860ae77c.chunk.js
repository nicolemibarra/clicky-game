(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://media.giphy.com/media/RVW5PilbP2tLG/giphy.gif",clicked:!1},{id:2,image:"https://media.giphy.com/media/SWPwSP6poA1nG/giphy.gif",clicked:!1},{id:3,image:"https://media.giphy.com/media/SGkufeMafyuBhIw796/giphy.gif",clicked:!1},{id:4,image:"https://media.giphy.com/media/UUVqDm2xhyU36/giphy.gif",clicked:!1},{id:5,image:"https://media.giphy.com/media/3jArsPD9RBcDm/giphy.gif",clicked:!1},{id:6,image:"https://media.giphy.com/media/P5pYTvsahFKSI/giphy.gif",clicked:!1},{id:7,image:"https://media.giphy.com/media/j6wiwGBfbh3QT4W5a1/giphy.gif",clicked:!1},{id:8,image:"https://media.giphy.com/media/dUHcuN7wMNAdL97XqN/giphy.gif",clicked:!1},{id:9,image:"https://media.giphy.com/media/S5WjbuowTdLLAiZsd5/giphy.gif",clicked:!1},{id:10,image:"https://media.giphy.com/media/up34B0awEJuVy/giphy.gif",clicked:!1},{id:11,image:"https://media.giphy.com/media/Vz7F6WNZqwXV6/giphy.gif",clicked:!1},{id:12,image:"https://media.giphy.com/media/LS2bRj7klKPjG2Ffx4/giphy.gif",clicked:!1}]},,,,,,,,function(e,t,i){e.exports=i(21)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),c=i(3),r=i.n(c),l=i(4),d=i(5),o=i(7),m=i(6),h=i(8),s=(i(15),function(e){return a.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),u=(i(16),function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/clicky-game/"},e.title)),a.a.createElement("li",{id:"rw"},e.rightWrong),a.a.createElement("li",{id:"cur-sco"},"Your Score: ",e.score),a.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),g=(i(17),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),f=(i(18),function(e){return a.a.createElement("h1",{className:"title"},e.children)}),p=function(e){return a.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},y=function(e){return a.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},k=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return a.a.createElement("div",{className:t},e.children)},S=i(1);i(19);var E=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(i=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={friends:S,currentScore:0,topScore:0,rightWrong:"",clicked:[]},i.handleClick=function(e){-1===i.state.clicked.indexOf(e)?(i.handleIncrement(),i.setState({clicked:i.state.clicked.concat(e)})):i.handleReset()},i.handleIncrement=function(){var e=i.state.currentScore+1;i.setState({currentScore:e,rightWrong:""}),e>=i.state.topScore?i.setState({topScore:e}):12===e&&i.setState({rightWrong:"You guessed correctly!"}),i.handleShuffle()},i.handleReset=function(){i.setState({currentScore:0,topScore:i.state.topScore,rightWrong:"Try again!",clicked:[]}),i.handleShuffle()},i.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),n=[e[i],e[t]];e[t]=n[0],e[i]=n[1]}return e}(S);i.setState({friends:e})},i}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(g,null,a.a.createElement(u,{title:"Friends Clicky Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),a.a.createElement(f,null,"Click on a friend to earn points, but don't click on them more than once!"),a.a.createElement(p,null,a.a.createElement(y,null,this.state.friends.map(function(t){return a.a.createElement(k,{size:"md-3 sm-6"},a.a.createElement(s,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(n.Component);i(20);r.a.render(a.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.860ae77c.chunk.js.map