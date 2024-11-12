// model để tính chu vi và diện tích hình vuông								
class Square {								
    constructor(sideLength) {								
    this.sideLength = sideLength;								
    }								
                                    
    getPerimeter() {								
    return 4 * this.sideLength;								
    }								
                                    
    getArea() {								
    return this.sideLength * this.sideLength;								
    }								
}								
                                    
    module.exports = Square;
    
    const mysql = require('mysql2');
    require('dotenv').config();

    const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });


