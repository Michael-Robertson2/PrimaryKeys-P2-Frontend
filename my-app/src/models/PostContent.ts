export default class PostContent {
    id: string;
    name: string;
    icon: string; // link to icon image
    date: string;
    message: string;

    constructor(id: string, name: string, icon: string, date: string, message: string) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.date = date;
        this.message = message;
    }
}