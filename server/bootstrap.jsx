Meteor.startup(() => {
  if(Meteor.users.find().count() === 0) {

    var userObject = {
      email: "alexander@hnssn.se",
      password: "foodbars"
    };

    Accounts.createUser(userObject);
  }
  
  if(Tasks.find().count() === 0) {
    Tasks.insert({text: "This is task 1" });
    Tasks.insert({text: "This is task 2" });
    Tasks.insert({text: "This is task 3" });
  }
});
