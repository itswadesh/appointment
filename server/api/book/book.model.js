'use strict';

import mongoose from 'mongoose';

var BookSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  author:String
});

export default mongoose.model('Book', BookSchema);
