
get('/events')
.then(function (res) {
    return res.json()
})
.then(function (response) {
    console.log(response);
    response.forEach(element => {
        console.log(element.room);
        const eventDiv = `
        <div class='Event'>
                    <p id='name' style="display:inline;">${element.name}</p>
                    <p id='professor' style="display:inline">${element.professor}</p>
                    <p id='room' style="display:inline">${element.room}</p>
                    <p id='start_time'style="display:inline">${element.start_time}</p>
                    <p id='end_time' style="display:inline">${element.end_time}</p>
                    <p id='course'style="display:inline">${element.course}</p>
                    <p id='description' style="display:inline">${element.description}</p>
				<HR>
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