import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const playList = defineType({
  name: "playList",
  title: "Playlists",
  type: "document",
  icon: UserIcon,
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
      },
    }),

    defineField({
      name: "select",
      type: "array",
      of: [{ type: "reference", to: [{ type: "startup" }] }],
    }),
  ],
});
