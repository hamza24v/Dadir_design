import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'oldPrice',
      title: 'Old Price',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'newPrice',
      title: 'New Price',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'variations',
      title: 'Variations',
      type: 'array',
      of: [
        defineField({
          name: 'variation',
          title: 'Variation',
          type: 'object',
          fields: [
            defineField({
              name: 'property',
              title: 'Property',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'oldPrice',
              title: 'Old Price',
              type: 'number',
              validation: Rule => Rule.required().min(0),
            }),
            defineField({
              name: 'newPrice',
              title: 'New Price',
              type: 'number',
              validation: Rule => Rule.required().min(0),
            }),
            defineField({
              name: 'priceId',
              title: 'Stripe Price Id',
              type: 'string',
              validation: Rule => Rule.required().min(0),
            }),
          ],
          options: {
            collapsible: true, // Makes the field collapsible
          },
        }),
      ]
    }),
  ]
})