import { store, getContext } from "@wordpress/interactivity";

// Destructure `state` from `store` so that it can be used below.
const { state } = store("product-calculator", {
  // These "derived state" values are calculated when needed, and not stored in the global state, or local context.
  state: {
    get formattedPrice() {
      const context = getContext();
      return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(context.productPrice);
    },
    get formattedTotal() {
      const context = getContext();
      return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(
        context.productPrice * context.numItems * (1 + state.salesTax / 100)
      );
    },
    get formattedSalesTax() {
      return new Intl.NumberFormat("en-GB", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(state.salesTax / 100);
    },
    get show() {
      const context = getContext();
      return context.numItems > 0;
    },
    get plural() {
      const context = getContext();
      return context.numItems > 1 ? "s" : "";
    },
  },
  actions: {
    // Update the number of items when the input changes.
    calculate: (e) => {
      const context = getContext();
      context.numItems = Number(e.target.value);
    },
    // Update the global state of the sales tax when the input changes.
    upDateSalesTax: (e) => {
      state.salesTax = Number(e.target.value);
    },
  },
});
