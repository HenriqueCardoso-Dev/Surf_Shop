import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides : IonSlides;

  //recive login data
  userLogin = {
    email:'',
    password: ''
  };


  //recive register data
  userRegister = {
    name: '',
    email: '',
    password: ''
  };

  public wavesPosition: number = 0;
  public wavesDifference: number = 80;

  constructor(public keyboard : Keyboard) { 



  }

  ngOnInit() {
  }

  segmentChanged(event: any) {

    if (event.detail.value === "login") {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }

}
