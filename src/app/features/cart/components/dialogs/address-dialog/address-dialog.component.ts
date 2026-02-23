import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { AddressDialogMode, AddressEntry, AddressForm } from '../../../models/address.model';
import { NotificationService } from '../../../../../core/services/notification.service';

@Component({
  selector: 'app-address-dialog',
  templateUrl: './address-dialog.component.html',
  styleUrl: './address-dialog.component.scss'
})
export class AddressDialogComponent implements OnInit, OnChanges, OnDestroy {
  @Input() addresses: AddressEntry[] = [];
  @Input() selectedAddressId = '';

  @Output() addressesChange = new EventEmitter<AddressEntry[]>();
  @Output() selectedAddressIdChange = new EventEmitter<string>();
  @Output() closed = new EventEmitter<void>();

  dialogMode: AddressDialogMode = 'list';
  editingAddressId: string | null = null;
  addressForm: AddressForm = this.blankForm();
  formSubmitted = false;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private notificationService: NotificationService
  ) {}

  /** Move host element to <body> so position:fixed covers the full viewport,
   *  regardless of any CSS transform/contain on ancestor cart-page elements. */
  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    const el = this.elementRef.nativeElement;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  ngOnChanges(): void {
    // Reset to list mode whenever dialog is (re)opened
    this.dialogMode = 'list';
    this.editingAddressId = null;
    this.addressForm = this.blankForm();
    this.formSubmitted = false;
  }

  // ── Navigation ─────────────────────────────────────────────────────────────

  openAddMode(): void {
    this.formSubmitted = false;
    this.addressForm = this.blankForm();
    this.editingAddressId = null;
    this.dialogMode = 'add';
  }

  openEditMode(address: AddressEntry, event: Event): void {
    event.preventDefault();
    this.formSubmitted = false;
    this.editingAddressId = address.id;
    this.addressForm = {
      fullName: address.fullName,
      phone: address.phone,
      address: address.address,
      city: address.city,
      isDefault: address.isDefault,
      label: address.label,
    };
    this.dialogMode = 'edit';
  }

  backToList(): void {
    this.formSubmitted = false;
    this.editingAddressId = null;
    this.addressForm = this.blankForm();
    this.dialogMode = 'list';
  }

  close(): void {
    this.closed.emit();
  }

  // ── Selection ──────────────────────────────────────────────────────────────

  confirmSelection(): void {
    this.selectedAddressIdChange.emit(this.selectedAddressId);
    this.closed.emit();
  }

  onRadioChange(id: string): void {
    this.selectedAddressIdChange.emit(id);
  }

  // ── Label ──────────────────────────────────────────────────────────────────

  setLabel(label: 'home' | 'work' | 'other'): void {
    this.addressForm.label = label;
  }

  // ── CRUD ───────────────────────────────────────────────────────────────────

  deleteAddress(id: string, event: Event): void {
    event.preventDefault();
    if (this.addresses.length <= 1) {
      this.notificationService.error('You must keep at least one address.');
      return;
    }
    let updated = this.addresses.filter(a => a.id !== id);
    let newSelectedId = this.selectedAddressId;
    if (newSelectedId === id) {
      const fallback = updated.find(a => a.isDefault) ?? updated[0];
      newSelectedId = fallback.id;
      this.selectedAddressIdChange.emit(newSelectedId);
    }
    if (!updated.some(a => a.isDefault)) {
      updated = [{ ...updated[0], isDefault: true }, ...updated.slice(1)];
    }
    this.addressesChange.emit(updated);
    this.notificationService.info('Address removed.');
  }

  saveAddress(): void {
    this.formSubmitted = true;
    if (!this.addressForm.fullName.trim() ||
        !this.addressForm.address.trim() ||
        !this.addressForm.city.trim()) {
      return;
    }

    let updated = [...this.addresses];

    if (this.addressForm.isDefault) {
      updated = updated.map(a => ({ ...a, isDefault: false }));
    }

    if (this.dialogMode === 'edit' && this.editingAddressId) {
      updated = updated.map(a =>
        a.id === this.editingAddressId
          ? { id: this.editingAddressId, ...this.addressForm }
          : a
      );
      this.notificationService.success('Address updated!');
    } else {
      const newId = `address-${Date.now()}`;
      updated = [...updated, { id: newId, ...this.addressForm }];
      this.selectedAddressIdChange.emit(newId);
      this.notificationService.success('New address added!');
    }

    if (!updated.some(a => a.isDefault)) {
      updated = [{ ...updated[0], isDefault: true }, ...updated.slice(1)];
    }

    this.addressesChange.emit(updated);
    this.backToList();
  }

  private blankForm(): AddressForm {
    return { fullName: '', phone: '', address: '', city: '', isDefault: false, label: 'home' };
  }
}
