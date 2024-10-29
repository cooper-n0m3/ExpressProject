document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.circular-progress');
    const percentage = progressBar.getAttribute('data-percentage');
    const degree = (percentage / 100) * 360;

    if (percentage > 50) {
        progressBar.querySelector('.mask.full').style.transform = 'rotate(180deg)';
        progressBar.querySelector('.mask.half .fill').style.transform = `rotate(${degree - 180}deg)`;
    } else {
        progressBar.querySelector('.mask.full .fill').style.transform = `rotate(${degree}deg)`;
    }

    progressBar.querySelector('.percentage').textContent = `${percentage}%`;
});
