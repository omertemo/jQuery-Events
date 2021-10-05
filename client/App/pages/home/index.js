import { FlowRouter } from "meteor/ostrio:flow-router-extra";
import Swal from "sweetalert2";

Template.publicPageHome.onCreated(function () {
  this.state = new ReactiveDict(null, {
    todos: [],
  });
});

Template.publicPageHome.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get("todos");

    Meteor.call("todos.list", {}, function (error, result) {
      if (error) {
        console.log("error", error);
      }
      if (result) {
        console.log(result);

        self.state.set("todos", result.todos);
      }
    });
  });
});

Template.publicPageHome.events({
  "click .brd-delete": function (event, template) {
    const todo = this;

    Swal.fire({
      title: "Silmek istiyor musunuz?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--bs-danger)",
      cancelButtonColor: "var(--bs-dark)",
      cancelButtonText: "Hayır",
      confirmButtonText: "Evet",
    }).then((result) => {
      if (result.value) {
        Meteor.call(
          "todos.delete",
          { _id: todo._id },
          function (error, result) {
            if (error) {
              console.log("error", error);
            }

            AppUtil.refreshTokens.set("todos", Random.id());
          }
        );
      }
    });
  },
  "click .brd-update": function (event, template) {
    const todo = this;

    AppUtil.temp.set("todo", this);
  },

  "click .brd-todo-update": function (event, template) {
    event.preventDefault();
    const todo = this;

    AppUtil.temp.set("todo", this.data);
    $("#brdPublicModalTodoUpdateModal").modal("show");
  },
});
