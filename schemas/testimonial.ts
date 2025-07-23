export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {name: 'name', title: 'Client Name', type: 'string'},
    {name: 'role', title: 'Role / Company', type: 'string'},
    {name: 'message', title: 'Testimonial Message', type: 'text'},
    {name: 'photo', title: 'Client Photo', type: 'image', options: {hotspot: true}},
  ],
}
