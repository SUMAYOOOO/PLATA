export declare class CoursesController {
    findAll(): {
        id: string;
        title: string;
        slug: string;
    }[];
    findOne(slug: string): {
        id: string;
        title: string;
        slug: string;
    };
}
