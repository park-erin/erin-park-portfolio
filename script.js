(function(){
    'use strict'

    console.log('loading js')

    // fade in load animation
    function initTopToBottomFadeIn(elements, staggerMs = 120) {
        const list = Array.from(elements)
            .map(el => ({ el, top: el.getBoundingClientRect().top + window.scrollY }))
            .sort((a, b) => a.top - b.top);

        list.forEach(({ el }, index) => {
            setTimeout(() => {
            el.classList.add('is-visible');
            }, index * staggerMs);
        });
        }

        document.addEventListener('DOMContentLoaded', () => {
        const targets = document.querySelectorAll('[data-fade]');
        initTopToBottomFadeIn(targets);
    });

    //adding the gallery effect
    document.addEventListener('DOMContentLoaded', function() {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.modal-close');
        
        // Add click handler to all .clickable images
        document.querySelectorAll('.clickable').forEach(img => {
            img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            }
        });
        
        // Close modal when X is clicked
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
        
        // Close modal when clicking outside the image
        modal.onclick = function(e) {
            if (e.target === modal) {
            modal.style.display = 'none';
            }
        }
        });
})();