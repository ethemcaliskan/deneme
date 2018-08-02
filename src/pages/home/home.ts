import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions,CaptureImageOptions } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { Geolocation } from '@ionic-native/geolocation';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { QRScanner,QRScannerStatus } from '@ionic-native/qr-scanner';
//const MEDIA_FILES_KEY = 'mediaFiles';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // mediaFiles = [];
  @ViewChild('myvideo') myVideo: any;
  
  constructor(private barcodeScanner:BarcodeScanner,public navCtrl: NavController,private geolocation:Geolocation,private md:MediaCapture) {}
 public options:any;
 public data:any;
  scan() {
  
this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
        
        console.log(barcodeData.text);
        this.data = barcodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });         

  }

  captureAudio(){
  let  options:CaptureVideoOptions={

    }
this.md.captureVideo(options).then(app=>{this.data=app}).catch(error=>{this.data=error});
  }
 
 
}