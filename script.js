/**
 * Script Purpose: Nimble Gravity
 * Author: Erlen Masson
 * Created: 29th June 2025
 * Last Updated: 2nd July 2025
 */

console.log("Script v4");

// Check if the device is a touch device
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

// Initialize ScrollSmoother only on non-touch devices
function setupScrollSmoother() {
  if (!isTouchDevice()) {
    ScrollSmoother.create({
      smooth: 1.5, // Adjust smoothness
      effects: true,
      smoothTouch: 0, // This value is for non-touch devices
    });
    // Comment out normalizeScroll to test the behavior
    // ScrollTrigger.normalizeScroll(true);
  }
}

//
//------- Sliders -------//
//

function caseStudySliderAuto() {
  let splides = document.querySelectorAll(".case-study-slider-auto");
  for (let splide of splides) {
    let customSplide = new Splide(splide, {
      autoWidth: true,
      pagination: false,
      focus: "center",
      perPage: 1,
      trimSpace: false,
      gap: "1rem",
      drag: "free",
      snap: true,
      type: "loop",
      easing: "ease-out",
      omitEnd: true,
      autoplay: true,
      pauseOnHover: false,
      resetProgress: false,
      arrowPath:
        "M33.3152 19.9998L19.9988 33.3162L17.6423 30.9988L26.9675 21.6755L26.989 21.6541H6.67944V18.3455H26.989L26.9675 18.325L17.6423 8.99976L19.9988 6.68335L33.3152 19.9998Z",
      intersection: {
        inView: { autoplay: true },
        outView: { autoplay: false },
        rootMargin: "0px",
        threshold: 0.75,
      },
      breakpoints: {
        600: {
          gap: "12px",
          easing: "ease-out",
        },
      },
      classes: {
        arrow: "button is-icon-only custom-arrows",
      },
    });

    customSplide.mount({
      Intersection: window.splide.Extensions.Intersection,
    });
  }
}

// Testimonials Slider
function testimonialSlider() {
  let testimonialSplides = document.querySelectorAll(".testimonial-slider");
  for (let splide of testimonialSplides) {
    new Splide(splide, {
      // autoWidth: true,
      autoHeight: true,
      pagination: true,
      gap: "1rem",
      // focus: "center",
      // trimSpace: false,
      // drag: "free",
      // snap: true,
      type: "fade",
      // easing: "ease-out",
      // omitEnd: true,
      // autoplay: true,
      // pauseOnHover: true,
      // resetProgress: false,
      speed: 2000,
      rewind: true,
      arrowPath:
        "M33.3152 19.9998L19.9988 33.3162L17.6423 30.9988L26.9675 21.6755L26.989 21.6541H6.67944V18.3455H26.989L26.9675 18.325L17.6423 8.99976L19.9988 6.68335L33.3152 19.9998Z",
      classes: {
        arrow: "button is-icon-only custom-arrows",
      },
    }).mount();
  }
}

// Logo Ticker (AutoScrolling)
function logoSlider() {
  let logoSplides = document.querySelectorAll(".logo-slider");
  for (let splide of logoSplides) {
    new Splide(splide, {
      type: "loop",
      autoWidth: true,
      arrows: false,
      pagination: false,
      gap: "1rem",
      drag: false,
      autoScroll: {
        autoStart: true,
        speed: 0.5,
        pauseOnHover: false,
      },
      breakpoints: {
        600: {
          gap: "1rem",
          autoScroll: { speed: 0.5 },
        },
      },
    }).mount({
      AutoScroll: window.splide.Extensions.AutoScroll,
    });
  }
}

// Blog Slider
function blogPostSlider() {
  let blogSliders = document.querySelectorAll(".blog-slider");

  for (let splide of blogSliders) {
    new Splide(splide, {
      type: "slide",
      perPage: 3, // Show 3 posts
      perMove: 1, // Slide 3 posts at a time
      gap: "1rem", // Adjust spacing between cards
      arrows: true, // Enable arrows
      pagination: false, // Hide pagination
      rewind: true, // Loop back to start
      speed: 800, // Slide animation speed
      easing: "ease-out",
      classes: {
        arrow: "button is-icon-only custom-arrows", // Optional: for styled buttons
      },
      breakpoints: {
        991: {
          perPage: 2,
          perMove: 2,
        },
        600: {
          perPage: 1,
          perMove: 1,
        },
      },
    }).mount();
  }
}

// Values Slider
function valuesSlider() {
  let splides = document.querySelectorAll(".values-slider");

  for (let splide of splides) {
    let customSplide = new Splide(splide, {
      type: "loop",
      autoWidth: true,
      arrows: false,
      pagination: false,
      snap: false,
      easing: "ease-out",
      gap: "1rem",
      drag: "free",
      autoScroll: {
        autoStart: true,
        pauseOnHover: true,
        speed: 1.25,
      },
      breakpoints: {
        600: {
          gap: "1rem",
          autoScroll: {
            speed: 0.6,
          },
        },
      },
    });

    customSplide.mount({
      AutoScroll: window.splide.Extensions.AutoScroll,
    });

    // Run parallax effect for this slider
    valuesParallax(splide, ".values-thumb");
  }
}

function valuesParallax(sliderElement, imageSelector) {
  const slides = sliderElement.querySelectorAll(".splide__slide");

  function updateParallax() {
    const sliderRect = sliderElement.getBoundingClientRect();
    const centerX = sliderRect.left + sliderRect.width / 2;
    const halfWidth = sliderRect.width / 2;

    slides.forEach((slide) => {
      const img = slide.querySelector(imageSelector);
      if (!img) return;

      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;

      const distance = slideCenter - centerX;
      const shiftPercent = Math.max(
        -15,
        Math.min(15, -(distance / halfWidth) * 15)
      );

      img.style.transform = `translateX(${shiftPercent}%)`;
    });

    requestAnimationFrame(updateParallax);
  }

  requestAnimationFrame(updateParallax);
}

// Team Photos Carousel
function teamsPhotosSlider() {
  let splides = document.querySelectorAll(".team-photos");

  for (let splide of splides) {
    new Splide(splide, {
      type: "loop",
      autoWidth: true,
      arrows: false,
      pagination: false,
      gap: "1rem",
      drag: false,
      autoScroll: {
        autoStart: true,
        speed: 1,
        pauseOnHover: false,
      },
      breakpoints: {
        600: {
          gap: "1rem",
          autoScroll: {
            speed: 0.5,
          },
        },
      },
    }).mount(window.splide.Extensions);
  }
}

// Team bio open
function setupTeamBios() {
  const memberWrappers = document.querySelectorAll(".team_member-wrapper");

  memberWrappers.forEach((member) => {
    member.addEventListener("click", () => {
      const wrapper = member.closest(".team-item-wrapper");
      if (wrapper) wrapper.classList.add("show-bio");
    });
  });

  const closeButtons = document.querySelectorAll(".btn_close-bio");

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation(); // prevent bubbling back to .team_member-wrapper
      const wrapper = btn.closest(".team-item-wrapper");
      if (wrapper) wrapper.classList.remove("show-bio");
    });
  });
}

// Navigation change
function navScrollChange() {
  const nav = document.querySelector(".navigation");
  if (!nav) return; // Exit early if nav isn't found

  const triggerPoint = window.innerHeight * 0.9;

  window.addEventListener("scroll", () => {
    if (window.scrollY > triggerPoint) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

// ------- Pin Elements (Desktop Only) ------- //
function pinElements() {
  const pinnedEls = document.querySelectorAll("[data-pin]");

  // Only apply on desktop (992px and up)
  if (window.matchMedia("(min-width: 992px)").matches) {
    pinnedEls.forEach((el) => {
      const remValue = el.getAttribute("data-pin");

      // Convert rem to px
      const rem = parseFloat(remValue.replace("rem", ""));
      const pxOffset =
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

      const trigger = el.parentElement;

      console.log(
        "Pinning element:",
        el,
        "| Trigger:",
        trigger,
        "| Offset:",
        pxOffset + "px"
      );

      ScrollTrigger.create({
        trigger: trigger,
        start: `top ${pxOffset}px`,
        end: "bottom 50%",
        pin: el,
        pinSpacing: true,
        // markers: true,
      });
    });
  } else {
    console.log("Pinning skipped — below desktop breakpoint");
  }
}

// ------- GSAP Refresh Observer ------- //
function refreshObserve(attribute = "data-refresh") {
  const targets = document.querySelectorAll(`[${attribute}]`);
  if (!targets.length) return;

  const smoother = ScrollSmoother ? ScrollSmoother.get() : null;
  let timeout;

  const triggerRefresh = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log("↻ refreshObserve triggered");
      if (smoother) smoother.effects();
      ScrollTrigger.refresh();
    }, 200);
  };

  const observer = new ResizeObserver(triggerRefresh);

  targets.forEach((el) => {
    observer.observe(el);
    el.addEventListener("click", triggerRefresh);
  });
}

// ------- Hero Video Autoplay on Mobile ------- //
function heroVideo() {
  const videos = document.querySelectorAll("[data-video-observer]");
  let userHasInteracted = false;

  function tryPlayIfInView(video) {
    const rect = video.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      video.play().catch(() => {});
    }
  }

  function unlockAutoplay() {
    userHasInteracted = true;
    videos.forEach((video) => tryPlayIfInView(video));
  }

  window.addEventListener("scroll", unlockAutoplay, { once: true });
  window.addEventListener("touchstart", unlockAutoplay, { once: true });
  window.addEventListener("click", unlockAutoplay, { once: true });

  videos.forEach((video) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (userHasInteracted) {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(video);
  });
}

// Setup once the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  navScrollChange();
  setupScrollSmoother();
  pinElements();
  refreshObserve();
  heroVideo();
});
