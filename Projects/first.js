document.getElementById("fstbtn").addEventListener("click", () => {
    let para = document.getElementById("first");
    
    // Store original text and styles
    if (!para.dataset.originalText) {
        para.dataset.originalText = para.textContent;
        para.dataset.originalColor = para.style.color;
        para.dataset.originalBgColor = para.style.backgroundColor;
        para.dataset.originalFontSize = para.style.fontSize;
        para.dataset.originalFontFamily = para.style.fontFamily;
    }

    para.textContent = "Adishesha R Website";
    console.log(para.textContent);
    para.style.color = "pink";
    para.style.backgroundColor = "black";
    para.style.fontSize = "40px";
    para.style.fontFamily = "Arial";
});

document.getElementById("back").addEventListener("click", () => {
    let para = document.getElementById("first");

    // Restore original text and styles
    if (para.dataset.originalText) {
        para.textContent = para.dataset.originalText;
        para.style.color = para.dataset.originalColor || "";
        para.style.backgroundColor = para.dataset.originalBgColor || "";
        para.style.fontSize = para.dataset.originalFontSize || "";
        para.style.fontFamily = para.dataset.originalFontFamily || "";
    }

    console.log(para.textContent);
});

document.getElementById("Dark").addEventListener("click", () => {
    let body = document.getElementById("body");
    let themeIcon = document.getElementById("Dark").querySelector("img");

    // Check if dark mode is active
    if (body.classList.contains("dark-mode")) {
        // Switch to Light Mode
        body.classList.remove("dark-mode");
        body.style.backgroundColor = "white";
        body.style.color = "black";
        themeIcon.src = "https://cdn2.vectorstock.com/i/1000x1000/51/16/sun-dark-mode-glyph-ui-icon-vector-43805116.jpg"; // Sun icon
        themeIcon.alt = "Dark Mode";
    } else {
        // Switch to Dark Mode
        body.classList.add("dark-mode");
        body.style.backgroundColor = "black";
        body.style.color = "white";
        themeIcon.src = "https://static.thenounproject.com/png/979909-200.png"; // Moon icon
        themeIcon.alt = "Light Mode";
    }
});
document.getElementById("add").addEventListener("click", function(){
    let newItem=document.createElement("li");
    newItem.textContent="eggs";
    document.getElementById("cartlist").appendChild(newItem);
}
);
document.getElementById("remove").addEventListener("click", function(){
    let removeItem=document.getElementById("cartlist");
    removeItem.lastElementChild.remove();
})
