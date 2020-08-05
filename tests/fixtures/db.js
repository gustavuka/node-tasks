const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: 'Test',
    email: 'test@test.com',
    password: 'Testpass123!',
    tokens: [
        {
            token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
        },
    ],
}
const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name: 'Tester 2',
    email: 'tester@test2.com',
    password: '123passtest!',
    tokens: [
        {
            token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET),
        },
    ],
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'This is a test task',
    completed: false,
    owner: userOneId._id,
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'This is a second test task',
    completed: true,
    owner: userOneId._id,
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'This is a third test task',
    completed: true,
    owner: userTwo._id,
}

const setupDatabase = async () => {
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    setupDatabase,
    taskOne,
    taskTwo,
    taskThree,
}
