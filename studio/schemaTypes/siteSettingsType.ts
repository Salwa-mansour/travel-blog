import { defineType, defineField } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Global Data',
  type: 'document',
  


  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'My Travel Weather Blog',
    }),
    // seo elements
    defineField({
      name: 'title',
      title: 'Global Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'favicon',
      title: 'Tab Icon (Favicon)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'footerParagraph',
      title: 'Footer Paragraph',
      type: 'string',
    }),
    // Embed the SEO object here for global defaults/fallback values
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'seo', 
    }),

 

   
  ],
});