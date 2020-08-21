var car={
    madein:"india",
    price:299929,
    company:"tata",
    mfd:2020,
    purchased:true,
    carlist: [],
    bycar: function(carname){
        this.carlist.push(carname);
    },
    carcount: function(){
        return `${this.company} cars made total of ${this.carlist.length} cars`;
    }

};
car.bycar("brezza");
console.log(car.carcount());
car.bycar("nano");
console.log(car.carcount());
