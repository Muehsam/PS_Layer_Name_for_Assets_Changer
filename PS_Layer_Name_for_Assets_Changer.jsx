/**
 *  Layer Name for Assets Changer
 *
 *  Copyright 2016 by Jan Gähler
 *
 *  Licensed under Do What The Fuck You Want To Public License (WTFPL)
 *  http://www.wtfpl.net/about/ 
 */

var doc = app.activeDocument.activeLayer;  

for (var i = 0; i < doc.layers.length; i++) 
{			
          var currentLayerName = doc.layers[i].name;

          currentLayerName = currentLayerName.toLowerCase();

          newLayerName = currentLayerName + '.png, ' +
          				'xcode/' + currentLayerName + '@3x.png, ' +
          				'66.67% xcode/' + currentLayerName + '@2x.png, ' +
          				'33.33% xcode/' + currentLayerName + '.png ,' +
          				'xxhdpi/' + currentLayerName + '.png ,' +
						'66.67% xhdpi/' + currentLayerName + '.png ,' +
						'50% hdpi/' + currentLayerName + '.png ,' +
						'33.33% mdpi/' + currentLayerName + '.png ,' +
						'25% ldpi/' + currentLayerName + '.png'; 		

          doc.layers[i].name = newLayerName;
}