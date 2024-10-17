import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Imagemage',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      email: 'email',
      phoneNumber: 'phoneNumber',
      address: 'address',
    },
    prepare(selection) {
      const {email, phoneNumber, address} = selection
      return {
        title: `Contact`,
      }
    },
  },
})
