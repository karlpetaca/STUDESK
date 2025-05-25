document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.right');
    const prevButton = document.querySelector('.carousel-btn.left');
    const dots = document.querySelectorAll('.carousel-dot');
    let slidesPerView = window.innerWidth < 900 ? 1 : 4;
    const slideWidth = window.innerWidth < 900 ? window.innerWidth - 40 : 285; // Responsive width
    const marginRight = 10; // Gap between books
    let currentIndex = 0;
    let isMobile = window.innerWidth < 900;

    // Calculate the number of groups/pages and the max index for navigation
    const totalGroups = Math.ceil(slides.length / slidesPerView);
    const maxIndex = totalGroups - 1;

    // Update on window resize
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth < 900;
        slidesPerView = isMobile ? 1 : 4;
        const newSlideWidth = isMobile ? window.innerWidth - 40 : 285;
        updateSlideWidths(newSlideWidth);
    });

    function updateSlideWidths(width) {
        slides.forEach((slide, index) => {
            slide.style.width = `${width}px`;
            slide.style.marginRight = (index === slides.length - 1) ? '0' : `${marginRight}px`;
        });
        const actualTrackWidth = slides.length * width + (slides.length - 1) * marginRight;
        track.style.width = `${actualTrackWidth}px`;
    }

    // Set initial position and style for all slides and the track
    function setInitialPosition() {
        slides.forEach((slide, index) => {
            slide.style.position = 'relative';
            slide.style.left = '0';
        });
        track.style.position = 'relative';
        track.style.display = 'flex';
        if (!isMobile) {
            track.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        updateSlideWidths(slideWidth);
    }

    // Move the carousel to a specific group (page) of slides
    function moveToGroup(groupIndex) {
        if (isMobile) return; // Don't use JavaScript movement on mobile
        
        if (groupIndex < 0) groupIndex = 0;
        if (groupIndex > maxIndex) groupIndex = maxIndex;

        let offset;
        const currentSlideWidth = isMobile ? window.innerWidth - 40 : 285;
        
        if (groupIndex === maxIndex && slides.length % slidesPerView !== 0) {
            const visibleWidth = slidesPerView * currentSlideWidth + (slidesPerView - 1) * marginRight;
            const totalWidth = slides.length * currentSlideWidth + (slides.length - 1) * marginRight;
            offset = totalWidth - visibleWidth;
            if (offset < 0) offset = 0;
        } else {
            offset = groupIndex * (slidesPerView * currentSlideWidth + (slidesPerView - 1) * marginRight);
        }
        track.style.transform = `translateX(-${offset}px)`;
        currentIndex = groupIndex;
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === groupIndex);
        });
    }

    // Initialize
    setInitialPosition();

    // Next button click
    nextButton.addEventListener('click', () => {
        if (isMobile) return; // Don't use buttons on mobile
        if (currentIndex < maxIndex) {
            moveToGroup(currentIndex + 1);
        } else {
            moveToGroup(0);
        }
    });

    // Previous button click
    prevButton.addEventListener('click', () => {
        if (isMobile) return; // Don't use buttons on mobile
        if (currentIndex > 0) {
            moveToGroup(currentIndex - 1);
        } else {
            moveToGroup(maxIndex);
        }
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (isMobile) return; // Don't use dots on mobile
            moveToGroup(index);
        });
    });

    // Make sure book links are clickable
    slides.forEach(slide => {
        const link = slide.querySelector('a');
        if (link) {
            link.style.display = 'block';
            link.style.width = '100%';
            link.style.height = '100%';
            link.style.textDecoration = 'none';
        }
    });
});
