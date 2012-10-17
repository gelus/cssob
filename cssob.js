(function(){
	window.cssob = {};
	cssob.listProps = function(slector){
		var Result = []; 
		for(var i = 0; i<this[slector].length; i++){
			Result.push(this[slector][i]);
			}
		return Result;
		}
	var stylesheets = document.styleSheets;
	var crules = [];
	for(var sti = 0; sti<stylesheets.length; sti++){
		crules.push(stylesheets[sti]);
	}
	for(var qi = 0; qi<crules.length; qi++){
		ruleSet = crules[qi].cssRules || crules[qi].rules;
		for(var rsi = 0;rsi<ruleSet.length; rsi++){
			var rule = ruleSet[rsi];
			cssob[rule.selectorText] = rule.style;
		}
	}
})();