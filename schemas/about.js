export default {
  name: "about",
  title: "About info",
  type: "document",
  fields: [
    {
      name: "menuItemName",
      title: "Naam menu-item",
      type: "string"
    },
    {
      name: "title",
      title: "Titel",
      type: "string"
    },
    {
      name: "description",
      title: "Tekst",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    }
  ],
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"]
};
