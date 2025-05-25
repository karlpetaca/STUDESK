document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.category-filter');
    const productCards = document.querySelectorAll('.product-card');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedCategories = Array.from(checkboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            productCards.forEach(card => {
                const category = card.dataset.category;
                if (selectedCategories.length === 0 || selectedCategories.includes(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const languageCheckboxes = document.querySelectorAll('.language-filter');
    const productCards = document.querySelectorAll('.product-card');

    languageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedLanguages = Array.from(languageCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            productCards.forEach(card => {
                const language = card.dataset.language;
                const matchesLanguage = selectedLanguages.length === 0 || selectedLanguages.includes(language);
                
                // If you already have category filtering, you'd combine both conditions here
                if (matchesLanguage) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
