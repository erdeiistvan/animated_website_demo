var btn = document.querySelector(".for-button-on");
var btnGraphic = {
    top : document.querySelector(".line-top"),
    mid : document.querySelector(".line-mid"),
    bot : document.querySelector(".line-bot"),
}
var rectLeft = document.querySelector(".rectangle-left");
var rectRight = document.querySelector(".rectangle-right");
var header = document.querySelector(".header");
var content = document.querySelector(".content");
var menuContainer = document.querySelector(".menu-container");
var menuItems = document.getElementsByClassName("menu-item");

btn.addEventListener('click', changeGraphicSettings);

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('mouseover', menuItemAnimationOn)
    menuItems[i].addEventListener('mouseout', menuItemAnimationOff)
};

function changeGraphicSettings() {
    
    if(btn.className === "for-button-on") {
        
        btn.classList.remove("for-button-on");
        btn.classList.add("for-button-off");
        
        header.classList.remove("header");
        header.classList.add("header-animated");
    
        content.classList.remove("content");
        content.classList.add("content-animated");
        
        btnGraphic.top.classList.remove("line-top");
        btnGraphic.top.classList.add("line-top-animated");
    
        btnGraphic.mid.classList.remove("line-mid");
        btnGraphic.mid.classList.add("line-mid-animated");
    
        btnGraphic.bot.classList.remove("line-bot");
        btnGraphic.bot.classList.add("line-bot-animated");
        
        menuContainer.classList.remove("menu-container");
        menuContainer.classList.add("menu-container-animated");
        
        rectLeft.classList.remove("rectangle-left");
        rectLeft.classList.add("rectangle-left-animated");
    
        rectRight.classList.remove("rectangle-right");
        rectRight.classList.add("rectangle-right-animated");
        
    } else {
        
        btn.classList.remove("for-button-off");
        btn.classList.add("for-button-on");
        
        header.classList.remove("header-animated");
        header.classList.add("header");
    
        content.classList.remove("content-animated");
        content.classList.add("content");
        
        btnGraphic.top.classList.remove("line-top-animated");
        btnGraphic.top.classList.add("line-top");
    
        btnGraphic.mid.classList.remove("line-mid-animated");
        btnGraphic.mid.classList.add("line-mid");
    
        btnGraphic.bot.classList.remove("line-bot-animated");
        btnGraphic.bot.classList.add("line-bot");
        
        menuContainer.classList.remove("menu-container-animated");
        menuContainer.classList.add("menu-container");
        
        rectLeft.classList.remove("rectangle-left-animated");
        rectLeft.classList.add("rectangle-left");
    
        rectRight.classList.remove("rectangle-right-animated");
        rectRight.classList.add("rectangle-right");
        
    };
    
};

function menuItemAnimationOn() {
    this.classList.remove("menu-item");
    this.classList.add("menu-item-animated");
};

function menuItemAnimationOff() {
    this.classList.remove("menu-item-animated");
    this.classList.add("menu-item");
};