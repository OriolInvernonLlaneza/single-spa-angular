import * as core from '@angular/core';

export function enableProdMode(): void {
  try {
    core.enableProdMode();
  } catch {
    // ..
  }
}
