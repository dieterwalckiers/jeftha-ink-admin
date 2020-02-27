export default {
  name: "siteSettings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string"
    },
    {
      name: "logo",
      title: "Logo",
      type: "image"
    },
    {
      name: "backgroundColor",
      title: "Achtergrondkleur",
      type: "color"
    },
    {
      name: "homeMenuItemName",
      title: "Naam Home menu-item",
      type: "string"
    },
    {
      name: "galleryMenuItemName",
      title: "Naam Galerij menu-item",
      type: "string"
    },
    {
      name: "menuPrimaryColor",
      title: "Hoofdkleur menu",
      type: "color"
    },
    {
      name: "menuAccentColor",
      title: "Accentkleur menu",
      type: "color"
    }
  ],
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"]
};
