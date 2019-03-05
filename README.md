# This is the react beershop

## How to setup the project

1. Clone this project locally on your computer
2. Run npm ci to install the necessary modules
3. run npm run build & npm run start to test the project. npm run dev could also be run but this is normally for development, so the code might not be as optimised.

## What the assignment was

Wee needed to make the following

### Overview page

- List of products
- Add a filter to the page where it's possible to select on price, name,
- A detailed view of the product when clicked on one.
- If a product has not been clicked on, a text must be shown on the right side that informs you
to click on a product.
- When adding a product, the shopping cart in the header has to be updated immediately
without reloading the page.
- There must be a search functionality with autocompletion.
- Add a shopping cart in the header that shows the total price and the number of the product
selected.

### Shopping cart

- Show a list of added product, a total, the total price and the price per product.
- The user needs to be able to adjust a product and all data should be updated.
- The user is able to remove products from the shopping cart.
- A total price including and excluding VAT must be added.

## What was done

1. Created a overview and shopping cart page
2. Created a list of prodcuts with compenents
3. Added Routing with Next.js
4. Made a link of every product for later individual product page generation
5. Made a setup in the index.js for fetching the products of the API.

## What still needs to be done

### What needst to be done for the Overview page

1. Creating the filters for the project page
Once I could fetch the API i would listen to the submit/checking of an input field. Whent this was triggered javascript would apply the filter and with React the filtered product should display on the screen. It's also possible to filter live with an eventlistener but there were too many products for that to work as smooth as it should.

2. Fetch the products for the API

Have not yet found out how to do it with the current API. My plan was fetching the objects of the API and then putting them into list items with an individual key. That way they could be added, edited and deleted and react would be able to update them instantly.

3. Clicking on the product to show information

The click function is there but the pop-up has yet to be made. This can be done with an seperate div in the component that toggles to active on click.

4. When adding a product, the shopping cart in the header has to be updated immediately
without reloading the page.

This can be done with adding and removing objects from the localstorage of the site. This way you can also choose to clear the shopping cart during the checkout process. This can possibly also be done with an state manager but I haven't completely explored this option yet.

5. There must be a search function with autocompletion
The items for autocompletion could be fetched as a prop from the project title to display as possible results. The input field would have an addEventlistenr of onkeyup or onkeydown to register if the autocomplete could be updated.

6. Add a shopping cart in the header that shows the total price and the number of the product
selected.

The information in the shopping card could be retrieved from the localstorage and updated accordingly. If a product were to be removed from the cart an event woould trigger that would be able to update the card live. This can also be done with a state manager but I haven't explored that option yet.

### What needs to be done for the shopping cart page

- Show a list of added product, a total, the total price and the price per product.
- The user needs to be able to adjust a product and all data should be updated.
- The user is able to remove products from the shopping cart.
- A total price including and excluding VAT must be added.