"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7613],{7613:(C,m,r)=>{r.r(m),r.d(m,{AfluenciaDetailPageModule:()=>P});var l=r(6019),s=r(9010),i=r(2651),g=r(790),a=r(865);function c(n,t){if(1&n&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-thumbnail",0),a._UZ(2,"img",8),a.qZA(),a.TgZ(3,"div",9),a._UZ(4,"ion-progress-bar",10),a.TgZ(5,"div",11),a._uU(6),a.qZA(),a.qZA(),a.qZA()),2&n){const e=t.$implicit,o=a.oxw(3);a.xp6(2),a.Q6J("src",e.imagen,a.LSH),a.xp6(1),a.Q6J("ngClass",o.getProgressBarClass(e.afluencia)),a.xp6(1),a.Q6J("value",e.afluencia/100)("ngClass",o.getProgressBarClass(e.afluencia)),a.xp6(2),a.AsE("",o.getProgressLabel(e.afluencia)," (",e.afluencia,"%)")}}function p(n,t){if(1&n&&(a.TgZ(0,"ion-list"),a.YNc(1,c,7,6,"ion-item",7),a.qZA()),2&n){const e=a.oxw(2);a.xp6(1),a.Q6J("ngForOf",e.estacionesObservatorio)}}function u(n,t){if(1&n&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-thumbnail",0),a._UZ(2,"img",8),a.qZA(),a.TgZ(3,"div",9),a._UZ(4,"ion-progress-bar",10),a.TgZ(5,"div",11),a._uU(6),a.qZA(),a.qZA(),a.qZA()),2&n){const e=t.$implicit,o=a.oxw(3);a.xp6(2),a.Q6J("src",e.imagen,a.LSH),a.xp6(1),a.Q6J("ngClass",o.getProgressBarClass(e.afluencia)),a.xp6(1),a.Q6J("value",e.afluencia/100)("ngClass",o.getProgressBarClass(e.afluencia)),a.xp6(2),a.AsE("",o.getProgressLabel(e.afluencia)," (",e.afluencia,"%)")}}function d(n,t){if(1&n&&(a.TgZ(0,"ion-list"),a.YNc(1,u,7,6,"ion-item",7),a.qZA()),2&n){const e=a.oxw(2);a.xp6(1),a.Q6J("ngForOf",e.estacionesPantitlan)}}function f(n,t){if(1&n&&(a.ynx(0),a.YNc(1,p,2,1,"ion-list",6),a.YNc(2,d,2,1,"ion-list",6),a.BQk()),2&n){const e=a.oxw();a.xp6(1),a.Q6J("ngIf","Observatorio"===e.segment),a.xp6(1),a.Q6J("ngIf","Pantitl\xe1n"===e.segment)}}function b(n,t){if(1&n&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-thumbnail",0),a._UZ(2,"img",8),a.qZA(),a._UZ(3,"div",12),a.qZA()),2&n){const e=t.$implicit,o=a.oxw(3);a.xp6(2),a.Q6J("src",e.imagen,a.LSH),a.xp6(1),a.Q6J("ngClass",o.getSemaforoColor(e.afluencia))}}function x(n,t){if(1&n&&(a.TgZ(0,"ion-list"),a.YNc(1,b,4,2,"ion-item",7),a.qZA()),2&n){const e=a.oxw(2);a.xp6(1),a.Q6J("ngForOf",e.estacionesObservatorio)}}function w(n,t){if(1&n&&(a.TgZ(0,"ion-item"),a.TgZ(1,"ion-thumbnail",0),a._UZ(2,"img",8),a.qZA(),a._UZ(3,"div",12),a.qZA()),2&n){const e=t.$implicit,o=a.oxw(3);a.xp6(2),a.Q6J("src",e.imagen,a.LSH),a.xp6(1),a.Q6J("ngClass",o.getSemaforoColor(e.afluencia))}}function _(n,t){if(1&n&&(a.TgZ(0,"ion-list"),a.YNc(1,w,4,2,"ion-item",7),a.qZA()),2&n){const e=a.oxw(2);a.xp6(1),a.Q6J("ngForOf",e.estacionesPantitlan)}}function h(n,t){if(1&n&&(a.ynx(0),a.YNc(1,x,2,1,"ion-list",6),a.YNc(2,_,2,1,"ion-list",6),a.BQk()),2&n){const e=a.oxw();a.xp6(1),a.Q6J("ngIf","Observatorio"===e.segment),a.xp6(1),a.Q6J("ngIf","Pantitl\xe1n"===e.segment)}}const A=[{path:"",component:(()=>{class n{constructor(e){this.route=e,this.linea="1",this.segment="",this.ultimoTiempoActualizacion=new Date,this.estacionesPantitlan=[{nombre:"Observatorio",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/observatorio.png",afluencia:25},{nombre:"Tacubaya",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/tacubaya.png",afluencia:40},{nombre:"Juanacatl\xe1n",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/juanacatlan.png",afluencia:30},{nombre:"Chapultepec",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/chapultepec.png",afluencia:55},{nombre:"Sevilla",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sevilla.png",afluencia:10},{nombre:"Insurgentes",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/insurgentes.png",afluencia:45},{nombre:"Cuauht\xe9moc",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/cuauhtemoc.png",afluencia:70},{nombre:"Balderas",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balderas.png",afluencia:85},{nombre:"Salto del Agua",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/saltodelagua.png",afluencia:90},{nombre:"Isabel la Cat\xf3lica",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/isabellacatolica.png",afluencia:75},{nombre:"Pino Su\xe1rez",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pinosuarez.png",afluencia:80},{nombre:"Merced",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/merced.png",afluencia:65},{nombre:"Candelaria",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/candelaria.png",afluencia:50},{nombre:"San L\xe1zaro",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sanlazaro.png",afluencia:95},{nombre:"Moctezuma",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/moctezuma.png",afluencia:100},{nombre:"Balbuena",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balbuena.png",afluencia:45},{nombre:"Boulevard Puerto A\xe9reo",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/boulevard.png",afluencia:35},{nombre:"G\xf3mez Far\xedas",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/gomezfarias.png",afluencia:40},{nombre:"Zaragoza",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/zaragoza.png",afluencia:55},{nombre:"Pantitl\xe1n",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pantitlan.png",afluencia:10}],this.estacionesObservatorio=[{nombre:"Pantitl\xe1n",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pantitlan.png",afluencia:20},{nombre:"Zaragoza",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/zaragoza.png",afluencia:45},{nombre:"G\xf3mez Far\xedas",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/gomezfarias.png",afluencia:20},{nombre:"Boulevard Puerto A\xe9reo",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/boulevard.png",afluencia:85},{nombre:"Balbuena",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balbuena.png",afluencia:100},{nombre:"Moctezuma",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/moctezuma.png",afluencia:100},{nombre:"San L\xe1zaro",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sanlazaro.png",afluencia:75},{nombre:"Candelaria",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/candelaria.png",afluencia:30},{nombre:"Merced",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/merced.png",afluencia:40},{nombre:"Pino Su\xe1rez",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/pinosuarez.png",afluencia:50},{nombre:"Isabel la Cat\xf3lica",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/isabellacatolica.png",afluencia:40},{nombre:"Salto del Agua",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/saltodelagua.png",afluencia:10},{nombre:"Balderas",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/balderas.png",afluencia:60},{nombre:"Cuauht\xe9moc",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/cuauhtemoc.png",afluencia:10},{nombre:"Insurgentes",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/insurgentes.png",afluencia:65},{nombre:"Sevilla",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/sevilla.png",afluencia:30},{nombre:"Chapultepec",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/chapultepec.png",afluencia:70},{nombre:"Juanacatl\xe1n",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/juanacatlan.png",afluencia:90},{nombre:"Tacubaya",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/tacubaya.png",afluencia:100},{nombre:"Observatorio",imagen:"https://www.metro.cdmx.gob.mx/storage/app/media/lared/linea1/observatorio.png",afluencia:25}],this.configMode="basica",this.semaforoConfig=[{max:33,color:"verde"},{max:66,color:"amarillo"},{max:100,color:"rojo"}]}ngOnInit(){this.segment=this.route.snapshot.queryParamMap.get("direccion"),console.log(this.segment),this.actualizarDatos()}getProgressBarClass(e){return e<=20?"progress-muy-baja":e<=40?"progress-baja":e<=60?"progress-moderada":e<=80?"progress-alta":"progress-maxima"}getProgressLabel(e){return e<=20?"Muy Baja":e<=40?"Baja":e<=60?"Moderada":e<=80?"Alta":"M\xe1xima"}getSemaforoColor(e){for(let o of this.semaforoConfig)if(e<=o.max)return o.color;return"rojo"}toggleConfigMode(){this.configMode="basica"===this.configMode?"detallada":"basica"}actualizarDatos(){this.ultimoTiempoActualizacion=new Date}}return n.\u0275fac=function(e){return new(e||n)(a.Y36(g.gz))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-afluencia-detail"]],decls:16,vars:7,consts:[["slot","start"],["defaultHref","/tabs/tab1"],["slot","end"],[3,"click"],["name","settings-outline"],["size","small",2,"text-align","center"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"src"],[1,"progress-container",3,"ngClass"],[3,"value","ngClass"],[1,"progress-label"],[1,"semaforo",3,"ngClass"]],template:function(e,o){1&e&&(a.TgZ(0,"ion-header"),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-buttons",0),a._UZ(3,"ion-back-button",1),a.qZA(),a.TgZ(4,"ion-title"),a._uU(5),a.qZA(),a.TgZ(6,"ion-buttons",2),a.TgZ(7,"ion-button",3),a.NdJ("click",function(){return o.toggleConfigMode()}),a._UZ(8,"ion-icon",4),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"ion-toolbar"),a.TgZ(10,"ion-title",5),a._uU(11),a.ALo(12,"date"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(13,"ion-content"),a.YNc(14,f,3,2,"ng-container",6),a.YNc(15,h,3,2,"ng-container",6),a.qZA()),2&e&&(a.xp6(5),a.hij("Direccion ",o.segment,""),a.xp6(6),a.hij(" \xdaltima actualizaci\xf3n: ",a.xi3(12,4,o.ultimoTiempoActualizacion,"dd/MM/yyyy HH:mm")," "),a.xp6(3),a.Q6J("ngIf","detallada"===o.configMode),a.xp6(1),a.Q6J("ngIf","basica"===o.configMode))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.YG,i.gu,i.W2,l.O5,i.q_,l.sg,i.Ie,i.Bs,l.mk,i.X7],pipes:[l.uU],styles:['@charset "UTF-8";.progress-muy-baja[_ngcontent-%COMP%]{--progress-background: #ADFF2F}.progress-baja[_ngcontent-%COMP%]{--progress-background: green}.progress-moderada[_ngcontent-%COMP%]{--progress-background: #FFD700}.progress-alta[_ngcontent-%COMP%]{--progress-background: #FF4500}.progress-maxima[_ngcontent-%COMP%]{--progress-background: red}ion-thumbnail[_ngcontent-%COMP%]{--size: auto;width:6rem;height:6rem}.progress-label[_ngcontent-%COMP%]{text-align:center}.progress-container[_ngcontent-%COMP%]{width:100%}ion-segment[_ngcontent-%COMP%]{--background: #db54a3}ion-segment[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:#fff!important}.semaforo[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:bold;margin:0 auto}.verde[_ngcontent-%COMP%]{background-color:green}.amarillo[_ngcontent-%COMP%]{background-color:#ff0}.rojo[_ngcontent-%COMP%]{background-color:red}']}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[g.Bz.forChild(A)],g.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[l.ez,s.u5,i.Pc,Z]]}),n})()}}]);