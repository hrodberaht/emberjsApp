import Controller from "@ember/controller";
import { match, not } from "@ember/object/computed";

export default Controller.extend({
  emailAddress: "",
  responseMessage: "",

  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),

  actions: {
    saveInvitation() {
      this.set(
        "responseMessage",
        `Thank you for your email address: ${this.get("emailAddress")}.`
      );
      this.set("emailAddress", "");
      console.log(this.store.findAll("product"));
    }
  }
});
