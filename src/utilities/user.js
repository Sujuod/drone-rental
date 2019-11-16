const getUsers = () => localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];

const isEmailRegistered = (email) => {
    const usersList = getUsers();
    return usersList.some(user => user.email === email);
}

// check if users available in the local storage : 
export const register = (user) => {
    const usersList = getUsers()
    // Check if user already registered
    if (isEmailRegistered(user.email)) {
        return false;
    }
    usersList.push(user);
    localStorage.setItem("Users", JSON.stringify(usersList));
    localStorage.setItem("loggedin", user.email);
    return true;
}

export const login = (email) => {
    if (isEmailRegistered(email)) {
        localStorage.setItem("loggedin", email);
        return true;
    } else {
        return false
    }
}

export const getLoggedInUser = () => localStorage.getItem("loggedin")

export const getBanndedUsers = () => localStorage.getItem("bannedUsers") ? JSON.parse(localStorage.getItem("bannedUsers")) : []

export const markUserAsBanned = () => {
    const banndedUsers = getBanndedUsers();
    banndedUsers.push(getLoggedInUser());
    localStorage.setItem("bannedUsers", JSON.stringify(banndedUsers));

}

export const isUserBanned = () => {
    const res = getBanndedUsers().includes(getLoggedInUser());
    return res;
}

export const getFirstName = () => {
    const users = getUsers();
    const user = users.find((user) => user.email === getLoggedInUser());
    return user ? user.firstName : '';
}
