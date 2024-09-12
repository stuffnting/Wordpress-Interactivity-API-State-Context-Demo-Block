# Wordpress Interactivity API State & Context Demo Block

## Description

This block demonstrates the difference between global state, local context, and derived state.

There is a good introduction to the subject [here](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/#working-with-global-state).

## The data

**Global state:** The sales tax is stores in the global state as `salesTax`, and will be the same for all instances of the block in a post. Changing the value in one block will change the value in all instances of the block.

**Local context:** The item's price (`productPrice`) and the number of items (`numTerms`) are stored in the local context. These are specific to each instance of the block. `productPrice` is obtained from the block's attributes entered in the editor. Note, the product name is not stored in the local context because it is not needed by the `store` in the `view.js` file.

**Derived state:** The values of the following are calculated when needed, and they are not stored in the global state:

- `formattedPrice`—the formatted price;
- `formattedTotal`—the formatted total;
- `formattedSalesTax`—the formatted sales tax;
- `show`—whether to show the output element;
- `plural`—whether the word "items", in the output element, is a plural or not.
