console.log("Loaded settings");

// HTML Elements references
const element_settings_container = document.getElementById("settings-container");
const element_settings_toggle = document.getElementById("settings-button");
const element_settings_theme = document.getElementById("settings__theme");
const element_settings_speed = document.getElementById("settings__speed");
const element_settings_size = document.getElementById("settings__size");
const element_settings_mobile = document.getElementById("settings__mobile");

const element_settings_initButton = document.getElementById("settings__init-button");

const element_mobile_controls = document.getElementById("mobile-controls");
const element_mobile_left = document.getElementById("mobile-controls__left");
const element_mobile_up = document.getElementById("mobile-controls__up");
const element_mobile_down = document.getElementById("mobile-controls__down");
const element_mobile_right = document.getElementById("mobile-controls__right");


// settings value-mapping
const settings_theme = {
    "theme_01": {
        colorPlayer: "white",
        colorTrail: "lightgray",
        colorApple: "red",
        backgroundClass: "theme_01__background-color",
    },
    "theme_02": {
        colorPlayer: "blanchedalmond",
        colorTrail: "burlywood",
        colorApple: "forestgreen",
        backgroundClass: "theme_02__background-color",
    },
    "theme_03": {
        colorPlayer: "yellow",
        colorTrail: "orange",
        colorApple: "firebrick",
        backgroundClass: "theme_03__background-color",
    },
    "theme_04": {
        colorPlayer: "rgb(0, 153, 255)",
        colorTrail: "rgb(51, 173, 255)",
        colorApple: "rgb(255, 77, 77)",
        backgroundClass: "theme_04__background-color",
    },
    "theme_05": {
        colorPlayer: "rgb(75, 75, 75)",
        colorTrail: "rgb(100, 100, 100)",
        colorApple: "rgb(255,255,255)",
        backgroundClass: "theme_05__background-color",
    },
}

const settings_speed = {
    "slow": 16,
    "medium": 8,
    "fast": 4,
    "faster": 2,
    "insane": 1,
}


// setTheme function cuz we call it in game.js
const setTheme = (themeString) => {
    game.player.headColor = settings_theme[themeString].colorPlayer;
    game.player.bodyColor = settings_theme[themeString].colorTrail;
    game.apple.color = settings_theme[themeString].colorApple;
    document.querySelector("body").className = settings_theme[themeString].backgroundClass;
}


// Event Listeners for settings Elements
element_settings_toggle.addEventListener("click", event => {
    element_settings_container.className = element_settings_container.className === "" ? "hidden" : "";
});

element_settings_theme.addEventListener("change", event => {
    setTheme(element_settings_theme.value);
});

element_settings_speed.addEventListener("change", event => {
    game.speed = settings_speed[element_settings_speed.value];
});

element_settings_size.addEventListener("change", event => {
    game.tileSize = parseInt(element_settings_size.value);
    game.init(CANVAS_ELEMENT_ID, SCORE_ELEMENT_ID, SCORE_PB_ELEMENT_ID);
});


element_settings_initButton.addEventListener("click", event => {
    game.init(CANVAS_ELEMENT_ID, SCORE_ELEMENT_ID, SCORE_PB_ELEMENT_ID);
});


// Mobile controls
element_settings_mobile.addEventListener("change", event => {
    element_mobile_controls.className = element_settings_mobile.value === "true" ? "" : "hidden";
});

element_mobile_left.addEventListener("click", event => {
    keyboard.press("a");
    keyboard.release("a");
});
element_mobile_up.addEventListener("click", event => {
    keyboard.press("w");
    keyboard.release("w");
});
element_mobile_down.addEventListener("click", event => {
    keyboard.press("s");
    keyboard.release("s");
});
element_mobile_right.addEventListener("click", event => {
    keyboard.press("d");
    keyboard.release("d");
});