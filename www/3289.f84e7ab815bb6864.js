"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3289],{3289:(i,o,s)=>{s.r(o),s.d(o,{BrowserWeb:()=>t,Browser:()=>_});var r=s(8239),l=s(1278);class t extends l.Uw{constructor(){super(),this._lastWindow=null}open(e){var n=this;return(0,r.Z)(function*(){n._lastWindow=window.open(e.url,e.windowName||"_blank")})()}close(){var e=this;return(0,r.Z)(function*(){return new Promise((n,a)=>{null!=e._lastWindow?(e._lastWindow.close(),e._lastWindow=null,n()):a("No active window to close!")})})()}}const _=new t}}]);