export default {
  name: 'driver',
  title: 'Driver',
  type: 'document',
  fields: [
    {name: 'name', title: 'Full Name', type: 'string'},
    {name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}},
    {name: 'experience', title: 'Years of Experience', type: 'number'},
    {name: 'location', title: 'Location', type: 'string'},
    {name: 'category', title: 'Category (Private, Corporate, etc)', type: 'string'},
    {name: 'bio', title: 'Short Bio', type: 'text'},
    {name: 'availability', title: 'Currently Available?', type: 'boolean'},
    {name: 'rating', title: 'Rating (1–5)', type: 'number'},
  ],
}
