function Holiday(destination,days){
    this.destination=destination;
    this.days=days;
}
Holiday.prototype.info=function(){
    console.log(this.destination+"|"+this.days+"days");
}
var nepal=new Holiday("nepal",20);

console.log(nepal.info());