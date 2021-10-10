import SimpleSchema from "simpl-schema";

Template.publicPageStudy.onCreated(function () {
  this.state = new ReactiveDict(null, {
    study: [],
  });
});

Template.publicPageStudy.onRendered(function () {
  const self = this;

  this.autorun(function () {
    AppUtil.refreshTokens.get("study");

    Meteor.call("study.list", {}, function (error, result) {
      if (error) {
        console.log("error", error);
      }
      if (result) {
        console.log(result);

        self.state.set("study", result.study);
      }
    });
  });
});

Template.publicPageStudy.events({
  "click .brd-color-red": function (event, template) {
    $("h1").css("background-color", "red");
    event.preventDefault();
  },
  "click .brd-color-blue": function (event, template) {
    $("h1").css("background-color", "blue");
    event.preventDefault();
  },
  "change .brd-checkbox-yellow": function (event, template) {
    $("h1").css("background-color", "yellow");
  },
  "contextmenu .container": function (event, template) {
    alert("ContextMenu Çalıştı");
    event.preventDefault();
  },
  "keyup .brd-form": function (event, template) {
    $(".brd-form").val($(".brd-form").val().toUpperCase());
    event.preventDefault();
  },
  "keydown .brd-form-form": function (event, template) {
    $(".brd-form-form").val($(".brd-form-form").val().toLowerCase());
    // event.preventDefault(); Fonksiyonun çalışmasını engelliyor
  },
  "submit .brd-submit": function (event, template) {
    alert("Submit edildi");
    event.preventDefault();
  },
  "select .brd-form": function (event, template) {
    alert("select Çalıştı");
    event.preventDefault();
  },
});
