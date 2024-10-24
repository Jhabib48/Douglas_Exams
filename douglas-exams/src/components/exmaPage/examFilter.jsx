"use client"
import { useEffect, useState } from "react";

const ExamFilter = ({ examList }) => {
    const [courseList, setCourseList] = useState([]);
    const courseSet = new Set();

    useEffect(() => {
        if (examList) {
            filterExamList();
        }
    }, [examList]);

    const filterExamList = () => {
        examList.forEach((exam) => {
            const coursePrefix = exam.courseName.substring(0,4); 
            courseSet.add(coursePrefix); 
        });
        setCourseList(Array.from(courseSet));
    };

    return (
        <div className="mt-20 flex items-center justify-between">
            <div>
                <h2 className="text-[30px] font-bold">Exam Catalog</h2>
                <h2>Explore Exams</h2>
            </div>
            <div className="flex gap-5 mr-4">
                <select className="select select-bordered w-full md:block max-w-xs hidden">
                    <option disabled defaultValue>
                        Program
                    </option>
                    {courseList.map((courseName, index) => (
                        <option key={index} value={courseName}>
                            {courseName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ExamFilter;
