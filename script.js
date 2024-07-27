document.addEventListener('DOMContentLoaded', function() {
    const firstAuthorBtn = document.getElementById('first-author-btn');
    const nonFirstAuthorBtn = document.getElementById('non-first-author-btn');
    const firstAuthorWork = document.getElementById('first-author-work');
    const nonFirstAuthorWork = document.getElementById('non-first-author-work');

    firstAuthorBtn.addEventListener('click', function() {
        firstAuthorWork.style.display = 'block';
        nonFirstAuthorWork.style.display = 'none';
    });

    nonFirstAuthorBtn.addEventListener('click', function() {
        firstAuthorWork.style.display = 'none';
        nonFirstAuthorWork.style.display = 'block';
    });
});