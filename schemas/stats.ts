export default {
  name: 'stats',
  title: 'Platform Stats',
  type: 'document',
  fields: [
    {name: 'experienceYears', title: 'Years of Experience', type: 'string'},
    {name: 'dailyRequests', title: 'Daily Requests', type: 'string'},
    {name: 'activeUsers', title: 'Active Users', type: 'string'},
    {name: 'buttonText', title: 'CTA Button Text', type: 'string'},
    {name: 'buttonLink', title: 'CTA Button Link', type: 'url'},
  ],
}
