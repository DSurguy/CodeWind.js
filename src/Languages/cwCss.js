CodeWind.Languages["css"] = [
	{
		matchName: "tag",
		regex: /[^;&:\.\#\{\>\s]+\b(?=(.)*({))/g,
		label: "cw-tag",
		appearsIn: ""
	}, {
		matchName: "id",
		regex: /#[\w]+\b(?=(.)*(\.|\#|\{))/g,
		label: "cw-id",
		appearsIn: ""
	}, {
		matchName: "class",
		regex: /\.[\w\-_]+(?=[^}]*{)/g,
		label: "cw-class",
		appearsIn: ""
	}, {
		matchName: "color",
		regex: /(#([\da-fA-F]{6}|[\da-f]{3}))|rgb/g,
		label: "cw-color",
		appearsIn: ""
	}, {
		matchName: "operator",
		regex: /\+|&gt;|\>|\~(?=[^}]*{)/g,
		label: "cw-operator",
		appearsIn: ""
	}, {
		matchName: "rule",
		regex: /[\w-]+(?=\s*\:)/g,
		label: "cw-rule",
		appearsIn: ""
	}, {
		matchName: "comment",
		regex: /\/\*(.|\n|\r)*\*\//g,
		label: "cw-comment",
		appearsIn: ""
	}, {
		matchName: "pseudoSelector",
		regex: /:[\w-]+\b(?=[^}]*{)/g,
		label: "cw-pseudo",
		appearsIn: ""
	}, {
		matchName: "universal",
		regex: /\*(?=[\s]*{)/g,
		label: "cw-universal",
		appearsIn: ""
	}, {
        matchName: "singleString",
        regex: /'[^']*'/g,
        label: "cw-singleString",
        appearsIn: ""
    }, {
        matchName: "doubleString",
        regex: /"[^"]*"/g,
        label: "cw-doubleString",
        appearsIn: ""
    }, {
    	matchName: "measure",
    	regex: /px|em|\%|pt|pc/g,
    	label: "cw-measure",
    	appearsIn: ""
    }, {
    	matchName: "number",
    	regex: /-?(\d+(\.\d)*|\.\d+)/g,
    	label: "cw-number",
    	appearsIn: ""
    }, {
    	matchName: "url",
    	regex: /url\(.*\)/g,
    	label: "cw-url",
    	appearsIn: ""
    }
]