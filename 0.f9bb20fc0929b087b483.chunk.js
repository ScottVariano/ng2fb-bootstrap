webpackJsonp([0,9],{1100:function(e,t,n){"use strict";var r=n(0),o=n(293),a=n(1110),i=n(1109),c=n(1128),d=n(1130),s=n(1111),l=n(1127);n.d(t,"AdminModule",function(){return p});var u=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(){}return e=u([n.i(r.NgModule)({imports:[l.a,o.a,c.a,d.a],declarations:[a.a,i.a],providers:[s.a]}),f("design:paramtypes",[])],e)}()},1109:function(e,t,n){"use strict";var r=n(0),o=n(127);n.n(o);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.af=e}return e.prototype.ngOnInit=function(){this.categories=this.af.database.list("/categories")},e=a([n.i(r.Component)({selector:"app-admin-home",template:n(1161),styles:[n(1149)]}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.AngularFire&&o.AngularFire)&&t||Object])],e);var t}()},1110:function(e,t,n){"use strict";var r=n(0),o=n(1111);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.adminService=e}return e=a([n.i(r.Component)({selector:"appc-admin",styles:[n(1150)],template:n(1162)}),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},1111:function(e,t,n){"use strict";var r=n(0),o=n(504);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.dataService=e,this.adminApiUrl="api/admin/doadminoperation/"}return e.prototype.do=function(){return this.dataService.get(this.adminApiUrl)},e=a([n.i(r.Injectable)(),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},1112:function(e,t,n){"use strict";var r=n(0),o=n(127),a=(n.n(o),n(503));n.d(t,"a",function(){return d});var i=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.af=e,this.modalService=t}return e.prototype.ngOnInit=function(){this.categories=this.af.database.list("/categories")},e.prototype.delete=function(e){this.categories.remove(e).catch(function(e){console.log(e.message)})},e.prototype.save=function(e){e.dateAdded=firebase.database.ServerValue.TIMESTAMP,e.$key?this.categories.update(e.$key,{name:e.name,description:e.description}):this.categories.push(e)},e.prototype.open=function(e,t){var n=this;this.currentCategory=t?Object.assign({},t):{name:"",description:""},this.modalService.open(e).result.then(function(e){n.save(e),console.log("Closed with: "+e)},function(e){console.log("Dismissed "+n.getDismissReason(e))})},e.prototype.getDismissReason=function(e){return e===a.b.ESC?"by pressing ESC":e===a.b.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e},e=i([n.i(r.Component)({selector:"appc-category",template:n(1163),styles:[n(1151)]}),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.AngularFire&&o.AngularFire)&&t||Object,"function"==typeof(d="undefined"!=typeof a.c&&a.c)&&d||Object])],e);var t,d}()},1113:function(e,t,n){"use strict";var r=n(0),o=n(127),a=(n.n(o),n(503));n.d(t,"a",function(){return d});var i=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t){this.af=e,this.modalService=t,this.selectedCategoryId=""}return e.prototype.ngOnInit=function(){this.categories=this.af.database.list("/categories")},e.prototype.delete=function(e){this.products.remove(e)},e.prototype.save=function(e){e.dateAdded=firebase.database.ServerValue.TIMESTAMP,e.$key?this.products.update(e.$key,{name:e.name,description:e.description,quantity:e.quantity,price:e.price}):this.products.push(e)},e.prototype.open=function(e,t){var n=this;this.currentProduct=t?Object.assign({},t):{name:"",description:"",price:"",quantity:"",dateAdded:""},this.modalService.open(e).result.then(function(e){n.save(e),console.log("Closed with: "+e)},function(e){console.log("Dismissed "+n.getDismissReason(e))})},e.prototype.onChange=function(){this.products=this.af.database.list("/products/"+this.selectedCategoryId)},e.prototype.getDismissReason=function(e){return e===a.b.ESC?"by pressing ESC":e===a.b.BACKDROP_CLICK?"by clicking on a backdrop":"with: "+e},e=i([n.i(r.Component)({selector:"appc-product",template:n(1164),styles:[n(1152)]}),c("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.AngularFire&&o.AngularFire)&&t||Object,"function"==typeof(d="undefined"!=typeof a.c&&a.c)&&d||Object])],e);var t,d}()},1127:function(e,t,n){"use strict";var r=n(97),o=n(1110),a=n(1109),i=n(1112),c=n(1113);n.d(t,"a",function(){return s});var d=[{path:"",component:o.a,children:[{path:"home",component:a.a},{path:"category",component:i.a},{path:"product",component:c.a}]}],s=r.a.forChild(d)},1128:function(e,t,n){"use strict";var r=n(0),o=n(293),a=n(1112),i=n(1129);n.d(t,"a",function(){return s});var c=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e=c([n.i(r.NgModule)({imports:[o.a],exports:[a.a],declarations:[a.a],providers:[i.a]}),d("design:paramtypes",[])],e)}()},1129:function(e,t,n){"use strict";var r=n(0);n.d(t,"a",function(){return i});var o=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(){function e(){}return e=o([n.i(r.Injectable)(),a("design:paramtypes",[])],e)}()},1130:function(e,t,n){"use strict";var r=n(0),o=n(293),a=n(1113),i=n(1131);n.d(t,"a",function(){return s});var c=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(){}return e=c([n.i(r.NgModule)({imports:[o.a],exports:[a.a],declarations:[a.a],providers:[i.a]}),d("design:paramtypes",[])],e)}()},1131:function(e,t,n){"use strict";var r=n(0),o=n(504);n.d(t,"a",function(){return c});var a=this&&this.__decorate||function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.dataService=e,this.adminApiUrl="api/admin/product/"}return e=a([n.i(r.Injectable)(),i("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.a&&o.a)&&t||Object])],e);var t}()},1149:function(e,t){e.exports=""},1150:function(e,t){e.exports="a.active {\n  font-weight: bold; }\n"},1151:function(e,t){e.exports=""},1152:function(e,t){e.exports=""},1161:function(e,t){e.exports='<p>Admin home</p>\r\n\r\n<div class="row">\r\n    <a routerLink="../category">\r\n        <div class="col-md-6 card card-inverse card-info text-xs-center">\r\n            <div class="card-block">\r\n                <blockquote class="card-blockquote">\r\n                    <p>{{(categories | async)?.length}}</p>\r\n                    <footer>Total categories</footer>\r\n                </blockquote>\r\n            </div>\r\n        </div>\r\n    </a>\r\n</div>'},1162:function(e,t){e.exports='<ol class="breadcrumb">\r\n    <li class="breadcrumb-item">\r\n        <a routerLinkActive="active"  routerLink="home">Admin Home</a>\r\n    </li>\r\n    <li class="breadcrumb-item">\r\n        <a routerLinkActive="active" routerLink="category">Category</a>\r\n    </li>\r\n    <li class="breadcrumb-item">\r\n        <a routerLinkActive="active" routerLink="product">Product</a>\r\n    </li>\r\n</ol>\r\n\r\n<router-outlet></router-outlet>'},1163:function(e,t){e.exports='<table class="table">\r\n  <thead class="thead-default">\r\n    <tr>\r\n      <th>Id</th>\r\n      <th>Category name</th>\r\n      <th>Date Added</th>\r\n      <th>Description</th>\r\n      <th>\r\n        <button class="btn btn-success" (click)="open(template, null)">New <i class="fa fa-plus"></i> </button>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor="let category of categories | async">\r\n      <th scope="row"> {{category.$key}}</th>\r\n      <td>{{category.name}}</td>\r\n      <td>{{category.dateAdded | date: \'dd/MM/yyyy hh:mm a\'}}</td>\r\n      <td>{{category.description}}</td>\r\n      <td>\r\n        <div class="btn-group" role="group" aria-label="Categories editing buttons">\r\n          <button type="button" class="btn btn-sm btn-warning" (click)="open(template, category)">\r\n              <i class="fa fa-pencil"></i>\r\n          </button>\r\n          <button type="button" class="btn btn-sm btn-danger" (click)="delete(category)">\r\n              <i class="fa fa-trash-o"></i>\r\n          </button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n\r\n<!--Modal template-->\r\n<template #template let-c="close" let-d="dismiss">\r\n  <div class="modal-header">\r\n    <button type="button" class="close" aria-label="Close" (click)="d(\'Cross click\')">\r\n      <span aria-hidden="true">&times;</span>\r\n    </button>\r\n    <h4 class="modal-title">Upsert category</h4>\r\n  </div>\r\n  <div class="modal-body">\r\n\r\n    <form #hf="ngForm" novalidate role="form">\r\n      <div class="form-group">\r\n        <label>Name</label>\r\n        <input type="text" [class.error]="!name.valid" class="form-control" placeholder="Name" [(ngModel)]="currentCategory.name"\r\n          name="name" ngControl="name" required #name="ngModel" />\r\n        <div *ngIf="!name.valid && name.touched" class="form-control-feedback">\r\n          Name is required\r\n        </div>\r\n      </div>\r\n      <div class="form-group">\r\n        <label>Description</label>\r\n        <textarea [class.error]="!description.valid" class="form-control" placeholder="description" [(ngModel)]="currentCategory.description"\r\n          name="description" ngControl="description" required #description="ngModel"></textarea>\r\n        <label *ngIf="!description.valid && description.touched" class="form-control-feedback">\r\n            Description is required\r\n         </label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class="modal-footer">\r\n    <button type="submit" class="btn btn-secondary" [disabled]="!hf.form.valid" (click)="c(currentCategory)">Upsert</button>\r\n    <button type="button" class="btn btn-warning" (click)="d(\'Close click\')">Close</button>\r\n  </div>\r\n</template>\r\n\r\n<template ngbModalContainer></template>'},1164:function(e,t){e.exports='<div class="row col-md-6" *ngIf="categories">\r\n  <div class="form-group">\r\n    <label for="categoriesSelect">Categories <span *ngIf="selectedCategory">({{selectedCategoryId}})</span></label>\r\n    <select class="form-control" id="categoriesSelect" name="category" [(ngModel)]="selectedCategoryId" required (ngModelChange)="onChange(selectedCategoryId)">\r\n      <option selected="true" value="0">Please select...</option>\r\n      <option *ngFor="let category of categories | async" [value]="category.$key">{{category.name}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<div class="row" *ngIf="products">\r\n  <table class="table table-striped">\r\n    <thead>\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Price</th>\r\n        <th>Quantity</th>\r\n        <th>Date Added</th>\r\n        <th>\r\n          <button class="btn btn-success" (click)="open(template, null)">New <i class="fa fa-plus"></i> </button>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor="let product of products | async">\r\n        <td>{{product.$key}}</td>\r\n        <td>{{product.name}} <i ngbTooltip="{{product.description}}" class="fa fa-info-circle hover"></i> </td>\r\n        <td>{{product.price}}</td>\r\n        <td>{{product.quantity}}</td>\r\n        <td>{{product.dateAdded | date: \'dd/MM/yyyy\'}}</td>\r\n        <td>\r\n          <div class="btn-group" role="group" aria-label="Categories editing buttons">\r\n            <button type="button" class="btn btn-sm btn-warning" (click)="open(template, product)">\r\n              <i class="fa fa-pencil"></i>\r\n          </button>\r\n            <button type="button" class="btn btn-sm btn-danger" (click)="delete(product)">\r\n              <i class="fa fa-trash-o"></i>\r\n          </button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n\r\n<!--Modal template-->\r\n<template #template let-c="close" let-d="dismiss">\r\n  <div class="modal-header">\r\n    <button type="button" class="close" aria-label="Close" (click)="d(\'Cross click\')">\r\n      <span aria-hidden="true">&times;</span>\r\n    </button>\r\n    <h4 class="modal-title">Upsert product</h4>\r\n  </div>\r\n  <div class="modal-body">\r\n\r\n    <form #hf="ngForm" novalidate role="form">\r\n      <div class="form-group">\r\n        <label>Name</label>\r\n        <input type="text" [class.error]="!name.valid" class="form-control" placeholder="Name" [(ngModel)]="currentProduct.name"\r\n          name="name" ngControl="name" required #name="ngModel" />\r\n        <div *ngIf="!name.valid && name.touched" class="form-control-feedback">\r\n          Name is required\r\n        </div>\r\n      </div>\r\n      <div class="form-group">\r\n        <label>Price</label>\r\n        <input type="text" [class.error]="!price.valid" class="form-control" placeholder="Price" [(ngModel)]="currentProduct.price"\r\n          name="price" ngControl="price" required #price="ngModel" />\r\n        <label *ngIf="!price.valid && price.touched" class="form-control-feedback">\r\n            Price is required\r\n         </label>\r\n      </div>\r\n      <div class="form-group">\r\n        <label>Quantity</label>\r\n        <input type="text" [class.error]="!quantity.valid" class="form-control" placeholder="Quantity" [(ngModel)]="currentProduct.quantity"\r\n          name="quantity" ngControl="quantity" required #quantity="ngModel" />\r\n        <label *ngIf="!quantity.valid && quantity.touched" class="form-control-feedback">\r\n            Quantity is required\r\n         </label>\r\n      </div>\r\n      <div class="form-group">\r\n        <label>Date added</label>\r\n\r\n        <div class="input-group">\r\n          <input class="form-control" placeholder="yyyy-mm-dd" name="dateAdded" [(ngModel)]="currentProduct.dateAdded" ngbDatepicker #dateAdded="ngbDatepicker">\r\n          <div class="input-group-addon" (click)="dateAdded.toggle()">\r\n            <i class="fa fa-calendar"></i>\r\n          </div>\r\n        </div>\r\n\r\n        <!--<ngb-datepicker name="dateAdded" #dateAdded [(ngModel)]="currentProduct.dateAdded"></ngb-datepicker>-->\r\n\r\n        <!--<input type="text" [class.error]="!dateAdded.valid" class="form-control" placeholder="Date" [(ngModel)]="currentProduct.dateAdded"\r\n          name="dateAdded" ngControl="dateAdded" required #dateAdded="ngModel" />-->\r\n        <label *ngIf="!dateAdded.valid && dateAdded.touched" class="form-control-feedback">\r\n            Date added is required\r\n         </label>\r\n      </div>\r\n      <div class="form-group">\r\n        <label>Description</label>\r\n        <textarea [class.error]="!description.valid" class="form-control" placeholder="Description" [(ngModel)]="currentProduct.description"\r\n          name="description" ngControl="description" required #description="ngModel"></textarea>\r\n        <label *ngIf="!description.valid && description.touched" class="form-control-feedback">\r\n            Description is required\r\n         </label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class="modal-footer">\r\n    <button type="submit" class="btn btn-secondary" [disabled]="!hf.form.valid" (click)="c(currentProduct)">Upsert</button>\r\n    <button type="button" class="btn btn-warning" (click)="d(\'Close click\')">Close</button>\r\n  </div>\r\n</template>\r\n\r\n<template ngbModalContainer></template>'}});