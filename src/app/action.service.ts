import { Injectable, signal, WritableSignal } from '@angular/core';
import { FormModel } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

Movies:WritableSignal<FormModel | null> = signal(null)
}


