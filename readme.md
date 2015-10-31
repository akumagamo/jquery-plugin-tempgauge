# jQuery TempGauge plugin
## Versionnumber 1.0.0 (2015-10-31) 
Mini jQuery Temperature styled Gauge plugin, that replaces Temperature Values with an Temperature Gauge.  
![Alt Temperature to Gauge](https://raw.githubusercontent.com/akumagamo/jquery-plugin-tempGauge/master/readme/tempgauge-plugin-screenshot.png "Temperature to Gauge")

## Features
* replaces temperature values with a Temperature Gauge canvas
* Gauge-plugin is chainable

## Roadmap / Future Features
* update Documentation
* added Temperaturemarkings 
* flexible width and height proportion

## Known Bugs
* none 

## System Requirement & Prerequisites
jQuery Version 1.11.3

## Usage

### Setup
add script to webpage
    
	<script type="text/javascript" src="js/jquery.tempgauge.js"></script>

### SourceControl Link & Information
git@github.com:akumagamo/jquery-plugin-tempgauge.git

### Base Code Example

	$(".tempgauge").tempGauge();
	// Tested on Win7 with Chrome 46+

See ```demo.html``` for an working example, here a link to a working Demo [jQuery TempGauge plugin Demo](https://rawgit.com/akumagamo/jquery-plugin-tempgauge/master/demo.html)

## Documentation

### File / Folder Structure 
     +-+- jquery-plugin-tempgauge
	   +-+- js
	   | +- jquery.tempgauge.js
	   +- demo.html
       +- readme.md (this document)
	   +- LICENSE 
	  
### Options / Table structure
* borderColor (**default:** black)
* borderWidth (**default:** 4)
* defaultTemp  (**default:** 26)
* fillColor  (**default:** red)
* labelSize  (**default:** 12)
* maxTemp  (**default:** 40)
* minTemp  (**default:** 100)
* showLabel  (**default:** false)
* width (**default:** 100)



