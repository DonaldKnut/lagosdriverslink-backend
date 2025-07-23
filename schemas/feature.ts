export default {
  name: 'feature',
  title: 'Platform Feature',
  type: 'document',
  fields: [
    {name: 'iconTitle', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
    {name: 'icon', title: 'Icon Image', type: 'image', options: {hotspot: true}},
  ],
}
