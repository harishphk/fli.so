/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zz968a8ldadfou4")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rcdorwje",
    "name": "preview_images",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/png"
      ],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zz968a8ldadfou4")

  // update
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

  return dao.saveCollection(collection)
})
