/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zz968a8ldadfou4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcdorwje",
    "name": "file_url",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "application/pdf",
        "text/plain",
        "image/jpeg",
        "image/png",
        "application/zip",
        "application/epub+zip"
      ],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ef2bx1tx",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "link",
        "file"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zz968a8ldadfou4")

  // remove
  collection.schema.removeField("rcdorwje")

  // remove
  collection.schema.removeField("ef2bx1tx")

  return dao.saveCollection(collection)
})
