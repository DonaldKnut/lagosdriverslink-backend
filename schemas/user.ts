// /sanity/schemas/user.ts
export default {
  name: 'user',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    {
      name: 'dob',
      title: 'Date of Birth',
      type: 'date',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: ['client', 'admin'],
        layout: 'dropdown',
      },
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    },
  ],
}
