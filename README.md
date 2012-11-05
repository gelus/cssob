cssob
=====

A JavaScript Inject that reads all your linked and inline stylesheets and turns them into a readable, mutable object.

<h2>installation</h2>

Insert script after your CSS links.
Script will compose a global object constucted of all your defined rules.

<h2>Use:</h2>

<h3>Retrieve information</h3>

<pre>console.log(cssob[cssSelector].height); 
    //logs hight set by provided asosiated CSS selector rule.</pre>

<h3>Set information</h3>

<pre>cssob[cssSelector].backgroundColor = 'yellow';  
      //Sets elements that match the selector's background to yellow.  
</pre>

<h3>Additional API</h3>
<h4>listProps()</h4>
Returns an array with all the available css properties and methods from the queried cssob object.
<pre>cssob['string cssSelector'].listProps();

Example
________________________________________________
&lt;style&gt;
  .clear{clear: both; height: 0; display: block}
&lt;/style&gt;
&lt;sciprt&gt;
  var clearClassProperties = cssob['.clear'].listProps();
  console.log(clearClassProperties); //logs ["clear", "height", "display"] amung other available operations (some browser specific)
&lt;/script&gt;
</pre>