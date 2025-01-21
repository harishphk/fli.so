/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("te7nvqcfc7ipn0u");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "te7nvqcfc7ipn0u",
    "created": "2024-12-26 09:42:33.152Z",
    "updated": "2024-12-26 09:48:47.433Z",
    "name": "product_files",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kna28xax",
        "name": "file_url",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "mjilyyip",
        "name": "file_type",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "PDF",
            "Video",
            "Image",
            "Zip"
          ]
        }
      },
      {
        "system": false,
        "id": "ucisfb2q",
        "name": "product_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "zz968a8ldadfou4",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "rkyvlxtu",
        "name": "creator_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
