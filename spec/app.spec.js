const request = require('supertest');
const app = require('../index'); // Your Express app
const taskController = require('../controllers/task.controller');

describe('Task Controller', () => {
  it('should create a new task', (done) => {
    request(app)
      .post('/tasks')
      .send({ id: '1', title: 'Test Task', description: 'This is a test task' })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should get all tasks', (done) => {
    request(app)
      .get('/tasks')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  // Add more test cases for getTaskById, updateTaskById, and deleteTaskById here
});
