(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Cpt. Picard","image":"https://www.writeups.org/wp-content/uploads/Captain-Jean-Luc-Picard-Star-Trek-Patrick-Stewart.jpg","occupation":"Captain","location":"Enterprise"},{"id":2,"name":"Lt. Laforg","image":"https://www.writeups.org/wp-content/uploads/Geordi-LaForge-Star-Trek-LeVar-Burton.jpg","occupation":"Chief Engineer","location":"Enterprise"},{"id":3,"name":"Lt. Worf","image":"https://www.writeups.org/wp-content/uploads/Worf-Star-Trek-Michael-Dorn-Klingon.jpg","occupation":"Chief Security Officer","location":"Enterprise"},{"id":4,"name":"Dr. Crusher","image":"https://www.writeups.org/wp-content/uploads/Beverly-Crusher-Star-Trek-Gates-McFadden.jpg","occupation":"Ships Dr","location":"Enterprise"},{"id":5,"name":"Ensign Wesley Crusher","image":"https://upload.wikimedia.org/wikipedia/en/e/e6/WesleyCrusher2366.jpg","occupation":"Helm","location":"Enterprise"},{"id":6,"name":"Chief O\'brian","image":"https://www.writeups.org/wp-content/uploads/Miles-OBrien-Star-Trek-Colm-Meaney.jpg","occupation":"Chief Engineer","location":"Enterprise"},{"id":7,"name":"Commander Data","image":"https://vignette.wikia.nocookie.net/memoryalpha/images/4/4f/Data%2C_2366.jpg/revision/latest?cb=20130529102644&path-prefix=en","occupation":"Science Officer","location":"Enterprise"},{"id":8,"name":"Commander Yarr","image":"https://vignette.wikia.nocookie.net/memoryalpha/images/5/5b/Natasha_Yar%2C_2364.jpg/revision/latest?cb=20161121002748&path-prefix=en","occupation":"Previous Security Chief","location":"Deceased"},{"id":9,"name":"Dr Pulaski","image":"http://www.treknews.net/wp-content/uploads/2017/07/star-trek-tng-dr-pulaski.jpg","occupation":"Ships Dr","location":"Deceased"},{"id":10,"name":"Commander Riker","image":"https://upload.wikimedia.org/wikipedia/en/2/20/WilRiker.jpg","occupation":"1st Officer","location":"Enterprise"},{"id":11,"name":"Q","image":"https://www.writeups.org/wp-content/uploads/Q-Star-Trek-Omnipotent-John-de-Lancie.jpg","occupation":"PITA","location":"Everywhere"},{"id":12,"name":"Diana Troy","image":"https://www.writeups.org/wp-content/uploads/Deanna-Troi-Star-Trek-Marina-Sirtis.jpg","occupation":"Ships Counseler","location":"Enterprise"}]')},,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(3),o=a.n(n),c=(a(15),a(4)),s=a(5),p=a(8),l=a(6),m=a(9),u=a(7),d=a.n(u),g=(a(16),a(17),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{className:"img-thumbnail img-responsive",alt:e.name,src:e.image,onClick:function(){return e.clickPicture(e.id)}})))}),h=(a(18),function(e){return i.a.createElement("div",{className:"true"===e.loseWrapper?"wrapperLose":"wrapper"},e.pictures)}),w=a(1),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),n=0;n<r;n++)i[n]=arguments[n];return(a=Object(p.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={cards:w,clickedArray:[],topScore:0,score:0,message:"",lose:"false",styleMe:"white"},a.clickPicture=function(e){var t=a.shuffleArray(w);a.setState({cards:t}),a.state.clickedArray.includes(e)?a.setState({score:0,clickedArray:[],message:"You Clicked that before! Game Over! Click an image to start again!",lose:"true",styleMe:"red"}):a.setState({clickedArray:a.state.clickedArray.concat([e]),score:a.state.score+1,message:"Correct!",lose:"false",styleMe:"green"}),a.state.score>a.state.topScore&&a.setState({topScore:a.state.score})},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}return e},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),i.a.createElement("h1",{className:"App-title"},"React Clicky Game!!")),i.a.createElement("h3",{className:"App-intro"},i.a.createElement("strong",null,"Click on a picture to earn points, but don't click any picture more than once!"),i.a.createElement("p",{className:"score"},i.a.createElement("strong",null,"Score: ",this.state.score," | TopScore: ",this.state.topScore)),i.a.createElement("p",{style:{color:this.state.styleMe},className:"message"},i.a.createElement("strong",null,this.state.message))),i.a.createElement(h,{loseWrapper:this.state.lose,pictures:this.state.cards.map((function(t){return i.a.createElement(g,{clickPicture:e.clickPicture,id:t.id,key:t.id,name:t.name,image:t.image})}))}),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("span",{className:"text-muted"},"\xa9CarnesDev React app."))))}}]),t}(r.Component);o.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.83d9a31e.chunk.js.map