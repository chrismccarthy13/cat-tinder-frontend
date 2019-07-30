const BASE = 'http://localhost:3000'

let getCats = function() {
// the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
	return fetch(BASE + '/cats') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response

			return json
		})
}
let deleteCat = (cat) => {

    return fetch(BASE + `/cats/${cat}`,{
        method: 'delete'
    })
}

let showCat = (cat) => {
    return fetch(BASE + `/cats/${cat}`)
    // return fetch(BASE + `/cats/${cat.id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data){
            return data
        })
    }
let createCat = (cat) => {
    return fetch(BASE + '/cats', {
        body: JSON.stringify(cat),
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
        .then((resp) => {
            if (resp.ok) {
                let json = resp.json()
                return json
            }
            // else {
            //     var error = new Error(resp.statusText)
            //     error.resp = resp
            //     return error
            // }

        })
}
let updateCat = (id, cat) => {
	console.log('cat from the update cat method in index js');
	console.log(id);
	return fetch(BASE + `/cats/${id}`, {
		body: JSON.stringify({cat:cat}),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "PUT",
	})
		.then((resp) => {
			if (resp.ok) {
				let json = resp.json()
				return json
			}
		})
}

export  {
	getCats,
    createCat,
    showCat,
    deleteCat,
    updateCat
}
