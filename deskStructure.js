import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Instellingen")
        .child(
          S.editor()
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("About-pagina")
        .child(
          S.editor()
            .schemaType("about")
            .documentId("about")
        ),
      S.listItem()
        .title("Contactpagina")
        .child(
          S.editor()
            .schemaType("contact")
            .documentId("contact")
        ),
      ...S.documentTypeListItems().filter(
        listItem =>
          !["siteSettings", "about", "contact"].includes(listItem.getId())
      )
    ]);
