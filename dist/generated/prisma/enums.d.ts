export declare const Material: {
    readonly wood: "wood";
    readonly metal: "metal";
    readonly plastic: "plastic";
    readonly other: "other";
};
export type Material = (typeof Material)[keyof typeof Material];
