export const notAvailable = (element) => {
    if (element.textContent === 'Not Available') {
        element.closest('.detail-box').classList.add('not-available');
    }
    if (element.textContent !== 'Not Available')
        element.closest('.detail-box').classList.remove('not-available');
};
//# sourceMappingURL=is-not-available.js.map