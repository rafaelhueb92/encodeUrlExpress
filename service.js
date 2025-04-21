class encodeUrl {
    constructor() {
        this.urls = new Map();
        console.log('encodeUrl is instanced.')
    }

    encode(url,maxOfChars = 5) {
        try {
            const arrRandom = []
            const AlphaNumerical = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (let i=0; i < maxOfChars; i++) {
              // Base62 A-Z a-z 0-9
              // 0 - 61 
              const randomChar = Math.floor(Math.random() * AlphaNumerical.length);
              arrRandom.push(AlphaNumerical[randomChar]) // Random value
            }
            const encodedUrl = arrRandom.join('')
            this.urls.set(encodedUrl,url)
            console.log('urls',this.urls)
            return encodedUrl;
        } catch (error) {
            throw error;   
        }
    }

    decode(encodedUrl) {
        return this.urls.get(encodedUrl)
    }

    list() {
        return [...this.urls.values()];
    }

}

module.exports = (instance) => {
    console.log('is here')
    console.log('instance is ', instance)
    if (!instance) instance = new encodeUrl();
    return instance;
}