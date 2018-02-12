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
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.trips.forEach(trip => {
                    if(trip.name == tripName) {
                        resolve(trip);
                    }
                });
                reject("No trip with name " + tripName);
            }, 2000);
        });
    }
}

class PriceService {
    constructor() {
        this.trips = {'paris' : 100, 'rio-de-janeiro' : 800};
    }
    
    findPriceByTripId(tripId) {
        this.findPriceByTripId
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let price = this.trips[tripId];
                if(price) {
                    resolve(price);
                }
                else {
                    reject("No price found for id " + tripId);
                }
            }, 2000);
        });
    }
}
let tripService = new TripService();
let priceService = new PriceService();
tripService.findByName("Paris")
.then(
    trip => console.log("Trip found : " + trip), 
    error => console.log(error)
);
tripService.findByName("Toulouse")
.then(
    trip => console.log(trip), 
    error => console.log(error)
);
tripService.findByName('Rio de Janeiro')
.then(trip => priceService.findPriceByTripId(trip.id))
.then(price => console.log("Price found :", price))
.catch(error =>  console.log(error));
tripService.findByName('Nantes')
.then(trip => priceService.findPriceByTripId(trip.id))
.then(price => console.log("Price found :", price))
.catch(error => console.log(error));