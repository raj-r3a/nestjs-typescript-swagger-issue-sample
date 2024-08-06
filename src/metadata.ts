/* eslint-disable */
export default async () => {
    const t = {
        ["./app.dto"]: await import("./app.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./app.dto"), { "HelloResponse": { myValues: { required: true, type: () => [Number], description: "This property has an explicit @ApiProperty annotation, which\noverrides (some) metadata loaded with loadPluginMetadata.\nIn this case, the schema will be of type string[] instead of\nthe correct type number[].\nSomehow the information { isArray: true } from the metadata\nis kept, while { type: \"number\" } gets overwitten by\n{ type: \"string\" }." }, myOtherValues: { required: true, type: () => [Number], description: "This property has no @ApiProperty annotation, and the correct\ntype is loaded from the metadata (number[])." } } }]], "controllers": [[import("./app.controller"), { "AppController": { "gotoApiDocs": {}, "getHello": { summary: "This is my endpoint summary", type: t["./app.dto"].HelloResponse }, "getBadRequest": { summary: "The docs only show the 400 response. The default 200 response\nwhich is included in the metadata gets overridden.", type: t["./app.dto"].HelloResponse } } }]] } };
};