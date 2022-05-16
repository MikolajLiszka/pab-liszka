export class Note {
    public id: number;
    public title: string;
    public content: string;
    public createDate: string;
    public tags: string[];

    public constructor(id: number, title: string, content: string, createDate: string, tags: string[]) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createDate = createDate;
        this.tags = tags;
    }
}