(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,r){e.exports=r(18)},15:function(e,t,r){},17:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(4),o=r.n(a),u=(r(15),r(2)),s=r(1),i=r.n(s),d=r(5),p=r(6),l=r(8),h=r(7),m=r(9),f=(r(17),function(e){function t(){var e,r;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={products:[],product:{name:"sample product",price:50}},r.getProducts=function(e){fetch("//node-create-server.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){r.setState({products:e.data}),r.setState({productFetchError:!1})})).catch((function(e){console.error(e),r.setState({productFetchError:!0})}))},r.addProduct=function(e){var t=r.state.product;fetch("//node-create-server.herokuapp.com/products/add",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then(r.getProducts).catch((function(e){return console.error(e)}))},r.renderProduct=function(e){var t=e.product_id,r=e.name,n=e.price;return c.a.createElement("li",{key:t},t,".",r," - $",n)},r}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"getProductsEs7",value:function(){var e,t,r;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(fetch("//node-create-server.herokuapp.com/products"));case 3:return e=n.sent,n.next=6,i.a.awrap(e.json());case 6:t=n.sent,r=t.data,console.log(r),this.setState({products:r}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0);case 15:case"end":return n.stop()}}),null,this,[[0,12]])}},{key:"render",value:function(){var e=this,t=this.state,r=t.products,n=t.product,a=t.productFetchError;return c.a.createElement("div",{className:"App"},c.a.createElement("ul",null,a?c.a.createElement("li",null,"Fetch product fail"):r.map(this.renderProduct)),c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:n.name,placeholder:"Product name...",onChange:function(t){return e.setState({product:Object(u.a)({},n,{name:t.target.value})})}}),c.a.createElement("input",{type:"text",value:n.price,placeholder:"Product name...",onChange:function(t){return e.setState({product:Object(u.a)({},n,{price:t.target.value})})}}),c.a.createElement("button",{onClick:this.addProduct},"Add Product")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.c4e1b8b9.chunk.js.map