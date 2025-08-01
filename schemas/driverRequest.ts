// /sanity/schemas/driverRequest.ts
export default {
  name: 'driverRequest',
  title: 'Driver Requests',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{type: 'user'}],
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
    },
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'vehicleDetails',
      title: 'Vehicle Details',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Vehicle Type',
          type: 'string',
          options: {
            list: ['sedan', 'suv', 'truck', 'van', 'luxury'],
          },
        },
        {
          name: 'transmission',
          title: 'Transmission',
          type: 'string',
          options: {
            list: ['automatic', 'manual', 'both'],
          },
        },
        {
          name: 'insurance',
          title: 'Insurance',
          type: 'string',
          options: {
            list: ['comprehensive', 'third-party', 'none'],
          },
        },
        {
          name: 'brand',
          title: 'Brand',
          type: 'string',
        },
        {
          name: 'model',
          title: 'Model',
          type: 'string',
        },
        {
          name: 'year',
          title: 'Year',
          type: 'string',
        },
      ],
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
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    },
  ],
}
