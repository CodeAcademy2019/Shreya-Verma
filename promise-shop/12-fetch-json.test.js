const fetchJson= require('./12-fetch-json');
describe('mainFunc()', ()=> {
    it('should be able to catch error in promise', () => {   
        return expect(fetchJson('http://localhost:1337')).resolves.toEqual('connect ECONNREFUSED 127.0.0.1:1337');
    });    
    it('should be able to fetch and print JSON object from URL', () => {
            return expect(fetchJson('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')).resolves.toEqual({"active": true, "formed": 2016, "homeTown": "Metro City", "members": [{"age": 29, "name": "Molecule Man", "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"], "secretIdentity": "Dan Jukes"}, {"age": 39, "name": "Madame Uppercut", "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"], "secretIdentity": "Jane Wilson"}, {"age": 1000000, "name": "Eternal Flame", "powers": ["Immortality", "Heat Immunity", "Inferno", "Teleportation", "Interdimensional travel"], "secretIdentity": "Unknown"}], "secretBase": "Super tower", "squadName": "Super hero squad"});
    });    
});