// Model for server script

const db = require('../db').connect();

const ObjectId = require('mongojs').ObjectId;

exports.getData = (cb) => {
	try {
		db.article.find().sort({article:-1}).limit(30,function (err, doc) {
				cb(err, doc);
		});
	} catch (err) {
		console.log(err.name);
	}
}
exports.getOne = (id, cb)=>{

	db.article.find({article: id},(err,doc)=>{

		cb(doc);

	})

}
exports.UserAdd = (obj)=>{
	let _id = obj._id;
	delete(obj._id);
	db.users.insert(obj);
	// db.users.update({"_id": ObjectId(_id)},{$set: obj});

}