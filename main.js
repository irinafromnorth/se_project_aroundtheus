!function(){"use strict";const t=document.querySelector("#edit-button"),e=document.querySelector("#add-button"),s=document.forms["modal-edit-form"],i=document.forms["modal-add-form"],n=document.querySelector("#title-input"),r=document.querySelector("#description-input"),o={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"};class a{constructor(t,e,s){this.name=t.name,this.link=t.link,this._cardSelector=e,this._handleImageClick=s}_setEventListeners(){this._likeBtn=this._cardElement.querySelector(".card__like-button"),this._likeBtn.addEventListener("click",(()=>{this._handleLikeIcon()})),this._cardElement.querySelector(".card__delete-button").addEventListener("click",(()=>{this._handleDeleteCard()})),this._cardImage.addEventListener("click",(()=>{this._handleImageClick(this)}))}_handleLikeIcon(){this._likeBtn.classList.toggle("card__like-button_active")}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}_getTemplate(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._cardElement}getView(){return this._cardElement=this._getTemplate(),this._cardImage=this._cardElement.querySelector(".card__image"),this._cardImage.alt=this.name,this._cardImage.src=this.link,this._cardTitle=this._cardElement.querySelector(".card__title"),this._cardTitle.textContent=this.name,this._setEventListeners(),this._cardElement}}var l=class{constructor(t,e){this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=e}_showInputError(t){this._errorMessageEl=this._form.querySelector(`#${t.id}-error`),t.classList.add(this._inputErrorClass),this._errorMessageEl.textContent=t.validationMessage,this._errorMessageEl.classList.add(this._errorClass)}_hideInputError(t){this._errorMessageEl=this._form.querySelector(`#${t.id}-error`),t.classList.remove(this._inputErrorClass),this._errorMessageEl.textContent="",this._errorMessageEl.classList.remove(this._errorClass)}_hasInvalidInput(){return!this._inputEls.every((t=>t.validity.valid))}_checkInputValidity(t){if(!t.validity.valid)return this._showInputError(t);this._hideInputError(t)}toggleBtnState(){if(this._hasInvalidInput())return this.disableButton();this._submitBtn.classList.remove(this._inactiveButtonClass),this._submitBtn.disabled=!1}disableButton(){this._submitBtn.classList.add(this._inactiveButtonClass),this._submitBtn.disabled=!0}_setEventListeners(){this._inputEls=[...this._form.querySelectorAll(this._inputSelector)],this._submitBtn=this._form.querySelector(this._submitButtonSelector),this._inputEls.forEach((t=>{t.addEventListener("input",(()=>{this._checkInputValidity(t),this.toggleBtnState()}))}))}enableValidation(){this._form.addEventListener("submit",(t=>{t.preventDefault(),this.disableButton()})),this._setEventListeners()}resetValidation(){this.toggleBtnState(),this._inputEls.forEach((t=>{this._hideInputError(t)}))}};class c{constructor(t){let{popupSelector:e}=t;this._popupElement=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popupElement.querySelector(".modal__close")}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(t){"Escape"===t.key&&this.close()}setEventListeners(){this._popupElement.addEventListener("click",(t=>{t.target.classList.contains("modal_opened")&&this.close()})),this._closeButton.addEventListener("click",(()=>{this.close()}))}}class d extends c{constructor(t,e){super({popupSelector:t}),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=e,this._inputs=this._popupForm.querySelectorAll(".modal__input")}_getInputValues(){const t={};return this._inputs.forEach((e=>{t[e.name]=e.value})),t}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(t=>{t.preventDefault(),this._handleFormSubmit(this._getInputValues()),this._popupForm.reset()}))}}function u(t){return new a(t,"#card-template",E).getView()}const _=new class{constructor(t,e){let{items:s,renderer:i}=t;this._items=s,this._renderer=i,this._classSelector=e,this._container=document.querySelector(e)}renderItems(){this._items.forEach((t=>{this._renderer(t)}))}addItem(t){this._container.prepend(t)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:function(t){const e=u(t);_.addItem(e)}},".cards__list");_.renderItems();const h=new class{constructor(t){let{name:e,description:s}=t;this._title=document.querySelector(e),this._description=document.querySelector(s)}getUserInfo(){return this._userInfo={title:this._title.textContent,description:this._description.textContent},this._userInfo}setUserInfo(t){this._title.textContent=t.title,this._description.textContent=t.description}}({name:".profile__title",description:".profile__description"}),p=new d("#add-modal",(function(t){const{title:e,link:s}=t,i=u({name:e,link:s});_.addItem(i),p.close()}));p.setEventListeners();const m=new d("#edit-modal",(function(t){h.setUserInfo({title:t.title,description:t.description}),m.close()}));function E(t){v.open(t)}m.setEventListeners(),t.addEventListener("click",(()=>{g.resetValidation();const t=h.getUserInfo();n.value=t.title,r.value=t.description,m.open()})),e.addEventListener("click",(()=>{p.open()}));const v=new class extends c{constructor(t){super({popupSelector:t}),this._popupImageElement=this._popupElement.querySelector(".modal__image-preview"),this._popupImageTitle=this._popupElement.querySelector(".modal__caption")}open(t){let{name:e,link:s}=t;this._popupImageElement.src=s,this._popupImageElement.alt=e,this._popupImageTitle.textContent=e,super.open()}}("#modal-preview");v.setEventListeners();const g=new l(o,s);g.enableValidation(),new l(o,i).enableValidation()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TWxCLEVBQzlCRCxLQUFLMkcsaUJBQWlCckYsWUFBY3JCLEVBQ3BDcUUsTUFBTVQsTUFDUixHSDZEb0Msa0JBQ3RDeUMsRUFBV3JDLG9CQUdYLE1BQU11QyxFQUFvQixJQUFJSSxFQUM1QkwsRUFDQUEsR0FFRkMsRUFBa0J0RCxtQkFFVyxJQUFJMEQsRUFDL0JMLEVBQ0FBLEdBRW1CckQsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcm91bmR0aGV1cy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL2Fyb3VuZHRoZXVzLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9hcm91bmR0aGV1cy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYXJvdW5kdGhldXMvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9hcm91bmR0aGV1cy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vSW5pdGlhbHMgQ2FyZHNcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L3lvc2VtaXRlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJCYWxkIE1vdW50YWluc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcbi8vIENvbnN0YW50c1xyXG5leHBvcnQgY29uc3QgY2FyZFNlbGVjdG9yID0gXCIjY2FyZC10ZW1wbGF0ZVwiO1xyXG5leHBvcnQgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnV0dG9uXCIpO1xyXG5leHBvcnQgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcIm1vZGFsLWVkaXQtZm9ybVwiXTtcclxuZXhwb3J0IGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcIm1vZGFsLWFkZC1mb3JtXCJdO1xyXG5leHBvcnQgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGUtaW5wdXRcIik7XHJcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvbi1pbnB1dFwiKTtcclxuLy8gVmFsaWRhdGlvblxyXG5leHBvcnQgY29uc3QgdmFsaWRhdGlvbk9wdGlvbnMgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhcmRTZWxlY3RvciwgaGFuZGxlSW1hZ2VDbGljaykge1xyXG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faGFuZGxlSW1hZ2VDbGljayA9IGhhbmRsZUltYWdlQ2xpY2s7XHJcbiAgfVxyXG5cclxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyBcIi5jYXJkX19saWtlLWJ1dHRvblwiXHJcbiAgICB0aGlzLl9saWtlQnRuID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcclxuICAgIHRoaXMuX2xpa2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oKTtcclxuICAgIH0pO1xyXG4gICAgLy9cIi5jYXJkX19kZWxldGUtYnV0dG9uXCJcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2RlbGV0ZS1idXR0b25cIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZCgpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGltYWdlIHByZXZpZXdcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcclxuICAgIHRoaXMuX2xpa2VCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICB9XHJcbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiB0aGlzLl9jYXJkRWxlbWVudDtcclxuICB9XHJcbiAgZ2V0VmlldygpIHtcclxuICAgIC8vIGdldCB0aGUgY2FyZCB2aWV3XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMubmFtZTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5zcmMgPSB0aGlzLmxpbms7XHJcbiAgICB0aGlzLl9jYXJkVGl0bGUgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xyXG4gICAgdGhpcy5fY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xyXG4gICAgLy8gc2V0IGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIC8vIHJldHVybiB0aGUgY2FyZFxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihvcHRpb25zLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IG9wdGlvbnMuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gb3B0aW9ucy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBvcHRpb25zLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBvcHRpb25zLmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBvcHRpb25zLmVycm9yQ2xhc3M7XHJcblxyXG4gICAgdGhpcy5fZm9ybSA9IGZvcm1FbGVtZW50O1xyXG4gIH1cclxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbCkge1xyXG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIHRoaXMuX2Vycm9yTWVzc2FnZUVsLnRleHRDb250ZW50ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcclxuICAgIHRoaXMuX2Vycm9yTWVzc2FnZUVsLmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKSB7XHJcbiAgICB0aGlzLl9lcnJvck1lc3NhZ2VFbCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlRWwudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgdGhpcy5fZXJyb3JNZXNzYWdlRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5faW5wdXRFbHMuZXZlcnkoKGlucHV0RWwpID0+IGlucHV0RWwudmFsaWRpdHkudmFsaWQpO1xyXG4gIH1cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcclxuICAgIGlmICghaW5wdXRFbC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKTtcclxuICB9XHJcbiAgdG9nZ2xlQnRuU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZUJ1dHRvbigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc3VibWl0QnRuLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuX3N1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5faW5wdXRFbHMgPSBbLi4udGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcclxuICAgIHRoaXMuX3N1Ym1pdEJ0biA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9pbnB1dEVscy5mb3JFYWNoKChpbnB1dEVsKSA9PiB7XHJcbiAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVCdG5TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMudG9nZ2xlQnRuU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0RWxzLmZvckVhY2goKGlucHV0RWwpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IgfSkge1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuX2Nsb3NlQnV0dG9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShlKSB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9vcGVuZWRcIikpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcclxuICAgIHN1cGVyKHsgcG9wdXBTZWxlY3RvciB9KTtcclxuICAgIHRoaXMuX3BvcHVwRm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19mb3JtXCIpO1xyXG4gICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XHJcbiAgICB0aGlzLl9pbnB1dHMgPSB0aGlzLl9wb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9faW5wdXRcIik7XHJcbiAgfVxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBkYXRhW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XHJcbiAgICAgIHRoaXMuX3BvcHVwRm9ybS5yZXNldCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGNhcmQgZWxlbWVudHNcclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBuZXcgQ2FyZChkYXRhLCBjb25zdGFudHMuY2FyZFNlbGVjdG9yLCBoYW5kbGVJbWFnZUNsaWNrKTtcclxuICByZXR1cm4gY2FyZEVsZW1lbnQuZ2V0VmlldygpO1xyXG59XHJcbi8vIFNlY3Rpb24gZm9yIHJlbmRlcmluZyBjYXJkc1xyXG5jb25zdCBjYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBjb25zdGFudHMuaW5pdGlhbENhcmRzLFxyXG4gICAgcmVuZGVyZXI6IHJlbmRlckNhcmQsXHJcbiAgfSxcclxuICBcIi5jYXJkc19fbGlzdFwiXHJcbik7XHJcbmNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKCk7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDYXJkKGl0ZW0pIHtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoaXRlbSk7XHJcbiAgY2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbn1cclxuLy8gVXNlckluZm9cclxuY29uc3QgdXNlckluZm9ybWF0aW9uID0gbmV3IFVzZXJJbmZvKHtcclxuICBuYW1lOiBcIi5wcm9maWxlX190aXRsZVwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiLFxyXG59KTtcclxuXHJcbi8vIFBvcHVwV2l0aEZvcm1cclxuY29uc3QgYWRkQ2FyZE1vZGFsID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjYWRkLW1vZGFsXCIsIGhhbmRsZUFkZENhcmRTdWJtaXQpO1xyXG5hZGRDYXJkTW9kYWwuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBuZXcgUG9wdXBXaXRoRm9ybShcIiNlZGl0LW1vZGFsXCIsIGhhbmRsZUVkaXRTdWJtaXQpO1xyXG5wcm9maWxlRWRpdE1vZGFsLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyBIYW5kbGVyc1xyXG5mdW5jdGlvbiBoYW5kbGVJbWFnZUNsaWNrKGRhdGEpIHtcclxuICBwb3B1cEltYWdlLm9wZW4oZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVkaXRTdWJtaXQoZGF0YSkge1xyXG4gIHVzZXJJbmZvcm1hdGlvbi5zZXRVc2VySW5mbyh7XHJcbiAgICB0aXRsZTogZGF0YS50aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBkYXRhLmRlc2NyaXB0aW9uLFxyXG4gIH0pO1xyXG4gIHByb2ZpbGVFZGl0TW9kYWwuY2xvc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZFN1Ym1pdChkYXRhKSB7XHJcbiAgY29uc3QgeyB0aXRsZSwgbGluayB9ID0gZGF0YTtcclxuICBjb25zdCBjYXJkRGF0YSA9IHsgbmFtZTogdGl0bGUsIGxpbms6IGxpbmsgfTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNyZWF0ZUNhcmQoY2FyZERhdGEpO1xyXG4gIGNhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xyXG4gIGFkZENhcmRNb2RhbC5jbG9zZSgpO1xyXG59XHJcbi8vIEV2ZW50IGxpc3RlbmVycyBmb3Igb3BlbmluZyBtb2RhbHNcclxuY29uc3RhbnRzLmVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxuICBjb25zdCB1c2VyRGF0YSA9IHVzZXJJbmZvcm1hdGlvbi5nZXRVc2VySW5mbygpO1xyXG4gIGNvbnN0YW50cy50aXRsZUlucHV0LnZhbHVlID0gdXNlckRhdGEudGl0bGU7XHJcbiAgY29uc3RhbnRzLmRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB1c2VyRGF0YS5kZXNjcmlwdGlvbjtcclxuICBwcm9maWxlRWRpdE1vZGFsLm9wZW4oKTtcclxufSk7XHJcblxyXG5jb25zdGFudHMuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGFkZENhcmRNb2RhbC5vcGVuKCk7XHJcbn0pO1xyXG5cclxuLy8gUG9wdXBXaXRoSW1hZ2UgZm9yIGltYWdlIHByZXZpZXdcclxuY29uc3QgcG9wdXBJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShcIiNtb2RhbC1wcmV2aWV3XCIpO1xyXG5wb3B1cEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyBWYWxpZGF0aW9uXHJcbmNvbnN0IGVkaXRGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgY29uc3RhbnRzLnZhbGlkYXRpb25PcHRpb25zLFxyXG4gIGNvbnN0YW50cy5lZGl0Rm9ybVxyXG4pO1xyXG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBhZGRDYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxyXG4gIGNvbnN0YW50cy52YWxpZGF0aW9uT3B0aW9ucyxcclxuICBjb25zdGFudHMuYWRkRm9ybVxyXG4pO1xyXG5hZGRDYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNsYXNzU2VsZWN0b3IpIHtcclxuICAgIC8vaXRlbXMgYXJlIGFycmF5IG9mIGRhdGFcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICAvL3JlbmRlcmVyIGlzIGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFuZCBhZGRzIGEgc2luZ2xlIGl0ZW0gdG8gdGhlIHBhZ2VcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jbGFzc1NlbGVjdG9yID0gY2xhc3NTZWxlY3RvcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NTZWxlY3Rvcik7XHJcbiAgfVxyXG4gIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBhZGRJdGVtKGl0ZW0pIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGl0ZW0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgICB0aGlzLl90aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobmFtZSk7XHJcbiAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZGVzY3JpcHRpb24pO1xyXG4gIH1cclxuICAvL3JldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXJcclxuICAvL2Rpc3BsYXkgdGhlIHVzZXIgZGF0YSBpbiB0aGUgb3BlbiBmb3JtXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICB0aGlzLl91c2VySW5mbyA9IHtcclxuICAgICAgdGl0bGU6IHRoaXMuX3RpdGxlLnRleHRDb250ZW50LFxyXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5fZGVzY3JpcHRpb24udGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJJbmZvO1xyXG4gIH1cclxuICAvL2FkZHMgbmV3IHVzZXIgZGF0YSB0byB0aGUgcGFnZSBhZnRlciBzdWNjZXNzZnVsIHN1Ym1pc3Npb25cclxuICBzZXRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICB0aGlzLl90aXRsZS50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XHJcbiAgICB0aGlzLl9kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlRWxlbWVudCA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBcIi5tb2RhbF9faW1hZ2UtcHJldmlld1wiXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZVRpdGxlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XHJcbiAgfVxyXG4gIG9wZW4oeyBuYW1lLCBsaW5rIH0pIHtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2VFbGVtZW50LnNyYyA9IGxpbms7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlRWxlbWVudC5hbHQgPSBuYW1lO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZVRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImVkaXRCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRDYXJkQnV0dG9uIiwiZWRpdEZvcm0iLCJmb3JtcyIsImFkZEZvcm0iLCJ0aXRsZUlucHV0IiwiZGVzY3JpcHRpb25JbnB1dCIsInZhbGlkYXRpb25PcHRpb25zIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJDYXJkIiwiY29uc3RydWN0b3IiLCJkYXRhIiwiY2FyZFNlbGVjdG9yIiwiaGFuZGxlSW1hZ2VDbGljayIsInRoaXMiLCJuYW1lIiwibGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9saWtlQnRuIiwiX2NhcmRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9oYW5kbGVMaWtlSWNvbiIsIl9oYW5kbGVEZWxldGVDYXJkIiwiX2NhcmRJbWFnZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsIl9nZXRUZW1wbGF0ZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJnZXRWaWV3IiwiYWx0Iiwic3JjIiwiX2NhcmRUaXRsZSIsInRleHRDb250ZW50Iiwib3B0aW9ucyIsImZvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsIl9mb3JtIiwiX3Nob3dJbnB1dEVycm9yIiwiaW5wdXRFbCIsIl9lcnJvck1lc3NhZ2VFbCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJfaGFzSW52YWxpZElucHV0IiwiX2lucHV0RWxzIiwiZXZlcnkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInRvZ2dsZUJ0blN0YXRlIiwiZGlzYWJsZUJ1dHRvbiIsIl9zdWJtaXRCdG4iLCJkaXNhYmxlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZW5hYmxlVmFsaWRhdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0VmFsaWRhdGlvbiIsIlBvcHVwIiwiX3JlZiIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsIl9jbG9zZUJ1dHRvbiIsIm9wZW4iLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJzZXRFdmVudExpc3RlbmVycyIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9wb3B1cEZvcm0iLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9pbnB1dHMiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicmVzZXQiLCJjcmVhdGVDYXJkIiwiY2FyZFNlY3Rpb24iLCJjbGFzc1NlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jbGFzc1NlbGVjdG9yIiwiX2NvbnRhaW5lciIsInJlbmRlckl0ZW1zIiwiaXRlbSIsImFkZEl0ZW0iLCJwcmVwZW5kIiwiY2FyZEVsZW1lbnQiLCJ1c2VySW5mb3JtYXRpb24iLCJkZXNjcmlwdGlvbiIsIl90aXRsZSIsIl9kZXNjcmlwdGlvbiIsImdldFVzZXJJbmZvIiwiX3VzZXJJbmZvIiwidGl0bGUiLCJzZXRVc2VySW5mbyIsImFkZENhcmRNb2RhbCIsInByb2ZpbGVFZGl0TW9kYWwiLCJwb3B1cEltYWdlIiwiY29uc3RhbnRzIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJ1c2VyRGF0YSIsIl9wb3B1cEltYWdlRWxlbWVudCIsIl9wb3B1cEltYWdlVGl0bGUiLCJGb3JtVmFsaWRhdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==