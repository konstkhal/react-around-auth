import { Authorization } from './api';

class Auth extends Authorization {
	#checkReponseStatus = (res) => {
		if (!res.error) {
			//throw new Error(JSON.stringify(res));
			return res;
			/* 	return res.text()
      .then((text) => {
				throw new Error(text);
			}); */
		} else {
			throw new Error(JSON.stringify(res));
		}
	};

	register = (user) => {
		return this._customFetch(`${this._baseUrl}/signup`, {
			headers: this._headers,
			method: 'POST',
			body: JSON.stringify({
				password: user.password,
				email: user.email,
			}),
		}).then((res) => this.#checkReponseStatus(res));
		/*

			.then((data) => {
				if (data.error) throw new Error(data.error);
				if (data.message) throw new Error(data.message);
				return data;
			}); */
	};

	authenticate = (user) => {
		return this._customFetch(`${this._baseUrl}/signin`, {
			headers: this._headers,
			method: 'POST',
			body: JSON.stringify({
				password: user.password,
				email: user.email,
			}),
		}).then((res) => this.#checkReponseStatus(res));
		/*
			.then((res) => res.json())
			.then((data) => {
				if (!data.token) throw new Error(data.message);
				return data;
			}); */
	};

	validateToken = (token) => {
		this._headers = {
			...this._headers,
			Authorization: `Bearer ${token}`,
		};
		return this._customFetch(`${this._baseUrl}/users/me`, {
			headers: this._headers,
			method: 'GET',
		}).then((res) => this.#checkReponseStatus(res));
		/* 			.then((res) => res.json())
			.then((data) => {
				if (!data) throw new Error(data.message);
				return data;
			}); */
	};
}

export const auth = new Auth({
	baseUrl: 'https://register.nomoreparties.co',
	headers: { 'Content-Type': 'application/json' },
});
