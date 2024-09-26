export function login(email, password) {
    if ((email === "admin@gmail.com") && (password === "Admin@123"))
        return true;
    else
        return false;
}