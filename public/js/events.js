
const CreateEvent = document.querySelector('.CreateEvent')
CreateEvent.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = CreateEvent.querySelector('.name').value;
  const professor = CreateEvent.querySelector('.professor').value;
  const room = CreateEvent.querySelector('.room').value;
  const start_time = CreateEvent.querySelector('.start_time').value;
  const end_time = CreateEvent.querySelector('.end_time').value;
  const course = CreateEvent.querySelector('.course').value;
  const description = CreateEvent.querySelector('.description').value;
  post('/events', { name, professor, room, start_time,
  end_time, course, description })
  .then(() => alert('event created.'));
});

const ListEvents = document.querySelector('.all-events-button')
ListEvents.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.assign('../html/events-list.html');
});

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
  