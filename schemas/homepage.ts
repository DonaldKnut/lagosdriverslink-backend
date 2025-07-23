export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {name: 'heroTitle', title: 'Hero Title', type: 'string'},
    {name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string'},
    {name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}},
    {name: 'ctaText', title: 'CTA Button Text', type: 'string'},
    {name: 'ctaLink', title: 'CTA Button Link', type: 'url'},
    {name: 'searchPlaceholder', title: 'Search Placeholder', type: 'string'},
  ],
}
