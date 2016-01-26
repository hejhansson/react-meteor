var collection = Tasks = new Mongo.Collection('Tasks', {});

collection.allow({
	insert: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
	update: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
	remove: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
})

if(Meteor.isServer) {
	Meteor.publish('Tasks', function() {
		if(this.userId) {
			return collection.find({});
		}
	});
}

if(Meteor.isClient) {
	Tracker.autorun(function() {
		Meteor.subscribe('Tasks');
	});
}
