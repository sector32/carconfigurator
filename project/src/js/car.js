/* CarItem classes
   ===============  */

class CarItem {
  constructor (id, price, description) {
    this._id = id;
    this._price = price;
    this._description = description;
  }

  get id() { return this._id; }
  get price() { return this._price; }
  get description() { return this._description; }
};

class Edition extends CarItem {
  constructor (id, price, description, version) {
    super(id, price, description);
    this._version = version;
  }

  get version() { return this._version; }
}

//let edition = new Edition(1, 1, '', 'sport');
//alert(edition.version);

class Engine extends CarItem {
  constructor (id, price, description) {
    super(id, price, description);
  }

  setData(fuel, shift, drive, volume, performance, emissions, gears) {
    this._fuel = fuel;
    this._shift = shift;
    this._drive = drive;
    this._volume = volume;
    this._performance = performance;
    this._emissions = emissions;
    this._gears = gears;
  }

  get fuel() { return this.fuel; }
  get shift() { return this._shift; }
  get drive() { return this._drive; }
  get volume() { return this._volume; }
  get performance() { return this._performance; }
  get emissions() { return this._emissions; }
  get gears() { return this._gears; }
}

class Color extends CarItem {
  constructor (id, price, description) {
    super(id, price, description);
  }
}

class Wheel extends CarItem {
  constructor (id, price, description, materialName) {
    super(id, price, description);
    this._materialName = materialName;
  }

  setData(material, size, isDouble) {
    this._material = material;
    this._size = size;
    this._isDouble = isDouble;
  }

  get materialName() { return this._materialName; }
  get material() { return this._material; }
  get size() { return this._size; }
  get isDouble() { return this._isDouble; }
}

class Door extends CarItem {
  constructor (id, price, description) {
    super(id, price, description);
  }
}

class Option extends CarItem {
  constructor (id, price, description, image) {
    super(id, price, description);
    this._image = image;
  }

  get image() { return this._image; }
  set image(value) { this._image = value; }
}

/* Car Class
   ========= */

class Car {
  constructor (edition, engine, color, wheel, striping, sputnik, door) {
    this.edition = edition;
    this.engine = engine;
    this.color = color;
    this.wheel = wheel;
    this.striping = striping;
    this.sputnik = sputnik;
    this.door = door;

    this._options = [];
    this.setOptions();
  }

  get edition() { return this._edition; }
  get engine() { return this._engine; }
  get color() { return this._color; }
  get wheel() { return this._wheel; }
  get striping() { return this._striping; }
  get sputnik() { return this._sputnik; }
  get door() { return this._door; }
  get options() { return this._options; }

  get basePrice() {
    return 600000;
  }

  get price() {
    let total = this.basePrice;
    if (this.edition) total += this.edition.price;
    if (this.engine) total += this.engine.price;
    if (this.color) total += this.color.price;
    if (this.wheel) total += this.wheel.price;
    if (this.striping) total += this.striping.price;
    if (this.sputnik) total += this.sputnik.price;
    if (this.door) total += this.door.price;

    if (this._options && this._options.length > 0) {
      for(let i=0; i < this._options.length; i++) {
        total += this._options[i].price;
      }
    }

    return total;
  }

  set edition(value) {
    this._edition = value;

    $('#window1Side, #windowBack').removeClass();

    if (this._edition.id === 'sportEdition') {
      $('#window1Side, #windowBack').addClass('windowDark');
    }else{
      $('#window1Side, #windowBack').addClass('windowNormal');
      this.striping = null;
    }

  }

  set engine(value) {
    this._engine = value;
  }

  set color(value) {
    if (this._color)
      $('#carSide, #carBack, #carFront').removeClass(this._color.id);

    this._color = value;
    $('#carSide, #carBack, #carFront').addClass(this._color.id);
  }

  set wheel(value) {
    $('#wheel1Rim, #wheel2Rim').removeClass();

    this._wheel = value;

    $('#wheel1Rim, #wheel2Rim').addClass('rim');
    $('#wheel1Rim, #wheel2Rim').addClass(this._wheel.material);
    $('#wheel1Rim, #wheel2Rim').addClass(this._wheel.size);
    if (this._wheel.isDouble)
      $('#wheel1Rim, #wheel2Rim').addClass('double');
  }

  set striping(value) {
    $('#stripingSide, #stripingBack, #stripingFront').removeClass();

    this._striping = value;
    if (this._striping) {
      $('#stripingSide, #stripingBack, #stripingFront').addClass(this._striping.id);
    }else{
      $('#stripingSide, #stripingBack, #stripingFront').addClass('none');
    }
  }

  set door(value) {
    $('#doorSide').removeClass();

    this._door = value;
    if (this._door)
      $('#doorSide').addClass(this._door.id);
    else
      $('#doorSide').addClass('none');
  }

  set sputnik(value) {
    $('#sputnikSide, #sputnikBack, #sputnikFront').removeClass();

    this._sputnik = value;
    if (this._sputnik) {
      $('#sputnikSide, #sputnikBack, #sputnikFront').addClass(this._sputnik.id);
    }else{
      $('#sputnikSide, #sputnikBack, #sputnikFront').addClass('none');
    }
  }

  switchOption(option) {
    if (this.hasOption(option))
      this.removeOption(option);
    else
      this.addOption(option);
  }

  addOption(option) {
    //console.log("add option");
    const index = this._options.indexOf(option);
    if (index === -1) {

      if (option === towOption)
        this.removeOption(sportsTowOption, true);
      else if (option === sportsTowOption)
        this.removeOption(towOption, true);

      if (option === radioOption)
        this.removeOption(cassetteOption, true);
      else if (option === cassetteOption)
        this.removeOption(radioOption, true);

      if ([vwOption, audiOption, bmwOption].includes(option) ) {
        //console.log("branding");
        //this.removeOption(noBrandOption, true);
        this.removeOption(vwOption, true);
        this.removeOption(audiOption, true);
        this.removeOption(bmwOption, true);
      }

      this._options.push(option);

      //console.log(this._options);
    }
    //console.log(this._options);

    this.setOptions();
  }

  removeOption(option, ignoreSetOptions) {
    //console.log("remove option");
    //console.log("PRE");
    //console.log(this._options);
    const index = this._options.indexOf(option);
    //console.log("index: " + index)
    if (index > -1)
      this._options.splice(index, 1);
    //console.log(this._options);

    if (!ignoreSetOptions)
      this.setOptions();
  }

  hasOption(option) {
    return this._options.includes(option);
  }

  setOptions() {
    //console.log("setOptions")

    if ( this._options.includes(wiperOption))
      $('#wiper').removeClass('none');
    else
      $('#wiper').addClass('none');

    let showTow = this._options.includes(towOption);
    let showSportsTow = this._options.includes(sportsTowOption);

    if (showTow || showSportsTow) {
      $('#towSide, #towBack').removeClass();
      $('#tow1Side, #tow1Back').removeClass();
      if (showTow)
        $('#tow1Side, #tow1Back').addClass('wheelBack');
      if (showSportsTow)
        $('#tow1Side, #tow1Back').addClass('tennis');

    }else{
      $('#towSide, #towBack').addClass('none');
    }

    //HIER ZIE
    $('#logoBack, #logoFront').removeClass();
    if (this._options.includes(vwOption)) {
      console.log("show vwOption");
      $('#logoBack, #logoFront').addClass('logo');
      $('#logoBack, #logoFront').css('background-image', 'url("' + vwOption.image + '"');
    }else if (this._options.includes(audiOption)) {
      console.log("show audiOption");
      $('#logoBack, #logoFront').addClass('logo');
      $('#logoBack, #logoFront').css('background-image', 'url("' + audiOption.image + '"');
    }else if (this._options.includes(bmwOption)) {
      console.log("show bmwOption");
      $('#logoBack, #logoFront').addClass('logo');
      $('#logoBack, #logoFront').css('background-image', 'url("' + bmwOption.image + '"');
    }
  }
}

/* Car and CarItem instances
   ========================= */

const cheapEdition = new Edition('cheapEdition', 0, 'Proletariaat', ['Aansteker', 'Interieurverlichting', 'Flessenhouder']);
const sportEdition = new Edition('sportEdition', 22750, 'Sport', ['Zwart getinte ruiten achteraan', 'Sportstriping', 'Sportbladvering']);

const m512 = new Engine('m512', 0, 'M512');
m512.setData('Mazout', 'Manueel', 'Achterlinkerwielaandrijving', '512 cc', '35 pk', '215 g/km', '3 versnellingen');

const m640 = new Engine('m640', 49500, 'M640');
m512.setData('Mazout', 'Manueel', 'Achterlinkerwielaandrijving', '640 cc', '45 pk', '247 g/km', '3 versnellingen');

const m1000 = new Engine('m1000', 75900, 'M1000 Chernobyl Turbo');
m512.setData('Diesel', 'Manueel', 'Achterwielaandrijving', '1000 cc', '60 pk', '288 g/km', '4 versnellingen');

const whiteBodyColor = new Color('white', 0, 'Siberië Wit');
const goulashBodyColor = new Color('brown1', 11750, 'Goulash Bruin');
const stroganoffBodyColor = new Color('brown2', 11750, 'Stroganoff Bruin');
const panosBodyColor = new Color('brown3', 11750 , 'Panos Bruin');
const tundraBodyColor = new Color('green', 11750 , 'Tundra Groen');

const marxWheel = new Wheel('marxWheel', 0, 'Marx', 'Russisch staal');
marxWheel.setData('steel', 'small', false);
const leninWheel = new Wheel('leninWheel', 11750 , 'Lenin', 'Russisch lichtmetaal');
leninWheel.setData('alloy', 'small', false);
const trotskiWheel = new Wheel('trotskiWheel', 18900 , 'Trotski', 'Russisch lichtmetaal');
trotskiWheel.setData('alloy', 'medium', false);
const maoWheel = new Wheel('maoWheel', 26500, 'Mao', 'Chinees aluminium');
maoWheel.setData('alloy', 'medium', true);
const stalinWheel = new Wheel('stalinWheel', 34000, 'Stalin', 'Russisch aluminium');
stalinWheel.setData('alloy', 'large', true);

const redStripingColor = new Color('stripingRed', 0, 'Avondgloed Rood');
const yellowStripingColor = new Color('stripingYellow', 0, 'Ochtendgloren Geel');
const whiteStripingColor = new Color('stripingWhite', 0, 'Wodkawolk Wit');

const putinDoor = new Door('putin', 7500, 'Putin');
const starDoor = new Door('star', 7500, 'Rode ster');
const kunstmaanDoor = new Door('kunstmaan', 7500, 'Kunstmaan');

const greenSputnikColor = new Color('sputnikGreen', 1100, 'Volksleger Groen');
const redSputnikColor = new Color('sputnikRed', 1100, 'Revolutie Rood');
const purpleSputnikColor = new Color('sputnikPurple', 1100, 'Orthodox Paars');

const radioOption = new Option('radioOption', 7500, 'Am radio', '');
const cassetteOption = new Option('cassetteOption', 12000, 'Am radio met Cassettedek', '');
const wiperOption = new Option('wiperOption', 3850, 'Ruitenwisser', '');
const towOption = new Option('towOption', 15000, 'Trekhaak', '');
const sportsTowOption = new Option('sportsTowOption', 17500, 'Sporttrekhaak met tennisbal', '');
const interiorOption = new Option('interiorOption', 15000, 'Fijnmazig juten interieur', '');
const akOption = new Option('akOption', 3000, 'Kalashnikov houder', '');
//const noBrandOption = new Option('noBrandOption', 0, '', '');
const vwOption = new Option('vwOption', 7500, 'Vw logo', '');
const audiOption = new Option('audiOption', 7500, 'Audi logo', '');
const bmwOption = new Option('bmwOption', 7500, 'BMW logo', '');

const car = new Car(cheapEdition, m512, whiteBodyColor, marxWheel, null, null, null);
const options = [radioOption, cassetteOption, wiperOption, towOption, sportsTowOption, interiorOption, akOption, vwOption, audiOption, bmwOption];
