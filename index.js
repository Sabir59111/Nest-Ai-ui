
let hero = document.getElementById("hero");
const heroImage = hero.children[0];

let img1 = document.createElement("img");
img1.src = "./assets/multiple_babies/first.svg";
img1.alt = "baby image";
img1.width = 220;
img1.height = 231;
img1.className = "absolute -z-20 -mt-[220px] -ml-[10px]";

let img2 = document.createElement("img");
img2.src = "./assets/multiple_babies/second.svg";
img2.alt = "baby image";
img2.width = 220;
img2.height = 231;
img2.className = "absolute  -mt-[230px] -ml-[1px]";

let img3 = document.createElement("img");
img3.src = "./assets/multiple_babies/third.svg";
img3.alt = "baby image";
img3.width = 220;
img3.height = 231;
img3.className = "absolute -z-10 -mt-[200px] -ml-[100px]";

img3.style.opacity = "0";
img1.style.opacity = "0";
img2.style.opacity = "0";

let img4 = document.createElement("img");
img4.src = "./assets/multiple_babies/fourth.svg";
img4.alt = "baby image";
img4.width = 220;
img4.height = 231;
img4.className = "absolute -z-10 -mt-[240px] ml-[80px]";
img4.style.opacity = "0";

hero.addEventListener("mouseenter", () => {
    heroImage.style.opacity = "0";

    hero.appendChild(img4);


    hero.appendChild(img1);
    hero.appendChild(img2);
    hero.appendChild(img3);
    
    img1.style.opacity = "1";
    img1.style.transition = "opacity 0.5s ease-in-out";
    img2.style.opacity = "1";

    img2.style.transition = "opacity 0.5s ease-in-out";
    img3.style.opacity = "1";
    img3.style.transition = "opacity 0.5s ease-in-out";
    img4.style.opacity = "1";
    img4.style.transition = "opacity 0.5s ease-in-out";
        

});


hero.addEventListener("mouseleave", () => {
    heroImage.style.opacity = "1";
   

    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";

    hero.removeChild(img1);
    hero.removeChild(img2);
    hero.removeChild(img3);
    hero.removeChild(img4);
    

 
});



document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const items = document.querySelectorAll('.carousel-item');

    let isDragging = false;
    let startX, scrollLeft;
    let velocity = 0;
    let rafId;
    
    let itemWidth = items[0].offsetWidth + 20; // Item width + margin

    // Function to apply inertia effect
    function applyInertia() {
        if (Math.abs(velocity) > 0.1) {
            carousel.scrollLeft -= velocity;
            velocity *= 0.95; // Reduce speed gradually (friction effect)
            rafId = requestAnimationFrame(applyInertia);
        } else {
            cancelAnimationFrame(rafId);
        }
    }

    // Mouse events for drag scrolling
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        carousel.classList.add('dragging');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        velocity = 0;
        cancelAnimationFrame(rafId); // Stop inertia if user starts dragging
        e.preventDefault();
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        carousel.classList.remove('dragging');
        applyInertia(); // Apply inertia on release
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.classList.remove('dragging');
        applyInertia();
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.pageX - carousel.offsetLeft;
        velocity = (x - startX) * 0.2; // Adjust multiplier for smoothness
        carousel.scrollLeft = scrollLeft - velocity * 5; // Amplify effect
    });

    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        carousel.classList.add('dragging');
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        velocity = 0;
        cancelAnimationFrame(rafId);
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        velocity = (x - startX) * 0.2;
        carousel.scrollLeft = scrollLeft - velocity * 19;
    });

    carousel.addEventListener('touchend', () => {
        isDragging = false;
        carousel.classList.remove('dragging');
        applyInertia();
    });

    // Navigation buttons
    nextBtn.addEventListener('click', () => {
        carousel.scrollLeft += itemWidth;
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollLeft -= itemWidth;
    });
});



