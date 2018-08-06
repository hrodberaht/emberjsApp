import Component from "@ember/component";

export default Component.extend({
  product: {},
  value: "",

  actions: {
    addProduct() {
      console.log(this.get("value"));
    }
  }
});
