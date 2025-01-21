/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qcx6otr7ntuy1w")

  // remove
  collection.schema.removeField("8sidopux")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qcx6otr7ntuy1w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8sidopux",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "pending",
        "completed"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
