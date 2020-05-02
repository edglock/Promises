console.log('Sending request...');

// setTimeout(() => {
//     console.log('Preparing data...');
//     const backendData = {
//         serverType: 'aws',
//         port: 2000,
//         isModified: false
//     };
//     setTimeout(() => {
//         backendData.isModified = true;
//         console.log('Data received', backendData);
//     }, 3000);
// }, 2000);

const requestData = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Preparing data...");
        const backendData = {
            serverType: 'aws',
            port: 2000,
            isModified: false
        };
        resolve(backendData);
    }, 2000);
}).then(data => {
    setTimeout(() => {
        data.isModified = true;
        console.log("Data received", data);
    }, 3000);
}).catch(err => {
    console.error("Error", err);
}).finally(() => {
    console.log("Code that will be processed anyway");
});