import { Routes } from '@angular/router';
import { ShortcutsKeyboardComponent } from './components/shortcuts-keyboard/shortcuts-keyboard.component';
import { CameraComponent } from './components/camera/camera.component';
import { AddObjectToolbarComponent } from './components/add-object-toolbar/add-object-toolbar.component';
import { ShadeSmoothComponent } from './components/shade-smooth/shade-smooth.component';
import { SubdivisionSurfaceModifierComponent } from './components/subdivision-surface-modifier/subdivision-surface-modifier.component';
import { ChangingFormObjectComponent } from './components/changing-form-object/changing-form-object.component';
import { ProportionalEditingComponent } from './components/proportional-editing/proportional-editing.component';
import { DuplicatingObjectComponent } from './components/duplicating-object/duplicating-object.component';
import { XRaysComponent } from './components/x-rays/x-rays.component';
import { SolidifyModifierComponent } from './components/solidify-modifier/solidify-modifier.component';

export const routes: Routes = [
  { path: 'shortcuts-keyboard', component: ShortcutsKeyboardComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'add-object-toolbar', component: AddObjectToolbarComponent },
  { path: 'shade-smooth', component: ShadeSmoothComponent },
  {
    path: 'subdivision-surface-modifier',
    component: SubdivisionSurfaceModifierComponent,
  },
  { path: 'duplicating-object', component: DuplicatingObjectComponent },

  { path: 'changing-form-object', component: ChangingFormObjectComponent },
  { path: 'proportional-editing', component: ProportionalEditingComponent },
  { path: 'x-rays', component: XRaysComponent },
  { path: 'solidify-modifier', component: SolidifyModifierComponent },
];
