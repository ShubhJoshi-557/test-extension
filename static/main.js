document.querySelector(".button").addEventListener("click", async()=>{
    await new Promise(resolve => setTimeout(resolve, 5000));
    var img = document.createElement('img');
    img.src = '/static/socialmedia_img.png';
    document.querySelector('.popup').appendChild(img);
    document.querySelector("h2").innerHTML = "Done!"
    document.querySelector(".lds-ripple").style.display="none";
});