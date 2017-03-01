/**
 *  Layer Name for Assets Changer
 *
 *  Copyright 2016 by Jan Gähler
 *
 *  Licensed under Do What The Fuck You Want To Public License (WTFPL)
 *  http://www.wtfpl.net/about/ 
 */

var doc = app.activeDocument;  

for (var i = 0; i < doc.layers.length; i++) 
{
 
          var currentLayerName = doc.layers[i].name;

          //currentLayerName = currentLayerName.toLowerCase();

          //pre = 'bg_';
          //pre = 'cat_';
          pattern = '.png';

          position = currentLayerName.search(pattern);

          newLayerName = currentLayerName.substr(0, position);

 		//alert(newLayerName);

          doc.layers[i].name = newLayerName;
}