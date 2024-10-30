export interface TaskDto {
    id: number;
    description: string;
    deadline: string; 
    state: {
        id: number;
        name: string;
    }; 
}
