const nullThrows = (v)=> {
    if(v== null) throw new Error('it is a null');
    return v
}


function injectCode(src){
    const script = document.createElement('script');
    script.src = src;
    script.onload = function (){this.remove()};
    nullThrows(document.head || document.documentElement).appendChild(script)
}

injectCode(chrome.runtime.getURL('./scripts/background.js'));