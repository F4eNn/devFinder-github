import { UserProfile } from '../models/user-profile-interface'
import { errorMsg } from './user-input.js'
import { notAvailable } from './is-not-available.js'
import { reworkDate } from './data-rework.js'
const userImg: HTMLImageElement = document.querySelector('#profile')!
const username: HTMLElement = document.querySelector('#username')!
const loginName: HTMLSpanElement = document.querySelector('.at-name')!
const userBio: HTMLParagraphElement = document.querySelector('#bio')!
const repos: HTMLHeadingElement = document.querySelector('#repos')!
const followers: HTMLHeadingElement = document.querySelector('#followers')!
const following: HTMLHeadingElement = document.querySelector('#following')!
const location: HTMLSpanElement = document.querySelector('#location')!
const blog: HTMLSpanElement = document.querySelector('#blog')!
const twitter: HTMLSpanElement = document.querySelector('#twitter')!
const company: HTMLSpanElement = document.querySelector('#company')!
const createdAt: HTMLSpanElement = document.querySelector('#created')!

let userData: UserProfile

export const FetchingUserData = async (enteredInput: string = 'Octocat') => {
	try {
		const response = await fetch(`https://api.github.com/users/${enteredInput}`)
		const data = await response.json()
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
		}
	} catch {
		throw new Error('something went wrong...')
	}
	const newDate = reworkDate(userData.joined)
	if (userData.loginName === undefined) {
		errorMsg.style.display = 'block'
		return
	} else {
		errorMsg.style.display = 'none'
	}
	userImg.setAttribute('src', userData.image)
	createdAt.textContent = `Joined ${newDate}`
	loginName.textContent = '@' + userData.loginName
	username.textContent = userData.name
	userBio.textContent = `${userData.bio || 'This profile has no bio'} `
	repos.textContent = userData.repos
	followers.textContent = userData.followers
	following.textContent = userData.following
	location.textContent = `${userData.location || 'Not Available'}`
	blog.textContent = `${userData.blog || 'Not Available'}`
	twitter.textContent = `${userData.twitter || 'Not Available'}`
	company.textContent = `@${userData.company || 'Not Available'}`

	notAvailable(twitter)
	notAvailable(location)
	notAvailable(company)
	notAvailable(blog)
}
