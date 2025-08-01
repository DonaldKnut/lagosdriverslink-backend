export default {
  name: 'planDriverRequest',
  title: 'Plan Driver Requests',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'plan',
      title: 'Selected Plan',
      type: 'string',
      options: {
        list: [
          {title: 'Daily Driver', value: 'daily'},
          {title: 'Weekday Driver', value: 'weekday'},
          {title: 'Weekday+ Driver', value: 'weekdayPlus'},
          {title: 'Full Week Driver', value: 'fullWeek'},
          {title: 'VIP Spy Police Driver', value: 'vipSpy'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'additionalNotes',
      title: 'Additional Notes',
      type: 'text',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['pending', 'processing', 'completed', 'rejected'],
        layout: 'dropdown',
      },
      initialValue: 'pending',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
