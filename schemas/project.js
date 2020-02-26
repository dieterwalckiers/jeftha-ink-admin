export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Wordt gebruikt om de url mee samen te stellen. De xxx in jeftha.ink/xxx. Je kan dit laten genereren of zelf invullen",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "mainImage",
      title: "Afbeelding",
      type: "image",
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Beschrijving",
      type: "text"
    },
    {
      name: "isHighlighted",
      title: "Uitgelicht project",
      type: "boolean",
      description: "Zet dit aan om dit project onder Home te tonen"
    },
    {
      name: "position",
      title: "Positie ",
      type: "number",
      validation: Rule => Rule.integer(),
      description:
        "De positie van dit project in de gallerij, beginnend achteraan. Hoe hoger de waarde, hoe hoger in de gallerij. Indien leeg, wordt het project ergens onderaan de gallerij getoond."
    }
  ],
  orderings: [
    {
      title: "Position in gallery (descending)",
      name: "positionDesc",
      by: [{ field: "position", direction: "desc" }]
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      isHighlighted: "isHighlighted",
    },
    prepare(selection) {
      const { isHighlighted } = selection;
      return Object.assign({}, selection, {
        subtitle: isHighlighted && "Uitgelicht project"
      });
    }
  }
};
