import Component from "@ember/component";

export default Component.extend({
  product: {},

  actions: {
    addProduct() {
      let newProduct = this.get("store").createRecord("product", {
        name: this.get("product.name"),
        ean: this.get("product.ean"),
        price: this.get("product.price")
      });
      newProduct.save();
      this.set("product.name", "");
      this.set("product.ean", "");
      this.set("product.price", "");
    }
  }
});
