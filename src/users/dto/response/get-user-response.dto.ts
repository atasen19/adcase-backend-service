import { IsString, IsUUID } from 'class-validator';

export default class GetUserResponseDTO {
  @IsUUID()
  id: string;

  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;
}
