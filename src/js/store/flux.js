const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			properties: [],
			gender:[],

			favorite:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},


			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({people:data.results})})
				.catch(err => console.error(err))
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({planets:data.results})})
				.catch(err => console.error(err))
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/starships/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({starships:data.results})})
				.catch(err => console.error(err))
			},
			getProperties: () => {
				fetch("https://www.swapi.tech/api/people/1")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({properties:data.results})})
				.catch(err => console.error(err))
			},
			getGender: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then(res => res.json())
				.then(data => {
					console.log(data);
					setStore({people:data.results})})
				.catch(err => console.error(err))
			},
			// getPhotos: () => {
			// 	fetch("https://starwars-visualguide.com/#/characters/:id/")
			// 	.then(res => res.json())
			// 	.then(data => {
			// 		console.log(data);
			// 		setStore({photos:data.results})})
			// 	.catch(err => console.error(err))
			// },
			addFavorite: (name) => {
				// setStore({favourite:data.results})
				let listFav = getStore().favorite
				let newFav = name
				let newListFav = listFav.concat(newFav) 
				setStore({favorite : newListFav})
			},
			deleteFavorite: (name) => {
				console.log(name);
				// setStore({favourite:data.results})
				let listFav = getStore().favorite
				let delFav = name
				let delListFav = listFav.filter(newFav) 
				setStore({favorite : delListFav})
			},
			

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
