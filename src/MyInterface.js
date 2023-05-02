

export interface Animal {
    type: string;
    image: string;
    name: string;
    weight: number;
    height: number;

}

export interface Pokemon extends Animal{
    description: string;
    data: string;
}