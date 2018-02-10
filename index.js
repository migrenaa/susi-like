const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())


app.post('/students', (req, res) => {
  store.createUser({
    username: req.body.name,
    password: req.body.egn,
    role: 'student'
  }).then((function (id) {
    store
      .createStudent({
        name: req.body.name,
        f_number: req.body.f_number,
        egn: req.body.egn,
        degree: req.body.degree,
        year: req.body.year,
        user_id: id
      })
      .then(() => res.sendStatus(200))
  }));
});

app.post('/professors', (req, res) => {
  store.createUser({
    username: req.body.name,
    password: req.body.name,
    role: 'professor'
  }).then((function (id) {
    store
      .createProfessor({
        name: req.body.name,
        discipline: req.body.discipline,
        office: req.body.office,
        email: req.body.email,
        visiting_hours: req.body.visiting_hours,
        user_id: id
      })
      .then(() => res.sendStatus(200))
  }));
});

app.post('/login', (req, res) => {
  store.getUser({
    username: req.body.username,
    password: req.body.password
  }).then((function (user) {
    console.log(user);
    if (!Array.isArray(user) || !user.length)
      return '';
    else
      return user[0].role;
  }))
    .then(function (role) {
      console.log(role);
      if (role == '')
        return res.sendStatus(400)
      else
        console.log({ "role": role });
      return res.json({ "role": role });
    });
});

app.post('/courses', (req, res) => {
  Promise.all([
    store.getProfessor({
      name: req.body.professor
    }),
    store.getRoom({
      number: req.body.room
    })
  ]).then(function (response) {
    console.log(response);
    if (!Array.isArray(response[0]) || !response[0].length)
      return res.sendStatus(400);
    if (!Array.isArray(response[1]) || !response[1].length)
      return res.sendStatus(400).body('no such room')
    store.createCourse({
      name: req.body.name,
      professor_id: response[0][0].id,
      room_id: response[1][0].id,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      department: req.body.department,
      category: req.body.category
    }).then(() => res.sendStatus(200));
  })
    .catch(err => { console.log(err) });
});


app.post('/events', (req, res) => {
  Promise.all([
    store.getProfessor({
      name: req.body.professor
    }),
    store.getRoom({
      number: req.body.room
    }),
    store.getCourse({
      name: req.body.course
    })
  ]).then(function (response) {
    if (!Array.isArray(response[0]) || !response[0].length)
      return res.sendStatus(400).body('no such professor');
    if (!Array.isArray(response[1]) || !response[1].length)
      return res.sendStatus(400).body('no such room')
    if (!Array.isArray(response[2]) || !response[2].length)
      return res.sendStatus(400).body('no such course')
    store.createEvent({
      name: req.body.name,
      professor_id: response[0][0].id,
      room_id: response[1][0].id,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      course_id: response[2][0].id,
      description: req.body.description
    }).then(() => res.sendStatus(200));
  })
    .catch(err => { console.log(err) });
});

app.post('/rooms', (req, res) => {
  store.createRoom({
    building: req.body.building,
    number: req.body.number,
    floor: req.body.floor
  })
    .then(() => res.sendStatus(200))
});

app.get('/rooms', (req, res) => {
  store.getRooms()
    .then((rooms) => { res.json(rooms) });
});

app.get('/events', (req, res) => {
  store.getEvents()
    .then((events) => {
      var promises = [];
      events.forEach(event => {
        promises.push(new Promise((resolve) => {
          Promise.all([
            store.getProfessorById({
              id: event.professor_id
            }),
            store.getRoomById({
              id: event.room_id
            }),
            store.getCourseById({
              id: event.course_id
            })])
            .then(function (result) {
              console.log(result[1][0]); 
              event.professor = result[0][0].name;
              event.room = result[1][0].number;
              event.course = result[2][0].name;
              resolve(event);
            })
        }));
      });
      Promise.all(promises).then((response) => {
        console.log(response);
        res.json(response)
      });
    });
});


app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})