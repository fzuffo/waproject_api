import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';
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
  @IsNumber()
  @ApiProperty({ required: true, type: 'integer' })
  public amount: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true, type: 'float' })
  public value: number;
}
