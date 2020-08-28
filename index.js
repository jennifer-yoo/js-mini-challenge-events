/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

let head = document.getElementById('header')
head.addEventListener("click", function(e) {
  toggleColor(head);
})

/***** Deliverable 2 *****/
let playerForm = document.getElementById('new-player-form')
  playerForm.addEventListener('submit', function(e) {
    event.preventDefault();
      let newPlayer = {
        number: playerForm.number.value,
        name: playerForm.name.value,
        nickname: playerForm.nickname.value,
        photo: playerForm.photo.value,
        likes: 0,
      }
    renderPlayer(newPlayer);
  }
)

/***** Deliverable 3 *****/


document.addEventListener('click', function(e) {
  if (e.target.innerText === "❤️") {
    const numLike = e.target.parentElement.querySelector('p').textContent.split(" ")[0] // get the likes from the p tag and gives string number
    let newLike = parseInt(numLike, 10) + 1 // turns string into number
    let idPlayer = e.target.parentElement.querySelector('p')  // finds player that was liked 
    idPlayer.innerHTML = `${newLike} likes` // updates like for player that was liked
  }
})


