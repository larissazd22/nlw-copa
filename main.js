function createGame(player1, hour, player2) {
  return `
          <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
              <strong>${hour}</strong>
              <img
                src="./assets/icon-${player2}.svg"
                alt="Bandeira da ${player2}"
              />
            </li>
  `
}

let delay = -0.3;
delay = delay + 0.3;
function createCard(date, day, games) {
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>

          <ul>
            ${games}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
 <header>
        <img src="./assets/logo.svg" alt="Logo NLW" />
      </header>
      <main id="cards">
        ${createCard(
          "24/11",
          "quinta",
          createGame("suiça", "07:00", "camarões") +
            createGame("uruguai", "10:00", "coreiadosul") +
            createGame("portugal", "13:00", "gana") +
            createGame("brazil", "16:00", "serbia")
        )}
        ${createCard(
          "28/11",
          "segunda",
          createGame("camarões", "07:00", "serbia") +
            createGame("coreiadosul", "10:00", "gana") +
            createGame("brazil", "13:00", "suiça") +
            createGame("portugal", "16:00", "uruguai")
        )}
        ${createCard(
          "02/12",
          "sexta",
          createGame("coreiadosul", "12:00", "portugal") +
            createGame("gana", "12:00", "uruguai") +
            createGame("serbia", "16:00", "suiça") +
            createGame("brazil", "16:00", "camarões")
        )}
        
      </main>
`
