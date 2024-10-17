import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Image',
          type: 'image',
          options: {hotspot: true}
        })
      ]
    })
  ],
})