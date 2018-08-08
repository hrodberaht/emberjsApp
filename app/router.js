import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("products", function() {
    this.route("index", { path: "products/index" });
    this.route("new", { path: "products/new" });
  });

  this.route("contact");
});

export default Router;
