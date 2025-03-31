document.addEventListener('DOMContentLoaded', () => {
    const storyContents = document.querySelectorAll('.story-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    storyContents.forEach(content => {
        content.style.opacity = '0';
        content.style.transform = 'translateY(20px)';
        content.style.transition = 'all 0.6s ease-out';
        observer.observe(content);
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    // 초기 슬라이드 표시
    showSlide(currentSlide);
    
    // 자동 슬라이드 전환 (5초마다)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
    
    // 슬라이드 전환 함수
    window.changeSlide = (n) => {
        currentSlide = (currentSlide + n + slides.length) % slides.length;
        showSlide(currentSlide);
    };
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');
    }
}); 