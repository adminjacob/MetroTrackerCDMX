"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1860],{1860:(b,g,o)=>{o.r(g),o.d(g,{ProfilePageModule:()=>h});var s=o(6019),m=o(9010),r=o(6371),c=o(8725),d=o(8239);const f=(0,o(1278).fo)("Browser",{web:()=>o.e(3289).then(o.bind(o,3289)).then(e=>new e.BrowserWeb)});var n=o(865),u=o(7524);const P=[{path:"",component:(()=>{class e{constructor(t,i,l){this.navCtrl=t,this.router=i,this.userService=l,this.id="",this.correo="",this.fechaDeNacimiento="",this.genero="",this.nombreCompleto=""}ngOnInit(){const t=localStorage.getItem("id");this.id=this.userService.decrypt(t),this.getInformation()}getInformation(){this.userService.getUser(this.id).subscribe(t=>{this.correo=t.correo,this.fechaDeNacimiento=t.fechaDeNacimiento,this.genero=t.genero,this.nombreCompleto=t.nombreCompleto,this.imagenPerfil=t.imagenPerfil})}updateInfo(){this.router.navigate(["edit-profile"])}irACalificaExperiencia(){window.open("https://forms.gle/6UDQMrpLYgTXBAzs9","_blank")}abrirPDF(){return(0,d.Z)(function*(){yield f.open({url:"../assets/pdf/tyc.pdf"})})()}logout(){localStorage.clear(),this.navCtrl.navigateRoot(["/intro"])}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.SH),n.Y36(c.F0),n.Y36(u.K))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile"]],decls:28,vars:4,consts:[[1,"main_content_div"],[1,"shadow_card","card_box",3,"click"],[1,"user_image","bg_image"],[1,"name_lbl"],[1,"email_lbl"],["lines","none","detail","",1,"ion-activatable","ripple-parent",3,"click"],["name","person-circle-outline","slot","start"],["type","unbounded"],["name","star-outline","slot","start"],["name","document-attach-outline","slot","start"],["name","power-outline","slot","start"]],template:function(t,i){1&t&&(n.TgZ(0,"ion-content"),n.TgZ(1,"div",0),n.TgZ(2,"div",1),n.NdJ("click",function(){return i.updateInfo()}),n._UZ(3,"div",2),n.TgZ(4,"ion-label",3),n._uU(5),n.qZA(),n.TgZ(6,"ion-label",4),n._uU(7),n.qZA(),n.qZA(),n.TgZ(8,"ion-item",5),n.NdJ("click",function(){return i.updateInfo()}),n._UZ(9,"ion-icon",6),n.TgZ(10,"ion-label"),n._uU(11," Actualizar informaci\xf3n "),n.qZA(),n._UZ(12,"ion-ripple-effect",7),n.qZA(),n.TgZ(13,"ion-item",5),n.NdJ("click",function(){return i.irACalificaExperiencia()}),n._UZ(14,"ion-icon",8),n.TgZ(15,"ion-label"),n._uU(16," Califica tu experiencia "),n.qZA(),n._UZ(17,"ion-ripple-effect",7),n.qZA(),n.TgZ(18,"ion-item",5),n.NdJ("click",function(){return i.abrirPDF()}),n._UZ(19,"ion-icon",9),n.TgZ(20,"ion-label"),n._uU(21," Terminos del servicio "),n.qZA(),n._UZ(22,"ion-ripple-effect",7),n.qZA(),n.TgZ(23,"ion-item",5),n.NdJ("click",function(){return i.logout()}),n._UZ(24,"ion-icon",10),n.TgZ(25,"ion-label"),n._uU(26," Cerrar sesi\xf3n "),n.qZA(),n._UZ(27,"ion-ripple-effect",7),n.qZA(),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.Udp("background-image","url("+(i.imagenPerfil?i.imagenPerfil:"assets/imgs/hombre.png")+")"),n.xp6(2),n.hij(" ",i.nombreCompleto," "),n.xp6(2),n.hij(" ",i.correo," "))},directives:[r.W2,r.Q$,r.Ie,r.gu,r.H$],styles:['.main_content_div[_ngcontent-%COMP%]{padding:16px}.main_content_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}.main_content_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-family:"semi-bold"}.main_content_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{background:var(--ion-color-primary);color:#fff;font-size:20px;padding:5px;border-radius:50%}.main_content_div[_ngcontent-%COMP%]   .card_box[_ngcontent-%COMP%]{padding:12px;position:relative;margin-top:60px}.main_content_div[_ngcontent-%COMP%]   .card_box[_ngcontent-%COMP%]   .user_image[_ngcontent-%COMP%]{height:90px;width:90px;background-position:center;background-size:cover;background-repeat:no-repeat;border-radius:100%;position:absolute;left:50%;transform:translate(-50%);top:-45px}.main_content_div[_ngcontent-%COMP%]   .card_box[_ngcontent-%COMP%]   .name_lbl[_ngcontent-%COMP%]{font-family:"semi-bold";text-align:center;margin-top:40px}.main_content_div[_ngcontent-%COMP%]   .card_box[_ngcontent-%COMP%]   .email_lbl[_ngcontent-%COMP%]{font-size:14px;color:gray;text-align:center;margin-top:3px}.main_content_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-family:"regular";margin-bottom:16px;--padding-top: 5px;--padding-bottom: 5px;border-radius:10px;--background: white}.main_content_div[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{font-family:"regular"}']}),e})()}];let _=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.Bz.forChild(P)],c.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ez,m.u5,r.Pc,_]]}),e})()}}]);