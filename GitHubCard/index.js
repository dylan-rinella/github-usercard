import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
  
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/justsml', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell'];

// followersArray.forEach(profile => {
//   const gitCard = gitCardMaker(profile)
//   console.log(gitCard)
//   entryPoint.appendChild(gitCard)

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
axios
    .get('https://api.github.com/users/dylan-rinella/following')
    .then(res => {
      const gitInfo = res.data
      gitInfo.forEach(profile => {
        const gitCard = gitCardMaker(profile)
        console.log(gitCard)
        entryPoint.appendChild(gitCard)
      })
      
    })
    .catch(err => {
      console.log(err)
    })
  
const entryPoint = document.querySelector('.cards')
 
    function gitCardMaker(data) {
      const gitCard = document.createElement('div')
      const image = document.createElement('img')
      const gitName = document.createElement('h3')
      const gitUser = document.createElement('p')
      const location = document.createElement('p')
      const profileLink = document.createElement('p')
      const followers = document.createElement('p')
      const following = document.createElement('p')
      const bio = document.createElement('p')

      gitName.textContent = `${data.name}`
      image.src = data.avatar_url
      gitUser.textContent = `${data.login}`
      location.textContent = `Location: ${data.location}`
      profileLink.textContent = `Profile: ${data.html_url}`
      followers.textContent = `Followers: ${data.followers}`
      following.textContent = `Following: ${data.following}`
      bio.textContent = `Bio: ${data.bio}`

      gitCard.classList.add('card')
      image.classList.add('git-img')
      gitUser.classList.add('username')
      gitName.classList.add('name')
      location.classList.add('location')
      followers.classList.add('followers')
      following.classList.add('following')
      bio.classList.add('bio')

      gitCard.appendChild(image)
      gitCard.appendChild(gitName)
      gitName.appendChild(gitUser)
      gitName.appendChild(location)
      gitName.appendChild(profileLink)
      gitName.appendChild(followers)
      gitName.appendChild(following)
      gitName.appendChild(bio)

      return gitCard;

    }

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
