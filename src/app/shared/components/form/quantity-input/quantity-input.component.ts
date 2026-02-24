import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrl: './quantity-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuantityInputComponent),
      multi: true
    }
  ]
})
export class QuantityInputComponent implements ControlValueAccessor {
  @Input() min = 1;
  @Input() max = 99;

  value = 1;
  disabled = false;

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number): void {
    this.value = value ?? this.min;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  decrease(): void {
    if (this.disabled || this.value <= this.min) return;
    this.setValue(this.value - 1);
  }

  increase(): void {
    if (this.disabled || this.value >= this.max) return;
    this.setValue(this.value + 1);
  }

  onKeyDown(event: KeyboardEvent): void {
    if (['e', 'E', '-', '+'].includes(event.key)) {
      event.preventDefault();
    }
  }

  onInput(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    const parsed = parseInt(raw, 10);
    if (!isNaN(parsed)) {
      this.setValue(this.clamp(parsed));
    }
  }

  onBlur(event: Event): void {
    const raw = (event.target as HTMLInputElement).value;
    const parsed = parseInt(raw, 10);
    if (isNaN(parsed) || parsed < this.min) {
      this.setValue(this.min);
      (event.target as HTMLInputElement).value = String(this.value);
    }
    this.onTouched();
  }

  private setValue(val: number): void {
    this.value = val;
    this.onChange(val);
  }

  private clamp(val: number): number {
    return Math.max(this.min, Math.min(this.max, val));
  }

  get isAtMin(): boolean {
    return this.value <= this.min;
  }

  get isAtMax(): boolean {
    return this.value >= this.max;
  }
}

