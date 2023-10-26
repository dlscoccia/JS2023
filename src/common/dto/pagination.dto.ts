/* eslint-disable prettier/prettier */
import { IsPositive, IsOptional, Min } from 'class-validator';
export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsPositive()
  offset?: number;
}
