"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const gradePoints: number[] = []
const creditUnits: number[] = []
// const gpa: number[] = []

const CgpaCalculatorForm = () => {
    const [courseCode, setCourseCode] = useState("")
    const [gradePoint, setGradePoint] = useState("")
    const [creditUnit, setCreditUnit] = useState("");

    const [gpa, setGpa] = useState(0);

    const [tableData, setTableData] = useState<Array<Array<string>>>([]);

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

        gradePoints.push(+gradePoint)
        creditUnits.push(+creditUnit)

        console.log(gradePoints, creditUnits)

        addTableRow()

        clearInputFields()
    }

    const handleCgpaCalculation = (e: any) => {
        e.preventDefault()
        const totalCreditUnits = sumArrayItems(creditUnits)
        const totalGradePoints = sumArrayItems(gradePoints)

        const total = totalGradePoints / totalCreditUnits
        // gpa.push(total)

        setGpa(roundToTwoDecimalPlaces(total))
    }

    return (
        <form>
            <div className="flex w-full justify-between mb-5">
                <h4 className="text-3xl text-green-800 font-medium">Calculate CGPA</h4>
                <Button className='btn-gradient rounded' onClick={handleAddCourse}>Add course</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                    <tfoot>
                        <tr className="col-span-3 mt-5">
                            <td>
                                Total: {gpa}
                            </td>
                        </tr>
                    </tfoot>
                </table>
                {tableData.length > 0 && <div></div>}

            </div>
        </form>
    );
};

export default CgpaCalculatorForm;
