import { useState, useEffect } from "react";

const ExamTable = ({ examData, selectedCourse }) => {
  const [filteredExams, setFilteredExams] = useState(examData);
  
  useEffect(() => {
    if (selectedCourse) {
      filterCourseList(selectedCourse);
    }
  }, [selectedCourse, examData]);

  const filterCourseList = (selectedCourse) => {
    const filteredExams = examData.filter((exam) => {
      const coursePrefix = exam.courseName.substring(0, 4);
      return coursePrefix === selectedCourse; // Only show exams with matching prefix
    });
    setFilteredExams(filteredExams);
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Course</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Section</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Instructor</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Date</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Start Time</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">End Time</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Building</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">Room</th>
                  <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(filteredExams.length > 0 ? filteredExams : examData).map((exam, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{exam.courseName}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.section}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.instructor}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.startTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.endTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.building}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.room}</td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        onClick={() => {
                          window.my_modal_4.showModal();
                        }}
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        ADD
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamTable;



{/* <tbody className="divide-y divide-gray-200">
                {examData.map((exam, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{exam.courseName}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.section}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.instructor}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.startTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.endTime}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.building}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{exam.room}</td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a
                        onClick={() => {
                          window.my_modal_4.showModal();
                          setSelectedExam(exam);
                        }}
                        className="text-green-500 hover:text-green-700"
                        href="#"
                      >
                        ADD
                      </a>
                    </td>
                    {/* <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                      </a>
                    </td> */}
              //     </tr>
              //   ))}
              // </tbody> */}