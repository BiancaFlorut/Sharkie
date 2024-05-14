const DB = 'https://sharkie-2ae17-default-rtdb.europe-west1.firebasedatabase.app/scores';

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

async function showFirstScores() {
    let data = await getScores();
    let yourScore = getActualScore();
    let array = [];
    let keys = Object.keys(data);
    keys.forEach(key => {
        let d = data[key];
        array.push({name: d.name, score: d.score});
    });
    array.push({name: 'yourScore', score: yourScore});
    let scores = array.sort((a, b) => b.score - a.score);
    let rank = scores.findIndex(score => score.name == 'yourScore');
    document.getElementById('rank').innerHTML = (rank + 1);
    let top3 = scores.slice(0, 3); 
    let table = document.getElementById('statistics');
    let html = '';
    html = '<tr>';
    for (let i = 0; i < top3.length; i++) {
        html += '<td class="rank">' + (i + 1) + '</td>' + '<td>' + top3[i].name + '</td><td class="rank">' + top3[i].score + '</td>';
    }
    html += '</tr>';
    table.innerHTML += html;
}


function getActualScore() {
    if (world)
    return world.getCollectedCoins() * 5 + world.level.points;
    else return 0;
}

function saveScore() {
    document.getElementById('save').innerHTML='your name';
    document.getElementById('save').contentEditable='true';
    document.getElementById('save').focus();
    document.getElementById('saveKey').classList.remove('d_none');
}

async function setScore() {
    let name = document.getElementById('save').innerHTML;
    if (name) {
        let score = getActualScore();
        await postScore({name, score});
    }
    document.getElementById('saved').classList.remove('d_none');
    document.getElementById('saveKey').classList.add('d_none');
    document.getElementById('save').classList.add('d_none');
    showScores();
    document.getElementById('yourStatistics').classList.add('d_none');4
    document.getElementById('pointsTable').classList.add('d_none');
}

async function showScores() {
    let data = await getScores();
    let array = [];
    let keys = Object.keys(data);
    keys.forEach(key => {
        let d = data[key];
        array.push({name: d.name, score: d.score});
    });
    let scores = array.sort((a, b) => b.score - a.score);
    let top6 = scores.slice(0, 6); 
    let table = document.getElementById('statistics');
    table.innerHTML = '';
    let html = '<tr>';
    for (let i = 0; i < top6.length; i++) {
        html += '<td class="rank">' + (i + 1) + '</td>' + '<td>' + top6[i].name + '</td><td class="rank">' + top6[i].score + '</td>';
        if (i == 2) html += '</tr><tr>';
    }
    html += '</tr>';
    table.innerHTML += html;
}