const knex = require('knex')(require('./knexfile'))

module.exports = {
  createUser ({ username, password, role }) {
    console.log(`Add user ${username} with password ${password}`)
    console.log(role);
    return knex('user').insert({
      username,
      password,
      role
    }).returning('id');
  },
   createStudent ({ name, f_number, egn, degree, year, user_id }) {
    console.log(`Add student ${name} with user id ${user_id}`)
    return knex('students').insert({
      name,
      f_number,
      egn, 
      degree,
      year, 
      user_id
    })
  },
  createProfessor({name, discipline, office, email, visiting_hours, user_id}){
    console.log(`Add professor ${name} with user id ${user_id}`)
    return knex('professors').insert({
      name,
      discipline,
      office, 
      email,
      visiting_hours, 
      user_id
    })
  }, 
  createCourse({name, professor_id, room_id, start_time,
     end_time, department, category }){
    console.log(`Add course ${name}`)
    return knex('courses').insert({
      name,
      professor_id,
      room_id, 
      start_time,
      end_time, 
      department,
      category
    })
  }, 
  createEvent({name, professor_id, room_id, start_time,
     end_time, course_id, description }){
    console.log(`Add event ${name}`)
    return knex('events').insert({
      name,
      professor_id,
      room_id, 
      start_time,
      end_time, 
      course_id,
      description
    })
  }, 
  createRoom({building, number, floor }){
   console.log(`Add room ${number}`)
   return knex('rooms').insert({
     building,
     number,
     floor
   })
 }, 
  getUser({username, password}){
    return knex('user')
          .where({
            username: username,
            password: password
          });
  },
  
  getProfessor({name}){
    return knex('professors')
          .where({
            name: name
          });
  },
  getProfessorById({id}){
    return knex('professors')
          .where({
            id: id
          });
  },
  getCourse({name}){
    return knex('courses')
          .where({
            name: name
          });
  },
  getCourseById({id}){
    return knex('courses')
          .where({
            id: id
          });
  },
  getRoom({number}){
    return knex('rooms')
          .where({
            number: number
          });
  },
  getRoomById({id}){
    return knex('rooms')
          .where({
            id: id
          });
  },
  getCourses(){
    return knex('courses');
  },
  getRooms(){
    return knex('rooms');
  },
  getEvents(){
    return knex('events');
  }, 
  getStudents(){
    return knex('students');
  }
}