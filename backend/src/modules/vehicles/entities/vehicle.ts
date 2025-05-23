export class Vehicle{
    constructor(
        public readonly id: string,
        public fipeCode: string,
        public value: number,
        public fuelTypeId: string,
        public referenceMonth: number,
        public referenceYear: number,
        public vehicleYear: number,
        public modelId: string,
    ){}
}