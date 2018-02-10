const ListEvents = document.querySelector('.all-events-button')
ListEvents.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('here');
  window.location.assign('/events-list.html');
});

const CreateCourseOrRoom = document.querySelector('.create-course-or-room-button')
CreateCourseOrRoom.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.assign('/courses.html');
});

const AllRooms = document.querySelector('.all-rooms-button')
AllRooms.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.assign('/rooms-list.html');
});

const CreateStudent = document.querySelector('.CreateStudent')
CreateStudent.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = CreateStudent.querySelector('.name').value
  const f_number = CreateStudent.querySelector('.f_number').value
  const egn = CreateStudent.querySelector('.egn').value
  const degree = CreateStudent.querySelector('.degree').value
  const year = CreateStudent.querySelector('.year').value
  post('/students', { name, f_number, egn, degree, year })
  .then(() => alert('student created.'))
})

const CreateProfessor = document.querySelector('.CreateProfessor')
CreateProfessor.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = CreateProfessor.querySelector('.name').value
  const discipline = CreateProfessor.querySelector('.discipline').value
  const office = CreateProfessor.querySelector('.office').value
  const email = CreateProfessor.querySelector('.email').value
  const visiting_hours = CreateProfessor.querySelector('.visiting_hours').value
  post('/professors', { name, discipline, office, email, visiting_hours })
  .then(() => alert('professor created.'))
})

function post (path, data) {
    return window.fetch(path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }