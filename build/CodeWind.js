var CodeWind = {
    Languages: {
        markup: "" //contains languages that could be parsed as HTML by the browser
    },
    //METHODS
    processCode: function(context, theme){
        var codeNodes;
        if( typeof context == "undefined" ){
            //No context given
            codeNodes = document.querySelectorAll("body code[data-cwLang]");
        }
        else if( context && typeof context == "string" ){
            //Context was passed as a string to use as a selector
            codeNodes = document.querySelectorAll(context+" code[data-cwLang]");
        }
        else if( context && typeof context == "object" && context.nodeType == 1 ){
            //context was passed as a DOM node
            codeNodes = context.querySelectorAll("code[data-cwLang]");
        }
        else{
            //context was passed as something we can't use!
            return false;
        }
        //convert the nodeLists to arrays to make it a bit easier to work with
        codeNodes = [].slice.call(codeNodes,0);
        //at this point, we have processed all the code elements and are ready to start syntax highlighting.
        var currentLang;
        for( var i=0; i<codeNodes.length; i++ ){
            currentLang = codeNodes[i].getAttribute("data-cwLang");
            //determine if we need to unescape stuff
            if( CodeWind.Languages.markup.indexOf(currentLang) != -1 ){
                codeNodes[i].innerHTML = CodeWind.markupCode(codeNodes[i].innerHTML.replace(/&lt;/g,"<").replace(/&gt;/g,">"), codeNodes[i].getAttribute("data-cwLang"));
            }
            else{
                codeNodes[i].innerHTML = CodeWind.markupCode(codeNodes[i].innerHTML, codeNodes[i].getAttribute("data-cwLang"));
            }
            
            //add the appropriate classes to the code element to allow styling
            codeNodes[i].className += " cw-"+currentLang+" cw-"+(theme||"base");
            codeNodes[i].removeAttribute("data-cwLang");
        }
    },
    
    markupCode: function(codeString, language){
        var tokenList = new Array(codeString.length);
        var codeLang = CodeWind.Languages[language];
        var markUpString = [];
        //loop through all the tokens that can be matched for this language
        for( match in codeLang ){
            //create a new regex for this token
            var rex = codeLang[match].regex;
            var result = [];
            //loop through all the matches for this token and store them at their starts
            while( result = rex.exec(codeString) ){
                //we only want to store the token if one doesn't already exist here
                //or if the priority of the new one is higher than the existing one
                if( (tokenList[result.index] && tokenList[result.index].priority >= codeLang[match].priority) || tokenList[result.index] == undefined ){
                    tokenList[result.index] = {
                        start: result.index,
                        end: rex.lastIndex,
                        matchName: codeLang[match].matchName,
                        label: codeLang[match].label,
                        appearsIn: codeLang[match].appearsIn,
                        priority: codeLang[match].priority
                    };
                }
            }
        }
        //Now parse the inclusion and wrapping rules
        for( var i=0; i<tokenList.length; i++ ){
            if( tokenList[i]){
                //retrieve this token match
                var match = tokenList[i];
                //crawl through the inside of the match to see if we need to remove other tokens
                for( var j=i+1; j<match.end; j++ ){
                    if( tokenList[j] && tokenList[j].appearsIn.search(new RegExp(match.matchName,"g")) == -1 && tokenList[j].appearsIn.search(/\*/g) == -1 ){
                        //this token cannot exist in the original tokens scope, remove it
                        tokenList[j] = undefined;
                    }
                }
                
            }
        }
        //now that we have a proper set of tokens, begin adding spans to the codestring
        for( var i=0; i<codeString.length; i++ ){
            if( tokenList[i] ){
                //this is an opening tag for a token
                if( tokenList[i].start == tokenList[i].end-1 ){
                    //single character match
                    if( codeString[i] == "<" ){
                        markUpString[i] = "<span class=\"" + tokenList[i].label + "\">&lt;</span>";    
                    }
                    else if( codeString[i] == ">" ){
                        markUpString[i] = "<span class=\"" + tokenList[i].label + "\">&gt;</span>";    
                    }
                    else{
                        markUpString[i] = "<span class=\"" + tokenList[i].label + "\">" + codeString[i] + "</span>";        
                    }
                }
                else{
                    //multi-character match
                    if( codeString[i] == "<" ){
                        markUpString[i] = "<span class=\"" + tokenList[i].label + "\">&lt;";    
                    }
                    else if( codeString[i] == ">" ){
                        markUpString[i] = "<span class=\"" + tokenList[i].label + "\">&gt;";    
                    }
                    else{
                        markUpString[i] = "<span class=\"" + tokenList[i].label + "\">" + codeString[i];        
                    }
                    //closing tag
                    if( codeString[tokenList[i].end-1] == "<" ){
                        markUpString[tokenList[i].end-1] = "&lt;</span>";    
                    }
                    else if( codeString[tokenList[i].end-1] == ">" ){
                        markUpString[tokenList[i].end-1] = "&gt;</span>";    
                    }
                    else{
                        markUpString[tokenList[i].end-1] = codeString[tokenList[i].end-1] + "</span>";
                    }
                }
            }
            else if( markUpString[i] == undefined ){
                //this is not a token start or end
                if( codeString[i] == "<" ){
                    markUpString[i] = "&lt;";
                }
                else if( codeString[i] == ">" ){
                    markUpString[i] = "&gt;";
                }
                else{
                    markUpString[i] = codeString[i];
                }
            }
        }
        var returnCode = markUpString.join("");
        //return the marked up string
        return returnCode;
    }
};