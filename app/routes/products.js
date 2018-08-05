import Route from "@ember/routing/route";

export default Route.extend({
  model(param) {
    return [
      {
        id: 1,
        name: "Asus",
        price: 20,
        EAN: 1234
      },
      {
        id: 2,
        name: "Dell",
        price: 30,
        EAN: 3333
      }
    ];
  }
});
