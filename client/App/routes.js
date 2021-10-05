import { FlowRouter } from "meteor/ostrio:flow-router-extra";

FlowRouter.route("/", {
  name: "public.home",
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "publicPageHome" });
  },
});
FlowRouter.route("/events", {
  name: "public.study",
  action: function (params, queryParams) {
    this.render("publicLayoutDefault", { page: "publicPageStudy" });
  },
});
