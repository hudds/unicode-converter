document.querySelector('#toBeConverted').addEventListener('input', e => {
    setConvertedText(e.target.value)
})




function setConvertedText(original){
    document.querySelector("#converted").value = convertText(original)
}

function convertText(original){
    let converted = "";
    for(let i = 0;i < original.length; i++){
        let originalCharacter = original[i]
        let escaped = characterDictionary[originalCharacter]
        if(escaped){
            converted += escaped;
        } else {
            converted += originalCharacter;
        }
    }
    return converted
}



const characterDictionary ={
'¡': '\\u00A1',
'¢': '\\u00A2',
'£': '\\u00A3',
'¤': '\\u00A4',
'¥': '\\u00A5',
'¦': '\\u00A6',
'§': '\\u00A7',
'¨': '\\u00A8',
'©': '\\u00A9',
'ª': '\\u00AA',
'«': '\\u00AB',
'¬': '\\u00AC',
'®': '\\u00AE',
'¯': '\\u00AF',
'°': '\\u00B0',
'±': '\\u00B1',
'²': '\\u00B2',
'³': '\\u00B3',
'´': '\\u00B4',
'µ': '\\u00B5',
'¶': '\\u00B6',
'·': '\\u00B7',
'¸': '\\u00B8',
'¹': '\\u00B9',
'º': '\\u00BA',
'»': '\\u00BB',
'¼': '\\u00BC',
'½': '\\u00BD',
'¾': '\\u00BE',
'¿': '\\u00BF',
'À': '\\u00C0',
'Á': '\\u00C1',
'Â': '\\u00C2',
'Ã': '\\u00C3',
'Ä': '\\u00C4',
'Å': '\\u00C5',
'Æ': '\\u00C6',
'Ç': '\\u00C7',
'È': '\\u00C8',
'É': '\\u00C9',
'Ê': '\\u00CA',
'Ë': '\\u00CB',
'Ì': '\\u00CC',
'Í': '\\u00CD',
'Î': '\\u00CE',
'Ï': '\\u00CF',
'Ð': '\\u00D0',
'Ñ': '\\u00D1',
'Ò': '\\u00D2',
'Ó': '\\u00D3',
'Ô': '\\u00D4',
'Õ': '\\u00D5',
'Ö': '\\u00D6',
'×': '\\u00D7',
'Ø': '\\u00D8',
'Ù': '\\u00D9',
'Ú': '\\u00DA',
'Û': '\\u00DB',
'Ü': '\\u00DC',
'Ý': '\\u00DD',
'Þ': '\\u00DE',
'ß': '\\u00DF',
'à': '\\u00E0',
'á': '\\u00E1',
'â': '\\u00E2',
'ã': '\\u00E3',
'ä': '\\u00E4',
'å': '\\u00E5',
'æ': '\\u00E6',
'ç': '\\u00E7',
'è': '\\u00E8',
'é': '\\u00E9',
'ê': '\\u00EA',
'ë': '\\u00EB',
'ì': '\\u00EC',
'í': '\\u00ED',
'î': '\\u00EE',
'ï': '\\u00EF',
'ð': '\\u00F0',
'ñ': '\\u00F1',
'ò': '\\u00F2',
'ó': '\\u00F3',
'ô': '\\u00F4',
'õ': '\\u00F5',
'ö': '\\u00F6',
'÷': '\\u00F7',
'ø': '\\u00F8',
'ù': '\\u00F9',
'ú': '\\u00FA',
'û': '\\u00FB',
'ü': '\\u00FC',
'ý': '\\u00FD',
'þ': '\\u00FE'
}
