function GameService () {

	_apiBase = 'http://127.0.0.1';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}/${url}`);
		if (!res.ok) {
			throw new Error('Error');
		}
		return await res.json();
	}

	async getTotalPoints() {
		return await this.getResource('score');
	}

	async getSegments(id) {
		return await this.getResource(`segments`);
	}

	async updatePlayerData(data) {
		const rawResponse = await fetch(
		`${this._apiBase}/spin`,
		{
    		method: 'POST',
    		headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json'
    		},
    		body: JSON.stringify({})
    	});
  		return await rawResponse.json();
	}
}