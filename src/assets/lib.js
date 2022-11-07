import './jquery.min'

var activePopup = '';
var param = '';

/**
 * Размер шрифта по умолчанию (число)
 */
export const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]);

/**
 * Число пикселей ширины экрана
 */
export var screenW = screen.width;

/**
 * Число пикселей длины экрана
 */
export var screenH = screen.height;

/**
 * Число пикселей ширины сайта
 */
export var documentW = window.innerHeight;

/**
 * Число пикселей длины сайта
 */
export var documentH = window.innerHeight;

/**
 * Получает число, выдает строку с числом с пробелами
 * @param {Number} number любое число
 * @returns String
 */
export function getNumberWithSpaces(number) {
    return number.toString().split('.').length == 1 ? 
        number.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") :
        number.toString().split('.')[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + '.' + number.toString().split('.')[1]
}

/**
 * Возвращает число пикселей ширины элемента ('.element'), если нужно возвратить строку ('10px'), то вторым параметом укажите false
 * @param {string} element Элемент в виде '.element', '#element'
 * @param {boolean} num При true возращает число, при false возвращает строку
 * @example console.log(widthOf('.header')); // 1920
 * console.log(widthOf('.header', false)); // 1920px
 * @returns number or string
 */
export function widthOf(element, num = true) {
    return num ? Number(getComputedStyle(document.querySelector(element)).width.split('px')[0]) : getComputedStyle(document.querySelector(element)).width
}

/**
 * Возвращает число пикселей длины элемента ('.element'), если нужно возвратить строку ('10px'), то вторым параметом укажите false
 * @param {string} element Элемент в виде '.element', '#element'
 * @param {boolean} num При true возращает число, при false возвращает строку
 * @example console.log(heightOf('.header')); // 100
 * console.log(heightOf('.header', false)); // 100px
 * @returns number or string
 */
 export function heightOf(element, num = true) {
    return num ? Number(getComputedStyle(document.querySelector(element)).height.split('px')[0]): getComputedStyle(document.querySelector(element)).height;
}



/**
 * Выполняет функцию func, если обнаружится префикс
 * @example addPrefix('?', 'search', 1, function() { console.log('searching'); }) если в запросе обнаружится '?' с 'search' (первым префиксом), то в консоль будет выводиться 'searching'
 * @param {string} prefix символ префикса, напр. '?' или '#'
 * @param {string} prefix_text текст префикса, напр. 'search' -> '?search'
 * @param {number} prefix_index номер префикса, применяется если в запросе есть несколько префиксов, напр. 'vk.com/?search?likes'
 * @param {boolean} analize_parameter НЕ ОБЯЗАТЕЛЬНО! При true будет анализироваться параметр префикса. Напр. параметр префикса '?search=котики' = 'котики'
 * @param {variable} param_var НЕ ОБЯЗАТЕЛЬНО! Переменная для хранения параметра префикса
 * @param {function} func функция, которая будет выполняться при обнаружении префикса
 */
export function addPrefix(prefix, prefix_text, prefix_index, analize_parameter = false, param_var = param, func) {
    var _get = document.URL.split(prefix);
    if (analize_parameter) param_var = _get[prefix_index].split('=')[1];
    if (_get[prefix_index] == prefix_text) func()
}

/**
 * 
 * @example print({sep=', ', end='!'}, 'Hello', 'world'); // Hello, world!
 * @param {string} sep строка между аргументами, по умолчанию пробел
 * @param {string} end строка, завершающая результат, по умолчанию новая строка
 */
export function print(params = {sep: ' ', end: '\n'}) {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
        result += (arguments[i] != params ? arguments[i] + (i+1 != arguments.length ? params.sep : '') : '');
    }
    result += params.end;
    console.log(result);
}

/**
 * Перевод px в rem
 * @example rem(16) // 1rem
 * @param {number} size размер в px
 * @returns {number} размер в rem
 */
export function rem(size) {
    return size / fontSize;
}

/**
 * Скроллит до элемента element, который равен '#element' или '.element' или 'element', с длительностью duration и расстоянием от верха before
 * @example scrollTo('.footer', 500, 100) // Скроллит до элемента с классом footer
 * @param {string} element элемент, который равен '#element' или '.element' или 'element'
 * @param {number} duration длительность скролла (миллисекунды), по умолчанию 500
 * @param {number} before расстояние от верха страницы, по умолчанию 100
 */
export function scrollToElement(element, duration = 500, before = 100) {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(element).offset().top - before
    }, duration);
}

/**
 * Автоматическое открытие/закрытие popup-элементов по ID. Для открытия popup('element'), для закрытия popup(activePopup)
 * @example
 * $('.closeButton').bind('click', function() {
 *     popup('.popup'); // Может и открыть, и закрыть popup-элемент
 * });
 * @param {string} id ID popup-элемента
 * @param {variable} activePopup не обязательно. Переменная для хранения активных popup-элементов
 * @param {boolean} add_animaion не обязательно. При true добавляет класс animation и убирает его при закрытии
 * @param {boolean} remove_overflow не обязательно. При true к html добавляется класс 'overflow-off', если overflow: hidden не добавляется, то поместите это в файл стилей:
 * .overflow-off {
 *     overflow: hidden;
 * }
 * @param {string} popup_display стиль popup при открытии, по умолчанию flex
 */
export function popup(id, activePopup = '', add_animaion = false, remove_overflow = false, popup_display = 'flex') {
    if (document.getElementById(id).style['display'] != popup_display) {
        document.getElementById(id).style['display'] = popup_display;
        if (add_animaion) { //$('#'+id).addClass('animation') 
            document.getElementById(id).animate([
                { opacity: 0 },
                { opacity: 100 }],
            100);
        }
        if (remove_overflow) { 
            $('html').addClass('overflow-off');
            document.getElementsByClassName('overflow-off').style.overflow = 'hidden';
        }
        activePopup = activePopup != '' ? id : '';
    }
    else {
        document.getElementById(id).style['display'] = 'none';
        if (add_animaion) { //$('#'+id).removeClass('animation')
            document.getElementById(id).animate([
                { opacity: 100 },
                { opacity: 0 }],
            100);
        }
        if (remove_overflow) $('html').removeClass('overflow-off');
        activePopup = '';
    }
}

/**
 * Добавляет эффект перемещения объекта при перемещении мыши.
 * @example addMouseWheelEffect('picture');
 * @param {string} id ID элемента
 * @param {number} coeff коэффицент уменьшения, по умолчанию 30
 */
export function addMouseWheelEffect(id, coeff = 30) {
    if (document.getElementById(id)) {
        document.getElementById(id).style.position = 'absolute';
        $('body').bind('mousemove', function(e) {
            var x = -1 * (e.clientX / coeff);
            var y = -1 * (e.clientY / coeff);

            document.getElementById(id).style.marginLeft = x + 'px';
            document.getElementById(id).style.marginTop = y + 'px';
        });
    }
}

/**
 * Добавляет класс class_with_animation (по умол. '_anim') ко всем animation_class (по умол. '._anim-item'), которые оказались видимыми
 * @example addAnimationOnScroll()
 * @param {string} animation_class класс для определения элементов для анимации, по умолчанию '_anim-item'
 * @param {string} class_with_animation класс для анимации (в элементе должен быть указан transition), по умолчанию '_anim'
 * @param {number} coeff коэффицент срабатывания, по умолчанию 5
 */
export function addAnimationOnScroll(animation_class = '._anim-item', class_with_animation = '_anim', coeff = 5) {
    const animItems = document.querySelectorAll(animation_class);
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = coeff;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    setTimeout(() => {
                        animItem.classList.add(class_with_animation);
                    }, 200);
                } else {
                    setTimeout(() => {
                        animItem.classList.remove(class_with_animation);
                    }, 200);
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
        animOnScroll();
    }
}

/**
 * Проверяет EMail адрес на ошибки. Если верно, то возвращает true, иначе false
 * @example validateEmail('mysite.ourearth.com')  // false
 * validateEmail('mysite@ourearth.com')  // true
 * @param {string} email EMail адрес
 * @returns boolean
 */
export function validateEmail(email) {
    return /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}