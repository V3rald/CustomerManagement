import { MediumCharacteristic } from "./mediumCharacteristic.model";

export interface ContactMedium{
    mediumType: string;
    preferred: boolean;
    characteristic: MediumCharacteristic;
}