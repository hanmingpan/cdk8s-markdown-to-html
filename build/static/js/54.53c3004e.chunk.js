(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{853:function(a,e,n){!function(a){"use strict";a.defineMode("gherkin",function(){return{startState:function(){return{lineNumber:0,tableHeaderLine:!1,allowFeature:!0,allowBackground:!1,allowScenario:!1,allowSteps:!1,allowPlaceholders:!1,allowMultilineArgument:!1,inMultilineString:!1,inMultilineTable:!1,inKeywordLine:!1}},token:function(a,e){if(a.sol()&&(e.lineNumber++,e.inKeywordLine=!1,e.inMultilineTable&&(e.tableHeaderLine=!1,a.match(/\s*\|/,!1)||(e.allowMultilineArgument=!1,e.inMultilineTable=!1))),a.eatSpace(),e.allowMultilineArgument){if(e.inMultilineString)return a.match('"""')?(e.inMultilineString=!1,e.allowMultilineArgument=!1):a.match(/.*/),"string";if(e.inMultilineTable)return a.match(/\|\s*/)?"bracket":(a.match(/[^\|]*/),e.tableHeaderLine?"header":"string");if(a.match('"""'))return e.inMultilineString=!0,"string";if(a.match("|"))return e.inMultilineTable=!0,e.tableHeaderLine=!0,"bracket"}return a.match(/#.*/)?"comment":!e.inKeywordLine&&a.match(/@\S+/)?"tag":!e.inKeywordLine&&e.allowFeature&&a.match(/(\u6a5f\u80fd|\u529f\u80fd|\u30d5\u30a3\u30fc\u30c1\u30e3|\uae30\ub2a5|\u0e42\u0e04\u0e23\u0e07\u0e2b\u0e25\u0e31\u0e01|\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16|\u0e04\u0e27\u0e32\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e32\u0e07\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08|\u0cb9\u0cc6\u0c9a\u0ccd\u0c9a\u0cb3|\u0c17\u0c41\u0c23\u0c2e\u0c41|\u0a2e\u0a41\u0a39\u0a3e\u0a02\u0a26\u0a30\u0a3e|\u0a28\u0a15\u0a36 \u0a28\u0a41\u0a39\u0a3e\u0a30|\u0a16\u0a3e\u0a38\u0a40\u0a05\u0a24|\u0930\u0942\u092a \u0932\u0947\u0916|\u0648\u0650\u06cc\u0698\u06af\u06cc|\u062e\u0627\u0635\u064a\u0629|\u05ea\u05db\u05d5\u05e0\u05d4|\u0424\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b|\u0424\u0443\u043d\u043a\u0446\u0438\u044f|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u043d\u043e\u0441\u0442|\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b|\u04ae\u0437\u0435\u043d\u0447\u04d9\u043b\u0435\u043a\u043b\u0435\u043b\u0435\u043a|\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e|\u041e\u0441\u043e\u0431\u0438\u043d\u0430|\u041c\u04e9\u043c\u043a\u0438\u043d\u043b\u0435\u043a|\u041c\u043e\u0433\u0443\u045b\u043d\u043e\u0441\u0442|\u039b\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03af\u03b1|\u0394\u03c5\u03bd\u03b1\u03c4\u03cc\u03c4\u03b7\u03c4\u03b1|W\u0142a\u015bciwo\u015b\u0107|Vlastnos\u0165|Trajto|T\xednh n\u0103ng|Savyb\u0117|Pretty much|Po\u017eiadavka|Po\u017eadavek|Potrzeba biznesowa|\xd6zellik|Osobina|Ominaisuus|Omadus|OH HAI|Mogu\u0107nost|Mogucnost|Jellemz\u0151|Hw\xe6t|Hwaet|Funzionalit\xe0|Funktionalit\xe9it|Funktionalit\xe4t|Funkcja|Funkcionalnost|Funkcionalit\u0101te|Funkcia|Fungsi|Functionaliteit|Func\u021bionalitate|Func\u0163ionalitate|Functionalitate|Funcionalitat|Funcionalidade|Fonctionnalit\xe9|Fitur|F\u012b\u010da|Feature|Eiginleiki|Egenskap|Egenskab|Caracter\xedstica|Caracteristica|Business Need|Aspekt|Arwedd|Ahoy matey!|Ability):/)?(e.allowScenario=!0,e.allowBackground=!0,e.allowPlaceholders=!1,e.allowSteps=!1,e.allowMultilineArgument=!1,e.inKeywordLine=!0,"keyword"):!e.inKeywordLine&&e.allowBackground&&a.match(/(\u80cc\u666f|\ubc30\uacbd|\u0e41\u0e19\u0e27\u0e04\u0e34\u0e14|\u0cb9\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6\u0cb2\u0cc6|\u0c28\u0c47\u0c2a\u0c25\u0c4d\u0c2f\u0c02|\u0a2a\u0a3f\u0a1b\u0a4b\u0a15\u0a5c|\u092a\u0943\u0937\u094d\u0920\u092d\u0942\u092e\u093f|\u0632\u0645\u06cc\u0646\u0647|\u0627\u0644\u062e\u0644\u0641\u064a\u0629|\u05e8\u05e7\u05e2|\u0422\u0430\u0440\u0438\u0445|\u041f\u0440\u0435\u0434\u044b\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u0440\u0435\u0434\u0438\u0441\u0442\u043e\u0440\u0438\u044f|\u041f\u043e\u0437\u0430\u0434\u0438\u043d\u0430|\u041f\u0435\u0440\u0435\u0434\u0443\u043c\u043e\u0432\u0430|\u041e\u0441\u043d\u043e\u0432\u0430|\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442|\u041a\u0435\u0440\u0435\u0448|\u03a5\u03c0\u03cc\u03b2\u03b1\u03b8\u03c1\u03bf|Za\u0142o\u017cenia|Yo\-ho\-ho|Tausta|Taust|Situ\u0101cija|Rerefons|Pozadina|Pozadie|Pozad\xed|Osnova|Latar Belakang|Kontext|Konteksts|Kontekstas|Kontekst|H\xe1tt\xe9r|Hannergrond|Grundlage|Ge\xe7mi\u015f|Fundo|Fono|First off|Dis is what went down|Dasar|Contexto|Contexte|Context|Contesto|Cen\xe1rio de Fundo|Cenario de Fundo|Cefndir|B\u1ed1i c\u1ea3nh|Bakgrunnur|Bakgrunn|Bakgrund|Baggrund|Background|B4|Antecedents|Antecedentes|\xc6r|Aer|Achtergrond):/)?(e.allowPlaceholders=!1,e.allowSteps=!0,e.allowBackground=!1,e.allowMultilineArgument=!1,e.inKeywordLine=!0,"keyword"):!e.inKeywordLine&&e.allowScenario&&a.match(/(\u5834\u666f\u5927\u7db1|\u573a\u666f\u5927\u7eb2|\u5287\u672c\u5927\u7db1|\u5267\u672c\u5927\u7eb2|\u30c6\u30f3\u30d7\u30ec|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8|\u30b7\u30ca\u30ea\u30aa\u30c6\u30f3\u30d7\u30ec|\u30b7\u30ca\u30ea\u30aa\u30a2\u30a6\u30c8\u30e9\u30a4\u30f3|\uc2dc\ub098\ub9ac\uc624 \uac1c\uc694|\u0e2a\u0e23\u0e38\u0e1b\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0cb5\u0cbf\u0cb5\u0cb0\u0ca3\u0cc6|\u0c15\u0c25\u0c28\u0c02|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a30\u0a42\u0a2a \u0a30\u0a47\u0a16\u0a3e|\u0a2a\u0a1f\u0a15\u0a25\u0a3e \u0a22\u0a3e\u0a02\u0a1a\u0a3e|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f \u0930\u0942\u092a\u0930\u0947\u0916\u093e|\u0633\u064a\u0646\u0627\u0631\u064a\u0648 \u0645\u062e\u0637\u0637|\u0627\u0644\u06af\u0648\u06cc \u0633\u0646\u0627\u0631\u06cc\u0648|\u05ea\u05d1\u05e0\u05d9\u05ea \u05ea\u05e8\u05d7\u05d9\u05e9|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439\u043d\u044b\u04a3 \u0442\u04e9\u0437\u0435\u043b\u0435\u0448\u0435|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u0441\u0438|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0456\u044e|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f|\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0430|\u0421\u043a\u0438\u0446\u0430|\u0420\u0430\u043c\u043a\u0430 \u043d\u0430 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u041a\u043e\u043d\u0446\u0435\u043f\u0442|\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03b5\u03bd\u03b1\u03c1\u03af\u03bf\u03c5|Wharrimean is|Template Situai|Template Senario|Template Keadaan|Tapausaihio|Szenariogrundriss|Szablon scenariusza|Swa hw\xe6r swa|Swa hwaer swa|Struktura scenarija|Structur\u0103 scenariu|Structura scenariu|Skica|Skenario konsep|Shiver me timbers|Senaryo tasla\u011f\u0131|Schema dello scenario|Scenariomall|Scenariomal|Scenario Template|Scenario Outline|Scenario Amlinellol|Scen\u0101rijs p\u0113c parauga|Scenarijaus \u0161ablonas|Reckon it's like|Raamstsenaarium|Plang vum Szenario|Plan du Sc\xe9nario|Plan du sc\xe9nario|Osnova sc\xe9n\xe1\u0159e|Osnova Scen\xe1ra|N\xe1\u010drt Scen\xe1ru|N\xe1\u010drt Sc\xe9n\xe1\u0159e|N\xe1\u010drt Scen\xe1ra|MISHUN SRSLY|Menggariskan Senario|L\xfdsing D\xe6ma|L\xfdsing Atbur\xf0ar\xe1sar|Konturo de la scenaro|Koncept|Khung t\xecnh hu\u1ed1ng|Khung k\u1ecbch b\u1ea3n|Forgat\xf3k\xf6nyv v\xe1zlat|Esquema do Cen\xe1rio|Esquema do Cenario|Esquema del escenario|Esquema de l'escenari|Esbozo do escenario|Delinea\xe7\xe3o do Cen\xe1rio|Delineacao do Cenario|All y'all|Abstrakt Scenario|Abstract Scenario):/)?(e.allowPlaceholders=!0,e.allowSteps=!0,e.allowMultilineArgument=!1,e.inKeywordLine=!0,"keyword"):e.allowScenario&&a.match(/(\u4f8b\u5b50|\u4f8b|\u30b5\u30f3\u30d7\u30eb|\uc608|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0e0a\u0e38\u0e14\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07|\u0c89\u0ca6\u0cbe\u0cb9\u0cb0\u0ca3\u0cc6\u0c97\u0cb3\u0cc1|\u0c09\u0c26\u0c3e\u0c39\u0c30\u0c23\u0c32\u0c41|\u0a09\u0a26\u0a3e\u0a39\u0a30\u0a28\u0a3e\u0a02|\u0909\u0926\u093e\u0939\u0930\u0923|\u0646\u0645\u0648\u0646\u0647 \u0647\u0627|\u0627\u0645\u062b\u0644\u0629|\u05d3\u05d5\u05d2\u05de\u05d0\u05d5\u05ea|\u04ae\u0440\u043d\u04d9\u043a\u043b\u04d9\u0440|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0458\u0438|\u041f\u0440\u0438\u043c\u0435\u0440\u044b|\u041f\u0440\u0438\u043c\u0435\u0440\u0438|\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438|\u041c\u0438\u0441\u043e\u043b\u043b\u0430\u0440|\u041c\u0438\u0441\u0430\u043b\u043b\u0430\u0440|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03b1|\u03a0\u03b1\u03c1\u03b1\u03b4\u03b5\u03af\u03b3\u03bc\u03b1\u03c4\u03b1|You'll wanna|Voorbeelden|Variantai|Tapaukset|Se \xfee|Se the|Se \xf0e|Scenarios|Scenariji|Scenarijai|Przyk\u0142ady|Primjeri|Primeri|P\u0159\xedklady|Pr\xedklady|Piem\u0113ri|P\xe9ld\xe1k|Pavyzd\u017eiai|Paraugs|\xd6rnekler|Juhtumid|Exemplos|Exemples|Exemple|Exempel|EXAMPLZ|Examples|Esempi|Enghreifftiau|Ekzemploj|Eksempler|Ejemplos|D\u1eef li\u1ec7u|Dead men tell no tales|D\xe6mi|Contoh|Cen\xe1rios|Cenarios|Beispiller|Beispiele|Atbur\xf0ar\xe1sir):/)?(e.allowPlaceholders=!1,e.allowSteps=!0,e.allowBackground=!1,e.allowMultilineArgument=!0,"keyword"):!e.inKeywordLine&&e.allowScenario&&a.match(/(\u5834\u666f|\u573a\u666f|\u5287\u672c|\u5267\u672c|\u30b7\u30ca\u30ea\u30aa|\uc2dc\ub098\ub9ac\uc624|\u0e40\u0e2b\u0e15\u0e38\u0e01\u0e32\u0e23\u0e13\u0e4c|\u0c95\u0ca5\u0cbe\u0cb8\u0cbe\u0cb0\u0cbe\u0c82\u0cb6|\u0c38\u0c28\u0c4d\u0c28\u0c3f\u0c35\u0c47\u0c36\u0c02|\u0a2a\u0a1f\u0a15\u0a25\u0a3e|\u092a\u0930\u093f\u0926\u0943\u0936\u094d\u092f|\u0633\u064a\u0646\u0627\u0631\u064a\u0648|\u0633\u0646\u0627\u0631\u06cc\u0648|\u05ea\u05e8\u05d7\u05d9\u05e9|\u0421\u0446\u0435\u043d\u0430\u0440\u0456\u0439|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u043e|\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439|\u041f\u0440\u0438\u043c\u0435\u0440|\u03a3\u03b5\u03bd\u03ac\u03c1\u03b9\u03bf|T\xecnh hu\u1ed1ng|The thing of it is|Tapaus|Szenario|Swa|Stsenaarium|Skenario|Situai|Senaryo|Senario|Scenaro|Scenariusz|Scenariu|Sc\xe9nario|Scenario|Scenarijus|Scen\u0101rijs|Scenarij|Scenarie|Sc\xe9n\xe1\u0159|Scen\xe1r|Primer|MISHUN|K\u1ecbch b\u1ea3n|Keadaan|Heave to|Forgat\xf3k\xf6nyv|Escenario|Escenari|Cen\xe1rio|Cenario|Awww, look mate|Atbur\xf0ar\xe1s):/)?(e.allowPlaceholders=!1,e.allowSteps=!0,e.allowBackground=!1,e.allowMultilineArgument=!1,e.inKeywordLine=!0,"keyword"):!e.inKeywordLine&&e.allowSteps&&a.match(/(\u90a3\u9ebc|\u90a3\u4e48|\u800c\u4e14|\u7576|\u5f53|\u5e76\u4e14|\u540c\u6642|\u540c\u65f6|\u524d\u63d0|\u5047\u8bbe|\u5047\u8a2d|\u5047\u5b9a|\u5047\u5982|\u4f46\u662f|\u4f46\u3057|\u4e26\u4e14|\u3082\u3057|\u306a\u3089\u3070|\u305f\u3060\u3057|\u3057\u304b\u3057|\u304b\u3064|\ud558\uc9c0\ub9cc|\uc870\uac74|\uba3c\uc800|\ub9cc\uc77c|\ub9cc\uc57d|\ub2e8|\uadf8\ub9ac\uace0|\uadf8\ub7ec\uba74|\u0e41\u0e25\u0e30 |\u0e40\u0e21\u0e37\u0e48\u0e2d |\u0e41\u0e15\u0e48 |\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19 |\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e43\u0e2b\u0e49 |\u0cb8\u0ccd\u0ca5\u0cbf\u0ca4\u0cbf\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 |\u0cae\u0ca4\u0ccd\u0ca4\u0cc1 |\u0ca8\u0cbf\u0cd5\u0ca1\u0cbf\u0ca6 |\u0ca8\u0c82\u0ca4\u0cb0 |\u0c86\u0ca6\u0cb0\u0cc6 |\u0c2e\u0c30\u0c3f\u0c2f\u0c41 |\u0c1a\u0c46\u0c2a\u0c4d\u0c2a\u0c2c\u0c21\u0c3f\u0c28\u0c26\u0c3f |\u0c15\u0c3e\u0c28\u0c3f |\u0c08 \u0c2a\u0c30\u0c3f\u0c38\u0c4d\u0c25\u0c3f\u0c24\u0c3f\u0c32\u0c4b |\u0c05\u0c2a\u0c4d\u0c2a\u0c41\u0c21\u0c41 |\u0a2a\u0a30 |\u0a24\u0a26 |\u0a1c\u0a47\u0a15\u0a30 |\u0a1c\u0a3f\u0a35\u0a47\u0a02 \u0a15\u0a3f |\u0a1c\u0a26\u0a4b\u0a02 |\u0a05\u0a24\u0a47 |\u092f\u0926\u093f |\u092a\u0930\u0928\u094d\u0924\u0941 |\u092a\u0930 |\u0924\u092c |\u0924\u0926\u093e |\u0924\u0925\u093e |\u091c\u092c |\u091a\u0942\u0902\u0915\u093f |\u0915\u093f\u0928\u094d\u0924\u0941 |\u0915\u0926\u093e |\u0914\u0930 |\u0905\u0917\u0930 |\u0648 |\u0647\u0646\u06af\u0627\u0645\u06cc |\u0645\u062a\u0649 |\u0644\u0643\u0646 |\u0639\u0646\u062f\u0645\u0627 |\u062b\u0645 |\u0628\u0641\u0631\u0636 |\u0628\u0627 \u0641\u0631\u0636 |\u0627\u0645\u0627 |\u0627\u0630\u0627\u064b |\u0622\u0646\u06af\u0627\u0647 |\u05db\u05d0\u05e9\u05e8 |\u05d5\u05d2\u05dd |\u05d1\u05d4\u05d9\u05e0\u05ea\u05df |\u05d0\u05d6\u05d9 |\u05d0\u05d6 |\u05d0\u05d1\u05dc |\u042f\u043a\u0449\u043e |\u04ba\u04d9\u043c |\u0423\u043d\u0434\u0430 |\u0422\u043e\u0434\u0456 |\u0422\u043e\u0433\u0434\u0430 |\u0422\u043e |\u0422\u0430\u043a\u0436\u0435 |\u0422\u0430 |\u041f\u0443\u0441\u0442\u044c |\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e, \u0449\u043e |\u041f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e |\u041e\u043d\u0434\u0430 |\u041d\u043e |\u041d\u0435\u0445\u0430\u0439 |\u041d\u04d9\u0442\u0438\u0497\u04d9\u0434\u04d9 |\u041b\u0435\u043a\u0438\u043d |\u041b\u04d9\u043a\u0438\u043d |\u041a\u043e\u043b\u0438 |\u041a\u043e\u0433\u0434\u0430 |\u041a\u043e\u0433\u0430\u0442\u043e |\u041a\u0430\u0434\u0430 |\u041a\u0430\u0434 |\u041a \u0442\u043e\u043c\u0443 \u0436\u0435 |\u0406 |\u0418 |\u0417\u0430\u0434\u0430\u0442\u043e |\u0417\u0430\u0434\u0430\u0442\u0438 |\u0417\u0430\u0434\u0430\u0442\u0435 |\u0415\u0441\u043b\u0438 |\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c |\u0414\u0430\u043d\u043e |\u0414\u0430\u0434\u0435\u043d\u043e |\u0412\u04d9 |\u0412\u0430 |\u0411\u0438\u0440\u043e\u043a |\u04d8\u043c\u043c\u0430 |\u04d8\u0439\u0442\u0438\u043a |\u04d8\u0433\u04d9\u0440 |\u0410\u043c\u043c\u043e |\u0410\u043b\u0438 |\u0410\u043b\u0435 |\u0410\u0433\u0430\u0440 |\u0410 \u0442\u0430\u043a\u043e\u0436 |\u0410 |\u03a4\u03cc\u03c4\u03b5 |\u038c\u03c4\u03b1\u03bd |\u039a\u03b1\u03b9 |\u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5 |\u0391\u03bb\u03bb\u03ac |\xdeurh |\xdeegar |\xdea \xfee |\xde\xe1 |\xdea |Zatati |Zak\u0142adaj\u0105c |Zadato |Zadate |Zadano |Zadani |Zadan |Za p\u0159edpokladu |Za predpokladu |Youse know when youse got |Youse know like when |Yna |Yeah nah |Y'know |Y |Wun |Wtedy |When y'all |When |Wenn |WEN |wann |Ve |V\xe0 |Und |Un |ugeholl |Too right |Thurh |Th\xec |Then y'all |Then |Tha the |Tha |Tetapi |Tapi |Tak |Tada |Tad |Stel |Soit |Siis |\u0218i |\u015ei |Si |Sed |Se |S\xe5 |Quando |Quand |Quan |Pryd |Potom |Pokud |Pokia\u013e |Per\xf2 |Pero |Pak |Oraz |Onda |Ond |Oletetaan |Og |Och |O zaman |Niin |Nh\u01b0ng |N\xe4r |N\xe5r |Mutta |Men |Mas |Maka |Majd |Maj\u0105c |Mais |Maar |m\xe4 |Ma |Lorsque |Lorsqu'|Logo |Let go and haul |Kun |Kuid |Kui |Kiedy |Khi |Ketika |Kemudian |Ke\u010f |Kdy\u017e |Kaj |Kai |Kada |Kad |Je\u017celi |Je\u015bli |Ja |It's just unbelievable |Ir |I CAN HAZ |I |Ha |Givun |Givet |Given y'all |Given |Gitt |Gegeven |Gegeben seien |Gegeben sei |Gdy |Gangway! |Fakat |\xc9tant donn\xe9s |Etant donn\xe9s |\xc9tant donn\xe9es |Etant donn\xe9es |\xc9tant donn\xe9e |Etant donn\xe9e |\xc9tant donn\xe9 |Etant donn\xe9 |Et |\xc9s |Entonces |Ent\xf3n |Ent\xe3o |Entao |En |E\u011fer ki |Ef |Eeldades |E |\xd0urh |Duota |Dun |Donita\u0135o |Donat |Donada |Do |Diyelim ki |Diberi |Dengan |Den youse gotta |DEN |De |Dato |Da\u021bi fiind |Da\u0163i fiind |Dati fiind |Dati |Date fiind |Date |Data |Dat fiind |Dar |Dann |dann |Dan |Dados |Dado |Dadas |Dada |\xd0a \xf0e |\xd0a |Cuando |Cho |Cando |C\xe2nd |Cand |Cal |But y'all |But at the end of the day I reckon |BUT |But |Buh |Blimey! |Bi\u1ebft |Bet |Bagi |Aye |awer |Avast! |Atunci |Atesa |At\xe8s |Apabila |Anrhegedig a |Angenommen |And y'all |And |AN |An |an |Amikor |Amennyiben |Ama |Als |Alors |Allora |Ali |Aleshores |Ale |Akkor |Ak |Adott |Ac |Aber |A z\xe1rove\u0148 |A tie\u017e |A taktie\u017e |A tak\xe9 |A |a |7 |\* )/)?(e.inStep=!0,e.allowPlaceholders=!0,e.allowMultilineArgument=!0,e.inKeywordLine=!0,"keyword"):a.match(/"[^"]*"?/)?"string":e.allowPlaceholders&&a.match(/<[^>]*>?/)?"variable":(a.next(),a.eatWhile(/[^@"<#]/),null)}}}),a.defineMIME("text/x-feature","gherkin")}(n(37))}}]);
//# sourceMappingURL=54.53c3004e.chunk.js.map