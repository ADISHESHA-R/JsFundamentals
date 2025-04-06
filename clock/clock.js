setInterval(() => {
    const date=new Date();
    document.getElementById("box").innerHTML=date.toLocaleTimeString();
}, 1000);