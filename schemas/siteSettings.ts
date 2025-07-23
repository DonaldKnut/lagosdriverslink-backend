export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {name: 'contactEmail', title: 'Email Address', type: 'string'},
    {name: 'newsletterPlaceholder', title: 'Newsletter Input Placeholder', type: 'string'},
    {
      name: 'locations',
      title: 'Office Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', title: 'Location Name', type: 'string'},
            {name: 'address', title: 'Full Address', type: 'text'},
            {name: 'phone', title: 'Phone Number', type: 'string'},
          ],
        },
      ],
    },
    {
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      name: 'footerLinks',
      title: 'Footer Navigation Labels',
      type: 'array',
      of: [{type: 'string'}],
    },
    {name: 'footerText', title: 'Footer Copyright', type: 'text'},
  ],
}
