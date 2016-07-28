import renameId from 'mongoose-rename-id';
import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  message: String,
  userId: Schema.Types.ObjectId
});
schema.plugin(renameId({ newIdName: 'id', mongoose }));

module.exports = mongoose.model('posts', schema);
