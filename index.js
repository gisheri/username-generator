'use strict';

const data = {
    names: require('./names.json'),
    adjectives: require('./adjectives.json')
}

const alphaToNumeric = (string) => {
  let numeric = string.toLowerCase().split("").map(char=>char.charCodeAt(0) - 97 + 1).join("");
  return parseInt(numeric);
}

const seededRandom = (seed) => {
  if(!seed){
    return Math.random();
  }
  if(isNaN(seed)){
      seed = alphaToNumeric(seed);
  }
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const generator = {
    seed: null,
    adjectives: data.adjectives,
    names: data.names,
    setAdjectives(adjectives) {
        this.adjectives = adjectives
    },
    setNames(name){
        this.names = names
    },
    setSeparator(separator) {
        this.separator = separator   
    },
    setSeed(seed){
        this.seed = seed;
    },
    generate(){
        let random = seededRandom(this.seed)
        const ran_a = Math.floor(random * data.names.length)
        const ran_b = Math.floor(random * data.adjectives.length)
        const ran_suffix = Math.floor(random * 100)
        return `${data.adjectives[ran_b]}${seperator}${data.names[ran_a]}${ran_suffix}`
    }
}

module.exports = generator;
