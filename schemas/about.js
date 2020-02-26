export default {
  name: "about",
  title: "About info",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string"
    },
    {
      name: "description",
      title: "Tekst",
      type: "text"
    }
  ],
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"]
};
