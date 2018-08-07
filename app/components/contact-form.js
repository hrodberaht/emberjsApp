import Component from "@ember/component";
import { match, not } from "@ember/object/computed";

export default Component.extend({
  message: "",
  emailAddress: "",
  responseMessage: "",

  isValid: match("emailAddress", /^.+@.+\..+$/),
  isDisabled: not("isValid"),

  actions: {
    sendMessage() {
      this.set(
        "responseMessage",
        `Thank you form message, we will contact with you soon.`
      );
      this.set("message", "");
      this.set("emailAddress", "");
    }
  }
});
