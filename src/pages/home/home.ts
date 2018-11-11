import { Component } from '@angular/core';
import { NavController, AlertController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
 import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // imageData is a base64 encoded string
     public htmlImageFromCamera: string;

     constructor(public navCtrl: NavController,
       //public toastCtrl: ToastController,
       private camera: Camera,
       private DomSanitizer: DomSanitizer

     ) {

     }

     ngOnInit() {
     }

     takePicture(){
       console.log('take picture');
       let options = {
         quality: 100,
         destinationType: this.camera.DestinationType.DATA_URL,
         encodingType: this.camera.EncodingType.JPEG,
         mediaType: this.camera.MediaType.PICTURE
         //saveToPhotoAlbum: false

       };

       this.camera.getPicture(options)
        .then((imageData)=>{
          console.log('end take picture');
           this.htmlImageFromCamera = "data:image/jpeg;base64," + imageData;
         })
         .catch(err=>{
           console.log(err);
           alert(err);
         })
     }

}
