/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6qcx6otr7ntuy1w");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6qcx6otr7ntuy1w",
    "created": "2024-12-26 08:53:40.216Z",
    "updated": "2025-01-01 18:11:19.315Z",
    "name": "products_orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y59p41ol",
        "name": "buyer_email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "92ikkmow",
        "name": "payment_intent_id",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
