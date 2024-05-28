"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7887],{7887:(N,m,p)=>{p.r(m),p.d(m,{VerificationPageModule:()=>I});var u=p(6019),a=p(9010),c=p(6371),d=p(8725),y=p(8239),e=p(865);function C(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"input",3,4),e.NdJ("paste",function(o){return e.CHM(t),e.oxw(2).handlePaste(o)})("keyup",function(o){const l=e.CHM(t).index;return e.oxw(2).onKeyUp(o,l)})("input",function(o){return e.CHM(t),e.oxw(2).onInput(o)})("keydown",function(o){const l=e.CHM(t).index;return e.oxw(2).onKeyDown(o,l)}),e.qZA()}if(2&i){const t=r.$implicit,n=r.index,o=e.oxw(2);e.Gre("otp-input ",o.config.inputClass,""),e.Q6J("pattern",o.config.allowNumbersOnly?"\\d*":"")("type",o.inputType)("placeholder",(null==o.config?null:o.config.placeholder)||"")("ngStyle",o.config.inputStyles)("formControl",o.otpForm.controls[t])("id",o.getBoxId(n))}}function _(i,r){if(1&i&&(e.TgZ(0,"div",1),e.YNc(1,C,2,9,"input",2),e.ALo(2,"keys"),e.qZA()),2&i){const t=e.oxw();e.Gre("ng-otp-input-wrapper wrapper ",t.config.containerClass,""),e.MGl("id","c_",t.componentKey,""),e.Q6J("ngStyle",t.config.containerStyles),e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,6,null==t.otpForm?null:t.otpForm.controls))}}class g{static ifTab(r){return this.ifKey(r,"Tab")}static ifDelete(r){return this.ifKey(r,"Delete;Del")}static ifBackspace(r){return this.ifKey(r,"Backspace")}static ifRightArrow(r){return this.ifKey(r,"ArrowRight;Right")}static ifLeftArrow(r){return this.ifKey(r,"ArrowLeft;Left")}static ifSpacebar(r){return this.ifKey(r,"Spacebar; ")}static ifKey(r,t){return t.split(";").some(o=>o===r.key)}}let h=(()=>{class i{transform(t){return Object.keys(t)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"keys",type:i,pure:!0}),i})(),b=(()=>{class i{constructor(t,n){this.keysPipe=t,this.document=n,this.config={length:4},this.onInputChange=new e.vpe,this.inputControls=new Array(this.config.length),this.componentKey=Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)}get inputType(){return this.config?.isPasswordInput?"password":this.config?.allowNumbersOnly?"tel":"text"}ngOnInit(){this.otpForm=new a.cw({});for(let t=0;t<this.config.length;t++)this.otpForm.addControl(this.getControlName(t),new a.NI);this.otpForm.valueChanges.subscribe(t=>{this.keysPipe.transform(this.otpForm.controls).forEach(n=>{var o=this.otpForm.controls[n].value;o&&o.length>1&&(o.length>=this.config.length?this.setValue(o):this.rebuildValue())})})}ngAfterViewInit(){if(!this.config.disableAutoFocus){const t=this.document.getElementById(`c_${this.componentKey}`);if(t){const n=t.getElementsByClassName("otp-input")[0];n&&n.focus&&n.focus()}}}getControlName(t){return`ctrl_${t}`}onKeyDown(t,n){const o=this.getBoxId(n-1),s=this.getBoxId(n);return g.ifSpacebar(t)?(t.preventDefault(),!1):g.ifBackspace(t)?(t.target.value?this.clearInput(s,n):(this.clearInput(o,n-1),this.setSelected(o)),void this.rebuildValue()):void 0}onInput(t){if(this.config.allowNumbersOnly&&!this.validateNumber(this.currentVal?`${this.currentVal}${t.target.value}`:t.target.value))return t.target.value="",t.stopPropagation(),void t.preventDefault()}onKeyUp(t,n){g.ifTab(t)&&(n-=1);const o=this.getBoxId(n+1),s=this.getBoxId(n-1),l=this.getBoxId(n);return g.ifRightArrow(t)?(t.preventDefault(),void this.setSelected(o)):g.ifLeftArrow(t)?(t.preventDefault(),void this.setSelected(s)):g.ifDelete(t)?(t.target.value?this.clearInput(l,n):(this.clearInput(s,n-1),this.setSelected(s)),void this.rebuildValue()):void(!t.target.value||(this.ifValidKeyCode(t)&&this.setSelected(o),this.rebuildValue()))}validateNumber(t){return t&&/^[0-9]+$/.test(t)}getBoxId(t){return`otp_${t}_${this.componentKey}`}clearInput(t,n){let o=this.getControlName(n);this.otpForm.controls[o]?.setValue(null);const s=this.document.getElementById(t);s&&s instanceof HTMLInputElement&&(s.value=null)}setSelected(t){this.focusTo(t);const n=this.document.getElementById(t);n&&n.setSelectionRange&&setTimeout(()=>{n.setSelectionRange(0,1)},0)}ifValidKeyCode(t){const n=t.key;return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||/[a-zA-Z0-9-_]/.test(n)}focusTo(t){const n=this.document.getElementById(t);n&&n.focus()}setValue(t){if(!this.config.allowNumbersOnly||!isNaN(t)){if(this.otpForm.reset(),!t)return void this.rebuildValue();if(t=t.toString().replace(/\s/g,""),Array.from(t).forEach((o,s)=>{this.otpForm.get(this.getControlName(s))&&this.otpForm.get(this.getControlName(s)).setValue(o)}),!this.config.disableAutoFocus){const o=this.document.getElementById(`c_${this.componentKey}`);var n=t.length<this.config.length?t.length:this.config.length-1;let s=o.getElementsByClassName("otp-input")[n];s&&s.focus&&s.focus()}this.rebuildValue()}}rebuildValue(){let t="";this.keysPipe.transform(this.otpForm.controls).forEach(n=>{if(this.otpForm.controls[n].value){let o=this.otpForm.controls[n].value,s=o.length>1,l=!this.config.allowNumbersOnly&&this.config.letterCase&&("upper"==this.config.letterCase.toLocaleLowerCase()||"lower"==this.config.letterCase.toLocaleLowerCase());o=o[0];let f=l?"upper"==this.config.letterCase.toLocaleLowerCase()?o.toUpperCase():o.toLowerCase():o;l&&f==o?l=!1:o=f,t+=o,(s||l)&&this.otpForm.controls[n].setValue(o)}}),this.formCtrl?.setValue&&this.formCtrl.setValue(t),this.onInputChange.emit(t),this.currentVal=t}handlePaste(t){let n=t.clipboardData||window.clipboardData;if(n)var o=n.getData("Text");t.stopPropagation(),t.preventDefault(),o&&(!this.config.allowNumbersOnly||this.validateNumber(o))&&this.setValue(o)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h),e.Y36(u.K0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-otp-input"]],inputs:{config:"config",formCtrl:"formCtrl"},outputs:{onInputChange:"onInputChange"},decls:1,vars:1,consts:[[3,"class","id","ngStyle",4,"ngIf"],[3,"id","ngStyle"],["autocomplete","one-time-code",3,"pattern","type","placeholder","ngStyle","class","formControl","id","paste","keyup","input","keydown",4,"ngFor","ngForOf"],["autocomplete","one-time-code",3,"pattern","type","placeholder","ngStyle","formControl","id","paste","keyup","input","keydown"],["inp",""]],template:function(t,n){1&t&&e.YNc(0,_,3,8,"div",0),2&t&&e.Q6J("ngIf",null==n.otpForm?null:n.otpForm.controls)},directives:[u.O5,u.PC,u.sg,a.Fj,a.c5,a.JJ,a.oH],pipes:[h],styles:[".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.ng-otp-input-wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]}),i})(),x=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[h],imports:[[u.ez,a.u5,a.UX]]}),i})();const w=[{path:"",component:(()=>{class i{constructor(t,n,o){this.navCtrl=t,this.router=n,this.alertController=o,this.otp="",this.otpConfig={length:5,inputStyles:{"border-radius":"0px",width:"40px",height:"40px",border:"none","border-bottom":"2px solid lightgray","background-color":"white"}};const s=this.router.getCurrentNavigation();this.verificationCode=s?.extras.state?.verificationCode,this.email=s?.extras.state?.email}ngOnInit(){}onBack(){this.navCtrl.back()}onOtpChange(t){this.otp=t}onContinue(){var t=this;return(0,y.Z)(function*(){5===t.otp.length&&t.otp==t.verificationCode?t.router.navigate(["confirm-password"],{state:{email:t.email}}):yield(yield t.alertController.create({header:"Error",message:"C\xf3digo inv\xe1lido, favor de intentar de nuevo.",buttons:["OK"]})).present()})()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.SH),e.Y36(d.F0),e.Y36(c.Br))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-verification"]],decls:15,vars:2,consts:[[1,"ion-no-border"],["mode","md","color","primary"],["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back","color","light"],[1,"ion-padding"],[1,"head-title"],[1,"sub-title"],[3,"ngSubmit"],[1,"otp-content"],[3,"config","onInputChange"],["type","submit","expand","block","shape","round",1,"login-btn",3,"disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar",1),e.TgZ(2,"ion-buttons",2),e.TgZ(3,"ion-button",3),e.NdJ("click",function(){return n.onBack()}),e._UZ(4,"ion-icon",4),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"ion-content",5),e.TgZ(6,"h2",6),e._uU(7,"Verificaci\xf3n"),e.qZA(),e.TgZ(8,"p",7),e._uU(9,"Ingresa el c\xf3digo de 5 d\xedgitos que acabamos de enviar a tu correo"),e.qZA(),e.TgZ(10,"form",8),e.NdJ("ngSubmit",function(){return n.onContinue()}),e.TgZ(11,"div",9),e.TgZ(12,"ng-otp-input",10),e.NdJ("onInputChange",function(s){return n.onOtpChange(s)}),e.qZA(),e.qZA(),e.TgZ(13,"ion-button",11),e._uU(14," Continuar "),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(12),e.Q6J("config",n.otpConfig),e.xp6(1),e.Q6J("disabled",5!==n.otp.length))},directives:[c.Gu,c.sr,c.Sm,c.YG,c.gu,c.W2,a._Y,a.JL,a.F,b],styles:['.head-title[_ngcontent-%COMP%]{text-align:center;font-size:18px;font-family:"bold"}.sub-title[_ngcontent-%COMP%]{text-align:center;font-size:14px;color:gray}.login-btn[_ngcontent-%COMP%]{--border-radius: 14px;margin-top:50px}.otp-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin:30px 0}']}),i})()}];let v=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[d.Bz.forChild(w)],d.Bz]}),i})(),I=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[u.ez,a.u5,c.Pc,v,x]]}),i})()}}]);