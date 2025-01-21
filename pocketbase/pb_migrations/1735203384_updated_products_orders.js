/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qcx6otr7ntuy1w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hwzbixhl",
    "name": "access_token",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fyeed79u5pekyt6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6qcx6otr7ntuy1w")

  // remove
  collection.schema.removeField("hwzbixhl")

  return dao.saveCollection(collection)
})
