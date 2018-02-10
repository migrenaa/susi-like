
get('/events')
.then(function (res) {
    return res.json()
})
.then(function (response) {
    console.log(response);
    response.forEach(element => {
        console.log(element.room);
        const eventDiv = `
        <div class='labels'>
        <div class='label'>
            <p>${element.name}</p>
        </div>
        <div class='label'>
            <p>${element.professor}</p>
        </div>
        <div class='label'>
            <p>${element.room}</p>
        </div>
        <div class='label'>
            <p>${element.start_time}</p>
        </div>
        <div class='label'>
            <p>${element.end_time}</p>
        </div>
        <div class='label'>
            <p>${element.course}</p>
        </div>
        <div class='label'>
            <p>${element.description}</p>
        </div>
        </div>`
        const container = document.getElementById('event-container');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = eventDiv;
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