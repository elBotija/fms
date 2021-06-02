const conditions = [
    {
        'field': 'asd',
        'equal': 'dsa'
    },
    {
        'field': 'qwe',
        'gt': 5
    },
    {
        'field': 'rty',
        'required': true,
    }
];

const conditions2 = [
    {
        'field': 'asd',
        'equal': 'dfgdfg'
    },
];

const ans1 = {
    asd: 'dsa',
};

const ans2 = {
    asd: 'qwe',
    qwe: 10,
    rty: 'qweqweqe',
};

const ans3 = {
    asd: 'dsa',
    qwe: 10,
    rty: 'dsa',
};

const check = (cond) => {
    return (response) => {
        let allRes = true;
        for (let i = 0; i < cond.length; i++) {
            let val = response[cond[i].field];
            let ks = Object.keys(cond[i]);
            let res = true;
            for (let j = 0; j < ks.length; j++) {
                switch (ks[j]) {
                    case 'equal':
                        if ( val != cond[i][ks[j]] ) {
                            res = false;
                        }
                    break;
                    case 'gt':
                        if ( val <= cond[i][ks[j]] ) {
                            res = false;
                        }
                    break;
                    case 'required':
                        if ( !val ) {
                            res = false;
                        }
                    break;
                }
            }
            allRes = allRes && res;
        }
        return allRes;
    }
}

const axiosDoSomething = (req, fn) => {
    // req() -> ans X
    const response = req;
    return fn(response);
}

const main = () => {
    let tests = [ans1, ans2, ans3];
    let results = [false, false, true];
    let results2 = [false, false, false];
    for (let i = 0; i < tests.length; i++) {
        // Test cond1 
        if (axiosDoSomething(tests[i], check(conditions)) != results[i]) {
            console.log('ERROR IN TEST', i);
        }

        // test cond2
        if (axiosDoSomething(tests[i], check(conditions2)) != results2[i]) {
            console.log('ERROR IN TEST 2', i);
        }
    }
}

main();
