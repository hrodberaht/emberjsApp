import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("products", function() {
    this.route("index", { path: "/" });
    this.route("new");
  });

  this.route("contact");
  this.route("documents", function() {
    this.route("invoices");
    this.route("new");
  });
});

export default Router;
