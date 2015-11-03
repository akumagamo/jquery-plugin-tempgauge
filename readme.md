# jQuery TempGauge plugin
## Versionnumber 1.0.0 (2015-10-31)
(***Documentation last update 2015-10-31 11:00***)  

Mini jQuery Temperature styled Gauge plugin, that replaces Temperature Values with an Temperature Gauge.  

![Temperature to Gauge](https://raw.githubusercontent.com/akumagamo/jquery-plugin-tempGauge/master/readme/tempgauge-plugin-screenshot.png "Temperature to Gauge")  

## Features
* replaces temperature values with a Temperature Gauge canvas
* show Temperature Label
* set Gauge Border Color
* set Gauge Fill Color
* set Max and Min Temperature
* set canvas width *(height is calculated width * 2)*
* Gauge-plugin is chainable

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
* **borderColor** *(****default:*** *black)*
* **borderWidth** *(****default:*** *4)*
* **defaultTemp**  *(****default:*** *26)*
* **fillColor**  *(****default:*** *red)*
* **labelColor**  *(****default:*** *black)*
* **labelSize**  *(****default:*** *12)*
* **maxTemp**  *(****default:*** *40)*
* **minTemp**  *(****default:*** *100)*
* **showLabel**  *(****default:*** *false)*
* **width** *(****default:*** *100)*



