# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

# Functionality

Added FirstComponent with the template, which has been used in AppComponent as navigation bar on the main app page.

Added ProductComponent with onBuy() event handler, which logs to console the message about bought products. Added template for product, which contains title, description,
price, photo, amount in stock etc. Added Buy button and linked onBuy() handler to onClick event.

Implemented ProductService. The service contains method to get the list of products, get one product by id and method to decrease product amount in stock when user buys it.
If product amount in stock is 3 or less(but not 0), user is informed about little amount. If product amount in stock is 0, user is informed about it in product status and by message in console, Buy button become disabled.

Added CartComponent, which is responsible for displaying items in shopping cart and its amount.

Implemented CartService. It has functionality to put the product into the cart, to increase product amount in cart if such product has already bought and display the message if the cart is empty. Information messages are diplayed in console, such as adding good into the shopping cart and increasing total amount in cheque after adding products.

Modified CatrService by implementing methods for total quantity and total amount calculation. Total amount user can see in cart. Total quantity is visible on Cart button, which is at navigation panel. If there are no products in cart, total quantity is invisible(regulated by [ngClass] directive)

Used input and output(with events) directives in cart component for increasing, decreasing and deleting products from cart. Added buttons for these operations.

Added template variable #appTitle, used @ViewChild for setting.

Used several hook methods, like ngAfterViewInit, ngAfterViewChecked, ngDoCheck etc. Used several DOM events() and HighlightDirective for implementing functionality, related to button highlights. Highlight color is different according to borderColor of each button.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
