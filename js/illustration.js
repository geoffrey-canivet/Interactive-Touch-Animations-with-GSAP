let score = 0;
const verif = () => {
    if (score === 9) {
        $('#rect2621-1-6').attr("onclick","btnTapis()");
    } else {
        console.log(score)
    }
}


// 0. INDICES
let indicesVisible = false;
const indice = () => {
    if (indicesVisible) {
        $('#indices').css("display", "none")
    } else {
        $('#indices').css("display", "block")
    }
}

// 1. HOUBLON
let houblon = false;
const btnHoublon = () => {
    let gousses = document.getElementsByClassName("gousses")[0];
    gousses.style.display = "block";
    const ho1 = gsap.timeline({repeat: -1});
    ho1.fromTo('.ho1',{y:-10},{y:20,duration:1,repeat:-1, ease:Linear.easeNone})
    const ho2 = gsap.timeline({repeat: -1});
    ho2.fromTo('.ho2',{y:-10},{y:20,duration:0.5,repeat:-1, ease:Linear.easeNone})
    const ho3 = gsap.timeline({repeat: -1});
    ho3.fromTo('.ho3',{y:-10},{y:20,duration:1.5,repeat:-1, ease:Linear.easeNone})
    TweenLite.to('.led-houblon', {fill:"#2d9c89"});
    TweenLite.to('#path6202-5', {fill:"#2d9c89"});
    $('#path4628').removeAttr("onclick")
    score++;
    verif()

}

// 2. MIXEUR
let mixeur = false;
const btnMixeur = () => {
    let gouttes = document.getElementsByClassName("gouttes")[0];
    gouttes.style.display = "block";
    const g1 = gsap.timeline({repeat: -1});    
    g1.fromTo('#g1',{y:-10},{y:20,duration:1,repeat:-1, ease:Linear.easeNone})
    const g2 = gsap.timeline({repeat: -1});
    g2.fromTo('#g2',{y:-10},{y:20,duration:0.5,repeat:-1, ease:Linear.easeNone})
    const g3 = gsap.timeline({repeat: -1});
    g3.fromTo('#g3',{y:-10},{y:20,duration:1.5,repeat:-1, ease:Linear.easeNone})
    TweenLite.to('.levier', 2, {rotation: 90, transformOrigin:"left top"});
    $('#path3726').removeAttr("onclick")
    TweenLite.to('#path6202', {fill:"#2d9c89"});
    score++;
    verif()

}

// 3. VAPEUR
let valvefumee1 = false;
const btnVapeur = () => {
    TweenMax.to('#valvefumee1',1,{transformOrigin:"50% 50%",rotation: "180"});
    $(".fu1gauche").fadeIn();
    var tl = gsap.timeline({repeat: -1});
    tl.fromTo("#fu1g", {opacity:0}, {y: -25, x: 5, scaleX: 7, scaleY: 7, transformOrigin: "center center",opacity:1, duration: 2,ease: Power2.easeOut});
    tl.to("#fu1g",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    var tl2 = gsap.timeline({repeat: -1,delay:0.5});
    tl2.fromTo("#fu2g", {opacity:0}, {y: -20, x: -2, scaleX: 7, scaleY: 7, transformOrigin: "center center",opacity:1, duration: 2,ease: Power2.easeOut});
    tl2.to("#fu2g",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    var tl3 = gsap.timeline({repeat: -1,delay:1});
    tl3.fromTo("#fu3g", {opacity:0}, {y: -30, x: 5, scaleX: 7, scaleY: 7, transformOrigin: "center center",opacity:1, duration: 2,ease: Power2.easeOut});
    tl3.to("#fu3g",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    var tl4 = gsap.timeline({repeat: -1,delay:1.5});
    tl4.fromTo("#fu4g", {opacity:0}, {y: -15, x: -2, scaleX: 7, scaleY: 7, transformOrigin: "center center", opacity:1, duration: 2,ease: Power2.easeOut});
    tl4.to("#fu4g",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    $('#valvefumee1').removeAttr("onclick");
    TweenLite.to('#path6202-4', {fill:"#2d9c89"});
    score++;
    verif()

}

// 4. GENERATEUR
let generateur = false;
const btnGenerateur = () => {
    const ledsGenerateur = gsap.timeline({});
    ledsGenerateur.to(".led-generateur1", {duration: 0.5, fill:"#2d9c89"})
    .to(".led-generateur2", {duration: 0.5, fill:"#2d9c89"})
    .to(".led-generateur3", {duration: 0.5, fill:"#2d9c89", repeat: -1});
    TweenLite.to('.valve-generateur', 2, {rotation: 360, transformOrigin:"center"});
    $('#path2280-9-3-8-6').removeAttr("onclick");
    TweenLite.to('#path6202-4-7', {fill:"#2d9c89"});
    score++;
    verif()
    
}

// 5. CUVE
let cuve = false;
const btnCuve = () =>{
    TweenLite.to('#path2014',{transformOrigin: "bottom left",duration:5,ease: "none",rotation: 360, repeat: -1});
    TweenLite.to('#path1980-0',{opacity:0.5, repeat: -1});
    $('#path4628-1').removeAttr("onclick");
    TweenLite.to('#path6202-4-5', {fill:"#2d9c89"});
    score++;
    verif()

}

// 6. CENTRAL
let central = false;
const btnCentral = () =>{
    TweenLite.to('.levier3', {duration: 2, transformOrigin:"bottom right", rotation:100}); 
    TweenLite.to('.bobinne',{transformOrigin: "center center",duration:1,ease: "none",rotation: 360, repeat: -1});
    $('.levier3').removeAttr("onclick");
    TweenLite.to('#path6202-5-7', {fill:"#2d9c89"});
    score++;
    verif()

}

// 7. LEVIER
let levier = false;
const btnLevier = () =>{
    TweenLite.to('.levier2', {duration: 2, transformOrigin:"bottom right", rotation:100}); 
    const ledsLevier = gsap.timeline({});
    ledsLevier
    .to("#rect3642-6-7", {duration: 0.5, fill:"#2d9c89"})
    .to("#rect3642-6", {duration: 0.5, fill:"#2d9c89"})
    .to("#rect3642-6-6", {duration: 0.5, fill:"#2d9c89", repeat: -1});
    $('.levier2').removeAttr("onclick");
    TweenLite.to('#path6202-8', {fill:"#2d9c89"});
    score++;
    verif()

}

// 8. DISJONCTEUR
let disjoncteur = false;
const btnDisjoncteur = () =>{
    $('#layer5').css("display","block")
    TweenLite.to('#rect1827-4-3', {duration: 2, x: 0, y: 0, ease: "none"}); 
    TweenLite.fromTo('#path988-3-0',{opacity:0},{y:-2,opacity:1,duration:0.5,ease:Linear.easeNone,repeat:-1})
    TweenLite.fromTo('#path988-20',{opacity:0},{y:-2,opacity:1,duration:1,ease:Linear.easeNone,repeat:-1})
    TweenLite.fromTo('#path988-3',{opacity:0},{y:-2,opacity:1,duration:0.5,ease:Linear.easeNone,repeat:-1})
    TweenLite.fromTo('#path988-2',{opacity:0},{y:-2,opacity:1,duration:1,ease:Linear.easeNone,repeat:-1})
    $('#rect1827-4-3').removeAttr("onclick");
    TweenLite.to('#path6202-4-2', {fill:"#2d9c89"});
    score++;
    verif()

}

// 9. CHEMINEE
let cheminee = false; 
const btnCheminee = () => {
    TweenLite.to('.levier4', {duration: 2, transformOrigin:"bottom left", rotation:90});
    var ch1 = gsap.timeline({repeat: -1});
    ch1.fromTo("#fu1d", {opacity:0}, {y: -3, x: 25, scaleX: 7, scaleY: 7, transformOrigin: "center center",opacity:1, duration: 2,ease: Power2.easeOut});
    ch1.to("#fu1d",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    var ch2 = gsap.timeline({repeat: -1,delay:0.5});
    ch2.fromTo("#fu2d", {opacity:0}, {y: 3, x: 25, scaleX: 7, scaleY: 7, transformOrigin: "center center",opacity:1, duration: 2,ease: Power2.easeOut});
    ch2.to("#fu2d",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    var ch3 = gsap.timeline({repeat: -1,delay:1});
    ch3.fromTo("#fu3d", {opacity:0}, {y: 0, x: 30, scaleX: 7, scaleY: 7, transformOrigin: "center center",opacity:1, duration: 2,ease: Power2.easeOut});
    ch3.to("#fu3d",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    var ch4 = gsap.timeline({repeat: -1,delay:1.5});
    ch4.fromTo("#fu4d", {opacity:0}, {y: 0, x: 25, scaleX: 7, scaleY: 7, transformOrigin: "center center", opacity:1, duration: 2,ease: Power2.easeOut});
    ch4.to("#fu4d",{scaleX: 1, scaleY: 1, transformOrigin: "center center",opacity:0,duration:1}, "-=1");
    $('#path3726-6-8').removeAttr("onclick");
    TweenLite.to('#path6202-4-7-6', {fill:"#2d9c89"});
    score++;
    verif()

}

// 10. Tapis
let tapis = false;
const btnTapis = () => {
    console.log("test")
    TweenLite.to('.pompe', {duration: 2, transformOrigin:"bottom center", rotation:60});

    TweenLite.to('#path6202-4-5-6', {fill:"#2d9c89"});

    let animFinal = gsap.timeline({repeat: -1, repeatDelay: 1});
    animFinal.fromTo("#layer57", { x:-80}, {y: 0, x: -22, transformOrigin: "center center", opacity:1, duration: 2,ease: "none"});
    animFinal.to('#rect4438-4', {opacity: 1, duration: 1})
    animFinal.to('#path4278-3', {opacity: 1, duration: 1})
    animFinal.to('#layer57', {x: 30, duration: 2})
    animFinal.to('#layer57', {x: 40, y: 30, duration: 1, rotation: 45, opacity: 0, delay: 0.1,})
}

