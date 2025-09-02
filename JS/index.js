document.addEventListener("DOMContentLoaded", () => {
    function setupNavigator(imagesSelector, upSelector, downSelector, activeBorder, defaultBorder) {
        const images = document.querySelectorAll(imagesSelector);
        const arrowUp = document.querySelector(upSelector);
        const arrowDown = document.querySelector(downSelector);

        let currentIndex = 0;

        function updateFocus() {
            images.forEach((img, i) => {
                if (i === currentIndex) {
                    img.style.border = activeBorder; 
                } else {
                    img.style.border = defaultBorder; 
                }
            });
        }

        arrowUp.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateFocus();
            }
        });

        arrowDown.addEventListener("click", () => {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateFocus();
            }
        });

        updateFocus();
    }

    setupNavigator(
        ".big-pic",
        "#arrows-blue button:first-child",
        "#arrows-blue button:last-child",
        "0.2rem solid rgba(97, 192, 255, 1)",
        "0.2rem solid rgb(164, 173, 179)"    
    );

    setupNavigator(
        ".last-pic",
        "#latest-work-arr button:first-child",
        "#latest-work-arr button:last-child",
        "0.8rem solid rgba(97, 192, 255, 1)",
        "0.8rem solid rgb(62, 79, 95)"
    );

    setupNavigator(
        ".testimonial",                  
        "#testimonial-arr button:first-child",  
        "#testimonial-arr button:last-child",   
        "0.2rem solid rgba(97, 192, 255, 1)",   
        "none"                                  
);
});

