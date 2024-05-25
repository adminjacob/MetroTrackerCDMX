"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2366],{2366:(b,m,d)=>{d.r(m),d.d(m,{CameraWeb:()=>f,Camera:()=>h});var l=d(8239),p=d(1278),u=d(7252);class f extends p.Uw{getPhoto(e){var i=this;return(0,l.Z)(function*(){return new Promise(function(){var n=(0,l.Z)(function*(t,a){if(e.webUseInput||e.source===u.oK.Photos)i.fileInputExperience(e,t,a);else if(e.source===u.oK.Prompt){let r=document.querySelector("pwa-action-sheet");r||(r=document.createElement("pwa-action-sheet"),document.body.appendChild(r)),r.header=e.promptLabelHeader||"Photo",r.cancelable=!1,r.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],r.addEventListener("onSelection",function(){var o=(0,l.Z)(function*(c){0===c.detail?i.fileInputExperience(e,t,a):i.cameraExperience(e,t,a)});return function(c){return o.apply(this,arguments)}}())}else i.cameraExperience(e,t,a)});return function(t,a){return n.apply(this,arguments)}}())})()}pickImages(e){var i=this;return(0,l.Z)(function*(){return new Promise(function(){var n=(0,l.Z)(function*(t,a){i.multipleFileInputExperience(t,a)});return function(t,a){return n.apply(this,arguments)}}())})()}cameraExperience(e,i,n){var t=this;return(0,l.Z)(function*(){if(customElements.get("pwa-camera-modal")){const a=document.createElement("pwa-camera-modal");a.facingMode=e.direction===u.GW.Front?"user":"environment",document.body.appendChild(a);try{yield a.componentOnReady(),a.addEventListener("onPhoto",function(){var r=(0,l.Z)(function*(o){const c=o.detail;null===c?n(new p.xz("User cancelled photos app")):c instanceof Error?n(c):i(yield t._getCameraPhoto(c,e)),a.dismiss(),document.body.removeChild(a)});return function(o){return r.apply(this,arguments)}}()),a.present()}catch{t.fileInputExperience(e,i,n)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),t.fileInputExperience(e,i,n)})()}fileInputExperience(e,i,n){let t=document.querySelector("#_capacitor-camera-input");const a=()=>{var r;null===(r=t.parentNode)||void 0===r||r.removeChild(t)};t||(t=document.createElement("input"),t.id="_capacitor-camera-input",t.type="file",t.hidden=!0,document.body.appendChild(t),t.addEventListener("change",r=>{const o=t.files[0];let c="jpeg";if("image/png"===o.type?c="png":"image/gif"===o.type&&(c="gif"),"dataUrl"===e.resultType||"base64"===e.resultType){const s=new FileReader;s.addEventListener("load",()=>{if("dataUrl"===e.resultType)i({dataUrl:s.result,format:c});else if("base64"===e.resultType){const _=s.result.split(",")[1];i({base64String:_,format:c})}a()}),s.readAsDataURL(o)}else i({webPath:URL.createObjectURL(o),format:c}),a()}),t.addEventListener("cancel",r=>{n(new p.xz("User cancelled photos app")),a()})),t.accept="image/*",t.capture=!0,e.source===u.oK.Photos||e.source===u.oK.Prompt?t.removeAttribute("capture"):e.direction===u.GW.Front?t.capture="user":e.direction===u.GW.Rear&&(t.capture="environment"),t.click()}multipleFileInputExperience(e,i){let n=document.querySelector("#_capacitor-camera-input-multiple");const t=()=>{var a;null===(a=n.parentNode)||void 0===a||a.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input-multiple",n.type="file",n.hidden=!0,n.multiple=!0,document.body.appendChild(n),n.addEventListener("change",a=>{const r=[];for(let o=0;o<n.files.length;o++){const c=n.files[o];let s="jpeg";"image/png"===c.type?s="png":"image/gif"===c.type&&(s="gif"),r.push({webPath:URL.createObjectURL(c),format:s})}e({photos:r}),t()}),n.addEventListener("cancel",a=>{i(new p.xz("User cancelled photos app")),t()})),n.accept="image/*",n.click()}_getCameraPhoto(e,i){return new Promise((n,t)=>{const a=new FileReader,r=e.type.split("/")[1];"uri"===i.resultType?n({webPath:URL.createObjectURL(e),format:r,saved:!1}):(a.readAsDataURL(e),a.onloadend=()=>{const o=a.result;n("dataUrl"===i.resultType?{dataUrl:o,format:r,saved:!1}:{base64String:o.split(",")[1],format:r,saved:!1})},a.onerror=o=>{t(o)})})}checkPermissions(){var e=this;return(0,l.Z)(function*(){if("undefined"==typeof navigator||!navigator.permissions)throw e.unavailable("Permissions API not available in this browser");try{return{camera:(yield window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw e.unavailable("Camera permissions are not available in this browser")}})()}requestPermissions(){var e=this;return(0,l.Z)(function*(){throw e.unimplemented("Not implemented on web.")})()}pickLimitedLibraryPhotos(){var e=this;return(0,l.Z)(function*(){throw e.unavailable("Not implemented on web.")})()}getLimitedLibraryPhotos(){var e=this;return(0,l.Z)(function*(){throw e.unavailable("Not implemented on web.")})()}}const h=new f}}]);