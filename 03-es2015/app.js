let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather(favoriteCityId);
console.log(weather);

let { city } = weather;
let { temperature } = weather;
console.log(city);
console.log(temperature);

let [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

class Trip {
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return "Trip [" + this.id + ", " + this.name + ", " + this.imageUrl + ", " + this._price + "]";
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());
parisTrip.price = 100;
console.log(parisTrip.toString());
const defaultTrip = parisTrip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        super.price = 0;
    }

    toString() {
        return "Free" + super.toString();
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nanges.jpg");
console.log(freeTrip.toString());

class TripService {
    constructor() {
        this.trips = new Set()
            .add(new Trip('paris', 'Paris', 'img/paris.jpg'))
            .add(new Trip('nantes', 'Nantes', 'img/nanges.jpg'))
            .add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {
        setTimeout(this.findByName, 2000);
        let trip;
        this.trips.forEach(element => {
            if(element.name == tripName) {
                trip = element;
            }
        });
        return new Promise((resolve, reject) => {
            if(trip){
                resolve(trip);
            }
            else {
                reject("No trip with name " + tripName);
            }
        });
    }
}

class PriceService {
    constructor() {
        this.trips = new Map().set('paris', 100).set('rio-de-janeiro',800);
    }
    
    findPriceByTripId(tripId) {
        setTimeout(this.findPriceByTripId, 2000);
        let price = this.trips.get(tripId);
        return new Promise((resolve, reject) => {
            if(price) {
                resolve(price);
            }
            else {
                reject("No price found for id " + tripId);
            }
        });
    }
}
let tripService = new TripService();
let priceService = new PriceService();
tripService.findByName("Paris")
.then(trip => console.log("Trip found : " + trip), error => console.log(error));
tripService.findByName("Toulouse")
.then(trip => console.log(trip), error => console.log(error));
tripService.findByName('Rio de Janeiro')
.then(trip => priceService.findPriceByTripId(trip.id))
.then(price => console.log(price))
.catch(error =>  console.log(error));
tripService.findByName('Nantes')
.then(trip => priceService.findPriceByTripId(trip.id))
.then(price => console.log(price))
.catch(error => console.log(error));