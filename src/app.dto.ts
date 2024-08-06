import { ApiResponseProperty } from '@nestjs/swagger';

export class HelloResponse {
  /**
   * This property has an explicit @ApiProperty annotation, which
   * overrides (some) metadata loaded with loadPluginMetadata.
   * In this case, the schema will be of type string[] instead of
   * the correct type number[].
   * Somehow the information { isArray: true } from the metadata
   * is kept, while { type: "number" } gets overwitten by
   * { type: "string" }.
   */
  @ApiResponseProperty()
  myValues: number[];

  /**
   * This property has no @ApiProperty annotation, and the correct
   * type is loaded from the metadata (number[]).
   */
  myOtherValues: number[];
}
