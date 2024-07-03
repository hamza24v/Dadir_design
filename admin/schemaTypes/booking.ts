import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'booking',
    title: "Booking",
    type: 'document',
    fields: [
        defineField({
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email(),
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'dateOfService',
            title: 'Date of Service',
            type: 'datetime',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Furniture Assembly', value: 'Furniture Assembly' },
                    { title: 'Furniture Delivery', value: 'Furniture Delivery' },
                    { title: 'Outdoor Furniture Assembly', value: 'Outdoor Furniture Assembly' },
                    { title: 'Other', value: 'Other' },
                ],
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            validation: Rule => Rule.required(),
        }),
    ]
});