
const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = Login.querySelector('#username').value;
  const password = Login.querySelector('#password').value;
  post('/login', { username, password })
    .then(function (res) {
      if (res.status == 400)
        alert('incorrect username or password');
      return res.json()
    })
    .then(function (response) {
      console.log(response);
      switch (response.role) {
        case ('professor'):
        console.log('professor')
          window.location.assign('../html/create-event.html');
          break;
        case ('student'):
        console.log('redirect to event-list')
          window.location.assign('../html/event-list.html');
          break;
        case ('admin'):
          window.location.assign('../html/createUsers.html');
          break;
      }
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