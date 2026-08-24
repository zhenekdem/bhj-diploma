/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    
    const { url, method, data, callback } = options;
    
    let targetUrl = url;
    let formData = null;

    if (method === 'GET') {
        if (data && Object.keys(data).length > 0) {
            const urlParams = new URLSearchParams(data).toString();
            targetUrl += `?${urlParams}`;
        }
    } else {
        formData = new FormData();
        if (data) {
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
        }
    }


    try {
        xhr.open(method, targetUrl);
        xhr.send(formData);
    } catch (error) {
        callback(error);
        return;
    }

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            callback(null, xhr.response);
        } else {
            callback(new Error(`Ошибка сервера: ${xhr.status}`), xhr.response);
        }
    };

    xhr.onerror = () => {
        callback(new Error('Ошибка соединения с сетью'));
    };
};