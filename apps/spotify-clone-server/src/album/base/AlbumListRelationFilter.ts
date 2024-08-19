/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AlbumWhereInput } from "./AlbumWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AlbumListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AlbumWhereInput,
  })
  @ValidateNested()
  @Type(() => AlbumWhereInput)
  @IsOptional()
  @Field(() => AlbumWhereInput, {
    nullable: true,
  })
  every?: AlbumWhereInput;

  @ApiProperty({
    required: false,
    type: () => AlbumWhereInput,
  })
  @ValidateNested()
  @Type(() => AlbumWhereInput)
  @IsOptional()
  @Field(() => AlbumWhereInput, {
    nullable: true,
  })
  some?: AlbumWhereInput;

  @ApiProperty({
    required: false,
    type: () => AlbumWhereInput,
  })
  @ValidateNested()
  @Type(() => AlbumWhereInput)
  @IsOptional()
  @Field(() => AlbumWhereInput, {
    nullable: true,
  })
  none?: AlbumWhereInput;
}
export { AlbumListRelationFilter as AlbumListRelationFilter };
