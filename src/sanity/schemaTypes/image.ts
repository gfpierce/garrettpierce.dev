import { defineField, defineType } from "sanity";

export const imageType = defineType({
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
});
