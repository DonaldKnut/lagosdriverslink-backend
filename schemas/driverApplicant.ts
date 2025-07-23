export default {
  name: 'driverApplicant',
  title: 'Driver Applicant',
  type: 'document',
  fields: [
    {name: 'name', title: 'Full Name', type: 'string'},
    {name: 'phone', title: 'Phone Number', type: 'string'},
    {name: 'email', title: 'Email Address', type: 'string'},
    {name: 'experience', title: 'Years of Experience', type: 'number'},
    {name: 'licenseNumber', title: 'License Number', type: 'string'},
    {name: 'photo', title: 'Photo (optional)', type: 'image'},
    {name: 'resume', title: 'Upload Resume', type: 'file'},
    {name: 'category', title: 'Driver Type', type: 'string'},
    {name: 'location', title: 'Location', type: 'string'},
    {
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: ['pending', 'interviewed', 'accepted', 'rejected'],
      },
    },
  ],
}
