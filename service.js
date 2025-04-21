class encodeUrl {
    constructor() {
        this.urls = new Map();
    }

    #arrContainsNumbers(arr = []) {
        const numbers = "0123456789"
        for (let i=0; i < arr.length; i++) {
            if (numbers.includes(arr[i]))
                return true;
        }
        return false;
    }

    encode(url,maxOfChars = 5) {
        try {

            if (Array.from(this.urls.values()).includes(url)) return null; // check if the url already encoded

            const arrRandom = []
            const numbers = "0123456789"
            const AlphaNumerical = numbers + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (let i=0; i < maxOfChars; i++) {
              const randomChar = Math.floor(Math.random() * 
                                (i == maxOfChars - 1 && !this.#arrContainsNumbers(arrRandom) ? numbers.length : AlphaNumerical.length));
                
              arrRandom.push(AlphaNumerical[randomChar]) 
            }
            const encodedUrl = arrRandom.join('')
            this.urls.set(encodedUrl,url)
            return encodedUrl;
        } catch (error) {
            throw error;   
        }
    }

    decode(encodedUrl) {
        return this.urls.get(encodedUrl)
    }

    list() {
        const listUrls = { };
        Array.from(this.urls.keys()).forEach(k => {
            listUrls[k] = this.urls.get(k)
        })
        return listUrls
    }

}

module.exports = (instance) => {
    if (!instance) instance = new encodeUrl();
    return instance;
}