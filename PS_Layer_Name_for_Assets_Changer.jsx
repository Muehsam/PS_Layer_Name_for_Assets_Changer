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

          pre = '';
          //pre = 'cat_';

          newLayerName = pre + currentLayerName + '.png, ' +
          				'xcode/' + currentLayerName + '@3x.png, ' +
          				'66.67% xcode/' + pre + currentLayerName + '@2x.png, ' +
          				'33.33% xcode/' + pre + currentLayerName + '.png ,' +
          				'xxhdpi/' + pre + currentLayerName + '.png ,' +
						'66.67% xhdpi/' + pre + currentLayerName + '.png ,' +
						'50% hdpi/' + pre + currentLayerName + '.png ,' +
						'33.33% mdpi/' + pre + currentLayerName + '.png ,' +
						'25% ldpi/' + pre + currentLayerName + '.png';
                              '25% ' + pre + currentLayerName + '.png';

 		//alert(newLayerName);

          doc.layers[i].name = newLayerName;
}