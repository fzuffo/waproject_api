import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements IOrder {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiProperty({ required: false, type: 'integer' })
  public id?: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 100 })
  public description: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty({ required: true, type: 'string' })
  public amount: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @ApiProperty({ required: true, type: 'string' })
  public value: string;
}
