document.addEventListener("DOMContentLoaded", (event) => {
   

    let tl = gsap.timeline({repeat: -1, repeatDelay: 3, yoyo: true})

tl.to(".t1", { rotation: 360 });
tl.to(".t2", { rotation: 360 });
tl.to(".t3", { rotation: 360 });
tl.to(".t4", { rotation: 360 });
tl.to(".t5", { rotation: 360 });

gsap.to("#hi", {text:"Hi, I am Véronique Cartier", ease:"power1.in", duration:"3", repeat:-1, yoyo:true, repeatDelay:12});
gsap.to("#sk", {text:"Skills", ease:"power1.in", duration:"3", repeat:-1, yoyo:true, repeatDelay:0.6});
gsap.to("#pt", {text:"Portfolio", ease:"power1.in", duration:"3", repeat:-1, yoyo:true, delay:"3", repeatDelay:0.6});
gsap.to("#ct", {text:"Contact", ease:"power1.in", duration:"3", repeat:-1, yoyo:true, repeatDelay:0.6});
});

