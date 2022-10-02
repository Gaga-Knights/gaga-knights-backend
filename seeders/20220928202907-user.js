'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(1)].map((_) => ({
      username: 'admin',
      email: 'admin@email.com',
      passwordDigest: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('users', users)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}