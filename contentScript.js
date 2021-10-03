function scrollStop(callback, refresh = 66) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== "function") return;
  // Setup scrolling variable
  let isScrolling;
  // Listen for scroll events
  window.addEventListener(
    "scroll",
    function (event) {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);
      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, refresh);
    },
    false
  );
}

let curr_url = window.location.href;
console.log(curr_url);
let fb_url = "www.facebook.com";
let tw_url = "twitter.com";
let insta_url = "www.instagram.com";

if (curr_url.includes(fb_url)) {
  var share_btn =
    '[aria-label="Send this to friends or post it on your timeline."]';
  var parent =
    ".rq0escxv.l9j0dhe7.du4w35lb.hybvsw6c.io0zqebd.m5lcvass.fbipl8qg.nwvqtn77.k4urcfbm.ni8dbmo4.stjgntxs.sbcfpzgs";
  var post = ".i09qtzwb.n7fi1qx3.datstx6m.pmk7jnqg.j9ispegn.kr520xx4.k4urcfbm";
} else if (curr_url.includes(tw_url)) {
  var share_btn = '[data-testid="retweet"]';
  var parent = ".css-1dbjc4n.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l";
  var post = '[alt="Image"]';
} else if (curr_url.includes(insta_url)) {
  var share_btn = '[aria-label="Share Post"]';
  var parent = "._8Rm4L.bLWKA.M9sTE.L_LMM.SgTZ1.ePUX4 ";
  var post = ".FFVAD";
}
//
if(curr_url.includes(fb_url) || curr_url.includes(tw_url) || curr_url.includes(insta_url)){
  scrollStop(function () {
    var list = "";
    list = document.querySelectorAll(share_btn).forEach((item) => {
      // item.removeEventListener('click', getSrc(item));
      let data = item.getAttribute("data-test");
      console.log(data);

      if (!data) {
        console.log("DATA ENTERED")
        item.setAttribute("data-test", "Exists");
        item.addEventListener("click", async () => {
          let dta = await retrieveData(item);
          if(dta!="NOT AN IMAGE"){
            console.log(dta)
            var left = (screen.width/2)-(600/2);
            var top = (screen.height/2)-(600/2);
            let features = "menubar=yes,location=yes,resizabe=no,scrollbars=yes,status=no,height=600,,width=600,top="+top+",left="+left;
            let no_ampersand = dta.replaceAll('&', '__monkey__')
            window.open("http://127.0.0.1:5000/?img_url="+no_ampersand,"_blank",features);
          }
        });
      }
    });
    console.log("Scrolling has stopped.");
  });
}

window.addEventListener(
  "click",
  function (event) {
    if(event.target.tagName=="IMG"){
      str = event.target.src
      if(str.startsWith("data")){
        return
      }
      else if(this.confirm("Check If This Image Is Manipulated?"))
      {
        let img_url = event.target.src;
        var left = (screen.width/2)-(600/2);
        var top = (screen.height/2)-(600/2);
        let features = "menubar=yes,location=yes,resizabe=no,scrollbars=yes,status=no,height=600,,width=600,top="+top+",left="+left;
        let no_ampersand = img_url.replaceAll('&', '__monkey__')
        // window.open("http://127.0.0.1:5000/")
        window.open("https://569e-2405-201-8-80c5-c1cf-1d56-8a7-11bd.ngrok.io/?img_url="+no_ampersand,"_blank",features);
      }
    }
  },
  false
);

async function retrieveData(item) {
  item.style.backgroundColor = "red";
  var closestParent = item.closest(parent);
  var post_image = closestParent.querySelector(post);
  if (post_image) {
    if (post_image.src == null) {
      return "NOT AN IMAGE";
    } else {
      return post_image.src;
    }
  } else {
    return "NOT AN IMAGE";
  }
}
