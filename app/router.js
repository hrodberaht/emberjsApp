import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("products", function() {
    this.route("edit", { path: "product/:edit_id" });
  });

  this.route("new", { path: "products/product/new" });
});

export default Router;
