// Moved from: core/services/ui/confirm-dialog.service.ts

export interface ConfirmDialogConfig {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  /** When true the confirm button renders in red (destructive action) */
  danger?: boolean;
}
