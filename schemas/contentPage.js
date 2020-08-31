export default {
  name: "contentPage",
  title: "Pagina's",
  type: "document",
  fields: [
    {
      name: "menuName",
      title: "Naam menu-item",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Wordt gebruikt om de url mee samen te stellen. De xxx in jeftha.ink/xxx. Je kan dit laten genereren of zelf invullen",
      options: {
        source: "menuName",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              },
              { name: "color", title: "Color", type: "color" }
            ]
          }
        }
      ]
    },
    {
      name: "padding",
      title: "Marges",
      type: "string",
      description:
        "De marges rondom de tekst. In volgend formaat: <top>px <right>px <bottom>px <left>px",
    },
    {
      name: "mobilePadding",
      title: "Marges bij mobiel",
      type: "string",
      description:
        "De marges rondom de tekst bij mobiele weergave. In zelfde formaat",
    },
    {
      name: "textAlign",
      title: "Uitlijning",
      type: "string",
      options: {
        list: [
          { title: "Links", value: "left" },
          { title: "Rechts", value: "right" },
          { title: "Centreren", value: "center" },
          { title: "Justify", value: "justify" }
        ],
      }
    },
  ],
  initialValue: {
    padding: "30px 200px 0px 200px",
    mobilePadding: "5px 30px 0px 30px",
    textAlign: "left",
  },
};
