!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequiree0b9;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequiree0b9=o);var r=o("3TYOG"),a=o("1wluP");var i=o("7UwF1");var l=o("bIRtP"),c=o("8NRti"),s=(i=o("7UwF1"),o("h3QF3")),d=o("8XwOx");var u=o("bC0sB");var f=o("QhBLK"),v=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"];i=o("7UwF1");s=o("h3QF3"),d=o("8XwOx");var p=o("cvKTG");o("10lkg");var y,g=o("gjNd1");o("lSwaW"),(0,l.mobileMenu)(),(0,a.getRandomCocktail)().then(r.randomCardBuilder).catch((function(e){console.log(e)})),y=v.map((function(e){return'<li class="hero__item">\n      <button class="hero__btn" type="button" data-letter='.concat(e,">").concat(e,"</button>")})),i.refs.alphabet.insertAdjacentHTML("afterbegin",y.join("")),function(e){var t=e.map((function(e){return'<option class="hero__option" value="'.concat(e,'">').concat(e,"</option>")}));i.refs.qwerty.insertAdjacentHTML("afterbegin",t.join(""))}(v),function(){var e=document.querySelector(".hero__input"),t=document.querySelector("#cocktails__abc");e.onfocus=function(){t.style.display="block",e.style.borderRadius="4px"};var n=!0,o=!1,r=void 0;try{for(var a,i=function(n,o){var r=o.value;r.onclick=function(){e.value=r.value,t.style.display="none",e.style.borderRadius="4px"}},l=t.options[Symbol.iterator]();!(n=(a=l.next()).done);n=!0)i(0,a)}catch(e){o=!0,r=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw r}}e.oninput=function(){c=-1;var n=e.value.toUpperCase(),o=!0,r=!1,a=void 0;try{for(var i,l=t.options[Symbol.iterator]();!(o=(i=l.next()).done);o=!0){var s=i.value;s.value.toUpperCase().indexOf(n)>-1?s.style.display="block":s.style.display="none"}}catch(e){r=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}};var c=-1;function s(e){if(!e)return!1;!function(e){for(var t=0;t<e.length;t++)e[t].classList.remove("active")}(e),c>=e.length&&(c=0),c<0&&(c=e.length-1),e[c].classList.add("active")}e.onkeydown=function(e){40==e.keyCode?(c++,s(t.options)):38==e.keyCode?(c--,s(t.options)):13==e.keyCode&&(e.preventDefault(),c>-1&&t.options&&t.options[c].click())}}(),i.refs.searchForm.addEventListener("submit",c.findCocktailBySearch),i.refs.list.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){var t=e.target.dataset.letter.toLowerCase();(0,s.getCocktailsByLetter)(t).then(d.cardBuilder).catch((function(e){console.log(e)}))}})),i.refs.qwerty.addEventListener("click",(function(e){if(console.log(e.target.tagName),"OPTION"===e.target.tagName){var t=e.target.value.toLowerCase();(0,s.getCocktailsByLetter)(t).then(d.cardBuilder).catch((function(e){console.log(e)}))}})),i.refs.gallery.addEventListener("click",u.openModal),i.refs.gallery.addEventListener("click",f.saveCocktail),i.refs.modal.addEventListener("click",p.modalControl),i.refs.modalIngr.addEventListener("click",g.modalIngrConrol)}();
//# sourceMappingURL=index.81c69fb2.js.map
