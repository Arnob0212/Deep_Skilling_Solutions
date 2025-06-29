CREATE PROCEDURE sp_CountEmployeesByDepartment
    @DeptID INT
AS
BEGIN
    SELECT 
        COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DeptID;
END;
 

EXEC sp_CountEmployeesByDepartment @DeptID = 3;
