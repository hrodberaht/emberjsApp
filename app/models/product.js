import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("string"),
  ean: DS.attr("number")
});
