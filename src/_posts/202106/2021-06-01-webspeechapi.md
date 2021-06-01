# Web Speech API

> [mdn web speech api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API#browser_compatibility)
> [using speech api](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

## Web Speech Recognition

- 음성인식
- [jsspeech grammar format](https://www.w3.org/TR/jsgf/)

### 크롬 지원

```js
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
```

### Grammar
<!-- markdownlint-disable -->
```js
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ... ];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
```
<!-- markdownlint-enable -->

### 문법을 음성인식에 플러그인

```js
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
```

- property assign

```js
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
```

- start

```js
var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

var colorHTML= '';
colors.forEach(function(v, i, a){
  console.log(v, i);
  colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
});
hints.innerHTML = 'tab/click background 그리고 ' + colorHTML + '.';

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}
```

- 핸들링

```js
recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log('Confidence: ' + event.results[0][0].confidence);
}
```

```js
recognition.onnomatch = function(event) {
  diagnostic.textContent = 'I didnt recognize that color.';
}
```

```js
recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
```

## Web speech

### HTML

<!-- markdownlint-disable -->
```html
<h1>Speech synthesiser</h1>

<p>Enter some text in the input below and press return to hear it. change voices using the dropdown menu.</p>

<form>
  <input type="text" class="txt">
  <div>
    <label for="rate">Rate</label><input type="range" min="0.5" max="2" value="1" step="0.1" id="rate">
    <div class="rate-value">1</div>
    <div class="clearfix"></div>
  </div>
  <div>
    <label for="pitch">Pitch</label><input type="range" min="0" max="2" value="1" step="0.1" id="pitch">
    <div class="pitch-value">1</div>
    <div class="clearfix"></div>
  </div>
  <select>

  </select>
</form>
```
<!-- markdownlint-enable -->

### 변수설정

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');

var voices = [];
```

### 음성 populate

```js
function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
```

```js
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

### input

```js
inputForm.onsubmit = function(event) {
    event.preventDefault();

    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
        if(voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
        }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);

    utterThis.onpause = function(event) {
        var char = event.utterance.text.charAt(event.charIndex);
        console.log('Speech paused at character ' + event.charIndex + ' of "' +
        event.utterance.text + '", which is "' + char + '".');
    }
    inputTxt.blur();
}
```

```js
pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}
```
