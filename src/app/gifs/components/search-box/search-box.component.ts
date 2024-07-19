import { Component } from '@angular/core';

@Component({
  selector: 'search-box',
  template: `
  <div class="input-group">
  <div class="form-outline" data-mdb-input-init>
    <input id="search-input" type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button id="search-button" type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>
  `
})

export class searchboxComponent{

}
