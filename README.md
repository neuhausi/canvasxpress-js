# CanvasXpress 

### https://www.canvasxpress.org

CanvasXpress: A JavaScript Library for Data Analytics with Full Audit Trail Capabilities.

## Installation

The canvasXpress library conists of two files: (1) a CSS file, canvasXpress.css and (2) a JavaScript file, canvasXpress.min.js. These two files must be included in <head> section of the web page pointing directly to the www.canvasXpress.org web site:

```html
<link rel="stylesheet" href="https://www.canvasxpress.org/dist/canvasXpress.css" type="text/css"/>
<script type="text/javascript" src="https://www.canvasxpress.org/dist/canvasXpress.min.js"></script>
```
  
or downloaded and included in the <head> section of the web page pointing to the desired location. Please contact us obtain a license.

```html
<link rel="stylesheet" href="path-to-canvasXpress.css" type="text/css"/>
<script type="text/javascript" src="path-to-canvasXpress.min.js"></script>
```
  
## NPM
```  
npm install canvasxpress
```
  
## Yarn

```  
yarn add canvasxpress
```

## Overview
  
CanvasXpress is a standalone JavaScript library that works in all modern browsers on mobile, tablets and desktop devices. The basic usage is very simple:

Include the JavaScript and the CSS CanvasXpress library files in the <head> element of the web page.
Include a script to handle the data, the configuration, and the constructor of the CanvasXpress object in the <head> element of the web page. An advanced use is included in the initialization section.
Include a <canvas> element inside the <body> element where the visualization will be displayed.
  
### Example:

```html  
<html>

  <head>

    <!-- 1. Include the CanvasXpress library -->
    <link rel="stylesheet" href="path-to-canvasXpress.css" type="text/css"/>
    <script type="text/javascript" src="path-to-canvasXpress.min.js"></script>

  </head>

  <body>

    <!-- 2. DOM element where the visualization will be displayed -->
    <canvas  id="canvasId" width="540" height="540"></canvas>
    
    <!-- 3. Include script to initialize object -->
    <script>

      // Data
      var data = { "y": {
                     "vars": [ "Gene1"],
                     "smps": [ "Smp1", "Smp2", "Smp3" ],
                     "data": [ [ 10, 35, 88 ] ]
                   }
                 };

      // Configuration
      var conf = { "graphType": "Bar" };

      // Initialize object
      var cX = new CanvasXpress("canvasId", data, conf);

    </script>
    
  </body>

</html>
```  
  
![cX-canvasId](https://user-images.githubusercontent.com/254923/178363565-7612293f-357d-4676-a50c-fa43f281a3d7.png)
  
## Integration with other frameworks

(The two CanvasXpress files used in all repos are identical)
  
#### R Integration
Install the CanvasXpress R package from [CRAN](https://cran.r-project.org/web/packages/canvasXpress/index.html) and use it in the R console, R-Studio or in any Shiny application. Here is a link to the [Github repo](https://github.com/neuhausi/canvasXpress) and some [Shiny Examples](http://periscopeapps.org/)

#### Python Integration
Install the CanvasXpress Python library from [PyPI](https://pypi.org/project/canvasxpress/) and use it with Jupyter, Flask and Django.

#### Node Integration
Install the CanvasXpress Node module from [npmjs](https://www.npmjs.com/package/canvasxpress-cli) to create visualizations locally or in the cloud.

#### React Integration
Install the CanvasXpress Node modules from [npmjs](https://www.npmjs.com/package/canvasxpress-react) to easily integrate with React JS.  
  
  
