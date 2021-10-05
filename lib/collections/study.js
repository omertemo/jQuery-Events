import SimpleSchema from "simpl-schema";

Study = new Mongo.Collection("study");

StudySchema = new SimpleSchema({
  name: String,
  number: SimpleSchema.Integer,
});

Study.attachSchema(StudySchema);
