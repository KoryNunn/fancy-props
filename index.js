var setify = require('setify');
var classist = require('classist');
var CLASSIST = Symbol('classist');

function updateTextProperty(element, value){
    if(arguments.length === 1){
        return element.textContent;
    }
    element.textContent = (value == null ? '' : value);
}

module.exports = {
    class: function(element, value){
        if(!element[CLASSIST]){
            element[CLASSIST] = classist(element);
        }

        if(arguments.length === 1){
            return element[CLASSIST]();
        }

        element[CLASSIST](value);
    },
    display: function(element, value){
        if(arguments.length === 1){
            return element.style.display !== 'none';
        }
        element.style.display = value ? '' : 'none';
    },
    disabled: function(element, value){
        if(arguments.length === 1){
            return element.hasAttribute('disabled');
        }
        if(value){
            element.setAttribute('disabled', 'disabled');
        }else{
            element.removeAttribute('disabled');
        }
    },
    textContent: updateTextProperty,
    innerText: updateTextProperty,
    innerHTML: function(element, value){
        if(arguments.length === 1){
            return element.innerHTML;
        }
        element.innerHTML = (value == null ? '' : value);
    },
    value: function(element, value){
        var inputType = element.type;

        if(element.nodeName === 'INPUT' && inputType === 'date'){
            if(arguments.length === 1){
                return element.value ? new Date(element.value.replace(/-/g,'/').replace('T',' ')) : null;
            }

            value = value != null ? new Date(value) : null;

            if(!value || isNaN(value)){
                element.value = null;
            }else{
                element.value = [
                    value.getFullYear(),
                    ('0' + (value.getMonth() + 1)).slice(-2),
                    ('0' + value.getDate()).slice(-2)
                ].join('-');
            }
            return;
        }

        if(arguments.length === 1){
            if(element.nodeName === 'PROGRESS'){
                return (!element.value || isNaN(element.value)) ? 0 : parseFloat(element.value);
            }
            return element.value;
        }

        if(value === undefined){
            value = null;
        }

        if(element.nodeName === 'PROGRESS'){
            value = parseFloat(value) || 0;
        }

        setify(element, value);
    },
    max: function(element, value) {
        if(arguments.length === 1){
            return isNaN(element.max) ? null : parseFloat(element.max);
        }

        if(element.nodeName === 'PROGRESS'){
            value = parseFloat(value) || 0;
        }

        element.max = (value == null || isNaN(value)) ? '' : String(value);
    },
    style: function(element, value){
        if(arguments.length === 1){
            return element.style;
        }

        if(typeof value === 'string'){
            element.style = value;
        }

        for(var key in value){
            element.style[key] = value[key];
        }
    },
    type: function(element, value){
        if(arguments.length === 1){
            return element.type || null;
        }
        element.setAttribute('type', value == null ? '' : value);
    }
};