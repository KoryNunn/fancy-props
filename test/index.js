var test = require('tape');
var crel = require('crel');
var fancyProps = require('../');

global.document = global.document || require("dom-lightning").document
global.Node = global.Node || require("dom-lightning").Node
global.Element = global.Element || require("dom-lightning").Element

test('date input', function(t){

    t.plan(2);

    var input = crel('input', {type: 'date'});

    t.equal(fancyProps.value(input), null);

    fancyProps.value(input, new Date('2000-1-1'));

    t.equal(fancyProps.value(input).toString(), new Date('2000-1-1').toString());
});

test('class', function(t){

    t.plan(3);

    var span = crel('span');

    t.equal(fancyProps.class(span), '');

    fancyProps.class(span, 'foo');

    t.equal(fancyProps.class(span), 'foo');

    fancyProps.class(span, ['bar']);

    t.equal(fancyProps.class(span), 'bar');
});

test('class 2', function(t){

    t.plan(6);

    var span = crel('span', {class: 'majigger'});

    t.equal(fancyProps.class(span), '');
    t.equal(span.className, 'majigger');

    fancyProps.class(span, 'foo');

    t.equal(fancyProps.class(span), 'foo');
    t.equal(span.className, 'majigger foo');

    span.className += ' whatsits';

    fancyProps.class(span, ['bar']);

    t.equal(fancyProps.class(span), 'bar');
    t.equal(span.className, 'majigger whatsits bar');
});

test('style string', function(t){

    t.plan(4);

    var span = crel('span');

    t.equal(fancyProps.style(span).background, '');
    t.equal(span.style.background, '');

    fancyProps.style(span, 'background: red');

    t.equal(fancyProps.style(span).background, 'red');
    t.equal(span.style.background, 'red');
});

test('style object', function(t){

    t.plan(4);

    var span = crel('span');

    t.equal(fancyProps.style(span).background, '');
    t.equal(span.style.background, '');

    fancyProps.style(span, { background: 'red' });

    t.equal(fancyProps.style(span).background, 'red');
    t.equal(span.style.background, 'red');
});

test('innerHTML', function(t){

    t.plan(3);

    var span = crel('span');

    t.equal(fancyProps.innerHTML(span), '');

    fancyProps.innerHTML(span, 'foo');

    t.equal(span.innerHTML, 'foo');
    
    fancyProps.innerHTML(span, null);

    t.equal(span.innerHTML, '');
});

test('display', function(t){
    t.plan(3);

    var span = crel('span');

    t.equal(span.style.display, '')

    fancyProps.display(span, false);

    t.equal(span.style.display, 'none')

    fancyProps.display(span, true);
    
    t.equal(span.style.display, '')
});

test('disabled', function(t){
    t.plan(3);

    var span = crel('span');

    t.equal(span.getAttribute('disabled'), null)

    fancyProps.disabled(span, true);

    t.equal(span.getAttribute('disabled'), 'disabled')

    fancyProps.disabled(span, false);
    
    t.equal(span.getAttribute('disabled'), null)
});

test('textContent', function(t){
    t.plan(3);

    var span = crel('span');

    t.equal(fancyProps.textContent(span), '');

    fancyProps.textContent(span, 'foo')

    t.equal(span.textContent, 'foo');

    fancyProps.textContent(span, null)

    t.equal(span.textContent, '');
});

test('innerText', function(t){
    t.plan(3);

    var span = crel('span');

    var span = crel('span');

    t.equal(fancyProps.innerText(span), '');

    fancyProps.innerText(span, 'foo')

    t.equal(span.textContent, 'foo');

    fancyProps.innerText(span, null)

    t.equal(span.textContent, '');
});

test('max', function(t){
    t.plan(4);

    var input = crel('input', { type: 'range' });

    t.equal(fancyProps.max(input), null);

    fancyProps.max(input, 100)

    t.equal(input.max, '100');
    t.equal(fancyProps.max(input), 100);

    fancyProps.max(input, null)

    t.equal(input.max, '');
});

test('type', function(t){
    t.plan(5);

    var input = crel('input');

    t.equal(fancyProps.type(input), null);

    fancyProps.type(input, 'number')

    t.equal(input.type, 'number');
    t.equal(fancyProps.type(input), 'number');

    fancyProps.type(input, null)

    t.equal(input.type, '');
    t.equal(fancyProps.type(input), null);
});

test('progress', function(t){
    t.plan(4);

    var progress = crel('progress');

    t.equal(fancyProps.value(progress), 0);

    fancyProps.value(progress, 1)

    t.equal(fancyProps.value(progress), 1);

    fancyProps.value(progress, '1')

    t.equal(fancyProps.value(progress), 1);

    fancyProps.value(progress, null)

    t.equal(fancyProps.value(progress), 0);
});