import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ConfirmDialogConfig } from '../../models/confirm-dialog.model';

export type { ConfirmDialogConfig };

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private _config$ = new BehaviorSubject<ConfirmDialogConfig | null>(null);
  private _result$ = new Subject<boolean>();

  /** The active dialog config (null = dialog is closed) */
  readonly config$ = this._config$.asObservable();

  /**
   * Open the confirm dialog.
   * @returns Observable that emits `true` if the user confirms, `false` if they cancel.
   */
  confirm(config: ConfirmDialogConfig): Observable<boolean> {
    this._config$.next(config);
    return new Observable<boolean>(observer => {
      const sub = this._result$.subscribe(result => {
        observer.next(result);
        observer.complete();
        sub.unsubscribe();
      });
    });
  }

  /** Called internally by the component when the user picks an option */
  resolve(confirmed: boolean): void {
    this._config$.next(null);
    this._result$.next(confirmed);
  }
}
