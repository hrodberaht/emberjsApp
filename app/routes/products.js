import Route from "@ember/routing/route";

export default Route.extend({
  model(param) {
    return [{ id: 1 }, { id: 2 }];
  }
});
