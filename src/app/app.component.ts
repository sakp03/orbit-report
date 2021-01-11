import { Satellite } from './satellite';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[];
  
  constructor() {
    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
         response.json().then(function(data) {
 
            let fetchedSatellites = data.satellites;
          
            for(let satellite in fetchedSatellites){
               let satellite0 = {
                  name: fetchedSatellites[satellite].name, 
                  type: fetchedSatellites[satellite].type, 
                  launchDate: fetchedSatellites[satellite].launchDate, 
                  orbitType: fetchedSatellites[satellite].orbitType, 
                  operational: fetchedSatellites[satellite].operational
               }
             this.sourceList.push(satellite0);
            }  
                 
            this.displayList = this.sourceList.slice(0);
 
         }.bind(this));

      }.bind(this));
   }

   search(searchTerm: string): void {
      let matchingSatellites: Satellite[] = [];
      searchTerm = searchTerm.toLowerCase();
      for(let i=0; i < this.sourceList.length; i++) {
         let name = this.sourceList[i].name.toLowerCase();
         if (name.indexOf(searchTerm) >= 0) {
            matchingSatellites.push(this.sourceList[i]);
         }
      }
      // assign this.displayList to be the array of matching satellites
      // this will cause Angular to re-make the table, but now only containing matches
      this.displayList = matchingSatellites;
   }
   
}

