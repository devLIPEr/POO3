export default class Token{
    private _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXltZW50MSI6InBheXBhbCIsInBheW1lbnQyIjoicGF5b25lZXIifQ.h2SpZH1typyqCgQ16H2IJT-mRtzWt0peQ3zhzNglx58";

	public get token(): string{
		return this._token;
	}
}