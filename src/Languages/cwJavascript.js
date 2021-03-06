CodeWind.Languages["javascript"] = [
    {
        matchName: "escape",
        regex: /\\./g,
        label: "cw-escape",
        appearsIn: "*"
    },{
        matchName: "singleComment",
        regex: /\/\/(.)*([\n\r]|$)/g,
        label: "cw-singleComment",
        appearsIn: ""
    },{
        matchName: "doubleComment",
        regex: /\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g,
        label: "cw-doubleComment",
        appearsIn: ""
    },{
        matchName: "singleString",
        regex: /'(?:[^'\\]|\\.)*'/g,
        label: "cw-singleString",
        appearsIn: ""
    },{
        matchName: "doubleString",
        regex: /"(?:[^"\\]|\\.)*"/g,
        label: "cw-doubleString",
        appearsIn: ""
    },{
        matchName: "number",
        regex: /\d+(\.\d+)?/g,
        label: "cw-number",
        appearsIn: ""
    },{
        matchName: "typeModifier",
        regex: /\b(function|const|export|extends|final|implements|native|private|protected|public|static|synchronized|throws|transient|volatile)\b/g,
        label: "cw-typeModifier",
        appearsIn: "",
        priority: 1
    },{
        matchName: "control",
        regex: /\b(break|case|catch|continue|default|do|else|finally|for|goto|if|import|package|return|switch|throw|try|while)\b/g,
        label: "cw-control",
        appearsIn: "",
        priority: 1
    },{
        matchName: "constant",
        regex: /\b(Infinity|NaN|undefined)\b/g,
        label: "cw-constant",
        appearsIn: "",
        priority: 1
    },{
        matchName: "operator",
        regex: /!|\$|%|&(lt;|amp;|gt;)?|\*|\-|\-|\+|\+|~|=|<|>|\|\||\?\:|\^=|\b(in|instanceof|new|delete|typeof|void|with)\b/g,
        label: "cw-operator",
        appearsIn: ""
    },{
        matchName: "boolean",
        regex: /\b(true|false|null)\b/g,
        label: "cw-boolean",
        appearsIn: ""
    }, {
        matchName: "function",
        regex: /\b\w+\s*(?=\()/g,
        label: "cw-function",
        appearsIn: "",
        priority: 2
    }, {
        matchName: "property",
        regex: /\b[\w\d_$]+(?=:)/g,
        label: "cw-property",
        appearsIn: ""
    }, {
        matchName: "declaration",
        regex: /\bvar\b/g,
        label: "cw-declaration",
        appearsIn: ""
    }
];