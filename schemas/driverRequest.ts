export default {
  name: 'driverRequest',
  title: 'Driver Request',
  type: 'document',
  fields: [
    {name: 'fullName', title: 'Full Name', type: 'string'},
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'phone', title: 'Phone Number', type: 'string'},
    {name: 'location', title: 'Preferred Location', type: 'string'},
    {
      name: 'requestDetails',
      title: 'Request Description',
      type: 'text',
    },
    {
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
