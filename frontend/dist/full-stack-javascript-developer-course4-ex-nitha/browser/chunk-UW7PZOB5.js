import {
  CartService,
  ProductCardComponent,
  SharedModule
} from "./chunk-QRYYWEBP.js";
import {
  ActivatedRoute,
  DecimalPipe,
  DefaultValueAccessor,
  HttpClient,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  NotificationService,
  Router,
  RouterModule,
  SelectControlValueAccessor,
  __spreadProps,
  __spreadValues,
  map,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GBEM7T6G.js";

// src/app/features/products/services/product.service.ts
var ProductService = class _ProductService {
  http;
  dataUrl = "data/mockup-data.json";
  constructor(http) {
    this.http = http;
  }
  getShops() {
    return this.http.get(this.dataUrl);
  }
  getProducts() {
    return this.getShops().pipe(map((shops) => shops.flatMap((shop) => shop.products.map((p) => __spreadProps(__spreadValues({}, p), { shopId: shop.shop_id, shopName: shop.name })))));
  }
  getProductById(id) {
    return this.getProducts().pipe(map((products) => products.find((p) => p._id === id)));
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};

// src/app/features/products/product-list/product-list.component.ts
function ProductListComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ProductListComponent_button_12_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("product-list__category-btn--active", ctx_r2.selectedCategory === category_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2, " ");
  }
}
function ProductListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 14);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading products...");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "p");
    \u0275\u0275text(2, "No products found. Try a different search or category.");
    \u0275\u0275elementEnd()();
  }
}
function ProductListComponent_div_15_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-product-card", 18);
    \u0275\u0275listener("addToCart", function ProductListComponent_div_15_app_product_card_1_Template_app_product_card_addToCart_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAddToCart($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275classMapInterpolate1("animate-slide-up animate-delay-", i_r6 + 1, "");
    \u0275\u0275property("product", product_r5);
  }
}
function ProductListComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, ProductListComponent_div_15_app_product_card_1_Template, 1, 4, "app-product-card", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredProducts);
  }
}
var ProductListComponent = class _ProductListComponent {
  productService;
  cartService;
  notificationService;
  products = [];
  filteredProducts = [];
  categories = [];
  selectedCategory = "";
  searchTerm = "";
  loading = true;
  constructor(productService, cartService, notificationService) {
    this.productService = productService;
    this.cartService = cartService;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = products;
        this.categories = [...new Set(products.map((p) => p.category))];
        this.loading = false;
      },
      error: () => {
        this.notificationService.error("Failed to load products");
        this.loading = false;
      }
    });
  }
  onAddToCart(event) {
    const defaultType = event.product.types[0];
    this.cartService.addToCart(event.product, event.quantity, defaultType);
    this.notificationService.success(`${event.quantity}x ${event.product.name} added to cart!`, "Added to Cart");
  }
  filterByCategory(category) {
    this.selectedCategory = category;
    this.applyFilters();
  }
  onSearchChange(term) {
    this.searchTerm = term;
    this.applyFilters();
  }
  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory = !this.selectedCategory || product.category === this.selectedCategory;
      const matchesSearch = !this.searchTerm || product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
  static \u0275fac = function ProductListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductListComponent)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductListComponent, selectors: [["app-product-list"]], decls: 16, vars: 7, consts: [[1, "product-list", "animate-fade-in"], [1, "product-list__header"], [1, "product-list__title"], [1, "product-list__subtitle"], [1, "product-list__filters"], [1, "product-list__search"], ["type", "text", "placeholder", "Search products...", "name", "search", 1, "product-list__search-input", 3, "ngModelChange", "ngModel"], [1, "product-list__categories"], [1, "product-list__category-btn", 3, "click"], ["class", "product-list__category-btn", 3, "product-list__category-btn--active", "click", 4, "ngFor", "ngForOf"], ["class", "product-list__loading", 4, "ngIf"], ["class", "product-list__empty", 4, "ngIf"], ["class", "product-list__grid", 4, "ngIf"], [1, "product-list__loading"], [1, "product-list__spinner"], [1, "product-list__empty"], [1, "product-list__grid"], [3, "product", "class", "addToCart", 4, "ngFor", "ngForOf"], [3, "addToCart", "product"]], template: function ProductListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Our Products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Discover amazing products at great prices");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "input", 6);
      \u0275\u0275listener("ngModelChange", function ProductListComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.onSearchChange($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function ProductListComponent_Template_button_click_10_listener() {
        return ctx.filterByCategory("");
      });
      \u0275\u0275text(11, " All ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ProductListComponent_button_12_Template, 2, 3, "button", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, ProductListComponent_div_13_Template, 4, 0, "div", 10)(14, ProductListComponent_div_14_Template, 3, 0, "div", 11)(15, ProductListComponent_div_15_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("ngModel", ctx.searchTerm);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("product-list__category-btn--active", ctx.selectedCategory === "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filteredProducts.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, ProductCardComponent], styles: ['\n\n.product-list[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  padding-top: 32px;\n  padding-bottom: 64px;\n}\n@media (min-width: 768px) {\n  .product-list[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n.product-list__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.product-list__title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 8px;\n}\n.product-list__subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #6b7280;\n}\n.product-list__filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n@media (min-width: 768px) {\n  .product-list__filters[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n.product-list__search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 360px;\n  padding: 8px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n  color: #1f2937;\n  background: #ffffff;\n  outline: none;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n}\n.product-list__search-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.product-list__search-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.product-list__categories[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.product-list__category-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  padding: 4px 16px;\n  background: #ffffff;\n  color: #6b7280;\n  border: 2px solid #e5e7eb;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n}\n.product-list__category-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-list__category-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.product-list__category-btn--active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.product-list__category-btn--active[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  color: white;\n}\n.product-list__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.product-list__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 64px 0;\n  color: #6b7280;\n}\n.product-list__spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.product-list__empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 64px 0;\n  color: #6b7280;\n  font-size: 1.125rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=product-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductListComponent, { className: "ProductListComponent" });
})();

// src/app/features/products/product-detail/product-detail.component.ts
function ProductDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading product...");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2, "Product Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "The product you're looking for doesn't exist.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 6);
    \u0275\u0275listener("click", function ProductDetailComponent_div_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Back to Products");
    \u0275\u0275elementEnd()();
  }
}
function ProductDetailComponent_div_2_img_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 33);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_img_8_Template_img_click_0_listener() {
      const img_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectImage(img_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const img_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("product-detail__thumbnail--active", ctx_r1.selectedImage === img_r5);
    \u0275\u0275property("src", img_r5, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
  }
}
function ProductDetailComponent_div_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, " \u2605 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("product-detail__star--filled", star_r6 <= ctx_r1.product.overall_rating);
  }
}
function ProductDetailComponent_div_2_div_23_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_div_23_button_4_Template_button_click_0_listener() {
      const type_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectType(type_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("product-detail__type-btn--active", (ctx_r1.selectedType == null ? null : ctx_r1.selectedType._id) === type_r8._id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r8.color, " ");
  }
}
function ProductDetailComponent_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 36);
    \u0275\u0275text(2, "Color:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37);
    \u0275\u0275template(4, ProductDetailComponent_div_2_div_23_button_4_Template, 2, 3, "button", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.product.types);
  }
}
function ProductDetailComponent_div_2_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r9 = ctx.$implicit;
    \u0275\u0275property("ngValue", q_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r9);
  }
}
function ProductDetailComponent_div_2_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" In Stock (", ctx_r1.product.stock, " available) ");
  }
}
function ProductDetailComponent_div_2_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1, " Out of Stock ");
    \u0275\u0275elementEnd();
  }
}
function ProductDetailComponent_div_2_div_34_div_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, " \u2605 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r10 = ctx.$implicit;
    const review_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("product-detail__star--filled", star_r10 <= review_r11.star);
  }
}
function ProductDetailComponent_div_2_div_34_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "div", 49);
    \u0275\u0275template(3, ProductDetailComponent_div_2_div_34_div_4_span_3_Template, 2, 2, "span", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.ratingStars);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r11.userName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r11.comment);
  }
}
function ProductDetailComponent_div_2_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "h2", 44);
    \u0275\u0275text(2, "Customer Reviews");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 45);
    \u0275\u0275template(4, ProductDetailComponent_div_2_div_34_div_4_Template, 8, 3, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.product.reviews);
  }
}
function ProductDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "button", 8);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(2, " \u2190 Back to Products ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "div", 11);
    \u0275\u0275element(6, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275template(8, ProductDetailComponent_div_2_img_8_Template, 1, 4, "img", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 15)(10, "span", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h1", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 18);
    \u0275\u0275template(15, ProductDetailComponent_div_2_span_15_Template, 2, 2, "span", 19);
    \u0275\u0275elementStart(16, "span", 20);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 21);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p", 22);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ProductDetailComponent_div_2_div_23_Template, 5, 1, "div", 23);
    \u0275\u0275elementStart(24, "div", 24)(25, "label", 25);
    \u0275\u0275text(26, "Quantity:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetailComponent_div_2_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedQuantity, $event) || (ctx_r1.selectedQuantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ProductDetailComponent_div_2_Template_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onQuantityChange($event));
    });
    \u0275\u0275template(28, ProductDetailComponent_div_2_option_28_Template, 2, 2, "option", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 28);
    \u0275\u0275template(30, ProductDetailComponent_div_2_span_30_Template, 2, 1, "span", 29)(31, ProductDetailComponent_div_2_span_31_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 31);
    \u0275\u0275listener("click", function ProductDetailComponent_div_2_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToCart());
    });
    \u0275\u0275text(33, " Add to Cart ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, ProductDetailComponent_div_2_div_34_Template, 5, 1, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx_r1.selectedImage, \u0275\u0275sanitizeUrl)("alt", ctx_r1.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.product.preview_img);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.ratingStars);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r1.product.overall_rating, " (", ctx_r1.product.reviews.length, " reviews) ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(20, 17, ctx_r1.currentPrice, "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.product.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.product.types.length > 1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedQuantity);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.quantities);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.product.stock && ctx_r1.product.stock > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.product.stock || ctx_r1.product.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.product.stock);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.product.reviews.length > 0);
  }
}
var ProductDetailComponent = class _ProductDetailComponent {
  route;
  router;
  productService;
  cartService;
  notificationService;
  product;
  selectedQuantity = 1;
  selectedType;
  selectedImage = "";
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  loading = true;
  constructor(route, router, productService, cartService, notificationService) {
    this.route = route;
    this.router = router;
    this.productService = productService;
    this.cartService = cartService;
    this.notificationService = notificationService;
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product = product;
          if (product) {
            this.selectedImage = product.image;
            this.selectedType = product.types[0];
          }
          this.loading = false;
        },
        error: () => {
          this.notificationService.error("Failed to load product details");
          this.loading = false;
        }
      });
    }
  }
  selectImage(img) {
    this.selectedImage = img;
  }
  selectType(type) {
    this.selectedType = type;
    this.selectedImage = type.image;
  }
  onQuantityChange(qty) {
    this.selectedQuantity = qty;
  }
  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product, this.selectedQuantity, this.selectedType);
      this.notificationService.success(`${this.selectedQuantity}x ${this.product.name} added to cart!`, "Added to Cart");
    }
  }
  goBack() {
    this.router.navigate(["/products"]);
  }
  get currentPrice() {
    return this.selectedType?.price ?? this.product?.price ?? 0;
  }
  get ratingStars() {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
  static \u0275fac = function ProductDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetailComponent, selectors: [["app-product-detail"]], decls: 3, vars: 3, consts: [["class", "product-detail__loading", 4, "ngIf"], ["class", "product-detail__not-found animate-fade-in", 4, "ngIf"], ["class", "product-detail animate-fade-in", 4, "ngIf"], [1, "product-detail__loading"], [1, "product-detail__spinner"], [1, "product-detail__not-found", "animate-fade-in"], [1, "product-detail__back-btn", 3, "click"], [1, "product-detail", "animate-fade-in"], [1, "product-detail__back-link", 3, "click"], [1, "product-detail__content"], [1, "product-detail__gallery"], [1, "product-detail__main-image-wrapper"], [1, "product-detail__main-image", 3, "src", "alt"], [1, "product-detail__thumbnails"], ["class", "product-detail__thumbnail", "loading", "lazy", 3, "src", "alt", "product-detail__thumbnail--active", "click", 4, "ngFor", "ngForOf"], [1, "product-detail__info"], [1, "product-detail__category"], [1, "product-detail__name"], [1, "product-detail__rating"], ["class", "product-detail__star", 3, "product-detail__star--filled", 4, "ngFor", "ngForOf"], [1, "product-detail__rating-text"], [1, "product-detail__price"], [1, "product-detail__description"], ["class", "product-detail__types", 4, "ngIf"], [1, "product-detail__quantity"], ["for", "quantity", 1, "product-detail__label"], ["id", "quantity", "name", "quantity", 1, "product-detail__quantity-select", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "product-detail__stock"], ["class", "product-detail__in-stock", 4, "ngIf"], ["class", "product-detail__out-of-stock", 4, "ngIf"], [1, "product-detail__add-btn", 3, "click", "disabled"], ["class", "product-detail__reviews", 4, "ngIf"], ["loading", "lazy", 1, "product-detail__thumbnail", 3, "click", "src", "alt"], [1, "product-detail__star"], [1, "product-detail__types"], [1, "product-detail__label"], [1, "product-detail__type-options"], ["class", "product-detail__type-btn", 3, "product-detail__type-btn--active", "click", 4, "ngFor", "ngForOf"], [1, "product-detail__type-btn", 3, "click"], [3, "ngValue"], [1, "product-detail__in-stock"], [1, "product-detail__out-of-stock"], [1, "product-detail__reviews"], [1, "product-detail__reviews-title"], [1, "product-detail__reviews-list"], ["class", "product-detail__review animate-slide-up", 4, "ngFor", "ngForOf"], [1, "product-detail__review", "animate-slide-up"], [1, "product-detail__review-header"], [1, "product-detail__review-stars"], [1, "product-detail__review-author"], [1, "product-detail__review-comment"]], template: function ProductDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProductDetailComponent_div_0_Template, 4, 0, "div", 0)(1, ProductDetailComponent_div_1_Template, 7, 0, "div", 1)(2, ProductDetailComponent_div_2_Template, 35, 20, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.product);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.product);
    }
  }, dependencies: [NgForOf, NgIf, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, DecimalPipe], styles: ['\n\n.product-detail[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  padding-top: 24px;\n  padding-bottom: 64px;\n}\n@media (min-width: 768px) {\n  .product-detail[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n.product-detail__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 64px 0;\n  color: #6b7280;\n}\n.product-detail__spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #2563eb;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.product-detail__not-found[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 64px 0;\n  text-align: center;\n}\n.product-detail__back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: none;\n  color: #2563eb;\n  padding: 8px 0;\n  margin-bottom: 24px;\n  font-size: 0.875rem;\n}\n.product-detail__back-link[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-detail__back-link[_ngcontent-%COMP%]:hover {\n  color: #1d4ed8;\n}\n.product-detail__back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n}\n.product-detail__back-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-detail__back-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.product-detail__back-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.product-detail__content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n}\n@media (min-width: 768px) {\n  .product-detail__content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 48px;\n  }\n}\n.product-detail__gallery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.product-detail__main-image-wrapper[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  background: #ffffff;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.product-detail__main-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1;\n  object-fit: cover;\n  transition: transform 350ms ease;\n}\n.product-detail__thumbnails[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.product-detail__thumbnail[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 2px solid #e5e7eb;\n  cursor: pointer;\n  transition: border-color 150ms ease, transform 150ms ease;\n}\n.product-detail__thumbnail[_ngcontent-%COMP%]:hover {\n  border-color: #d97706;\n}\n.product-detail__thumbnail--active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);\n}\n.product-detail__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.product-detail__category[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #2563eb;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.product-detail__name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n@media (min-width: 768px) {\n  .product-detail__name[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n  }\n}\n.product-detail__rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n.product-detail__star[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  font-size: 1.125rem;\n  transition: color 150ms ease;\n}\n.product-detail__star--filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.product-detail__rating-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-left: 8px;\n}\n.product-detail__price[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #2563eb;\n  margin-bottom: 24px;\n}\n.product-detail__description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #6b7280;\n  line-height: 1.7;\n  margin-bottom: 24px;\n}\n.product-detail__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 8px;\n  display: block;\n}\n.product-detail__types[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.product-detail__type-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.product-detail__type-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  padding: 4px 16px;\n  background: #ffffff;\n  color: #1f2937;\n  border: 2px solid #e5e7eb;\n  border-radius: 9999px;\n  font-size: 0.875rem;\n}\n.product-detail__type-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-detail__type-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.product-detail__type-btn--active[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #2563eb;\n}\n.product-detail__quantity[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.product-detail__quantity-select[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #1f2937;\n  background: #ffffff;\n  cursor: pointer;\n  outline: none;\n  min-width: 80px;\n}\n.product-detail__quantity-select[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.product-detail__stock[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.product-detail__in-stock[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.product-detail__out-of-stock[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n.product-detail__add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  padding: 16px 32px;\n  font-size: 1.125rem;\n  width: 100%;\n}\n.product-detail__add-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-detail__add-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.product-detail__add-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n@media (min-width: 768px) {\n  .product-detail__add-btn[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.product-detail__reviews[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  padding-top: 32px;\n  border-top: 1px solid #e5e7eb;\n}\n.product-detail__reviews-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 24px;\n}\n.product-detail__reviews-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.product-detail__review[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.product-detail__review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.product-detail__review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.product-detail__review-author[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n}\n.product-detail__review-comment[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.6;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=product-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetailComponent, { className: "ProductDetailComponent" });
})();

// src/app/features/products/products-routing.module.ts
var routes = [
  { path: "", component: ProductListComponent },
  { path: ":id", component: ProductDetailComponent }
];
var ProductsRoutingModule = class _ProductsRoutingModule {
  static \u0275fac = function ProductsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProductsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};

// src/app/features/products/products.module.ts
var ProductsModule = class _ProductsModule {
  static \u0275fac = function ProductsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProductsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    SharedModule,
    ProductsRoutingModule
  ] });
};
export {
  ProductsModule
};
//# sourceMappingURL=chunk-UW7PZOB5.js.map
