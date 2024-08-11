import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    // first take the endpoint an projectid from the user
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }


    async createAcc({ email, password, name }) {
        try {
            let user = await this.account.create(ID.unique(), email, password, name)
            if (user) {
                console.log("User created successfully", user);
                return this.login({ email, password });
            } else {
                return user
            }
        } catch (error) {
            console.log(`error in auth.jsx createAcc ${error}`);

        }
    }



    async login({ email, password }) {
        try {
            await this.account.createEmailPasswordSession(email, password)

        } catch (error) {
            console.log(`error in auth.js in login ${error}`);

        }
    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log(`error in auth.js in logout ${error}`);

        }

    }


}

const authService = new AuthService()
export default authService