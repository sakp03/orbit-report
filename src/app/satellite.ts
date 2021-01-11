export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    
    // This commented section has been replaced with a for loop in the orbit-list html:
    // constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
    //     this.name = name;
    //     this.type = type;
    //     this.launchDate = launchDate;
    //     this.orbitType = orbitType;
    //     this.operational = operational;
    // }
   
    shouldShowWarning(): boolean {
        if (this.type.toLowerCase() === 'space debris'){
            return true;
        } else {
            return false;
        }
    }

}
