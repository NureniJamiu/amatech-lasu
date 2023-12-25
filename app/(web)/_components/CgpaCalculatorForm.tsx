"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const gradePoints: number[] = []
const creditUnits: number[] = []
const totalCreditPoint: number[] = []

const CgpaCalculatorForm = () => {
    const [courseCode, setCourseCode] = useState("")
    const [gradePoint, setGradePoint] = useState("")
    const [creditUnit, setCreditUnit] = useState("");

    const [gpa, setGpa] = useState(0);
    const [result, setResult] = useState("");

    const [tableData, setTableData] = useState<Array<Array<string>>>([]);

    const determineStudentClass = (calcGrade: number): string => {
        let resultClass: string = "";

        console.log("calcGrade", calcGrade);

        if (calcGrade >= 4.50 && calcGrade <= 5.00) {
            return resultClass = "You're a 'First Class' Student";
        } else if (calcGrade >= 3.50 && calcGrade < 4.50) {
            return resultClass = "You're a 'Second Class Upper' Student"
        } else if (calcGrade >= 2.40 && calcGrade < 3.50) {
            return resultClass = "You're a 'Second Class Lower' Student"
        } else if (calcGrade >= 1.50 && calcGrade < 2.40) {
            return resultClass = "You're a 'Third Class' Student"
        } else {
            return resultClass = "You're below the 'Third class' category"
        }

        // if (calcGrade < 1.50) {
        //     return resultClass = "Pass";
        // } else if (calcGrade >= 1.50) {
        //     return resultClass = "Third class"
        // } else if (calcGrade >= 2.40) {
        //     return resultClass = "Second class lower"
        // } else if (calcGrade >= 3.50) {
        //     return resultClass = "Second class upper"
        // } else {
        //     return resultClass = "First class"
        // }
    }

    const clearInputFields = () => {
        setCourseCode("")
        setGradePoint("")
        setCreditUnit("")
    }

    const addTableRow = () => {
        const newRow = [courseCode, creditUnit, gradePoint, "remove"];
        const newTableData = [...tableData, newRow];
        setTableData(newTableData);
    };

    const handleRemoveCourse = (rowIndexToRemove: number) => {
        const updatedTableData = tableData.filter((_, index) => index !== rowIndexToRemove);
        setTableData(updatedTableData);
    };

    const sumArrayItems = (arr: number[]): number => {
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum;
    }

    const roundToTwoDecimalPlaces = (num: number): number => {
        return Math.round(num * 100) / 100;
    }

    const handleAddCourse = (e: any) => {
        e.preventDefault()

        if (!gradePoint || !creditUnit || !courseCode) return;

        // ! Change both lines below to useState.
        gradePoints.push(+gradePoint)
        creditUnits.push(+creditUnit)

        addTableRow()

        clearInputFields()
    }

    const handleCgpaCalculation = (e: any) => {
        e.preventDefault()

        for (let i = 0; i < creditUnits.length; i++) {
            totalCreditPoint.push(creditUnits[i] * gradePoints[i])
        }

        const sumOfTotalCreditPoint = sumArrayItems(totalCreditPoint)

        const totalCreditUnits = sumArrayItems(creditUnits)

        const total = sumOfTotalCreditPoint / totalCreditUnits

        setGpa(roundToTwoDecimalPlaces(parseFloat(total.toFixed(2))))

        setResult(determineStudentClass(roundToTwoDecimalPlaces(parseFloat(total.toFixed(2)))));
    }

    const resetCalculator = (e: any) => {
        e.preventDefault()

        setTableData([]);
        setCourseCode("");
        setGradePoint("");
        setCreditUnit("");
        setResult("");
        setGpa(0);
    }

    return (
        <form>
            <div className="flex w-full items-center justify-between mb-5">
                <h4 className="text-2xl md:text-3xl text-green-800 font-medium">Calculate CGPA</h4>
                <Button className='hidden md:flex btn-gradient rounded' onClick={handleAddCourse}>Add course</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-3 mb-5">
                <Input
                    className="rounded" placeholder="Course code. e.g: MTE102"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                />
                <Input
                    className="rounded"
                    type="number"
                    placeholder="Credit unit"
                    value={creditUnit}
                    onChange={(e) => setCreditUnit(e.target.value)}
                />
                <Input
                    className="rounded"
                    type="number"
                    placeholder="Grade Point"
                    value={gradePoint}
                    onChange={(e) => setGradePoint(e.target.value)}
                />
                <Button className='md:hidden btn-gradient rounded' onClick={handleAddCourse}>Add course</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-auto">

                <table className="col-span-3 w-full">
                    <thead>
                        <tr className="text-left bg-gray-100 rounded-2xl">
                            <th className="px-5 py-3">Course Codes</th>
                            <th className="px-5 py-3">Credit Units</th>
                            <th className="px-5 py-3">Grade Points</th>
                            <th className="px-5 py-3">Actions</th>

                        </tr>
                    </thead>
                    <tbody className="px-5">
                        {tableData.map((row, rowIndex) => (
                            <tr className="even:bg-gray-100" key={rowIndex}>
                                {row.map((column, columnIndex) => {
                                    const lastColumn = row.length - 1
                                    return <td
                                        key={columnIndex}
                                        onClick={() => lastColumn === columnIndex && handleRemoveCourse(rowIndex)}
                                        className={`px-5 py-1  ${lastColumn == columnIndex ? "lowercase text-red-500 hover:underline cursor-pointer" : "uppercase "}`}
                                    >{column}</td>
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div>
                {gpa != 0 &&
                    <div className="text-center font-semibold text-lg pt-3">
                        Total: {gpa}
                    </div>
                }
                {result && <div className="text-xs italic text-center">({result})</div>}
            </div>

            <div>
                {tableData.length > 0 ? <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-5 mt-3">
                    <Button
                        onClick={handleCgpaCalculation}
                        className="btn-gradient w-full md:w-2/3 rounded"
                    >Calculate GPA</Button>
                    <Button
                        onClick={resetCalculator}
                        className="bg-yellow-300 w-full md:w-1/3 rounded hover:bg-yellow-400"
                    >Reset</Button>

                </div> : <div className="text-center text-gray-500 italic mt-3">Input a value to be able to perform operation</div>}
            </div>
        </form>
    );
};

export default CgpaCalculatorForm;
