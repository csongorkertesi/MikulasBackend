import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ToysModel = runtime.Types.Result.DefaultSelection<Prisma.$ToysPayload>;
export type AggregateToys = {
    _count: ToysCountAggregateOutputType | null;
    _avg: ToysAvgAggregateOutputType | null;
    _sum: ToysSumAggregateOutputType | null;
    _min: ToysMinAggregateOutputType | null;
    _max: ToysMaxAggregateOutputType | null;
};
export type ToysAvgAggregateOutputType = {
    id: number | null;
    weight: number | null;
    childId: number | null;
};
export type ToysSumAggregateOutputType = {
    id: number | null;
    weight: number | null;
    childId: number | null;
};
export type ToysMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    material: $Enums.Material | null;
    weight: number | null;
    childId: number | null;
};
export type ToysMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    material: $Enums.Material | null;
    weight: number | null;
    childId: number | null;
};
export type ToysCountAggregateOutputType = {
    id: number;
    name: number;
    material: number;
    weight: number;
    childId: number;
    _all: number;
};
export type ToysAvgAggregateInputType = {
    id?: true;
    weight?: true;
    childId?: true;
};
export type ToysSumAggregateInputType = {
    id?: true;
    weight?: true;
    childId?: true;
};
export type ToysMinAggregateInputType = {
    id?: true;
    name?: true;
    material?: true;
    weight?: true;
    childId?: true;
};
export type ToysMaxAggregateInputType = {
    id?: true;
    name?: true;
    material?: true;
    weight?: true;
    childId?: true;
};
export type ToysCountAggregateInputType = {
    id?: true;
    name?: true;
    material?: true;
    weight?: true;
    childId?: true;
    _all?: true;
};
export type ToysAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToysWhereInput;
    orderBy?: Prisma.ToysOrderByWithRelationInput | Prisma.ToysOrderByWithRelationInput[];
    cursor?: Prisma.ToysWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ToysCountAggregateInputType;
    _avg?: ToysAvgAggregateInputType;
    _sum?: ToysSumAggregateInputType;
    _min?: ToysMinAggregateInputType;
    _max?: ToysMaxAggregateInputType;
};
export type GetToysAggregateType<T extends ToysAggregateArgs> = {
    [P in keyof T & keyof AggregateToys]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateToys[P]> : Prisma.GetScalarType<T[P], AggregateToys[P]>;
};
export type ToysGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToysWhereInput;
    orderBy?: Prisma.ToysOrderByWithAggregationInput | Prisma.ToysOrderByWithAggregationInput[];
    by: Prisma.ToysScalarFieldEnum[] | Prisma.ToysScalarFieldEnum;
    having?: Prisma.ToysScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ToysCountAggregateInputType | true;
    _avg?: ToysAvgAggregateInputType;
    _sum?: ToysSumAggregateInputType;
    _min?: ToysMinAggregateInputType;
    _max?: ToysMaxAggregateInputType;
};
export type ToysGroupByOutputType = {
    id: number;
    name: string;
    material: $Enums.Material;
    weight: number;
    childId: number | null;
    _count: ToysCountAggregateOutputType | null;
    _avg: ToysAvgAggregateOutputType | null;
    _sum: ToysSumAggregateOutputType | null;
    _min: ToysMinAggregateOutputType | null;
    _max: ToysMaxAggregateOutputType | null;
};
type GetToysGroupByPayload<T extends ToysGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ToysGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ToysGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ToysGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ToysGroupByOutputType[P]>;
}>>;
export type ToysWhereInput = {
    AND?: Prisma.ToysWhereInput | Prisma.ToysWhereInput[];
    OR?: Prisma.ToysWhereInput[];
    NOT?: Prisma.ToysWhereInput | Prisma.ToysWhereInput[];
    id?: Prisma.IntFilter<"Toys"> | number;
    name?: Prisma.StringFilter<"Toys"> | string;
    material?: Prisma.EnumMaterialFilter<"Toys"> | $Enums.Material;
    weight?: Prisma.IntFilter<"Toys"> | number;
    childId?: Prisma.IntNullableFilter<"Toys"> | number | null;
    child?: Prisma.XOR<Prisma.ChildrenNullableScalarRelationFilter, Prisma.ChildrenWhereInput> | null;
};
export type ToysOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    childId?: Prisma.SortOrderInput | Prisma.SortOrder;
    child?: Prisma.ChildrenOrderByWithRelationInput;
    _relevance?: Prisma.ToysOrderByRelevanceInput;
};
export type ToysWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ToysWhereInput | Prisma.ToysWhereInput[];
    OR?: Prisma.ToysWhereInput[];
    NOT?: Prisma.ToysWhereInput | Prisma.ToysWhereInput[];
    name?: Prisma.StringFilter<"Toys"> | string;
    material?: Prisma.EnumMaterialFilter<"Toys"> | $Enums.Material;
    weight?: Prisma.IntFilter<"Toys"> | number;
    childId?: Prisma.IntNullableFilter<"Toys"> | number | null;
    child?: Prisma.XOR<Prisma.ChildrenNullableScalarRelationFilter, Prisma.ChildrenWhereInput> | null;
}, "id">;
export type ToysOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    childId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ToysCountOrderByAggregateInput;
    _avg?: Prisma.ToysAvgOrderByAggregateInput;
    _max?: Prisma.ToysMaxOrderByAggregateInput;
    _min?: Prisma.ToysMinOrderByAggregateInput;
    _sum?: Prisma.ToysSumOrderByAggregateInput;
};
export type ToysScalarWhereWithAggregatesInput = {
    AND?: Prisma.ToysScalarWhereWithAggregatesInput | Prisma.ToysScalarWhereWithAggregatesInput[];
    OR?: Prisma.ToysScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ToysScalarWhereWithAggregatesInput | Prisma.ToysScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Toys"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Toys"> | string;
    material?: Prisma.EnumMaterialWithAggregatesFilter<"Toys"> | $Enums.Material;
    weight?: Prisma.IntWithAggregatesFilter<"Toys"> | number;
    childId?: Prisma.IntNullableWithAggregatesFilter<"Toys"> | number | null;
};
export type ToysCreateInput = {
    name: string;
    material: $Enums.Material;
    weight: number;
    child?: Prisma.ChildrenCreateNestedOneWithoutToysInput;
};
export type ToysUncheckedCreateInput = {
    id?: number;
    name: string;
    material: $Enums.Material;
    weight: number;
    childId?: number | null;
};
export type ToysUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.EnumMaterialFieldUpdateOperationsInput | $Enums.Material;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    child?: Prisma.ChildrenUpdateOneWithoutToysNestedInput;
};
export type ToysUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.EnumMaterialFieldUpdateOperationsInput | $Enums.Material;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    childId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ToysCreateManyInput = {
    id?: number;
    name: string;
    material: $Enums.Material;
    weight: number;
    childId?: number | null;
};
export type ToysUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.EnumMaterialFieldUpdateOperationsInput | $Enums.Material;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ToysUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.EnumMaterialFieldUpdateOperationsInput | $Enums.Material;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    childId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ToysOrderByRelevanceInput = {
    fields: Prisma.ToysOrderByRelevanceFieldEnum | Prisma.ToysOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ToysCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    childId?: Prisma.SortOrder;
};
export type ToysAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    childId?: Prisma.SortOrder;
};
export type ToysMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    childId?: Prisma.SortOrder;
};
export type ToysMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    material?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    childId?: Prisma.SortOrder;
};
export type ToysSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    childId?: Prisma.SortOrder;
};
export type ToysListRelationFilter = {
    every?: Prisma.ToysWhereInput;
    some?: Prisma.ToysWhereInput;
    none?: Prisma.ToysWhereInput;
};
export type ToysOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumMaterialFieldUpdateOperationsInput = {
    set?: $Enums.Material;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ToysCreateNestedManyWithoutChildInput = {
    create?: Prisma.XOR<Prisma.ToysCreateWithoutChildInput, Prisma.ToysUncheckedCreateWithoutChildInput> | Prisma.ToysCreateWithoutChildInput[] | Prisma.ToysUncheckedCreateWithoutChildInput[];
    connectOrCreate?: Prisma.ToysCreateOrConnectWithoutChildInput | Prisma.ToysCreateOrConnectWithoutChildInput[];
    createMany?: Prisma.ToysCreateManyChildInputEnvelope;
    connect?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
};
export type ToysUncheckedCreateNestedManyWithoutChildInput = {
    create?: Prisma.XOR<Prisma.ToysCreateWithoutChildInput, Prisma.ToysUncheckedCreateWithoutChildInput> | Prisma.ToysCreateWithoutChildInput[] | Prisma.ToysUncheckedCreateWithoutChildInput[];
    connectOrCreate?: Prisma.ToysCreateOrConnectWithoutChildInput | Prisma.ToysCreateOrConnectWithoutChildInput[];
    createMany?: Prisma.ToysCreateManyChildInputEnvelope;
    connect?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
};
export type ToysUpdateManyWithoutChildNestedInput = {
    create?: Prisma.XOR<Prisma.ToysCreateWithoutChildInput, Prisma.ToysUncheckedCreateWithoutChildInput> | Prisma.ToysCreateWithoutChildInput[] | Prisma.ToysUncheckedCreateWithoutChildInput[];
    connectOrCreate?: Prisma.ToysCreateOrConnectWithoutChildInput | Prisma.ToysCreateOrConnectWithoutChildInput[];
    upsert?: Prisma.ToysUpsertWithWhereUniqueWithoutChildInput | Prisma.ToysUpsertWithWhereUniqueWithoutChildInput[];
    createMany?: Prisma.ToysCreateManyChildInputEnvelope;
    set?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    disconnect?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    delete?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    connect?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    update?: Prisma.ToysUpdateWithWhereUniqueWithoutChildInput | Prisma.ToysUpdateWithWhereUniqueWithoutChildInput[];
    updateMany?: Prisma.ToysUpdateManyWithWhereWithoutChildInput | Prisma.ToysUpdateManyWithWhereWithoutChildInput[];
    deleteMany?: Prisma.ToysScalarWhereInput | Prisma.ToysScalarWhereInput[];
};
export type ToysUncheckedUpdateManyWithoutChildNestedInput = {
    create?: Prisma.XOR<Prisma.ToysCreateWithoutChildInput, Prisma.ToysUncheckedCreateWithoutChildInput> | Prisma.ToysCreateWithoutChildInput[] | Prisma.ToysUncheckedCreateWithoutChildInput[];
    connectOrCreate?: Prisma.ToysCreateOrConnectWithoutChildInput | Prisma.ToysCreateOrConnectWithoutChildInput[];
    upsert?: Prisma.ToysUpsertWithWhereUniqueWithoutChildInput | Prisma.ToysUpsertWithWhereUniqueWithoutChildInput[];
    createMany?: Prisma.ToysCreateManyChildInputEnvelope;
    set?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    disconnect?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    delete?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    connect?: Prisma.ToysWhereUniqueInput | Prisma.ToysWhereUniqueInput[];
    update?: Prisma.ToysUpdateWithWhereUniqueWithoutChildInput | Prisma.ToysUpdateWithWhereUniqueWithoutChildInput[];
    updateMany?: Prisma.ToysUpdateManyWithWhereWithoutChildInput | Prisma.ToysUpdateManyWithWhereWithoutChildInput[];
    deleteMany?: Prisma.ToysScalarWhereInput | Prisma.ToysScalarWhereInput[];
};
export type ToysCreateWithoutChildInput = {
    name: string;
    material: $Enums.Material;
    weight: number;
};
export type ToysUncheckedCreateWithoutChildInput = {
    id?: number;
    name: string;
    material: $Enums.Material;
    weight: number;
};
export type ToysCreateOrConnectWithoutChildInput = {
    where: Prisma.ToysWhereUniqueInput;
    create: Prisma.XOR<Prisma.ToysCreateWithoutChildInput, Prisma.ToysUncheckedCreateWithoutChildInput>;
};
export type ToysCreateManyChildInputEnvelope = {
    data: Prisma.ToysCreateManyChildInput | Prisma.ToysCreateManyChildInput[];
    skipDuplicates?: boolean;
};
export type ToysUpsertWithWhereUniqueWithoutChildInput = {
    where: Prisma.ToysWhereUniqueInput;
    update: Prisma.XOR<Prisma.ToysUpdateWithoutChildInput, Prisma.ToysUncheckedUpdateWithoutChildInput>;
    create: Prisma.XOR<Prisma.ToysCreateWithoutChildInput, Prisma.ToysUncheckedCreateWithoutChildInput>;
};
export type ToysUpdateWithWhereUniqueWithoutChildInput = {
    where: Prisma.ToysWhereUniqueInput;
    data: Prisma.XOR<Prisma.ToysUpdateWithoutChildInput, Prisma.ToysUncheckedUpdateWithoutChildInput>;
};
export type ToysUpdateManyWithWhereWithoutChildInput = {
    where: Prisma.ToysScalarWhereInput;
    data: Prisma.XOR<Prisma.ToysUpdateManyMutationInput, Prisma.ToysUncheckedUpdateManyWithoutChildInput>;
};
export type ToysScalarWhereInput = {
    AND?: Prisma.ToysScalarWhereInput | Prisma.ToysScalarWhereInput[];
    OR?: Prisma.ToysScalarWhereInput[];
    NOT?: Prisma.ToysScalarWhereInput | Prisma.ToysScalarWhereInput[];
    id?: Prisma.IntFilter<"Toys"> | number;
    name?: Prisma.StringFilter<"Toys"> | string;
    material?: Prisma.EnumMaterialFilter<"Toys"> | $Enums.Material;
    weight?: Prisma.IntFilter<"Toys"> | number;
    childId?: Prisma.IntNullableFilter<"Toys"> | number | null;
};
export type ToysCreateManyChildInput = {
    id?: number;
    name: string;
    material: $Enums.Material;
    weight: number;
};
export type ToysUpdateWithoutChildInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.EnumMaterialFieldUpdateOperationsInput | $Enums.Material;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ToysUncheckedUpdateWithoutChildInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.EnumMaterialFieldUpdateOperationsInput | $Enums.Material;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ToysUncheckedUpdateManyWithoutChildInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    material?: Prisma.EnumMaterialFieldUpdateOperationsInput | $Enums.Material;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ToysSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    material?: boolean;
    weight?: boolean;
    childId?: boolean;
    child?: boolean | Prisma.Toys$childArgs<ExtArgs>;
}, ExtArgs["result"]["toys"]>;
export type ToysSelectScalar = {
    id?: boolean;
    name?: boolean;
    material?: boolean;
    weight?: boolean;
    childId?: boolean;
};
export type ToysOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "material" | "weight" | "childId", ExtArgs["result"]["toys"]>;
export type ToysInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    child?: boolean | Prisma.Toys$childArgs<ExtArgs>;
};
export type $ToysPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Toys";
    objects: {
        child: Prisma.$ChildrenPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        material: $Enums.Material;
        weight: number;
        childId: number | null;
    }, ExtArgs["result"]["toys"]>;
    composites: {};
};
export type ToysGetPayload<S extends boolean | null | undefined | ToysDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ToysPayload, S>;
export type ToysCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ToysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ToysCountAggregateInputType | true;
};
export interface ToysDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Toys'];
        meta: {
            name: 'Toys';
        };
    };
    findUnique<T extends ToysFindUniqueArgs>(args: Prisma.SelectSubset<T, ToysFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ToysFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ToysFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ToysFindFirstArgs>(args?: Prisma.SelectSubset<T, ToysFindFirstArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ToysFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ToysFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ToysFindManyArgs>(args?: Prisma.SelectSubset<T, ToysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ToysCreateArgs>(args: Prisma.SelectSubset<T, ToysCreateArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ToysCreateManyArgs>(args?: Prisma.SelectSubset<T, ToysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ToysDeleteArgs>(args: Prisma.SelectSubset<T, ToysDeleteArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ToysUpdateArgs>(args: Prisma.SelectSubset<T, ToysUpdateArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ToysDeleteManyArgs>(args?: Prisma.SelectSubset<T, ToysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ToysUpdateManyArgs>(args: Prisma.SelectSubset<T, ToysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ToysUpsertArgs>(args: Prisma.SelectSubset<T, ToysUpsertArgs<ExtArgs>>): Prisma.Prisma__ToysClient<runtime.Types.Result.GetResult<Prisma.$ToysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ToysCountArgs>(args?: Prisma.Subset<T, ToysCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ToysCountAggregateOutputType> : number>;
    aggregate<T extends ToysAggregateArgs>(args: Prisma.Subset<T, ToysAggregateArgs>): Prisma.PrismaPromise<GetToysAggregateType<T>>;
    groupBy<T extends ToysGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ToysGroupByArgs['orderBy'];
    } : {
        orderBy?: ToysGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ToysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ToysFieldRefs;
}
export interface Prisma__ToysClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    child<T extends Prisma.Toys$childArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Toys$childArgs<ExtArgs>>): Prisma.Prisma__ChildrenClient<runtime.Types.Result.GetResult<Prisma.$ChildrenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ToysFieldRefs {
    readonly id: Prisma.FieldRef<"Toys", 'Int'>;
    readonly name: Prisma.FieldRef<"Toys", 'String'>;
    readonly material: Prisma.FieldRef<"Toys", 'Material'>;
    readonly weight: Prisma.FieldRef<"Toys", 'Int'>;
    readonly childId: Prisma.FieldRef<"Toys", 'Int'>;
}
export type ToysFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
    where: Prisma.ToysWhereUniqueInput;
};
export type ToysFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
    where: Prisma.ToysWhereUniqueInput;
};
export type ToysFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ToysFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ToysFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ToysCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ToysCreateInput, Prisma.ToysUncheckedCreateInput>;
};
export type ToysCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ToysCreateManyInput | Prisma.ToysCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ToysUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ToysUpdateInput, Prisma.ToysUncheckedUpdateInput>;
    where: Prisma.ToysWhereUniqueInput;
};
export type ToysUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ToysUpdateManyMutationInput, Prisma.ToysUncheckedUpdateManyInput>;
    where?: Prisma.ToysWhereInput;
    limit?: number;
};
export type ToysUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
    where: Prisma.ToysWhereUniqueInput;
    create: Prisma.XOR<Prisma.ToysCreateInput, Prisma.ToysUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ToysUpdateInput, Prisma.ToysUncheckedUpdateInput>;
};
export type ToysDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
    where: Prisma.ToysWhereUniqueInput;
};
export type ToysDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ToysWhereInput;
    limit?: number;
};
export type Toys$childArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChildrenSelect<ExtArgs> | null;
    omit?: Prisma.ChildrenOmit<ExtArgs> | null;
    include?: Prisma.ChildrenInclude<ExtArgs> | null;
    where?: Prisma.ChildrenWhereInput;
};
export type ToysDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ToysSelect<ExtArgs> | null;
    omit?: Prisma.ToysOmit<ExtArgs> | null;
    include?: Prisma.ToysInclude<ExtArgs> | null;
};
export {};
