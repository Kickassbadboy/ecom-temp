import { Component, OnInit, TemplateRef } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-page-upload',
  templateUrl: './page-upload.component.html',
  styleUrls: ['./page-upload.component.scss']
})
export class PageUploadComponent implements OnInit {


  
  imageChangedEvent: any = '';
  croppedImage: any = './assets/images/avatars/avatar-3.jpg';


  croppedImage1: any = './assets/images/avatars/avatar-1.jpg';
  

//profile
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}

imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}

imageCropped1(event: ImageCroppedEvent) {
  this.croppedImage1 = event.base64;
}


imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}

  constructor() { }

  ngOnInit(): void {
  }
  
}
