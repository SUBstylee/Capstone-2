# Capstone-2

## Proposal

### TOTALLY AWESOME APPAREL

![TAA Header](./logos/TAA-header-color.png)
![TAA logo black and white](./logos/TAA-Logo-black-and-white.png)
![TAA logo color](./logos/TAA-logo-color.png)

Capstone 2 Proposal

Goals -

- Create a simple ecommerce site using the MERN stack.  It will have user authentication and protected routes.  There will be a landing page, shop directory, category pages, individual product view and more.  There will be a wishlist, shopping cart and checkout.  Logged in users can see past orders, leave reviews, change user information and preferences, etc.  Basic CMS that allows admin to add/edit/delete products.

- User can sign up, log in, log out, delete account, change account details, add and remove addresses...

- User receives an email on signup, password reset request, successful order (with invoice-sends to user in email, then adds to list of orders), etc.

- User can view previous orders. Order status will change depending on Stripe payment. Enroute status can only be changed by an admin.

- A user can submit product reviews, and edit or delete their own reviews. User can only leave one review per product.  Admin can edit and delete all reviews.  A user can also share a product on social media with share button.

- I would like to make a content management page, and if a user has admin privileges, then they can add items, change item details, etc.  An admin can grant admin privileges to a regular user.

Stretch -

- Multiple languages.  Have option to change between English and Chinese (Stretch).

- Live chat. Have a live chat.  If admin is logged in, can talk with customers, otherwise maybe have some automated responses (Stretch).

- Shipping information. Include dynamic shipping costs in the price (Stretch).

APIs -

- Custom built API to handle products -- built with MongoDB

- Stripe payments/Paypal -- will be test (not live) versions, as there will be no real products to ship

- Firebase -- Can sign in with a google account (assuming user is already registered on site). There is also an api for handling Live Chat services, so may look into this if I can reach that stretch goal.

- Currency converter -- let user select and display their preferred currency (option in the user preferences/profile section).

- Address checker -- check that a shipping address is valid.

This is a work in progress.  I may add to or change certain aspects of this proposal in the future.
