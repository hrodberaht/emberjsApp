export default function() {
  this.namespace = "/api";
  this.get("/products", function() {
    return {
      data: [
        // {
        //   id: 1,
        //   type: "product",
        //   attributes: {
        //     name: "Asus",
        //     price: 20,
        //     ean: 1234
        //   }
        // },
        // {
        //   id: 2,
        //   type: "product",
        //   attributes: {
        //     name: "Dell",
        //     price: 40,
        //     ean: 4222
        //   }
        // }
      ]
    };
  });
  this.post("/products");
}
