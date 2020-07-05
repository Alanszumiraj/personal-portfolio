t1 = new TimelineMax({});
t1.from('.m-left', 3, { y: "100", ease: Power2.easeOut });

t1 = new TimelineMax({});
t1.from('.f-letter', 4, { x: "-100", ease: Power1.easeOut });

//We are creating the animation on the class name called = About//
//We are adding a trigger to create the animation perfectly//

var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(".about-h1", 2.25, {
    scale: 0,
    cycle: {
        x: [-50, 50]
    }
   
});

var trigger = new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.25
})
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 10
    })
    .setTween(tl)
    .addTo(controller);

//We are creating the animation on the class name called = Skills//
//We are adding a trigger to create the animation perfectly//
var controller = new ScrollMagic.Controller();
var ta = new TimelineMax();
ta.staggerFrom(".skills-h1", 2.25, {
    scale: 0,
    cycle: {
        x: [50, 100]
    } 

});

var trigger = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0.25
})
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 10
    })
    .setTween(ta)
    .addTo(controller);

//We are creating the animation on the class name called = html-bars//
//We are adding a trigger to create the animation perfectly//
var controller = new ScrollMagic.Controller();
var ta = new TimelineMax();
ta.staggerFrom(".bar-html", 1.5, {
    scale: 0,
    cycle: {
        x: [0,90]
    }

});
var trigger = new ScrollMagic.Scene({
    triggerElement: "#skills",
    triggerHook: 0.25
})
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 10
    })
    .setTween(ta)
    .addTo(controller);


//We are creating the animation on the class name called = Work//
//We are adding a trigger to create the animation perfectly//

var controller = new ScrollMagic.Controller();
var ta = new TimelineMax();
ta.staggerFrom(".work-h1", 2.25, {
    scale: 0,
    cycle: {
        x: [0, 50]
    }

});
var trigger = new ScrollMagic.Scene({
    triggerElement: "#work",
    triggerHook: 0.25
})
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 10
    })
    .setTween(ta)
    .addTo(controller);

//We are creating the animation on the class name called = contact//
//We are adding a trigger to create the animation perfectly//
var controller = new ScrollMagic.Controller();
var ta = new TimelineMax();
ta.staggerFrom(".contact-h1", 2.25, {
    scale: 0,
    cycle: {
        x: [0, 50]
    }

});
var trigger = new ScrollMagic.Scene({
    triggerElement: "#contact",
    triggerHook: 0.25
})
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 10
    })
    .setTween(ta)
    .addTo(controller);
//adding clicks tags to Work id//
var click = document.getElementsByClassName('work-category');
var button = document.getElementById('animation');

click.onclick = function(){
    if(button.className == "open"){

    }
    else{
        
    }
}
