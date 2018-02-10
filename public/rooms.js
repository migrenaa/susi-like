
get('/rooms')
    .then(function (res) {
        return res.json()
    })
    .then(function (response) {
        response.forEach(element => {
            const roomDiv = `
            <div class='Room'>
                <p id='building' style="display:inline;">${element.building}</p>
                <p id='number' style="display:inline;">${element.number}</p>
                <p id='floor' style="display:inline;">${element.floor}</p>
            </div>`
            const container = document.getElementById('room-container');
            const newDiv = document.createElement('div');
            newDiv.innerHTML = roomDiv;
            container.appendChild(newDiv);

        });
    });

function get(path) {
    return window.fetch(path, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}