* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    width: 100%;
    text-align: center;
    padding: 30px 10px;
    background-color: #0a192f;
}

header h1 {
    font-size: 3rem;
    color: #00bfff;
}

header p {
    margin-top: 8px;
    font-size: 1.2rem;
    color: #d0e7ff;
}

section {
    width: 70%;
    max-width: 900px;
    padding: 30px 0; 
    text-align: center;
}

h2 {
    color: #00bfff;
    margin-bottom: 15px;
    border-bottom: 2px solid #00bfff;
    display: inline-block;
    padding-bottom: 4px;
}

.card {
    background-color: #112240;
    padding: 15px; 
    border-radius: 8px;
    margin-bottom: 15px;
    box-shadow: 0 0 12px rgba(0, 191, 255, 0.3);
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.02);
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin: 8px 0;
}

.contact-info {
    font-size: 1.1rem;
    margin-bottom: 15px;
}

form {
    background-color: #112240;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 12px rgba(0, 191, 255, 0.3);
}

input {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: none;
    border-radius: 5px;
}

button {
    background-color: #00bfff;
    color: black;
    padding: 8px 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background-color: #009acd;
}

footer {
    width: 100%;
    text-align: center;
    padding: 15px;
    background-color: #0a192f;
    margin-top: 20px;

}
