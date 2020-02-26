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
        .title("About info")
        .child(
          S.editor()
            .schemaType("about")
            .documentId("about")
        ),
      ...S.documentTypeListItems().filter(
        listItem => !["siteSettings", "about"].includes(listItem.getId())
      )
    ]);
