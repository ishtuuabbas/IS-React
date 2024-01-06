//Super class
class Holiday{
    constructor(destination,day){
        this.destination=destination;
        this.day=day;
    }
    info(){
        console.log(`${this.destination} will take on ${this.day} December `);
    }
}
const trip=new Holiday("Chrismis day ,china",24);
trip.info();

//Sub class
class Expedition extends Holiday{
    constructor(destination,day,gear){
        super(destination,day);
        this.gear=gear;
    }
info(){
    super.info;
    console.log(`Bring Yours ${this.gear.join("and your")} `);
}
 }
 const tripwithGear= new Expedition("Everest",25,["Sunglasses,flags,cameras"]);
tripwithGear.info();