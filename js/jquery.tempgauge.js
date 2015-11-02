
(function($){
	$.fn.tempGauge = function(options) {
		var opts = $.extend({}, $.fn.tempGauge.defaults, options),
		padding = 10;			
		
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
			
			var length = opts.maxTemp - opts.minTemp;
			var percentage = calculatePercentage(currentTemp, opts.minTemp, length);

			fillTempGauge(ctx, 0, 0, opts.width,  opts.width * 2, percentage);
			strokeTempGauge(ctx, 0, 0,  opts.width,  opts.width * 2,  opts.borderWidth);
			if(opts.showLabel){
				drawLabel(ctx, canvas.width/2, canvas.height - opts.labelSize/3 , currentTempText);
			}
			
		}	
		
		function calculatePercentage(temp, mintemp, length){
			var percentage = (temp - mintemp)/ length;
			percentage = percentage > 1 ? 1 : percentage;
			percentage = percentage < 0 ? 0 : percentage;
			return percentage;
			
		}
		
		function strokeTempGauge(ctx, x, y, width, height, borderWidth){
			
			y += padding/2;
			height -= padding;
			
			var wholeCircle = Math.PI * 2;
			var smallRadius = width / 3 / 2;
			var xSmall = x + width / 2;
			var ySmall = y + smallRadius;
			
			var bigRadius = height / 6;
			var xBig = x + width / 2;
			var yBig = y + height / 6 * 5 ;
			
			var offSet = Math.sqrt((Math.pow(bigRadius,2) - Math.pow(smallRadius/2,2)),2);
		
			ctx.beginPath();
			ctx.lineWidth = borderWidth;
			ctx.strokeStyle = opts.borderColor;
			ctx.arc(xSmall, ySmall, smallRadius, wholeCircle / -2, 0, false);
			ctx.moveTo(xSmall - smallRadius , ySmall);
			ctx.lineTo(xSmall - smallRadius , yBig - offSet + borderWidth);
			ctx.stroke();
			ctx.beginPath();
			ctx.moveTo(xSmall + smallRadius , ySmall);
			ctx.lineTo(xSmall + smallRadius , yBig - offSet + borderWidth);
				ctx.stroke();
			ctx.beginPath();
			ctx.arc(xBig, yBig, bigRadius, wholeCircle/-6, wholeCircle * -2/6, false);
			ctx.stroke();
		}
		
		function fillTempGauge(ctx, x, y, width, height, percent){
			
			var wholeCircle = Math.PI * 2;
			
			y += padding/2;
			height -= padding;
			
			var bigRadius = height / 6 - opts.borderWidth;
			var xBig = x + width / 2;
			var yBig = y + height / 6 * 5 ;
			
			var smallRadius = width / 3 / 2 - opts.borderWidth;
			var xSmall = x + width / 2;
			var ySmall = y + smallRadius + opts.borderWidth;
			
			var offSet = Math.sqrt((Math.pow(bigRadius,2) - Math.pow(smallRadius/2,2)),2);
			
			var twoThirdsLength = height / 6 * 5 - offSet - width / 3 / 2;
			
			var gauge = twoThirdsLength * percent;
			
			var yBox = yBig - offSet - gauge;
			var xBox = xBig - width / 6 + opts.borderWidth;	
			
			ctx.fillStyle = opts.fillColor;
			
			if(percent == 1){
				ctx.arc(xSmall, ySmall, smallRadius, wholeCircle / -2, 0, false);
				ctx.closePath();
				ctx.fill();
			}
			
			ctx.fillRect(xBox, yBox - 1, width/3 - opts.borderWidth*2, gauge + padding);
			
			ctx.beginPath();
			ctx.arc(xBig, yBig, bigRadius, wholeCircle / -6, wholeCircle * -2/6, false);
			ctx.closePath();
			ctx.fill();
		}
		
		function drawLabel(ctx, x, y, text){
			ctx.font = "bold " + opts.labelSize + "px Arial ";
			ctx.textAlign = "center";
			ctx.fillStyle = opts.borderColor;
			ctx.fillText(text, x , y );
		}
		
	};
	
	$.fn.tempGauge.defaults = {
		borderColor: "black",
		borderWidth: 4,
		defaultTemp: 26,
		fillColor: "red",
		labelSize: 12,
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
