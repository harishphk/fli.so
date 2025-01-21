/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fyeed79u5pekyt6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "fyeed79u5pekyt6",
    "created": "2024-12-26 08:54:43.773Z",
    "updated": "2024-12-26 08:54:43.773Z",
    "name": "products_access",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mrchntrq",
        "name": "order_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "6qcx6otr7ntuy1w",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "2mkuhwwa",
        "name": "token",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1bcyyx7q",
        "name": "expiry",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
