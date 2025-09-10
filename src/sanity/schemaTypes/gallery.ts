import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "createdOn",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
    defineField({
      name: "display",
      type: "string",
      title: "Display as",
      description: "How should we display these images?",
      options: {
        list: [
          { title: "Stacked on top of eachother", value: "stacked" },
          { title: "In-line", value: "inline" },
          { title: "Carousel", value: "carousel" },
        ],
        layout: "radio", // <-- defaults to 'dropdown'
      },
    }),
    defineField({
      name: "zoom",
      type: "boolean",
      title: "Zoom enabled",
      description: "Should we enable zooming of images?",
    }),
    defineField({
      name: "leadImage",
      type: "image",
      title: "Lead image",
      description: "Image for gallery thumbnail",
    })
  ],
  preview: {
    select: {
      images: "images",
      leadImage: "leadImage",
      title: "title"
    },
    prepare(selection) {
      const { leadImage, title } = selection;

      return {
        title: `${title}`,
        media: leadImage,
      };
    },
  },
});
