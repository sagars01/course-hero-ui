import { AppGlobal } from "../../../../utils/app.constants"
import { ICourse } from "./types/courses.interface";


interface ICourseResponse {
    courses: [ICourse]
}

export const GetAllCourses = (): Promise<ICourseResponse> => {
    return new Promise((resolve, reject) => {
        try {
            const courseURL = AppGlobal.apiBaseUrl + "/api/v1/courses/all";
            fetch(courseURL, {
                method: "GET"
            }).then((res) => res.json())
                .then((response) => {
                    resolve(response);
                }).catch((error) => {
                    console.error(error);
                    reject(error)
                })

        } catch {
            reject("Unknown Error");
        }
    })
}