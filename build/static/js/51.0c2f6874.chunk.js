(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{849:function(t,E,e){!function(t){"use strict";function E(t){var E=[];return t.split(" ").forEach(function(t){E.push({name:t})}),E}var e=E("INVERT AND OR XOR 2* 2/ LSHIFT RSHIFT 0= = 0< < > U< MIN MAX 2DROP 2DUP 2OVER 2SWAP ?DUP DEPTH DROP DUP OVER ROT SWAP >R R> R@ + - 1+ 1- ABS NEGATE S>D * M* UM* FM/MOD SM/REM UM/MOD */ */MOD / /MOD MOD HERE , @ ! CELL+ CELLS C, C@ C! CHARS 2@ 2! ALIGN ALIGNED +! ALLOT CHAR [CHAR] [ ] BL FIND EXECUTE IMMEDIATE COUNT LITERAL STATE ; DOES> >BODY EVALUATE SOURCE >IN <# # #S #> HOLD SIGN BASE >NUMBER HEX DECIMAL FILL MOVE . CR EMIT SPACE SPACES TYPE U. .R U.R ACCEPT TRUE FALSE <> U> 0<> 0> NIP TUCK ROLL PICK 2>R 2R@ 2R> WITHIN UNUSED MARKER I J TO COMPILE, [COMPILE] SAVE-INPUT RESTORE-INPUT PAD ERASE 2LITERAL DNEGATE D- D+ D0< D0= D2* D2/ D< D= DMAX DMIN D>S DABS M+ M*/ D. D.R 2ROT DU< CATCH THROW FREE RESIZE ALLOCATE CS-PICK CS-ROLL GET-CURRENT SET-CURRENT FORTH-WORDLIST GET-ORDER SET-ORDER PREVIOUS SEARCH-WORDLIST WORDLIST FIND ALSO ONLY FORTH DEFINITIONS ORDER -TRAILING /STRING SEARCH COMPARE CMOVE CMOVE> BLANK SLITERAL"),i=E("IF ELSE THEN BEGIN WHILE REPEAT UNTIL RECURSE [IF] [ELSE] [THEN] ?DO DO LOOP +LOOP UNLOOP LEAVE EXIT AGAIN CASE OF ENDOF ENDCASE");t.defineMode("forth",function(){function t(t,E){var e;for(e=t.length-1;e>=0;e--)if(t[e].name===E.toUpperCase())return t[e]}return{startState:function(){return{state:"",base:10,coreWordList:e,immediateWordList:i,wordList:[]}},token:function(E,e){var i;if(E.eatSpace())return null;if(""===e.state){if(E.match(/^(\]|:NONAME)(\s|$)/i))return e.state=" compilation","builtin compilation";if(i=E.match(/^(\:)\s+(\S+)(\s|$)+/))return e.wordList.push({name:i[2].toUpperCase()}),e.state=" compilation","def"+e.state;if(i=E.match(/^(VARIABLE|2VARIABLE|CONSTANT|2CONSTANT|CREATE|POSTPONE|VALUE|WORD)\s+(\S+)(\s|$)+/i))return e.wordList.push({name:i[2].toUpperCase()}),"def"+e.state;if(i=E.match(/^(\'|\[\'\])\s+(\S+)(\s|$)+/))return"builtin"+e.state}else{if(E.match(/^(\;|\[)(\s)/))return e.state="",E.backUp(1),"builtin compilation";if(E.match(/^(\;|\[)($)/))return e.state="","builtin compilation";if(E.match(/^(POSTPONE)\s+\S+(\s|$)+/))return"builtin"}return(i=E.match(/^(\S+)(\s+|$)/))?void 0!==t(e.wordList,i[1])?"variable"+e.state:"\\"===i[1]?(E.skipToEnd(),"comment"+e.state):void 0!==t(e.coreWordList,i[1])?"builtin"+e.state:void 0!==t(e.immediateWordList,i[1])?"keyword"+e.state:"("===i[1]?(E.eatWhile(function(t){return")"!==t}),E.eat(")"),"comment"+e.state):".("===i[1]?(E.eatWhile(function(t){return")"!==t}),E.eat(")"),"string"+e.state):'S"'===i[1]||'."'===i[1]||'C"'===i[1]?(E.eatWhile(function(t){return'"'!==t}),E.eat('"'),"string"+e.state):i[1]-68719476735?"number"+e.state:"atom"+e.state:void 0}}}),t.defineMIME("text/x-forth","forth")}(e(37))}}]);
//# sourceMappingURL=51.0c2f6874.chunk.js.map