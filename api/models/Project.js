

module.exports = {

  attributes: {
  	name: {
        type: 'string'
    },
    sprints: {
      collection: 'Sprints',
      via: 'project_id'
    },
    tasks: {
      collection: 'Task',
      via: 'project_name'
    },
    members: {
      collection: 'User',
      via: 'project',
      through: 'userproject'
    },
    user_stories: {
      collection: 'User_story',
      via: 'project_id'
    }
  },
  seedData:[
      {
        name: 'TEGScrum-be',
        members: [1,2],
        rol: 'rol'
      },
      {
        name: 'TEGScrum-fe',
        members: [1]
      }
    ]
  
};

