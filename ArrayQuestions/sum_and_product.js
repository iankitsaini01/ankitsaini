function arrayOps() {
    let array = [0,1,2,0,7,8,9,8,7,6,5,4,3,3]
        let sum = 0;
        let product = 1;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            if (array[i]== 0) {
            array[i] = 1;
            product *= array[i];
            }
            product *= array[i];
        }
        console.log(sum, product)
    }

    