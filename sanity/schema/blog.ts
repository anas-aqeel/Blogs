
export const blog = {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'author',
            title: 'Author',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule: any) => Rule.required(),
        }
    ],
}