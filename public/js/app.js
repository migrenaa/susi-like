
const CreateCourse = document.querySelector('.CreateCourse')
CreateCourse.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = CreateCourse.querySelector('.name').value;
  const professor = CreateCourse.querySelector('.professor').value;
  const room = CreateCourse.querySelector('.room').value;
  const start_time = CreateCourse.querySelector('.start_time').value;
  const end_time = CreateCourse.querySelector('.end_time').value;
  const department = CreateCourse.querySelector('.department').value;
  const category = CreateCourse.querySelector('.category').value;
  post('/courses', {
    name, professor, room, start_time,
    end_time, department, category
  })
    .then((res) => {
      if (res.status == 200)
        alert('new course created ;)');
    });
})

const CreateRoom = document.querySelector('.CreateRoom')
CreateRoom.addEventListener('submit', (e) => {
  e.preventDefault();
  const building = CreateRoom.querySelector('.building').value;
  const number = CreateRoom.querySelector('.number').value;
  const floor = CreateRoom.querySelector('.floor').value;
  post('/CreateRoom', { building, number, floor })
    .then((res) => {
      if (res.status == 200)
        alert('new room created ;)');
    });
  });



function post(path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}


function get(path, data) {
  return window.fetch(path, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}