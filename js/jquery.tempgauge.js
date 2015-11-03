
(function($){
	$.fn.tempGauge = function(options) {
		var opts = $.extend({}, $.fn.tempGauge.defaults, options),
		padding = opts.borderWidth;			
		
		var gauges = [];
		
		this.each(function(idx, item){
			gauges.push(createTempGauge(item));
		});
		
		return $(gauges);
		
		function createTempGauge(gauge){
			
			var canvas = document.createElement("canvas"),
				ctx = canvas.getContext("2d"),
				currentTempText = $(gauge).text(),
				currentTemp = parseFloat(currentTempText) || opts.defaultTemp;

			canvas.width = opts.width;
			canvas.height = opts.width * 2 + opts.labelSize;
			
			$(gauge).replaceWith(canvas);
			
			var percentage = calculatePercentage(currentTemp, opts.minTemp, opts.maxTemp - opts.minTemp);

			ctx.lineWidth = opts.borderWidth;
			ctx.strokeStyle = opts.borderColor;
			ctx.fillStyle = opts.fillColor;
			ctx.font = "bold " + opts.labelSize + "px Arial ";
			ctx.textAlign = "center";
			
			fillTempGauge(ctx, 0, padding/2, opts.width,  opts.width * 2 - padding, percentage);
			strokeTempGauge(ctx, 0, padding/2,  opts.width,  opts.width * 2 -padding);
			if(opts.showLabel){
				drawLabel(ctx, canvas.width/2, canvas.height - opts.labelSize/5 , currentTempText);
			}
		}	
		
		function calculatePercentage(temp, mintemp, length){
			var percentage = (temp - mintemp)/ length;
			percentage = percentage > 1 ? 1 : percentage;
			percentage = percentage < 0 ? 0 : percentage;
			return percentage;
		}
		
		function drawTemperatureGauge(ctx, x, y, width, height, spacing, fillPercent){
			
			var wholeCircle = Math.PI * 2;
			var smallRadius = width / 3 / 2 - spacing;
			var xSmall = x + width / 2 ;
			var ySmall = y + smallRadius + spacing;
			
			var bigRadius = height / 6 - spacing;
			var xBig = x + width / 2 ;
			var yBig = y + height / 6 * 5 ;
			
			var offSet = Math.sqrt((Math.pow(bigRadius,2) - Math.pow(smallRadius/2,2)),2);
			var twoThirdsLength = height / 6 * 5 - offSet - width / 3 / 2;
			
			var gauge = twoThirdsLength * fillPercent;
			
			var yBox = yBig - offSet - gauge;
			var xBox = xBig - width / 6 + spacing;
			var sRad = Math.asin(smallRadius/bigRadius);
			
			ctx.beginPath();
			ctx.arc(xSmall, yBox, smallRadius, 0, wholeCircle * -0.5,  true);
			ctx.arc(xBig, yBig, bigRadius, wholeCircle * 0.75 - sRad, wholeCircle * -0.25 + sRad, true);
			ctx.closePath();
		}
		
		function strokeTempGauge(ctx, x, y, width, height){
			drawTemperatureGauge(ctx, x, y, width, height, 0, 1);
			ctx.stroke();
		}
		
		function fillTempGauge(ctx, x, y, width, height, percent){
			drawTemperatureGauge(ctx, x, y, width, height,  opts.borderWidth, percent);
			ctx.fill();
		}
		
		function drawLabel(ctx, x, y, text){
			ctx.fillStyle = opts.labelColor;
			ctx.fillText(text, x , y );
		}
	};
	
	$.fn.tempGauge.defaults = {
		borderColor: "black",
		borderWidth: 4,
		defaultTemp: 26,
		fillColor: "red",
		labelSize: 12,
		labelColor: "black",
		maxTemp: 40,
		minTemp: -10,
		showLabel:false,
		width: 100
	};
		
})(jQuery);

/*	
    +---+
    |   |
    |   |
    | # |
  +-+ # +-+
  | ##### |
  | ##### |
  +-------+

*/
