const DB = 'https://sharkie-2ae17-default-rtdb.europe-west1.firebasedatabase.app/scores';
let rank = 0;

async function getScores() {
    let response = await fetch(DB + '.json');
    let data = await response.json();
    return data;
}

async function postScore(score) {
    let response = await fetch(DB + '.json', {
        method: 'POST',
        body: JSON.stringify(score),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

async function clearScores() {
    let response = await fetch(DB + '.json', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

async function showFirstScores() {
    showElements();
    let array = await getArrayOfScores();
    array.push({name: 'yourScore', score: getActualScore()});
    let scores = array.sort((a, b) => b.score - a.score);
    rank = scores.findIndex(score => score.name == 'yourScore');
    document.getElementById('rank').innerHTML = (rank + 1);
    let top3 = scores.slice(0, 3); 
    let container = document.getElementById('ranking');
    container.style.height = '110px';
    container.innerHTML = generateHtmlForTable(top3, 0);
}

function showElements() {
    document.getElementById('yourStatistics').classList.remove('d_none');
    document.getElementById('save').classList.remove('d_none');
    document.getElementById('save').readonly = true;
    document.getElementById('save').value = "Save Score";
    document.getElementById('saved').classList.add('d_none');
    document.getElementById('pointsTable').classList.remove('d_none');
}


function getActualScore() {
    if (world)
    return world.getCollectedCoins() * 5 + world.level.points;
    else return 0;
}

function saveScore() {
    document.getElementById('save').placeholder = 'your name';
    document.getElementById('save').value = '';
    document.getElementById('save').removeAttribute('readonly');
    document.getElementById('save').focus();
    document.getElementById('saveKey').classList.remove('d_none');
}

async function setScore() {
    let name = document.getElementById('save').value;
    if (name) {
        let score = getActualScore();
        await postScore({name, score});
    }
    document.getElementById('saved').classList.remove('d_none');
    document.getElementById('saveKey').classList.add('d_none');
    document.getElementById('save').classList.add('d_none');
    await showScores(rank);
    document.getElementById('yourStatistics').classList.add('d_none');
    document.getElementById('pointsTable').classList.add('d_none');
}

async function showScores(rank) {
    let array = await getArrayOfScores();
    let scores = array.sort((a, b) => b.score - a.score);
    let top6 = scores.slice(rank, rank + 12); 
    let container = document.getElementById('ranking');
    container.style.height = '200px';
    container.innerHTML =  generateHtmlForTable(top6, rank);
}


function generateHtmlForTable(scores, rank) {
    let html = '';
    for (let i = 0; i < scores.length; i++) {
        html += /*html*/`
        <div class="row">
            <div class="rank">${i + 1 + rank}</div>
            <div>${scores[i].name}</div>
            <div class="points">${scores[i].score}</div>
        </div>`;
    }
    return html;
}

async function getArrayOfScores() {
    let data = await getScores(); 
    let array = [];
    let keys = Object.keys(data);
    keys.forEach(key => {
        let d = data[key];
        array.push({name: d.name, score: d.score});
    });
    return array;
}