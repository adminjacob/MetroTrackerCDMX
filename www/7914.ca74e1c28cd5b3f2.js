"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7914],{7914:(P,d,a)=>{a.r(d),a.d(d,{ForgotPageModule:()=>h});var m=a(6019),l=a(9010),r=a(6371),u=a(8725),o=a(865),p=a(7524);function f(e,s){1&e&&(o.TgZ(0,"div",16),o._uU(1," El correo es requerido. "),o.qZA())}function v(e,s){1&e&&(o.TgZ(0,"div",16),o._uU(1," Por favor introduce un correo v\xe1lido. "),o.qZA())}const Z=[{path:"",component:(()=>{class e{constructor(t,n,i){this.navCtrl=t,this.router=n,this.userService=i,this.email="",this.submitAttempted=!1}ngOnInit(){}onBack(){this.navCtrl.back()}onSend(t){this.submitAttempted=!0,t.valid&&this.userService.sendCode(this.email).subscribe(n=>{"Error al enviar el correo"==n?alert("Ocurrio un error al enviar el correo, favor de intentarlo de nuevo."):"Usuario no encontrado"==n?alert("No se encontro el usuario"):this.router.navigate(["verification"],{state:{verificationCode:n.code,email:this.email}})})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(r.SH),o.Y36(u.F0),o.Y36(p.K))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-forgot"]],decls:21,vars:3,consts:[[1,"ion-no-border"],["mode","md","color","primary"],["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back","color","light"],[1,"ion-padding"],[1,"head-title"],[1,"sub-title"],[1,"bottom-content"],[3,"ngSubmit"],["resetForm","ngForm"],[1,"input_box"],["type","email","name","email","required","","email","","placeholder","Correo",3,"ngModel","ngModelChange"],["emailRef","ngModel"],["type","submit","expand","block","shape","round",1,"login-btn"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(t,n){if(1&t){const i=o.EpF();o.TgZ(0,"ion-header",0),o.TgZ(1,"ion-toolbar",1),o.TgZ(2,"ion-buttons",2),o.TgZ(3,"ion-button",3),o.NdJ("click",function(){return n.onBack()}),o._UZ(4,"ion-icon",4),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(5,"ion-content",5),o.TgZ(6,"h2",6),o._uU(7,"\xbfOlvidaste tu contrase\xf1a?"),o.qZA(),o.TgZ(8,"p",7),o._uU(9,"Por favor ingresa tu correo para que te podamos ayudar a recuperar tu contrase\xf1a"),o.qZA(),o.TgZ(10,"div",8),o.TgZ(11,"form",9,10),o.NdJ("ngSubmit",function(){o.CHM(i);const c=o.MAs(12);return n.onSend(c)}),o.TgZ(13,"ion-item"),o.TgZ(14,"div",11),o.TgZ(15,"ion-input",12,13),o.NdJ("ngModelChange",function(c){return n.email=c}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"ion-button",14),o._uU(18," Enviar codigo "),o.qZA(),o.qZA(),o.YNc(19,f,2,0,"div",15),o.YNc(20,v,2,0,"div",15),o.qZA(),o.qZA()}if(2&t){const i=o.MAs(16);o.xp6(15),o.Q6J("ngModel",n.email),o.xp6(4),o.Q6J("ngIf",n.submitAttempted&&(null==i.errors?null:i.errors.required)),o.xp6(1),o.Q6J("ngIf",n.submitAttempted&&(null==i.errors?null:i.errors.email))}},directives:[r.Gu,r.sr,r.Sm,r.YG,r.gu,r.W2,l._Y,l.JL,l.F,r.Ie,r.pK,r.j9,l.Q7,l.on,l.JJ,l.On,m.O5],styles:['.head-title[_ngcontent-%COMP%]{text-align:center;font-size:18px;font-family:"bold"}.sub-title[_ngcontent-%COMP%]{text-align:center;font-size:14px;color:gray}.login-btn[_ngcontent-%COMP%]{--border-radius: 14px;margin-top:50px}.error-message[_ngcontent-%COMP%]{color:red;font-size:.8em}']}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[u.Bz.forChild(Z)],u.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[m.ez,l.u5,r.Pc,F]]}),e})()}}]);