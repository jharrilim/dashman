import { Column } from "typeorm";

export class ScanInfo {
    @Column()
    app_path:              string;
    @Column()
    rails_version:         string;
    @Column()
    security_warnings:     number;
    @Column()
    start_time:            string;
    @Column()
    end_time:              string;
    @Column()
    duration:              number;
    @Column()
    checks_performed:      string[];
    @Column()
    number_of_controllers: number;
    @Column()
    number_of_models:      number;
    @Column()
    number_of_templates:   number;
    @Column()
    ruby_version:          string;
    @Column()
    brakeman_version:      string;
}
