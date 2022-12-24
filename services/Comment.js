import { db } from "../connection/db.js";

export const TABLE_NAME = "comments";

export const CommentsService = {
    findAll() {
		return db(TABLE_NAME).select("*");
	},
	insert(comment) {
		return db(TABLE_NAME).insert(comment);
	},
	delete(id) {
		return db(TABLE_NAME).where("id", id).del();
	},
	update(comment) {
		return db(TABLE_NAME)
			.where("id", comment.id)
			.update({
				name: comment.name,
				comment: comment.comment
			});
	},
	findById(id) {
		return db(TABLE_NAME).where("id", id);
	}
}