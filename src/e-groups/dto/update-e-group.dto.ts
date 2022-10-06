import { PartialType } from '@nestjs/mapped-types';
import { CreateEGroupDto } from './create-e-group.dto';

export class UpdateEGroupDto extends PartialType(CreateEGroupDto) {
     campus: string;
     demographic : string;
     group_type : string;
     meeting_date : string;
     zip_code : number;
}
