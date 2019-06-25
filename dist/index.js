var version = "0.1";

var bar = "with tree shaking! ";

var grumpy = [
	"█▄                        ▄▄███",
	"███▄                    ▄██████",
	"█████▄                 ▄███████",
	"███████▄    ▄▄▄▄▄    ▄█████████",
	"█████████▄▀▀░░░░░▀▀▀▄██████████",
	"▀█████▀░░░░░░░░░░░░░░▀████████ ",
	" ▀██▀░░░░░░░░░░░░░░░░░░░▀████▌ ",
	"  ██░░░░░░░░░░░░░░░░░░░░░░███  ",
	"  █▀░░░░░░░░░░░░░░░░░░░░░░░██  ",
	"  █░░▄████▄░░░░░▄████▄░░░░░░█  ",
	"  █░░█▐▄█▐█░░░░░█▐▄█▐█░░░░░░█▄ ",
	"  █░░██▄▄██░░░░░██▄▄██░░░░░░░█ ",
	" ▐▌░░░░░░░░░░░░░░░░░░░░░░░░░░▐▌",
	" ▐▌░░░░░░░▀▄▄▄▄▀░░░░░░░░░░░░░▐▌",
	" ▐▌░░░░░░░░░▐▌░░░░░░░░░░░░░░░▐▌",
	" ▐▌░░░░░░░▄▀▀▀▀▄░░░░░░░░░░░░░▐▌",
	"  █▄░░░░░▀░░░░░░▀░░░░░░░░░░░░█▌",
	"  ▐█▀▄▄░░░░░░░░░░░░░░░░░░▄▄▀▀░█",
	" ▐▌░░░░▀▀▄▄░░░░░░░░▄▄▄▄▀▀░░░░░█",
	" █░░░░░░░░░▀▀▄▄▄▀▀▀░░░░░░░░░░░█",
	"▐▌░░░░░░░░░░░░░░░░░░░░░░░░░░░░█",
	"▐▌░░░░░░░░░░░░░░░░░░░░░░░░░░░░█"
];
var approaching = [
	" /\\     /\\",
	"{  `---'  }",
	"{  O   O  }",
	"~~>  V  <~~",
	" \\  \\|/  /",
	"  `-----'__",
	"  /     \\  `^\\_",
	" {       }\\ |\\_\\_   W",
	" |  \\_/  |/ /  \\_\\_( )",
	"  \\__/  /(_E     \\__/",
	"    (  /",
	"     MM"
];
var tubby = [
	"  /\\ ___ /\\",
	" (  o   o  )",
	"  \\  >#<  /",
	"  /       \\",
	" /         \\       ^",
	"|           |     //",
	" \\         /    //",
	"  ///  ///   --"
];
var confused = [
	"    /\\__/\\",
	"   /`    '\\",
	" === 0  0 ===",
	"   \\  --  /",
	"  /        \\",
	" /          \\",
	"|            |",
	" \\  ||  ||  /",
	"  \\_oo__oo_/#######o"
];
var playful = [
	" /\\     /\\",
	"{  `---'  }",
	"{  O   O  }",
	"~~>  V  <~~",
	" \\  \\|/  /",
	"  `-----'____",
	"  /     \\    \\_",
	" {       }\\  )_\\_   _",
	" |  \\_/  |/ /  \\_\\_/ )",
	"  \\__/  /(_/     \\__/",
	"    (__/"
];
var thoughtful = [
	"                   ;,_            ,",
	"                  _uP~\"b          d\"u,",
	"                 dP'   \"b       ,d\"  \"o",
	"                d\"    , `b     d\"'    \"b",
	"               l] [    \" `l,  d\"       lb",
	"               Ol ?     \"  \"b`\"=uoqo,_  \"l",
	"             ,dBb \"b        \"b,    `\"~~TObup,_",
	"           ,d\" (db.`\"         \"\"     \"tbc,_ `~\"Yuu,_",
	"         .d\" l`T'  '=                      ~     `\"\"Yu,",
	"       ,dO` gP,                           `u,   b,_  \"b7",
	"      d?' ,d\" l,                           `\"b,_ `~b  \"1",
	"    ,8i' dl   `l                 ,ggQOV\",dbgq,._\"  `l  lb",
	"   .df' (O,    \"             ,ggQY\"~  , @@@@@d\"bd~  `b \"1",
	"  .df'   `\"           -=@QgpOY\"\"     (b  @@@@P db    `Lp\"b,",
	" .d(                  _               \"ko \"=d_,Q`  ,_  \"  \"b,",
	" Ql         .         `\"qo,._          \"tQo,_`\"\"bo ;tb,    `\"b,",
	"(qQ         |L           ~\"QQQgggc,_.,dObc,opooO  `\"~~\";.   __,7,",
	"`qp         t\\io,_           `~\"TOOggQV\"\"\"\"        _,dg,_ =PIQHib.",
	" `qp        `Q[\"tQQQo,_                          ,pl{QOP\"'   7AFR`",
	"   `         `tb  '\"\"tQQQg,_             p\" \"b   `       .;-.`Vl'",
	"              \"Yb      `\"tQOOo,__    _,edb    ` .__   /`/'|  |b;=;.__",
	"                            `\"tQQQOOOOP\"\"        `\"\\QV;qQObob\"`-._`\\_~~-._",
	"                                 \"\"\"\"    ._        /   | |oP\"\\_   ~\\ ~\\_  ~\\",
	"                                         `~\"\\ic,qggddOOP\"|  |  ~\\   `\\  ~-._",
	"                                           ,qP`\"\"\"|\"   | `\\ `;   `\\   `\\",
	"                                _        _,p\"     |    |   `\\`;    |    |",
	"                                 \"boo,._dP\"       `\\_  `\\    `\\|   `\\   ;",
	"                                  `\"7tY~'            `\\  `\\    `|_   |",
	"                                                           `~\\  |"
];
var delighted = [
	"                    .............                .\"\"\".             .\"\"\".",
	"            ...\"\"\"\"\"             \"\"\"\"\"...       $   . \".         .\" .   $",
	"        ..\"\"        .   .   .   .   .    ..    $   $$$. \". ... .\" .$$$   $",
	"      .\"    . \" . \" . \" . \" . \" . \" . \" .  \"\" .\"  $$$\"\"\"  \"   \"  \"\"\"$$$  \".",
	"    .\"      . \" . \" . \" . \" . \" . \" . \" .     $  \"                    \"   $",
	"   .\"   . \" . \" . \"           \"   \" . \" . \"  .\"      ...          ...     \".",
	"  .\"    . \" . \"    ..\"\"\"\"\"\"\"\"\"...     \" . \"  $     .$\"              \"$.    $",
	" .\"     . \" . \" .\"\"     .   .    \"\"..   . \" $ \".      .\"\"$     .\"\"$      .\" $",
	".\"    \" . \" .       . \" . \" . \" .    $    \" $ \"      \"  $$    \"  $$       \" $",
	"$     \" . \" . \" . \" . \" . \" . \" . \"   $     $             $$.$$             $",
	"$     \" . \" . \" . \" . \" . \" . \" . \" .  $  \" $  \" .        $$$$$        . \"  $",
	"$     \" . \" . \" . \" . \" . \" . \" . \" .  $    $      \"  ..   \"$\"   ..  \"      $",
	"\".    \" . \" . \" . \" . \" . \" . \" . \"   .\"  \"  $  . . . $  . .\". .  $ . . .  $",
	" $    \" . \" . \" . \" . \" . \" . \" . \"  .\"   \"            \"..\"   \"..\"",
	"  $     . \" . \" . \" . \" . \" . \"   ..\"   . \" . \"..    \"             \"    ..\"",
	"  \".      \" . \" . \" . \" . \" .  .\"\"    \" . \" .    \"\"\"$...         ...$\"\"\"",
	"   \". \"..     \" . \" . \" . \" .  \"........  \"    .....  .\"\"\".....\"\"\"",
	"     \". .\"$\".....                       $...\"$\"$\".\"   $\".$\"... `\":....",
	"       \"\"..\"    $\"$\"$\"$\"\"\"$........$\"$\"$\"  .\".\".\"  ...\"\"      .\"\".    `\"\".",
	"           \"\"\".$.$.\" .\"  .\".\".\"    .\".\".\" $.$.$\"\"\"\".......  \". \". $ \". \". $",
	"                  \"\"\".$.$.$.$.....$.$.\"\"\"\"               \"\"..$..$.\"..$..$."
];
var nyan = [
	"  ☆    ☆  ☆      ",
	"┈┈┈┈ ╭━━━━━━╮  ☆   ",
	"┈☆ ┈┈┃╳╳╳▕╲▂▂╱▏  ",
	"┈┈☆ ┈┃╳╳╳▕▏▍▕▍▏  ",
	"┈┈ ╰━┫╳╳╳▕▏╰┻╯▏  ",
	"☆ ┈┈┈┃╳╳╳╳╲▂▂╱   ",
	"   ☆ ╰┳┳━━┳┳╯   ☆"
];
var resting = [
	"                           |        |",
	"                           |\\      /|",
	"                           | \\____/ |",
	"                           |  /\\/\\  |",
	"                          .'___  ___`.",
	"                         /  \\|/  \\|/  \\",
	"        _.--------------( ____ __ _____)",
	"     .-' \\  -. | | | | | \\ ----\\/---- /",
	"   .'\\  | | / \\` | | | |  `.  -'`-  .'",
	"  /`  ` ` '/ / \\ | | | | \\  `------'\\",
	" /-  `-------.' `-----.       -----. `---.",
	"(  / | | | |  )/ | | | )/ | | | | | ) | | )",
	" `._________.'_____,,,/\\_______,,,,/_,,,,/"
];
var cats = {
	grumpy: grumpy,
	approaching: approaching,
	tubby: tubby,
	confused: confused,
	playful: playful,
	thoughtful: thoughtful,
	delighted: delighted,
	nyan: nyan,
	resting: resting
};

var cats$1 = /*#__PURE__*/Object.freeze({
  grumpy: grumpy,
  approaching: approaching,
  tubby: tubby,
  confused: confused,
  playful: playful,
  thoughtful: thoughtful,
  delighted: delighted,
  nyan: nyan,
  resting: resting,
  'default': cats
});

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

var cats$2 = getCjsExportFromNamespace(cats$1);

var catNames = Object.keys(cats$2);

catNames.forEach(function (name) {
  cats$2[name] = cats$2[name].join('\n');
});

var catMe = function (cat) {
  cat = cat || catNames[~~(Math.random() * catNames.length)];

  return cats$2[cat]
};

var catNames_1 = catNames;
catMe.catNames = catNames_1;

var out = catMe();
console.log(out);
var cat = out.replace(/ /g, "&nbsp;");

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "#app {\n  position: relative;\n  padding-top: 40vh;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  z-index: 1;\n}\n\n#cat-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n#cat {\n  white-space: pre-wrap;\n  font-family: monospace;\n  color: crimson;\n  margin-top: 400px;\n}\n";
styleInject(css);

var makeCat = function makeCat() {
  var container = document.getElementById("cat-container");
  var el = document.createElement("span");
  el.id = "cat";
  el.innerHTML = cat;
  container.appendChild(el);
};

var Test = function Test() {
  var text = "Hello Rollup world! ";
  var app = document.getElementById("app");
  var el = document.createElement("h1");
  el.id = "child-1";
  el.textContent = text;
  var dynamicImport;
  import('./foo-322cd57b.js').then(function (_ref) {
    var foo = _ref.default;
    dynamicImport = foo;
    el.textContent += dynamicImport;
    makeCat();
  });
  var staticImport = bar;
  el.textContent += staticImport;
  console.log("version: " + version);
  !app.hasChildNodes() && app.appendChild(el);
};

Test();
