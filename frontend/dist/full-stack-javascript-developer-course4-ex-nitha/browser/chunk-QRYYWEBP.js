import {
  AuthService,
  BehaviorSubject,
  CommonModule,
  DecimalPipe,
  ElementRef,
  EventEmitter,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgSelectOption,
  NotificationService,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  SelectControlValueAccessor,
  forwardRef,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GBEM7T6G.js";

// src/app/shared/pipes/truncate.pipe.ts
var TruncatePipe = class _TruncatePipe {
  transform(value, limit = 100, trail = "...") {
    if (!value)
      return "";
    if (value.length <= limit)
      return value;
    return value.substring(0, limit).trim() + trail;
  }
  static \u0275fac = function TruncatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TruncatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "truncate", type: _TruncatePipe, pure: true });
};

// src/app/shared/components/form/input-field/input-field.component.ts
function InputFieldComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function InputFieldComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errors[0], " ");
  }
}
var InputFieldComponent = class _InputFieldComponent {
  label = "";
  type = "text";
  placeholder = "";
  name = "";
  required = false;
  minLength = 0;
  maxLength = 0;
  pattern = "";
  errorMessages = {};
  forceTouch = false;
  valueChanged = new EventEmitter();
  value = "";
  touched = false;
  disabled = false;
  onChange = () => {
  };
  onTouched = () => {
  };
  writeValue(value) {
    this.value = value ?? "";
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  onInput(value) {
    this.value = value;
    this.onChange(value);
    this.valueChanged.emit(value);
  }
  onBlur() {
    this.touched = true;
    this.onTouched();
  }
  get errors() {
    const errs = [];
    if (this.required && !this.value?.trim()) {
      errs.push(this.errorMessages["required"] || `${this.label} is required`);
    }
    if (this.minLength > 0 && this.value && this.value.length < this.minLength) {
      errs.push(this.errorMessages["minLength"] || `${this.label} must be at least ${this.minLength} characters`);
    }
    if (this.maxLength > 0 && this.value && this.value.length > this.maxLength) {
      errs.push(this.errorMessages["maxLength"] || `${this.label} must be at most ${this.maxLength} characters`);
    }
    if (this.pattern && this.value) {
      if (!new RegExp(this.pattern).test(this.value)) {
        errs.push(this.errorMessages["pattern"] || `${this.label} format is invalid`);
      }
    }
    if (this.type === "email" && this.value) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
        errs.push(this.errorMessages["email"] || "Please enter a valid email");
      }
    }
    return errs;
  }
  get showErrors() {
    return (this.touched || this.forceTouch) && this.errors.length > 0;
  }
  get isValid() {
    return this.errors.length === 0 && !!this.value?.trim();
  }
  static \u0275fac = function InputFieldComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputFieldComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InputFieldComponent, selectors: [["app-input-field"]], inputs: { label: "label", type: "type", placeholder: "placeholder", name: "name", required: "required", minLength: "minLength", maxLength: "maxLength", pattern: "pattern", errorMessages: "errorMessages", forceTouch: "forceTouch" }, outputs: { valueChanged: "valueChanged" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _InputFieldComponent),
      multi: true
    }
  ])], decls: 7, vars: 15, consts: [[1, "input-field"], [1, "input-field__label", 3, "for"], ["class", "input-field__required", 4, "ngIf"], [1, "input-field__input", 3, "input", "blur", "type", "id", "name", "placeholder", "value", "disabled"], [1, "input-field__feedback", 3, "id"], ["class", "input-field__error-msg", 4, "ngIf"], [1, "input-field__required"], [1, "input-field__error-msg"]], template: function InputFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "label", 1);
      \u0275\u0275text(2);
      \u0275\u0275template(3, InputFieldComponent_span_3_Template, 2, 0, "span", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "input", 3);
      \u0275\u0275listener("input", function InputFieldComponent_Template_input_input_4_listener($event) {
        return ctx.onInput($event.target.value);
      })("blur", function InputFieldComponent_Template_input_blur_4_listener() {
        return ctx.onBlur();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275template(6, InputFieldComponent_span_6_Template, 2, 1, "span", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("input-field--error", ctx.showErrors);
      \u0275\u0275advance();
      \u0275\u0275property("for", ctx.name);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.label, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.required);
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.type)("id", ctx.name)("name", ctx.name)("placeholder", ctx.placeholder)("value", ctx.value)("disabled", ctx.disabled);
      \u0275\u0275attribute("aria-invalid", ctx.showErrors)("aria-describedby", ctx.name + "-feedback");
      \u0275\u0275advance();
      \u0275\u0275property("id", ctx.name + "-feedback");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showErrors);
    }
  }, dependencies: [NgIf], styles: ["\n\n.input-field__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.input-field__required[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.input-field__input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #1f2937;\n  background: #ffffff;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.input-field__input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.input-field__input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.input-field__input[_ngcontent-%COMP%]:disabled {\n  background: #f3f4f6;\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.input-field__feedback[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 0.75rem;\n  transition: all 150ms ease;\n}\n.input-field__error-msg[_ngcontent-%COMP%] {\n  color: #ef4444;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  animation: fadeIn 0.2s ease;\n}\n.input-field--error[_ngcontent-%COMP%]   .input-field__input[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.input-field--error[_ngcontent-%COMP%]   .input-field__input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n/*# sourceMappingURL=input-field.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InputFieldComponent, { className: "InputFieldComponent" });
})();

// src/app/shared/components/form/quantity-input/quantity-input.component.ts
var QuantityInputComponent = class _QuantityInputComponent {
  min = 1;
  max = 99;
  value = 1;
  disabled = false;
  onChange = () => {
  };
  onTouched = () => {
  };
  writeValue(value) {
    this.value = value ?? this.min;
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  decrease() {
    if (this.disabled || this.value <= this.min)
      return;
    this.setValue(this.value - 1);
  }
  increase() {
    if (this.disabled || this.value >= this.max)
      return;
    this.setValue(this.value + 1);
  }
  onKeyDown(event) {
    if (["e", "E", "-", "+"].includes(event.key)) {
      event.preventDefault();
    }
  }
  onInput(event) {
    const raw = event.target.value;
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed)) {
      this.setValue(this.clamp(parsed));
    }
  }
  onBlur(event) {
    const raw = event.target.value;
    const parsed = parseInt(raw, 10);
    if (isNaN(parsed) || parsed < this.min) {
      this.setValue(this.min);
      event.target.value = String(this.value);
    }
    this.onTouched();
  }
  setValue(val) {
    this.value = val;
    this.onChange(val);
  }
  clamp(val) {
    return Math.max(this.min, Math.min(this.max, val));
  }
  get isAtMin() {
    return this.value <= this.min;
  }
  get isAtMax() {
    return this.value >= this.max;
  }
  static \u0275fac = function QuantityInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuantityInputComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuantityInputComponent, selectors: [["app-quantity-input"]], inputs: { min: "min", max: "max" }, features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _QuantityInputComponent),
      multi: true
    }
  ])], decls: 8, vars: 8, consts: [[1, "qty-input"], ["type", "button", "aria-label", "Decrease quantity", 1, "qty-input__btn", "qty-input__btn--decrease", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "14", "height", "14", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", "clip-rule", "evenodd"], ["type", "number", "aria-label", "Quantity", 1, "qty-input__field", 3, "keydown", "input", "blur", "min", "max", "value", "disabled"], ["type", "button", "aria-label", "Increase quantity", 1, "qty-input__btn", "qty-input__btn--increase", 3, "click", "disabled"], ["fill-rule", "evenodd", "d", "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z", "clip-rule", "evenodd"]], template: function QuantityInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275listener("click", function QuantityInputComponent_Template_button_click_1_listener() {
        return ctx.decrease();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "input", 4);
      \u0275\u0275listener("keydown", function QuantityInputComponent_Template_input_keydown_4_listener($event) {
        return ctx.onKeyDown($event);
      })("input", function QuantityInputComponent_Template_input_input_4_listener($event) {
        return ctx.onInput($event);
      })("blur", function QuantityInputComponent_Template_input_blur_4_listener($event) {
        return ctx.onBlur($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function QuantityInputComponent_Template_button_click_5_listener() {
        return ctx.increase();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 2);
      \u0275\u0275element(7, "path", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("qty-input--disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled || ctx.isAtMin);
      \u0275\u0275advance(3);
      \u0275\u0275property("min", ctx.min)("max", ctx.max)("value", ctx.value)("disabled", ctx.disabled);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.disabled || ctx.isAtMax);
    }
  }, styles: ["\n\n.qty-input[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: border-color 150ms ease;\n}\n.qty-input[_ngcontent-%COMP%]:focus-within {\n  border-color: #2563eb;\n}\n.qty-input--disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.qty-input__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 32px;\n  background: #f3f4f6;\n  border: none;\n  cursor: pointer;\n  color: #6b7280;\n  transition: background 150ms ease, color 150ms ease;\n  flex-shrink: 0;\n}\n.qty-input__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.qty-input__btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  color: #9ca3af;\n  background: #f3f4f6;\n}\n.qty-input__btn--decrease[_ngcontent-%COMP%] {\n  border-right: 1px solid #e5e7eb;\n}\n.qty-input__btn--increase[_ngcontent-%COMP%] {\n  border-left: 1px solid #e5e7eb;\n}\n.qty-input__field[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 32px;\n  border: none;\n  outline: none;\n  text-align: center;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  background: #ffffff;\n  appearance: textfield;\n  -moz-appearance: textfield;\n}\n.qty-input__field[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.qty-input__field[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.qty-input__field[_ngcontent-%COMP%]:disabled {\n  background: #f3f4f6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=quantity-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuantityInputComponent, { className: "QuantityInputComponent" });
})();

// src/app/shared/components/product-card/product-card.component.ts
var _c0 = (a0) => ["/products", a0];
function ProductCardComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, " \u2605 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("product-card__star--filled", star_r1 <= ctx_r1.product.overall_rating)("product-card__star--half", star_r1 > ctx_r1.product.overall_rating && star_r1 - 1 < ctx_r1.product.overall_rating);
  }
}
function ProductCardComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", q_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r3);
  }
}
var ProductCardComponent = class _ProductCardComponent {
  product;
  addToCart = new EventEmitter();
  selectedQuantity = 1;
  quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  onAddToCart() {
    this.addToCart.emit({
      product: this.product,
      quantity: this.selectedQuantity
    });
  }
  get ratingStars() {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
  static \u0275fac = function ProductCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCardComponent, selectors: [["app-product-card"]], inputs: { product: "product" }, outputs: { addToCart: "addToCart" }, decls: 25, vars: 22, consts: [[1, "product-card"], [1, "product-card__image-link", 3, "routerLink"], ["loading", "lazy", 1, "product-card__image", 3, "src", "alt"], [1, "product-card__body"], [1, "product-card__category"], [1, "product-card__name-link", 3, "routerLink"], [1, "product-card__name"], [1, "product-card__description"], [1, "product-card__rating"], ["class", "product-card__star", 3, "product-card__star--filled", "product-card__star--half", 4, "ngFor", "ngForOf"], [1, "product-card__rating-value"], [1, "product-card__footer"], [1, "product-card__price"], [1, "product-card__actions"], ["name", "quantity", "aria-label", "Quantity", 1, "product-card__quantity", 3, "ngModelChange", "ngModel"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "button", 1, "product-card__add-btn", 3, "click"], [1, "product-card__star"], [3, "ngValue"]], template: function ProductCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "a", 5)(7, "h3", 6);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "truncate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275template(13, ProductCardComponent_span_13_Template, 2, 4, "span", 9);
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ProductCardComponent_Template_select_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedQuantity, $event) || (ctx.selectedQuantity = $event);
        return $event;
      });
      \u0275\u0275template(22, ProductCardComponent_option_22_Template, 2, 2, "option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 16);
      \u0275\u0275listener("click", function ProductCardComponent_Template_button_click_23_listener() {
        return ctx.onAddToCart();
      });
      \u0275\u0275text(24, " Add to Cart ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(18, _c0, ctx.product._id));
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.product.image, \u0275\u0275sanitizeUrl)("alt", ctx.product.name);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.product.category);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c0, ctx.product._id));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.product.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 12, ctx.product.description, 80));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.ratingStars);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("(", ctx.product.overall_rating, ")");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(19, 15, ctx.product.price, "1.2-2"), "");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedQuantity);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.quantities);
    }
  }, dependencies: [NgForOf, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, DecimalPipe, TruncatePipe], styles: ['\n\n.product-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 250ms ease, box-shadow 250ms ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n}\n.product-card__image-link[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n.product-card__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 350ms ease;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-card__image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.product-card__body[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.product-card__category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #2563eb;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 4px;\n}\n.product-card__name-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.product-card__name[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 8px;\n  line-height: 1.4;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-card__description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  flex: 1;\n}\n.product-card__rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-bottom: 16px;\n}\n.product-card__star[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  font-size: 1rem;\n  transition: color 150ms ease;\n}\n.product-card__star--filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.product-card__star--half[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  opacity: 0.5;\n}\n.product-card__rating-value[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  margin-left: 4px;\n}\n.product-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding-top: 16px;\n  border-top: 1px solid #e5e7eb;\n}\n.product-card__price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.product-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.product-card__quantity[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #1f2937;\n  background: #ffffff;\n  cursor: pointer;\n  outline: none;\n  min-width: 50px;\n}\n.product-card__quantity[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.product-card__add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  padding: 4px 16px;\n  font-size: 0.875rem;\n}\n.product-card__add-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-card__add-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.product-card__add-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=product-card.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCardComponent, { className: "ProductCardComponent" });
})();

// src/app/core/services/cart.service.ts
var CartService = class _CartService {
  cartItems = [];
  cartSubject = new BehaviorSubject([]);
  cart$ = this.cartSubject.asObservable();
  addToCart(product, quantity, selectedType) {
    const existingIndex = this.cartItems.findIndex((item) => item.product._id === product._id && item.selectedType?._id === selectedType?._id);
    if (existingIndex > -1) {
      this.cartItems[existingIndex].quantity += quantity;
    } else {
      this.cartItems.push({
        product,
        quantity,
        selectedType,
        shopId: product.shopId ?? "",
        shopName: product.shopName ?? ""
      });
    }
    this.cartSubject.next([...this.cartItems]);
  }
  removeFromCart(productId, typeId) {
    this.cartItems = this.cartItems.filter((item) => !(item.product._id === productId && item.selectedType?._id === typeId));
    this.cartSubject.next([...this.cartItems]);
  }
  updateQuantity(productId, quantity, typeId) {
    const item = this.cartItems.find((i) => i.product._id === productId && i.selectedType?._id === typeId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.cartSubject.next([...this.cartItems]);
    }
  }
  getTotal() {
    return this.cartItems.reduce((total, item) => {
      const price = item.selectedType?.price ?? item.product.price;
      return total + price * item.quantity;
    }, 0);
  }
  getCartCount() {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }
  clearCart() {
    this.cartItems = [];
    this.cartSubject.next([]);
  }
  getItems() {
    return [...this.cartItems];
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};

// src/app/shared/components/navbar/navbar.component.ts
var _c02 = () => ({ exact: true });
function NavbarComponent_ng_container_12_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cartCount);
  }
}
function NavbarComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 9);
    \u0275\u0275listener("click", function NavbarComponent_ng_container_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "rect", 11)(4, "rect", 12)(5, "rect", 13)(6, "rect", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 15);
    \u0275\u0275listener("click", function NavbarComponent_ng_container_12_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275elementStart(10, "span", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 17);
    \u0275\u0275element(12, "circle", 18)(13, "circle", 19)(14, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, NavbarComponent_ng_container_12_span_15_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "span", 22);
    \u0275\u0275text(17, "Cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 23);
    \u0275\u0275listener("click", function NavbarComponent_ng_container_12_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 10);
    \u0275\u0275element(20, "path", 24)(21, "polyline", 25)(22, "line", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Logout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", ctx_r1.cartCount > 0);
  }
}
function NavbarComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 28);
    \u0275\u0275listener("click", function NavbarComponent_ng_container_13_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path", 29)(4, "polyline", 30)(5, "line", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Login");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 32);
    \u0275\u0275listener("click", function NavbarComponent_ng_container_13_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMobileMenu());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 10);
    \u0275\u0275element(10, "path", 33)(11, "circle", 34)(12, "line", 35)(13, "line", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "Register");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c02));
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(3, _c02));
  }
}
var NavbarComponent = class _NavbarComponent {
  cartService;
  authService;
  notification;
  router;
  elRef;
  title = "MyStore";
  cartCount = 0;
  mobileMenuOpen = false;
  menuClosing = false;
  isLoggedIn = false;
  cartSub;
  authSub;
  constructor(cartService, authService, notification, router, elRef) {
    this.cartService = cartService;
    this.authService = authService;
    this.notification = notification;
    this.router = router;
    this.elRef = elRef;
  }
  ngOnInit() {
    this.cartSub = this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getCartCount();
    });
    this.authSub = this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
  ngOnDestroy() {
    this.cartSub.unsubscribe();
    this.authSub.unsubscribe();
  }
  logout() {
    this.authService.logout();
    this.notification.success("You have been logged out.");
    this.closeMobileMenu();
    this.router.navigate(["/auth/login"]);
  }
  toggleMobileMenu() {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.menuClosing = false;
      this.mobileMenuOpen = true;
    }
  }
  closeMobileMenu() {
    if (!this.mobileMenuOpen || this.menuClosing)
      return;
    this.menuClosing = true;
  }
  onMenuAnimationDone(event) {
    if (this.menuClosing && event.target === event.currentTarget) {
      this.mobileMenuOpen = false;
      this.menuClosing = false;
    }
  }
  /** Close the mobile menu when the user clicks outside the navbar. */
  onDocumentClick(event) {
    if (this.mobileMenuOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.closeMobileMenu();
    }
  }
  /** Close the mobile menu on Escape key press. */
  onEscapeKey() {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NavbarComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument)("keydown.escape", function NavbarComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscapeKey();
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 14, vars: 12, consts: [[1, "navbar"], [1, "navbar__container"], ["routerLink", "/products", 1, "navbar__brand", 3, "click"], [1, "navbar__logo"], ["aria-label", "Toggle navigation", 1, "navbar__toggle", 3, "click"], [1, "navbar__toggle-bar"], ["aria-hidden", "true", 1, "navbar__backdrop", 3, "click"], [1, "navbar__menu", 3, "animationend"], [4, "ngIf"], ["routerLink", "/products", "routerLinkActive", "navbar__link--active", 1, "navbar__link", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "navbar__link-icon"], ["x", "3", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "3", "width", "7", "height", "7"], ["x", "14", "y", "14", "width", "7", "height", "7"], ["x", "3", "y", "14", "width", "7", "height", "7"], ["routerLink", "/cart", "routerLinkActive", "navbar__link--active", "aria-label", "Cart", 1, "navbar__link", "navbar__cart-link", 3, "click"], [1, "navbar__cart-icon-wrap"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "navbar__cart-icon"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["class", "navbar__badge", 4, "ngIf"], [1, "navbar__cart-label"], [1, "navbar__link", "navbar__auth-btn", "navbar__auth-btn--logout", 3, "click"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "navbar__badge"], ["routerLink", "/auth/login", "routerLinkActive", "navbar__link--active", 1, "navbar__link", "navbar__auth-btn--login", 3, "click", "routerLinkActiveOptions"], ["d", "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], ["points", "10 17 15 12 10 7"], ["x1", "15", "y1", "12", "x2", "3", "y2", "12"], ["routerLink", "/auth/register", "routerLinkActive", "navbar__link--active", 1, "navbar__link", "navbar__auth-btn--register", 3, "click", "routerLinkActiveOptions"], ["d", "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "8.5", "cy", "7", "r", "4"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function NavbarComponent_Template_a_click_2_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "\u25C6");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function NavbarComponent_Template_button_click_6_listener() {
        return ctx.toggleMobileMenu();
      });
      \u0275\u0275element(7, "span", 5)(8, "span", 5)(9, "span", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275listener("click", function NavbarComponent_Template_div_click_10_listener() {
        return ctx.closeMobileMenu();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275listener("animationend", function NavbarComponent_Template_div_animationend_11_listener($event) {
        return ctx.onMenuAnimationDone($event);
      });
      \u0275\u0275template(12, NavbarComponent_ng_container_12_Template, 25, 1, "ng-container", 8)(13, NavbarComponent_ng_container_13_Template, 16, 4, "ng-container", 8);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.title, " ");
      \u0275\u0275advance();
      \u0275\u0275classProp("navbar__toggle--active", ctx.mobileMenuOpen);
      \u0275\u0275attribute("aria-expanded", ctx.mobileMenuOpen);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("navbar__backdrop--visible", ctx.mobileMenuOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("navbar__menu--open", ctx.mobileMenuOpen)("navbar__menu--closing", ctx.menuClosing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoggedIn);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoggedIn);
    }
  }, dependencies: [NgIf, RouterLink, RouterLinkActive], styles: ['\n\n@keyframes _ngcontent-%COMP%_menuDropDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_menuRetractUp {\n  from {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  to {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n}\n.navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  background: #ffffff;\n  border-bottom: 1px solid #e5e7eb;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);\n  height: 70px;\n}\n.navbar__container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n}\n@media (min-width: 768px) {\n  .navbar__container[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n.navbar__brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  text-decoration: none;\n  transition: color 150ms ease;\n  z-index: 210;\n}\n.navbar__brand[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.navbar__logo[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 1.875rem;\n}\n.navbar__toggle[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 6px;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 8px;\n  z-index: 210;\n  transition: border-color 150ms ease, background 150ms ease;\n}\n.navbar__toggle[_ngcontent-%COMP%]:hover {\n  background: #eff6ff;\n  border-color: #2563eb;\n}\n.navbar__toggle[_ngcontent-%COMP%]   .navbar__toggle-bar[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 2.5px;\n  background: #1f2937;\n  border-radius: 2px;\n  transform-origin: center;\n  transition:\n    transform 250ms ease,\n    opacity 250ms ease,\n    background 250ms ease;\n}\n.navbar__toggle--active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n}\n.navbar__toggle--active[_ngcontent-%COMP%]   .navbar__toggle-bar[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(8.5px) rotate(45deg);\n  background: #2563eb;\n}\n.navbar__toggle--active[_ngcontent-%COMP%]   .navbar__toggle-bar[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  transform: scaleX(0);\n}\n.navbar__toggle--active[_ngcontent-%COMP%]   .navbar__toggle-bar[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-8.5px) rotate(-45deg);\n  background: #2563eb;\n}\n@media (min-width: 768px) {\n  .navbar__toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar__backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 767px) {\n  .navbar__backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.35);\n    backdrop-filter: blur(2px);\n    z-index: 190;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 250ms ease;\n  }\n  .navbar__backdrop--visible[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: all;\n  }\n}\n.navbar__menu[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  top: 70px;\n  left: 0;\n  right: 0;\n  background: #ffffff;\n  border-bottom: 2px solid #e5e7eb;\n  padding: 8px 0;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);\n  z-index: 200;\n  animation: _ngcontent-%COMP%_menuDropDown 0.22s ease both;\n}\n.navbar__menu--open[_ngcontent-%COMP%] {\n  display: flex;\n}\n.navbar__menu--closing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_menuRetractUp 0.2s ease forwards;\n}\n@media (min-width: 768px) {\n  .navbar__menu[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    position: static;\n    background: none;\n    border: none;\n    padding: 0;\n    box-shadow: none;\n    gap: 4px;\n    align-items: center;\n    animation: none;\n  }\n}\n.navbar__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  font-size: 1rem;\n  font-weight: 500;\n  color: #6b7280;\n  text-decoration: none;\n  border-radius: 0;\n  transition: color 150ms ease, background 150ms ease;\n  min-height: 52px;\n}\n.navbar__link[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n  background: #eff6ff;\n}\n.navbar__link--active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: #eff6ff;\n  font-weight: 600;\n  position: relative;\n}\n.navbar__link--active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 3px;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background: #2563eb;\n  border-radius: 0 2px 2px 0;\n}\n@media (min-width: 768px) {\n  .navbar__link--active[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n  .navbar__link--active[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar__link[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    border-radius: 8px;\n    font-size: 0.875rem;\n    min-height: unset;\n  }\n}\n.navbar__link-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  opacity: 0.7;\n}\n@media (min-width: 768px) {\n  .navbar__link-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar__cart-link[_ngcontent-%COMP%] {\n    gap: 0;\n  }\n}\n.navbar__cart-icon-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.navbar__cart-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n}\n@media (min-width: 768px) {\n  .navbar__cart-icon[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n}\n.navbar__cart-label[_ngcontent-%COMP%] {\n  display: inline;\n}\n@media (min-width: 768px) {\n  .navbar__cart-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar__auth-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n}\n.navbar__auth-btn--logout[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.navbar__auth-btn--logout[_ngcontent-%COMP%]:hover {\n  color: #eb1515;\n  background: #fef2f2;\n}\n.navbar__auth-btn--logout[_ngcontent-%COMP%]   .navbar__link-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.navbar__auth-btn--login.navbar__link--active[_ngcontent-%COMP%], \n.navbar__auth-btn--register.navbar__link--active[_ngcontent-%COMP%] {\n  background: #1d4ed8;\n  color: white;\n  box-shadow: inset 0 -2px 0 0 white;\n}\n.navbar__auth-btn--login.navbar__link--active[_ngcontent-%COMP%]::after, \n.navbar__auth-btn--register.navbar__link--active[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.navbar__auth-btn--login.navbar__link--active[_ngcontent-%COMP%]:hover, \n.navbar__auth-btn--register.navbar__link--active[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  color: white;\n}\n.navbar__badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: -6px;\n  right: -8px;\n  min-width: 20px;\n  height: 20px;\n  padding: 0 5px;\n  background: #2563eb;\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 700;\n  border-radius: 9999px;\n  line-height: 1;\n  animation: scaleIn 0.3s ease;\n  border: 2px solid #ffffff;\n}\n@media (min-width: 768px) {\n  .navbar__badge[_ngcontent-%COMP%] {\n    top: -4px;\n    right: -6px;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent" });
})();

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static \u0275fac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CommonModule,
    FormsModule,
    RouterModule
  ] });
};

export {
  InputFieldComponent,
  QuantityInputComponent,
  ProductCardComponent,
  CartService,
  NavbarComponent,
  SharedModule
};
//# sourceMappingURL=chunk-QRYYWEBP.js.map
