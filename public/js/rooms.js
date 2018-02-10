
get('/rooms')
    .then(function (res) {
        return res.json()
    })
    .then(function (response) {
        response.forEach(element => {
            const roomDiv = `
            <div class='room-container'>
            <div class='label' id='room-label'>
                <p>${element.building}</p>
			</div>
            <div class='label' id='room-label'>
                <p>${element.number}</p>
			</div>
            <div class='label' id='room-label'>
                <p>${element.floor}</p>
            </div>
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