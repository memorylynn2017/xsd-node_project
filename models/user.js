'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: { type: String, index: true },
  password: String,
  checksum:String
});

mongoose.model('User', UserSchema);