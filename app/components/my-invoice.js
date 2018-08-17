import Component from "@ember/component";

export default Component.extend({
  showDetails: false,

  actions: {
    onDetails() {
      this.toggleProperty("showDetails");
    }
  }
});
