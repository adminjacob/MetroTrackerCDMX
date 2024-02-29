import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.page.html',
  styleUrls: ['./comunidad.page.scss'],
})
export class ComunidadPage implements OnInit {

  reportes:any = [
  ];

  idUser:string="";

  constructor(private router: Router, private reporteService: ReportService) { }

  ngOnInit() {
    this.idUser=localStorage.getItem('id');
    this.cargarReportes();
  }

  cargarReportes() {
    this.reporteService.obtenerReportes().subscribe(result=>{
      this.reportes=result;
    });
  }

  nuevoReporte() {
    this.router.navigate(['generar-reporte']);
  }

  likeReporte(reportId:string){

    this.reporteService.likeReporte(reportId,this.idUser).subscribe(result=>{
      if(result==="Like agregado correctamente."){
        const report = this.reportes.find(r => r.id === reportId);

        if (report) {
          report.likes += 1; 
        }
      }
    });
  }

  dislikeReporte(reportId:string){

    this.reporteService.dislikeReporte(reportId,this.idUser).subscribe(result=>{
      if(result==="Dislike agregado correctamente."){
        const report = this.reportes.find(r => r.id === reportId);

        console.log(report);

        if (report) {
          report.dislikes += 1; 
        }
      }
    });
  }

  onSegmentChange(event) {
    if (event.detail.value === 'linea') {
      //navegar a lineas
    }
  }

}
