export default {
  name: 'chatbotPrompt',
  title: 'AI Chatbot Prompt',
  type: 'document',
  fields: [
    {name: 'question', title: 'Sample User Question', type: 'string'},
    {name: 'response', title: 'Bot Response', type: 'text'},
    {name: 'tags', title: 'Search Tags', type: 'array', of: [{type: 'string'}]},
  ],
}
