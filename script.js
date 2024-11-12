gsap.registerPlugin(ScrollTrigger);

    let section = "PathBack";
    // Select all elements with the class 'hidden-section'
    gsap.utils.toArray('.section').forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 50%",
                scrub: true,
                end: "top 20%", // Adjust this to control when the animation starts
                toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
                markers: false // Enable this to debug the triggers (remove when done)
            }
        });
    });




    

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    
      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
    
      requestAnimationFrame(raf)
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.img',
          scrub: true
        }
      })
      .to('.img', {
        stagger: .2,
        y: -700,
        scrub: true
      })