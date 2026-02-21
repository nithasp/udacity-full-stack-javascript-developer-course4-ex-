# MyStore - Angular E-Commerce Application

A single-page e-commerce application built with Angular 18. Browse products, view details, add items to a shopping cart, and complete checkout with form validation and user feedback.

## Features

- **Product List**: Browse all products with search and category filtering
- **Product Detail**: View product photos, descriptions, pricing, color variants, and reviews
- **Shopping Cart**: Add/remove products, adjust quantities, and see order totals
- **Checkout**: Validated form with customer information and credit card input
- **Order Confirmation**: Success page shown after checkout
- **Toast Notifications**: Real-time user feedback using ngx-toastr
- **Responsive Design**: Mobile-friendly layout with BEM-structured SCSS
- **Animations**: Smooth transitions and enter animations for a polished UX

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Angular CLI](https://angular.dev/tools/cli) (v18)

## Installation

```bash
npm install
```

## Launch

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app reloads automatically when source files change.

## Running Tests

```bash
ng test
```

Runs unit and integration tests via [Karma](https://karma-runner.github.io) with Jasmine.

## Project Structure

```
src/
├── app/
│   ├── core/                          # Singleton services and guards
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── services/
│   │       ├── cart.service.ts        # Cart state management (shared service)
│   │       └── notification.service.ts # Global toast notification wrapper
│   ├── features/
│   │   ├── cart/                      # Cart feature module (lazy-loaded)
│   │   │   ├── cart-page/             # Cart page with checkout form
│   │   │   └── order-confirmation/    # Order success page
│   │   └── products/                  # Products feature module (lazy-loaded)
│   │       ├── models/product.ts      # Product, CartItem TypeScript models
│   │       ├── mockup-data/           # JSON data source
│   │       ├── product-detail/        # Product detail page
│   │       ├── product-list/          # Product listing page
│   │       └── services/              # ProductService (HttpClient)
│   └── shared/                        # Shared module (reusable components)
│       ├── components/
│       │   ├── form/input-field/      # Reusable input with validation
│       │   └── product-card/          # Product card with @Input/@Output
│       ├── directives/
│       └── pipes/
├── scss/                              # SCSS partials (variables, mixins, etc.)
└── styles.scss                        # Global styles entry point
```

## Architecture Highlights

- **Lazy-loaded feature modules** for Products and Cart
- **CartService** as a shared service for sibling component communication
- **@Input/@Output decorators** for parent-child data flow (ProductCard)
- **ControlValueAccessor** on InputFieldComponent for ngModel integration
- **ngModel + ngModelChange** for template-driven form bindings
- **BEM methodology** for all component CSS
- **SCSS partials** for variables, mixins, base styles, and animations
- **HttpClient** to fetch product data from a local JSON file
