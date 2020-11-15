import { Column } from "typeorm";

export enum LocationType {
    Method = "method",
    Template = "template",
}

export class Location {
    @Column('enum', { enum: LocationType })
    type:      LocationType;
    @Column()
    class?:    string;
    @Column()
    method?:   string;
    @Column()
    template?: string;
}
