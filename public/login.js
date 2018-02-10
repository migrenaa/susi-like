
const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = Login.querySelector('.username').value;
  const password = Login.querySelector('.password').value;
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
          window.location.assign('/createEvent.html');
          break;
        case ('student'):
          window.location.assign('/events-list.html');
          break;
        case ('admin'):
          window.location.assign('/createUsers.html');
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