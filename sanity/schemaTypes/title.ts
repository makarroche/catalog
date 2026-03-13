import {defineType, defineField} from 'sanity'

export const title = defineType({
  name: 'title',
  title: 'Title',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
