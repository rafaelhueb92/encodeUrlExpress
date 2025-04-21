const urls = new Map();

function randomUrlSet(url,maxOfChars = 6) {
      const arrRandom = []
      const AlphaNumerical = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for (let i=0; i < maxOfChars; i++) {
        // Base62 A-Z a-z 0-9
        // 0 - 61 
        const randomChar = Math.floor(Math.random() * AlphaNumerical.length);
        arrRandom.push(AlphaNumerical[randomChar]) // Random value
      }
      const encodedUrl = arrRandom.join('')
      urls.set(encodedUrl,url)
      return encodedUrl;
      // Big O(n)
}

function randomUrlGet(encodedUrl) {
  return urls.get(encodedUrl)
}

const urlEncoded = randomUrlSet('playcode.io')

 console.log(urlEncoded)
 console.log(randomUrlGet(urlEncoded))
 console.log('Is')
