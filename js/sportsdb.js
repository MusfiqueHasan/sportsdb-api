const loadTeamResult = async () => {
    const searchInputBox = document.getElementById('search-input-box');
    const searchText = searchInputBox.value
    searchInputBox.value = '';
    if (searchText == '') {

    } else {
        const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
        const res = await fetch(url);
        const data = await res.json();
        displayTeamResult(data.teams);
        console.log(data.teams)
    }


}

loadTeamResult();

const displayTeamResult = (teams) => {
    const teamCard = document.getElementById('team-card')
    teamCard.textContent = ''
    teams.map(team => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        <div class="card mb-3 mx-auto mb-5 col" style="max-width: 540px;">
                    <div class="row g-0 " >
                        <div class="col-md-4">
                            <img src="${team.strTeamBadge}" class="img-fluid rounded-start" alt="...">
                       </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${team.strTeam}</h5>
                                <p class="card-text">${team.strDescriptionEN.slice(0, 100)}</p>                
                            </div>
                        </div>
                    </div>
                  </div>
                
        `;
        teamCard.appendChild(cardDiv);
    })
}