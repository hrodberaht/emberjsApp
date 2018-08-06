import Component from "@ember/component";

export default Component.extend({
  editing: false,
  actions: {
    edit() {
      this.set("editing", true);
      console.log(this.get("editing"));
      console.log(this.get(model));
    },
    cancle() {
      this.set("editing", false);
    },
    save() {
      this.set("editing", false);
    }
  }
});
