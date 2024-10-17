import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'focus',
  title: 'Focus',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      text: 'text',
      image: 'image',
    },
    prepare() {
      return {
        title: `Focus`,
      }
    },
  },
})
