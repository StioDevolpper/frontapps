import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {
    nom: "khaled",
    email:"klod@gmaoil.com",
    tel:12345
  }

  comments = [
    {date: new Date(),message:"AA"},
    {date: new Date(),message:"BB"},
    {date: new Date(),message:"CC"},
  ];

  commentaire={date:null,message:""};

  constructor() { }

  ngOnInit() {
  }

}
