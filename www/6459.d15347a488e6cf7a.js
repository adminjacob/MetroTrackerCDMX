"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6459],{6459:(w,u,s)=>{s.r(u),s.d(u,{EditProfilePageModule:()=>M});var p=s(6019),d=s(9010),r=s(6371),m=s(8725),f=s(8239),g=s(5895),e=s(865),h=s(7524);function P(o,l){1&o&&(e.TgZ(0,"div",20),e._uU(1," El nombre completo es requerido. "),e.qZA())}function _(o,l){1&o&&(e.TgZ(0,"div",20),e._uU(1," La contrase\xf1a es requerida "),e.qZA())}function v(o,l){1&o&&(e.TgZ(0,"div",20),e._uU(1," La contrase\xf1a debe tener al menos 8 caracteres, incluir may\xfasculas, min\xfasculas, un n\xfamero y un caracter especial. "),e.qZA())}function Z(o,l){1&o&&(e.TgZ(0,"div",20),e._uU(1," Las contrase\xf1as no coinciden. "),e.qZA())}const b=[{path:"",component:(()=>{class o{constructor(i,t,c){this.actionSheetCtrl=i,this.navCtrl=t,this.userService=c,this.id="",this.correo="",this.fechaDeNacimiento="",this.genero="",this.nombreCompleto="",this.imagenPerfil="",this.viewPassword=!1,this.passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/]{8,}$/,this.updatedUser={nombreCompleto:"",contrasenia:""},this.submitAttempted=!1,this.password="",this.confirmPassword="",this.passwordsDontMatch=!1}ngOnInit(){const i=localStorage.getItem("id");this.id=this.userService.decrypt(i),this.getInformation()}getInformation(){this.userService.getUser(this.id).subscribe(i=>{this.correo=i.correo,this.fechaDeNacimiento=i.fechaDeNacimiento,this.genero=i.genero,this.nombreCompleto=i.nombreCompleto,this.imagenPerfil=i.imagenPerfil})}changeType(){this.viewPassword=!this.viewPassword}goBack(){this.navCtrl.back()}updateUser(i){this.submitAttempted=!0,this.password===this.confirmPassword?(this.passwordsDontMatch=!1,i.valid&&(this.updatedUser.nombreCompleto=this.nombreCompleto,this.updatedUser.contrasenia=this.password,console.log(this.id),this.userService.updateUser(this.id,this.updatedUser).subscribe(t=>{console.log(t)}))):this.passwordsDontMatch=!0}getImage(){var i=this;return(0,f.Z)(function*(){const t=[{text:"Tomar foto",icon:"camera",handler:()=>{i.takePicture(g.oK.Camera)}},{text:"Galer\xeda",icon:"image",handler:()=>{i.takePicture(g.oK.Photos)}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}];yield(yield i.actionSheetCtrl.create({header:"Seleccionar Avatar",mode:"md",buttons:t})).present()})()}takePicture(i){var t=this;return(0,f.Z)(function*(){var n=(yield g.V1.getPhoto({quality:90,allowEditing:!1,resultType:g.dk.Uri,source:i})).webPath;fetch(n).then(a=>a.blob()).then(a=>{const A=new File([a],"filename.jpeg",{type:"image/jpeg"});t.userService.updateProfilePicture(t.id,A).subscribe(T=>{"Imagen de perfil actualizada de forma correcta"===T?(alert("Imagen de perfil actualizada de forma correcta"),t.getInformation()):alert("Error al actualizar la imagen de perfil")})})})()}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(r.BX),e.Y36(r.SH),e.Y36(h.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-profile"]],decls:33,vars:16,consts:[["mode","ios",1,"ion-no-border"],["fill","clear","mode","ios","slot","start",3,"click"],["name","arrow-back-outline"],[1,"edit_profile_main_content"],[1,"user_image","bg_image",3,"click"],[1,"input_box"],["type","text","placeholder","Correo","disabled","",3,"value"],["type","text","placeholder","Fecha de nacimiento","disabled","",3,"value"],["type","text","placeholder","Genero","disabled","",3,"value"],[3,"ngSubmit"],["updateForm","ngForm"],["type","text","placeholder","Nombre completo","name","nombreCompleto","required","","ngModel","",3,"ngModel","ngModelChange"],["nombreCompletoRef","ngModel"],["name","password","required","","placeholder","Contrase\xf1a","ngModel","",3,"type","ngModel","pattern","ngModelChange"],["passwordRef","ngModel"],["fill","clear","slot","end",1,"toggle_btn",3,"click"],["slot","icon-only",3,"name"],["name","confirmPassword","required","","placeholder","Confirmar contrase\xf1a","ngModel","",3,"type","ngModel","ngModelChange"],["class","error-message",4,"ngIf"],["type","submit","expand","block","mode","ios"],[1,"error-message"]],template:function(i,t){if(1&i){const c=e.EpF();e.TgZ(0,"ion-header",0),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-button",1),e.NdJ("click",function(){return t.goBack()}),e._UZ(3,"ion-icon",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Actualizar informaci\xf3n"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"ion-content"),e.TgZ(7,"div",3),e.TgZ(8,"div",4),e.NdJ("click",function(){return t.getImage()}),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"ion-input",6),e.qZA(),e.TgZ(11,"div",5),e._UZ(12,"ion-input",7),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"ion-input",8),e.qZA(),e.TgZ(15,"form",9,10),e.NdJ("ngSubmit",function(){e.CHM(c);const a=e.MAs(16);return t.updateUser(a)}),e.TgZ(17,"div",5),e.TgZ(18,"ion-input",11,12),e.NdJ("ngModelChange",function(a){return t.nombreCompleto=a}),e.qZA(),e.qZA(),e.TgZ(20,"div",5),e.TgZ(21,"ion-input",13,14),e.NdJ("ngModelChange",function(a){return t.password=a}),e.qZA(),e.TgZ(23,"ion-button",15),e.NdJ("click",function(){return t.changeType()}),e._UZ(24,"ion-icon",16),e.qZA(),e.qZA(),e.TgZ(25,"div",5),e.TgZ(26,"ion-input",17),e.NdJ("ngModelChange",function(a){return t.confirmPassword=a}),e.qZA(),e.qZA(),e.YNc(27,P,2,0,"div",18),e.YNc(28,_,2,0,"div",18),e.YNc(29,v,2,0,"div",18),e.YNc(30,Z,2,0,"div",18),e.TgZ(31,"ion-button",19),e._uU(32," Actualizar Informaci\xf3n "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const c=e.MAs(19),n=e.MAs(22);e.xp6(8),e.Udp("background-image","url("+(t.imagenPerfil?t.imagenPerfil:"assets/imgs/hombre.png")+")"),e.xp6(2),e.s9C("value",t.correo),e.xp6(2),e.s9C("value",t.fechaDeNacimiento),e.xp6(2),e.s9C("value",t.genero),e.xp6(4),e.Q6J("ngModel",t.nombreCompleto),e.xp6(3),e.Q6J("type",t.viewPassword?"text":"password")("ngModel",t.password)("pattern",t.passwordPattern),e.xp6(3),e.Q6J("name",t.viewPassword?"eye-outline":"eye-off-outline"),e.xp6(2),e.Q6J("type",t.viewPassword?"text":"password")("ngModel",t.confirmPassword),e.xp6(1),e.Q6J("ngIf",t.submitAttempted&&(null==c.errors?null:c.errors.required)),e.xp6(1),e.Q6J("ngIf",t.submitAttempted&&(null==n.errors?null:n.errors.required)),e.xp6(1),e.Q6J("ngIf",t.submitAttempted&&(null==n.errors?null:n.errors.pattern)),e.xp6(1),e.Q6J("ngIf",t.submitAttempted&&t.passwordsDontMatch)}},directives:[r.Gu,r.sr,r.YG,r.gu,r.wd,r.W2,r.pK,r.j9,d._Y,d.JL,d.F,d.Q7,d.JJ,d.On,d.c5,p.O5],styles:['@charset "UTF-8";.edit_profile_main_content[_ngcontent-%COMP%]{padding:16px}.edit_profile_main_content[_ngcontent-%COMP%]   .user_image[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:100%;display:block;margin:40px auto}.edit_profile_main_content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:30px}.edit_profile_main_content[_ngcontent-%COMP%]   .input_box[_ngcontent-%COMP%]{background:white;border-radius:8px;margin-bottom:16px;padding:5px 12px;position:relative}.edit_profile_main_content[_ngcontent-%COMP%]   .input_box[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-family:"regular";text-align:start;width:calc(100% - 40px)}.edit_profile_main_content[_ngcontent-%COMP%]   .toggle_btn[_ngcontent-%COMP%]{position:absolute;top:50%;right:12px;transform:translateY(-120%)}.error-message[_ngcontent-%COMP%]{color:red;font-size:.8em}']}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(b)],m.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.ez,d.u5,r.Pc,C]]}),o})()}}]);