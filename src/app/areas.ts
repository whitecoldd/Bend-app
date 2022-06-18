export class Areas {
    areaId!: number;
    name!: String;
}
export class Things{
    id!: number;
    areaId!: number;
    joinedWith!: number;
    sku!: String;
    defaultSku!: String;
    status!: String;
    countActive!: number; 
}
