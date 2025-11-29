export declare class TopicsController {
    findByCourse(courseId: string): {
        id: string;
        title: string;
        courseId: string;
    }[];
    findOne(id: string): {
        id: string;
        title: string;
    };
}
