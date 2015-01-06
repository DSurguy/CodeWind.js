CodeWind.Languages["html"] = [
	{
		matchName: "tagStart",
		regex: /<|<\//g,
		label: "cw-tagStart",
		appearsIn: "",
		priority: 4
	}, {
		matchName: "tagEnd",
		regex: />|\/>/g,
		label: "cw-tagEnd",
		appearsIn: "",
		priority: 4
	}, {
		matchName: "tagName",
		regex: /\w+(?=(\s|>))/g,
		label: "cw-tagName",
		appearsIn: "",
		priority: 3
	}, {
		matchName: "text",
		regex: /[^<>]+(?=[^<>]*<)/g,
		label: "cw-text",
		appearsIn: "",
		priority: 2
	}, {
		matchName: "attribute",
		regex: /\s\w+(?=>|=)/g,
		label: "cw-attribute",
		appearsIn: "",
		priority: 2
	}, {
        matchName: "singleString",
        regex: /'(?:[^'\\]|\\.)*'/g,
        label: "cw-singleString",
        appearsIn: ""
    }, {
        matchName: "doubleString",
        regex: /"(?:[^"\\]|\\.)*"/g,
        label: "cw-doubleString",
        appearsIn: ""
    }, {
    	matchName: "assignment",
    	regex: /=/g,
    	label: "cw-assignment",
    	appearsIn: ""
    }, {
    	matchName: "comment",
    	regex: /<!--([^-]|-[^-]|--[^>])*-->/g,
    	label: "cw-comment",
    	appearsIn: "",
    	priority: 1
    }, {
    	matchName: "doctype",
    	regex: /(!doctype|!DOCTYPE)\s(?=.*>)/g,
    	label: "cw-doctype",
    	appearsIn: "",
    	priority: 1
    }, {
    	matchName: "escape",
    	regex: /&(\w|\d)+;/g,
    	label: "cw-escape",
    	appearsIn: "singleString, doubleString, text",
    	priority: 5
    }
];
CodeWind.Languages.markup += "html";