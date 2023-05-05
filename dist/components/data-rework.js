export const reworkDate = (date) => {
    const currentDate = date;
    const reworkedDate = new Date(currentDate);
    const dateArray = reworkedDate.toDateString().split(' ').join(' ');
    const newDate = dateArray.slice(3);
    return newDate;
};
//# sourceMappingURL=data-rework.js.map