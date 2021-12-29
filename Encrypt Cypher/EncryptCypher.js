let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let key = 'password';

class Cypher{
    constructor(key, alphabet){
        this._key = key
        this._alphabet = alphabet
    }
   
    encode(text){
        const alphabetArray = this._alphabet.split('')
        const keyArray = this._key.split('')
        const textArray = text.split('')
        const numberAux = Math.floor(textArray.length/keyArray.length)
        const restAux = textArray.length%keyArray.length
        const encodeKey = Array(numberAux).fill(keyArray).flat().concat(keyArray.slice(0, restAux))
        
        return textArray.reduce((acc, letter, index) =>{
            if (!alphabetArray.includes(letter)) return acc + letter

            let encodedletter = ''
            const positionsToAdd = alphabetArray.indexOf(encodeKey[index])
            const initialPosition = alphabetArray.indexOf(letter)
            let finalPosition = initialPosition+positionsToAdd
            
            if (finalPosition < alphabetArray.length){
                encodedletter = alphabetArray[finalPosition]
            } else{
                finalPosition = finalPosition % alphabetArray.length
                encodedletter = alphabetArray[finalPosition]
            }
            return acc + encodedletter
        },'' )
    }

    decode(text){
        const alphabetArray = this._alphabet.split('')
        const keyArray = this._key.split('')
        const textArray = text.split('')
        const numberAux = Math.floor(textArray.length/keyArray.length)
        const restAux = textArray.length%keyArray.length
        let encodeKey = Array(numberAux).fill(keyArray)
        encodeKey = encodeKey.reduce((a, b) => a.concat(b), []).concat(keyArray.slice(0, restAux))
        // .flat().concat(keyArray.slice(0, restAux))
        
        return textArray.reduce((acc, letter, index) =>{
            if (!alphabetArray.includes(letter)) return acc + letter

            let decodedletter = '' 
            const positionsToGoBack = alphabetArray.indexOf(encodeKey[index])
            const initialPosition = alphabetArray.indexOf(letter)
            let finalPosition = initialPosition-positionsToGoBack
            
            if (finalPosition >= 0){
                decodedletter = alphabetArray[finalPosition]
            } else{
                finalPosition = alphabetArray.length +( finalPosition % alphabetArray.length)
                decodedletter = alphabetArray[finalPosition]
            }
            return acc + decodedletter
        },'' )
    }

    }



const cypher = new Cypher(key, alphabet)

const encoded = cypher.encode('codewars codewars')
console.log(encoded)
const decoded = cypher.decode(cypher.encode('codewars codewars'))
console.log(decoded)
