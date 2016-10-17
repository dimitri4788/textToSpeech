function readTextOnEnterKeyPressed(e, textarea)
{
    var keyCode = e.which;
    if(keyCode == 13)
    {
        var speechMessage = new SpeechSynthesisUtterance();
        speechMessage.voiceURI = 'Google US English';
        speechMessage.rate = 1;  //0.1 to 10
        speechMessage.text = textarea.value;
        speechMessage.lang = 'en-US';
        speechSynthesis.speak(speechMessage);
    }
}
