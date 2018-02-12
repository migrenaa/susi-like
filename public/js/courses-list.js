
get('/courses')
.then(function (res) {
    return res.json()
})
.then(function (response) {
    console.log(response);
    response.forEach(element => {
        const courseDiv = `
        <div class="labels">
				<div class='label' id='course-label'>
					<p>${element.name}</p>
				</div>
				<div class='label' id='course-label'>
                    <p>${element.start_time}</p>
				</div>
				<div class='label' id='course-label'>
                    <p>${element.end_time}</p>
				</div>
				<div class='label' id='course-label'>
                    <p>${element.department}</p>
				</div>
				<div class='label' id='course-label'>
                    <p>${element.category}</p>
				</div>
			</div>`
        const container = document.getElementById('courses-container');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = courseDiv;
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