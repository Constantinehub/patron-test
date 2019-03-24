'use strict';

function getResult(str) {
    let inData = [];
    let result = [];
    let args = str.split("\/\/");
    let objectKeys = args[0].split('\/');
    args.splice(0, 1);
    args.forEach((item) => {
        inData.push(item.split('\/'));
    });

    inData.reduce((prev, current) => {
        let object = {};
        for (let i = 0; i < objectKeys.length; i++) {
            object[objectKeys[i]] = current[i];
        }
        result.push(object);
    }, []);
    console.log(result);
}

getResult('name\/surname\/birthday\/status\/\/vasya\/petechkin\/10.10.1910\/0\/\/alex\/p\/10.11.1991\/1\/\/pisun\/prostoy\/1.1.1\/-1');
