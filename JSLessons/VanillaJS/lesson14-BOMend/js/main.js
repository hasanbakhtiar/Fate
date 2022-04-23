document.querySelector("button").addEventListener("click", () => {
    // window.history.back();
    // window.history.forward();
    // document.querySelector('p').innerHTML = navigator.appCodeName;
    // document.querySelector('p').innerHTML = navigator.appName;
    // document.querySelector('p').innerHTML = navigator.appVersion;
    // document.querySelector('p').innerHTML = navigator.platform;
    // document.querySelector('p').innerHTML = navigator.language;
    if (navigator.language == "en-US") {
        document.querySelector('p').innerHTML = "Hello"
        
    }else if(navigator.language == "es-EC"){
        document.querySelector('p').innerHTML = "!hola";

    }else{
        document.querySelector('p').innerHTML = "Salam";

    }
});
