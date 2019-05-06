import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   dacastJson:any;
  
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public loadingCtrl: LoadingController,
    )
    {   

  } 

    ionViewDidLoad(){
      let data: Observable<any>;
      let url = 'https://api.dacast.com/v2/vod?apikey=111336_9e1bb6ae12283a782109';
      let loader = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      data = this.http.get(url);
      loader.present().then(() => {
        data.subscribe(result => {
          //console.log(result.data.reverse());
          this.dacastJson = result.data.reverse();          
          //console.log(result.data.reverse()[0].share_code.facebook);
          loader.dismiss();
        }, error => {
          console.log(error);
          loader.dismiss();
        });
      });

      
    }
    

}
