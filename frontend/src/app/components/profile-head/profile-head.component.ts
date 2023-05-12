import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-profile-head',
  templateUrl: './profile-head.component.html',
  styleUrls: ['./profile-head.component.css']
})
export class ProfileHeadComponent implements OnInit {

  persona:Persona = new Persona("","","");
  constructor(public personaService:PersonaService){}
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{
      this.persona=data
    })
  }
}
