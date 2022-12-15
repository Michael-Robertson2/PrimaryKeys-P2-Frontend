export default class Principal {
    id: string;
    profileID: string;
    username: string;
    email: string;
    registered: string;
    roleID: string;
    token: string;
    active: boolean;


    constructor(id: string, profileID: string, username: string, email: string, registered: string, roleID: string, token: string, active: boolean) {
        this.id = id;
        this.profileID = profileID;
        this.username = username;
        this.email = email;
        this.registered = registered;
        this.roleID = roleID;
        this.token = token;
        this.active = active;
    }
}