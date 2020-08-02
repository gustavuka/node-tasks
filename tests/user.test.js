const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Test',
    email: 'test@test.com',
    password: 'Testpass123!',
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user', async () => {
    await request(app)
        .post('/users')
        .send({
            name: 'Gus',
            email: 'gusgus@example.com',
            password: 'Mypass123!',
        })
        .expect(201)
})

test('Should login an user', async () => {
    await request(app)
        .post('/users/login')
        .send({
            email: userOne.email,
            password: userOne.password,
        })
        .expect(200)
})

test('Should not login non existent user', async () => {
    await request(app)
        .post('/users/login')
        .send({
            email: 'failmail@mail.com',
            password: 'akslmd123',
        })
        .expect(400)
})
