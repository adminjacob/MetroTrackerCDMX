"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6034],{6034:(y,u,c)=>{c.r(u),c.d(u,{LoginPageModule:()=>C});var d=c(6019),s=c(9010),r=c(6371),l=c(8725),p=c(8239),n=c(865),m=c(7524);const f=["loginForm"];function _(t,a){1&t&&(n.TgZ(0,"div",21),n._uU(1," El correo es requerido. "),n.qZA())}function P(t,a){1&t&&(n.TgZ(0,"div",21),n._uU(1," Por favor introduce un correo v\xe1lido. "),n.qZA())}function v(t,a){1&t&&(n.TgZ(0,"div",21),n._uU(1," La contrase\xf1a es requerida. "),n.qZA())}const M=[{path:"",component:(()=>{class t{constructor(e,o,i,g){this.navCtrl=e,this.router=o,this.userService=i,this.alertController=g,this.viewPassword=!1,this.correo="",this.contrasena="",this.submitAttempted=!1}ngOnInit(){}changeType(){this.viewPassword=!this.viewPassword}reset(){this.router.navigate(["forgot"])}onLogin(){var e=this;return(0,p.Z)(function*(){e.submitAttempted=!0,e.loginForm.valid?e.userService.getPasswordByEmail(e.correo).subscribe(function(){var o=(0,p.Z)(function*(i){const g=i.id,b=e.userService.decrypt(i.contrasenia),O=e.userService.encrypt(g);localStorage.setItem("intro","true"),localStorage.setItem("logged","true"),localStorage.setItem("id",O),e.contrasena==b?"administrador@gmail.com"==e.correo?(localStorage.setItem("admin","true"),e.router.navigate(["/administrador-tabs"])):e.navCtrl.navigateRoot([""]):yield(yield e.alertController.create({header:"Error",message:"Usuario o contrase\xf1a incorrecta.",buttons:["OK"]})).present()});return function(i){return o.apply(this,arguments)}}()):console.log("Formulario no v\xe1lido, no se puede avanzar.")})()}onRegister(){this.router.navigate(["register"])}ingresar(){this.navCtrl.navigateRoot([""])}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(r.SH),n.Y36(l.F0),n.Y36(m.K),n.Y36(r.Br))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],viewQuery:function(e,o){if(1&e&&n.Gf(f,5),2&e){let i;n.iGM(i=n.CRH())&&(o.loginForm=i.first)}},decls:40,vars:7,consts:[[1,"main-content"],[1,"top-content"],["src","assets/imgs/completoSaturado.PNG","alt","",1,"logo",2,"width","200px","height","auto"],[1,"bottom-content"],[3,"ngSubmit"],["loginForm","ngForm"],[1,"input_box"],["type","text","name","correo","required","","email","","placeholder","Correo",3,"ngModel","ngModelChange"],["correoRef","ngModel"],["name","contrasena","required","","placeholder","Contrase\xf1a",3,"type","ngModel","ngModelChange"],["contrasenaRef","ngModel"],["fill","clear","slot","end",1,"toggle_btn",3,"click"],["slot","icon-only",3,"name"],[1,"reset","ion-activatable","ripple-parent",3,"click"],["type","submit","expand","block","shape","round",1,"login-btn"],["class","error-message",4,"ngIf"],[1,"or-text"],[1,"ingresar"],["type","submit","expand","block","shape","round",1,"login-btn",3,"click"],[1,"register"],[1,"regiterBtn","ion-activatable","ripple-parent",3,"click"],[1,"error-message"]],template:function(e,o){if(1&e&&(n.TgZ(0,"ion-content"),n.TgZ(1,"div",0),n.TgZ(2,"div",1),n._UZ(3,"img",2),n.qZA(),n.TgZ(4,"div",3),n.TgZ(5,"form",4,5),n.NdJ("ngSubmit",function(){return o.onLogin()}),n.TgZ(7,"ion-item"),n.TgZ(8,"div",6),n.TgZ(9,"ion-input",7,8),n.NdJ("ngModelChange",function(g){return o.correo=g}),n.qZA(),n.qZA(),n.qZA(),n._UZ(11,"br"),n.TgZ(12,"ion-item"),n.TgZ(13,"div",6),n.TgZ(14,"ion-input",9,10),n.NdJ("ngModelChange",function(g){return o.contrasena=g}),n.qZA(),n.TgZ(16,"ion-button",11),n.NdJ("click",function(){return o.changeType()}),n._UZ(17,"ion-icon",12),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"div",13),n.NdJ("click",function(){return o.reset()}),n.TgZ(19,"p"),n._uU(20,"\xbfOlvidaste tu contrase\xf1a?"),n.qZA(),n._UZ(21,"ion-ripple-effect"),n.qZA(),n.TgZ(22,"ion-button",14),n._uU(23," Iniciar sesi\xf3n "),n.qZA(),n.qZA(),n.YNc(24,_,2,0,"div",15),n.YNc(25,P,2,0,"div",15),n.YNc(26,v,2,0,"div",15),n.TgZ(27,"p",16),n.TgZ(28,"span"),n._uU(29,"o ingresa sin iniciar sesion"),n.qZA(),n.qZA(),n.TgZ(30,"div",17),n.TgZ(31,"ion-button",18),n.NdJ("click",function(){return o.ingresar()}),n._uU(32," Ingresar "),n.qZA(),n.qZA(),n.TgZ(33,"div",19),n.TgZ(34,"p"),n._uU(35,"\xbfNo tienes una cuenta? "),n.qZA(),n.TgZ(36,"div",20),n.NdJ("click",function(){return o.onRegister()}),n.TgZ(37,"p"),n._uU(38,"Registrate"),n.qZA(),n._UZ(39,"ion-ripple-effect"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e){const i=n.MAs(10),g=n.MAs(15);n.xp6(9),n.Q6J("ngModel",o.correo),n.xp6(5),n.Q6J("type",1==o.viewPassword?"text":"password")("ngModel",o.contrasena),n.xp6(3),n.Q6J("name",1==o.viewPassword?"eye-outline":"eye-off-outline"),n.xp6(7),n.Q6J("ngIf",o.submitAttempted&&(null==i.errors?null:i.errors.required)),n.xp6(1),n.Q6J("ngIf",o.submitAttempted&&(null==i.errors?null:i.errors.email)),n.xp6(1),n.Q6J("ngIf",o.submitAttempted&&(null==g.errors?null:g.errors.required))}},directives:[r.W2,s._Y,s.JL,s.F,r.Ie,r.pK,r.j9,s.Q7,s.on,s.JJ,s.On,r.YG,r.gu,r.H$,d.O5],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-color-primary)}.main-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]{height:30vh;display:flex;flex-direction:row;justify-content:center;align-items:center}.main-content[_ngcontent-%COMP%]   .top-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:150px}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]{height:70vh;background:white;border-top-left-radius:14px;border-top-right-radius:14px;padding:30px 14px 14px}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .toggle_btn[_ngcontent-%COMP%]{position:absolute;right:0px;bottom:0px;z-index:9999}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .reset[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-end}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .ripple-parent[_ngcontent-%COMP%]{position:relative;overflow:hidden}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]{--border-radius: 14px;margin-top:20px}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .or-text[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid gray;line-height:.1em;color:gray;margin-top:30px}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .or-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fff;padding:0 10px}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .ingresar[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:30px}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:30px;font-size:14px}.main-content[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]   .regiterBtn[_ngcontent-%COMP%]{margin-left:10px;color:var(--ion-color-primary)}.error-message[_ngcontent-%COMP%]{color:red;font-size:.8em}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.Bz.forChild(M)],l.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,s.u5,r.Pc,Z]]}),t})()}}]);