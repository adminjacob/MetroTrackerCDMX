import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  id:string="";
  correo:string="";
  fechaDeNacimiento:string="";
  genero:string="";
  nombreCompleto:string="";
  imagenPerfil:string="";

  viewPassword: boolean = false;

  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/])[A-Za-z\d!@#$%^&*()_\-+=\[\]{}|\\:;"'<>,.?/]{8,}$/;

  updatedUser: any = {
    nombreCompleto: '',
    contrasenia: '',
  };

  submitAttempted: boolean = false;
  password:string="";
  confirmPassword: string="";
  passwordsDontMatch: boolean = false;

  constructor(private actionSheetCtrl: ActionSheetController, 
    private navCtrl: NavController, 
    private userService: UserService) { 
  }

  ngOnInit() {
    const encryptedId=localStorage.getItem('id');
    this.id=this.userService.decrypt(encryptedId);
    this.getInformation();
  }

  getInformation(){
    this.userService.getUser(this.id).subscribe((result:any)=>{
      this.correo=result.correo;
      this.fechaDeNacimiento=result.fechaDeNacimiento;
      this.genero=result.genero;
      this.nombreCompleto=result.nombreCompleto;
      this.imagenPerfil=result.imagenPerfil;
    });
  }

  changeType() {
    this.viewPassword = !this.viewPassword;
  }

  goBack(){
    this.navCtrl.back();
  }

  updateUser(form: NgForm) {
    this.submitAttempted = true;

    if (this.password !== this.confirmPassword) {
      this.passwordsDontMatch = true;
      return;
    }

    this.passwordsDontMatch = false;

    if (form.valid) {

      this.updatedUser.nombreCompleto=this.nombreCompleto;
      this.updatedUser.contrasenia=this.password;

      console.log(this.id);

      this.userService.updateUser(this.id,this.updatedUser).subscribe(result=>{
        console.log(result);
      });
    }

    
  }

  async getImage() {
    const buttons = [
      {
        text: 'Tomar foto',
        icon: 'camera',
        handler: () => {
          this.takePicture(CameraSource.Camera);
        }
      },
      {
        text: 'Galería',
        icon: 'image',
        handler: () => {
          this.takePicture(CameraSource.Photos);
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccionar Avatar',
      mode: 'md',
      buttons
    });
    await actionSheet.present();
  }

  async takePicture(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: source // CameraSource.Camera para cámara o CameraSource.Photos para galería
    });
  
    // La imagen está disponible en image.webPath
    var imageUrl = image.webPath;

    fetch(imageUrl).then(res => res.blob()).then(blob => {
      const file = new File([blob], "filename.jpeg", { type: "image/jpeg" });
      this.userService.updateProfilePicture(this.id, file).subscribe(result=>{

        if(result==="Imagen de perfil actualizada de forma correcta"){
          alert("Imagen de perfil actualizada de forma correcta");
          this.getInformation();
        }else{
          alert("Error al actualizar la imagen de perfil");
        }
      });
    });
  
  }

}
