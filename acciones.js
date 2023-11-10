$(window).load(function () {


    //LENIS
    const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);



gsap.from(".content", { y:-50, opacity: 0, duration: 0.5, ease: "sine.inOut", delay: 1})

gsap.fromTo(".home-screen", { backgroundSize: "100%"}, { backgroundSize: "150%", duration: 1, ease: "power2.inOut"})


document.addEventListener('scroll', function() {
    var screen2H2 = document.querySelector('.screen-2 h2');
    var position = screen2H2.getBoundingClientRect();
  
   
    if (position.top < window.innerHeight && position.bottom >= 0) {
      screen2H2.classList.add('visible');
    }
  });

document.addEventListener('scroll', function() {
    var happyFaces = document.querySelector('.happy-faces');
    var position = happyFaces.getBoundingClientRect();
  
    
    if (position.top < window.innerHeight && position.bottom >= 0) {
      happyFaces.classList.add('visible');
    }
  });

  document.addEventListener('scroll', function() {
    var texts = document.querySelector('.screen-2 .wrap .texts');
    var position = texts.getBoundingClientRect();
  
   
    if (position.top < window.innerHeight && position.bottom >= 0) {
      texts.classList.add('visible');
    }
  });


  document.addEventListener('scroll', function() {
    var screen4H2 = document.querySelector('.screen-4 h2');
    var position = screen4H2.getBoundingClientRect();
  
    
    if (position.top < window.innerHeight && position.bottom >= 0) {
      screen4H2.classList.add('visible');
    }
  });


  document.addEventListener('scroll', function() {
    var paragraphs = document.querySelectorAll('.screen-4 p');
  
    paragraphs.forEach(function(p) {
      var position = p.getBoundingClientRect();
  
      
      if (position.top < window.innerHeight && position.bottom >= 0) {
        p.classList.add('visible');
      }
    });
  });


  document.addEventListener('scroll', function() {
    var h2Elements = document.querySelectorAll('.screen-5 h2');
  
    h2Elements.forEach(function(h2) {
      var position = h2.getBoundingClientRect();
  
      
      if (position.top < window.innerHeight && position.bottom >= 0) {
        h2.classList.add('visible');
      }
    });
  });


  document.addEventListener('scroll', function() {
    var cards = document.querySelectorAll('.screen-5 .cards .card');
  
    cards.forEach(function(card, index) {
      var position = card.getBoundingClientRect();
  
    
      if (position.top < window.innerHeight && position.bottom >= 0) {
      
        setTimeout(function() {
          card.classList.add('visible');
        }, 150 * index); 
      }
    });
  });


  gsap.registerPlugin(ScrollTrigger);

gsap.to(".screen-6 h2", {
  x: () => -(document.querySelector(".screen-6 h2").scrollWidth - window.innerWidth + 150),
  ease: "none",
  scrollTrigger: {
    trigger: ".screen-6",
    start: "top top",
    end: () => "+=" + document.querySelector(".screen-6 h2").scrollWidth,
    scrub: true,
    pin: true,
  }
});

gsap.from(".screen-7 .card h3", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".screen-7 .card",
        start: "bottom bottom"
    }
});

gsap.from(".screen-7 .card p", {
    x: -100,
    opacity: 0,
    delay: 0.3, 
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".screen-7 .card",
        start: "bottom bottom"
    }
});


gsap.from(".screen-7 .card a", {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.75)",
    delay: 0.6, 
    scrollTrigger: {
        trigger: ".screen-7 .card",
        start: "bottom bottom"
    }
});

document.querySelectorAll('.screen-5 .project').forEach((project, index) => {
    gsap.from(project, {
        opacity: 0,
        y: 100,
        scale: 0.9, 
        rotation: 10, 
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: project,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});



})



