import { themeModeHandler } from "./components/theme-mode.js";
themeModeHandler();
import { FetchingUserData } from "./components/fetched-data.js";
FetchingUserData();
import { inputValueHandler } from "./components/user-input.js";
const searchBtn = document.querySelector('#input-btn');
searchBtn.addEventListener('click', inputValueHandler);
//# sourceMappingURL=main.js.map