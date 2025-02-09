// Save student ***************************************************************************
function saveStudent() {
    let name = $('#name').val();
    let marks = $('#marks').val();

    $.ajax({
        url: `http://localhost:8080/students/addStudents`,
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({ name, mark: marks }), // sending data
        success: function () {
            findStudent();  // Refresh the list after saving
        },
        error: function (xhr) {
            console.error("Error:", xhr.responseText);
        }
    });

    clearFields();
    findStudent()
}

// Update student *************************************************************************************************
function updateStudent() {
    let id = $('#id').val();
    let name = $('#name').val();
    let marks = $('#marks').val();

    $.ajax({
        url: `http://localhost:8080/students/updateStudent`,
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify({ id, name, mark: marks }), // sending data
        success: function () {
            findStudent();  // Refresh the list after updating
        },
        error: function (xhr) {
            console.error("Error:", xhr.responseText);

        }
    });

    clearFields();
    findStudent()// Clear the form after updating
}

// Delete student function
function deleteStudent() {
    let id = $('#id').val();

    $.ajax({
        url: `http://localhost:8080/students/delete/${id}`,
        type: "DELETE",
        success: function () {
            findStudent();  // Refresh the list after deletion
        },
        error: function (xhr) {
            console.error("Error:", xhr.responseText);
        }
    });

    clearFields();
    findStudent()// Clear the form after deletion
}

/*************************************************************************************************************/

// Fetch all students and display them in a table
function findStudent() {
    $.ajax({
        url: "http://localhost:8080/students/getStudent",  // Update to correct endpoint
        type: "GET",
        success: function (data) {
            if (data && data.length > 0) {
                $('#studentTable').empty();  // Clear existing table data

                // Loop through students and append them to the table
                for (let stu of data) {
                    let stuID = stu.id;
                    let stuName = stu.name;
                    let stuMarks = stu.mark;

                    // Creating a new row for each student
                    let row = `<tr>
                                  <td>${stuID}</td>
                                  <td>${stuName}</td>
                                  <td>${stuMarks}</td>
                              </tr>`;

                    $('#studentTable').append(row);  // Append row to the table
                }


            }
        },
        error: function (xhr) {
            console.error("Error:", xhr.responseText);
            alert("Failed to fetch students");
        }
    });
}


// Clear the form fields
function clearFields() {
    $('#myForm')[0].reset();
    $('#deleteForm')[0].reset(); // Reset the form fields
}
