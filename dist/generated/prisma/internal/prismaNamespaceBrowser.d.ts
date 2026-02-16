import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    #private: any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    #private: any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    #private: any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly Toys: "Toys";
    readonly Children: "Children";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ToysScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly material: "material";
    readonly weight: "weight";
    readonly childId: "childId";
};
export type ToysScalarFieldEnum = (typeof ToysScalarFieldEnum)[keyof typeof ToysScalarFieldEnum];
export declare const ChildrenScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly good: "good";
};
export type ChildrenScalarFieldEnum = (typeof ChildrenScalarFieldEnum)[keyof typeof ChildrenScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const ToysOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type ToysOrderByRelevanceFieldEnum = (typeof ToysOrderByRelevanceFieldEnum)[keyof typeof ToysOrderByRelevanceFieldEnum];
export declare const ChildrenOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly address: "address";
};
export type ChildrenOrderByRelevanceFieldEnum = (typeof ChildrenOrderByRelevanceFieldEnum)[keyof typeof ChildrenOrderByRelevanceFieldEnum];
