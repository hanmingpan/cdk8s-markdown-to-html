(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{873:function(e,t,n){!function(e){"use strict";e.defineMode("mumps",function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var t=new RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),n=new RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),$=new RegExp("^[\\.,:]"),o=new RegExp("[()]"),a=new RegExp("^[%A-Za-z][A-Za-z0-9]*"),r=e(["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"]),c=e(["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"]);return{startState:function(){return{label:!1,commandMode:0}},token:function(e,i){var m=function(e,i){e.sol()&&(i.label=!0,i.commandMode=0);var m=e.peek();return" "==m||"\t"==m?(i.label=!1,0==i.commandMode?i.commandMode=1:(i.commandMode<0||2==i.commandMode)&&(i.commandMode=0)):"."!=m&&i.commandMode>0&&(i.commandMode=":"==m?-1:2),"("!==m&&"\t"!==m||(i.label=!1),";"===m?(e.skipToEnd(),"comment"):e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":'"'==m?e.skipTo('"')?(e.next(),"string"):(e.skipToEnd(),"error"):e.match(n)||e.match(t)?"operator":e.match($)?null:o.test(m)?(e.next(),"bracket"):i.commandMode>0&&e.match(c)?"variable-2":e.match(r)?"builtin":e.match(a)?"variable":"$"===m||"^"===m?(e.next(),"builtin"):"@"===m?(e.next(),"string-2"):/[\w%]/.test(m)?(e.eatWhile(/[\w%]/),"variable"):(e.next(),"error")}(e,i);return i.label?"tag":m}}}),e.defineMIME("text/x-mumps","mumps")}(n(37))}}]);
//# sourceMappingURL=71.f14232ad.chunk.js.map