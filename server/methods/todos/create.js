import SimpleSchema from "simpl-schema";

new ValidatedMethod({
  name: "todos.create",
  validate: new SimpleSchema({
    todo: TodoSchema,
  }).validator(),
  run: function (data) {
    this.unblock();

    return Todos.insert(data.todo);
  },
});
