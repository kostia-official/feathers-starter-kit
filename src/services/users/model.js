import renameId from 'mongoose-rename-id';
import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  email: { type: String, unique: true, dropDups: true },
  password: String,
  name: String,
  facebook: Object
});
schema.plugin(renameId({ newIdName: 'id', mongoose }));

module.exports = mongoose.model('users', schema);
