// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserDepartment extends jspb.Message { 
    getMale(): number;
    setMale(value: number): UserDepartment;
    getFemale(): number;
    setFemale(value: number): UserDepartment;
    getAgerange(): string;
    setAgerange(value: string): UserDepartment;

    getHairMap(): jspb.Map<string, number>;
    clearHairMap(): void;

    getAddressuserMap(): jspb.Map<string, string>;
    clearAddressuserMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDepartment.AsObject;
    static toObject(includeInstance: boolean, msg: UserDepartment): UserDepartment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDepartment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDepartment;
    static deserializeBinaryFromReader(message: UserDepartment, reader: jspb.BinaryReader): UserDepartment;
}

export namespace UserDepartment {
    export type AsObject = {
        male: number,
        female: number,
        agerange: string,

        hairMap: Array<[string, number]>,

        addressuserMap: Array<[string, string]>,
    }
}

export class GetUsersResponse extends jspb.Message { 

    getDepartmentsMap(): jspb.Map<string, UserDepartment>;
    clearDepartmentsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersResponse): GetUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersResponse;
    static deserializeBinaryFromReader(message: GetUsersResponse, reader: jspb.BinaryReader): GetUsersResponse;
}

export namespace GetUsersResponse {
    export type AsObject = {

        departmentsMap: Array<[string, UserDepartment.AsObject]>,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}
