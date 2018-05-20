module.exports.models = {

  migrate: 'safe',
  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'number', autoIncrement: true, },
  },
  dataEncryptionKeys: {
    default: 'W5mw1MSyLxXOe3/Q6t1FXAQ0yrW1IPAPltUt3EFTBbM='
  },
  cascadeOnDestroy: true

};
