import { FetchingUserData } from './fetched-data.js';
const input = document.querySelector('#input');
export const errorMsg = document.querySelector('#errorMsg');
let enteredInput = 'Octocat';
export const inputValueHandler = (e) => {
    if (e) {
        e.preventDefault();
    }
    if (input.value.trim() === '') {
        errorMsg.style.display = 'block';
        return;
    }
    else {
        errorMsg.style.display = 'none';
    }
    enteredInput = input.value;
    FetchingUserData(enteredInput);
};
//# sourceMappingURL=user-input.js.map