import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { CommfuncProvider } from '../../providers/commfunc/commfunc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   dacastJson:any;
   apiKey :string ='';
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public loadingCtrl: LoadingController,
              public myFunc: CommfuncProvider
    )
    {   
      this.apiKey = this.myFunc.apiKey;
  } 

    ionViewDidLoad(){
      this.getDacast();      
    }

    getDacast() {
      let data: Observable<any>;
      let url = 'https://api.dacast.com/v2/vod?apikey=' + this.apiKey;
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
