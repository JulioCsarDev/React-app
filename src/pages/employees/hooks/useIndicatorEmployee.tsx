import { useState, useEffect } from "react";
import axios from "axios";
import { EmployeesModel } from "../models/employees.models";


export const useIndicatorEmployee = () => {
    const [employees, setEmployees] = useState<EmployeesModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const indicators = ["CASH", "SAC", "CHECK", "MOD", "ER", "PARADAS", "PERFORMANCE"];

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                setLoading(true);
                const response = await axios.get<EmployeesModel[]>("/api/employees"); // Replace with your API endpoint
                setEmployees(response.data);
            } catch (err) {
                setError("Error fetching employee indicators");
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    return { employees, loading, error, indicators };
};