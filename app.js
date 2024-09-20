/**
 * Challenge: get a random image from Unsplash and set it as the background
 * 
 * Part 1:
 * 
 * URL: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature
 * (You can change the "query" at the end to whatever theme you want)
 * 
 * Change the body's backgroundImage to: 
 * `url(<insert the URL of the iamge from the API here>)`
 * 
 * (You may need to dig around the response body a bit to find this URL)
 * 
 * (Note I've already added some CSS to resize the image within the window.
 * Instructions for this were found on CSS Tricks: 
 * https://css-tricks.com/perfect-full-page-background-image/#awesome-easy-progressive-css3-way)
 */
const author = document.getElementById('author')

const url='https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
 async function handleImageGeneartion(){
const res = await fetch(url)
const data = await res.json()
console.log(data.user.first_name);
document.body.style.background=`url(${data.urls.regular})`
author.textContent=`${data.user.name}`

}
handleImageGeneartion()

