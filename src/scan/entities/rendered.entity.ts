import { Column } from "typeorm";

export class Rendered {
    @Column()
    name: string;
    @Column()
    file: string;
}
