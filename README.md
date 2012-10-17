cssob
=====

A JavaScript Inject that reads all your linked and inline stylesheets and turns them into a readable, mutable object.

<h2>installation</h2>

Insert script after your CSS links.
Script will compose an object constucted of all your defined rules.

<h2>Use:</h2>

<h3>Retrive information</h3>

<pre>console.log(cssob[cssSelector].height); 
    //logs hight set by provided asosiated CSS selector rule.</pre>

<h3>Set information</h3>

<pre>cssob[cssSelector].backgroundColor = 'yellow';  
      //Sets elements that match the selector's background to yellow.  
</pre>

<h3>Additional API</h3>

<pre>css.listProps(string cssSelector);</pre>
Returns an array with all the set css properties of the matching selector
EXAMPLE:  
<pre>
&lt;style&gt;
  .clear{clear: both; height: 0; display: block}
&lt;/style&gt;
&lt;sciprt&gt;
  var clearClassProperties = cssob.listProps('.clear');
  console.log(clearClassProperties); //logs ["clear", "height", "display"]
&lt;/script&gt;
</pre>