import { defineType, defineField } from 'sanity';
import { LocationSelector } from '../components/LocationSelector'


export const postType = defineType({
  name: 'post',
  title: 'Travel Post',
  type: 'document',
  
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
   
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
     defineField({
     name: 'mainImage',
    title: 'Main Image',
    type: 'imageWithAttribution', // Use your custom schema type here
    }),
    
   defineField({
      name: 'locationDetails',
      title: 'Destination Location',
      description: 'Select country and city to automatically save coordinates.',
      type: 'object',
      validation: (Rule) => Rule.required(),
      components: {
        input: LocationSelector, // Registers your custom React dropdown component
      },
      fields: [
        { name: 'countryName', type: 'string' },
        { name: 'countryCode', type: 'string' },
        { name: 'cityName', type: 'string' },
        { name: 'lat', type: 'number' },
        { name: 'lng', type: 'number' },
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Post excerpt -- overview summary',
      type: 'string',
  
    }),
 
    defineField({
      name: 'tags',
      title: 'Post Tags',
      description: 'Select relevant tags for this travel destination.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    }),
   defineField({
      name: 'body',
      title: 'Body Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          name: 'image', // Keep name as 'image' so Portable Text recognizes it as an image block
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'imageAttribution',
              title: 'Image Attribution (HTML / Text)',
              type: 'text',
              rows: 2,
              description: 'Paste the full Unsplash attribution text or HTML here.',
              options: {
                isHighlighted: true, // Shows up directly when you click edit on the image in the editor
              },
            },
          ],
        },
      ],
    }),
    // Embed the SEO object here for post-specific overrides
    defineField({
      name: 'seo',
      title: 'Post SEO & Metadata',
      type: 'seo',
    }),
  ],
});