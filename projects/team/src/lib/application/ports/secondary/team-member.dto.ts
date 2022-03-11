import { DepartmentDTO } from './department.dto';

export interface TeamMemberDTO {
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly bio: string;
  readonly department: DepartmentDTO;
}
