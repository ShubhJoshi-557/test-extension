// chrome.browserAction.onClicked.addListener(function(){
//     chrome.tabs.captureVisibleTab(function(screenshotURL){
//         var viewTabUrl = chrome.extension.getURL()
//         var image = new Image();
//         console.log(viewTabUrl)
//         scale = 1;
//         // image.onload = function() {
//         //     var dim = getBox(this.width * scale, this.height * scale);
//         //     console.log("%c" + dim.string, dim.style + "background: url(" + screenshotURL + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
//         // };
//         image.src = screenshotURL;
//         console.log(image)
//         // window.open("http://127.0.0.1:5000/fullpage-ss/?img_url="+screenshotURL);
//     })
// })

// function getBox(width, height) {
//     return {
//         string: "+",
//         style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
//     }
// }

