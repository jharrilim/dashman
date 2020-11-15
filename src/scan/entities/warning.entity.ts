import { Column } from "typeorm";
import { Location } from "./location.entity";
import { RenderPath } from "./render-path.entity";

export enum Confidence {
    High = "High",
    Medium = "Medium",
    Weak = "Weak",
}


export class Warning {
    @Column()
    warning_type: string;
    @Column()
    warning_code: number;
    @Column()
    fingerprint:  string;
    @Column()
    check_name:   string;
    @Column()
    message:      string;
    @Column()
    file:         string;
    @Column()
    line:         number;
    @Column()
    link:         string;
    @Column()
    code:         null | string;
    @Column()
    render_path:  RenderPath[] | null;
    @Column()
    location:     Location | null;
    @Column()
    user_input:   null | string;
    @Column('enum', { enum: Confidence })
    confidence:   Confidence;
}
