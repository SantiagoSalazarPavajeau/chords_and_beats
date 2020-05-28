// all fetch requests

class Adapter{
    constructor(){
        this.baseURL = "http://localhost:3000"
        this.getSongs()
        // this.saveSong()
        // this.getSong()
        // this.updateSong()
        // this.deleteSong()
    }

    getSongs(){
        return fetch(`${this.baseURL}/songs`)
                    .then(resp => resp.json()) // returns json object
    }

    

}


// console.log(adapter.getChords())

// this.getChords()
// getChords(){
//     return fetch(`${this.baseURL}chords`)
//     .then(response => response.json())
//     .then(json=> console.log(json))
// }
