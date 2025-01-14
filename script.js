body {
    font-family: Arial, sans-serif;
    background: url('https://www.w3schools.com/w3images/cherryblossom.jpg') no-repeat center center fixed;
    background-size: cover;
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
}

header {
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    font-size: 36px;
    color: #FFD700;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
}

.project-box {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    margin: 15px;
    padding: 15px;
    width: 250px;
    text-align: center;
    transition: all 0.3s ease;
}

.project-box:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.5);
}

.project-box img {
    width: 50px;
    height: 50px;
}

.project-name {
    margin-top: 10px;
    font-size: 20px;
    color: #FFD700;
    text-decoration: none;
}

.project-name:hover {
    text-decoration: underline;
}

.calendar {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 20px;
    margin-top: 20px;
    display: inline-block;
}

.calendar p {
    font-size: 20px;
}

.clock {
    font-size: 30px;
    font-weight: bold;
}

footer {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    margin-top: 20px;
}