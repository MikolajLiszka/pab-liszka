import { randomUUID } from 'crypto';
import Tag from './tags';

export class Note {
    public id: string;
    public title: string;
    public content: string;
    public createDate: Date;
    public tags: Tag[];

    public constructor(note: Note) {
        this.id = note.id || randomUUID();
        this.title = note.title;
        this.content = note.content;
        this.createDate = note.createDate || new Date();
        this.tags = note.tags || undefined;
    }
}

export default Note;