import bcrypt from "bcryptjs";

const users=[
    {
        name:'Admin User',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Bob Dobbs',
        email:'bob@bob.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'Demo User',
        email:'demo@demo.com',
        password:bcrypt.hashSync('demouser',10),
    }
];

export default users;