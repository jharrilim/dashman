import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ScanInfo } from './scan-info.entity';
import { Warning } from './warning.entity';

@Entity()
export class Scan {
  @ObjectIdColumn()
  id: ObjectID;

  @CreateDateColumn()
  dateCreated: Date;

  @Column(type => ScanInfo)
  scan_info: ScanInfo;

  @Column(type => Warning)
  warnings: Warning[];

  @Column()
  ignored_warnings: any[];
  
  @Column()
  errors: any[];
  
  @Column()
  obsolete: any[];
}
