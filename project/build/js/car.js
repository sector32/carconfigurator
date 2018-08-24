'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* CarItem classes
   ===============  */

var CarItem = function () {
  function CarItem(id, price, description) {
    _classCallCheck(this, CarItem);

    this._id = id;
    this._price = price;
    this._description = description;
  }

  _createClass(CarItem, [{
    key: 'id',
    get: function get() {
      return this._id;
    }
  }, {
    key: 'price',
    get: function get() {
      return this._price;
    }
  }, {
    key: 'description',
    get: function get() {
      return this._description;
    }
  }]);

  return CarItem;
}();

;

var Edition = function (_CarItem) {
  _inherits(Edition, _CarItem);

  function Edition(id, price, description, version) {
    _classCallCheck(this, Edition);

    var _this = _possibleConstructorReturn(this, (Edition.__proto__ || Object.getPrototypeOf(Edition)).call(this, id, price, description));

    _this._version = version;
    return _this;
  }

  _createClass(Edition, [{
    key: 'version',
    get: function get() {
      return this._version;
    }
  }]);

  return Edition;
}(CarItem);

//let edition = new Edition(1, 1, '', 'sport');
//alert(edition.version);

var Engine = function (_CarItem2) {
  _inherits(Engine, _CarItem2);

  function Engine(id, price, description) {
    _classCallCheck(this, Engine);

    return _possibleConstructorReturn(this, (Engine.__proto__ || Object.getPrototypeOf(Engine)).call(this, id, price, description));
  }

  _createClass(Engine, [{
    key: 'setData',
    value: function setData(fuel, shift, drive, volume, performance, emissions, gears) {
      this._fuel = fuel;
      this._shift = shift;
      this._drive = drive;
      this._volume = volume;
      this._performance = performance;
      this._emissions = emissions;
      this._gears = gears;
    }
  }, {
    key: 'fuel',
    get: function get() {
      return this.fuel;
    }
  }, {
    key: 'shift',
    get: function get() {
      return this._shift;
    }
  }, {
    key: 'drive',
    get: function get() {
      return this._drive;
    }
  }, {
    key: 'volume',
    get: function get() {
      return this._volume;
    }
  }, {
    key: 'performance',
    get: function get() {
      return this._performance;
    }
  }, {
    key: 'emissions',
    get: function get() {
      return this._emissions;
    }
  }, {
    key: 'gears',
    get: function get() {
      return this._gears;
    }
  }]);

  return Engine;
}(CarItem);

var Color = function (_CarItem3) {
  _inherits(Color, _CarItem3);

  function Color(id, price, description) {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).call(this, id, price, description));
  }

  return Color;
}(CarItem);

var Wheel = function (_CarItem4) {
  _inherits(Wheel, _CarItem4);

  function Wheel(id, price, description, materialName) {
    _classCallCheck(this, Wheel);

    var _this4 = _possibleConstructorReturn(this, (Wheel.__proto__ || Object.getPrototypeOf(Wheel)).call(this, id, price, description));

    _this4._materialName = materialName;
    return _this4;
  }

  _createClass(Wheel, [{
    key: 'setData',
    value: function setData(material, size, isDouble) {
      this._material = material;
      this._size = size;
      this._isDouble = isDouble;
    }
  }, {
    key: 'materialName',
    get: function get() {
      return this._materialName;
    }
  }, {
    key: 'material',
    get: function get() {
      return this._material;
    }
  }, {
    key: 'size',
    get: function get() {
      return this._size;
    }
  }, {
    key: 'isDouble',
    get: function get() {
      return this._isDouble;
    }
  }]);

  return Wheel;
}(CarItem);

var Door = function (_CarItem5) {
  _inherits(Door, _CarItem5);

  function Door(id, price, description) {
    _classCallCheck(this, Door);

    return _possibleConstructorReturn(this, (Door.__proto__ || Object.getPrototypeOf(Door)).call(this, id, price, description));
  }

  return Door;
}(CarItem);

var Option = function (_CarItem6) {
  _inherits(Option, _CarItem6);

  function Option(id, price, description, image) {
    _classCallCheck(this, Option);

    var _this6 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, id, price, description));

    _this6._image = image;
    return _this6;
  }

  _createClass(Option, [{
    key: 'image',
    get: function get() {
      return this._image;
    },
    set: function set(value) {
      this._image = value;
    }
  }]);

  return Option;
}(CarItem);

/* Car Class
   ========= */

var Car = function () {
  function Car(edition, engine, color, wheel, striping, sputnik, door) {
    _classCallCheck(this, Car);

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

  _createClass(Car, [{
    key: 'switchOption',
    value: function switchOption(option) {
      if (this.hasOption(option)) this.removeOption(option);else this.addOption(option);
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      //console.log("add option");
      var index = this._options.indexOf(option);
      if (index === -1) {

        if (option === towOption) this.removeOption(sportsTowOption, true);else if (option === sportsTowOption) this.removeOption(towOption, true);

        if (option === radioOption) this.removeOption(cassetteOption, true);else if (option === cassetteOption) this.removeOption(radioOption, true);

        if ([vwOption, audiOption, bmwOption].includes(option)) {
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
  }, {
    key: 'removeOption',
    value: function removeOption(option, ignoreSetOptions) {
      //console.log("remove option");
      //console.log("PRE");
      //console.log(this._options);
      var index = this._options.indexOf(option);
      //console.log("index: " + index)
      if (index > -1) this._options.splice(index, 1);
      //console.log(this._options);

      if (!ignoreSetOptions) this.setOptions();
    }
  }, {
    key: 'hasOption',
    value: function hasOption(option) {
      return this._options.includes(option);
    }
  }, {
    key: 'setOptions',
    value: function setOptions() {
      //console.log("setOptions")

      if (this._options.includes(wiperOption)) $('#wiper').removeClass('none');else $('#wiper').addClass('none');

      var showTow = this._options.includes(towOption);
      var showSportsTow = this._options.includes(sportsTowOption);

      if (showTow || showSportsTow) {
        $('#towSide, #towBack').removeClass();
        $('#tow1Side, #tow1Back').removeClass();
        if (showTow) $('#tow1Side, #tow1Back').addClass('wheelBack');
        if (showSportsTow) $('#tow1Side, #tow1Back').addClass('tennis');
      } else {
        $('#towSide, #towBack').addClass('none');
      }

      //HIER ZIE
      $('#logoBack, #logoFront').removeClass();
      if (this._options.includes(vwOption)) {
        console.log("show vwOption");
        $('#logoBack, #logoFront').addClass('logo');
        $('#logoBack, #logoFront').css('background-image', 'url("' + vwOption.image + '"');
      } else if (this._options.includes(audiOption)) {
        console.log("show audiOption");
        $('#logoBack, #logoFront').addClass('logo');
        $('#logoBack, #logoFront').css('background-image', 'url("' + audiOption.image + '"');
      } else if (this._options.includes(bmwOption)) {
        console.log("show bmwOption");
        $('#logoBack, #logoFront').addClass('logo');
        $('#logoBack, #logoFront').css('background-image', 'url("' + bmwOption.image + '"');
      }
    }
  }, {
    key: 'edition',
    get: function get() {
      return this._edition;
    },
    set: function set(value) {
      this._edition = value;

      $('#window1Side, #windowBack').removeClass();

      if (this._edition.id === 'sportEdition') {
        $('#window1Side, #windowBack').addClass('windowDark');
      } else {
        $('#window1Side, #windowBack').addClass('windowNormal');
        this.striping = null;
      }
    }
  }, {
    key: 'engine',
    get: function get() {
      return this._engine;
    },
    set: function set(value) {
      this._engine = value;
    }
  }, {
    key: 'color',
    get: function get() {
      return this._color;
    },
    set: function set(value) {
      if (this._color) $('#carSide, #carBack, #carFront').removeClass(this._color.id);

      this._color = value;
      $('#carSide, #carBack, #carFront').addClass(this._color.id);
    }
  }, {
    key: 'wheel',
    get: function get() {
      return this._wheel;
    },
    set: function set(value) {
      $('#wheel1Rim, #wheel2Rim').removeClass();

      this._wheel = value;

      $('#wheel1Rim, #wheel2Rim').addClass('rim');
      $('#wheel1Rim, #wheel2Rim').addClass(this._wheel.material);
      $('#wheel1Rim, #wheel2Rim').addClass(this._wheel.size);
      if (this._wheel.isDouble) $('#wheel1Rim, #wheel2Rim').addClass('double');
    }
  }, {
    key: 'striping',
    get: function get() {
      return this._striping;
    },
    set: function set(value) {
      $('#stripingSide, #stripingBack, #stripingFront').removeClass();

      this._striping = value;
      if (this._striping) {
        $('#stripingSide, #stripingBack, #stripingFront').addClass(this._striping.id);
      } else {
        $('#stripingSide, #stripingBack, #stripingFront').addClass('none');
      }
    }
  }, {
    key: 'sputnik',
    get: function get() {
      return this._sputnik;
    },
    set: function set(value) {
      $('#sputnikSide, #sputnikBack, #sputnikFront').removeClass();

      this._sputnik = value;
      if (this._sputnik) {
        $('#sputnikSide, #sputnikBack, #sputnikFront').addClass(this._sputnik.id);
      } else {
        $('#sputnikSide, #sputnikBack, #sputnikFront').addClass('none');
      }
    }
  }, {
    key: 'door',
    get: function get() {
      return this._door;
    },
    set: function set(value) {
      $('#doorSide').removeClass();

      this._door = value;
      if (this._door) $('#doorSide').addClass(this._door.id);else $('#doorSide').addClass('none');
    }
  }, {
    key: 'options',
    get: function get() {
      return this._options;
    }
  }, {
    key: 'basePrice',
    get: function get() {
      return 600000;
    }
  }, {
    key: 'price',
    get: function get() {
      var total = this.basePrice;
      if (this.edition) total += this.edition.price;
      if (this.engine) total += this.engine.price;
      if (this.color) total += this.color.price;
      if (this.wheel) total += this.wheel.price;
      if (this.striping) total += this.striping.price;
      if (this.sputnik) total += this.sputnik.price;
      if (this.door) total += this.door.price;

      if (this._options && this._options.length > 0) {
        for (var i = 0; i < this._options.length; i++) {
          total += this._options[i].price;
        }
      }

      return total;
    }
  }]);

  return Car;
}();

/* Car and CarItem instances
   ========================= */

var cheapEdition = new Edition('cheapEdition', 0, 'Proletariaat', ['Aansteker', 'Interieurverlichting', 'Flessenhouder']);
var sportEdition = new Edition('sportEdition', 22750, 'Sport', ['Zwart getinte ruiten achteraan', 'Sportstriping', 'Sportbladvering']);

var m512 = new Engine('m512', 0, 'M512');
m512.setData('Mazout', 'Manueel', 'Achterlinkerwielaandrijving', '512 cc', '35 pk', '215 g/km', '3 versnellingen');

var m640 = new Engine('m640', 49500, 'M640');
m512.setData('Mazout', 'Manueel', 'Achterlinkerwielaandrijving', '640 cc', '45 pk', '247 g/km', '3 versnellingen');

var m1000 = new Engine('m1000', 75900, 'M1000 Chernobyl Turbo');
m512.setData('Diesel', 'Manueel', 'Achterwielaandrijving', '1000 cc', '60 pk', '288 g/km', '4 versnellingen');

var whiteBodyColor = new Color('white', 0, 'Siberië Wit');
var goulashBodyColor = new Color('brown1', 11750, 'Goulash Bruin');
var stroganoffBodyColor = new Color('brown2', 11750, 'Stroganoff Bruin');
var panosBodyColor = new Color('brown3', 11750, 'Panos Bruin');
var tundraBodyColor = new Color('green', 11750, 'Tundra Groen');

var marxWheel = new Wheel('marxWheel', 0, 'Marx', 'Russisch staal');
marxWheel.setData('steel', 'small', false);
var leninWheel = new Wheel('leninWheel', 11750, 'Lenin', 'Russisch lichtmetaal');
leninWheel.setData('alloy', 'small', false);
var trotskiWheel = new Wheel('trotskiWheel', 18900, 'Trotski', 'Russisch lichtmetaal');
trotskiWheel.setData('alloy', 'medium', false);
var maoWheel = new Wheel('maoWheel', 26500, 'Mao', 'Chinees aluminium');
maoWheel.setData('alloy', 'medium', true);
var stalinWheel = new Wheel('stalinWheel', 34000, 'Stalin', 'Russisch aluminium');
stalinWheel.setData('alloy', 'large', true);

var redStripingColor = new Color('stripingRed', 0, 'Avondgloed Rood');
var yellowStripingColor = new Color('stripingYellow', 0, 'Ochtendgloren Geel');
var whiteStripingColor = new Color('stripingWhite', 0, 'Wodkawolk Wit');

var putinDoor = new Door('putin', 7500, 'Putin');
var starDoor = new Door('star', 7500, 'Rode ster');
var kunstmaanDoor = new Door('kunstmaan', 7500, 'Kunstmaan');

var greenSputnikColor = new Color('sputnikGreen', 1100, 'Volksleger Groen');
var redSputnikColor = new Color('sputnikRed', 1100, 'Revolutie Rood');
var purpleSputnikColor = new Color('sputnikPurple', 1100, 'Orthodox Paars');

var radioOption = new Option('radioOption', 7500, 'Am radio', '');
var cassetteOption = new Option('cassetteOption', 12000, 'Am radio met Cassettedek', '');
var wiperOption = new Option('wiperOption', 3850, 'Ruitenwisser', '');
var towOption = new Option('towOption', 15000, 'Trekhaak', '');
var sportsTowOption = new Option('sportsTowOption', 17500, 'Sporttrekhaak met tennisbal', '');
var interiorOption = new Option('interiorOption', 15000, 'Fijnmazig juten interieur', '');
var akOption = new Option('akOption', 3000, 'Kalashnikov houder', '');
//const noBrandOption = new Option('noBrandOption', 0, '', '');
var vwOption = new Option('vwOption', 7500, 'Vw logo', '');
var audiOption = new Option('audiOption', 7500, 'Audi logo', '');
var bmwOption = new Option('bmwOption', 7500, 'BMW logo', '');

var car = new Car(cheapEdition, m512, whiteBodyColor, marxWheel, null, null, null);
var options = [radioOption, cassetteOption, wiperOption, towOption, sportsTowOption, interiorOption, akOption, vwOption, audiOption, bmwOption];