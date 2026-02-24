import {
  AuthService,
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  NotificationService,
  RequiredValidator,
  Router,
  RouterLink,
  RouterModule,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GBEM7T6G.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, LoginComponent_div_21_span_1_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const usernameField_r3 = \u0275\u0275reference(20);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", usernameField_r3.errors == null ? null : usernameField_r3.errors["required"]);
  }
}
function LoginComponent_div_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, LoginComponent_div_29_span_1_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r4 = \u0275\u0275reference(28);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r4.errors == null ? null : passwordField_r4.errors["required"]);
  }
}
function LoginComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275element(1, "span", 27);
    \u0275\u0275text(2, " Signing in... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  authService;
  notification;
  router;
  username = "";
  password = "";
  isLoading = false;
  submitted = false;
  constructor(authService, notification, router) {
    this.authService = authService;
    this.notification = notification;
    this.router = router;
  }
  onSubmit(form) {
    this.submitted = true;
    if (form.invalid) {
      this.notification.error("Please fill in all required fields.");
      return;
    }
    this.isLoading = true;
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.notification.success("Login successful! Welcome back.");
        this.router.navigate(["/products"]);
      },
      error: (err) => {
        this.notification.error(err.message || "Login failed. Please try again.");
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 38, vars: 13, consts: [["loginForm", "ngForm"], ["usernameField", "ngModel"], ["passwordField", "ngModel"], [1, "auth-page"], [1, "auth-card"], [1, "auth-card__header"], [1, "auth-card__icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"], ["points", "10 17 15 12 10 7"], ["x1", "15", "y1", "12", "x2", "3", "y2", "12"], [1, "auth-card__subtitle"], ["novalidate", "", 1, "auth-card__form", 3, "ngSubmit"], [1, "form-group"], ["for", "username", 1, "form-label"], [1, "required"], ["type", "text", "id", "username", "name", "username", "required", "", "placeholder", "Enter your username", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-error", 4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "required", "", "placeholder", "Enter your password", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "auth-btn", 3, "disabled"], [4, "ngIf"], ["class", "auth-btn__loading", 4, "ngIf"], [1, "auth-card__footer"], ["routerLink", "/auth/register"], [1, "form-error"], [1, "auth-btn__loading"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 7);
      \u0275\u0275element(5, "path", 8)(6, "polyline", 9)(7, "line", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "h2");
      \u0275\u0275text(9, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 11);
      \u0275\u0275text(11, "Sign in to your account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "form", 12, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
        \u0275\u0275restoreView(_r1);
        const loginForm_r2 = \u0275\u0275reference(13);
        return \u0275\u0275resetView(ctx.onSubmit(loginForm_r2));
      });
      \u0275\u0275elementStart(14, "div", 13)(15, "label", 14);
      \u0275\u0275text(16, " Username ");
      \u0275\u0275elementStart(17, "span", 15);
      \u0275\u0275text(18, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "input", 16, 1);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, LoginComponent_div_21_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "label", 18);
      \u0275\u0275text(24, " Password ");
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "input", 19, 2);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(29, LoginComponent_div_29_Template, 2, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 20);
      \u0275\u0275template(31, LoginComponent_span_31_Template, 2, 0, "span", 21)(32, LoginComponent_span_32_Template, 3, 0, "span", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 23)(34, "p");
      \u0275\u0275text(35, "Don't have an account? ");
      \u0275\u0275elementStart(36, "a", 24);
      \u0275\u0275text(37, "Create one");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const usernameField_r3 = \u0275\u0275reference(20);
      const passwordField_r4 = \u0275\u0275reference(28);
      \u0275\u0275advance(19);
      \u0275\u0275classProp("form-input--error", usernameField_r3.invalid && (usernameField_r3.touched || ctx.submitted));
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", usernameField_r3.invalid && (usernameField_r3.touched || ctx.submitted));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("form-input--error", passwordField_r4.invalid && (passwordField_r4.touched || ctx.submitted));
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", passwordField_r4.invalid && (passwordField_r4.touched || ctx.submitted));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 70px);\n  padding: 24px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 250ms ease, box-shadow 250ms ease;\n  width: 100%;\n  max-width: 440px;\n  padding: 48px;\n}\n.auth-card__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-card__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 16px;\n  background: #eff6ff;\n  border-radius: 9999px;\n}\n.auth-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #2563eb;\n}\n.auth-card__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.auth-card__subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.auth-card__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.auth-card__footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.auth-card__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.auth-card__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 150ms ease;\n}\n.auth-card__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1d4ed8;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1f2937;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #1f2937;\n  background: #ffffff;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.form-input--error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-input--error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.form-input[_ngcontent-%COMP%]:disabled {\n  background: #f3f4f6;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #ef4444;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.auth-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  width: 100%;\n  padding: 12px 24px;\n  font-size: 1rem;\n  margin-top: 8px;\n}\n.auth-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.auth-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.auth-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.auth-btn__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 9999px;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();

// src/app/features/auth/register/register.component.ts
function RegisterComponent_div_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Username is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Username must be at least 3 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, RegisterComponent_div_22_span_1_Template, 2, 0, "span", 25)(2, RegisterComponent_div_22_span_2_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const usernameField_r3 = \u0275\u0275reference(21);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", usernameField_r3.errors == null ? null : usernameField_r3.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", usernameField_r3.errors == null ? null : usernameField_r3.errors["minlength"]);
  }
}
function RegisterComponent_div_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password is required");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Password must be at least 6 characters");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, RegisterComponent_div_30_span_1_Template, 2, 0, "span", 25)(2, RegisterComponent_div_30_span_2_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r4 = \u0275\u0275reference(29);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r4.errors == null ? null : passwordField_r4.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r4.errors == null ? null : passwordField_r4.errors["minlength"]);
  }
}
function RegisterComponent_div_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please confirm your password");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, RegisterComponent_div_38_span_1_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const confirmField_r5 = \u0275\u0275reference(37);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", confirmField_r5.errors == null ? null : confirmField_r5.errors["required"]);
  }
}
function RegisterComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span");
    \u0275\u0275text(2, "Passwords do not match");
    \u0275\u0275elementEnd()();
  }
}
function RegisterComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Account");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275element(1, "span", 31);
    \u0275\u0275text(2, " Creating account... ");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  authService;
  notification;
  router;
  username = "";
  password = "";
  confirmPassword = "";
  isLoading = false;
  submitted = false;
  constructor(authService, notification, router) {
    this.authService = authService;
    this.notification = notification;
    this.router = router;
  }
  get passwordMismatch() {
    return this.password !== this.confirmPassword && this.confirmPassword.length > 0;
  }
  onSubmit(form) {
    this.submitted = true;
    if (form.invalid) {
      this.notification.error("Please fill in all required fields.");
      return;
    }
    if (this.passwordMismatch) {
      this.notification.error("Passwords do not match.");
      return;
    }
    this.isLoading = true;
    this.authService.register(this.username, this.password).subscribe({
      next: () => {
        this.notification.success("Registration successful! Welcome aboard.");
        this.router.navigate(["/products"]);
      },
      error: (err) => {
        this.notification.error(err.message || "Registration failed. Please try again.");
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 48, vars: 19, consts: [["registerForm", "ngForm"], ["usernameField", "ngModel"], ["passwordField", "ngModel"], ["confirmField", "ngModel"], [1, "auth-page"], [1, "auth-card"], [1, "auth-card__header"], [1, "auth-card__icon"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "8.5", "cy", "7", "r", "4"], ["x1", "20", "y1", "8", "x2", "20", "y2", "14"], ["x1", "23", "y1", "11", "x2", "17", "y2", "11"], [1, "auth-card__subtitle"], ["novalidate", "", 1, "auth-card__form", 3, "ngSubmit"], [1, "form-group"], ["for", "username", 1, "form-label"], [1, "required"], ["type", "text", "id", "username", "name", "username", "required", "", "minlength", "3", "placeholder", "Choose a username", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "form-error", 4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "required", "", "minlength", "6", "placeholder", "Create a password", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "required", "", "placeholder", "Confirm your password", 1, "form-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "submit", 1, "auth-btn", 3, "disabled"], [4, "ngIf"], ["class", "auth-btn__loading", 4, "ngIf"], [1, "auth-card__footer"], ["routerLink", "/auth/login"], [1, "form-error"], [1, "auth-btn__loading"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 8);
      \u0275\u0275element(5, "path", 9)(6, "circle", 10)(7, "line", 11)(8, "line", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "h2");
      \u0275\u0275text(10, "Create Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 13);
      \u0275\u0275text(12, "Join us and start shopping");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "form", 14, 0);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_13_listener() {
        \u0275\u0275restoreView(_r1);
        const registerForm_r2 = \u0275\u0275reference(14);
        return \u0275\u0275resetView(ctx.onSubmit(registerForm_r2));
      });
      \u0275\u0275elementStart(15, "div", 15)(16, "label", 16);
      \u0275\u0275text(17, " Username ");
      \u0275\u0275elementStart(18, "span", 17);
      \u0275\u0275text(19, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "input", 18, 1);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, RegisterComponent_div_22_Template, 3, 2, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15)(24, "label", 20);
      \u0275\u0275text(25, " Password ");
      \u0275\u0275elementStart(26, "span", 17);
      \u0275\u0275text(27, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "input", 21, 2);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, RegisterComponent_div_30_Template, 3, 2, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 15)(32, "label", 22);
      \u0275\u0275text(33, " Confirm Password ");
      \u0275\u0275elementStart(34, "span", 17);
      \u0275\u0275text(35, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "input", 23, 3);
      \u0275\u0275twoWayListener("ngModelChange", function RegisterComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.confirmPassword, $event) || (ctx.confirmPassword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, RegisterComponent_div_38_Template, 2, 1, "div", 19)(39, RegisterComponent_div_39_Template, 3, 0, "div", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 24);
      \u0275\u0275template(41, RegisterComponent_span_41_Template, 2, 0, "span", 25)(42, RegisterComponent_span_42_Template, 3, 0, "span", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 27)(44, "p");
      \u0275\u0275text(45, "Already have an account? ");
      \u0275\u0275elementStart(46, "a", 28);
      \u0275\u0275text(47, "Sign in");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const usernameField_r3 = \u0275\u0275reference(21);
      const passwordField_r4 = \u0275\u0275reference(29);
      const confirmField_r5 = \u0275\u0275reference(37);
      \u0275\u0275advance(20);
      \u0275\u0275classProp("form-input--error", usernameField_r3.invalid && (usernameField_r3.touched || ctx.submitted));
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", usernameField_r3.invalid && (usernameField_r3.touched || ctx.submitted));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("form-input--error", passwordField_r4.invalid && (passwordField_r4.touched || ctx.submitted));
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", passwordField_r4.invalid && (passwordField_r4.touched || ctx.submitted));
      \u0275\u0275advance(6);
      \u0275\u0275classProp("form-input--error", confirmField_r5.invalid && (confirmField_r5.touched || ctx.submitted) || ctx.passwordMismatch && (confirmField_r5.touched || ctx.submitted));
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmPassword);
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", confirmField_r5.invalid && (confirmField_r5.touched || ctx.submitted));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.passwordMismatch && confirmField_r5.valid && (confirmField_r5.touched || ctx.submitted));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
    }
  }, dependencies: [NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 70px);\n  padding: 24px;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: transform 250ms ease, box-shadow 250ms ease;\n  width: 100%;\n  max-width: 440px;\n  padding: 48px;\n}\n.auth-card__header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.auth-card__icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  margin: 0 auto 16px;\n  background: #eff6ff;\n  border-radius: 9999px;\n}\n.auth-card__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #2563eb;\n}\n.auth-card__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.auth-card__subtitle[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.auth-card__form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.auth-card__footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.auth-card__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n}\n.auth-card__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n  text-decoration: none;\n  transition: color 150ms ease;\n}\n.auth-card__footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1d4ed8;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1f2937;\n}\n.form-label[_ngcontent-%COMP%]   .required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 1rem;\n  color: #1f2937;\n  background: #ffffff;\n  transition: border-color 150ms ease, box-shadow 150ms ease;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #2563eb;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n}\n.form-input--error[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-input--error[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);\n}\n.form-input[_ngcontent-%COMP%]:disabled {\n  background: #f3f4f6;\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.form-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #ef4444;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n.auth-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 24px;\n  border: none;\n  border-radius: 8px;\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    sans-serif;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 150ms ease;\n  text-decoration: none;\n  line-height: 1.5;\n  background: #2563eb;\n  color: white;\n  width: 100%;\n  padding: 12px 24px;\n  font-size: 1rem;\n  margin-top: 8px;\n}\n.auth-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.auth-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1d4ed8;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n}\n.auth-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.auth-btn__loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2.5px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 9999px;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent" });
})();

// src/app/features/auth/auth-routing.module.ts
var routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};

// src/app/features/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ] });
};
export {
  AuthModule
};
//# sourceMappingURL=chunk-E2LLPT4X.js.map
