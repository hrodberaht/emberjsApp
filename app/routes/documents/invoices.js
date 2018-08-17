import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      {
        number: "1234",
        companyName: "Emtex",
        products: [
          {
            name: "toy",
            ean: "55555",
            quantity: 2
          },

          {
            name: "doll",
            ean: "33333",
            quantity: 1
          }
        ]
      },
      {
        number: "1234",
        companyName: "Emtex",
        products: [
          {
            name: "toy",
            ean: "55555",
            quantity: 2
          },

          {
            name: "doll",
            ean: "33333",
            quantity: 1
          }
        ]
      }
    ];
  }
});
