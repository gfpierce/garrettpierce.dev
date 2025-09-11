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
      name: "createdOn",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    }),
    defineField({
      name: "description",
      type: "blockContent",
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
      name: "leadImage",
      type: "image",
      title: "Lead image",
      description: "Image for gallery thumbnail",
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
  ],
  preview: {
    select: {
      images: "images",
      leadImage: "leadImage",
      title: "title",
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
