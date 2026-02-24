import {
  CartService,
  InputFieldComponent,
  QuantityInputComponent,
  SharedModule
} from "./chunk-QRYYWEBP.js";
import {
  CheckboxControlValueAccessor,
  DecimalPipe,
  DefaultValueAccessor,
  ElementRef,
  EventEmitter,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  NotificationService,
  RadioControlValueAccessor,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  TitleCasePipe,
  __spreadProps,
  __spreadValues,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GBEM7T6G.js";

// src/app/features/cart/components/dialogs/address-dialog/address-dialog.component.ts
function AddressDialogComponent_ng_container_2_label_7_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function AddressDialogComponent_ng_container_2_label_7_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_2_label_7_button_20_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const address_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteAddress(address_r4.id, $event));
    });
    \u0275\u0275text(1, "Delete");
    \u0275\u0275elementEnd();
  }
}
function AddressDialogComponent_ng_container_2_label_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 13)(1, "input", 14);
    \u0275\u0275listener("ngModelChange", function AddressDialogComponent_ng_container_2_label_7_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onRadioChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_2_label_7_Template_button_click_9_listener($event) {
      const address_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditMode(address_r4, $event));
    });
    \u0275\u0275text(10, "Edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 22);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 23);
    \u0275\u0275template(16, AddressDialogComponent_ng_container_2_label_7_span_16_Template, 2, 0, "span", 24);
    \u0275\u0275elementStart(17, "span", 25);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AddressDialogComponent_ng_container_2_label_7_button_20_Template, 2, 0, "button", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const address_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("address-list-item--selected", ctx_r1.localSelectedId === address_r4.id);
    \u0275\u0275advance();
    \u0275\u0275property("value", address_r4.id)("ngModel", ctx_r1.localSelectedId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(address_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r4.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(address_r4.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r4.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", address_r4.isDefault);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 11, address_r4.label));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.addresses.length > 1);
  }
}
function AddressDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3, "My Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(5, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275template(7, AddressDialogComponent_ng_container_2_label_7_Template, 21, 13, "label", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddMode());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 10);
    \u0275\u0275element(11, "path", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Add New Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_2_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmSelection());
    });
    \u0275\u0275text(14, "Confirm");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r1.addresses);
  }
}
function AddressDialogComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "button", 29);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 30);
    \u0275\u0275element(4, "path", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_3_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "form", 32);
    \u0275\u0275listener("ngSubmit", function AddressDialogComponent_ng_container_3_Template_form_ngSubmit_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveAddress());
    });
    \u0275\u0275elementStart(10, "div", 33)(11, "app-input-field", 34);
    \u0275\u0275twoWayListener("ngModelChange", function AddressDialogComponent_ng_container_3_Template_app_input_field_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addressForm.fullName, $event) || (ctx_r1.addressForm.fullName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-input-field", 35);
    \u0275\u0275twoWayListener("ngModelChange", function AddressDialogComponent_ng_container_3_Template_app_input_field_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addressForm.phone, $event) || (ctx_r1.addressForm.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "app-input-field", 36);
    \u0275\u0275twoWayListener("ngModelChange", function AddressDialogComponent_ng_container_3_Template_app_input_field_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addressForm.city, $event) || (ctx_r1.addressForm.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "app-input-field", 37);
    \u0275\u0275twoWayListener("ngModelChange", function AddressDialogComponent_ng_container_3_Template_app_input_field_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addressForm.address, $event) || (ctx_r1.addressForm.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 38)(16, "label", 39);
    \u0275\u0275text(17, "Label As");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 40)(19, "button", 41);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_3_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLabel("home"));
    });
    \u0275\u0275text(20, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 41);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_3_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLabel("work"));
    });
    \u0275\u0275text(22, "Work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 41);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_3_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLabel("other"));
    });
    \u0275\u0275text(24, "Other");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "label", 42)(26, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function AddressDialogComponent_ng_container_3_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addressForm.isDefault, $event) || (ctx_r1.addressForm.isDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Set as Default Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 44)(30, "button", 45);
    \u0275\u0275listener("click", function AddressDialogComponent_ng_container_3_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToList());
    });
    \u0275\u0275text(31, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 46);
    \u0275\u0275text(33, "Submit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.dialogMode === "add" ? "New Address" : "Edit Address");
    \u0275\u0275advance(5);
    \u0275\u0275property("required", true)("forceTouch", ctx_r1.formSubmitted);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressForm.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("forceTouch", ctx_r1.formSubmitted);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressForm.phone);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("forceTouch", ctx_r1.formSubmitted);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressForm.city);
    \u0275\u0275advance();
    \u0275\u0275property("required", true)("forceTouch", ctx_r1.formSubmitted);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressForm.address);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("address-label-btn--active", ctx_r1.addressForm.label === "home");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("address-label-btn--active", ctx_r1.addressForm.label === "work");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("address-label-btn--active", ctx_r1.addressForm.label === "other");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addressForm.isDefault);
  }
}
var AddressDialogComponent = class _AddressDialogComponent {
  elementRef;
  notificationService;
  addresses = [];
  selectedAddressId = "";
  addressesChange = new EventEmitter();
  selectedAddressIdChange = new EventEmitter();
  closed = new EventEmitter();
  dialogMode = "list";
  editingAddressId = null;
  addressForm = this.blankForm();
  formSubmitted = false;
  closing = false;
  /** Local copy — only pushed to parent on Confirm */
  localSelectedId = "";
  constructor(elementRef, notificationService) {
    this.elementRef = elementRef;
    this.notificationService = notificationService;
  }
  /** Move host element to <body> so position:fixed covers the full viewport,
   *  regardless of any CSS transform/contain on ancestor cart-page elements. */
  ngOnInit() {
    document.body.appendChild(this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    const el = this.elementRef.nativeElement;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
  ngOnChanges() {
    this.dialogMode = "list";
    this.editingAddressId = null;
    this.addressForm = this.blankForm();
    this.formSubmitted = false;
    this.localSelectedId = this.selectedAddressId;
  }
  // ── Navigation ─────────────────────────────────────────────────────────────
  openAddMode() {
    this.formSubmitted = false;
    this.addressForm = this.blankForm();
    this.editingAddressId = null;
    this.dialogMode = "add";
  }
  openEditMode(address, event) {
    event.preventDefault();
    this.formSubmitted = false;
    this.editingAddressId = address.id;
    this.addressForm = {
      fullName: address.fullName,
      phone: address.phone,
      address: address.address,
      city: address.city,
      isDefault: address.isDefault,
      label: address.label
    };
    this.dialogMode = "edit";
  }
  backToList() {
    this.formSubmitted = false;
    this.editingAddressId = null;
    this.addressForm = this.blankForm();
    this.dialogMode = "list";
  }
  close() {
    if (this.closing)
      return;
    this.closing = true;
  }
  onOverlayAnimationDone(event) {
    if (this.closing && event.target === event.currentTarget) {
      this.closed.emit();
    }
  }
  // ── Selection ──────────────────────────────────────────────────────────────
  confirmSelection() {
    this.selectedAddressIdChange.emit(this.localSelectedId);
    this.close();
  }
  onRadioChange(id) {
    this.localSelectedId = id;
  }
  // ── Label ──────────────────────────────────────────────────────────────────
  setLabel(label) {
    this.addressForm.label = label;
  }
  // ── CRUD ───────────────────────────────────────────────────────────────────
  deleteAddress(id, event) {
    event.preventDefault();
    if (this.addresses.length <= 1) {
      this.notificationService.error("You must keep at least one address.");
      return;
    }
    let updated = this.addresses.filter((a) => a.id !== id);
    if (this.localSelectedId === id) {
      const fallback = updated.find((a) => a.isDefault) ?? updated[0];
      this.localSelectedId = fallback.id;
    }
    if (!updated.some((a) => a.isDefault)) {
      updated = [__spreadProps(__spreadValues({}, updated[0]), { isDefault: true }), ...updated.slice(1)];
    }
    this.addressesChange.emit(updated);
    this.notificationService.info("Address removed.");
  }
  saveAddress() {
    this.formSubmitted = true;
    if (!this.addressForm.fullName.trim() || !this.addressForm.address.trim() || !this.addressForm.city.trim()) {
      return;
    }
    let updated = [...this.addresses];
    if (this.addressForm.isDefault) {
      updated = updated.map((a) => __spreadProps(__spreadValues({}, a), { isDefault: false }));
    }
    if (this.dialogMode === "edit" && this.editingAddressId) {
      updated = updated.map((a) => a.id === this.editingAddressId ? __spreadValues({ id: this.editingAddressId }, this.addressForm) : a);
      this.notificationService.success("Address updated!");
    } else {
      const newId = `address-${Date.now()}`;
      updated = [...updated, __spreadValues({ id: newId }, this.addressForm)];
      this.localSelectedId = newId;
      this.notificationService.success("New address added!");
    }
    if (!updated.some((a) => a.isDefault)) {
      updated = [__spreadProps(__spreadValues({}, updated[0]), { isDefault: true }), ...updated.slice(1)];
    }
    this.addressesChange.emit(updated);
    this.backToList();
  }
  blankForm() {
    return { fullName: "", phone: "", address: "", city: "", isDefault: false, label: "home" };
  }
  static \u0275fac = function AddressDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddressDialogComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NotificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddressDialogComponent, selectors: [["app-address-dialog"]], inputs: { addresses: "addresses", selectedAddressId: "selectedAddressId" }, outputs: { addressesChange: "addressesChange", selectedAddressIdChange: "selectedAddressIdChange", closed: "closed" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 6, consts: [[1, "address-dialog-overlay", 3, "click", "animationend"], [1, "address-dialog", 3, "click"], [4, "ngIf"], [1, "address-dialog__header"], [1, "address-dialog__title"], ["aria-label", "Close", 1, "address-dialog__close", 3, "click"], [1, "address-dialog__list"], ["class", "address-list-item", 3, "address-list-item--selected", 4, "ngFor", "ngForOf"], [1, "address-dialog__footer"], [1, "address-dialog__add-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "16", "height", "16", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "address-dialog__confirm-btn", 3, "click"], [1, "address-list-item"], ["type", "radio", "name", "addressSelect", 3, "ngModelChange", "value", "ngModel"], [1, "address-list-item__radio-dot"], [1, "address-list-item__body"], [1, "address-list-item__top"], [1, "address-list-item__name"], [1, "address-list-item__phone"], ["type", "button", 1, "address-list-item__edit", 3, "click"], [1, "address-list-item__address"], [1, "address-list-item__city"], [1, "address-list-item__tags"], ["class", "address-list-item__default-badge", 4, "ngIf"], [1, "address-list-item__label-badge"], ["type", "button", "class", "address-list-item__delete", 3, "click", 4, "ngIf"], [1, "address-list-item__default-badge"], ["type", "button", 1, "address-list-item__delete", 3, "click"], ["aria-label", "Back to list", 1, "address-dialog__back", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "18", "height", "18", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clip-rule", "evenodd"], [1, "address-dialog__form", 3, "ngSubmit"], [1, "address-form-row"], ["name", "afFullName", "label", "Full Name", "placeholder", "Full Name", 3, "ngModelChange", "required", "forceTouch", "ngModel"], ["name", "afPhone", "label", "Phone Number", "type", "tel", "placeholder", "Phone Number", 3, "ngModelChange", "forceTouch", "ngModel"], ["name", "afCity", "label", "City / Province", "placeholder", "City, Province, Postal Code", 3, "ngModelChange", "required", "forceTouch", "ngModel"], ["name", "afAddress", "label", "Street Address", "placeholder", "Street Name, Building, House No.", 3, "ngModelChange", "required", "forceTouch", "ngModel"], [1, "address-form-field"], [1, "address-form-field__label"], [1, "address-label-options"], ["type", "button", 1, "address-label-btn", 3, "click"], [1, "address-form-checkbox"], ["type", "checkbox", "name", "afDefault", 3, "ngModelChange", "ngModel"], [1, "address-dialog__actions"], ["type", "button", 1, "address-dialog__cancel", 3, "click"], ["type", "submit", 1, "address-dialog__save"]], template: function AddressDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AddressDialogComponent_Template_div_click_0_listener() {
        return ctx.close();
      })("animationend", function AddressDialogComponent_Template_div_animationend_0_listener($event) {
        return ctx.onOverlayAnimationDone($event);
      });
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275listener("click", function AddressDialogComponent_Template_div_click_1_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275template(2, AddressDialogComponent_ng_container_2_Template, 15, 1, "ng-container", 2)(3, AddressDialogComponent_ng_container_3_Template, 34, 19, "ng-container", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("address-dialog-overlay--closing", ctx.closing);
      \u0275\u0275advance();
      \u0275\u0275classProp("address-dialog--closing", ctx.closing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dialogMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dialogMode === "add" || ctx.dialogMode === "edit");
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, InputFieldComponent, TitleCasePipe], styles: ['\n\n.address-dialog-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16px;\n  animation: _ngcontent-%COMP%_overlayFadeIn 250ms ease forwards;\n}\n.address-dialog-overlay--closing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_overlayFadeOut 250ms ease forwards;\n}\n.address-dialog[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  max-width: 560px;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_dialogSlideUp 350ms ease forwards;\n}\n.address-dialog--closing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dialogSlideDown 250ms ease forwards;\n}\n.address-dialog__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  border-bottom: 1px solid #e5e7eb;\n  flex-shrink: 0;\n}\n.address-dialog__title[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0;\n}\n.address-dialog__back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: none;\n  color: #6b7280;\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  transition: color 150ms ease;\n}\n.address-dialog__back[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-dialog__back[_ngcontent-%COMP%]:hover {\n  color: #1f2937;\n}\n.address-dialog__close[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 1.25rem;\n  width: 34px;\n  height: 34px;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  line-height: 1;\n  flex-shrink: 0;\n  transition: all 150ms ease;\n}\n.address-dialog__close[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-dialog__close[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  color: #ef4444;\n}\n.address-dialog__list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.address-dialog__footer[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex-shrink: 0;\n}\n.address-dialog__add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #2563eb;\n  border-radius: 8px;\n  color: #2563eb;\n  font-size: 1rem;\n  font-weight: 600;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  transition: all 150ms ease;\n}\n.address-dialog__add-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-dialog__add-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n}\n.address-dialog__confirm-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  width: 100%;\n  padding: 16px;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.address-dialog__confirm-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-dialog__confirm-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.address-dialog__confirm-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.address-dialog__form[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.address-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  margin-top: 4px;\n}\n.address-dialog__cancel[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  padding: 8px 32px;\n  background: #f3f4f6;\n  color: #1f2937;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 500;\n  transition: background 150ms ease;\n}\n.address-dialog__cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-dialog__cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.address-dialog__save[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  padding: 8px 32px;\n  font-size: 1rem;\n}\n.address-dialog__save[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-dialog__save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.address-dialog__save[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.address-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: border-color 150ms ease, background 150ms ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.address-list-item[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.address-list-item[_ngcontent-%COMP%]:hover {\n  border-color: #60a5fa;\n  background: #eff6ff;\n}\n.address-list-item--selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n}\n.address-list-item__radio-dot[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  border: 2px solid #d1d5db;\n  flex-shrink: 0;\n  margin-top: 2px;\n  position: relative;\n  transition: border-color 150ms ease;\n}\n.address-list-item--selected[_ngcontent-%COMP%]   .address-list-item__radio-dot[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n}\n.address-list-item--selected[_ngcontent-%COMP%]   .address-list-item__radio-dot[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: #2563eb;\n}\n.address-list-item__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.address-list-item__top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 4px;\n}\n.address-list-item__name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.address-list-item__phone[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  flex: 1;\n}\n.address-list-item__edit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: none;\n  color: #2563eb;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 0;\n  margin-left: auto;\n  flex-shrink: 0;\n  transition: color 150ms ease;\n}\n.address-list-item__edit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-list-item__edit[_ngcontent-%COMP%]:hover {\n  color: #1d4ed8;\n}\n.address-list-item__address[_ngcontent-%COMP%], \n.address-list-item__city[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 2px;\n  word-break: break-word;\n  line-height: 1.4;\n}\n.address-list-item__city[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.address-list-item__tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.address-list-item__default-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #2563eb;\n  color: #2563eb;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 1px 6px;\n  border-radius: 2px;\n}\n.address-list-item__label-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #f3f4f6;\n  color: #9ca3af;\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 1px 6px;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n}\n.address-list-item__delete[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: none;\n  color: #9ca3af;\n  font-size: 0.75rem;\n  padding: 0;\n  margin-left: auto;\n  text-decoration: underline;\n  transition: color 150ms ease;\n}\n.address-list-item__delete[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-list-item__delete[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.address-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 576px) {\n  .address-form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.address-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.address-form-field__label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1f2937;\n}\n.address-form-field__req[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.address-form-field__input[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #1f2937;\n  outline: none;\n  transition: border-color 150ms ease;\n}\n.address-form-field__input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.address-form-field__input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.address-label-options[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.address-label-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  padding: 4px 24px;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  background: #ffffff;\n  color: #6b7280;\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all 150ms ease;\n}\n.address-label-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.address-label-btn[_ngcontent-%COMP%]:hover {\n  border-color: #2563eb;\n  color: #2563eb;\n}\n.address-label-btn--active[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  color: #2563eb;\n  background: #eff6ff;\n  font-weight: 600;\n}\n.address-form-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  color: #6b7280;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.address-form-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  accent-color: #2563eb;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_dialogSlideUp {\n  from {\n    transform: translateY(24px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_overlayFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_dialogSlideDown {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(24px);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=address-dialog.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddressDialogComponent, { className: "AddressDialogComponent" });
})();

// src/app/features/cart/cart-page/cart-page.component.ts
var _c0 = (a0) => ["/products", a0];
function CartPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "circle", 9)(4, "circle", 10)(5, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2");
    \u0275\u0275text(7, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Looks like you haven't added any products yet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 12);
    \u0275\u0275text(11, "Browse Products");
    \u0275\u0275elementEnd()();
  }
}
function CartPageComponent_div_4_div_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function CartPageComponent_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 50);
    \u0275\u0275text(7, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CartPageComponent_div_4_div_6_span_10_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 53);
    \u0275\u0275listener("click", function CartPageComponent_div_4_div_6_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.isAddressDialogOpen = true);
    });
    \u0275\u0275text(12, "Change");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedAddress.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", ctx_r2.selectedAddress.phone, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedAddress.address, ", ", ctx_r2.selectedAddress.city, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedAddress.isDefault);
  }
}
function CartPageComponent_div_4_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "span");
    \u0275\u0275text(2, "No delivery address selected.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 56);
    \u0275\u0275listener("click", function CartPageComponent_div_4_ng_template_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.isAddressDialogOpen = true);
    });
    \u0275\u0275text(4, "+ Add Address");
    \u0275\u0275elementEnd()();
  }
}
function CartPageComponent_div_4_div_11__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 68);
    \u0275\u0275element(1, "path", 69);
    \u0275\u0275elementEnd();
  }
}
function CartPageComponent_div_4_div_11__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 68);
    \u0275\u0275element(1, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function CartPageComponent_div_4_div_11_div_12__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 68);
    \u0275\u0275element(1, "path", 69);
    \u0275\u0275elementEnd();
  }
}
function CartPageComponent_div_4_div_11_div_12_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Color: ", item_r8.selectedType.color, " ");
  }
}
function CartPageComponent_div_4_div_11_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "label", 72)(2, "input", 73);
    \u0275\u0275listener("change", function CartPageComponent_div_4_div_11_div_12_Template_input_change_2_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleItem(item_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275template(4, CartPageComponent_div_4_div_11_div_12__svg_svg_4_Template, 2, 0, "svg", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 74);
    \u0275\u0275element(6, "img", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 76)(8, "h3", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, CartPageComponent_div_4_div_11_div_12_p_10_Template, 2, 1, "p", 78);
    \u0275\u0275elementStart(11, "p", 79);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 80)(15, "app-quantity-input", 81);
    \u0275\u0275listener("ngModelChange", function CartPageComponent_div_4_div_11_div_12_Template_app_quantity_input_ngModelChange_15_listener($event) {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateQuantity(item_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 82);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 83);
    \u0275\u0275listener("click", function CartPageComponent_div_4_div_11_div_12_Template_button_click_19_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.removeItem(item_r8));
    });
    \u0275\u0275text(20, " \xD7 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("cart-item--unselected", !ctx_r2.isItemSelected(item_r8));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.isItemSelected(item_r8));
    \u0275\u0275advance();
    \u0275\u0275classProp("custom-checkbox--checked", ctx_r2.isItemSelected(item_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isItemSelected(item_r8));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c0, item_r8.product._id));
    \u0275\u0275advance();
    \u0275\u0275property("src", (item_r8.selectedType == null ? null : item_r8.selectedType.image) || item_r8.product.image, \u0275\u0275sanitizeUrl)("alt", item_r8.product.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.product.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r8.selectedType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(13, 17, ctx_r2.getItemPrice(item_r8), "1.2-2"), "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", item_r8.quantity)("name", "qty-" + item_r8.product._id + "-" + ((item_r8.selectedType == null ? null : item_r8.selectedType._id) || "default"))("min", 1)("max", 99);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" $", \u0275\u0275pipeBind2(18, 20, ctx_r2.getItemSubtotal(item_r8), "1.2-2"), " ");
  }
}
function CartPageComponent_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "label", 59)(3, "input", 60);
    \u0275\u0275listener("change", function CartPageComponent_div_4_div_11_Template_input_change_3_listener() {
      const group_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleShop(group_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275template(5, CartPageComponent_div_4_div_11__svg_svg_5_Template, 2, 0, "svg", 62)(6, CartPageComponent_div_4_div_11__svg_svg_6_Template, 2, 0, "svg", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 63);
    \u0275\u0275element(8, "path", 64)(9, "path", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, CartPageComponent_div_4_div_11_div_12_Template, 21, 25, "div", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r2.isShopAllSelected(group_r6))("indeterminate", ctx_r2.isShopIndeterminate(group_r6));
    \u0275\u0275advance();
    \u0275\u0275classProp("custom-checkbox--checked", ctx_r2.isShopAllSelected(group_r6))("custom-checkbox--indeterminate", ctx_r2.isShopIndeterminate(group_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isShopAllSelected(group_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isShopIndeterminate(group_r6));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(group_r6.shopName);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", group_r6.items);
  }
}
function CartPageComponent_div_4_p_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 85);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2713 ", ctx_r2.discountSuccess, "");
  }
}
function CartPageComponent_div_4_p_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.discountError);
  }
}
function CartPageComponent_div_4_label_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 87)(1, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function CartPageComponent_div_4_label_38_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedPayment, $event) || (ctx_r2.selectedPayment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 90);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("payment-chip--selected", ctx_r2.selectedPayment === method_r10.id);
    \u0275\u0275advance();
    \u0275\u0275property("value", method_r10.id);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.selectedPayment);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", method_r10.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(method_r10.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r10.name);
  }
}
function CartPageComponent_div_4_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "span");
    \u0275\u0275text(2, " Discount ");
    \u0275\u0275elementStart(3, "span", 92);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 93);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementStart(8, "button", 94);
    \u0275\u0275listener("click", function CartPageComponent_div_4_div_48_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeDiscount());
    });
    \u0275\u0275text(9, "\xD7");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.discountLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u2212$", \u0275\u0275pipeBind2(7, 2, ctx_r2.discountAmount, "1.2-2"), " ");
  }
}
function CartPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 13)(2, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Delivery Address ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CartPageComponent_div_4_div_6_Template, 13, 5, "div", 17)(7, CartPageComponent_div_4_ng_template_7_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 18)(10, "div", 19);
    \u0275\u0275template(11, CartPageComponent_div_4_div_11_Template, 13, 10, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 21)(13, "div", 22)(14, "h3", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 24);
    \u0275\u0275element(16, "path", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Discount Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 26)(19, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function CartPageComponent_div_4_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.discountCode, $event) || (ctx_r2.discountCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function CartPageComponent_div_4_Template_input_keyup_enter_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyDiscount());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 28);
    \u0275\u0275listener("click", function CartPageComponent_div_4_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyDiscount());
    });
    \u0275\u0275text(21, "Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, CartPageComponent_div_4_p_22_Template, 2, 1, "p", 29)(23, CartPageComponent_div_4_p_23_Template, 2, 1, "p", 30);
    \u0275\u0275elementStart(24, "div", 31)(25, "span");
    \u0275\u0275text(26, "Available codes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 32);
    \u0275\u0275listener("click", function CartPageComponent_div_4_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.useHintCode("10%OFF"));
    });
    \u0275\u0275text(28, "10%OFF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 32);
    \u0275\u0275listener("click", function CartPageComponent_div_4_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.useHintCode("SAVE20"));
    });
    \u0275\u0275text(30, "SAVE20");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 22)(32, "h3", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 24);
    \u0275\u0275element(34, "path", 33)(35, "path", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Payment Method ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div", 35);
    \u0275\u0275template(38, CartPageComponent_div_4_label_38_Template, 6, 8, "label", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 37)(40, "h2", 38);
    \u0275\u0275text(41, "Order Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 39)(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(48, CartPageComponent_div_4_div_48_Template, 10, 5, "div", 40);
    \u0275\u0275elementStart(49, "div", 39)(50, "span");
    \u0275\u0275text(51, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 41);
    \u0275\u0275text(53, "Free");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 42)(55, "span");
    \u0275\u0275text(56, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "button", 43);
    \u0275\u0275listener("click", function CartPageComponent_div_4_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProceedToCheckout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 44);
    \u0275\u0275element(62, "path", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const noAddrBar_r12 = \u0275\u0275reference(8);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.selectedAddress)("ngIfElse", noAddrBar_r12);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.shopGroups);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.discountCode);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.discountSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.discountError);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.paymentMethods);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("Selected (", ctx_r2.selectedCount, " ", ctx_r2.selectedCount === 1 ? "item" : "items", ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(47, 13, ctx_r2.selectedTotal, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.appliedDiscount > 0);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(59, 16, ctx_r2.cartTotalAfterDiscount, "1.2-2"), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Checkout (", ctx_r2.selectedCount, ") ");
  }
}
function CartPageComponent_app_address_dialog_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-address-dialog", 95);
    \u0275\u0275twoWayListener("addressesChange", function CartPageComponent_app_address_dialog_5_Template_app_address_dialog_addressesChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.addresses, $event) || (ctx_r2.addresses = $event);
      return \u0275\u0275resetView($event);
    })("selectedAddressIdChange", function CartPageComponent_app_address_dialog_5_Template_app_address_dialog_selectedAddressIdChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.selectedAddressId, $event) || (ctx_r2.selectedAddressId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("closed", function CartPageComponent_app_address_dialog_5_Template_app_address_dialog_closed_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.isAddressDialogOpen = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("addresses", ctx_r2.addresses)("selectedAddressId", ctx_r2.selectedAddressId);
  }
}
var CartPageComponent = class _CartPageComponent {
  cartService;
  notificationService;
  router;
  cartItems = [];
  shopGroups = [];
  // ── Selection ───────────────────────────────────────────────────────────────
  selectedKeys = /* @__PURE__ */ new Set();
  // ── Addresses ──────────────────────────────────────────────────────────────
  addresses = [
    {
      id: "addr-1",
      fullName: "John Doe",
      phone: "+1 555 123 4567",
      address: "123 Main Street, Apt 4B",
      city: "New York, NY 10001",
      isDefault: true,
      label: "home"
    }
  ];
  selectedAddressId = "addr-1";
  isAddressDialogOpen = false;
  // ── Payment ────────────────────────────────────────────────────────────────
  selectedPayment = "visa";
  paymentMethods = [
    { id: "visa", name: "Visa", description: "Credit / Debit Card", badge: "VISA", color: "#1a1f71" },
    { id: "mastercard", name: "Mastercard", description: "Credit / Debit Card", badge: "MC", color: "#eb001b" },
    { id: "qrcode", name: "QR Code", description: "Scan to Pay", badge: "QR", color: "#6366f1" },
    { id: "bank", name: "Bank Transfer", description: "Direct Bank Transfer", badge: "BANK", color: "#059669" }
  ];
  // ── Discount ───────────────────────────────────────────────────────────────
  discountCode = "";
  appliedDiscount = 0;
  discountLabel = "";
  discountSuccess = "";
  discountError = "";
  MOCK_CODES = {
    "10%OFF": 0.1,
    "SAVE20": 0.2
  };
  cartSub;
  constructor(cartService, notificationService, router) {
    this.cartService = cartService;
    this.notificationService = notificationService;
    this.router = router;
  }
  ngOnInit() {
    this.cartSub = this.cartService.cart$.subscribe((items) => {
      this.cartItems = items;
      items.forEach((item) => {
        const key = this.getItemKey(item);
        if (!this.selectedKeys.has(key) && !this._initializedKeys.has(key)) {
          this.selectedKeys.add(key);
        }
        this._initializedKeys.add(key);
      });
      this.cleanUpRemovedKeys();
      this.rebuildShopGroups();
    });
  }
  _initializedKeys = /* @__PURE__ */ new Set();
  cleanUpRemovedKeys() {
    const currentKeys = new Set(this.cartItems.map((i) => this.getItemKey(i)));
    for (const key of this.selectedKeys) {
      if (!currentKeys.has(key)) {
        this.selectedKeys.delete(key);
      }
    }
    for (const key of this._initializedKeys) {
      if (!currentKeys.has(key)) {
        this._initializedKeys.delete(key);
      }
    }
  }
  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }
  // ── Item key ────────────────────────────────────────────────────────────────
  getItemKey(item) {
    return `${item.product._id}_${item.selectedType?._id ?? "default"}`;
  }
  // ── Shop grouping ──────────────────────────────────────────────────────────
  rebuildShopGroups() {
    const groupMap = /* @__PURE__ */ new Map();
    for (const item of this.cartItems) {
      const id = item.shopId || "unknown";
      if (!groupMap.has(id)) {
        groupMap.set(id, { shopId: id, shopName: item.shopName || "Unknown Shop", items: [] });
      }
      groupMap.get(id).items.push(item);
    }
    this.shopGroups = Array.from(groupMap.values());
  }
  // ── Selection logic ────────────────────────────────────────────────────────
  isItemSelected(item) {
    return this.selectedKeys.has(this.getItemKey(item));
  }
  toggleItem(item) {
    const key = this.getItemKey(item);
    if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key);
    } else {
      this.selectedKeys.add(key);
    }
  }
  isShopAllSelected(group) {
    return group.items.every((item) => this.selectedKeys.has(this.getItemKey(item)));
  }
  isShopIndeterminate(group) {
    const count = group.items.filter((item) => this.selectedKeys.has(this.getItemKey(item))).length;
    return count > 0 && count < group.items.length;
  }
  toggleShop(group) {
    const allSelected = this.isShopAllSelected(group);
    for (const item of group.items) {
      const key = this.getItemKey(item);
      if (allSelected) {
        this.selectedKeys.delete(key);
      } else {
        this.selectedKeys.add(key);
      }
    }
  }
  // ── Selected totals ────────────────────────────────────────────────────────
  get selectedItems() {
    return this.cartItems.filter((item) => this.selectedKeys.has(this.getItemKey(item)));
  }
  get selectedTotal() {
    return this.selectedItems.reduce((total, item) => {
      return total + this.getItemSubtotal(item);
    }, 0);
  }
  get selectedCount() {
    return this.selectedItems.reduce((count, item) => count + item.quantity, 0);
  }
  // ── Price helpers ──────────────────────────────────────────────────────────
  get cartTotal() {
    return this.selectedTotal;
  }
  get cartCount() {
    return this.selectedCount;
  }
  get discountAmount() {
    return this.cartTotal * this.appliedDiscount;
  }
  get cartTotalAfterDiscount() {
    return this.cartTotal - this.discountAmount;
  }
  get selectedAddress() {
    return this.addresses.find((a) => a.id === this.selectedAddressId);
  }
  getItemPrice(item) {
    return item.selectedType?.price ?? item.product.price;
  }
  getItemSubtotal(item) {
    return this.getItemPrice(item) * item.quantity;
  }
  updateQuantity(item, quantity) {
    this.cartService.updateQuantity(item.product._id, quantity, item.selectedType?._id);
    this.notificationService.info("Cart updated");
  }
  removeItem(item) {
    this.cartService.removeFromCart(item.product._id, item.selectedType?._id);
    this.notificationService.info(`${item.product.name} removed from cart`);
  }
  // ── Discount ───────────────────────────────────────────────────────────────
  applyDiscount() {
    const code = this.discountCode.trim().toUpperCase();
    if (!code) {
      this.discountError = "Please enter a discount code.";
      this.discountSuccess = "";
      return;
    }
    const discount = this.MOCK_CODES[code];
    if (discount !== void 0) {
      this.appliedDiscount = discount;
      this.discountLabel = code;
      this.discountSuccess = `"${code}" applied \u2014 ${discount * 100}% off your order!`;
      this.discountError = "";
    } else {
      this.discountError = 'Invalid code. Try "10%OFF" or "SAVE20".';
      this.discountSuccess = "";
      this.appliedDiscount = 0;
      this.discountLabel = "";
    }
  }
  useHintCode(code) {
    this.discountCode = code;
  }
  removeDiscount() {
    this.appliedDiscount = 0;
    this.discountLabel = "";
    this.discountCode = "";
    this.discountSuccess = "";
    this.discountError = "";
  }
  onProceedToCheckout() {
    if (this.selectedCount === 0) {
      this.notificationService.error("Please select at least one item to checkout.");
      return;
    }
    if (!this.selectedAddress) {
      this.notificationService.error("Please select a shipping address to continue.");
      this.isAddressDialogOpen = true;
      return;
    }
    this.cartService.clearCart();
    this.notificationService.success("Order placed successfully!", "Thank You");
    this.router.navigate(["/cart/confirmation"]);
  }
  static \u0275fac = function CartPageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartPageComponent)(\u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartPageComponent, selectors: [["app-cart-page"]], decls: 6, vars: 3, consts: [["noAddrBar", ""], [1, "cart-page"], [1, "cart-page__title"], ["class", "cart-page__empty", 4, "ngIf"], [4, "ngIf"], [3, "addresses", "selectedAddressId", "addressesChange", "selectedAddressIdChange", "closed", 4, "ngIf"], [1, "cart-page__empty"], [1, "cart-page__empty-icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "80", "height", "80", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["routerLink", "/products", 1, "cart-page__continue-btn"], [1, "delivery-bar"], [1, "delivery-bar__heading"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "16", "height", "16", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z", "clip-rule", "evenodd"], ["class", "delivery-bar__row", 4, "ngIf", "ngIfElse"], [1, "cart-page__content"], [1, "cart-page__items"], ["class", "shop-group", 4, "ngFor", "ngForOf"], [1, "cart-page__sidebar"], [1, "sidebar-card"], [1, "sidebar-card__heading"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "14", "height", "14", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z", "clip-rule", "evenodd"], [1, "discount-section__row"], ["type", "text", "name", "discountCode", "placeholder", "Enter code...", 1, "discount-section__input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "discount-section__apply", 3, "click"], ["class", "discount-section__success", 4, "ngIf"], ["class", "discount-section__error", 4, "ngIf"], [1, "discount-section__hints"], [1, "discount-section__hint-tag", 3, "click"], ["d", "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"], ["fill-rule", "evenodd", "d", "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z", "clip-rule", "evenodd"], [1, "payment-section__grid"], ["class", "payment-chip", 3, "payment-chip--selected", 4, "ngFor", "ngForOf"], [1, "cart-summary"], [1, "cart-summary__title"], [1, "cart-summary__row"], ["class", "cart-summary__row cart-summary__row--discount", 4, "ngIf"], [1, "cart-summary__free"], [1, "cart-summary__total"], [1, "cart-summary__checkout-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "18", "height", "18", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z", "clip-rule", "evenodd"], [1, "delivery-bar__row"], [1, "delivery-bar__info"], [1, "delivery-bar__name"], [1, "delivery-bar__phone"], ["aria-hidden", "true", 1, "delivery-bar__sep"], [1, "delivery-bar__address"], ["class", "delivery-bar__default", 4, "ngIf"], [1, "delivery-bar__change", 3, "click"], [1, "delivery-bar__default"], [1, "delivery-bar__empty"], [1, "delivery-bar__add", 3, "click"], [1, "shop-group"], [1, "shop-group__header"], [1, "shop-group__checkbox-label"], ["type", "checkbox", 1, "shop-group__checkbox", 3, "change", "checked", "indeterminate"], [1, "custom-checkbox"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "12", "height", "12", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "18", "height", "18", "aria-hidden", "true", 1, "shop-group__icon"], ["d", "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"], ["fill-rule", "evenodd", "d", "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z", "clip-rule", "evenodd"], [1, "shop-group__name"], ["class", "cart-item", 3, "cart-item--unselected", 4, "ngFor", "ngForOf"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", "width", "12", "height", "12"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z", "clip-rule", "evenodd"], [1, "cart-item"], [1, "cart-item__checkbox-label"], ["type", "checkbox", 1, "cart-item__checkbox", 3, "change", "checked"], [1, "cart-item__image-link", 3, "routerLink"], [1, "cart-item__image", 3, "src", "alt"], [1, "cart-item__details"], [1, "cart-item__name"], ["class", "cart-item__variant", 4, "ngIf"], [1, "cart-item__price"], [1, "cart-item__actions"], [3, "ngModelChange", "ngModel", "name", "min", "max"], [1, "cart-item__subtotal"], ["aria-label", "Remove item", 1, "cart-item__remove", 3, "click"], [1, "cart-item__variant"], [1, "discount-section__success"], [1, "discount-section__error"], [1, "payment-chip"], ["type", "radio", "name", "payment", 3, "ngModelChange", "value", "ngModel"], [1, "payment-chip__badge"], [1, "payment-chip__name"], [1, "cart-summary__row", "cart-summary__row--discount"], [1, "cart-summary__discount-badge"], [1, "cart-summary__discount-value"], ["title", "Remove discount", 1, "cart-summary__remove-discount", 3, "click"], [3, "addressesChange", "selectedAddressIdChange", "closed", "addresses", "selectedAddressId"]], template: function CartPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h1", 2);
      \u0275\u0275text(2, "Shopping Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, CartPageComponent_div_3_Template, 12, 0, "div", 3)(4, CartPageComponent_div_4_Template, 64, 19, "div", 4)(5, CartPageComponent_app_address_dialog_5_Template, 1, 2, "app-address-dialog", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.cartItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.cartItems.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAddressDialogOpen);
    }
  }, dependencies: [NgForOf, NgIf, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, RouterLink, QuantityInputComponent, AddressDialogComponent, DecimalPipe], styles: ['\n\n.cart-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  padding-top: 32px;\n  padding-bottom: 64px;\n}\n@media (min-width: 768px) {\n  .cart-page[_ngcontent-%COMP%] {\n    padding: 0 24px;\n  }\n}\n.cart-page__title[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n.cart-page__empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 16px;\n  padding: 64px 0;\n  text-align: center;\n  color: #6b7280;\n}\n.cart-page__empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 16px;\n  color: #9ca3af;\n}\n.cart-page__continue-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  margin-top: 16px;\n  text-decoration: none;\n}\n.cart-page__continue-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cart-page__continue-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.cart-page__continue-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.cart-page__content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 32px;\n  align-items: start;\n}\n@media (min-width: 1024px) {\n  .cart-page__content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 400px;\n  }\n}\n.cart-page__items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.cart-page__sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.delivery-bar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  padding: 16px 24px;\n  margin-bottom: 24px;\n}\n.delivery-bar__heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: #2563eb;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.delivery-bar__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.delivery-bar__info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n  min-width: 0;\n}\n.delivery-bar__name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n  white-space: nowrap;\n}\n.delivery-bar__phone[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.delivery-bar__sep[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.delivery-bar__address[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.delivery-bar__default[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #2563eb;\n  color: #2563eb;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 1px 7px;\n  border-radius: 2px;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.delivery-bar__change[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  color: #2563eb;\n  background: none;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 4px 16px;\n  border: 1px solid #2563eb;\n  border-radius: 6px;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: all 150ms ease;\n}\n.delivery-bar__change[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.delivery-bar__change[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n}\n.delivery-bar__empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  font-size: 0.875rem;\n  color: #9ca3af;\n}\n.delivery-bar__add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  font-size: 0.875rem;\n  padding: 4px 16px;\n}\n.delivery-bar__add[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.delivery-bar__add[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.delivery-bar__add[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.custom-checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 6px;\n  background: #ffffff;\n  transition: all 150ms ease;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.custom-checkbox--checked[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.custom-checkbox--checked[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.custom-checkbox--indeterminate[_ngcontent-%COMP%] {\n  background: #2563eb;\n  border-color: #2563eb;\n}\n.custom-checkbox--indeterminate[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.shop-group[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 250ms ease, box-shadow 250ms ease;\n  overflow: hidden;\n}\n.shop-group__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #e5f0ff);\n  border-bottom: 2px solid #2563eb;\n}\n.shop-group__checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.shop-group__checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.shop-group__icon[_ngcontent-%COMP%] {\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.shop-group__name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 24px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.cart-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cart-item--unselected[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.cart-item__checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  flex-shrink: 0;\n}\n.cart-item__checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.cart-item__image-link[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.cart-item__image[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n@media (min-width: 768px) {\n  .cart-item__image[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n}\n.cart-item__details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.cart-item__name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media (min-width: 768px) {\n  .cart-item__name[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n.cart-item__variant[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 4px;\n}\n.cart-item__price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #2563eb;\n}\n.cart-item__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.cart-item__subtotal[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1f2937;\n  min-width: 70px;\n  text-align: right;\n}\n.cart-item__remove[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: none;\n  color: #9ca3af;\n  font-size: 1.5rem;\n  padding: 4px;\n  line-height: 1;\n  transition: color 150ms ease, transform 150ms ease;\n}\n.cart-item__remove[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cart-item__remove[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  transform: scale(1.2);\n}\n.cart-summary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 250ms ease, box-shadow 250ms ease;\n  padding: 24px;\n}\n.cart-summary__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.cart-summary__row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  font-size: 1rem;\n  color: #6b7280;\n}\n.cart-summary__row--discount[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.cart-summary__discount-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #ecfdf5;\n  color: #10b981;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 2px 7px;\n  border-radius: 9999px;\n  margin-left: 4px;\n}\n.cart-summary__discount-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #10b981;\n  font-weight: 600;\n}\n.cart-summary__remove-discount[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 1rem;\n  line-height: 1;\n  padding: 0 2px;\n  transition: color 150ms ease;\n}\n.cart-summary__remove-discount[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.cart-summary__free[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-weight: 500;\n}\n.cart-summary__total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 0;\n  margin-top: 8px;\n  border-top: 2px solid #1f2937;\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.cart-summary__checkout-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  width: 100%;\n  padding: 16px;\n  font-size: 1rem;\n  font-weight: 600;\n  margin-top: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.cart-summary__checkout-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cart-summary__checkout-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.cart-summary__checkout-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.sidebar-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 250ms ease, box-shadow 250ms ease;\n  padding: 24px;\n}\n.sidebar-card__heading[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 8px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e5e7eb;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.sidebar-card__heading[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #2563eb;\n  flex-shrink: 0;\n}\n.discount-section__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.discount-section__input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.875rem;\n  color: #1f2937;\n  outline: none;\n  min-width: 0;\n  transition: border-color 150ms ease;\n}\n.discount-section__input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n}\n.discount-section__input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.discount-section__apply[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #1f2937;\n  color: #ffffff;\n  font-size: 0.875rem;\n  font-weight: 600;\n  padding: 8px 16px;\n  border-radius: 6px;\n  white-space: nowrap;\n  transition: background 150ms ease;\n}\n.discount-section__apply[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.discount-section__apply[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.discount-section__success[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #10b981;\n  font-weight: 500;\n  margin-top: 4px;\n}\n.discount-section__error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #ef4444;\n  margin-top: 4px;\n}\n.discount-section__hints[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 0.75rem;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.discount-section__hint-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: transparent;\n  color: #2563eb;\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 9999px;\n  border: 1px solid #2563eb;\n  transition: all 150ms ease;\n}\n.discount-section__hint-tag[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.discount-section__hint-tag[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #ffffff;\n}\n.payment-section__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px;\n}\n.payment-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 150ms ease;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.payment-chip[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n.payment-chip[_ngcontent-%COMP%]:hover {\n  border-color: #60a5fa;\n  background: #eff6ff;\n}\n.payment-chip--selected[_ngcontent-%COMP%] {\n  border-color: #2563eb;\n  background: #eff6ff;\n  box-shadow: 0 0 0 1px #2563eb;\n}\n.payment-chip__badge[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 24px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n}\n.payment-chip__name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #1f2937;\n  white-space: nowrap;\n}\n@media (max-width: 576px) {\n  .cart-page[_ngcontent-%COMP%] {\n    padding-top: 24px;\n    padding-bottom: 32px;\n  }\n  .cart-page__title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 16px;\n  }\n  .delivery-bar[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n  }\n  .delivery-bar__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .delivery-bar__info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n  .delivery-bar__sep[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .delivery-bar__change[_ngcontent-%COMP%] {\n    align-self: stretch;\n    text-align: center;\n  }\n  .delivery-bar__empty[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .shop-group__header[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n  }\n  .shop-group__name[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .cart-item[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 8px 16px;\n  }\n  .cart-item__image[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n  .cart-item__name[_ngcontent-%COMP%] {\n    white-space: normal;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .cart-item__actions[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n    justify-content: flex-end;\n    padding-top: 8px;\n    border-top: 1px solid #e5e7eb;\n  }\n  .cart-item__subtotal[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .sidebar-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .cart-summary[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .cart-summary__checkout-btn[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .payment-section__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 400px) {\n  .cart-page[_ngcontent-%COMP%] {\n    padding: 16px 8px;\n    padding-bottom: 24px;\n    overflow-x: hidden;\n  }\n  .cart-page__title[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .cart-page__content[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n  .cart-page__items[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .delivery-bar[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 8px;\n    margin-bottom: 16px;\n  }\n  .delivery-bar__heading[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .delivery-bar__name[_ngcontent-%COMP%] {\n    white-space: normal;\n    word-break: break-word;\n  }\n  .delivery-bar__phone[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .shop-group[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n  .shop-group__header[_ngcontent-%COMP%] {\n    padding: 8px;\n    gap: 4px;\n  }\n  .shop-group__name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .shop-group__icon[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n  .custom-checkbox[_ngcontent-%COMP%] {\n    width: 18px;\n    height: 18px;\n  }\n  .cart-item[_ngcontent-%COMP%] {\n    padding: 8px;\n    gap: 8px;\n  }\n  .cart-item__image[_ngcontent-%COMP%] {\n    width: 64px;\n    height: 64px;\n  }\n  .cart-item__name[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .cart-item__variant[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .cart-item__price[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .cart-item__actions[_ngcontent-%COMP%] {\n    gap: 8px;\n    padding-top: 4px;\n  }\n  .cart-item__subtotal[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .cart-item__remove[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    padding: 2px;\n  }\n  .sidebar-card[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 8px;\n  }\n  .discount-section__row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .discount-section__apply[_ngcontent-%COMP%] {\n    align-self: stretch;\n  }\n  .discount-section__input[_ngcontent-%COMP%] {\n    padding: 4px 8px;\n  }\n  .payment-chip[_ngcontent-%COMP%] {\n    padding: 4px;\n  }\n  .payment-chip__badge[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 20px;\n    font-size: 8px;\n  }\n  .payment-chip__name[_ngcontent-%COMP%] {\n    font-size: 0.6875rem;\n  }\n  .cart-summary[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 8px;\n  }\n  .cart-summary__title[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    margin-bottom: 16px;\n    padding-bottom: 8px;\n  }\n  .cart-summary__row[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .cart-summary__total[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .cart-summary__checkout-btn[_ngcontent-%COMP%] {\n    padding: 8px;\n    font-size: 0.75rem;\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  .cart-summary__checkout-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 14px;\n    height: 14px;\n  }\n}\n/*# sourceMappingURL=cart-page.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartPageComponent, { className: "CartPageComponent" });
})();

// src/app/features/cart/order-confirmation/order-confirmation.component.ts
var OrderConfirmationComponent = class _OrderConfirmationComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  continueShopping() {
    this.router.navigate(["/products"]);
  }
  static \u0275fac = function OrderConfirmationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderConfirmationComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderConfirmationComponent, selectors: [["app-order-confirmation"]], decls: 14, vars: 0, consts: [[1, "confirmation", "animate-scale-in"], [1, "confirmation__card"], [1, "confirmation__icon"], ["width", "80", "height", "80", "viewBox", "0 0 80 80", "fill", "none"], ["cx", "40", "cy", "40", "r", "38", "stroke", "#10b981", "stroke-width", "3", "fill", "#ecfdf5"], ["d", "M24 40 L35 51 L56 30", "stroke", "#10b981", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round", "fill", "none", 1, "confirmation__checkmark"], [1, "confirmation__title"], [1, "confirmation__message"], [1, "confirmation__sub-message"], [1, "confirmation__btn", 3, "click"]], template: function OrderConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "circle", 4)(5, "path", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, "Order Confirmed!");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, " Thank you for your purchase. Your order has been placed successfully and is being processed. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 8);
      \u0275\u0275text(11, " A confirmation email will be sent to your inbox shortly. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function OrderConfirmationComponent_Template_button_click_12_listener() {
        return ctx.continueShopping();
      });
      \u0275\u0275text(13, " Continue Shopping ");
      \u0275\u0275elementEnd()()();
    }
  }, styles: ['\n\n.confirmation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 70px - 64px);\n  padding: 32px;\n}\n.confirmation__card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 250ms ease, box-shadow 250ms ease;\n  text-align: center;\n  padding: 48px 32px;\n  max-width: 500px;\n  width: 100%;\n}\n.confirmation__icon[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  animation: scaleIn 0.5s ease both;\n}\n.confirmation__checkmark[_ngcontent-%COMP%] {\n  stroke-dasharray: 60;\n  stroke-dashoffset: 60;\n  animation: _ngcontent-%COMP%_checkmark 0.6s ease 0.3s forwards;\n}\n.confirmation__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #10b981;\n  margin-bottom: 16px;\n}\n.confirmation__message[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1f2937;\n  line-height: 1.6;\n  margin-bottom: 8px;\n}\n.confirmation__sub-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n  margin-bottom: 32px;\n}\n.confirmation__btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  padding: 16px 48px;\n  font-size: 1rem;\n}\n.confirmation__btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.confirmation__btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.confirmation__btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n@keyframes _ngcontent-%COMP%_checkmark {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=order-confirmation.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderConfirmationComponent, { className: "OrderConfirmationComponent" });
})();

// src/app/features/cart/cart-routing.module.ts
var routes = [
  { path: "", component: CartPageComponent },
  { path: "confirmation", component: OrderConfirmationComponent }
];
var CartRoutingModule = class _CartRoutingModule {
  static \u0275fac = function CartRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CartRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};

// src/app/features/cart/cart.module.ts
var CartModule = class _CartModule {
  static \u0275fac = function CartModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _CartModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    SharedModule,
    CartRoutingModule
  ] });
};
export {
  CartModule
};
//# sourceMappingURL=chunk-W54RNSKW.js.map
