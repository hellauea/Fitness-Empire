export interface Location {
  id: string;
  name: string;
  area: string;
  city: string;
  address: string;
  mapsUrl: string;
  embedUrl: string;
  isComingSoon?: boolean;
}

export const locations: Location[] = [
  {
    id: "nagawara",
    name: "Nagawara",
    area: "Manyata Tech Park",
    city: "Bengaluru",
    address: "123 Manyata Tech Park Road, Nagawara, Bengaluru 560045",
    mapsUrl: "https://maps.app.goo.gl/NsrLEm4ygdEJxZj1A",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9238349210536!2d77.61657757507763!3d13.040519987281213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e51228dd57%3A0x45bc15a57c5dea5b!2sFitness%20Empire-Manyata%20Tech%20(Nagavara)!5e0!3m2!1sen!2sin!4v1767365831442",
  },
  {
    id: "marathahalli",
    name: "Marathahalli",
    area: "Marathahalli",
    city: "Bengaluru",
    address: "456 Outer Ring Road, Marathahalli, Bengaluru 560037",
    mapsUrl: "https://maps.app.goo.gl/gbgwVVS4jgpymQct6",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.334954047331!2d77.69724937512252!3d12.950405587362956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae12354fb53101%3A0xc3115ce25c1cddfc!2sFitness%20Empire!5e0!3m2!1sen!2sin!4v1767366022951",
  },
  {
    id: "brookefield",
    name: "Brookefield",
    area: "AECS Layout",
    city: "Bengaluru",
    address: "789 ITPL Main Road, Brookefield, Bengaluru 560066",
    mapsUrl: "https://maps.app.goo.gl/xuqcDxu8hmEjVZWa8",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.086053323976!2d77.70920967984298!3d12.966345154727568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13d4ac3ef187%3A0xe88a7a0a28983d0f!2sFitness%20Empire-Aecs%20Layout%20(Brookfield)!5e0!3m2!1sen!2sin!4v1767366084814",
  },
  {
    id: "kundalahalli",
    name: "Kundalahalli Signal",
    area: "Kundalahalli",
    city: "Bengaluru",
    address: "321 Kundalahalli Main Road, Bengaluru 560037",
    mapsUrl: "https://maps.app.goo.gl/UVRNokbQb48Yh49K9",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2167979920423!2d77.71166437512252!3d12.95797468735616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae131e23b3a9b5%3A0x25133592ebca9aa7!2sFitness%20Empire-Kundalahalli%20Signal!5e0!3m2!1sen!2sin!4v1767366133793",
  },
  {
    id: "itpl",
    name: "ITPL Road",
    area: "Hoodi",
    city: "Bengaluru",
    address: "654 ITPL Road, Hoodi, Bengaluru 560048",
    mapsUrl: "https://maps.app.goo.gl/LDzk4MwoaMrzWA3ZA",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6889126134906!2d77.71812377512313!3d12.991738187325488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f1c94f3a39d%3A0x14c1aeacfa1f5e2f!2sFitness%20Empire-Hoodi!5e0!3m2!1sen!2sin!4v1767366203567",
  },
  {
    id: "nellore",
    name: "Nellore",
    area: "City Center",
    city: "Andhra Pradesh",
    address: "987 Grand Trunk Road, Nellore, AP 524001",
    mapsUrl: "https://maps.app.goo.gl/KTaFcD5GRbRgSkAYA",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.8719845003275!2d79.9741827751491!3d14.434540186032354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3f94145613d%3A0x9dadb0a99ad6138b!2sFitness%20Empire%20Nellore!5e0!3m2!1sen!2sin!4v1767366240812",
  },
];
