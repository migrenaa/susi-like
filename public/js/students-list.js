
get('/students')
.then(function (res) {
    return res.json()
})
.then(function (response) {
    console.log(response);
    response.forEach(element => {
        const studentsDiv = `
        <div class="labels">
				<div class='label' id='student-label'>
					<p>${element.name}</p>
				</div>
				<div class='label' id='student-label'>
                    <p>${element.f_number}</p>
				</div>
				<div class='label' id='student-label'>
                    <p>${element.egn}</p>
				</div>
				<div class='label' id='student-label'>
                    <p>${element.degree}</p>
				</div>
				<div class='label' id='student-label'>
                    <p>${element.year}</p>
				</div>
			</div>`
        const container = document.getElementById('students-container');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = studentsDiv;
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