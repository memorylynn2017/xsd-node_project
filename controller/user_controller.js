'use strict'
var _ = require('lodash');
var validator = require('validator');
var mongoose = require('mongoose');
require('../models/user.js');
var User = mongoose.model('User')

exports.register = function(req, res, next) {
	var option = {
		error_msg: '',
		title: '注册页面'
	}
	res.render('user/register', option);
}
exports.register_action = function(req, res, next) {
	console.log(req.body);
	var option = {
			tip: '恭喜您注册成功!'
		}
		// 验证通过, 持久化数据
	var user = new User(req.body);
	// User.Create(req.body, function(err) {
	// 	if (err) {
	// 		return next(err);
	// 	}
	// 	res.render('user/regist_suc_tip', option);
	// });
	user.save(function(err) { // 也可以使用 User.Create(properties, callback) 方式保存数据
		if (err) {
			return next(err);
		}

		res.render('user/regist_suc_tip', option);
	});
}