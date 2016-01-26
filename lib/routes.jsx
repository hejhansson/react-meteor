FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    renderMainLayoutWith(<Home />);
  }
});
FlowRouter.route("/login", {
  name: 'Login',
  action(params) {
    if(!Meteor.userId()) {
      renderMainLayoutWith(<UserLogin />);
    }
    else {
      FlowRouter.go('/');
    }
  }
});

FlowRouter.route("/burgers", {
  name: 'Burgers',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<Burgers />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});

FlowRouter.route("/fries", {
  name: 'Fries',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<Fries />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});

FlowRouter.route("/tasks", {
  name: 'Tasks',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<ShowTasks />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});
FlowRouter.route("/profile", {
  name: 'Profile',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<Profile />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});

FlowRouter.route("/add-task", {
  name: 'AddTask',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<AddTask />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});

FlowRouter.route("/welcome", {
  name: 'Welcome',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<Welcome />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});

FlowRouter.route("/sign-up", {
  name: 'SignUp',
  action(params) {
    renderMainLayoutWith(<SignUp />);
  }
});


function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    //footer: <Footer />
  });
}
