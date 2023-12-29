export interface UsersInterface {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    personalId: number;
    profilePhoto: string;
    mobileNumber: string;
    gender: string;
    country: string;
    city: string;
    address: string;
    zipCode: string;
}

export interface ProjectsInterface {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    projects: [
        {
            position: number,
            name: string,
            weight: number,
            symbol: string,
            description: string
        }
    ]
}