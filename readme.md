# jQuery TempGauge plugin
## Versionnumber 1.2.0 (2019-01-16)
(***Documentation last update 2019-01-16 05:30***)  

Mini jQuery Temperature styled Gauge plugin, that replaces Temperature Values with an Temperature Gauge.  

![Temperature to Gauge](https://raw.githubusercontent.com/palhotel/jquery-plugin-tempGauge/master/readme/tempgauge-plugin-screenshot.png "Temperature to Gauge")

## Features
* replaces or inserts temperature values with a Temperature Gauge canvas
* show Temperature Label
* set Gauge Border Color
* set Gauge Fill Color
* set Max and Min Temperature
* set canvas width *(height is calculated width * 2)*
* Gauge-plugin is chainable
* show Scale

## Roadmap / Future Features
* update Documentation
* added Temperature markings 
* animate value change
* change Temperature Value
* flexible width and height proportion

## Known Bugs
* none 

## System Requirement & Prerequisites
jQuery Version 1.11.3

## Usage

### Setup
add script to webpage

```html
	<script type="text/javascript" src="js/jquery.tempgauge.js"></script>
```
### SourceControl Link & Information
https://github.com/akumagamo/jquery-plugin-tempgauge.git

### Base Code Example

```javascript
	$(".tempgauge").tempGauge();
	// Tested on Win7 with Chrome 46+
```
See ```demo.html``` for an working example, here a link to a working Demo [jQuery TempGauge plugin Demo](https://rawgit.com/akumagamo/jquery-plugin-tempgauge/master/demo.html)

## Documentation

### File / Folder Structure 
     +-+- jquery-plugin-tempgauge
	   +-+- js
	   | +- jquery.tempgauge.js
	   +-+- readme (media for this document)
	   | +- tempgauge-plugin-screenshot.png
	   +- demo.html
       +- readme.md (this document)
	   +- LICENSE 
	  
### Options
* **borderColor** _(**default:** black)_
* **borderWidth** _(**default:** 4)_
* **defaultTemp**  _(**default:** 26)_
* **fillColor**  _(**default:** red)_
* **labelColor**  _(**default:** black)_
* **labelSize**  _(**default:** 12)_
* **maxTemp**  _(**default:** 40)_
* **minTemp**  _(**default:** 100)_
* **padding** _(**default:** 4)_
* **showLabel**  _(**default:** false)_
* **showScale**  _(**default:** false)_
* **width** _(**default:** 100)_
* **replaceHtml** _(**default:** true)_




