const INITIAL_STATE = {
	sections: [
		{
			id: 1,
			title: "HATS",
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			linkUrl: 'shop/hats'
		},
		{
			id: 2,
			title: "JACKETS",
			imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
			linkUrl: 'shop/jackets'
		},
		{
			id: 3,
			title: "SNEAKERS",
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
			linkUrl: 'shop/sneakers'
		},
		{
			id: 4,
			title: "WOMEN",
			size: 'large',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
			linkUrl: 'shop/womens'
		},
		{
			id: 5,
			title: "MEN",
			size: 'large',
			imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
			linkUrl: 'shop/mens'
		}
	]
}

const directoryReducer = (state = INITIAL_STATE, 	action) => 	{
	switch(action.type){
		default: 
			return state;
	}
}

export default directoryReducer;