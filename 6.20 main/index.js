document.getElementById("get-button").addEventListener("click", xmlGetData);
document.getElementById("post-button").addEventListener("click", xmlPostData);
const url = "https://6916fdfea7a34288a27f29b1.mockapi.io/api/v1/todos";


async function fetchData() {
    try {

        const response = await fetch(url);


        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("Пользователь не авторизован")
            } else if (response.status === 404) {
                throw new Error(`Ресурсы не найден, ${response.status}`);
            } else if (response.status === 500) {
                throw new Error("ошибка ответа сервера");
            } else {
                throw new Error(`ошибка HTTP:, ${response.status}`)
            }
        }


        const data = await response.json();
        console.log("Данные получены:", data);
    } catch (error) {
        throw error;
    }
}

async function xmlGetData() {
    const request = new XMLHttpRequest();

    request.open("GET", url);

    request.responseType = "json";

    request.timeout === 5000;

    request.send();

    request.onload = () => {
        if (request.status === 200) {
            const data = request.response;
            console.log(data);
        } else {
            console.error("ошибка при загрузки данных: ", request.statusText);
        }
    };

    request.onerror = () => {
        console.error("Ошибка сети");
    }

    request.ontimeout = () => {
        console.error("Запрос превысил время ожидания. Проверьте подключение к интернету");
    };
};


async function xmlPostData() {
    const request = new XMLHttpRequest();

    request.open("POST", `url/${id}`);

    request.setRequestHeader('Content-Type', "appication/json");

    request.responseType = "json";

    request.timeout === 5000;

    const dataToSend = {
        id: "5",
        completed: false,
        createdAt: new Date().getTime(),
        order: 5,
        text: "выгулить собаку",
    };

    request.send(JSON.stringify(dataToSend))
    request.onload = () => {
        if (request.status === 201) {
            const responseData = request.response;
            console.log("Данные успешно отправлены: ", responseData);
        } else {
            console.error("Ошибка при отправке данных: ", request.statusText);
        }
    };

    request.onerror = () => {
        console.error("Ошибка сети: не удается установить соединение с сервером");
    }

    request.ontimeout = () => {
        console.error("Запрос превысил время ожидания. Проверьте подключение к интернету");
    };
}