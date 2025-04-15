import { Injectable, signal, WritableSignal } from '@angular/core';
import { FormModel } from './form.model';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

movies:WritableSignal<FormModel[]> = signal([])
}


