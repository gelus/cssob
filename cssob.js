(function(){
	window.cssob = {};
	cssob.methods = [];
	cssob.methods[0] = {name: 'listProps', func: function(){
					var Result = []
					for(var key in this){
						if(this[key] != ""){
							Result.push(key);
						}}
					return Result;
				}};

	cssob.composeMethods = function composeMethods(elm){
		var meths = cssob.methods;
		for(var i = 0; i<meths.length; i++){
			elm[meths[i].name] = meths[i].func;
		}}
	function CSSStyleDeclarationCompensation(){this.n = false}
	window.CSSStyleDeclaration = window.CSSStyleDeclaration || new CSSStyleDeclarationCompensation();
	window.CSSRuleStyleDeclaration = window.CSSRuleStyleDeclaration || undefined;
	var elm = (CSSRuleStyleDeclaration || CSSStyleDeclaration).prototype;
	if(CSSStyleDeclaration.n === false){elm = CSSStyleDeclaration;}
	cssob.composeMethods(elm);//Method Assignment
	
	crules = document.styleSheets;
	for(var qi = 0; qi<crules.length; qi++){
		ruleSet = crules[qi].cssRules || crules[qi].rules;
		for(var rsi = 0;rsi<ruleSet.length; rsi++){
			var rule = ruleSet[rsi];
			if(CSSStyleDeclaration.n === false){cssob.composeMethods(rule.style);} //IE7 method Assignment
			cssob[rule.selectorText.toLowerCase()] = rule.style;
		}
	}
})();