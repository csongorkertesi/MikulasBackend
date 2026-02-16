import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChildrenModel = runtime.Types.Result.DefaultSelection<Prisma.$ChildrenPayload>;
export type AggregateChildren = {
    _count: ChildrenCountAggregateOutputType | null;
    _avg: ChildrenAvgAggregateOutputType | null;
    _sum: ChildrenSumAggregateOutputType | null;
    _min: ChildrenMinAggregateOutputType | null;
    _max: ChildrenMaxAggregateOutputType | null;
};
export type ChildrenAvgAggregateOutputType = {
    id: number | null;
};
export type ChildrenSumAggregateOutputType = {
    id: number | null;
};
export type ChildrenMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    address: string | null;
    good: boolean | null;
};
export type ChildrenMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    address: string | null;
    good: boolean | null;
};
export type ChildrenCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    good: number;
    _all: number;
};
export type ChildrenAvgAggregateInputType = {
    id?: true;
};
export type ChildrenSumAggregateInputType = {
    id?: true;
};
export type ChildrenMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    good?: true;
};
export type ChildrenMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    good?: true;
};
export type ChildrenCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    good?: true;
    _all?: true;
};
export type ChildrenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChildrenWhereInput;
    orderBy?: Prisma.ChildrenOrderByWithRelationInput | Prisma.ChildrenOrderByWithRelationInput[];
    cursor?: Prisma.ChildrenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChildrenCountAggregateInputType;
    _avg?: ChildrenAvgAggregateInputType;
    _sum?: ChildrenSumAggregateInputType;
    _min?: ChildrenMinAggregateInputType;
    _max?: ChildrenMaxAggregateInputType;
};
export type GetChildrenAggregateType<T extends ChildrenAggregateArgs> = {
    [P in keyof T & keyof AggregateChildren]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChildren[P]> : Prisma.GetScalarType<T[P], AggregateChildren[P]>;
};
export type ChildrenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChildrenWhereInput;
    orderBy?: Prisma.ChildrenOrderByWithAggregationInput | Prisma.ChildrenOrderByWithAggregationInput[];
    by: Prisma.ChildrenScalarFieldEnum[] | Prisma.ChildrenScalarFieldEnum;
    having?: Prisma.ChildrenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChildrenCountAggregateInputType | true;
    _avg?: ChildrenAvgAggregateInputType;
    _sum?: ChildrenSumAggregateInputType;
    _min?: ChildrenMinAggregateInputType;
    _max?: ChildrenMaxAggregateInputType;
};
export type ChildrenGroupByOutputType = {
    id: number;
    name: string;
    address: string;
    good: boolean;
    _count: ChildrenCountAggregateOutputType | null;
    _avg: ChildrenAvgAggregateOutputType | null;
    _sum: ChildrenSumAggregateOutputType | null;
    _min: ChildrenMinAggregateOutputType | null;
    _max: ChildrenMaxAggregateOutputType | null;
};
type GetChildrenGroupByPayload<T extends ChildrenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChildrenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChildrenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChildrenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChildrenGroupByOutputType[P]>;
}>>;
export type ChildrenWhereInput = {
    AND?: Prisma.ChildrenWhereInput | Prisma.ChildrenWhereInput[];
    OR?: Prisma.ChildrenWhereInput[];
    NOT?: Prisma.ChildrenWhereInput | Prisma.ChildrenWhereInput[];
    id?: Prisma.IntFilter<"Children"> | number;
    name?: Prisma.StringFilter<"Children"> | string;
    address?: Prisma.StringFilter<"Children"> | string;
    good?: Prisma.BoolFilter<"Children"> | boolean;
    toys?: Prisma.ToysListRelationFilter;
};
export type ChildrenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    good?: Prisma.SortOrder;
    toys?: Prisma.ToysOrderByRelationAggregateInput;
    _relevance?: Prisma.ChildrenOrderByRelevanceInput;
};
export type ChildrenWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.ChildrenWhereInput | Prisma.ChildrenWhereInput[];
    OR?: Prisma.ChildrenWhereInput[];
    NOT?: Prisma.ChildrenWhereInput | Prisma.ChildrenWhereInput[];
    address?: Prisma.StringFilter<"Children"> | string;
    good?: Prisma.BoolFilter<"Children"> | boolean;
    toys?: Prisma.ToysListRelationFilter;
}, "id" | "name">;
export type ChildrenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    good?: Prisma.SortOrder;
    _count?: Prisma.ChildrenCountOrderByAggregateInput;
    _avg?: Prisma.ChildrenAvgOrderByAggregateInput;
    _max?: Prisma.ChildrenMaxOrderByAggregateInput;
    _min?: Prisma.ChildrenMinOrderByAggregateInput;
    _sum?: Prisma.ChildrenSumOrderByAggregateInput;
};
export type ChildrenScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChildrenScalarWhereWithAggregatesInput | Prisma.ChildrenScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChildrenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChildrenScalarWhereWithAggregatesInput | Prisma.ChildrenScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Children"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Children"> | string;
    address?: Prisma.StringWithAggregatesFilter<"Children"> | string;
    good?: Prisma.BoolWithAggregatesFilter<"Children"> | boolean;
};
export type ChildrenCreateInput = {
    name: string;
    address: string;
    good?: boolean;
    toys?: Prisma.ToysCreateNestedManyWithoutChildInput;
};
export type ChildrenUncheckedCreateInput = {
    id?: number;
    name: string;
    address: string;
    good?: boolean;
    toys?: Prisma.ToysUncheckedCreateNestedManyWithoutChildInput;
};
export type ChildrenUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    good?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    toys?: Prisma.ToysUpdateManyWithoutChildNestedInput;
};
export type ChildrenUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    good?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    toys?: Prisma.ToysUncheckedUpdateManyWithoutChildNestedInput;
};
export type ChildrenCreateManyInput = {
    id?: number;
    name: string;
    address: string;
    good?: boolean;
};
export type ChildrenUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    good?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChildrenUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    good?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChildrenNullableScalarRelationFilter = {
    is?: Prisma.ChildrenWhereInput | null;
    isNot?: Prisma.ChildrenWhereInput | null;
};
export type ChildrenOrderByRelevanceInput = {
    fields: Prisma.ChildrenOrderByRelevanceFieldEnum | Prisma.ChildrenOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ChildrenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    good?: Prisma.SortOrder;
};
export type ChildrenAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ChildrenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    good?: Prisma.SortOrder;
};
export type ChildrenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    good?: Prisma.SortOrder;
};
export type ChildrenSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ChildrenCreateNestedOneWithoutToysInput = {
    create?: Prisma.XOR<Prisma.ChildrenCreateWithoutToysInput, Prisma.ChildrenUncheckedCreateWithoutToysInput>;
    connectOrCreate?: Prisma.ChildrenCreateOrConnectWithoutToysInput;
    connect?: Prisma.ChildrenWhereUniqueInput;
};
export type ChildrenUpdateOneWithoutToysNestedInput = {
    create?: Prisma.XOR<Prisma.ChildrenCreateWithoutToysInput, Prisma.ChildrenUncheckedCreateWithoutToysInput>;
    connectOrCreate?: Prisma.ChildrenCreateOrConnectWithoutToysInput;
    upsert?: Prisma.ChildrenUpsertWithoutToysInput;
    disconnect?: Prisma.ChildrenWhereInput | boolean;
    delete?: Prisma.ChildrenWhereInput | boolean;
    connect?: Prisma.ChildrenWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChildrenUpdateToOneWithWhereWithoutToysInput, Prisma.ChildrenUpdateWithoutToysInput>, Prisma.ChildrenUncheckedUpdateWithoutToysInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ChildrenCreateWithoutToysInput = {
    name: string;
    address: string;
    good?: boolean;
};
export type ChildrenUncheckedCreateWithoutToysInput = {
    id?: number;
    name: string;
    address: string;
    good?: boolean;
};
export type ChildrenCreateOrConnectWithoutToysInput = {
    where: Prisma.ChildrenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChildrenCreateWithoutToysInput, Prisma.ChildrenUncheckedCreateWithoutToysInput>;
};
export type ChildrenUpsertWithoutToysInput = {
    update: Prisma.XOR<Prisma.ChildrenUpdateWithoutToysInput, Prisma.ChildrenUncheckedUpdateWithoutToysInput>;
    create: Prisma.XOR<Prisma.ChildrenCreateWithoutToysInput, Prisma.ChildrenUncheckedCreateWithoutToysInput>;
    where?: Prisma.ChildrenWhereInput;
};
export type ChildrenUpdateToOneWithWhereWithoutToysInput = {
    where?: Prisma.ChildrenWhereInput;
    data: Prisma.XOR<Prisma.ChildrenUpdateWithoutToysInput, Prisma.ChildrenUncheckedUpdateWithoutToysInput>;
};
export type ChildrenUpdateWithoutToysInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    good?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChildrenUncheckedUpdateWithoutToysInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    good?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChildrenCountOutputType = {
    toys: number;
};
export type ChildrenCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    toys?: boolean | ChildrenCountOutputTypeCountToysArgs;
};
export type ChildrenCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenCountOutputTypeSelect<ExtArgs> | null;
};
export type ChildrenCountOutputTypeCountToysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToysWhereInput;
};
export type ChildrenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    address?: boolean;
    good?: boolean;
    toys?: boolean | Prisma.Children$toysArgs<ExtArgs>;
    _count?: boolean | Prisma.ChildrenCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["children"]>;
export type ChildrenSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    good?: boolean;
};
export type ChildrenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "address" | "good", ExtArgs["result"]["children"]>;
export type ChildrenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    toys?: boolean | Prisma.Children$toysArgs<ExtArgs>;
    _count?: boolean | Prisma.ChildrenCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ChildrenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Children";
    objects: {
        toys: Prisma.$ToysPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        address: string;
        good: boolean;
    }, ExtArgs["result"]["children"]>;
    composites: {};
};
export type ChildrenGetPayload<S extends boolean | null | undefined | ChildrenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChildrenPayload, S>;
export type ChildrenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChildrenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChildrenCountAggregateInputType | true;
};
export interface ChildrenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Children'];
        meta: {
            name: 'Children';
        };
    };
    findUnique<T extends ChildrenFindUniqueArgs>(args: Prisma.SelectSubset<T, ChildrenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChildrenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChildrenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChildrenFindFirstArgs>(args?: Prisma.SelectSubset<T, ChildrenFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChildrenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChildrenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChildrenFindManyArgs>(args?: Prisma.SelectSubset<T, ChildrenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChildrenCreateArgs>(args: Prisma.SelectSubset<T, ChildrenCreateArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChildrenCreateManyArgs>(args?: Prisma.SelectSubset<T, ChildrenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ChildrenDeleteArgs>(args: Prisma.SelectSubset<T, ChildrenDeleteArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChildrenUpdateArgs>(args: Prisma.SelectSubset<T, ChildrenUpdateArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChildrenDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChildrenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChildrenUpdateManyArgs>(args: Prisma.SelectSubset<T, ChildrenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ChildrenUpsertArgs>(args: Prisma.SelectSubset<T, ChildrenUpsertArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChildrenCountArgs>(args?: Prisma.Subset<T, ChildrenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChildrenCountAggregateOutputType> : number>;
    aggregate<T extends ChildrenAggregateArgs>(args: Prisma.Subset<T, ChildrenAggregateArgs>): Prisma.PrismaPromise<GetChildrenAggregateType<T>>;
    groupBy<T extends ChildrenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChildrenGroupByArgs['orderBy'];
    } : {
        orderBy?: ChildrenGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChildrenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChildrenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChildrenFieldRefs;
}
export interface Prisma__ChildrenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    toys<T extends Prisma.Children$toysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Children$toysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChildrenFieldRefs {
    readonly id: Prisma.FieldRef<"Children", 'Int'>;
    readonly name: Prisma.FieldRef<"Children", 'String'>;
    readonly address: Prisma.FieldRef<"Children", 'String'>;
    readonly good: Prisma.FieldRef<"Children", 'Boolean'>;
}
export type ChildrenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where: Prisma.ChildrenWhereUniqueInput;
};
export type ChildrenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where: Prisma.ChildrenWhereUniqueInput;
};
export type ChildrenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where?: Prisma.ChildrenWhereInput;
    orderBy?: Prisma.ChildrenOrderByWithRelationInput | Prisma.ChildrenOrderByWithRelationInput[];
    cursor?: Prisma.ChildrenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChildrenScalarFieldEnum | Prisma.ChildrenScalarFieldEnum[];
};
export type ChildrenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where?: Prisma.ChildrenWhereInput;
    orderBy?: Prisma.ChildrenOrderByWithRelationInput | Prisma.ChildrenOrderByWithRelationInput[];
    cursor?: Prisma.ChildrenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChildrenScalarFieldEnum | Prisma.ChildrenScalarFieldEnum[];
};
export type ChildrenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where?: Prisma.ChildrenWhereInput;
    orderBy?: Prisma.ChildrenOrderByWithRelationInput | Prisma.ChildrenOrderByWithRelationInput[];
    cursor?: Prisma.ChildrenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChildrenScalarFieldEnum | Prisma.ChildrenScalarFieldEnum[];
};
export type ChildrenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChildrenCreateInput, Prisma.ChildrenUncheckedCreateInput>;
};
export type ChildrenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChildrenCreateManyInput | Prisma.ChildrenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChildrenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChildrenUpdateInput, Prisma.ChildrenUncheckedUpdateInput>;
    where: Prisma.ChildrenWhereUniqueInput;
};
export type ChildrenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChildrenUpdateManyMutationInput, Prisma.ChildrenUncheckedUpdateManyInput>;
    where?: Prisma.ChildrenWhereInput;
    limit?: number;
};
export type ChildrenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where: Prisma.ChildrenWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChildrenCreateInput, Prisma.ChildrenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChildrenUpdateInput, Prisma.ChildrenUncheckedUpdateInput>;
};
export type ChildrenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where: Prisma.ChildrenWhereUniqueInput;
};
export type ChildrenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChildrenWhereInput;
    limit?: number;
};
export type Children$toysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
    where?: Prisma.ToysWhereInput;
    orderBy?: Prisma.ToysOrderByWithRelationInput | Prisma.ToysOrderByWithRelationInput[];
    cursor?: Prisma.ToysWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ToysScalarFieldEnum | Prisma.ToysScalarFieldEnum[];
};
export type ChildrenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
};
export {};
