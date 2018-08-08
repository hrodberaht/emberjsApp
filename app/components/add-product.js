import Component from "@ember/component";

export default Component.extend({
  product: {},
  value: "",

  actions: {
    addProduct() {
      console.log(this.get("store"));
      let newProduct = this.get("store").createRecord("product", {
        name: "Acer"
      });
      newProduct.save();
      this.get("onSubmit")(this.get("product"));
    }
  }
});
