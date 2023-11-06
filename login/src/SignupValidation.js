

function Validation(values)
                {
    let error = {}
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9.]{8,}$/


    if(values.name === "") {
        error.name ="Name Should not be empty"
    }
    else {
        error.name =""
    }

    if(values.email === "") {
        error.email ="Email Should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email ="Enter valid email"
    }else {
        error.email =""
    }
    if(values.password === "") {
        error.password ="password Should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password ="password must contain 1 uppercase letter 1 lowercase and number"
    }else {
        error.password =""
    }
    return error;

}

export default Validation;
