import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import './index.css'


var tabLinks;
var tabContent;
var isVKapp = false;
var isMobile = false;
var triggeredUpdate = false;
var firstTrigger = false;

function openTabs(el) {
	var btnTarget = el.currentTarget;
	var country = btnTarget.dataset.country;
	
	if(country === 'tab2'){
		if(!triggeredUpdate){
			triggeredUpdate = true;
			if(!firstTrigger){
			  firstTrigger = true;
			}
		}
	}else {
		triggeredUpdate = false;
	}
  
	tabContent.forEach(function (el) {
	  el.classList.remove("active");
	});
  
	tabLinks.forEach(function (el) {
	  el.classList.remove("active");
	});
  
	document.querySelector("#" + country).classList.add("active");
  
	btnTarget.classList.add("active");
	setTimeout(() => autosize(), 50);
  }

function autosize() {
   
    if (isVKapp) {
        
        bridge.send("VKWebAppResizeWindow", {"width": 840, "height": document.getElementById('root').clientHeight});
    } else {
        console.log('error #2 Using app outside vk window!!!');
    }
}

bridge.send("VKWebAppInit", {});

ReactDOM.render(<App />, document.getElementById('root'));
 
function steam(el) {
	var btn = document.querySelectorAll("button[id=connbtn]");
	var test = btn[0].attributes.number.nodeValue
	window.open('steam://connect/'+document.getElementById("ipval"+test).value,'_blank');
}

function cop(el) {
	var btn = document.querySelectorAll("button[id=copbtn]");
	var test = btn[0].attributes.number.nodeValue
	var e = document.getElementById("ipval"+test);
		
		var oldval = e.value;
		e.value = 'client.connect ' + oldval;
		try {
			e.select();
			var successful = document.execCommand('copy');
			var msg = successful ? 'successful' : 'unsuccessful';
			alert('нажмите CTRL + V чтобы вставить в консоль F1 в игре'); 
		} catch (err) {
			console.log('Oops, unable to copy' + err);
		  }
		e.value = oldval;
}

document.querySelectorAll('button[id=copbtn]').forEach(function (el) {
	el.addEventListener("click", cop); 
});

document.querySelectorAll('button[id=connbtn]').forEach(function (el) {
	el.addEventListener("click", steam); 
});

tabLinks = document.querySelectorAll(".tablinks");
tabContent = document.querySelectorAll(".tabcontent");
isMobile = bridge.isWebView();

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs); 
});
if(!isMobile){
	document.querySelectorAll('input[type=checkbox]').forEach(function (el) {
	  el.addEventListener("click", autosize); 
	});
}

isVKapp = (window.name.indexOf('fXD') === 0);


setTimeout(() => autosize(), 3000);



// if (process.env.NODE_ENV === "development") {
//   import("./eruda").then(({ default: eruda }) => {}); //runtime download
// }

// bridge.send("VKWebAppGetCommunityToken", {"app_id": 7571276, "group_id": 197487302, "scope": "app_widget"}).then(data => {
//     console.log(data);
//   })
//   .catch(e => console.log(e))