"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6836],{6836:(q,f,l)=>{l.r(f),l.d(f,{ComunidadPageModule:()=>y});var g=l(6019),_=l(9010),s=l(6371),p=l(8725),m=l(8239),h=l(8735),Z=l(9241),e=l(865),x=l(1681),k=l(8526),v=l(7524);function U(t,c){if(1&t){const i=e.EpF();e.TgZ(0,"ion-fab",5),e.TgZ(1,"ion-fab-button",1),e.NdJ("click",function(){return e.CHM(i),e.oxw().nuevoReporte()}),e._UZ(2,"ion-icon",6),e.qZA(),e.qZA()}}function T(t,c){if(1&t&&e._UZ(0,"img",13),2&t){const i=e.oxw().$implicit;e.Q6J("src",i.imagenPerfil,e.LSH)}}function A(t,c){1&t&&e._UZ(0,"img",14)}function C(t,c){if(1&t){const i=e.EpF();e.TgZ(0,"img",15),e.NdJ("click",function(){e.CHM(i);const n=e.oxw().$implicit;return e.oxw().openImageFullScreen(n.imagen)}),e.qZA()}if(2&t){const i=e.oxw().$implicit;e.Q6J("src",i.imagen,e.LSH)}}function P(t,c){if(1&t){const i=e.EpF();e.ynx(0),e.TgZ(1,"ion-button",16),e.NdJ("click",function(){e.CHM(i);const n=e.oxw().$implicit;return e.oxw().likeReporte(n.id)}),e._UZ(2,"ion-icon",17),e.TgZ(3,"span",18),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"ion-button",16),e.NdJ("click",function(){e.CHM(i);const n=e.oxw().$implicit;return e.oxw().dislikeReporte(n.id)}),e._UZ(6,"ion-icon",19),e.TgZ(7,"span",18),e._uU(8),e.qZA(),e.qZA(),e.BQk()}if(2&t){const i=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("color",o.usuarioHaDadoLike(i.id)?"primary":"medium"),e.xp6(3),e.Oqu(i.likes),e.xp6(1),e.Q6J("color",o.usuarioHaDadoDislike(i.id)?"primary":"medium"),e.xp6(3),e.Oqu(i.dislikes)}}function D(t,c){if(1&t&&(e.TgZ(0,"ion-button",20),e._UZ(1,"ion-icon",17),e.TgZ(2,"span",18),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"ion-button",20),e._UZ(5,"ion-icon",19),e.TgZ(6,"span",18),e._uU(7),e.qZA(),e.qZA()),2&t){const i=e.oxw().$implicit;e.xp6(3),e.Oqu(i.likes),e.xp6(4),e.Oqu(i.dislikes)}}function b(t,c){if(1&t&&(e.TgZ(0,"ion-card"),e.TgZ(1,"ion-item"),e.TgZ(2,"ion-avatar",7),e.YNc(3,T,1,1,"img",8),e.YNc(4,A,1,0,"ng-template",null,9,e.W1O),e.qZA(),e.TgZ(6,"ion-label"),e.TgZ(7,"h2"),e._uU(8),e.qZA(),e.TgZ(9,"p"),e._uU(10),e.ALo(11,"date"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"ion-card-content"),e.TgZ(13,"p"),e._uU(14),e.qZA(),e.TgZ(15,"p"),e._uU(16),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.qZA(),e.TgZ(19,"p"),e._uU(20),e.qZA(),e.TgZ(21,"p"),e._uU(22),e.qZA(),e._UZ(23,"br"),e.YNc(24,C,1,1,"img",10),e.YNc(25,P,9,4,"ng-container",11),e.YNc(26,D,8,2,"ng-template",null,12,e.W1O),e.qZA(),e.qZA()),2&t){const i=c.$implicit,o=e.MAs(5),n=e.MAs(27),a=e.oxw();e.xp6(3),e.Q6J("ngIf",i.imagenPerfil)("ngIfElse",o),e.xp6(5),e.Oqu(i.autor),e.xp6(2),e.Oqu(e.xi3(11,12,i.fechaHora,"dd/MM/yyyy h:mm a")),e.xp6(4),e.Oqu(i.linea),e.xp6(2),e.hij("Estaci\xf3n: ",i.estacion,""),e.xp6(2),e.hij("Direcci\xf3n: ",i.direccion,""),e.xp6(2),e.hij("Reporte: ",i.titulo,""),e.xp6(2),e.hij("Descripcion: ",i.descripcion,""),e.xp6(2),e.Q6J("ngIf",i.imagen),e.xp6(1),e.Q6J("ngIf",a.isUserLoggedIn)("ngIfElse",n)}}const F=[{path:"",component:(()=>{class t{constructor(i,o,n,a,r,u){this.router=i,this.reporteService=o,this.modalController=n,this.loadingController=a,this.datosFiltroService=r,this.userService=u,this.reportes=[],this.idUser="",this.filtro={},this.previousUrl="",this.router.events.pipe((0,h.h)(d=>d instanceof p.m2)).subscribe(d=>{this.handleNavigation(d.url)}),this.datosFiltroService.isFiltroAplicado().subscribe(d=>{d&&(this.cargarReportes(this.datosFiltroService.getDatosFiltro()),this.datosFiltroService.resetFiltroAplicado())})}handleNavigation(i){this.previousUrl=i}ngOnInit(){const i=localStorage.getItem("intro");if(this.isUserLoggedIn=!!i&&"null"!==i,this.isUserLoggedIn){const o=localStorage.getItem("id");this.idUser=this.userService.decrypt(o)}this.cargarReportes(),this.datosFiltroService.reporteGenerado$.subscribe(o=>{o&&(this.cargarReportes(),this.datosFiltroService.resetReporteGenerado())})}cargarReportes(i={}){var o=this;return(0,m.Z)(function*(){const n=yield o.loadingController.create({message:"Cargando reportes..."});yield n.present(),o.reporteService.obtenerReportes(i).subscribe(function(){var a=(0,m.Z)(function*(r){o.reportes=r,yield n.dismiss()});return function(r){return a.apply(this,arguments)}}(),function(){var a=(0,m.Z)(function*(r){console.error("Error al cargar los reportes: ",r),yield n.dismiss()});return function(r){return a.apply(this,arguments)}}())})()}navegarAFiltroReportes(){this.router.navigate(["/filtro-reportes"])}openImageFullScreen(i){var o=this;return(0,m.Z)(function*(){return yield(yield o.modalController.create({component:Z.U,componentProps:{imageUrl:i}})).present()})()}nuevoReporte(){this.router.navigate(["generar-reporte"])}likeReporte(i){this.reporteService.likeReporte(i,this.idUser).subscribe(o=>{this.actualizarEstadoReporte(i,!0,o.includes("agregado"))})}dislikeReporte(i){this.reporteService.dislikeReporte(i,this.idUser).subscribe(o=>{this.actualizarEstadoReporte(i,!1,o.includes("agregado"))})}actualizarEstadoReporte(i,o,n){const a=this.reportes.findIndex(r=>r.id===i);if(-1!==a){const r=this.reportes[a];o?n?(r.likes++,r.usuariosQueDieronLike.push(this.idUser),r.usuariosQueDieronDislike.includes(this.idUser)&&(r.dislikes--,r.usuariosQueDieronDislike=r.usuariosQueDieronDislike.filter(u=>u!==this.idUser))):(r.likes--,r.usuariosQueDieronLike=r.usuariosQueDieronLike.filter(u=>u!==this.idUser)):n?(r.dislikes++,r.usuariosQueDieronDislike.push(this.idUser),r.usuariosQueDieronLike.includes(this.idUser)&&(r.likes--,r.usuariosQueDieronLike=r.usuariosQueDieronLike.filter(u=>u!==this.idUser))):(r.dislikes--,r.usuariosQueDieronDislike=r.usuariosQueDieronDislike.filter(u=>u!==this.idUser)),this.reportes=[...this.reportes.slice(0,a),r,...this.reportes.slice(a+1)]}}usuarioHaDadoLike(i){const o=this.reportes.find(n=>n.id===i);return o&&o.usuariosQueDieronLike.includes(this.idUser)}usuarioHaDadoDislike(i){const o=this.reportes.find(n=>n.id===i);return o&&o.usuariosQueDieronDislike.includes(this.idUser)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(p.F0),e.Y36(x.r),e.Y36(s.IN),e.Y36(s.HT),e.Y36(k.z),e.Y36(v.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-comunidad"]],decls:11,vars:2,consts:[["slot","end"],[3,"click"],["name","filter"],["vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["name","add"],["slot","start"],["class","user-image","alt","Foto de perfil",3,"src",4,"ngIf","ngIfElse"],["defaultImage",""],["alt","Imagen del reporte",3,"src","click",4,"ngIf"],[4,"ngIf","ngIfElse"],["notLoggedIn",""],["alt","Foto de perfil",1,"user-image",3,"src"],["src","assets/imgs/hombre.png","alt","Foto de perfil predeterminada",1,"user-image"],["alt","Imagen del reporte",3,"src","click"],["fill","clear",3,"color","click"],["slot","icon-only","name","heart"],[1,"like-dislike-count"],["slot","icon-only","name","heart-dislike"],["fill","clear"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-header"),e.TgZ(1,"ion-toolbar"),e.TgZ(2,"ion-title"),e._uU(3,"Comunidad"),e.qZA(),e.TgZ(4,"ion-buttons",0),e.TgZ(5,"ion-button",1),e.NdJ("click",function(){return o.navegarAFiltroReportes()}),e._UZ(6,"ion-icon",2),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"ion-content"),e.YNc(8,U,3,0,"ion-fab",3),e.TgZ(9,"ion-list"),e.YNc(10,b,28,15,"ion-card",4),e.qZA(),e.qZA()),2&i&&(e.xp6(8),e.Q6J("ngIf",o.isUserLoggedIn),e.xp6(2),e.Q6J("ngForOf",o.reportes))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.YG,s.gu,s.W2,g.O5,s.q_,g.sg,s.IJ,s.W4,s.PM,s.Ie,s.BJ,s.Q$,s.FN],pipes:[g.uU],styles:[".like-dislike-button[_ngcontent-%COMP%]{display:flex;align-items:center}.like-dislike-count[_ngcontent-%COMP%]{margin-left:5px}"]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.Bz.forChild(F)],p.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,_.u5,s.Pc,I]]}),t})()}}]);