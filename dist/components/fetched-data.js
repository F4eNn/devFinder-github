var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { errorMsg } from './user-input.js';
import { notAvailable } from './is-not-available.js';
import { reworkDate } from './data-rework.js';
const userImg = document.querySelector('#profile');
const username = document.querySelector('#username');
const loginName = document.querySelector('.at-name');
const userBio = document.querySelector('#bio');
const repos = document.querySelector('#repos');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const location = document.querySelector('#location');
const blog = document.querySelector('#blog');
const twitter = document.querySelector('#twitter');
const company = document.querySelector('#company');
const createdAt = document.querySelector('#created');
let userData;
export const FetchingUserData = (enteredInput = 'Octocat') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://api.github.com/users/${enteredInput}`);
        const data = yield response.json();
        userData = {
            loginName: data.login,
            name: data.name,
            image: data.avatar_url,
            bio: data.bio,
            followers: data.followers,
            following: data.following,
            repos: data.public_repos,
            joined: data.created_at,
            location: data.location,
            blog: data.blog,
            twitter: data.twitter_username,
            company: data.company,
        };
    }
    catch (_a) {
        throw new Error('something went wrong...');
    }
    const newDate = reworkDate(userData.joined);
    if (userData.loginName === undefined) {
        errorMsg.style.display = 'block';
        return;
    }
    else {
        errorMsg.style.display = 'none';
    }
    userImg.setAttribute('src', userData.image);
    createdAt.textContent = `Joined ${newDate}`;
    loginName.textContent = '@' + userData.loginName;
    username.textContent = userData.name;
    userBio.textContent = `${userData.bio || 'This profile has no bio'} `;
    repos.textContent = userData.repos;
    followers.textContent = userData.followers;
    following.textContent = userData.following;
    location.textContent = `${userData.location || 'Not Available'}`;
    blog.textContent = `${userData.blog || 'Not Available'}`;
    twitter.textContent = `${userData.twitter || 'Not Available'}`;
    company.textContent = `${userData.company || 'Not Available'}`;
    notAvailable(twitter);
    notAvailable(location);
    notAvailable(company);
    notAvailable(blog);
});
//# sourceMappingURL=fetched-data.js.map