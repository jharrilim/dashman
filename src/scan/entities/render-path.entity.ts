import { Column } from "typeorm";
import { Rendered } from "./rendered.entity";

export class RenderPath {
    @Column()
    type:     string;
    @Column()
    class:    string;
    @Column()
    method:   string;
    @Column()
    line:     number;
    @Column()
    file:     string;
    @Column(type => Rendered)
    rendered: Rendered;
}
